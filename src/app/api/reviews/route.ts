'use server';

import createClient from '@/config/supabase/client';
import { ITEMCOUNTPERPAGE } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = createClient();

  const searchParams = request.nextUrl.searchParams;
  const currentPage = Number(searchParams.get('page')) || 1;

  const from = (currentPage - 1) * ITEMCOUNTPERPAGE;
  const to = from + ITEMCOUNTPERPAGE - 1;

  try {
    const { data: items, error } = await supabase
      .from('reviews')
      .select('id, created_at, age, gender, nickname, category, content, date')
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(items, { status: 200 });
  } catch (err: any) {
    console.error('Handler error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const supabase = createClient();
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('reviews').insert(body);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    console.error('Handler error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const supabase = createClient();
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { error } = await supabase.from('reviews').delete().eq('id', id);

    if (error) {
      console.error('Supabase delete error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Review deleted successfully' },
      { status: 200 },
    );
  } catch (err: any) {
    console.error('Handler error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
