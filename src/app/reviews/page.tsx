import { Box, Container } from "@mui/material";
import useReview from "@/app/reviews/hooks/useReview";
import WriteReview from "./components/WriteReview";
import { ReviewComponent } from "./components/ReviewComponent";

export default async function Reviews() {
  const { reviews } = await useReview();

  if (!reviews) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ marginBottom: 2, paddingBottom: 2 }}>
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
