import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReviewComponent } from "../reviews/components/ReviewComponent";
import useReview from "@/app/reviews/hooks/useReview";

const ReviewArea = async () => {
  const router = useRouter();
  const { reviews } = await useReview();

  const goToReviewPage = () => {
    router.push("/reviews");
  };

  if (!reviews) {
    return null;
  }

  return (
    <Box mt={6} display={"flex"} flexDirection={"column"}>
      <h2>고객후기</h2>
      <Box mb={2} display={"flex"} flexWrap={"wrap"} sx={{ gap: "20px 2%" }}>
        <ReviewComponent reviews={reviews?.slice(0, 5) ?? []} />
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

export default ReviewArea;
