import { Suspense } from 'react';
import { wrapper } from '../styles/container.css';
import { getReviews } from './action';
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
  const { data, count } = await getReviews(page);
  const pageCount = Math.ceil(count! / ITEMCOUNTPERPAGE);

  if (page < 1) {
    redirect('/reviews?page=1');
  } else if (page > pageCount) {
    redirect(`/reviews?page=${pageCount}`);
  }

  return (
    <div className={wrapper}>
      <WriteReview />
      <Suspense fallback={<ReviewSkeleton />}>
        <ReviewList reviews={data} page={page} pageCount={pageCount} />
      </Suspense>
    </div>
  );
}
