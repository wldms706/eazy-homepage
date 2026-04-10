import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "검색되는 홈페이지 구축 | EAZY",
  description: "뷰티샵 원장님을 위한 마케팅 시스템",
  openGraph: {
    title: "EAZY - 찐이지 시스템",
    description: "뷰티샵 원장님을 위한 마케팅 시스템",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function HomepageServicePage() {
  return (
    <>
      <style>{`
        .hp-page *, .hp-page *::before, .hp-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .hp-page {
          --primary: #1a1a2e;
          --accent: #2A5FFF;
          --bg-dark: #111111;
          --text: #1a1a1a;
          --text-sub: #888888;
          --text-light: #aaaaaa;
          --border: #EBEBEB;
          font-family: var(--font-noto-sans-kr), 'Noto Sans KR', -apple-system, sans-serif;
          color: var(--text); line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden; word-break: keep-all; background: #fff;
        }
        .hp-page a { text-decoration: none; color: inherit; }

        .hp-page .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(17,17,17,0.9);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        }
        .hp-page .header-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .hp-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .hp-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
        .hp-page .back-link:hover { color: #fff; }

        .hp-page .hero { background: var(--bg-dark); padding: 140px 24px 80px; text-align: center; }
        .hp-page .hero-sub { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin-bottom: 16px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; }
        .hp-page .hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: #fff; margin-bottom: 16px; line-height: 1.3; }
        .hp-page .hero-title em { font-style: normal; color: var(--accent); }
        .hp-page .hero-desc { font-size: 1.1rem; color: rgba(255,255,255,0.5); max-width: 600px; margin: 0 auto; }

        .hp-page .section { padding: 80px 24px; }
        .hp-page .section-inner { max-width: 1000px; margin: 0 auto; }

        .hp-page .tier { margin-bottom: 64px; }
        .hp-page .tier-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px; flex-wrap: wrap; }
        .hp-page .tier-name { font-size: 1.4rem; font-weight: 900; }
        .hp-page .tier-price { font-size: 1.4rem; font-weight: 900; color: var(--accent); }
        .hp-page .tier-desc { font-size: 0.95rem; color: var(--text-sub); margin-bottom: 28px; }

        .hp-page .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .hp-page .portfolio-card {
          border: 1px solid var(--border); border-radius: 14px; overflow: hidden;
          transition: all 0.3s; display: block;
        }
        .hp-page .portfolio-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .hp-page .portfolio-thumb {
          width: 100%; aspect-ratio: 16/10; border: none; display: block; background: #f5f5f5;
        }
        .hp-page .portfolio-info { padding: 16px 18px; }
        .hp-page .portfolio-name { font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
        .hp-page .portfolio-tag { font-size: 0.75rem; color: var(--text-light); }
        .hp-page .portfolio-url { font-size: 0.8rem; color: var(--accent); font-weight: 600; margin-top: 6px; display: block; }

        .hp-page .sub-label {
          font-size: 0.8rem; font-weight: 700; color: var(--text-sub);
          letter-spacing: 1px; text-transform: uppercase; margin: 32px 0 16px;
        }

        .hp-page .cta-section { background: var(--bg-dark); text-align: center; padding: 80px 24px; }
        .hp-page .cta-title { font-size: 1.6rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .hp-page .cta-desc { font-size: 1rem; color: rgba(255,255,255,0.5); margin-bottom: 32px; }
        .hp-page .cta-btn {
          display: inline-block; background: var(--accent); color: #fff;
          padding: 16px 40px; border-radius: 12px; font-size: 1rem; font-weight: 700;
          transition: all 0.2s;
        }
        .hp-page .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(42,95,255,0.4); }
        .hp-page .cta-note { font-size: 0.8rem; color: rgba(255,255,255,0.3); margin-top: 12px; }

        @media (max-width: 640px) {
          .hp-page .hero { padding: 120px 20px 60px; }
          .hp-page .portfolio-grid { grid-template-columns: 1fr; }
          .hp-page .tier-header { flex-direction: column; gap: 4px; }
        }
      `}</style>

      <div className="hp-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/" className="back-link">&larr; 돌아가기</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <p className="hero-sub">Search &amp; Booking Structure</p>
          <h1 className="hero-title">홈페이지를 만드는 게 아니라,<br /><em>검색되고 예약까지 이어지는 구조</em>를 만듭니다.</h1>
          <p className="hero-desc">단순한 홈페이지가 아닙니다. 검색 노출부터 예약까지, 구조를 설계합니다.</p>
        </section>

        {/* 고객 심리 흐름 */}
        <section className="section" style={{ background: '#fff', borderBottom: '1px solid var(--border)' }}>
          <div className="section-inner" style={{ maxWidth: '720px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '32px', textAlign: 'center', lineHeight: 1.5 }}>
              고객이 우리 샵에 관심 생기면<br />제일 먼저 뭘 할까요?
            </h2>
            <div style={{ background: 'var(--bg-dark)', color: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center', fontSize: '1.3rem', fontWeight: 900, marginBottom: '40px' }}>
              검색합니다.
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-sub)', textAlign: 'center', lineHeight: 2, marginBottom: '48px' }}>
              &ldquo;이 샵 진짜 괜찮은 곳인가?&rdquo;<br />
              광고를 봤든, 소개를 받았든, 릴스를 봤든<br />
              결국 <strong style={{ color: 'var(--text)' }}>검색해서 확인</strong>합니다.
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, textAlign: 'center', marginBottom: '24px' }}>검색했을 때, 뭐가 나오나요?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {/* WORST */}
              <div style={{ background: '#FFF5F5', border: '1px solid #FFE0E0', borderRadius: '14px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF4444', marginBottom: '8px' }}>WORST</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>아무것도 안 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.7 }}>&rarr; &ldquo;여기 진짜 있는 곳이야?&rdquo; &rarr; 신뢰 0 &rarr; 이탈</p>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ fontSize: '2rem', fontWeight: 900, color: '#FF4444' }}>95%</p>
                  <p style={{ fontSize: '0.75rem', color: '#FF4444', fontWeight: 600 }}>이탈률</p>
                </div>
              </div>
              {/* NORMAL */}
              <div style={{ background: '#FFFBF0', border: '1px solid #FFE8B0', borderRadius: '14px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E89800', marginBottom: '8px' }}>NORMAL</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>블로그만 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.7 }}>&rarr; 글 하나하나 읽어야 함 &rarr; 정보가 흩어져 있음</p>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ fontSize: '2rem', fontWeight: 900, color: '#E89800' }}>70%</p>
                  <p style={{ fontSize: '0.75rem', color: '#E89800', fontWeight: 600 }}>이탈률</p>
                </div>
              </div>
              {/* BEST */}
              <div style={{ background: '#F0F4FF', border: '1px solid #C8D6FF', borderRadius: '14px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>BEST</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>전문 홈페이지가 나온다</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.7 }}>&rarr; 시술, 가격, 후기, 위치 한눈에 &rarr; <strong style={{ color: 'var(--accent)' }}>신뢰 &rarr; 예약</strong></p>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>15%</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>이탈률</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-dark)', color: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center', fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.7 }}>
              블로그 글 10개보다<br />홈페이지 하나가 <span style={{ color: 'var(--accent)' }}>더 강력합니다.</span><br />
              <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>필요한 정보를 한 번에 보여주니까요.</span>
            </div>
          </div>
        </section>

        {/* 문제 제기 */}
        <section className="section" style={{ background: '#FAFAFA', borderBottom: '1px solid var(--border)' }}>
          <div className="section-inner" style={{ maxWidth: '720px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '24px', textAlign: 'center', lineHeight: 1.5 }}>
              근데 홈페이지,<br />만들기만 하면 끝일까요?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-sub)', textAlign: 'center', lineHeight: 1.9, marginBottom: '40px' }}>
              대부분의 원장님이 홈페이지를 만들고 나서 이렇게 말합니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '18px 24px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border)' }}>
                <span style={{ width: '8px', height: '8px', background: '#FF4444', borderRadius: '50%', flexShrink: 0 }}></span>
                &ldquo;만들었는데 검색해도 안 나와요&rdquo;
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '18px 24px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border)' }}>
                <span style={{ width: '8px', height: '8px', background: '#FF4444', borderRadius: '50%', flexShrink: 0 }}></span>
                &ldquo;홈페이지 있는데 문의가 안 들어와요&rdquo;
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '18px 24px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border)' }}>
                <span style={{ width: '8px', height: '8px', background: '#FF4444', borderRadius: '50%', flexShrink: 0 }}></span>
                &ldquo;광고 돌려도 랜딩 연결이 안 돼요&rdquo;
              </div>
            </div>
            <div style={{ background: 'var(--accent)', color: '#fff', borderRadius: '16px', padding: '28px', textAlign: 'center', fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.6 }}>
              홈페이지는 만드는 게 아니라<br />검색되고, 신뢰하고, 예약하게 만들어야 합니다.
            </div>
          </div>
        </section>

        {/* 해결 제시 */}
        <section className="section" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
          <div className="section-inner" style={{ maxWidth: '720px' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Do</p>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px', lineHeight: 1.5 }}>
              우리는 단순한 홈페이지를 만들지 않습니다.<br />예약이 이어지는 구조를 만듭니다.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.8 }}>
              그리고 고객이 검색했을 때 보이도록 만듭니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '40px' }}>
              {['네이버 검색 노출 구조 설계', '구글 검색 등록 및 노출 세팅', '네이버 서치어드바이저 등록', '구글 서치콘솔 등록', '무료상담 폼 연결', '상담 내용 자동 저장', '광고 데이터 수집 (픽셀)', '광고 랜딩 연결 구조 설계'].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '20px' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 800 }}>&#10004;</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '8px' }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(42,95,255,0.15)', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.6 }}>
                고객은 광고만 보고 끝나는 게 아니라<br />검색하고, 확인하고, <span style={{ color: 'var(--accent)' }}>신뢰하고 예약하게 됩니다.</span>
              </p>
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.6, marginBottom: '12px' }}>
                디자인은 <span style={{ color: 'var(--accent)' }}>원하시는 대로</span> 만들어드립니다.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                원장님의 브랜드 컬러, 분위기, 스타일에 맞춰<br />세상에 하나뿐인 홈페이지를 제작합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section">
          <div className="section-inner">
            {/* Basic */}
            <div className="tier">
              <div className="tier-header">
                <span className="tier-name">Basic</span>
                <span className="tier-price">50만원~</span>
              </div>
              <p className="tier-desc">원페이지 랜딩 &middot; 시술 소개 &middot; 모바일 최적화 &middot; 도메인 연결</p>

              <p className="sub-label">국내</p>
              <div className="portfolio-grid">
                <a href="https://www.beautycrushbyliz.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.beautycrushbyliz.com" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">뷰티크러쉬</p>
                    <span className="portfolio-tag">뷰티 살롱</span>
                    <span className="portfolio-url">beautycrushbyliz.com</span>
                  </div>
                </a>
                <a href="https://www.md-aruem753.co.kr" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.md-aruem753.co.kr" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">753</p>
                    <span className="portfolio-tag">SMP &middot; 두피문신</span>
                    <span className="portfolio-url">md-aruem753.co.kr</span>
                  </div>
                </a>
                <a href="https://www.sovstudio.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.sovstudio.com" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">소브 스튜디오</p>
                    <span className="portfolio-tag">반영구 전문</span>
                    <span className="portfolio-url">sovstudio.com</span>
                  </div>
                </a>
                <a href="https://www.ordabrow.co.kr" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.ordabrow.co.kr" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">오르다브로우</p>
                    <span className="portfolio-tag">반영구 전문</span>
                    <span className="portfolio-url">ordabrow.co.kr</span>
                  </div>
                </a>
              </div>

              <p className="sub-label">해외</p>
              <div className="portfolio-grid">
                <a href="https://www.lash-garden.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.lash-garden.com" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">래쉬가든</p>
                    <span className="portfolio-tag">독일 &middot; 속눈썹</span>
                    <span className="portfolio-url">lash-garden.com</span>
                  </div>
                </a>
                <a href="https://www.miniraum-kosmetik.com/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.miniraum-kosmetik.com/" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">미니라움</p>
                    <span className="portfolio-tag">독일 &middot; 반영구</span>
                    <span className="portfolio-url">miniraum-kosmetik.com</span>
                  </div>
                </a>
                <a href="https://www.designedbyemma-nz.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.designedbyemma-nz.com" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">Emma</p>
                    <span className="portfolio-tag">뉴질랜드 &middot; 네일</span>
                    <span className="portfolio-url">designedbyemma-nz.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Standard */}
            <div className="tier">
              <div className="tier-header">
                <span className="tier-name">Standard</span>
                <span className="tier-price">100만원~</span>
              </div>
              <p className="tier-desc">다페이지 구성 &middot; 포트폴리오 &middot; 브랜딩 디자인</p>

              <div className="portfolio-grid">
                <a href="https://www.browartist-kwon.co.kr" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.browartist-kwon.co.kr" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">키아라천안점</p>
                    <span className="portfolio-tag">반영구 전문</span>
                    <span className="portfolio-url">browartist-kwon.co.kr</span>
                  </div>
                </a>
                <a href="https://www.invite-beauty.co.kr" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.invite-beauty.co.kr" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">앙비떼</p>
                    <span className="portfolio-tag">뷰티 아카데미</span>
                    <span className="portfolio-url">invite-beauty.co.kr</span>
                  </div>
                </a>
                <a href="https://www.hanibrowglobal.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                  <iframe src="https://www.hanibrowglobal.com" className="portfolio-thumb" loading="lazy" style={{ pointerEvents: 'none' }}></iframe>
                  <div className="portfolio-info">
                    <p className="portfolio-name">그린결</p>
                    <span className="portfolio-tag">반영구 &middot; 글로벌</span>
                    <span className="portfolio-url">hanibrowglobal.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Premium */}
            <div className="tier">
              <div className="tier-header">
                <span className="tier-name">Premium</span>
                <span className="tier-price">200만원~</span>
              </div>
              <p className="tier-desc">풀 커스텀 &middot; 결제 시스템 &middot; 관리자 대시보드 &middot; 유지보수 포함</p>
              <div style={{ padding: '40px', border: '1px dashed var(--border)', borderRadius: '16px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>프리미엄 포트폴리오 준비 중</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <p className="cta-desc">검색되는 홈페이지, 궁금하신가요?</p>
          <h2 className="cta-title">내 샵에 맞는 구조를 제안드립니다.</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '32px', lineHeight: 1.8 }}>홈페이지 제작부터 검색 노출 세팅까지, 상담은 무료입니다.</p>
          <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" className="cta-btn">무료 상담 신청 &rarr;</a>
          <p className="cta-note">카카오톡으로 편하게 문의하세요</p>
        </section>
      </div>
    </>
  );
}
