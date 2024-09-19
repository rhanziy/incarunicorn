import { hashPassword } from '@/app/lib/hash';
import { SelectChangeEvent } from '@mui/material';
import dayjs from 'dayjs';
import { ChangeEvent, FormEvent, useState } from 'react';
import { WriteReviewData, write } from '../action';

const initialFormData: WriteReviewData = {
  age: '',
  gender: '',
  nickname: '',
  password: '',
  category: '',
  content: '',
  date: dayjs(new Date()).format('YYYY-MM-DD'),
};

const useWriteReviewForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<WriteReviewData>(initialFormData);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { password, ...data } = formData;
      const hashedPassword = await hashPassword(password);

      await write({
        password: hashedPassword,
        ...data,
      });
      setFormData(initialFormData);
      alert('리뷰가 작성되었습니다!');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('다시 시도해주세요.');
    }
  };

  return {
    loading,
    formData,
    handleSelectChange,
    handleTextChange,
    handleSubmit,
  };
};

export default useWriteReviewForm;
