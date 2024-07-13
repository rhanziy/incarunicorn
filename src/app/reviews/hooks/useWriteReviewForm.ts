import { hashPassword } from "@/app/lib/hash";
import { SelectChangeEvent } from "@mui/material";
import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { WriteReviewData, write } from "../action";

const useWriteReviewForm = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<WriteReviewData>({
    age: "",
    gender: "",
    nickname: "",
    category: "",
    date: dayjs(new Date()).format("YYYY-MM-DD"),
    content: "",
    password: "",
  });

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

      alert("리뷰가 작성되었습니다!");
      setLoading(false);
      ref.current?.reset();
      window.location.reload();
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("다시 시도해주세요.");
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
