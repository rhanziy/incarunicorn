'use client';
import ReviewComponent from './ReviewComponent';
import CustomPagination from '@/app/components/pagination/CustomPagination';
import usePagination from '@/app/components/pagination/usePagination';
import { IReview } from '@/app/types';
import * as styles from '../style/style.css';
import { useEffect, useState } from 'react';
import ReviewSkeleton from './ReviewSkeleton';

export function ReviewList({
  reviews,
  totalCount,
}: {
  reviews: IReview[];
  totalCount: number;
}) {
  const { currentPage, handlePageChange, pageCount } =
    usePagination(totalCount);

  const [reviewList, setReviewList] = useState<IReview[]>(reviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/reviews?page=${currentPage}`);
        const data = await response.json();
        setReviewList(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, totalCount, pageCount]);

  if (!reviews || reviews.length === 0) {
    return (
      <div className={styles.emptyReviewContainer}>
        아직 작성된 후기가 없어요.
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <ReviewSkeleton />
      ) : (
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
      )}
    </>
  );
}
