import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "뷰티샵 홈페이지 만들기 - 네이버 검색되는 살롱 홈페이지",
  description:
    "네일샵·반영구·피부관리실 원장님을 위한 뷰티샵 홈페이지 만들기. 네이버 검색 잘 되는 1인샵 홈페이지, 모바일 반응형, 예약·문의까지 한 번에.",
  keywords: [
    "뷰티샵 홈페이지 만들기",
    "네일샵 홈페이지",
    "네일샵 홈페이지 만들기",
    "반영구 홈페이지",
    "반영구 홈페이지 만들기",
    "피부관리실 홈페이지",
    "피부관리실 홈페이지 만들기",
    "1인샵 홈페이지",
    "소규모 매장 홈페이지",
    "살롱 홈페이지",
  ],
  alternates: {
    canonical: "https://www.jjeen-eazy.com/homepage-service",
  },
  openGraph: {
    title: "뷰티샵 홈페이지 만들기 - 네이버 검색되는 살롱 홈페이지",
    description:
      "네이버 검색 잘 되는 1인샵 홈페이지 만들기. 모바일 반응형, 예약·문의까지.",
    url: "https://www.jjeen-eazy.com/homepage-service",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

const BASIC_KR = [
  { name: '뷰티크러쉬', tag: '뷰티 살롱', url: 'https://www.beautycrushbyliz.com', domain: 'beautycrushbyliz.com' },
  { name: '753', tag: 'SMP · 두피문신', url: 'https://www.md-aruem753.co.kr', domain: 'md-aruem753.co.kr' },
  { name: '소브 스튜디오', tag: '반영구 전문', url: 'https://www.sovstudio.com', domain: 'sovstudio.com' },
  { name: '오르다브로우', tag: '반영구 전문', url: 'https://www.ordabrow.co.kr', domain: 'ordabrow.co.kr' },
];

const BASIC_GLOBAL = [
  { name: '래쉬가든', tag: '독일 · 속눈썹', url: 'https://www.lash-garden.com', domain: 'lash-garden.com' },
  { name: '미니라움', tag: '독일 · 반영구', url: 'https://www.miniraum-kosmetik.com/', domain: 'miniraum-kosmetik.com' },
  { name: 'Emma', tag: '뉴질랜드 · 네일', url: 'https://www.designedbyemma-nz.com', domain: 'designedbyemma-nz.com' },
];

const STANDARD = [
  { name: '키아라천안점', tag: '반영구 전문', url: 'https://www.browartist-kwon.co.kr', domain: 'browartist-kwon.co.kr' },
  { name: '앙비떼', tag: '뷰티 아카데미', url: 'https://www.invite-beauty.co.kr', domain: 'invite-beauty.co.kr' },
  { name: '그린결', tag: '반영구 · 글로벌', url: 'https://www.hanibrowglobal.com', domain: 'hanibrowglobal.com' },
];

const FEATURES = [
  '네이버 검색 노출 구조 설계',
  '구글 검색 등록 및 노출 세팅',
  '네이버 서치어드바이저 등록',
  '구글 서치콘솔 등록',
  '무료상담 폼 연결',
  '상담 내용 자동 저장',
  '광고 데이터 수집 (픽셀)',
  '광고 랜딩 연결 구조 설계',
];

type Portfolio = { name: string; tag: string; url: string; domain: string };

function PortfolioCard({ p }: { p: Portfolio }) {
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      borderRadius: '14px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      background: '#fff',
    }}>
      <div style={{ width: '100%', aspectRatio: '16/10', background: '#F8F8F8', overflow: 'hidden', border: '1px solid #EBEBEB', borderRadius: '14px 14px 0 0' }}>
        <iframe src={p.url} loading="lazy" style={{
          width: '200%', height: '200%', border: 'none', pointerEvents: 'none',
          transform: 'scale(0.5)', transformOrigin: 'top left',
        }} />
      </div>
      <div style={{ padding: '18px 4px', borderRadius: '0 0 14px 14px' }}>
        <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>{p.name}</p>
        <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: '8px' }}>{p.tag}</p>
        <p style={{ fontSize: '0.78rem', color: '#1a1a1a', fontWeight: 500 }}>{p.domain} →</p>
      </div>
    </a>
  );
}

export default function HomepageServicePage() {
  return (
    <>
      <style>{`
        .hp-page { color: #1a1a1a; line-height: 1.7; -webkit-font-smoothing: antialiased; overflow-x: hidden; word-break: keep-all; background: #fff; font-family: var(--font-noto-sans-kr), 'Noto Sans KR', -apple-system, sans-serif; }
        .hp-page a { text-decoration: none; color: inherit; }
        .hp-h { font-family: inherit; letter-spacing: -0.02em; }
      `}</style>

      <div className="hp-page">
        {/* Header - 미니멀 */}
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #EBEBEB',
        }}>
          <div style={{
            maxWidth: 1100, margin: '0 auto', padding: '0 24px',
            height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <a href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em' }}>EAZY.</a>
            <a href="/" style={{ color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>← 돌아가기</a>
          </div>
        </header>

        {/* Hero - 미니멀 */}
        <section style={{ padding: '180px 24px 120px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
              Search & Booking Structure
            </p>
            <h1 className="hp-h" style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 900, lineHeight: 1.2,
              marginBottom: '32px',
            }}>
              홈페이지를 만들지 않습니다.<br />
              <span style={{ color: '#999' }}>구조를 만듭니다.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.9, maxWidth: '560px' }}>
              단순한 홈페이지가 아닙니다.<br />
              검색 노출부터 예약까지, 매출이 만들어지는 구조를 설계합니다.
            </p>
          </div>
        </section>

        {/* Section 1: 고객 행동 */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid #EBEBEB' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
              01 — Customer Behavior
            </p>
            <h2 className="hp-h" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '40px' }}>
              고객은 관심이 생기면<br />
              가장 먼저 <span style={{ color: '#999' }}>검색</span>합니다.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 2, marginBottom: '60px' }}>
              광고를 봤든, 소개를 받았든, 릴스를 봤든.<br />
              결국 검색해서 확인합니다.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #EBEBEB' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: '24px', padding: '28px 0', borderBottom: '1px solid #EBEBEB' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#999', letterSpacing: '1px' }}>WORST</span>
                <div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>아무것도 안 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: '#777' }}>&ldquo;여기 진짜 있는 곳이야?&rdquo; → 신뢰 0</p>
                </div>
                <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1a1a1a' }}>95%</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: '24px', padding: '28px 0', borderBottom: '1px solid #EBEBEB' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#999', letterSpacing: '1px' }}>NORMAL</span>
                <div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>블로그만 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: '#777' }}>글 하나하나 읽어야 함 → 정보 흩어짐</p>
                </div>
                <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1a1a1a' }}>70%</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: '24px', padding: '28px 0', borderBottom: '1px solid #EBEBEB' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '1px' }}>BEST</span>
                <div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>전문 홈페이지가 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: '#777' }}>시술, 가격, 후기, 위치 한눈에 → 신뢰 → 예약</p>
                </div>
                <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1a1a1a' }}>15%</p>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '12px', textAlign: 'right' }}>이탈률 기준</p>

            <p style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.8, marginTop: '60px', color: '#1a1a1a' }}>
              블로그 글 10개보다 홈페이지 하나가 더 강력합니다.<br />
              <span style={{ color: '#999', fontWeight: 500, fontSize: '1rem' }}>필요한 정보를 한 번에 보여주니까요.</span>
            </p>
          </div>
        </section>

        {/* Section 2: 문제 */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid #EBEBEB', background: '#FAFAFA' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
              02 — Reality Check
            </p>
            <h2 className="hp-h" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '48px' }}>
              홈페이지, 만들기만 하면<br />
              <span style={{ color: '#999' }}>끝일까요?</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '60px' }}>
              {[
                '만들었는데 검색해도 안 나와요',
                '홈페이지 있는데 문의가 안 들어와요',
                '광고 돌려도 랜딩 연결이 안 돼요',
              ].map((q, i) => (
                <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid #EBEBEB', fontSize: '1.05rem', color: '#444' }}>
                  &ldquo;{q}&rdquo;
                </div>
              ))}
            </div>

            <p style={{ fontSize: '1.3rem', fontWeight: 800, lineHeight: 1.7, color: '#1a1a1a' }}>
              홈페이지는 만드는 게 아니라,<br />
              검색되고, 신뢰하고, 예약하게 만들어야 합니다.
            </p>
          </div>
        </section>

        {/* Section 3: 해결 */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid #EBEBEB' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
              03 — What We Do
            </p>
            <h2 className="hp-h" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '24px' }}>
              우리가 하는 것
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, marginBottom: '48px' }}>
              단순한 홈페이지를 만들지 않습니다. 예약이 이어지는 구조를 만듭니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0', borderTop: '1px solid #EBEBEB' }}>
              {FEATURES.map((item, i) => (
                <div key={i} style={{
                  padding: '24px 0',
                  borderBottom: '1px solid #EBEBEB',
                  ...(i % 2 === 0 ? { paddingRight: '24px' } : { paddingLeft: '24px', borderLeft: '1px solid #EBEBEB' }),
                  fontSize: '1rem', fontWeight: 600, color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', gap: '12px',
                }}>
                  <span style={{ color: '#999', fontWeight: 400, fontSize: '0.85rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </div>
              ))}
            </div>

            <p style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.7, color: '#1a1a1a', marginTop: '60px' }}>
              디자인은 원하시는 대로 만들어드립니다.<br />
              <span style={{ color: '#999', fontWeight: 500, fontSize: '1rem' }}>원장님의 브랜드 컬러, 분위기, 스타일에 맞춰.</span>
            </p>
          </div>
        </section>

        {/* Section 4: 포트폴리오 */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid #EBEBEB', background: '#FAFAFA' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
              04 — Portfolio
            </p>
            <h2 className="hp-h" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '80px' }}>
              실제 만든 홈페이지
            </h2>

            {/* Basic */}
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px', flexWrap: 'wrap', borderTop: '2px solid #1a1a1a', paddingTop: '24px' }}>
                <h3 className="hp-h" style={{ fontSize: '1.6rem', fontWeight: 900 }}>BASIC</h3>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>50만원~</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '32px' }}>원페이지 랜딩 · 시술 소개 · 모바일 최적화 · 도메인 연결</p>

              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#999', letterSpacing: '1px', marginBottom: '16px' }}>국내</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {BASIC_KR.map((p) => <PortfolioCard key={p.url} p={p} />)}
              </div>

              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#999', letterSpacing: '1px', marginBottom: '16px' }}>해외</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
                {BASIC_GLOBAL.map((p) => <PortfolioCard key={p.url} p={p} />)}
              </div>
            </div>

            {/* Standard */}
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px', flexWrap: 'wrap', borderTop: '2px solid #1a1a1a', paddingTop: '24px' }}>
                <h3 className="hp-h" style={{ fontSize: '1.6rem', fontWeight: 900 }}>STANDARD</h3>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>100만원~</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '32px' }}>다페이지 구성 · 포트폴리오 · 브랜딩 디자인</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
                {STANDARD.map((p) => <PortfolioCard key={p.url} p={p} />)}
              </div>
            </div>

            {/* Premium */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px', flexWrap: 'wrap', borderTop: '2px solid #1a1a1a', paddingTop: '24px' }}>
                <h3 className="hp-h" style={{ fontSize: '1.6rem', fontWeight: 900 }}>PREMIUM</h3>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a' }}>200만원~</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '32px' }}>풀 커스텀 · 결제 시스템 · 관리자 대시보드 · 유지보수 포함</p>
              <div style={{ padding: '60px 40px', border: '1px dashed #DDD', borderRadius: '14px', textAlign: 'center' }}>
                <p style={{ color: '#999', fontSize: '0.95rem' }}>프리미엄 포트폴리오 준비 중</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - 미니멀 */}
        <section style={{ padding: '140px 24px', borderTop: '1px solid #EBEBEB' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#999', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Let&apos;s Start
            </p>
            <h2 className="hp-h" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '24px' }}>
              내 샵에 맞는 구조,<br />
              제안드립니다.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, marginBottom: '48px' }}>
              홈페이지 제작부터 검색 노출 세팅까지.<br />
              상담은 무료입니다.
            </p>

            <a
              href="http://pf.kakao.com/_yCZQn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1a1a1a',
                borderBottom: '2px solid #1a1a1a',
                padding: '12px 0',
              }}
            >
              무료 상담 신청 →
            </a>
            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '20px' }}>카카오톡으로 편하게 문의하세요</p>
          </div>
        </section>
      </div>
    </>
  );
}
