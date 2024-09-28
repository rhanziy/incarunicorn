'use server';

import createClient from '@/config/supabase/client';
import { ContactFormData } from '../types';
import { revalidatePath } from 'next/cache';

export async function getContactUser() {
  const supabase = createClient();
  try {
    const { data: contactUser, count } = await supabase
      .from('contactUser')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (count === null) {
      return { contactUser: [], count: 0 };
    }

    return { contactUser, count };
  } catch (error) {
    console.log(error);
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
    console.debug(data);
  } catch (error) {
    throw error;
  }
};
