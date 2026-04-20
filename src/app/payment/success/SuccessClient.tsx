'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessClient() {
  const params = useSearchParams();
  const paymentKey = params.get('paymentKey');
  const orderId = params.get('orderId');
  const amount = params.get('amount');

  const [status, setStatus] = useState<'confirming' | 'success' | 'failed'>('confirming');
  const [errorMsg, setErrorMsg] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const confirmPayment = async () => {
      if (!paymentKey || !orderId || !amount) {
        setStatus('failed');
        setErrorMsg('결제 정보가 누락되었습니다.');
        return;
      }

      try {
        // 주문자 정보 가져오기 (sessionStorage)
        const buyerStr = sessionStorage.getItem('order_buyer');
        const buyer = buyerStr ? JSON.parse(buyerStr) : null;

        const res = await fetch('/api/payments/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentKey,
            orderId,
            amount: Number(amount),
            buyer,
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || '결제 승인에 실패했습니다.');
        }

        const data = await res.json();
        setVideoUrl(data.videoUrl || '');
        setStatus('success');
        sessionStorage.removeItem('order_buyer');
      } catch (err) {
        console.error(err);
        setStatus('failed');
        setErrorMsg(err instanceof Error ? err.message : '결제 처리 중 오류가 발생했습니다.');
      }
    };

    confirmPayment();
  }, [paymentKey, orderId, amount]);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
        </div>
      </header>

      <main style={{ flex: 1, maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        {status === 'confirming' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>결제 확인 중...</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>잠시만 기다려주세요</p>
          </div>
        )}

        {status === 'success' && (
          <div>
            <div style={{ textAlign: 'center', padding: '20px 0 40px' }}>
              <div style={{ width: 64, height: 64, background: '#2A5FFF', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', marginBottom: 16 }}>✓</div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 8 }}>결제가 완료되었습니다</h1>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>지금 바로 영상을 시청하실 수 있습니다.</p>
            </div>

            {videoUrl && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 12 }}>📺 메타광고 계정 만들기 강의</h2>
                <div style={{ aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', border: '1px solid #EBEBEB' }}>
                  <iframe src={videoUrl} style={{ width: '100%', height: '100%', border: 'none' }} allow="autoplay" allowFullScreen></iframe>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#888', marginTop: 12, textAlign: 'center' }}>
                  ※ 이 페이지를 즐겨찾기 해두시거나, 영수증 이메일에서 다시 접속하실 수 있습니다.
                </p>
              </div>
            )}

            <div style={{ background: '#FAFAFA', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 8 }}>주문 정보</p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: 4 }}>주문번호: <code style={{ fontSize: '0.85rem' }}>{orderId}</code></p>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>결제금액: <strong style={{ color: '#1a1a1a' }}>{Number(amount).toLocaleString()}원</strong></p>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <Link href="/" style={{ flex: 1, padding: '14px', background: '#fff', border: '1px solid #EBEBEB', borderRadius: 12, fontSize: '0.95rem', fontWeight: 700, textAlign: 'center', textDecoration: 'none', color: '#1a1a1a' }}>홈으로</Link>
              <Link href="/resources" style={{ flex: 1, padding: '14px', background: '#1a1a1a', border: 'none', borderRadius: 12, fontSize: '0.95rem', fontWeight: 700, textAlign: 'center', textDecoration: 'none', color: '#fff' }}>다른 자료 보기</Link>
            </div>
          </div>
        )}

        {status === 'failed' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 64, height: 64, background: '#FF4444', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', marginBottom: 16 }}>!</div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: 8 }}>결제 처리에 실패했습니다</h1>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 24 }}>{errorMsg}</p>
            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: 24 }}>
              결제가 완료됐는데도 이 화면이 보이면<br />카카오톡 채널로 연락 주세요.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link href="/products/meta-ad-class" style={{ padding: '14px 28px', background: '#1a1a1a', borderRadius: 12, color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>다시 시도</Link>
              <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', background: '#FEE500', borderRadius: 12, color: '#000', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>카카오톡 문의</a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
