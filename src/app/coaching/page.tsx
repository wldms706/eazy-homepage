import type { Metadata } from "next";
import CoachingTabs from "./CoachingTabs";

export const metadata: Metadata = {
  title: "뷰티샵 코칭&대행 - 손님 늘리기·릴스·광고 도와드려요",
  description:
    "네일샵·반영구·피부관리실 원장님을 위한 1:1 코칭과 대행. 손님 늘리는 법, 릴스 만들기, 메타광고까지. 매출의 판을 짜는 실행메이킹.",
  keywords: [
    "뷰티샵 손님 늘리는 법",
    "네일샵 손님 늘리는 법",
    "반영구 손님 안와요",
    "반영구 손님 늘리기",
    "피부관리실 매출",
    "피부관리실 손님 늘리기",
    "1인샵 매출 올리기",
    "1인샵 마케팅 배우기",
    "뷰티샵 릴스 만들기",
    "네일샵 릴스",
    "뷰티샵 광고",
    "네일샵 인스타 광고",
    "1인샵 컨설팅",
  ],
  alternates: {
    canonical: "https://www.jjeen-eazy.com/coaching",
  },
  openGraph: {
    title: "뷰티샵 코칭&대행 - 손님 늘리기·릴스·광고",
    description:
      "원장님 손님 늘리는 법, 릴스, 광고까지. 매출의 판을 짜는 실행메이킹.",
    url: "https://www.jjeen-eazy.com/coaching",
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

        {/* 권위 - 카드뉴스 스타일 */}
        <section className="sec" style={{ background: 'linear-gradient(180deg, #fff 0%, #EBF1FF 100%)', padding: '80px 24px' }}>
          <div className="inner" style={{ maxWidth: '460px', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '8px', lineHeight: 1 }}>📈</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.3, color: 'var(--text)', marginBottom: '12px' }}>
              결과가<br />
              <span style={{ background: 'linear-gradient(90deg, #2A5FFF, #5B82FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>말해줍니다.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-sub)', lineHeight: 1.8, marginBottom: '48px' }}>
              단 <strong style={{ color: 'var(--text)' }}>2시간 코칭</strong>만으로도 매출이 오르고,<br />
              <strong style={{ color: 'var(--text)' }}>12주 후</strong>엔 매출 구조가 완전히 바뀝니다.
            </p>

            {/* CASE 1 - 큰 임팩트 카드 */}
            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '24px', padding: '36px 28px', color: '#fff', marginBottom: '16px', boxShadow: '0 20px 50px rgba(42,95,255,0.3)' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.8, letterSpacing: '2px', marginBottom: '20px' }}>CASE 1 · 12주 그룹 코칭</p>
              <p style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, marginBottom: '8px' }}>
                4.3<span style={{ fontSize: '2.5rem' }}>배</span>
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>매출이 상승했습니다</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', background: 'rgba(0,0,0,0.25)', borderRadius: '14px', padding: '14px 20px' }}>
                <span style={{ fontSize: '0.95rem', textDecoration: 'line-through', opacity: 0.6 }}>월 140만원</span>
                <span style={{ fontSize: '1.2rem' }}>→</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 900 }}>월 600만원</span>
              </div>
            </div>

            {/* CASE 2 - 짧고 강하게 */}
            <div style={{ background: '#1a1a1a', borderRadius: '24px', padding: '28px 24px', color: '#fff', marginBottom: '16px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', marginBottom: '12px' }}>CASE 2 · 단 2시간 1:1 코칭</p>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, lineHeight: 1.5 }}>
                딱 2시간 만났는데<br />
                <span style={{ color: 'var(--accent)' }}>릴스 한 개로</span><br />
                매출이 올랐어요.
              </h3>
            </div>

            {/* CASE 3 - 카톡 말풍선 스타일 */}
            <div style={{ background: '#fff', borderRadius: '24px', padding: '28px 24px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px solid #E0E8FF', textAlign: 'left' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', marginBottom: '12px' }}>CASE 3 · 수강 원장님</p>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.5, marginBottom: '16px', color: 'var(--text)' }}>
                번아웃으로 매출 뚝 →<br />
                <span style={{ background: 'linear-gradient(120deg, #2A5FFF, #5B82FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>1,800만원 회복</span>
              </h3>
              <div style={{ background: '#1a1a1a', color: '#fff', padding: '14px 18px', borderRadius: '16px 16px 16px 4px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                &ldquo;알고리즘 바뀌고 번아웃 와서 매출 뚝 떨어졌는데,
                지은 대표님 만나고 다시 <strong style={{ color: '#7AB8FF' }}>월 1,800만원</strong> 찍었어요.&rdquo;
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '16px 20px', background: '#fff', borderRadius: '100px', border: '1px solid var(--border)', display: 'inline-block' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-sub)' }}>
                🤝 한 기수당 <strong style={{ color: 'var(--accent)' }}>5명 미만</strong> · 소수 정예 밀착
              </p>
            </div>
          </div>
        </section>

        {/* 원장님 성과 */}
        <section className="sec" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
          <div className="inner">
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Real Results</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '32px', lineHeight: 1.4, textAlign: 'center' }}>
              실행메이킹을 거친 원장님들의 변화
            </h2>

            {/* 시술 원장님 성과 카드 */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px 28px', marginBottom: '20px' }}>
              <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(42,95,255,0.15)', padding: '4px 12px', borderRadius: '100px', marginBottom: '16px' }}>시술 원장님</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.5 }}>
                2025년 월평균 매출 <span style={{ color: '#FF7A7A' }}>140만원</span>
                <br />→ 실행메이킹 진행 후 <span style={{ color: 'var(--accent)' }}>월 600만원</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>BEFORE</p>
                  <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF7A7A' }}>140만원</p>
                </div>
                <span style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>→</span>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>AFTER</p>
                  <p style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent)' }}>600만원</p>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)' }}>4.3x</span>
              </div>
            </div>

            {/* 수강 원장님 성과 카드 */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px 28px' }}>
              <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(42,95,255,0.15)', padding: '4px 12px', borderRadius: '100px', marginBottom: '16px' }}>수강 원장님</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.6 }}>
                번아웃으로 매출이 뚝 떨어졌다가<br />
                <span style={{ color: 'var(--accent)' }}>월 수강 매출 1,800만원</span> 회복
              </h3>
              <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '20px', borderLeft: '3px solid var(--accent)' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 2, color: 'rgba(255,255,255,0.85)' }}>
                  &ldquo;예전에는 릴스만 매일 올려도 수강문의가 왔었는데,
                  인스타 알고리즘 바뀌고 번아웃이 와서 매출이 뚝 떨어졌었어요.
                  어디서부터 어떻게 다시 시작해야 할지 몰랐는데,
                  지은 대표님 만나고 나서 다시 <strong style={{ color: 'var(--accent)' }}>수강매출이 1,800만원</strong>을 찍었어요.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 직접 찍어드린 콘텐츠 */}
        <section className="sec">
          <div className="inner">
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Real Field Work</p>
            <h2 className="title" style={{ textAlign: 'center', marginBottom: '8px' }}>
              직접 매장 가서 찍어드립니다
            </h2>
            <p className="desc" style={{ textAlign: 'center', marginBottom: '32px' }}>
              알려주고 끝이 아니라, 광고용 콘텐츠를 직접 기획·촬영·편집해드립니다.<br />
              실제 원장님들 매장에서 만든 영상이에요.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', maxWidth: '760px', margin: '0 auto' }}>
              {[
                { src: '/coaching-videos/daehang.mp4', name: 'A 원장님' },
                { src: '/coaching-videos/coach-new.mp4', name: 'B 원장님' },
                { src: '/coaching-videos/coach-2.mp4', name: 'C 원장님' },
                { src: '/coaching-videos/coach-3.mp4', name: 'D 원장님' },
                { src: '/coaching-videos/coach-4.mp4', name: 'E 원장님' },
              ].map((v) => (
                <div key={v.src} style={{ borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
                  <video src={v.src} autoPlay loop muted playsInline style={{ width: '100%', aspectRatio: '9/16', objectFit: 'cover', display: 'block' }} />
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', textAlign: 'center', padding: '8px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>{v.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 공감 + 문제 - 카드뉴스 스타일 */}
        <section className="sec" style={{ background: 'linear-gradient(180deg, #fff 0%, #E8E8E8 100%)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
          <div className="inner" style={{ maxWidth: '420px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>마케팅이요?</p>
            <div style={{ fontSize: '4rem', marginBottom: '24px', lineHeight: 1 }}>😅</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.5, color: 'var(--text)', marginBottom: '48px' }}>
              저는 마케팅 잘 모르는데,<br />
              <strong style={{ fontWeight: 900 }}>괜찮을까요?</strong>
            </h2>

            {/* 말풍선들 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {/* 좌측 말풍선 */}
              <div style={{ alignSelf: 'flex-start', maxWidth: '75%', background: '#1a1a1a', color: '#fff', padding: '14px 20px', borderRadius: '20px 20px 20px 4px', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                광고 돌렸는데<br /><span style={{ color: '#7AB8FF' }}>문의가 안 와요</span>
              </div>
              {/* 우측 말풍선 */}
              <div style={{ alignSelf: 'flex-end', maxWidth: '75%', background: '#1a1a1a', color: '#fff', padding: '14px 20px', borderRadius: '20px 20px 4px 20px', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                릴스 만들 줄도<br /><span style={{ color: '#7AB8FF' }}>모르겠어요</span>
              </div>
              {/* 좌측 */}
              <div style={{ alignSelf: 'flex-start', maxWidth: '75%', background: '#1a1a1a', color: '#fff', padding: '14px 20px', borderRadius: '20px 20px 20px 4px', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                강의 들어봐도<br /><span style={{ color: '#7AB8FF' }}>실행이 안 돼요</span>
              </div>
              {/* 우측 */}
              <div style={{ alignSelf: 'flex-end', maxWidth: '75%', background: '#1a1a1a', color: '#fff', padding: '14px 20px', borderRadius: '20px 20px 4px 20px', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, textAlign: 'left' }}>
                시술하느라<br /><span style={{ color: '#7AB8FF' }}>시간이 없어요</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.5, color: 'var(--text)' }}>
              과연 원장님이<br />
              <strong style={{ fontWeight: 900 }}>특별해서</strong> 그랬을까요?
            </h3>
          </div>
        </section>

        {/* 해답 시작 */}
        <section className="sec" style={{ background: '#fff' }}>
          <div className="inner" style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px', lineHeight: 1 }}>🙅‍♀️</div>
            <h2 className="title" style={{ marginBottom: '24px' }}>
              아니에요.<br />
              <span style={{ background: 'linear-gradient(120deg, transparent 60%, #FFE066 60%)' }}>1도 모르셔도 됩니다.</span>
            </h2>
            <div style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', borderRadius: '20px', padding: '32px 24px', color: '#fff', boxShadow: '0 12px 30px rgba(42,95,255,0.25)', marginBottom: '32px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.85, letterSpacing: '1px', marginBottom: '12px' }}>실행메이킹 취지</p>
              <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: 900, lineHeight: 1.6 }}>
                돈을 벌 수 있는<br />
                <span style={{ background: '#fff', color: '#2A5FFF', padding: '2px 12px', borderRadius: '8px', display: 'inline-block', marginTop: '8px' }}>루트</span>를<br />
                <strong style={{ fontSize: '1.1em' }}>모두 알려드립니다.</strong>
              </p>
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-sub)', lineHeight: 1.9, marginBottom: '24px' }}>
              릴스만 찍어도, 광고만 돌려도,<br />
              홈페이지만 만들어도 안 됩니다.
            </p>
            <div className="dark-box">
              모든 건 연결된 <em>매출 구조</em> 안에서<br />움직여야 작동합니다.
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

        {/* 출신 스토리 - 카드뉴스 */}
        <section className="sec" style={{ background: 'linear-gradient(180deg, #fff 0%, #F0F4FF 100%)' }}>
          <div className="inner" style={{ textAlign: 'center', maxWidth: '480px' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>My Story</p>
            <h2 className="title" style={{ marginBottom: '32px' }}>
              저도 시작은 같았습니다.
            </h2>

            <div style={{ background: '#1a1a1a', color: '#fff', borderRadius: '20px', padding: '32px 24px', marginBottom: '24px' }}>
              <p style={{ fontSize: '0.85rem', opacity: 0.5, marginBottom: '8px' }}>26살, 가진 돈도 경험도 없이</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1.4, marginBottom: '20px' }}>
                <span style={{ color: '#FF7A7A' }}>2,400만원 대출</span>로<br />
                반영구 샵을 시작했습니다
              </h3>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.85 }}>
                  💸 1,200만원 이율 28%<br />
                  💸 1,200만원 이율 8.9%
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '12px' }}>
                  &ldquo;28%가 얼마나 무서운지도 몰랐어요&rdquo;
                </p>
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '24px', color: 'var(--accent)' }}>
                어떻게든 살아남아야 했습니다.
              </p>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '12px' }}>
              그 후 7년간<br />
              <strong style={{ fontWeight: 900 }}>혼자서 매출 구조를 만들었어요.</strong>
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-sub)', lineHeight: 1.8 }}>
              월 평균 매출 2,000만원,<br />
              누적 시술 1만 명 이상.
            </p>
          </div>
        </section>

        {/* 위기 → 깨달음 */}
        <section className="sec" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
          <div className="inner" style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>😵‍💫</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1.4, marginBottom: '24px' }}>
              그러다 번아웃이 왔어요.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 2, marginBottom: '32px' }}>
              매출은 올랐지만 몸과 마음이 무너졌습니다.<br />
              &ldquo;이걸 평생 혼자 짊어져야 하나?&rdquo;
            </p>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', borderLeft: '3px solid var(--accent)' }}>
              <p style={{ fontSize: '1rem', lineHeight: 2, color: 'rgba(255,255,255,0.9)' }}>
                그때 깨달았어요.<br />
                <strong style={{ color: 'var(--accent)' }}>&ldquo;원장님이 없어도 굴러가는<br />구조를 만들어야 하는구나.&rdquo;</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 취지 - 핵심 메시지 */}
        <section className="sec" style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', color: '#fff' }}>
          <div className="inner" style={{ textAlign: 'center', maxWidth: '480px' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.7, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Why we do this</p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.5, marginBottom: '32px' }}>
              실행메이킹은<br />
              <span style={{ background: 'rgba(0,0,0,0.2)', padding: '4px 12px', borderRadius: '8px' }}>대행 서비스가 아닙니다.</span>
            </h2>

            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px 24px', backdropFilter: 'blur(10px)', marginBottom: '24px' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.8 }}>
                원장님 <strong style={{ background: '#fff', color: 'var(--accent)', padding: '2px 10px', borderRadius: '6px' }}>혼자서도</strong><br />
                잘 운영할 수 있는<br />
                <strong style={{ fontSize: '1.4rem' }}>운영법을 알려드립니다.</strong>
              </p>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
              그래서 결국,<br />
              <strong style={{ fontSize: '1.2rem', borderBottom: '2px solid #fff', paddingBottom: '2px' }}>
                인생을 잘 살 수 있는 방법
              </strong>이에요.
            </p>
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
