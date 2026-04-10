import type { Metadata } from "next";
import CoachingTabs from "./CoachingTabs";

export const metadata: Metadata = {
  title: "코칭&대행 | EAZY",
  description: "매출의 판을 짜는 실행메이킹",
  openGraph: {
    title: "코칭&대행 | EAZY",
    description: "매출의 판을 짜는 실행메이킹",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function CoachingPage() {
  return (
    <>
      <style>{`
        .coaching-page *, .coaching-page *::before, .coaching-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .coaching-page {
          --accent: #2A5FFF;
          --bg-dark: #111111;
          --text: #1a1a1a;
          --text-sub: #888;
          --border: #EBEBEB;
          font-family: var(--font-noto-sans-kr), 'Noto Sans KR', -apple-system, sans-serif;
          color: var(--text); line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden; word-break: keep-all; background: #fff;
        }
        .coaching-page a { text-decoration: none; color: inherit; }

        .coaching-page .header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(17,17,17,0.9); backdrop-filter: blur(20px); }
        .coaching-page .header-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .coaching-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .coaching-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }

        .coaching-page .sec { padding: 80px 24px; }
        .coaching-page .inner { max-width: 680px; margin: 0 auto; }
        .coaching-page .title { font-size: 1.5rem; font-weight: 900; margin-bottom: 16px; line-height: 1.4; }
        .coaching-page .desc { font-size: 1.05rem; color: var(--text-sub); line-height: 2; margin-bottom: 24px; }

        .coaching-page .dark-box { background: var(--bg-dark); color: #fff; border-radius: 16px; padding: 28px; text-align: center; font-size: 1.15rem; font-weight: 800; line-height: 1.6; margin: 24px 0; }
        .coaching-page .dark-box em { font-style: normal; color: var(--accent); }
        .coaching-page .blue-box { background: var(--accent); color: #fff; border-radius: 16px; padding: 28px; text-align: center; font-size: 1.15rem; font-weight: 800; line-height: 1.6; margin: 24px 0; }

        .coaching-page .list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
        .coaching-page .list-item { background: #F8F8F8; border-radius: 10px; padding: 16px 20px; font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 10px; }
        .coaching-page .dot::before { content: ''; width: 7px; height: 7px; background: #FF4444; border-radius: 50%; flex-shrink: 0; display: inline-block; }
        .coaching-page .chk::before { content: '\\2713'; width: 24px; height: 24px; background: var(--accent); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.75rem; flex-shrink: 0; }

        .coaching-page .tab-btns { display: flex; max-width: 460px; margin: 0 auto 32px; }
        .coaching-page .tab-btn { flex: 1; padding: 16px; text-align: center; font-size: 0.95rem; font-weight: 700; cursor: pointer; border: none; background: #fff; color: var(--text-sub); border-bottom: 3px solid var(--border); transition: all 0.2s; font-family: inherit; }
        .coaching-page .tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }

        .coaching-page .price-card { background: var(--bg-dark); color: #fff; border-radius: 16px; padding: 28px; text-align: center; margin-bottom: 32px; }
        .coaching-page .price-num { font-size: 2rem; font-weight: 900; }
        .coaching-page .price-sub { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-top: 6px; }

        .coaching-page .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 32px; }
        .coaching-page .info-card { background: #F8F8F8; border-radius: 12px; padding: 20px; text-align: center; }
        .coaching-page .info-card .l { font-size: 0.8rem; color: var(--text-sub); }
        .coaching-page .info-card .v { font-size: 1.2rem; font-weight: 900; margin-top: 2px; }

        .coaching-page .badge { display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 100px; margin-bottom: 14px; }

        .coaching-page .cta-sec { background: var(--bg-dark); text-align: center; padding: 80px 24px; }
        .coaching-page .cta-sec h2 { font-size: 1.4rem; font-weight: 900; color: #fff; margin-bottom: 12px; line-height: 1.5; }
        .coaching-page .cta-sec p { color: rgba(255,255,255,0.5); margin-bottom: 28px; }
        .coaching-page .cta-btn { display: inline-block; background: var(--accent); color: #fff; padding: 16px 40px; border-radius: 12px; font-size: 1rem; font-weight: 700; transition: all 0.2s; }
        .coaching-page .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(42,95,255,0.4); }

        @media (max-width: 640px) { .coaching-page .info-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="coaching-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/" className="back-link">&larr; 돌아가기</a>
          </div>
        </header>

        {/* 히어로 */}
        <section style={{ background: 'var(--bg-dark)', padding: '140px 24px 80px', textAlign: 'center' }}>
          <div className="inner">
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '16px' }}>Coaching &amp; Done-For-You</p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.3, marginBottom: '16px' }}>
              광고 돌려도 매출 안 오르죠?<br /><span style={{ color: 'var(--accent)' }}>&lsquo;판&rsquo;이 없어서입니다.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>
              저희가 매출의 판을 직접 짜드립니다.
            </p>
          </div>
        </section>

        {/* 공감 + 문제 */}
        <section className="sec" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="inner">
            <h2 className="title">이런 상황 아니신가요?</h2>
            <div className="list">
              <div className="list-item dot">광고 돌렸는데 문의가 없다</div>
              <div className="list-item dot">문의는 오는데 예약이 안 된다</div>
              <div className="list-item dot">예약은 되는데 매출이 안 오른다</div>
              <div className="list-item dot">릴스, 블로그, 광고 — 뭘 해야 할지 모르겠다</div>
            </div>
            <div className="dark-box">
              릴스만 찍어도, 광고만 돌려도, 홈페이지만 만들어도 안 됩니다.<br />
              모든 건 연결된 <em>매출 구조</em> 안에서 움직입니다.
            </div>
          </div>
        </section>

        {/* 해결 */}
        <section className="sec" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
          <div className="inner">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '24px', lineHeight: 1.4 }}>저희가 하는 일</h2>
            <div className="list">
              <div className="list-item chk" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>원장님의 막힌 지점 분석</div>
              <div className="list-item chk" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>고객이 들어오는 루트 설계</div>
              <div className="list-item chk" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>릴스 &middot; 광고 &middot; 홈페이지 직접 실행</div>
              <div className="list-item chk" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>EAZY 없어도 돌아가게 구조화</div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 800, marginTop: '32px', color: 'var(--accent)' }}>
              단순 대행이 아닙니다.<br /><span style={{ color: '#fff' }}>결과가 나올 때까지 구조를 다듬습니다.</span>
            </p>
          </div>
        </section>

        {/* 권위 + 감정 */}
        <section className="sec" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="inner" style={{ textAlign: 'center' }}>
            <h2 className="title">7년간 혼자 만든 결과,<br />이제는 원장님과 함께 만듭니다.</h2>
            <p className="desc" style={{ textAlign: 'center' }}>
              혼자 브랜딩하고, 혼자 고객을 만들고, 혼자 살아남았습니다.<br />
              그래서 압니다. 혼자 하는 게 얼마나 비효율적인지.
            </p>
            <div className="blue-box">
              혼자 버티지 않아도 됩니다.<br />이미 겪어본 사람이 있으니까요.
            </div>
          </div>
        </section>

        {/* 탭 */}
        <CoachingTabs />

        {/* CTA */}
        <section className="cta-sec">
          <h2>혼자 고민할지,<br />판을 새로 짤지.</h2>
          <p>상담은 무료입니다.</p>
          <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" className="cta-btn">무료 상담 신청 &rarr;</a>
        </section>
      </div>
    </>
  );
}
