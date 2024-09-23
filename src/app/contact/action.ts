'use server';

import createClient from '@/config/supabase/client';
import { ContactFormData, ContactPetFormData } from '../types';

export const add = async (formData: Omit<ContactFormData, 'consent'>) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from('contactUser').insert(formData);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
};
export const addPet = async (formData: Omit<ContactPetFormData, 'consent'>) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from('contactPet').insert(formData);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
};
