export interface IReview {
  id: number;
  age: string;
  gender: string;
  nickname: string;
  content: string;
  category: string;
  date: string;
}
export interface IContactUser extends Omit<ContactFormData, 'consent'> {
  created_at: string;
}
export interface IContactPet extends Omit<ContactPetFormData, 'consent'> {
  created_at: string;
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
  petType: string;
  petGender: string;
  telecom: string;
  phoneNumber: string;
  consent: boolean;
}

export interface Page<T> {
  pageSize: number;
  totalCount: number;
  totalPage: number;
  items: T[];
}
