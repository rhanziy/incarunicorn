'use server';
import createClient from '@/config/supabase/client';
import { ITEMCOUNTPERPAGE } from '@/constants';

export async function fetchPageData(table: string, currentPage: number) {
  const supabase = createClient();

  const from = (currentPage - 1) * ITEMCOUNTPERPAGE;
  const to = from + ITEMCOUNTPERPAGE - 1;

  try {
    const { data: items, error } = await supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
}
