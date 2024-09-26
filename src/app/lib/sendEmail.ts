'use server';

import nodemailer from 'nodemailer';
import { ContactFormData, ContactPetFormData } from '../types';

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
    <p>연락처: ${telecom} / <a href='tel:${phoneNumber}'>${phoneNumber}</a></p>
    <p>문의내용: ${text}</p>`,
  };

  try {
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('success:', info.response);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const sendPetEmail = async (formData: ContactPetFormData) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_USER,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: '펫 보험 문의',
    html: `<p>이름: ${formData.name}</p> <p>반려동물 정보: ${formData.petType} / ${formData.petName} / ${formData.petGender}아 / 만 ${formData.petAge}세</p>
    <p>연락처: ${formData.telecom} / <a href='tel:${formData.phoneNumber}'>${formData.phoneNumber}</a></p>
 `,
  };

  try {
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('success:', info.response);
      }
    });
  } catch (err) {
    console.error(err);
  }
};
