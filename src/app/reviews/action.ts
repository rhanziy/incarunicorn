"use server";

import { createClient } from "@/config/supabase/server";
import { revalidatePath } from "next/cache";
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

export async function write(formData: WriteReviewProps) {
  const supabase = createClient();

  try {
    const { error } = await supabase.from("reviews").insert({ ...formData });

    if (error) {
      throw error;
    }
    redirect("/reviews");
  } catch (err) {
    throw new Error("Failed to post review");
  }
}

export async function remove(id: number) {
  const supabase = createClient();

  try {
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    revalidatePath("/reviews");

    if (error) {
      throw error;
    }
    redirect("/reviews");
  } catch (error) {
    throw new Error("Failed to delete review");
  }
}
