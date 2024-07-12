"use server";
import { ContactFormData } from "@/app/types";
import { createClient } from "@/config/supabase/client";
import { revalidatePath } from "next/cache";

export interface WriteReviewProps {
  age: string;
  gender: string;
  nickname: string;
  password: string;
  category: string;
  content: string;
  date: string;
}

const supabase = createClient();

// export const getReviews = async () => {
//   const { data: reviews, error } = await supabase
//     .from("reviews")
//     .select()
//     .order("date", { ascending: false });

//   if (error) {
//     throw new Error("Failed to fetch reviews");
//   }

//   return reviews ?? [];
// };

export const add = async (formData: Omit<ContactFormData, "consent">) => {
  "use server";

  try {
    const { data, error } = await supabase
      .from("contactUser")
      .insert({ ...formData });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw new Error("Failed to add user");
  }
};
