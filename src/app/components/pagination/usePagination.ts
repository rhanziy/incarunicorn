'use client';
import { useParams } from '@/app/hooks/useParams';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const usePagination = (totalCount: number, keyword = 'page') => {
  const router = useRouter();
  const { getParams, currentPage } = useParams(keyword);
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);

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
