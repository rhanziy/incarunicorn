'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReviewComponent } from '../reviews/components/ReviewComponent';
import { IReview } from '../types';
import Button from '../components/Button';
import * as styles from './styles/style.css';
import theme from '../styles/theme.css';
import createClient from '@/config/supabase/client';
import { getReviews } from '../reviews/action';

export function MainReviews({ fetchReviews }: { fetchReviews: IReview[] }) {
  const router = useRouter();
  const [reviews, setReviews] = useState<IReview[]>(fetchReviews);
  const supabase = createClient();

  const goToReviewPage = () => {
    router.push('/reviews', { scroll: false });
  };
  useEffect(() => {
    const channel = supabase
      .channel('public:reviews')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'reviews' },
        async (payload) => {
          console.log('리뷰데이터 변경', payload);
          try {
            const updatedReviews = await getReviews();
            setReviews(updatedReviews);
          } catch (error) {
            console.error('리뷰 데이터 업데이트 에러', error);
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [supabase]);

  if (reviews?.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: theme.margin.xLarge }}>
      <h2>고객 후기</h2>
      <div className={styles.reviewContainer}>
        <ReviewComponent serverReviews={reviews.slice(0, 5)} />
      </div>

      <Button onClick={goToReviewPage} color="none" size="small">
        더보기
      </Button>
    </div>
  );
}
