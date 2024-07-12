import { sendEmail } from "@/app/lib/sendEmail";
import { ContactFormData } from "@/app/types";
import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";

interface Errors {
  phoneNumber: string;
  ssn: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    category: "join",
    name: "",
    telecom: "",
    phoneNumber: "",
    ssn: "",
    text: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Errors>({
    phoneNumber: "",
    ssn: "",
  });

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name!]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name!]: "",
    }));
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "phoneNumber") {
      if (!/^\d{11}$/.test(value)) {
        error = "핸드폰 번호는 11자리 숫자여야 합니다.";
      }
    } else if (name === "ssn") {
      if (!/^\d{6}-\d{7}$/.test(value)) {
        error = '주민등록번호는 "-" 포함 13자리여야 합니다.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.phoneNumber || !/^\d{11}$/.test(formData.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "핸드폰 번호는 11자리 숫자여야 합니다.",
      }));
      return;
    }

    if (!formData.ssn || !/^\d{6}-\d{7}$/.test(formData.ssn)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ssn: '주민등록번호는 "-" 포함 13자리여야 합니다.',
      }));
      return;
    }

    try {
      await sendEmail(formData);
      alert("문의가 접수되었습니다!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("다시 시도해주세요.");
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
