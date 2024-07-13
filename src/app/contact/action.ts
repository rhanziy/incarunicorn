"use server";

import { createClient } from "@/config/supabase/client";
import { ContactFormData } from "../types";

const supabase = createClient();

export const add = async (formData: Omit<ContactFormData, "consent">) => {
  try {
    const { data, error } = await supabase.from("contactUser").insert(formData);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw new Error("Failed to add user");
  }
};
