"use client";
import { ReviewComponent } from "../reviews/components/ReviewComponent";
import { useRouter } from "next/navigation";
import { IReview } from "../types";
import Button from "../components/Button";
import * as styles from "./styles/style.css";
import theme from "../styles/theme.css";

export const MainReviews = ({ fetchReviews }: { fetchReviews: IReview[] }) => {
  const router = useRouter();

  const goToReviewPage = () => {
    router.push("/reviews");
  };

  if (fetchReviews?.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: theme.margin.xLarge }}>
      <h2>고객 후기</h2>
      <div className={styles.reviewContainer}>
        <ReviewComponent serverReviews={fetchReviews?.slice(0, 5) ?? []} />
      </div>

      <Button onClick={goToReviewPage} color="none" size="small">
        더보기
      </Button>
    </div>
  );
};
