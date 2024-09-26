import React, { Suspense } from 'react';
import FloatingBtn from './components/FloatingBtn';
import { LoadingSpinner } from './components/loading/LoadingSpinner';
import MainReviews from './home/MainReviews';
import { getMainReviews } from './reviews/action';
import { TopProfile } from './home/TopProfile';
import { History } from './home/History';
import { ProConsulting } from './home/ProConsulting';
import theme from './styles/theme.css';

export default async function Home() {
  const reviewList = await getMainReviews();

  return (
    <div
      style={{
        marginTop: theme.padding.large,
        marginBottom: theme.padding.large,
      }}
    >
      <TopProfile />
      <History />
      <ProConsulting />

      <Suspense fallback={<LoadingSpinner />}>
        <MainReviews reviewList={reviewList} />
      </Suspense>
      <FloatingBtn />
    </div>
  );
}
