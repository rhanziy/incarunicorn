"use client";
import { Box, Button } from "@mui/material";
import { ReviewComponent } from "../../reviews/components/ReviewComponent";
import { useRouter } from "next/navigation";
import { IReview } from "../../types";

export const MainReviews = ({ fetchReviews }: { fetchReviews: IReview[] }) => {
  const router = useRouter();

  const goToReviewPage = () => {
    router.push("/reviews");
  };

  if (fetchReviews?.length === 0) {
    return null;
  }

  return (
    <Box mt={6} display={"flex"} flexDirection={"column"}>
      <h2>고객 후기</h2>
      <Box mb={2} display={"flex"} flexWrap={"wrap"} sx={{ gap: "20px 2%" }}>
        <ReviewComponent reviews={fetchReviews?.slice(0, 5) ?? []} />
      </Box>

      <Button
        onClick={goToReviewPage}
        style={{
          color: "#666",
          fontWeight: 400,
          alignSelf: "center",
        }}
      >
        더보기
      </Button>
    </Box>
  );
};
