'use server';

import createClient from '@/config/supabase/client';
import { revalidatePath } from 'next/cache';

export interface WriteReviewData {
  age: string;
  gender: string;
  nickname: string;
  password: string;
  category: string;
  content: string;
  date: string;
}

export async function write(formData: WriteReviewData) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from('reviews').insert(formData);

    if (error) {
      console.log(error);
    }
    revalidatePath('/reviews');
    revalidatePath('/');
    return data;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}

export async function remove(id: number) {
  const supabase = createClient();
  try {
    const { error } = await supabase.from('reviews').delete().eq('id', id);

    if (error) {
      console.log(error);
    }
    revalidatePath('/reviews');
    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
}

export async function getReviews() {
  const supabase = createClient();
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .select()
      .order('date', { ascending: false });

    if (error) {
      throw error;
    }
    return reviews;
  } catch (error) {
    throw error;
  }
}
