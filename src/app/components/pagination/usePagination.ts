'use client';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const usePagination = (totalCount: number, keyword = 'page') => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);
  const getParams = new URLSearchParams(searchParams.toString() || '');
  const currentPage = Number(searchParams.get(keyword)) || 1;

  const handlePageChange = (page: number) => {
    getParams.set(keyword, page.toString());
    router.push(`?${getParams.toString()}`);
  };

  useEffect(() => {
    if (pageCount !== 0 && currentPage > pageCount) {
      getParams.set(keyword, pageCount.toString());
      router.push(`?${getParams.toString()}`);
    }
  }, [keyword, currentPage]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
  };
};

export default usePagination;
