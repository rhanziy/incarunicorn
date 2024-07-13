"use server";
import nodemailer from "nodemailer";
import { ContactFormData } from "../types";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_KEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (formData: Omit<ContactFormData, "consent">) => {
  const { category, job, name, telecom, phoneNumber, ssn, text } = formData;

  let mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_USER,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: category,
    html: `<p>${name} / ${job} / ${ssn}</p>
    <p>${telecom} ${phoneNumber}</p>
    <p>${text}</p>`,
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.response);
        return { message: "이메일 전송 성공" };
      }
    });
  });
};
