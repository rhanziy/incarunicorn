import { Container } from "@mui/material";
import React, { Suspense } from "react";
import FloatingBtn from "./components/FloatingBtn";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { MainReviews } from "./components/Home/MainReviews";
import { getReviews } from "./reviews/action";
import { TopProfile } from "./components/Home/TopProfile";
import { History } from "./components/Home/History";
import { ProConsulting } from "./components/Home/ProConsulting";

export default async function Home() {
  const fetchReviews = await getReviews();

  return (
    <Container maxWidth="md" sx={{ marginTop: 2, marginBottom: 2 }}>
      <TopProfile />
      <History />
      <ProConsulting />

      <Suspense fallback={<LoadingSpinner />}>
        <MainReviews fetchReviews={fetchReviews} />
      </Suspense>
      <FloatingBtn />
    </Container>
  );
}
