import type { Metadata } from "next";
import BlogGuideForm from "./BlogGuideForm";

export const metadata: Metadata = {
  title: "블로그 무료 강의 | EAZY",
  description: "뷰티샵 원장님을 위한 블로그 상위노출 강의",
  openGraph: {
    title: "블로그 무료 강의 | EAZY",
    description: "뷰티샵 원장님을 위한 블로그 상위노출 강의",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function BlogGuidePage() {
  return (
    <>
      <style>{`
        .guide-page *, .guide-page *::before, .guide-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .guide-page {
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
        .guide-page a { text-decoration: none; color: inherit; }

        .guide-page .header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(17,17,17,0.9); backdrop-filter: blur(20px); }
        .guide-page .header-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .guide-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .guide-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }

        .guide-page .container { max-width: 640px; margin: 0 auto; padding: 120px 24px 80px; }

        .guide-page .form-card { background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 40px 32px; }
        .guide-page .form-title { font-size: 1.5rem; font-weight: 900; margin-bottom: 8px; text-align: center; }
        .guide-page .form-desc { font-size: 0.95rem; color: var(--text-sub); text-align: center; margin-bottom: 32px; line-height: 1.7; }
        .guide-page .form-group { margin-bottom: 16px; }
        .guide-page .form-label { font-size: 0.85rem; font-weight: 700; margin-bottom: 6px; display: block; }
        .guide-page .form-input {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border);
          border-radius: 10px; font-size: 1rem; font-family: inherit;
          transition: border-color 0.2s;
        }
        .guide-page .form-input:focus { outline: none; border-color: var(--accent); }
        .guide-page .form-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff;
          border: none; border-radius: 12px; font-size: 1rem; font-weight: 700;
          cursor: pointer; font-family: inherit; transition: all 0.2s; margin-top: 8px;
        }
        .guide-page .form-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(42,95,255,0.3); }
        .guide-page .form-btn:disabled { background: #ccc; cursor: not-allowed; transform: none; box-shadow: none; }
        .guide-page .form-note { font-size: 0.8rem; color: var(--text-sub); text-align: center; margin-top: 12px; }

        .guide-page .video-title { font-size: 1.3rem; font-weight: 900; margin-bottom: 16px; text-align: center; }
        .guide-page .video-frame {
          width: 100%; aspect-ratio: 16/9; border: none; border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
        }
        .guide-page .video-note { font-size: 0.8rem; color: var(--text-sub); text-align: center; margin-top: 16px; }

        @media (max-width: 640px) {
          .guide-page .container { padding: 100px 16px 60px; }
          .guide-page .form-card { padding: 28px 20px; }
        }
      `}</style>

      <div className="guide-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/resources" className="back-link">&larr; 무료자료 모음</a>
          </div>
        </header>

        <div className="container">
          <BlogGuideForm />
        </div>
      </div>
    </>
  );
}
