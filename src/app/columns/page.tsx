import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사이트 칼럼 | EAZY",
  description: "매출의 판을 짜는 사람의 현장 기록",
  openGraph: {
    title: "인사이트 칼럼 | EAZY",
    description: "매출의 판을 짜는 사람의 현장 기록",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function ColumnsPage() {
  return (
    <>
      <style>{`
        .columns-page *, .columns-page *::before, .columns-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .columns-page {
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
        .columns-page a { text-decoration: none; color: inherit; }

        .columns-page .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(255,255,255,0.95); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .columns-page .header-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
        }
        .columns-page .logo { font-size: 1.4rem; font-weight: 900; color: var(--text); }
        .columns-page .nav { display: flex; gap: 32px; }
        .columns-page .nav a { font-size: 0.9rem; font-weight: 500; color: var(--text-sub); transition: color 0.2s; }
        .columns-page .nav a:hover { color: var(--text); }
        .columns-page .header-cta {
          font-size: 0.85rem; font-weight: 700; color: #fff;
          background: var(--accent); padding: 8px 20px; border-radius: 8px;
        }

        .columns-page .page-hero {
          padding: 120px 24px 60px; text-align: center;
        }
        .columns-page .page-hero .tag {
          font-size: 0.8rem; font-weight: 700; color: var(--accent);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;
        }
        .columns-page .page-hero h1 {
          font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900;
          line-height: 1.3; margin-bottom: 12px;
        }
        .columns-page .page-hero p {
          font-size: 1rem; color: var(--text-sub); max-width: 500px; margin: 0 auto;
        }

        .columns-page .notion-wrap {
          max-width: 100%; margin: 0; padding: 0;
        }
        .columns-page .notion-wrap iframe {
          width: 100%; height: calc(100vh - 200px); border: none; display: block;
          overflow: hidden;
        }

        .columns-page .footer {
          background: var(--bg-dark); color: rgba(255,255,255,0.4);
          padding: 40px 24px; text-align: center; font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .columns-page .nav { display: none; }
          .columns-page .header-cta { display: none; }
        }
      `}</style>

      <div className="columns-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <nav className="nav">
              <a href="/#services">서비스</a>
              <a href="/#reviews">후기</a>
              <a href="/resources">무료자료</a>
              <a href="/columns" style={{ color: 'var(--text)', fontWeight: 700 }}>인사이트 칼럼</a>
              <a href="/about">소개</a>
            </nav>
            <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" className="header-cta">무료 상담</a>
          </div>
        </header>

        <div className="page-hero">
          <p className="tag">Insight Column</p>
          <h1>인사이트 칼럼</h1>
          <p>매출의 판을 짜는 사람의 현장 기록</p>
        </div>

        <div className="notion-wrap">
          <iframe src="https://resisted-avatar-6bf.notion.site/ebd//85bd7e34f7a147c9842ba87b69fc7418" allowFullScreen style={{ overflow: 'hidden' }}></iframe>
        </div>

        <footer className="footer">
          <p>&copy; 2026 EAZY. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
