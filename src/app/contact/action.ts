'use server';

import createClient from '@/config/supabase/client';
import { ContactFormData } from '../types';
import { revalidatePath } from 'next/cache';

export async function getContactUser() {
  const supabase = createClient();
  try {
    const { data: contactUser, error } = await supabase
      .from('contactUser')
      .select()
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    return contactUser;
  } catch (error) {
    throw error;
  }
}

export const add = async (formData: Omit<ContactFormData, 'consent'>) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from('contactUser').insert(formData);

    if (error) {
      throw error;
    }
    revalidatePath('/admin');
    return data;
  } catch (error) {
    throw error;
  }
};
