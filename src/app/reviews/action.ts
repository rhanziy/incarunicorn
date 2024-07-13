"use server";

import { createClient } from "@/config/supabase/client";
import { redirect } from "next/navigation";

export interface WriteReviewProps {
  age: string;
  gender: string;
  nickname: string;
  password: string;
  category: string;
  content: string;
  date: string;
}

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000"
    : process.env.NEXT_PUBLIC_API_URL;

export async function write(formData: WriteReviewProps) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from("reviews").insert(formData);

    console.log(data);
    redirect("/reviews");
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
    redirect("/reviews");
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

// export async function write(formData: WriteReviewProps) {
//   try {
//     const response = await fetch(`${baseUrl}/api/reviews`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     console.log(data);
//     redirect("/reviews");
//   } catch (error) {
//     console.error("Error submitting review:", error);
//     throw error;
//   }
// }

// export async function remove(id: number) {
//   try {
//     const response = await fetch(`${baseUrl}/api/reviews`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     });

//     const data = await response.json();
//     console.log(data);
//     redirect("/reviews");
//   } catch (error) {
//     console.error("Error deleting review:", error);
//     throw error;
//   }
// }

// export async function getReviews() {
//   try {
//     const response = await fetch(`${baseUrl}/api/reviews`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log(response);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     throw error;
//   }
// }
