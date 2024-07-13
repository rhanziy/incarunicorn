import { hashPassword } from "@/app/lib/hash";
import { SelectChangeEvent } from "@mui/material";
import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useState } from "react";
import { WriteReviewProps, write } from "../action";

const useWriteReviewForm = () => {
  const [formData, setFormData] = useState<WriteReviewProps>({
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

    try {
      const { password, ...data } = formData;
      const hashedPassword = await hashPassword(password);

      console.log(hashedPassword);
      await write({
        password: hashedPassword,
        ...data,
      });

      alert("리뷰가 작성되었습니다!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("다시 시도해주세요.");
    }
  };

  return { formData, handleSelectChange, handleTextChange, handleSubmit };
};

export default useWriteReviewForm;
