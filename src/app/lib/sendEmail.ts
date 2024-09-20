'use server';

import nodemailer from 'nodemailer';
import { ContactFormData } from '../types';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
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

export const sendEmail = async (formData: Omit<ContactFormData, 'consent'>) => {
  const { category, job, name, telecom, phoneNumber, ssn, text } = formData;

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_USER,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: category,
    html: `<p>이름: ${name}</p> <p>직업: ${job}</p> <p>주민등록번호: ${ssn}</p>
    <p>${telecom} <a href='tel:${phoneNumber}'>${phoneNumber}</a></p>
    <p>문의내용: ${text}</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.response);
        return { message: '이메일 전송 성공' };
      }
    });
  });
};
