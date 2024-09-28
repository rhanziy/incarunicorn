'use server';

import { ContactPetFormData } from '@/app/types';
import createClient from '@/config/supabase/client';
import { revalidatePath } from 'next/cache';

export async function getContactPet() {
  const supabase = createClient();
  try {
    const { data: contactPet, count } = await supabase
      .from('contactPet')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });
    if (count === null) {
      return { contactPet: [], count: 0 };
    }
    return { contactPet, count };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const add = async (formData: Omit<ContactPetFormData, 'consent'>) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from('contactPet').insert(formData);

    if (error) {
      throw error;
    }

    revalidatePath('/admin');
    console.debug(data);
  } catch (error) {
    throw error;
  }
};
