import { sendPetEmail } from '@/app/lib/sendEmail';
import { ContactPetFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent, FormEvent } from 'react';
import useLoadingStore from '@/app/components/loading/_store';
import { add } from '../action';

interface Errors {
  phoneNumber: string;
}

export const useContactPetForm = () => {
  const { setIsLoading } = useLoadingStore();
  const [formData, setFormData] = useState<ContactPetFormData>({
    name: '',
    telecom: '',
    phoneNumber: '',
    petAge: '',
    petName: '',
    petType: '',
    petGender: '',
    consent: false,
  });
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (open: boolean) => {
    setOpenModal(open);
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { consent, ...data } = formData;

    const formattedData = {
      ...data,
      petAge: String(formData.petAge),
    };

    try {
      const [emailResponse, dbResponse] = await Promise.all([
        sendPetEmail(formData),
        add(formattedData),
      ]);

      setIsLoading(false);
      handleModal(true);

      setFormData({
        name: '',
        telecom: '',
        phoneNumber: '',
        petAge: '',
        petName: '',
        petType: '',
        petGender: '',
        consent: false,
      });

      return {
        message: '이메일 전송 및 데이터베이스 삽입 성공',
        emailResponse,
        dbResponse,
      };
    } catch (error) {
      console.error(error);
      alert('다시 시도해주세요.');
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
    openModal,
    handleModal,
  };
};
