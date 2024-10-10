'use server';

import createClient from '@/config/supabase/client';
import { ITEMCOUNTPERPAGE } from '@/constants';
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

    revalidatePath('reviews');
    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
}

export async function getMainReviews() {
  const supabase = createClient();
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .select('id, created_at, age, gender, nickname, category, content, date')
      .order('date', { ascending: false })
      .limit(5);

    if (error) {
      throw error;
    }
    return reviews;
  } catch (error) {
    throw error;
  }
}

export async function getReviews1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockReviews = {
        data: [],
        count: 0,
      };
      resolve(mockReviews);
    }, 2000); // 2초 지연
  });
}

export async function getReviews(page: number = 1) {
  const supabase = createClient();

  try {
    const { data, count } = await supabase
      .from('reviews')
      .select(
        'id, created_at, age, gender, nickname, category, content, date',
        { count: 'exact' },
      )
      .order('created_at', { ascending: false })
      .range((page - 1) * ITEMCOUNTPERPAGE, page * ITEMCOUNTPERPAGE - 1);

    if (!count) {
      return { data: [], count: 0 };
    }
    return { data, count };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
