import type { Metadata } from 'next';
import Link from 'next/link';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: '뷰티샵 메타광고 가이드 강의 | 9,900원',
  description: '뷰티샵 원장님을 위한 메타광고 계정 만들기·세팅 가이드 영상 강의. 9,900원에 평생 소장.',
  alternates: { canonical: 'https://www.jjeen-eazy.com/products/meta-ad-class' },
};

export default function MetaAdClassPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>← 돌아가기</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: '#111111', color: '#fff', padding: '140px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Online Class</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: 16, wordBreak: 'keep-all' }}>
            뷰티샵 원장님을 위한<br /><span style={{ color: '#2A5FFF' }}>메타광고 계정 세팅</span> 가이드
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, wordBreak: 'keep-all' }}>
            메타(인스타그램·페이스북) 광고 시작하려는데<br />어디서부터 손대야 할지 모르는 원장님께
          </p>
        </div>
      </section>

      {/* Product info */}
      <section style={{ padding: '60px 24px', background: '#FAFAFA' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* 강의 썸네일 */}
          <div style={{ background: '#111', borderRadius: 16, padding: 60, textAlign: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>META ADS</span>
            <p style={{ marginTop: 12, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>영상 강의</p>
          </div>

          {/* 가격 */}
          <div style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: 4 }}>가격</p>
            <p style={{ fontSize: '2rem', fontWeight: 900, color: '#1a1a1a' }}>9,900<span style={{ fontSize: '1rem', fontWeight: 600 }}>원</span></p>
            <p style={{ fontSize: '0.85rem', color: '#888', marginTop: 4 }}>1회 결제 · 평생 소장 · 무제한 시청</p>
          </div>

          {/* 강의 정보 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: 16 }}>이런 분께 추천합니다</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
            {[
              '메타광고를 처음 시작하는 뷰티샵 원장님',
              '광고 대행사 맡기기 전에 기본 구조부터 알고 싶은 분',
              '계정 세팅에서 막혀서 진도가 안 나가는 분',
              '비싼 강의 듣기 전에 작게 시작하고 싶은 분',
            ].map((item, i) => (
              <li key={i} style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 12, padding: '14px 18px', marginBottom: 8, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 24, height: 24, background: '#2A5FFF', color: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: 16 }}>강의에서 배우는 것</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
            {[
              '메타 비즈니스 계정 만들기',
              '광고 계정 / 픽셀 / 결제수단 세팅',
              '뷰티샵 광고에 자주 쓰는 캠페인 구조',
              '실수 없이 첫 광고 띄우는 법',
            ].map((item, i) => (
              <li key={i} style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 12, padding: '14px 18px', marginBottom: 8, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 24, height: 24, background: '#1a1a1a', color: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0 }}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>

          {/* 환불 안내 */}
          <div style={{ background: '#F0F4FF', border: '1px solid #C8D6FF', borderRadius: 12, padding: 20, marginBottom: 32 }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>📌 환불 안내</p>
            <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: '#444', lineHeight: 1.8, margin: 0 }}>
              <li>결제 후 <strong>3일 이내, 영상 미시청 시</strong> 100% 환불</li>
              <li>영상 시청 후에는 환불이 불가합니다</li>
              <li>자세한 내용은 <Link href="/refund-policy" style={{ color: '#2A5FFF', textDecoration: 'underline' }}>환불 규정</Link>을 확인해주세요</li>
            </ul>
          </div>

          {/* 결제 컴포넌트 */}
          <CheckoutClient />
        </div>
      </section>

      {/* 푸터 (사업자 정보) */}
      <footer style={{ background: '#111111', color: 'rgba(255,255,255,0.5)', padding: '40px 24px', fontSize: '0.8rem', lineHeight: 1.8 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontWeight: 700, color: '#fff', marginBottom: 8 }}>판매자 정보</p>
          <p>상호명: 찐이지 뷰티샵 비지니스 컨설팅 | 대표자명: 정지은</p>
          <p>사업자등록번호: 542-02-03878 | 통신판매업: 제 2025-서울종로-1362 호</p>
          <p>주소: 충청남도 천안시 동남구 풍세면 풍세산단로 290, 104동 504호</p>
          <p>전화번호: 010-3757-3918 | 이메일: wldms706@naver.com</p>
          <p style={{ marginTop: 12 }}>
            <Link href="/refund-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>환불 규정</Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>홈으로</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
