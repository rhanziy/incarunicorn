import { Suspense } from 'react';
import { wrapper } from '../styles/container.css';
import { getReviews } from './action';
import { ReviewList } from './components/ReviewList';
import WriteReview from './components/WriteReview';
import ReviewSkeleton from './components/ReviewSkeleton';

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <div className={wrapper}>
      <WriteReview />
      <Suspense fallback={<ReviewSkeleton />}>
        <ReviewList initialReviews={reviews.data} totalCount={reviews.count} />
      </Suspense>
    </div>
  );
}
