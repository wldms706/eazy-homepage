import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const TOTAL_SLOTS = 100;
// 기본 차지된 자리 (결제 라이브 키 발급 전 임시 - 가입자 늘면 같이 줄어듦)
const BASE_TAKEN = 67;

export async function GET() {
  try {
    const supabase = createAdminClient();

    // 전체 가입자 수 카운트 (블로그라이터 + jjeen-eazy 통합)
    const { count, error } = await supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true });

    if (error) throw error;

    const signups = count || 0;
    const subscribers = Math.min(TOTAL_SLOTS, BASE_TAKEN + signups);
    const remainingSlots = Math.max(0, TOTAL_SLOTS - subscribers);
    const percentageTaken = Math.min(100, Math.round((subscribers / TOTAL_SLOTS) * 100));

    return NextResponse.json({
      total: TOTAL_SLOTS,
      subscribers,
      remaining: remainingSlots,
      percentageTaken,
    }, {
      headers: {
        // 1분 캐시
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (err) {
    console.error('블로그라이터 통계 조회 실패:', err);
    // 에러 시 기본값
    return NextResponse.json({
      total: 100,
      subscribers: BASE_TAKEN,
      remaining: TOTAL_SLOTS - BASE_TAKEN,
      percentageTaken: BASE_TAKEN,
    });
  }
}
