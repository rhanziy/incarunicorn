'use client';
import { fetchPageData } from '@/app/components/pagination/action';
import { useParams } from '@/app/hooks/useParams';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useMultiplePagination = <T>(
  table: string,
  totalCount: number,
  paramKeyword: string,
) => {
  const router = useRouter();
  const { getParams, currentPage } = useParams(paramKeyword);
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);

  const [fetchData, setFetchData] = useState<T[]>([]);

  const handlePageChange = (page: number) => {
    getParams.set(paramKeyword, String(page));
    router.push(`?${getParams.toString()}`);
  };

  useEffect(() => {
    if (currentPage > pageCount) {
      getParams.set(paramKeyword, pageCount.toString());
      router.push(`?${getParams.toString()}`);
    }
  }, [currentPage, paramKeyword]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const lists: T[] = await fetchPageData(table, currentPage);
        setFetchData(lists);
      } catch (error) {
        console.error('Error fetching list', error);
      }
    };
    fetch();
  }, [table, currentPage, totalCount]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
    fetchData,
  };
};

export default useMultiplePagination;
