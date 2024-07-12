"use client";
import { Box, Container } from "@mui/material";
import WriteReview from "./components/WriteReview";
import { ReviewComponent } from "./components/ReviewComponent";
import { getReviews } from "@/api/reviews/useReview";
import { useEffect, useState } from "react";
import { IReview } from "../types";

<<<<<<< Updated upstream
import { Box } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

export default function Reviews() {
  const { isMobile } = useIsMobile();
=======
export default async function Reviews() {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  if (!reviews) {
    return null;
  }
>>>>>>> Stashed changes

  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: 2, marginBottom: 2, paddingBottom: 2 }}
    >
      <WriteReview />
      <Box
        pt={2}
        pb={2}
        display={"flex"}
        flexWrap={"wrap"}
        sx={{ gap: "20px 2%" }}
      >
        <ReviewComponent reviews={reviews ?? []} />
      </Box>
    </Container>
  );
}
