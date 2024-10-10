import { Suspense } from 'react';
import { wrapper } from '../styles/container.css';
import { getReviews, getTotalReviewCount } from './action';
import { ReviewList } from './components/ReviewList';
import WriteReview from './components/WriteReview';
import ReviewSkeleton from './components/ReviewSkeleton';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { redirect } from 'next/navigation';

export default async function Reviews({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const totalCount = await getTotalReviewCount();
  const pageCount = Math.ceil(totalCount / ITEMCOUNTPERPAGE);
  const reviews = await getReviews(page);

  if (page < 1) {
    redirect('/reviews?page=1');
  } else if (page > pageCount) {
    redirect(`/reviews?page=${pageCount}`);
  }

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
