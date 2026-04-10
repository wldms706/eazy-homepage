import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "찐이지 EAZY 소개 - 7년차 뷰티샵 마케팅 전문가 지은",
  description:
    "네이버 블로그 7년 운영, 월 평균 매출 2000만원, 100명+ 원장님 교육. 뷰티샵 원장님을 위한 마케팅 시스템 '찐이지 EAZY'를 만드는 지은 원장의 이야기.",
  keywords: [
    "찐이지",
    "EAZY",
    "지은 원장",
    "뷰티샵 마케팅 전문가",
    "네이버 블로그 7년",
    "살롱 마케팅 코칭",
  ],
  alternates: {
    canonical: "https://www.jjeen-eazy.com/about",
  },
  openGraph: {
    title: "찐이지 EAZY 소개 - 뷰티샵 마케팅 전문가 지은",
    description:
      "7년차 뷰티샵 마케팅 전문가가 만드는 1인샵 원장님을 위한 마케팅 시스템.",
    url: "https://www.jjeen-eazy.com/about",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-page *, .about-page *::before, .about-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .about-page {
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
        .about-page a { text-decoration: none; color: inherit; }

        .about-page .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(17,17,17,0.9);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        }
        .about-page .header-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .about-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .about-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
        .about-page .back-link:hover { color: #fff; }

        .about-page .section { padding: 0 24px; }
        .about-page .section-inner { max-width: 680px; margin: 0 auto; }

        .about-page .hero { background: var(--bg-dark); padding: 160px 24px 80px; text-align: center; }
        .about-page .hero-quote {
          font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 900; color: #fff;
          line-height: 1.4; margin-bottom: 24px;
        }
        .about-page .hero-quote em { font-style: normal; color: var(--accent); }
        .about-page .hero-context { font-size: 1.05rem; color: rgba(255,255,255,0.45); line-height: 2; }

        .about-page .story { padding: 80px 24px; }
        .about-page .story-label {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .about-page .story-title { font-size: 1.5rem; font-weight: 900; margin-bottom: 24px; line-height: 1.4; }
        .about-page .story-text { font-size: 1.05rem; color: var(--text-sub); line-height: 2.2; margin-bottom: 24px; }
        .about-page .story-text strong { color: var(--text); font-weight: 700; }

        .about-page .stats-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 32px 0;
        }
        .about-page .stat-card {
          background: #F8F8F8; border-radius: 14px; padding: 24px 20px; text-align: center;
        }
        .about-page .stat-num { font-size: 1.6rem; font-weight: 900; color: var(--accent); display: block; margin-bottom: 4px; }
        .about-page .stat-label { font-size: 0.85rem; color: var(--text-sub); }

        .about-page .highlight-box {
          background: var(--bg-dark); color: #fff; border-radius: 16px;
          padding: 32px; text-align: center; font-size: 1.15rem;
          font-weight: 800; line-height: 1.7; margin: 32px 0;
        }
        .about-page .highlight-box em { font-style: normal; color: var(--accent); }

        .about-page .pull-quote {
          border-left: 3px solid var(--accent); padding: 20px 24px;
          margin: 32px 0; background: #F8FAFF; border-radius: 0 12px 12px 0;
        }
        .about-page .pull-quote p { font-size: 1.1rem; font-weight: 700; line-height: 1.7; color: var(--primary); }

        .about-page .divider { height: 1px; background: var(--border); margin: 0; }

        .about-page .cta-section { background: var(--bg-dark); text-align: center; padding: 80px 24px; }
        .about-page .cta-title { font-size: 1.4rem; font-weight: 900; color: #fff; margin-bottom: 12px; line-height: 1.5; }
        .about-page .cta-desc { font-size: 1rem; color: rgba(255,255,255,0.5); margin-bottom: 32px; line-height: 1.8; }
        .about-page .cta-btn {
          display: inline-block; background: var(--accent); color: #fff;
          padding: 16px 40px; border-radius: 12px; font-size: 1rem; font-weight: 700;
          transition: all 0.2s;
        }
        .about-page .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(42,95,255,0.4); }

        @media (max-width: 640px) {
          .about-page .hero { padding: 130px 20px 60px; }
          .about-page .story { padding: 60px 20px; }
          .about-page .stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
      `}</style>

      <div className="about-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/" className="back-link">&larr; 돌아가기</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <img src="/images/about-hero.png" alt="EAZY 대표 지은" style={{ width: '100%', maxWidth: '600px', borderRadius: '16px', margin: '0 auto 40px', display: 'block' }} />
          <h1 className="hero-quote">&ldquo;무모하게도,<br /><em>28% 대출</em>부터 받고<br />시작했습니다.&rdquo;</h1>
          <p className="hero-context">
            26살, 가진 돈 하나 없이<br />
            2400만원 대출로 반영구 샵을 시작했습니다.<br /><br />
            금리가 뭔지도, 28%가 얼마나 무서운 숫자인지도<br />
            제대로 알지 못했던 시절이었습니다.
          </p>
        </section>

        {/* 과거 */}
        <section className="story" style={{ background: '#fff' }}>
          <div className="section-inner">
            <p className="story-label" style={{ color: 'var(--text-light)' }}>과거</p>
            <h2 className="story-title">선택지가 없었던 시절</h2>
            <p className="story-text">
              그때의 저는 선택지가 많지 않았습니다.
              가난한 환경 속에서 자라며 늘 더 나은 삶을 꿈꿨지만,
              무엇을 해야 할지 모르는 사람이었습니다.
            </p>
            <p className="story-text">
              23살, 아무 준비 없이 떠났던 <strong>호주 워킹홀리데이</strong>는
              제 인생의 첫 번째 전환점이 되었습니다.
              영어 한마디 제대로 하지 못했던 그곳에서
              저는 처음으로 깨달았습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '24px 0' }}>
              <img src="/images/workingholiday.jpg" alt="호주 워킹홀리데이" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
              <img src="/images/workingholiday2.jpg" alt="호주 워킹홀리데이" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
            </div>
            <div className="pull-quote">
              <p>&ldquo;나는 우물 안의 개구리였구나.&rdquo;</p>
            </div>
            <p className="story-text">
              그 이후, 더 이상 환경을 탓하지 않기로 했습니다.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* 성장 */}
        <section className="story" style={{ background: '#fff' }}>
          <div className="section-inner">
            <p className="story-label" style={{ color: 'var(--accent)' }}>성장</p>
            <h2 className="story-title">결과를 만들기 시작한 시기</h2>
            <p className="story-text">
              한국으로 돌아온 저는 기술과 마케팅을 동시에 붙잡기 시작했습니다.
              단순히 기술만 잘해서는 오래 살아남을 수 없다는 것을
              일찍 깨달았기 때문입니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '24px 0' }}>
              <img src="/images/shop-open1.jpg" alt="가게 오픈" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
              <img src="/images/shop-open2.jpg" alt="가게 오픈" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
              <img src="/images/shop-open3.jpg" alt="가게 오픈" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
              <img src="/images/shop-open4.jpg" alt="가게 오픈" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} />
            </div>
            <p className="story-text">그 결과,</p>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-num">700만원</span>
                <span className="stat-label">오픈 첫 달 매출</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">6개월</span>
                <span className="stat-label">대출 전액 상환</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">2,000만원</span>
                <span className="stat-label">월 평균 매출</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">2,800만원</span>
                <span className="stat-label">월 최고 매출</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">50만원</span>
                <span className="stat-label">천안아산 최초 시술가</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">1만명+</span>
                <span className="stat-label">누적 시술</span>
              </div>
            </div>

            <p className="story-text">
              이라는 결과를 만들어낼 수 있었습니다.
            </p>

            <div className="highlight-box">
              연고도 없는 지역에서 이 결과를 만들 수 있었던 이유는<br />
              단순한 기술이 아니라 <em>&lsquo;구조&rsquo;를 만들었기 때문</em>입니다.
            </div>

            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 900, marginTop: '32px', marginBottom: '12px' }}>7년 동안 총 매출 <span style={{ color: 'var(--accent)' }}>10억</span> 달성</p>
            <img src="/images/cashpaper.jpg" alt="수입 10억" style={{ width: '100%', borderRadius: '12px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '12px' }}>
              <img src="/images/newshop.jpg" alt="새 매장" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '180px' }} />
              <img src="/images/newshop2.jpg" alt="새 매장 내부" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '180px' }} />
              <img src="/images/siyeon.jpg" alt="시연 교육" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '180px' }} />
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 전환 */}
        <section className="story" style={{ background: '#FAFAFA' }}>
          <div className="section-inner">
            <p className="story-label" style={{ color: '#FF4444' }}>전환</p>
            <h2 className="story-title">가장 중요한 깨달음</h2>
            <p className="story-text">
              하지만 그 과정에서 저는 한 번 무너지게 됩니다.
              매출은 늘어났지만, 몸과 마음은 점점 지쳐갔고
              결국 <strong>번아웃과 우울</strong>을 겪게 되었습니다.
            </p>
            <p className="story-text">
              그때 처음으로 스스로에게 질문했습니다.
            </p>
            <div className="pull-quote">
              <p>&ldquo;나는 왜 이 일을 시작했을까?&rdquo;</p>
            </div>
            <p className="story-text">
              그리고 깨달았습니다.
              제가 가장 행복한 순간은 돈을 벌 때가 아니라,
              <strong>누군가가 제 도움으로 성장하는 모습을 볼 때</strong>라는 것을.
            </p>
          </div>
        </section>

        {/* 현재 */}
        <section className="story" style={{ background: '#fff' }}>
          <div className="section-inner">
            <p className="story-label" style={{ color: 'var(--accent)' }}>현재</p>
            <h2 className="story-title">지금 이 일을 하는 이유</h2>
            <p className="story-text">
              그래서 저는 방향을 바꾸기로 했습니다.
              돈을 더 버는 사람이 아니라,
              <strong>더 많은 원장님들이 살아남을 수 있도록 돕는 사람</strong>이 되기로.
            </p>
            <p className="story-text">
              그렇게 만든 것이
              <strong>블로그라이터</strong>, <strong>홈페이지 구축 서비스</strong>, <strong>매출 구조 코칭</strong>입니다.
            </p>
            <p className="story-text">
              직접 겪어봤기 때문에, 진짜 필요한 것만 만듭니다.
              코칭을 받으신 원장님들의 <strong>평균 매출이 2배</strong> 올랐습니다.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* 마지막 메시지 */}
        <section className="story" style={{ background: '#fff' }}>
          <div className="section-inner">
            <p className="story-label" style={{ color: 'var(--primary)' }}>메시지</p>
            <h2 className="story-title">이 글을 읽고 계신 원장님께</h2>
            <p className="story-text">
              아마 이 글을 읽고 계신 분들 중에는,
              이미 샵을 운영하고 있지만 매출이 들쭉날쭉해 고민하는 분도 있을 것이고,
              아직 시작 전이지만 막막함 속에서 방향을 찾고 있는 분도 있을 겁니다.
            </p>
            <p className="story-text">
              저 역시 같은 시간을 지나왔던 사람이었습니다.
            </p>
            <p className="story-text">
              그래서 저는 단순히 기술을 가르치는 사람이 아니라,
              <strong>혼자서도 살아남을 수 있는 구조를 함께 만들어주는 사람</strong>이 되고 싶습니다.
            </p>

            <div className="highlight-box">
              기술만으로는 오래 살아남기 어렵습니다.<br /><br />
              하지만 구조를 만들면,<br />
              <em>혼자서도 살아남을 수 있습니다.</em><br /><br />
              <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>그것이 제가 이 일을 계속하는 이유입니다.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2 className="cta-title">함께 구조를 만들어보실 원장님,<br />편하게 연락 주세요.</h2>
          <p className="cta-desc">상담은 무료입니다.</p>
          <a href="/#services" className="cta-btn">서비스 둘러보기 &rarr;</a>
        </section>
      </div>
    </>
  );
}
