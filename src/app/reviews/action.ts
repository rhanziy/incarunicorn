"use server";

import { createClient } from "@/config/supabase/client";
import { revalidatePath } from "next/cache";

export interface WriteReviewData {
  age: string;
  gender: string;
  nickname: string;
  password: string;
  category: string;
  content: string;
  date: string;
}

// const baseUrl =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : process.env.NEXT_PUBLIC_API_URL;

export async function write(formData: WriteReviewData) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from("reviews").insert(formData);

    if (error) {
      console.log(error);
    }
    revalidatePath("/reviews");
    return data;
  } catch (error) {
    console.error("Error submitting review:", error);
    throw error;
  }
}

export async function remove(id: number) {
  const supabase = createClient();
  try {
    const { error } = await supabase.from("reviews").delete().eq("id", id);

    if (error) {
      console.log(error);
    }
    revalidatePath("/reviews");
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
}

export async function getReviews() {
  const supabase = createClient();
  try {
    const { data: reviews, error } = await supabase
      .from("reviews")
      .select()
      .order("date", { ascending: false });

    if (error) {
      throw error;
    }
    return reviews;
  } catch (err) {
    throw new Error("Failed to fetch reviews");
  }
}

// 추후 리액트쿼리 도입 고려해보장
// export async function getReviewsRouter() {
//   try {
//     const response = await fetch(`${baseUrl}/api/reviews`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     throw error;
//   }
// }
