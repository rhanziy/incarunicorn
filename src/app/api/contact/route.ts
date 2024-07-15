import { createClient } from "@/config/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("contactUser").insert(body);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    console.error("Handler error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
