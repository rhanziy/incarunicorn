import { createClient } from "@/config/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient();

export async function GET() {
  const res = await fetch("/reviews", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
