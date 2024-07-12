"use server";

import nodemailer from "nodemailer";
import { ContactFormData } from "../types";
import { getCategoryString } from "../reviews/components/ReviewComponent";

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

export const sendEmail = async (formData: ContactFormData) => {
  const { category, name, telecom, phoneNumber, ssn, text } = formData;

  let mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_USER,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: category,
    html: `<p>${name} / ${ssn}</p>
    <p>${telecom} ${phoneNumber}</p>
    <p>${text}</p>`,
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.response);
        return { message: "이메일 전송 성공" };
      }
    });
  });
};
