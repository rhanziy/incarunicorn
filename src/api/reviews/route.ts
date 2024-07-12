import { createClient } from "@/config/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://profilepage-unicorn.vercel.app";

export async function GET() {
  const res = await fetch(`${baseUrl}/reviews`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
