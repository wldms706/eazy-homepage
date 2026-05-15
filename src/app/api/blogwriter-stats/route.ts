import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const TOTAL_SLOTS = 100;
// 기본 차지된 자리
const BASE_TAKEN = 25;
// 가입자 수 가중치 (100명 가입해도 20명만 차지로 카운트)
const SIGNUP_WEIGHT = 0.2;
// 최소 남은 자리 (긴급성 유지하되 0명은 안 됨)
const MIN_REMAINING = 12;

export async function GET() {
  try {
    const supabase = createAdminClient();

    const { count, error } = await supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true });

    if (error) throw error;

    const signups = count || 0;
    const weightedSignups = Math.floor(signups * SIGNUP_WEIGHT);
    const subscribers = Math.min(TOTAL_SLOTS - MIN_REMAINING, BASE_TAKEN + weightedSignups);
    const remainingSlots = TOTAL_SLOTS - subscribers;
    const percentageTaken = Math.round((subscribers / TOTAL_SLOTS) * 100);

    return NextResponse.json({
      total: TOTAL_SLOTS,
      subscribers,
      remaining: remainingSlots,
      percentageTaken,
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
