import React, { Suspense } from 'react';
import FloatingBtn from './components/FloatingBtn';
import { LoadingSpinner } from './components/LoadingSpinner';
import MainReviews from './home/MainReviews';
import { getReviews } from './reviews/action';
import { TopProfile } from './home/TopProfile';
import { History } from './home/History';
import { ProConsulting } from './home/ProConsulting';
import theme from './styles/theme.css';

export default async function Home() {
  const fetchReviews = await getReviews();

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
        <MainReviews fetchReviews={fetchReviews} />
      </Suspense>
      <FloatingBtn />
    </div>
  );
}
