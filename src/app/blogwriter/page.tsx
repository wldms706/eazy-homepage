import type { Metadata } from "next";
import { CounterAnimation, ReviewImageSlider, FloatingCTA } from "./BlogwriterClient";
import SlotCounter from "./SlotCounter";
import BlogRankSlider from "./BlogRankSlider";

export const metadata: Metadata = {
  title: "블로그라이터 - 뷰티샵 블로그·네이버 홍보 자동 글쓰기",
  description:
    "뷰티샵 블로그 글, 3분이면 끝. 네일샵·반영구·피부관리실 원장님을 위한 네이버 블로그 자동 글쓰기 도구. 배우지 마세요. 그냥 쓰세요.",
  keywords: [
    "뷰티샵 블로그",
    "뷰티샵 네이버 홍보",
    "네일샵 블로그",
    "네일샵 블로그 글쓰기",
    "반영구 블로그",
    "반영구 네이버 홍보",
    "피부관리실 블로그",
    "피부관리실 네이버 홍보",
    "왁싱샵 블로그",
    "헤어샵 블로그",
    "네이버 블로그 글쓰기",
    "네이버 블로그 자동",
    "블로그 글 자동 작성",
    "블로그 글쓰기 어려워",
    "블로그라이터",
  ],
  alternates: {
    canonical: "https://www.jjeen-eazy.com/blogwriter",
  },
  openGraph: {
    title: "블로그라이터 - 뷰티샵 블로그 3분 만에 완성",
    description:
      "네일샵·반영구·피부관리실 원장님을 위한 네이버 블로그 자동 글쓰기. 배우지 마세요. 그냥 쓰세요.",
    url: "https://www.jjeen-eazy.com/blogwriter",
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
              <em>절대 놓칠 수 없는</em><br />네이버 블로그 마케팅
            </h1>
            <p className="hero-desc">
              네이버 상위노출하면<br />
              <strong style={{ color: '#fff', fontSize: '1.2rem' }}>원장님 샵 매출이 2배 올라갑니다.</strong>
            </p>
            <div className="hero-cta-wrap">
              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>월 19,900원</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF4444', marginLeft: '8px' }}>SALE 월 9,900원</span>
              </div>
              <SlotCounter variant="hero" />
              <a href="https://www.blogwriter.co.kr" target="_blank" rel="noopener noreferrer" className="btn-main">무료로 3번 써보기 &rarr;</a>
              <span className="hero-note">가입 즉시 &middot; 카드 등록 없음 &middot; 베타 한정 가격</span>
            </div>
            <div className="hero-counter">
              <div className="counter-item">
                <CounterAnimation />
                <span className="counter-label">생성된 글</span>
              </div>
              <div className="counter-item">
                <span className="counter-num">3분</span>
                <span className="counter-label">평균 작성 시간</span>
              </div>
            </div>
          </div>
        </section>

        {/* 1-1. 실제 원장님들의 반응 (캐러셀) */}
        <section style={{ padding: '80px 0 60px', background: '#fff', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Real Reviews</p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, textAlign: 'center', marginBottom: '12px' }}>실제 원장님들의 반응</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-sub)', marginBottom: '40px' }}>블로그라이터를 사용한 원장님들의 실제 카톡 캡쳐입니다.</p>
          </div>
          <ReviewImageSlider />
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-sub)', marginTop: '24px' }}>※ 개인정보 보호를 위해 일부 정보는 가려져 있습니다.</p>
        </section>

        {/* 1-1-1. 실제 상위노출 증거 캐러셀 */}
        <section style={{ padding: '80px 0 60px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Real Proof</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.4 }}>
              실제로 <span style={{ color: 'var(--accent)' }}>상위노출</span>되고 있어요
            </h2>
            <p style={{ color: 'var(--text-sub)', marginBottom: '8px', lineHeight: 1.8 }}>
              "말로만 1위" 아니에요. 직접 검색해서 캡쳐했습니다.
            </p>
          </div>
          <BlogRankSlider />
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-sub)', marginTop: '8px' }}>네이버 블로그 검색 결과 ✦ 실제 캡쳐</p>
        </section>

        {/* 1-2. 매출 흐름 - 5단계 */}
        <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #FAFAFA 0%, #fff 100%)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>How it works</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 900, textAlign: 'center', marginBottom: '12px', lineHeight: 1.4 }}>
              실제로 이렇게<br /><span style={{ color: 'var(--accent)' }}>매출이 만들어집니다</span>
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-sub)', marginBottom: '48px', lineHeight: 1.8 }}>
              막연한 약속이 아니에요. 명확한 흐름이 있습니다.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { step: '01', title: '블로그라이터로 글쓰기', desc: '키워드만 입력하면 3분 만에 상위노출용 글 완성', emoji: '⌨️' },
                { step: '02', title: '네이버 상위노출', desc: '검색하면 우리 글이 상위에 노출됨', emoji: '📈' },
                { step: '03', title: '잠재 고객이 글을 봄', desc: '내 매장이 진짜 필요한 사람한테 발견됨', emoji: '👀' },
                { step: '04', title: '문의·예약 폭주', desc: '글 → 카톡 → 예약으로 자연스럽게 흐름', emoji: '💬' },
                { step: '05', title: '매출 발생', desc: '광고 안 돌려도 자동으로 매출이 만들어짐', emoji: '💰' },
              ].map((item, i, arr) => (
                <div key={item.step}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px', marginBottom: '4px' }}>STEP {item.step}</p>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text)' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ textAlign: 'center', padding: '6px 0', color: 'var(--accent)', fontSize: '1.4rem', fontWeight: 700 }}>↓</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', color: '#fff' }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '8px' }}>이 흐름을 만들어낸 결과</p>
              <p style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.2 }}>월 1,500만원<span style={{ fontSize: '1rem', fontWeight: 600 }}> 매출</span></p>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: '8px' }}>광고비 0원, 블로그 한 채로</p>
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

        {/* 3. 문제 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #fff 0%, #F5F5F5 100%)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '16px', lineHeight: 1 }}>🤔</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-sub)', marginBottom: '8px' }}>가르치면서 계속 느꼈어요</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, color: 'var(--text)', marginBottom: '40px' }}>
              원장님들이 힘들어하는 건<br />
              <span style={{ background: 'linear-gradient(120deg, transparent 60%, #FFE066 60%)' }}>&ldquo;몰라서&rdquo;가 아니에요</span>
            </h2>

            {/* 말풍선 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%', background: '#1a1a1a', color: '#fff', padding: '16px 22px', borderRadius: '20px 20px 20px 4px', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                방법은 아는데<br /><span style={{ color: '#7AB8FF' }}>쓸 시간이 없어요</span>
              </div>
              <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: '#1a1a1a', color: '#fff', padding: '16px 22px', borderRadius: '20px 20px 4px 20px', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                본업(시술)도<br /><span style={{ color: '#7AB8FF' }}>바빠 죽겠어요</span>
              </div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%', background: '#1a1a1a', color: '#fff', padding: '16px 22px', borderRadius: '20px 20px 20px 4px', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                매일 글 쓰는 게<br /><span style={{ color: '#7AB8FF' }}>결국 지쳐요</span>
              </div>
              <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: '#1a1a1a', color: '#fff', padding: '16px 22px', borderRadius: '20px 20px 4px 20px', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                GPT로 뽑아봐도<br /><span style={{ color: '#7AB8FF' }}>네이버엔 안 먹혀요</span>
              </div>
            </div>

            <div style={{ background: '#1a1a1a', color: '#fff', padding: '24px 20px', borderRadius: '20px', marginBottom: '24px' }}>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.6 }}>
                결국 배워도<br />
                &ldquo;<span style={{ color: 'var(--accent)' }}>실행이 안 되면</span> 의미가 없더라고요&rdquo;
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '20px', padding: '36px 24px', boxShadow: '0 12px 30px rgba(42,95,255,0.25)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 700, letterSpacing: '1px', marginBottom: '12px' }}>핵심</p>
              <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.5 }}>
                원장님은 <span style={{ background: '#fff', color: '#2A5FFF', padding: '2px 10px', borderRadius: '8px' }}>시술</span>에<br />집중하세요.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginTop: '16px', lineHeight: 1.6, opacity: 0.95 }}>
                마케팅은 <strong style={{ background: '#fff', color: '#2A5FFF', padding: '2px 10px', borderRadius: '8px' }}>도구</strong>에 맡기는 게 맞아요.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 그래서 만들었다 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: '#1a1a1a', color: '#fff' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>So I Built It</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '32px' }}>
              그래서 제가<br />
              <span style={{ background: 'var(--accent)', padding: '4px 14px', borderRadius: '10px', display: 'inline-block', marginTop: '8px' }}>직접 만들었습니다</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 2, marginBottom: '40px' }}>
              가르치는 것만으로는 부족했어요.<br />
              원장님이 <strong style={{ color: '#fff' }}>배우지 않아도,</strong><br />
              <strong style={{ color: 'var(--accent)' }}>그냥 쓰기만 하면 되는 도구</strong>가 필요했습니다.
            </p>

            {/* 4가지 강점 카드 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[
                { num: '01', title: '7년간 직접 쓴 블로그 노하우', emoji: '📝' },
                { num: '02', title: '100명+ 가르치며 정리한 공식', emoji: '👥' },
                { num: '03', title: '네이버 C-RANK 알고리즘 반영', emoji: '🔍' },
                { num: '04', title: '이 모든 걸 AI에 넣었습니다', emoji: '🤖' },
              ].map((item) => (
                <div key={item.num} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px', marginBottom: '4px' }}>NO. {item.num}</p>
                    <p style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '24px', padding: '40px 24px', boxShadow: '0 20px 50px rgba(42,95,255,0.4)' }}>
              <p style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, color: '#fff' }}>
                배우지 마세요.<br />
                <span style={{ background: '#1a1a1a', padding: '6px 18px', borderRadius: '12px', display: 'inline-block', marginTop: '12px' }}>그냥 쓰세요.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. 실제 결과 증명 */}
        <section className="section proof-section">
          <div className="section-inner">
            <h2 className="proof-title">아직도 블로그 안 하신다면,<br />실수하고 계신 겁니다.</h2>
            <p className="proof-sub">언제까지 미루실 거에요? 블로그라이터로 작성한 글의 실제 검색 결과입니다.</p>
          </div>
        </section>

        {/* 6. 데모 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #fff 0%, #EBF1FF 100%)' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>How To Use</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '12px' }}>
              이렇게 <span style={{ color: 'var(--accent)' }}>간단합니다.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-sub)', marginBottom: '40px' }}>
              배울 필요 없어요. <strong style={{ color: 'var(--text)' }}>누르기만 하세요.</strong>
            </p>

            <div style={{ marginBottom: '40px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
                <source src="/images/demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { num: '01', emoji: '⌨️', title: '키워드 입력', desc: '"홍대 네일샵", "강남 피부관리"' },
                { num: '02', emoji: '🤖', title: 'AI가 자동 설계', desc: '7년간 쌓은 상위노출 공식 자동 적용' },
                { num: '03', emoji: '📝', title: '제목 + 본문 완성', desc: 'SEO 최적화 + 2,000자 본문' },
                { num: '04', emoji: '✅', title: '복사해서 올리기', desc: '네이버 블로그에 붙여넣기. 끝.' },
              ].map((step, i, arr) => (
                <div key={step.num}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    textAlign: 'left',
                  }}>
                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>{step.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px', marginBottom: '4px' }}>STEP {step.num}</p>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '4px', color: 'var(--text)' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>{step.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ textAlign: 'center', padding: '4px 0', color: 'var(--accent)', fontSize: '1.4rem', fontWeight: 700 }}>↓</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', padding: '20px 24px', background: '#1a1a1a', color: '#fff', borderRadius: '100px', display: 'inline-block' }}>
              <p style={{ fontSize: '1rem', fontWeight: 700 }}>
                ⏱️ 총 소요 시간 <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 900 }}>약 3분</span>
              </p>
            </div>
          </div>
        </section>

        {/* 7. 기존 방식과 비교 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: '#FAFAFA', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '12px', lineHeight: 1 }}>😩</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, marginBottom: '12px' }}>
              아직도 <span style={{ background: 'linear-gradient(120deg, transparent 60%, #FFE066 60%)' }}>이렇게</span> 하고 계세요?
            </h2>
            <p style={{ color: 'var(--text-sub)', marginBottom: '40px' }}>
              대부분의 원장님이 거치는 과정이에요.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                { num: '1', text: '블로그 강의 듣고', cost: '💸 50만원' },
                { num: '2', text: '키워드 공부하고', cost: '⏰ 5시간' },
                { num: '3', text: 'GPT로 글 뽑아보고', cost: '⏰ 3시간' },
                { num: '4', text: '네이버에 안 뜨니까 또 수정', cost: '😤' },
                { num: '5', text: '결국 3일 만에 포기', cost: '🏳️' },
              ].map((step, i, arr) => (
                <div key={step.num}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    textAlign: 'left',
                  }}>
                    <div style={{ width: '32px', height: '32px', background: '#FF4444', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.9rem', flexShrink: 0 }}>{step.num}</div>
                    <p style={{ flex: 1, fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>{step.text}</p>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)', whiteSpace: 'nowrap' }}>{step.cost}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ textAlign: 'center', padding: '2px 0', color: '#FF4444', fontSize: '1.1rem' }}>↓</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '20px', padding: '32px 24px', color: '#fff', boxShadow: '0 12px 30px rgba(42,95,255,0.25)' }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '8px' }}>배우느라 쓴 시간과 돈</p>
              <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: 900, lineHeight: 1.5 }}>
                그 돈으로<br />
                <span style={{ background: '#1a1a1a', padding: '4px 14px', borderRadius: '8px', display: 'inline-block', marginTop: '8px' }}>블로그라이터 50개월 사용 가능</span>
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '12px', opacity: 0.85 }}>(50만원 ÷ 9,900원 ≈ 50개월)</p>
            </div>
          </div>
        </section>

        {/* 8. Before/After */}
        {/* 8. Before/After - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: '#FAFAFA' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Before vs After</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, marginBottom: '40px' }}>
              같은 키워드,<br /><span style={{ color: 'var(--accent)' }}>다른 결과</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', color: '#fff', borderRadius: '20px', padding: '28px 24px', textAlign: 'left' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FF7A7A', letterSpacing: '1px', marginBottom: '8px' }}>BEFORE · 직접 쓴 글</p>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '16px', lineHeight: 1.4 }}>
                  &ldquo;OO동 네일샵 추천&rdquo;
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: 2, color: 'rgba(255,255,255,0.7)' }}>
                  <li>❌ 키워드 감으로 선택</li>
                  <li>❌ 글 구조 없이 작성</li>
                  <li>❌ 1시간+ 소요</li>
                  <li>❌ 검색 결과 3페이지</li>
                  <li>❌ 유입 거의 없음</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center', padding: '4px 0', color: 'var(--accent)', fontSize: '1.6rem' }}>↓</div>

              <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', color: '#fff', borderRadius: '20px', padding: '28px 24px', textAlign: 'left', boxShadow: '0 12px 30px rgba(42,95,255,0.3)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.9, letterSpacing: '1px', marginBottom: '8px' }}>AFTER · 블로그라이터</p>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '16px', lineHeight: 1.4 }}>
                  &ldquo;OO동 네일샵 잘하는 곳&rdquo;
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: 2 }}>
                  <li>✅ 키워드 자동 분석</li>
                  <li>✅ 상위노출 구조 자동 설계</li>
                  <li>✅ 3분 만에 완성</li>
                  <li>✅ 검색 결과 1페이지</li>
                  <li>✅ 실제 예약 문의 발생</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '24px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.6 }}>
                배운 사람과 <strong style={{ color: 'var(--accent)' }}>도구를 쓴 사람,</strong><br />
                결과가 다릅니다.
              </p>
            </div>
          </div>
        </section>

        {/* 9. GPT 비교 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px', lineHeight: 1 }}>🤖</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, marginBottom: '40px' }}>
              &ldquo;GPT 쓰면<br /><span style={{ color: 'var(--accent)' }}>되지 않나요?&rdquo;</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#F5F5F5', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px 24px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '16px', color: 'var(--text-sub)' }}>ChatGPT</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '16px', fontWeight: 600 }}>글을 <strong>만들어주는 도구</strong></p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: 2, color: 'var(--text-sub)' }}>
                  <li>❌ 키워드 분석 없음</li>
                  <li>❌ 네이버 로직 모름</li>
                  <li>❌ 상위노출 안 됨</li>
                  <li>❌ 결국 수정은 내가</li>
                </ul>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2A5FFF 100%)', color: '#fff', borderRadius: '20px', padding: '28px 24px', textAlign: 'left', boxShadow: '0 12px 30px rgba(42,95,255,0.25)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '16px' }}>블로그라이터</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.95, marginBottom: '16px', fontWeight: 600 }}>상위노출되는 글을 <strong>만드는 도구</strong></p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: 2 }}>
                  <li>✅ 키워드 자동 분석</li>
                  <li>✅ 네이버 C-RANK 반영</li>
                  <li>✅ 상위노출 구조 적용</li>
                  <li>✅ 수정 없이 바로 발행</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '24px 20px', background: '#1a1a1a', color: '#fff', borderRadius: '16px' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.7 }}>
                GPT는 <span style={{ color: '#FF7A7A' }}>&ldquo;글&rdquo;</span>을 써주고,<br />
                블로그라이터는 <span style={{ color: 'var(--accent)' }}>&ldquo;결과&rdquo;</span>를 만들어줍니다.
              </p>
            </div>
          </div>
        </section>

        {/* 9-1. AI 티난다는 우려에 대한 솔직한 답변 */}
        <section className="section" style={{ background: '#1a1a1a', color: '#fff', padding: '100px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="section-inner" style={{ maxWidth: '720px' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Real Talk</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, textAlign: 'center', marginBottom: '40px' }}>
              &ldquo;AI 티난다고요?&rdquo;<br />
              <span style={{ color: 'var(--accent)' }}>GPT도 티납니다.</span>
            </h2>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px 28px', marginBottom: '24px' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 2, color: 'rgba(255,255,255,0.95)' }}>
                솔직히 말씀드릴게요.<br />
                <strong style={{ fontWeight: 900 }}>블로그 글은 상위노출되기 위함이에요.</strong>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(42,95,255,0.15)', borderLeft: '3px solid var(--accent)', borderRadius: '12px', padding: '20px 24px' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>현실 1</p>
                <p style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.8 }}>
                  고객님들은 글보다 <strong style={{ color: 'var(--accent)' }}>사진을 더 봅니다.</strong>
                </p>
              </div>
              <div style={{ background: 'rgba(42,95,255,0.15)', borderLeft: '3px solid var(--accent)', borderRadius: '12px', padding: '20px 24px' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>현실 2</p>
                <p style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.8 }}>
                  필요한 정보가 있으면 <strong style={{ color: 'var(--accent)' }}>문의까지 넘어갑니다.</strong>
                </p>
              </div>
              <div style={{ background: 'rgba(42,95,255,0.15)', borderLeft: '3px solid var(--accent)', borderRadius: '12px', padding: '20px 24px' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>현실 3</p>
                <p style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.8 }}>
                  사람들이 글을 끝까지 읽는다는 건<br /><strong style={{ color: 'var(--accent)' }}>이미 환상에 가깝습니다.</strong>
                </p>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '20px', padding: '32px 28px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 900, lineHeight: 1.6, marginBottom: '8px' }}>
                중요한 건 &ldquo;AI 티&rdquo;가 아니라
              </p>
              <p style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.4 }}>
                <span style={{ background: '#fff', color: 'var(--accent)', padding: '4px 14px', borderRadius: '8px' }}>검색에 노출되는가</span>
              </p>
              <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '16px', lineHeight: 1.8 }}>
                안 보이는 글은 어차피 안 읽힙니다.<br />
                상위노출 → 사진 → 정보 → 문의 → 매출.<br />
                이게 진짜 흐름이에요.
              </p>
            </div>
          </div>
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

        {/* 12. 타겟 - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #FAFAFA 0%, #fff 100%)' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>For You</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, lineHeight: 1.4, marginBottom: '12px' }}>
              이런 분이라면<br />
              <span style={{ background: 'linear-gradient(120deg, transparent 60%, #FFE066 60%)' }}>더 이상 고민하지 마세요.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-sub)', marginBottom: '40px' }}>해당되는 거 1개라도 있으면 무료로 써보세요.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { emoji: '📚', text: '블로그 강의 들었는데 실행이 안 되는 분' },
                { emoji: '💆‍♀️', text: '본업이 바빠서 글 쓸 시간이 없는 분' },
                { emoji: '🤖', text: 'GPT로 써봤는데 네이버에 안 뜨는 분' },
                { emoji: '😅', text: '블로그 해야 하는 건 아는데 계속 미루는 분' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
                  <p style={{ flex: 1, fontSize: '1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. 최종 CTA - 카드뉴스 스타일 */}
        <section style={{ padding: '100px 24px', background: 'var(--bg-dark)', color: '#fff', textAlign: 'center' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>블로그, 이제</p>
            <h2 style={{ fontSize: 'clamp(2.4rem, 7vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '20px' }}>
              <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.4)' }}>배우지</span> 마세요.<br />
              <span style={{ background: 'var(--accent)', padding: '4px 18px', borderRadius: '12px', display: 'inline-block', marginTop: '12px' }}>그냥 쓰세요.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
              &ldquo;배울 시간에<br /><strong style={{ color: '#fff' }}>글 하나 더 올리세요.</strong>&rdquo;
            </p>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px 24px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>월 19,900원</span>
              <p style={{ fontSize: 'clamp(2.4rem, 8vw, 3rem)', fontWeight: 900, color: '#FF4444', lineHeight: 1.1, marginTop: '4px' }}>
                월 9,900<span style={{ fontSize: '1.4rem' }}>원</span>
              </p>
              <p style={{ fontSize: '0.85rem', color: '#FFD700', fontWeight: 700, marginTop: '8px' }}>🔥 SALE · 베타 기간 한정</p>
              <SlotCounter variant="cta" />
            </div>

            <a href="https://www.blogwriter.co.kr" target="_blank" rel="noopener noreferrer" className="btn-main">무료로 3번 써보기 &rarr;</a>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '16px' }}>가입 즉시 하루 3회 무료 생성 · 카드 등록 없음</p>
          </div>
        </section>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </>
  );
}
