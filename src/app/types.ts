export interface IReview {
  id?: number;
  age: string;
  gender: string;
  nickname: string;
  content: string;
  category: string;
  password?: string;
  date: string;
}

export interface FormData {
  category: "join" | "inquiry" | "check" | "claim" | "question";
  name: string;
  telecom: string;
  phoneNumber: string;
  ssn: string;
  text: string;
  consent: boolean;
}
