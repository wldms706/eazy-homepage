import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const TOTAL_SLOTS = 100;

export async function GET() {
  try {
    const supabase = createAdminClient();

    // 블로그라이터 결제 회원 수 카운트
    // plan_type이 비어있지 않은 사람 = 결제한 사람
    const { count, error } = await supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .not('plan_type', 'is', null);

    if (error) throw error;

    const subscribers = count || 0;
    const remainingSlots = Math.max(0, TOTAL_SLOTS - subscribers);
    const percentageTaken = Math.min(100, Math.round((subscribers / TOTAL_SLOTS) * 100));

    return NextResponse.json({
      total: TOTAL_SLOTS,
      subscribers,
      remaining: remainingSlots,
      percentageTaken,
    }, {
      headers: {
        // 5분 캐시 (너무 자주 호출 안 하도록)
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (err) {
    console.error('블로그라이터 통계 조회 실패:', err);
    // 에러 시 기본값 (페이지가 깨지지 않게)
    return NextResponse.json({
      total: 100,
      subscribers: 36,
      remaining: 64,
      percentageTaken: 36,
    });
  }
}
