import { sendPetEmail } from '@/app/lib/sendEmail';
import { ContactPetFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent, ChangeEvent } from 'react';
import { addPet } from '../action';

interface Errors {
  phoneNumber: string;
}

export const useContactPetForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactPetFormData>({
    name: '',
    telecom: '',
    phoneNumber: '',
    petAge: '',
    petName: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Errors>({
    phoneNumber: '',
  });

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      [name!]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name!]: '',
    }));
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'phoneNumber') {
      if (!/^\d{11}$/.test(value)) {
        error = '핸드폰 번호는 11자리 숫자여야 합니다.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const { consent, ...data } = formData;

    try {
      const [emailResponse, dbResponse] = await Promise.all([
        sendPetEmail(formData),
        addPet(data),
      ]);

      alert('문의가 접수되었습니다!');
      setLoading(false);
      window.location.reload();

      return {
        message: '이메일 전송 및 데이터베이스 삽입 성공',
        emailResponse,
        dbResponse,
      };
    } catch (error) {
      console.error(error);
      alert('다시 시도해주세요.');
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
    loading,
  };
};
