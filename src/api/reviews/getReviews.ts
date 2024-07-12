import { useEffect, useState } from "react";
import { createClient } from "@/config/supabase/client";
import { IReview } from "@/app/types";

const supabase = createClient();

const getReviews = () => {
  const [fetchReviews, setfetchReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data: reviews, error } = await supabase
          .from("reviews")
          .select("*")
          .order("date", { ascending: false });

        if (error) {
          throw new Error("Failed to fetch reviews");
        }

        setfetchReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return fetchReviews;
};

export default getReviews;
