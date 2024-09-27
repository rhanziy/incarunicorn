import createClient from '@/config/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const supabase = createClient();
  try {
    const { count, error } = await supabase
      .from('reviews')
      .select('*', { count: 'exact' });

    if (error) {
      console.error('Supabase select error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(count, { status: 200 });
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
