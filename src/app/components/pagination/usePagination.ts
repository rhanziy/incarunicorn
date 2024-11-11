'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const usePagination = (keyword = 'page') => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChange = useCallback(
    (page: number) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(keyword, page.toString());
      router.push(`?${newParams.toString()}`);
    },
    [searchParams, keyword, router],
  );

  return handlePageChange;
};

export default usePagination;
