'use client';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

const usePagination = (totalCount: number, keyword = 'page') => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);
  const currentPage = Number(searchParams.get(keyword)) || 1;

  const handlePageChange = useCallback(
    (page: number) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(keyword, page.toString());
      router.push(`?${newParams.toString()}`);
    },
    [searchParams, keyword, router],
  );

  useEffect(() => {
    if (pageCount !== 0 && currentPage > pageCount) {
      handlePageChange(pageCount);
    }
  }, [currentPage, handlePageChange, pageCount]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
  };
};

export default usePagination;
