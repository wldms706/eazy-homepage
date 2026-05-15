import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const TOTAL_SLOTS = 100;
// 결제 회원 수 + 베이스 (런칭 직후 임시, 실제 결제자 늘면 같이 늘어남)
const BASE_TAKEN = 25;
const MIN_REMAINING = 5;

export async function GET() {
  try {
    const supabase = createAdminClient();

    // 토스페이먼츠로 실제 결제 완료된 활성 구독자 수 카운트
    const { count, error } = await supabase
      .from('subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'active');

    if (error) throw error;

    const paidSubscribers = count || 0;
    // 실제 결제자 + 베이스
    const subscribers = Math.min(TOTAL_SLOTS - MIN_REMAINING, BASE_TAKEN + paidSubscribers);
    const remainingSlots = TOTAL_SLOTS - subscribers;
    const percentageTaken = Math.round((subscribers / TOTAL_SLOTS) * 100);

    return NextResponse.json({
      total: TOTAL_SLOTS,
      subscribers,
      remaining: remainingSlots,
      percentageTaken,
      // 디버깅용 (브라우저 콘솔에서 확인 가능)
      _real: paidSubscribers,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err) {
    console.error('블로그라이터 통계 조회 실패:', err);
    return NextResponse.json({
      total: 100,
      subscribers: BASE_TAKEN,
      remaining: TOTAL_SLOTS - BASE_TAKEN,
      percentageTaken: BASE_TAKEN,
    });
  }
}
