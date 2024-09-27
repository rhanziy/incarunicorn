'use client';

import { useRouter } from 'next/navigation';
import ReviewComponent from '../reviews/components/ReviewComponent';
import { IReview } from '../types';
import Button from '../components/Button';
import * as styles from './styles/style.css';
import theme from '../styles/theme.css';

function MainReviews({ reviewList }: { reviewList: IReview[] }) {
  const router = useRouter();

  const goToReviewPage = () => {
    router.push('/reviews?page=1', { scroll: false });
  };

  if (reviewList?.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: theme.margin.xLarge }}>
      <h2>고객 후기</h2>
      <div className={styles.reviewContainer}>
        <ReviewComponent reviewList={reviewList} />
      </div>

      <Button onClick={goToReviewPage} color="none" size="small">
        더보기
      </Button>
    </div>
  );
}

export default MainReviews;
