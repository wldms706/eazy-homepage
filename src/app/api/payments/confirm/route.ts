import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const TOSS_SECRET_KEY = process.env.TOSS_SECRET_KEY || '';

// 상품별 영상 URL 매핑
const PRODUCT_VIDEOS: Record<string, { url: string; price: number }> = {
  'meta-ad-class': {
    url: 'https://drive.google.com/file/d/1i9GkYtq3maB0zdyFk4279WM9UIWAhgMj/preview',
    price: 9900,
  },
};

interface BuyerInfo {
  name?: string;
  phone?: string;
  email?: string;
  productId?: string;
  productName?: string;
  amount?: number;
}

export async function POST(request: NextRequest) {
  try {
    const { paymentKey, orderId, amount, buyer } = (await request.json()) as {
      paymentKey?: string;
      orderId?: string;
      amount?: number;
      buyer?: BuyerInfo;
    };

    if (!paymentKey || !orderId || !amount) {
      return NextResponse.json({ error: '필수 정보가 누락되었습니다.' }, { status: 400 });
    }

    if (!TOSS_SECRET_KEY) {
      return NextResponse.json({ error: '결제 시스템 설정이 완료되지 않았습니다.' }, { status: 500 });
    }

    // 상품 ID 추출 (orderId 형식: ORDER_meta-ad-class_타임스탬프)
    const productId = orderId.split('_')[1];
    const product = PRODUCT_VIDEOS[productId];

    if (!product) {
      return NextResponse.json({ error: '존재하지 않는 상품입니다.' }, { status: 400 });
    }

    // 금액 변조 방지
    if (amount !== product.price) {
      return NextResponse.json({ error: '결제 금액이 일치하지 않습니다.' }, { status: 400 });
    }

    // 토스에 결제 승인 요청
    const tossResponse = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(TOSS_SECRET_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    });

    const tossData = await tossResponse.json();

    if (!tossResponse.ok) {
      console.error('토스 승인 실패:', tossData);
      return NextResponse.json({ error: tossData.message || '결제 승인에 실패했습니다.' }, { status: 400 });
    }

    // Supabase에 주문 기록 (선택, 실패해도 결제는 성공 처리)
    try {
      const supabase = createAdminClient();
      await supabase.from('orders').insert({
        order_id: orderId,
        payment_key: paymentKey,
        product_id: productId,
        product_name: buyer?.productName || productId,
        amount,
        buyer_name: buyer?.name || null,
        buyer_phone: buyer?.phone || null,
        buyer_email: buyer?.email || null,
        status: 'paid',
        toss_data: tossData,
      });
    } catch (dbErr) {
      console.error('DB 저장 실패 (결제는 완료됨):', dbErr);
    }

    return NextResponse.json({
      success: true,
      videoUrl: product.url,
      orderId,
      amount,
    });
  } catch (err) {
    console.error('결제 승인 처리 오류:', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
