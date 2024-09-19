import WriteReview from './components/WriteReview';
import ReviewComponent from './components/ReviewComponent';
import { getReviews } from './action';
import { wrapper } from '../styles/container.css';
import * as styles from './style.css';

export default async function Reviews() {
  const reviews = await getReviews();

  if (!reviews) {
    return null;
  }

  return (
    <div className={wrapper}>
      <WriteReview />
      <div className={styles.reviewWrapper}>
        <ReviewComponent serverReviews={reviews ?? []} />
      </div>
    </div>
  );
}
