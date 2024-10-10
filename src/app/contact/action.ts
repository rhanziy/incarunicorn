'use server';

import createClient from '@/config/supabase/client';
import { ContactFormData, ContactPetFormData } from '../types';
import { revalidatePath } from 'next/cache';
import { ITEMCOUNTPERPAGE } from '@/constants';

export async function getContactData(
  tableName: 'contactUser' | 'contactPet',
  page = 1,
) {
  const supabase = createClient();
  try {
    const { data: contactData, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * ITEMCOUNTPERPAGE, page * ITEMCOUNTPERPAGE - 1);

    if (count === null) {
      return { contactData: [], count: 0 };
    }

    return { contactData, count };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExcelData(tableName: 'contactUser' | 'contactPet') {
  const supabase = createClient();
  try {
    const { data: contactData } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (contactData === null) {
      return { contactData: [] };
    }
    return { contactData };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

type ContactDataType =
  | Omit<ContactFormData, 'consent'>
  | Omit<ContactPetFormData, 'consent'>;

export const add = async (
  formData: ContactDataType,
  tableName: 'contactUser' | 'contactPet',
) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from(tableName).insert(formData);

    if (error) throw error;

    revalidatePath('/admin');
    console.debug('추가된 데이터:', data);
  } catch (error) {
    console.error('데이터 추가 오류:', error);
    throw error;
  }
};
