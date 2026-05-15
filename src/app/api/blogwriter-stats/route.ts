import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

// blog-writer의 promo-count API와 동일한 로직
const PROMO_LIMIT = 100;

export async function GET() {
  try {
    const admin = createAdminClient();

    const { count } = await admin
      .from('subscriptions')
      .select('id', { count: 'exact', head: true });

    const current = count || 0;
    const remaining = Math.max(0, PROMO_LIMIT - current);
    const percentageTaken = Math.min(100, Math.round((current / PROMO_LIMIT) * 100));

    return NextResponse.json({
      total: PROMO_LIMIT,
      subscribers: current,
      remaining,
      percentageTaken,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err) {
    console.error('블로그라이터 통계 조회 실패:', err);
    return NextResponse.json({
      total: PROMO_LIMIT,
      subscribers: 0,
      remaining: PROMO_LIMIT,
      percentageTaken: 0,
    });
  }
}
