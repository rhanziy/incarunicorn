import createClient from '@/config/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const { email, password } = await req.json();

  console.log(email, password);

  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
  return NextResponse.json({ user });
}

export async function DELETE() {
  const supabase = createClient();

  await supabase.auth.signOut();

  return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
}
