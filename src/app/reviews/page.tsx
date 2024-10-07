import { wrapper } from '../styles/container.css';
import { getReviews } from './action';
import { ReviewList } from './components/ReviewList';
import WriteReview from './components/WriteReview';

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <div className={wrapper}>
      <WriteReview />

      <ReviewList reviews={reviews.data} totalCount={reviews.count} />
    </div>
  );
}
