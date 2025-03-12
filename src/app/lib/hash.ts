'use server';

import { supabase } from '@/config/supabase/client';
import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const saltRound = 10;
  return bcrypt.hash(password, saltRound);
};

export const comparePassword = async (id: number, password: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('password')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('비밀번호를 가져오는 데 실패했습니다.');
  }

  return bcrypt.compare(password, data.password);
};
