import Link from "next/link";

export const metadata = {
  title: "후기 작성 완료 | EAZY",
};

const VIDEO_URL = "https://drive.google.com/file/d/1QajWU_HD2kcn1VoafrQSIr7xUyWRYHWe/preview";

export default function ThankYouPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
        {/* 감사 */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, background: '#2A5FFF', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: 20 }}>✓</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 12 }}>후기 감사합니다!</h1>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.8 }}>
            관리자 확인 후 공개됩니다.<br />
            약속드린 <strong style={{ color: '#2A5FFF' }}>무료 자료 영상</strong>은 아래에서 바로 시청하세요.
          </p>
        </div>

        {/* 영상 */}
        <div style={{ background: '#1a1a1a', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', marginBottom: 24 }}>
          <div style={{ padding: '20px 24px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFD700', letterSpacing: '1px', marginBottom: 4 }}>🎁 GIFT FOR YOU</p>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 900 }}>무료 자료 영상</h2>
            </div>
            <span style={{ background: '#FFD700', color: '#1a1a1a', padding: '6px 14px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900 }}>
              ⏰ 18분부터 보세요
            </span>
          </div>
          <div style={{ aspectRatio: '16/9', background: '#000' }}>
            <iframe
              src={VIDEO_URL}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{ background: '#F0F4FF', borderRadius: 12, padding: '16px 20px', fontSize: '0.85rem', color: '#444', lineHeight: 1.8, marginBottom: 32 }}>
          💡 영상이 안 보이거나 다운로드가 필요하시면 카카오톡 채널로 문의 주세요.<br />
          🎯 <strong>18분 지점부터</strong> 핵심 내용입니다.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/live-reviews" style={{
            display: 'block',
            padding: '16px',
            background: '#1a1a1a',
            color: '#fff',
            borderRadius: 12,
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}>다른 원장님들 후기 보기 →</Link>
          <Link href="/" style={{
            display: 'block',
            padding: '14px',
            background: '#fff',
            color: '#1a1a1a',
            border: '1px solid #EBEBEB',
            borderRadius: 12,
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}>홈으로 돌아가기</Link>
        </div>
      </main>
    </div>
  );
}
