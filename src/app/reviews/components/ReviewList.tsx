'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import usePagination from '@/app/components/pagination/usePagination';
import { IReview } from '@/app/types';
import ReviewComponent from './ReviewComponent';

export const ReviewList = ({ totalItems }: { totalItems: number }) => {
  const { currentPage, handlePageChange, pageCount, fetchData } =
    usePagination<IReview>('reviews', totalItems);

  return (
    <>
      {totalItems > 0 ? (
        <>
          <div className={styles.reviewWrapper}>
            <ReviewComponent reviewList={fetchData} />
          </div>
          {fetchData.length > 0 && (
            <CustomPagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <div className={styles.emptyReviewContainer}>
          아직 작성된 후기가 없어요.
        </div>
      )}
    </>
  );
};
