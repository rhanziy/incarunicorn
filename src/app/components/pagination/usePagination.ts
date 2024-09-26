'use client';
import { fetchPageData } from '@/app/components/pagination/action';
import { useEffect, useState } from 'react';

const usePagination = <T>(table: string, totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchData, setFetchData] = useState<T[]>([]);

  const itemCountPerPage = 10;
  const pageCount = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
    itemCountPerPage,
    pageCount,
    fetchData,
  };
};

export default usePagination;
