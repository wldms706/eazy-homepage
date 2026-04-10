import type { Metadata } from "next";
import { CounterAnimation, ReviewImageSlider, FloatingCTA } from "./BlogwriterClient";

export const metadata: Metadata = {
  title: "블로그라이터 | EAZY",
  description: "3분 만에 네이버 상위노출 블로그 글 완성. GPT보다 빠르고, 결과가 다릅니다.",
  openGraph: {
    title: "EAZY - 찐이지 시스템",
    description: "뷰티샵 원장님을 위한 마케팅 시스템",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function BlogwriterPage() {
  return (
    <>
      <style>{`
        .bw-page *, .bw-page *::before, .bw-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .bw-page {
          --primary: #1a1a2e;
          --accent: #2A5FFF;
          --bg-dark: #111111;
          --text: #1a1a1a;
          --text-sub: #888888;
          --border: #EBEBEB;
          font-family: var(--font-noto-sans-kr), 'Noto Sans KR', -apple-system, sans-serif;
          color: var(--text); line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden; word-break: keep-all; overflow-wrap: break-word;
        }
        .bw-page a { text-decoration: none; color: inherit; }

        .bw-page .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(17,17,17,0.9);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        }
        .bw-page .header-inner {
          max-width: 1000px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .bw-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .bw-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
        .bw-page .back-link:hover { color: #fff; }

        .bw-page .section { padding: 100px 24px; }
        .bw-page .section-inner { max-width: 720px; margin: 0 auto; }

        /* HERO */
        .bw-page .hero-section { background: var(--bg-dark); padding: 140px 24px 80px; text-align: center; }
        .bw-page .hero-section .section-inner { max-width: 800px; }
        .bw-page .hero-sub { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; }
        .bw-page .hero-headline { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; color: #fff; line-height: 1.25; margin-bottom: 20px; }
        .bw-page .hero-headline em { font-style: normal; color: var(--accent); }
        .bw-page .hero-desc { font-size: 1.15rem; color: rgba(255,255,255,0.5); margin-bottom: 40px; }
        .bw-page .hero-cta-wrap { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .bw-page .btn-main {
          display: inline-block; background: var(--accent); color: #fff;
          font-size: 1.15rem; font-weight: 800; padding: 18px 48px; border-radius: 12px;
          transition: all 0.2s;
        }
        .bw-page .btn-main:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(42,95,255,0.4); }
        .bw-page .hero-note { font-size: 0.85rem; color: rgba(255,255,255,0.3); }
        .bw-page .hero-counter { margin-top: 48px; display: flex; justify-content: center; gap: 48px; }
        .bw-page .counter-item { text-align: center; }
        .bw-page .counter-num { font-size: 2.2rem; font-weight: 900; color: var(--accent); display: block; }
        .bw-page .counter-label { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

        /* AUTHORITY */
        .bw-page .authority-section { background: var(--bg-dark); color: #fff; }
        .bw-page .authority-title { font-size: 1.1rem; color: rgba(255,255,255,0.4); margin-bottom: 32px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
        .bw-page .authority-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 40px; }
        .bw-page .authority-stat { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 28px 24px; }
        .bw-page .authority-stat strong { display: block; font-size: 1.8rem; font-weight: 900; color: var(--accent); margin-bottom: 4px; }
        .bw-page .authority-stat span { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
        .bw-page .authority-quote { font-size: 1.4rem; font-weight: 800; line-height: 1.5; text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.1); }
        .bw-page .authority-quote em { font-style: normal; color: var(--accent); }

        /* PROBLEM */
        .bw-page .problem-section { background: #fff; border-bottom: 1px solid var(--border); }
        .bw-page .problem-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 12px; }
        .bw-page .problem-sub { font-size: 1.05rem; color: var(--text-sub); margin-bottom: 40px; }
        .bw-page .problem-list { list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
        .bw-page .problem-list li {
          background: #F8F8F8; border-radius: 12px; padding: 20px 24px;
          font-size: 1.05rem; font-weight: 500; display: flex; align-items: center; gap: 12px;
        }
        .bw-page .problem-list li::before { content: ''; width: 8px; height: 8px; background: #FF4444; border-radius: 50%; flex-shrink: 0; }
        .bw-page .problem-quote {
          font-size: 1.3rem; font-weight: 800; text-align: center; padding: 32px;
          background: var(--bg-dark); color: #fff; border-radius: 16px;
        }
        .bw-page .problem-quote em { font-style: normal; color: var(--accent); }

        /* SOLUTION */
        .bw-page .solution-section { background: var(--accent); color: #fff; }
        .bw-page .solution-title { font-size: 2rem; font-weight: 900; margin-bottom: 16px; line-height: 1.3; }
        .bw-page .solution-desc { font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 40px; line-height: 1.8; }
        .bw-page .solution-features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
        .bw-page .solution-feature { background: rgba(255,255,255,0.15); border-radius: 12px; padding: 20px 24px; font-size: 1.05rem; font-weight: 600; display: flex; align-items: center; gap: 12px; }
        .bw-page .solution-feature::before { content: '\\2713'; width: 28px; height: 28px; background: #fff; color: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.85rem; flex-shrink: 0; }
        .bw-page .solution-highlight { font-size: 1.3rem; font-weight: 800; text-align: center; padding: 24px; background: rgba(0,0,0,0.15); border-radius: 12px; }

        /* PROOF */
        .bw-page .proof-section { background: #fff; border-bottom: 1px solid var(--border); }
        .bw-page .proof-title { font-size: 1.8rem; font-weight: 900; text-align: center; margin-bottom: 12px; }
        .bw-page .proof-sub { text-align: center; color: var(--text-sub); margin-bottom: 40px; }

        /* DEMO */
        .bw-page .demo-section { background: var(--bg-dark); color: #fff; }
        .bw-page .demo-title { font-size: 1.8rem; font-weight: 900; text-align: center; margin-bottom: 12px; }
        .bw-page .demo-sub { text-align: center; color: rgba(255,255,255,0.5); margin-bottom: 48px; }
        .bw-page .demo-steps { display: flex; flex-direction: column; gap: 0; }
        .bw-page .demo-step {
          display: flex; align-items: flex-start; gap: 20px; padding: 32px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .bw-page .demo-step:last-child { border-bottom: none; }
        .bw-page .demo-step-num {
          width: 48px; height: 48px; background: var(--accent); border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; font-weight: 900; flex-shrink: 0;
        }
        .bw-page .demo-step-content h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; }
        .bw-page .demo-step-content p { font-size: 0.95rem; color: rgba(255,255,255,0.5); }
        .bw-page .demo-time {
          text-align: center; margin-top: 40px; padding: 24px;
          background: rgba(42,95,255,0.15); border-radius: 16px;
          font-size: 1.3rem; font-weight: 800;
        }
        .bw-page .demo-time em { font-style: normal; color: var(--accent); }

        /* OLDWAY */
        .bw-page .oldway-section { background: #fff; border-bottom: 1px solid var(--border); }
        .bw-page .oldway-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 12px; }
        .bw-page .oldway-sub { color: var(--text-sub); font-size: 1.05rem; margin-bottom: 36px; }
        .bw-page .oldway-steps { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .bw-page .oldway-step { display: flex; align-items: center; gap: 16px; padding: 18px 24px; background: #F8F8F8; border-radius: 12px; font-size: 1.05rem; }
        .bw-page .oldway-step .num { width: 32px; height: 32px; background: var(--primary); color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; }

        /* BA */
        .bw-page .ba-section { background: #FAFAFA; }
        .bw-page .ba-title { font-size: 1.8rem; font-weight: 900; text-align: center; margin-bottom: 40px; }
        .bw-page .ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
        .bw-page .ba-card { border-radius: 16px; padding: 28px 24px; }
        .bw-page .ba-card.before { background: #fff; border: 1px solid var(--border); }
        .bw-page .ba-card.after { background: var(--bg-dark); color: #fff; }
        .bw-page .ba-label { font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
        .bw-page .ba-card.before .ba-label { color: #FF4444; }
        .bw-page .ba-card.after .ba-label { color: var(--accent); }
        .bw-page .ba-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 12px; }
        .bw-page .ba-card.after h3 { color: #fff; }
        .bw-page .ba-text { font-size: 0.9rem; line-height: 1.7; }
        .bw-page .ba-card.before .ba-text { color: var(--text-sub); }
        .bw-page .ba-card.after .ba-text { color: rgba(255,255,255,0.6); }
        .bw-page .ba-verdict { text-align: center; font-size: 1.2rem; font-weight: 800; color: var(--accent); }

        /* DIFF */
        .bw-page .diff-section { background: #fff; border-bottom: 1px solid var(--border); }
        .bw-page .diff-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 36px; text-align: center; }
        .bw-page .diff-table { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
        .bw-page .diff-card { border-radius: 16px; padding: 32px 24px; text-align: center; }
        .bw-page .diff-card.gpt { background: #F8F8F8; border: 1px solid var(--border); }
        .bw-page .diff-card.ours { background: var(--bg-dark); color: #fff; }
        .bw-page .diff-card h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; }
        .bw-page .diff-card.ours h3 { color: var(--accent); }
        .bw-page .diff-card p { font-size: 0.95rem; line-height: 1.6; }
        .bw-page .diff-card.gpt p { color: var(--text-sub); }
        .bw-page .diff-card.ours p { color: rgba(255,255,255,0.6); }
        .bw-page .diff-bottom { text-align: center; font-size: 1.2rem; font-weight: 800; color: var(--accent); }

        /* TARGET */
        .bw-page .target-section { background: #FAFAFA; }
        .bw-page .target-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 32px; text-align: center; }
        .bw-page .target-list { display: flex; flex-direction: column; gap: 14px; max-width: 520px; margin: 0 auto; }
        .bw-page .target-item { display: flex; align-items: center; gap: 14px; padding: 20px 24px; background: #fff; border-radius: 12px; border: 1px solid var(--border); font-size: 1.05rem; font-weight: 500; }
        .bw-page .target-item::before { content: '\\2192'; color: var(--accent); font-weight: 900; font-size: 1.2rem; flex-shrink: 0; }

        /* CTA */
        .bw-page .cta-section { background: var(--bg-dark); color: #fff; text-align: center; }
        .bw-page .cta-title { font-size: 1.6rem; font-weight: 800; margin-bottom: 12px; line-height: 1.4; }
        .bw-page .cta-sub { font-size: 1.1rem; color: rgba(255,255,255,0.5); margin-bottom: 8px; }
        .bw-page .cta-highlight { font-size: 1.8rem; font-weight: 900; margin-bottom: 40px; }
        .bw-page .cta-highlight em { font-style: normal; color: var(--accent); }
        .bw-page .cta-note { margin-top: 16px; font-size: 0.85rem; color: rgba(255,255,255,0.3); }

        /* Floating CTA */
        .bw-page .floating-cta {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          z-index: 99; background: var(--accent); color: #fff;
          padding: 14px 36px; border-radius: 100px; font-size: 1rem; font-weight: 800;
          box-shadow: 0 4px 24px rgba(42,95,255,0.4);
          transition: all 0.2s;
        }
        .bw-page .floating-cta:hover { transform: translateX(-50%) translateY(-2px); box-shadow: 0 8px 32px rgba(42,95,255,0.5); }

        /* Review Image Slider */
        .bw-page .review-img-slider {
          display: flex; gap: 16px; width: max-content;
          animation: bwReviewImgScroll 50s linear infinite;
          padding: 0 16px;
        }
        .bw-page .review-img-slider:hover { animation-play-state: paused; }
        .bw-page .review-img-slider img {
          flex-shrink: 0; height: 400px; width: auto;
          border-radius: 12px; border: 1px solid var(--border);
        }
        @keyframes bwReviewImgScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .bw-page .hero-section { padding: 130px 20px 60px; }
          .bw-page .section { padding: 72px 20px; }
          .bw-page .authority-stats { grid-template-columns: 1fr; }
          .bw-page .diff-table, .bw-page .ba-grid { grid-template-columns: 1fr; }
          .bw-page .hero-counter { gap: 24px; }
          .bw-page .counter-num { font-size: 1.6rem; }
          .bw-page .floating-cta { padding: 12px 28px; font-size: 0.9rem; bottom: 16px; }
        }
      `}</style>

      <div className="bw-page">
        {/* Header */}
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/" className="back-link">&larr; 돌아가기</a>
          </div>
        </header>

        {/* 1. Hero */}
        <section className="hero-section">
          <div className="section-inner">
            <p className="hero-sub">Blog Writer by EAZY</p>
            <h1 className="hero-headline">
              네이버 블로그?<br /><em>배우지 마세요.</em>
            </h1>
            <p className="hero-desc">배울 시간에 글 하나 더 올리세요.<br />3분이면 상위노출 글이 완성됩니다.</p>
            <div className="hero-cta-wrap">
              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>월 19,900원</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF4444', marginLeft: '8px' }}>SALE 월 9,900원</span>
              </div>
              <a href="https://www.blogwriter.co.kr" target="_blank" rel="noopener noreferrer" className="btn-main">무료로 3번 써보기 &rarr;</a>
              <span className="hero-note">가입 즉시 &middot; 카드 등록 없음 &middot; 베타 한정 가격</span>
            </div>
            <div className="hero-counter">
              <div className="counter-item">
                <CounterAnimation />
                <span className="counter-label">생성된 글</span>
              </div>
              <div className="counter-item">
                <span className="counter-num">320+</span>
                <span className="counter-label">사용 중인 원장님</span>
              </div>
              <div className="counter-item">
                <span className="counter-num">3분</span>
                <span className="counter-label">평균 작성 시간</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 권위 */}
        <section className="section authority-section">
          <div className="section-inner">
            <p className="authority-title">이걸 왜 제가 만들었냐면</p>
            <div className="authority-stats">
              <div className="authority-stat"><strong>7년</strong><span>네이버 블로그 직접 운영</span></div>
              <div className="authority-stat"><strong>100명+</strong><span>원장님에게 블로그 교육</span></div>
              <div className="authority-stat"><strong>5,000만원</strong><span>블로그 강의 매출</span></div>
              <div className="authority-stat"><strong>2,000만원</strong><span>블로그로 만든 월 매출</span></div>
            </div>
            <div style={{ margin: '32px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src="/images/lecture-proof.png" alt="블로그 전자강의 실제 판매 화면" style={{ width: '100%', display: 'block' }} />
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '32px' }}>실제 블로그 전자강의 판매 화면 (선착순 40명 마감)</p>
            <p className="authority-quote" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              7년 동안 블로그로 매출을 만들었고,<br />
              그 방법을 100명 넘는 원장님께 가르쳤습니다.<br /><br />
              강의만으로 <em>5,000만원</em>을 벌었으니까<br />
              이 방법이 통한다는 건 확실합니다.
            </p>
          </div>
        </section>

        {/* 3. 문제 */}
        <section className="section problem-section">
          <div className="section-inner">
            <h2 className="problem-title">근데 솔직히,<br />가르치면서 계속 느꼈습니다.</h2>
            <p className="problem-sub">원장님들이 힘들어하는 건 &ldquo;몰라서&rdquo;가 아니었어요.</p>
            <ul className="problem-list">
              <li>방법은 알겠는데, 쓸 시간이 없다</li>
              <li>본업(시술)에 집중하기도 바쁘다</li>
              <li>매일 글 쓰는 게 결국 지친다</li>
              <li>GPT로 뽑아봐도 네이버에선 안 먹힌다</li>
            </ul>
            <div className="problem-quote">
              결국 배워도 &ldquo;<em>실행이 안 되면</em> 의미가 없더라고요&rdquo;
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px', padding: '28px 24px', background: 'var(--accent)', borderRadius: '16px', color: '#fff' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.6, margin: 0 }}>
                원장님은 시술에 집중하세요. 마케팅은 도구에 맡기는 게 맞습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 그래서 만들었다 */}
        <section className="section solution-section">
          <div className="section-inner">
            <h2 className="solution-title">그래서 제가<br />직접 만들었습니다.</h2>
            <p className="solution-desc">
              가르치는 것만으로는 부족했습니다.<br />
              원장님이 배우지 않아도,<br />
              <strong>그냥 쓰기만 하면 되는 도구</strong>가 필요했어요.
            </p>
            <div className="solution-features">
              <div className="solution-feature">7년간 제가 직접 쓴 블로그 노하우</div>
              <div className="solution-feature">100명 가르치며 정리한 상위노출 공식</div>
              <div className="solution-feature">네이버 C-RANK 알고리즘 반영</div>
              <div className="solution-feature">이 모든 걸 AI에 넣었습니다</div>
            </div>
            <div className="solution-highlight">배우지 마세요. <br />그냥 <strong>쓰세요.</strong></div>
          </div>
        </section>

        {/* 5. 실제 결과 증명 */}
        <section className="section proof-section">
          <div className="section-inner">
            <h2 className="proof-title">아직도 블로그 안 하신다면,<br />실수하고 계신 겁니다.</h2>
            <p className="proof-sub">언제까지 미루실 거에요? 블로그라이터로 작성한 글의 실제 검색 결과입니다.</p>
          </div>
        </section>

        {/* 6. 데모 */}
        <section className="section demo-section">
          <div className="section-inner">
            <h2 className="demo-title">이렇게 간단합니다.</h2>
            <p className="demo-sub">배울 필요 없어요. 누르기만 하세요.</p>
            <div style={{ marginBottom: '48px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
                <source src="/images/demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="demo-steps">
              <div className="demo-step">
                <div className="demo-step-num">1</div>
                <div className="demo-step-content">
                  <h3>키워드 입력</h3>
                  <p>&ldquo;홍대 네일샵&rdquo;, &ldquo;강남 피부관리&rdquo; 같은 내 업종 키워드만 입력하세요</p>
                </div>
              </div>
              <div className="demo-step">
                <div className="demo-step-num">2</div>
                <div className="demo-step-content">
                  <h3>AI가 알아서 설계</h3>
                  <p>제가 7년간 쌓은 상위노출 공식을 AI가 자동으로 적용합니다</p>
                </div>
              </div>
              <div className="demo-step">
                <div className="demo-step-num">3</div>
                <div className="demo-step-content">
                  <h3>제목 + 본문 완성</h3>
                  <p>SEO 최적화된 제목과 2,000자 이상의 본문이 완성</p>
                </div>
              </div>
              <div className="demo-step">
                <div className="demo-step-num">4</div>
                <div className="demo-step-content">
                  <h3>복사해서 올리기</h3>
                  <p>네이버 블로그에 붙여넣기. 끝.</p>
                </div>
              </div>
            </div>
            <div className="demo-time">총 소요 시간: <em>약 3분</em></div>
          </div>
        </section>

        {/* 7. 기존 방식과 비교 */}
        <section className="section oldway-section">
          <div className="section-inner">
            <h2 className="oldway-title">아직도 이렇게 하고 계세요?</h2>
            <p className="oldway-sub">대부분의 원장님이 거치는 과정입니다.</p>
            <div className="oldway-steps">
              <div className="oldway-step"><span className="num">1</span>블로그 강의 듣고 (50만원)</div>
              <div className="oldway-step"><span className="num">2</span>키워드 공부하고</div>
              <div className="oldway-step"><span className="num">3</span>GPT로 글 뽑아보고</div>
              <div className="oldway-step"><span className="num">4</span>네이버에 안 뜨니까 또 수정하고</div>
              <div className="oldway-step"><span className="num">5</span>결국 3일 만에 포기</div>
            </div>
            <div className="problem-quote">배우느라 쓴 시간과 돈, <em>그걸로 블로그라이터 6개월 씁니다.</em></div>
          </div>
        </section>

        {/* 8. Before/After */}
        <section className="section ba-section">
          <div className="section-inner">
            <h2 className="ba-title">같은 키워드, 다른 결과</h2>
            <div className="ba-grid">
              <div className="ba-card before">
                <p className="ba-label">Before &middot; 직접 쓴 글</p>
                <h3>&ldquo;OO동 네일샵 추천&rdquo;</h3>
                <p className="ba-text">
                  &middot; 키워드 감으로 선택<br />
                  &middot; 글 구조 없이 그냥 작성<br />
                  &middot; 1시간 이상 소요<br />
                  &middot; 검색 결과 3페이지<br />
                  &middot; 유입 거의 없음
                </p>
              </div>
              <div className="ba-card after">
                <p className="ba-label">After &middot; 블로그라이터</p>
                <h3>&ldquo;OO동 네일샵 잘하는 곳&rdquo;</h3>
                <p className="ba-text">
                  &middot; 키워드 자동 분석<br />
                  &middot; 상위노출 구조 자동 설계<br />
                  &middot; 3분 만에 완성<br />
                  &middot; 검색 결과 1페이지<br />
                  &middot; 실제 예약 문의 발생
                </p>
              </div>
            </div>
            <p className="ba-verdict">배운 사람과 도구를 쓴 사람, 결과가 다릅니다.</p>
          </div>
        </section>

        {/* 9. GPT 비교 */}
        <section className="section diff-section">
          <div className="section-inner">
            <h2 className="diff-title">&ldquo;GPT 쓰면 되지 않나요?&rdquo;</h2>
            <div className="diff-table">
              <div className="diff-card gpt">
                <h3>ChatGPT</h3>
                <p>글을 만들어주는 도구<br /><br />키워드 분석 없음<br />네이버 로직 모름<br />상위노출 안 됨<br />결국 수정은 내가 해야 함</p>
              </div>
              <div className="diff-card ours">
                <h3>블로그라이터</h3>
                <p>상위노출되는 글을 만드는 도구<br /><br />키워드 자동 분석<br />네이버 C-RANK 반영<br />상위노출 구조 적용<br />수정 없이 바로 발행 가능</p>
              </div>
            </div>
            <p className="diff-bottom">GPT는 &ldquo;글&rdquo;을 써주고, 블로그라이터는 &ldquo;결과&rdquo;를 만들어줍니다.</p>
          </div>
        </section>

        {/* 10. 실제 후기 캡쳐 */}
        <section style={{ padding: '100px 0', background: '#fff', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, textAlign: 'center', marginBottom: '12px' }}>실제 원장님들의 반응</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-sub)', marginBottom: '40px' }}>블로그라이터를 사용한 원장님들의 실제 카톡 캡쳐입니다.</p>
          </div>
          <ReviewImageSlider />
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-sub)', marginTop: '24px' }}>※ 개인정보 보호를 위해 일부 정보는 가려져 있습니다.</p>
        </section>

        {/* 업종 확장 */}
        <section className="section" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
          <div className="section-inner" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '32px', lineHeight: 1.5 }}>
              뷰티샵 원장님이라면 누구나 쓸 수 있습니다.
            </h2>
            <div style={{ maxWidth: '320px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src="/images/categories.png" alt="블로그라이터 지원 업종" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* 12. 타겟 */}
        <section className="section target-section">
          <div className="section-inner">
            <h2 className="target-title">이런 분이라면, 더 이상 고민하지 마세요.</h2>
            <div className="target-list">
              <div className="target-item">블로그 강의 들었는데 실행이 안 되는 분</div>
              <div className="target-item">본업이 바빠서 글 쓸 시간이 없는 분</div>
              <div className="target-item">GPT로 써봤는데 네이버에 안 뜨는 분</div>
              <div className="target-item">블로그 해야 하는 건 아는데 계속 미루는 분</div>
            </div>
          </div>
        </section>

        {/* 11. 최종 CTA */}
        <section className="section cta-section">
          <div className="section-inner">
            <p className="cta-sub">블로그, 이제 배우지 마세요.</p>
            <p className="cta-title">그냥 쓰세요.</p>
            <p className="cta-highlight">&ldquo;배울 시간에 <em>글 하나 더 올리세요.</em>&rdquo;</p>
            <div style={{ margin: '32px 0' }}>
              <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>월 19,900원</span>
              <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: 900, color: '#FF4444', marginTop: '4px' }}>SALE 월 9,900원</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>베타 기간 한정 가격</span>
            </div>
            <a href="https://www.blogwriter.co.kr" target="_blank" rel="noopener noreferrer" className="btn-main">무료로 3번 써보기 &rarr;</a>
            <p className="cta-note">가입 즉시 하루 3회 무료 생성 &middot; 카드 등록 없음</p>
          </div>
        </section>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </>
  );
}
