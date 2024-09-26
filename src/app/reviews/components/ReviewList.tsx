'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import usePagination from '@/app/components/pagination/usePagination';
import { IReview } from '@/app/types';
import ReviewComponent from './ReviewComponent';

export const ReviewList = ({ totalItems }: { totalItems: number }) => {
  const {
    currentPage,
    handlePageChange,
    itemCountPerPage,
    pageCount,
    fetchData,
  } = usePagination<IReview>('reviews', totalItems);

  return (
    <div>
      <div className={styles.reviewWrapper}>
        <ReviewComponent reviewList={fetchData} />
      </div>
      {fetchData.length > 0 && (
        <CustomPagination
          totalItems={totalItems}
          itemCountPerPage={itemCountPerPage}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
