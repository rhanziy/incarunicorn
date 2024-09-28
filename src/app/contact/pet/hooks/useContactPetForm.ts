import { sendPetEmail } from '@/app/lib/sendEmail';
import { ContactPetFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent } from 'react';
import useLoadingStore from '@/app/components/loading/_store';
import { add } from '@/app/contact/action';
import useModalStore from '@/app/components/modal/_store';

interface Errors {
  phoneNumber: string;
}

export const useContactPetForm = () => {
  const { setIsLoading } = useLoadingStore();
  const { setOpenModal } = useModalStore();
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

  const handleSubmit = async () => {
    setIsLoading(true);
    const { consent, ...data } = formData;

    const formattedData = {
      ...data,
      petAge: String(formData.petAge),
    };

    try {
      await Promise.all([sendPetEmail(formData), add(data, 'contactPet')]);

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

      handleModal(true);
    } catch (error) {
      console.error(error);
      alert('다시 시도해주세요.');
    } finally {
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
  };
};
