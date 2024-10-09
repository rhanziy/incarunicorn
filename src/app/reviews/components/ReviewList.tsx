'use client';
import ReviewComponent from './ReviewComponent';
import CustomPagination from '@/app/components/pagination/CustomPagination';
import usePagination from '@/app/components/pagination/usePagination';
import { IReview } from '@/app/types';
import * as styles from '../style/style.css';
import { useEffect, useState } from 'react';

export function ReviewList({
  initialReviews,
  totalCount,
}: {
  initialReviews: IReview[];
  totalCount: number;
}) {
  const { currentPage, handlePageChange, pageCount } =
    usePagination(totalCount);

  const [reviewList, setReviewList] = useState<IReview[]>(initialReviews);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/reviews?page=${currentPage}`);
        const data = await response.json();
        setReviewList(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, [currentPage, totalCount]);

  if (!reviewList || reviewList.length === 0) {
    return (
      <div className={styles.emptyReviewContainer}>
        아직 작성된 후기가 없어요.
      </div>
    );
  }

  return (
    <>
      <div className={styles.reviewWrapper}>
        <ReviewComponent reviewList={reviewList} />
      </div>
      <CustomPagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
}
