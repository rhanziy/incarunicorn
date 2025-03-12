'use server';

import { supabase } from '@/config/supabase/client';
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

export async function getTotalReviewCount() {
  try {
    const { count } = await supabase
      .from('reviews')
      .select('*', { count: 'exact' });

    if (!count) {
      return 0;
    }
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getReviews(page: number = 1) {
  try {
    const { data, count } = await supabase
      .from('reviews')
      .select(
        'id, created_at, age, gender, nickname, category, content, date',
        { count: 'exact' },
      )
      .order('created_at', { ascending: false })
      .range((page - 1) * ITEMCOUNTPERPAGE, page * ITEMCOUNTPERPAGE - 1);

    if (!data || data.length === 0) {
      return { data: [], count: 0 };
    }
    return { data, count };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
