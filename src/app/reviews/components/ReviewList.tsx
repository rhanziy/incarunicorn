'use client';
import ReviewSkeleton from '@/app/components/skeleton/ReviewSkeleton';
import { useEffect, useState } from 'react';
import ReviewComponent from './ReviewComponent';
import CustomPagination from '@/app/components/pagination/CustomPagination';
import usePagination from '@/app/components/pagination/usePagination';
import * as styles from '../style.css';
import { IReview } from '@/app/types';

export function ReviewList({ totalCount }: { totalCount: number }) {
  const [loading, setLoading] = useState(true);
  const [reviewList, setReviewList] = useState<IReview[]>([]);

  const { currentPage, handlePageChange, pageCount } =
    usePagination(totalCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/reviews?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviewList(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, totalCount]);

  return (
    <>
      {loading ? (
        <ReviewSkeleton />
      ) : totalCount > 0 ? (
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
      ) : (
        <div className={styles.emptyReviewContainer}>
          아직 작성된 후기가 없어요.
        </div>
      )}
    </>
  );
}
