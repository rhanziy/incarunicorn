import { useEffect, useState } from 'react';
import { IReview } from '@/app/types';
import { getReviews } from '../action';

const useGetReviews = () => {
  const [fetchReviews, setfetchReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const reviews = await getReviews();

        setfetchReviews(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetch();
  }, []);

  return fetchReviews;
};

export default useGetReviews;
