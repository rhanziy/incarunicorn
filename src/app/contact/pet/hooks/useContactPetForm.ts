import { ContactPetFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent } from 'react';
import useLoadingStore from '@/app/components/loading/_store';
import { add } from '@/app/contact/action';

export const useContactPetForm = () => {
  const { setIsLoading } = useLoadingStore();
  const [formData, setFormData] = useState<ContactPetFormData>({
    name: '',
    region: '',
    city: '',
    telecom: '',
    phoneNumber: '',
    petAge: '',
    petName: '',
    petType: '',
    petGender: '',
    consent: false,
  });

  const [phoneNumberError, setPhoneNumberError] = useState('');

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

    if (name === 'phoneNumber') {
      setPhoneNumberError('');
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      if (!/^\d{11}$/.test(value)) {
        setPhoneNumberError('핸드폰 번호는 11자리 숫자여야 합니다.');
      } else {
        setPhoneNumberError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneNumberError || !formData.consent) {
      return;
    }

    setIsLoading(true);
    const { consent, ...data } = formData;

    try {
      await add(data, 'contactPet');

      setFormData({
        name: '',
        region: '',
        city: '',
        telecom: '',
        phoneNumber: '',
        petAge: '',
        petName: '',
        petType: '',
        petGender: '',
        consent: false,
      });

      return true;
    } catch (error) {
      console.error(error);
      alert('다시 시도해주세요.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    phoneNumberError,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
  };
};
