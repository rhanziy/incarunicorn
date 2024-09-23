export interface IReview {
  id: number;
  age: string;
  gender: string;
  nickname: string;
  content: string;
  category: string;
  password: string;
  date: string;
}

export interface ContactFormData {
  category: 'join' | 'inquiry' | 'check' | 'claim' | 'question' | string;
  name: string;
  job: string;
  telecom: string;
  phoneNumber: string;
  ssn: string;
  text: string;
  consent: boolean;
}

export interface ContactPetFormData {
  name: string;
  petName: string;
  petAge: string;
  telecom: string;
  phoneNumber: string;
  consent: boolean;
}
