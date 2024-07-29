"use client";
import { Container } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import FloatingBtn from "./components/FloatingBtn";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { MainReviews } from "./components/Home/MainReviews";
import { TopProfile } from "./components/Home/TopProfile";
import { History } from "./components/Home/History";
import { ProConsulting } from "./components/Home/ProConsulting";
import useGetReviews from "./reviews/hooks/useGetReviews";

export default async function Home() {
  const [load, setLoad] = useState(false);
  const fetchReviews = useGetReviews();

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <>
      {load && (
        <Container maxWidth="md" sx={{ marginTop: 2, marginBottom: 2 }}>
          <TopProfile />
          <History />
          <ProConsulting />

          <Suspense fallback={<LoadingSpinner />}>
            <MainReviews fetchReviews={fetchReviews} />
          </Suspense>
          <FloatingBtn />
        </Container>
      )}
    </>
  );
}
