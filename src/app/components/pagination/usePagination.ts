import { useState } from 'react';

const usePagination = <T extends unknown>(arr: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemCountPerPage = 10;
  const pageCount = 5;
  const totalItems = arr.length;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = () => {
    return arr.slice(
      (currentPage - 1) * itemCountPerPage,
      Math.min(currentPage * itemCountPerPage, totalItems),
    );
  };

  return {
    currentPage,
    handlePageChange,
    paginatedData: paginatedData(),
    totalItems,
    itemCountPerPage,
    pageCount,
  };
};

export default usePagination;
