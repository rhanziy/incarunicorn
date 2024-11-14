import { ContactFormData } from '@/app/types';
import { SelectChangeEvent } from '@mui/material';
import { useState, FocusEvent } from 'react';
import { add } from '@/app/contact/action';
import useLoadingStore from '@/app/components/loading/_store';

interface Errors {
  phoneNumber: string;
  ssn: string;
}

export const useContactForm = () => {
  const { setIsLoading } = useLoadingStore();
  const [formData, setFormData] = useState<ContactFormData>({
    category: 'join',
    name: '',
    job: '',
    telecom: '',
    phoneNumber: '',
    ssn: '',
    text: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Errors>({
    phoneNumber: '',
    ssn: '',
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
    } else if (name === 'ssn') {
      if (!/^\d{6}-\d{7}$/.test(value)) {
        error = '주민등록번호는 "-" 포함 13자리여야 합니다.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // const title = getCategoryString(formData.category);
    // await Promise.all([sendEmail({ category: title, ...data }), ...]),
    const { category, consent, ...data } = formData;
    try {
      await add({ category, ...data }, 'contactUser'),
        setFormData({
          category: 'join',
          name: '',
          job: '',
          telecom: '',
          phoneNumber: '',
          ssn: '',
          text: '',
          consent: false,
        });

      alert('문의가 접수되었습니다!');
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
