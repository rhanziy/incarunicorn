import WriteReview from './components/WriteReview';
import { getReviewsCount } from './action';
import { wrapper } from '../styles/container.css';
import { ReviewList } from './components/ReviewList';

export default async function Reviews() {
  const totalItems = await getReviewsCount();

  return (
    <div className={wrapper}>
      <WriteReview />
      <ReviewList totalItems={totalItems ?? 0} />
    </div>
  );
}
