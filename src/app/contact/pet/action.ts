import { ContactPetFormData } from '@/app/types';
import createClient from '@/config/supabase/client';
import { revalidatePath } from 'next/cache';

export async function getContactPet() {
  const supabase = createClient();
  try {
    const { data: contactPet, error } = await supabase
      .from('contactPet')
      .select()
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    return contactPet;
  } catch (error) {
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
    return data;
  } catch (error) {
    throw error;
  }
};
