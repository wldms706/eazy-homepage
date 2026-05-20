import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { isAdminEmail } from '@/lib/admin';

async function checkAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user && isAdminEmail(user.email) ? user : null;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await checkAdmin();
  if (!user) return NextResponse.json({ error: '권한 없음' }, { status: 403 });

  const { id } = await params;
  const { status } = await request.json();

  if (!['approved', 'rejected', 'pending'].includes(status)) {
    return NextResponse.json({ error: '잘못된 상태값' }, { status: 400 });
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from('live_reviews')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', Number(id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await checkAdmin();
  if (!user) return NextResponse.json({ error: '권한 없음' }, { status: 403 });

  const { id } = await params;
  const admin = createAdminClient();
  const { error } = await admin.from('live_reviews').delete().eq('id', Number(id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
