'use server';
import createClient from '@/config/supabase/client';

export async function fetchPageData(
  table: string,
  totalItems: number,
  currentPage: number,
  limit: number,
) {
  const supabase = createClient();
  const from = (currentPage - 1) * limit;
  const to = Math.min(from + limit - 1, totalItems - 1);

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
