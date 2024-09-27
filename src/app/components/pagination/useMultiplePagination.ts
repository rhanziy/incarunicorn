'use client';
import { fetchPageData } from '@/app/components/pagination/action';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useMultiplePagination = <T>(
  table: string,
  totalItems: number,
  multiParam: string,
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemCountPerPage = 10;
  const pageCount = Math.ceil(totalItems / itemCountPerPage);
  const pageParam = Number(searchParams.get(multiParam)) || 1;
  const currentPage = Math.min(pageParam, pageCount || 1);

  const [fetchData, setFetchData] = useState<T[]>([]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set(multiParam, String(page));
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const lists: T[] = await fetchPageData(
          table,
          totalItems,
          currentPage,
          itemCountPerPage,
        );
        setFetchData(lists);
      } catch (error) {
        console.error('Error fetching list', error);
      }
    };
    fetch();
  }, [table, currentPage, totalItems]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
    fetchData,
  };
};

export default useMultiplePagination;
