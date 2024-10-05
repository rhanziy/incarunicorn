import { sendPetEmail } from '@/app/lib/sendEmail';
import { ContactPetFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent } from 'react';
import useLoadingStore from '@/app/components/loading/_store';
import { add } from '@/app/contact/action';
import useModalStore from '@/app/components/modal/_store';

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

  const [errors, setErrors] = useState<
    Omit<ContactPetFormData, 'petAge' | 'petGender' | 'petName' | 'petType'>
  >({
    name: '',
    telecom: '',
    phoneNumber: '',
    consent: false,
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

    switch (name) {
      case 'name':
        if (!value) {
          error = '이름을 입력해주세요.';
        }
        break;
      case 'phoneNumber':
        if (!/^\d{11}$/.test(value)) {
          error = '핸드폰 번호는 11자리 숫자여야 합니다.';
        }
        break;
      case 'consent':
        if (!value) {
          error = '개인정보 제공 동의를 하셔야 합니다.';
        }
        break;
      case 'telecom':
        if (!value) {
          error = '통신사를 선택해주세요.';
        }
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let newErrors = {
      name: '',
      telecom: '',
      phoneNumber: '',
      consent: false,
    };

    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.telecom) {
      newErrors.telecom = '통신사를 선택해주세요.';
    }

    if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = '핸드폰 번호는 11자리 숫자여야 합니다.';
    }
    if (!formData.consent) {
      newErrors.consent = true;
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(
      (error) => error === '' || error === false,
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const { consent, ...data } = formData;

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
