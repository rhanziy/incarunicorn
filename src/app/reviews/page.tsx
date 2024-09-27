'use client';
import WriteReview from './components/WriteReview';
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
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const count = await response.json();
        setTotalItems(count);
      } catch (error) {
        console.error('Error fetching reviews:', error);
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
