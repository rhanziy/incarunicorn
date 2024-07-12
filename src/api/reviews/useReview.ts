"use server";
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

export const getReviews = async () => {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select()
    .order("date", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch reviews");
  }

  return reviews ?? [];
};

export const write = async (formData: WriteReviewProps) => {
  "use server";

  try {
    const { data, error } = await supabase
      .from("reviews")
      .insert({ ...formData });

    if (error) {
      throw error;
    }

    revalidatePath("/reviews");
    return data;
  } catch (error) {
    throw new Error("Failed to post review");
  }
};

export const remove = async (id: number) => {
  "use server";

  try {
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    revalidatePath("/reviews");

    if (error) {
      throw error;
    }
  } catch (error) {
    throw new Error("Failed to delete review");
  }
};