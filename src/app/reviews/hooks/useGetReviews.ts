import { useEffect, useState } from "react";
import { createClient } from "@/config/supabase/client";
import { IReview } from "@/app/types";
import { getReviews } from "../action";

const useGetReviews = () => {
  const [fetchReviews, setfetchReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews();

        setfetchReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return fetchReviews;
};

export default useGetReviews;
