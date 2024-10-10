import { Suspense } from 'react';
import { wrapper } from '../styles/container.css';
import { getReviews } from './action';
import { ReviewList } from './components/ReviewList';
import WriteReview from './components/WriteReview';
import ReviewSkeleton from './components/ReviewSkeleton';

export default async function Reviews({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const reviews = await getReviews(page);

  return (
    <div className={wrapper}>
      <WriteReview />
      <Suspense fallback={<ReviewSkeleton />}>
        <ReviewList
          reviews={reviews.data}
          totalCount={reviews.count}
          page={page}
        />
      </Suspense>
    </div>
  );
}
