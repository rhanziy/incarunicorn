'use client';
import WriteReview from './components/WriteReview';
import { getReviewsCount } from './action';
import { wrapper } from '../styles/container.css';
import { ReviewList } from './components/ReviewList';
import ReviewSkeleton from '../components/skeleton/ReviewSkeleton';
import { useEffect, useState } from 'react';

export default function Reviews() {
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await getReviewsCount();
        setTotalItems(count ?? 0);
      } catch (error) {
        console.error('Error fetching reviews count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={wrapper}>
      <WriteReview />
      {loading ? <ReviewSkeleton /> : <ReviewList totalItems={totalItems} />}
    </div>
  );
}
