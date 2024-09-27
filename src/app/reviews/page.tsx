import WriteReview from './components/WriteReview';
import { wrapper } from '../styles/container.css';
import { ReviewList } from './components/ReviewList';
import { getReviewsCount } from './action';

export default async function Reviews() {
  const totalCount = await getReviewsCount();

  return (
    <div className={wrapper}>
      <WriteReview />
      <ReviewList totalCount={totalCount!} />
    </div>
  );
}
