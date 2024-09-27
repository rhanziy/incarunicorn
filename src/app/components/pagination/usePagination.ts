'use client';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const usePagination = (totalCount: number) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const getParams = new URLSearchParams(searchParams?.toString() || '');
  const pageParam = Number(searchParams.get('page')) || 1;
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);
  const currentPage = Math.min(pageParam, pageCount || 1);

  const handlePageChange = (page: number) => {
    getParams.set('page', page.toString());
    router.push(`?${getParams.toString()}`);
  };
  console.log(Number(searchParams?.get('page')));
  useEffect(() => {
    if (Number(searchParams?.get('page')) === 0) {
      getParams.set('page', '1');
      router.push(`?${getParams.toString()}`);
    }
    if (pageParam > pageCount) {
      getParams.set('page', pageCount.toString());
      router.push(`?${getParams.toString()}`);
    }
  }, [pageParam]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
  };
};

export default usePagination;
