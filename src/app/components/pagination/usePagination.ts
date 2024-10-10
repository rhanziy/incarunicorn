'use client';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const usePagination = (totalCount: number, keyword = 'page') => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);

  const handlePageChange = useCallback(
    (page: number) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(keyword, page.toString());
      router.push(`?${newParams.toString()}`);
    },
    [searchParams, keyword, router],
  );

  return {
    handlePageChange,
    pageCount,
  };
};

export default usePagination;
