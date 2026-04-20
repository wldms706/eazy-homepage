'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function FailClient() {
  const params = useSearchParams();
  const code = params.get('code');
  const message = params.get('message');

  const isUserCancel = code === 'PAY_PROCESS_CANCELED' || code === 'USER_CANCEL';

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: isUserCancel ? '#888' : '#FF4444', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', marginBottom: 16 }}>
          {isUserCancel ? '×' : '!'}
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 12 }}>
          {isUserCancel ? '결제가 취소되었습니다' : '결제에 실패했습니다'}
        </h1>
        {!isUserCancel && message && (
          <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: 8 }}>{message}</p>
        )}
        {code && (
          <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: 24 }}>오류 코드: {code}</p>
        )}

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <Link href="/products/meta-ad-class" style={{ padding: '14px 28px', background: '#2A5FFF', borderRadius: 12, color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>
            다시 시도
          </Link>
          <Link href="/" style={{ padding: '14px 28px', background: '#fff', border: '1px solid #EBEBEB', borderRadius: 12, color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}>
            홈으로
          </Link>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#888', marginTop: 32 }}>
          문제가 계속 발생하면 <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" style={{ color: '#2A5FFF', textDecoration: 'underline' }}>카카오톡 채널</a>로 문의해주세요.
        </p>
      </main>
    </div>
  );
}
