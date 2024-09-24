import createClient from '@/config/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient();

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호는 필수입니다.' },
        { status: 400 },
      );
    }

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

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error('요청 처리 중 오류 발생:', err);
    return NextResponse.json(
      { error: '오류가 발생했습니다.' },
      { status: 400 },
    );
  }
}

export async function DELETE() {
  const supabase = createClient();

  await supabase.auth.signOut();

  return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
}
