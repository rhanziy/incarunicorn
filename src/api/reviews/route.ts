// import { createClient } from "@/config/supabase/server";
// import { NextRequest, NextResponse } from "next/server";

// const baseUrl =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : "https://profilepage-unicorn.vercel.app";

// const supabase = createClient();

// export async function GET(request: NextRequest) {
//   try {
//     const { data: reviews, error } = await supabase
//       .from("reviews")
//       .select()
//       .order("date", { ascending: false });

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json(reviews);
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// // export async function GET(req: NextRequest) {
// //   const res = await fetch(`${baseUrl}${req.url}`, {
// //     next: { revalidate: 60 },
// //   });
// //   const data = await res.json();

// //   return NextResponse.json(data);
// // }

// export async function POST(reqest: NextRequest) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY!,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })

//   const data = await res.json()

//   return Response.json(data)
// }
