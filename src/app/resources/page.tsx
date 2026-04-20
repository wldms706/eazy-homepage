import type { Metadata } from "next";
import { DownloadButton } from "./DownloadModal";

export const metadata: Metadata = {
  title: "무료 자료 모음 | EAZY",
  description: "원장님의 매출 성장을 도와드리는 무료 콘텐츠",
  openGraph: {
    title: "EAZY - 찐이지 시스템",
    description: "뷰티샵 원장님을 위한 마케팅 시스템",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <style>{`
        .res-page *, .res-page *::before, .res-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
        .res-page {
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
        .res-page a { text-decoration: none; color: inherit; }

        .res-page .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(17,17,17,0.9);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        }
        .res-page .header-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .res-page .logo { font-size: 1.2rem; font-weight: 900; color: #fff; border: 2px solid rgba(255,255,255,0.3); padding: 4px 12px; border-radius: 8px; }
        .res-page .back-link { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
        .res-page .back-link:hover { color: #fff; }

        .res-page .hero {
          background: var(--bg-dark); padding: 140px 24px 80px; text-align: center;
        }
        .res-page .hero-sub { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin-bottom: 16px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; }
        .res-page .hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: #fff; margin-bottom: 16px; }
        .res-page .hero-desc { font-size: 1.1rem; color: rgba(255,255,255,0.5); }

        .res-page .content { max-width: 900px; margin: 0 auto; padding: 60px 24px 100px; }
        .res-page .category-label { font-size: 0.8rem; font-weight: 700; color: var(--accent); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .res-page .category-title { font-size: 1.6rem; font-weight: 900; margin-bottom: 32px; }

        .res-page .resource-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-bottom: 60px; }
        .res-page .resource-card {
          background: #FAFAFA; border: 1px solid var(--border); border-radius: 16px;
          overflow: hidden; transition: all 0.3s; display: flex; flex-direction: column;
        }
        .res-page .resource-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .res-page .resource-thumb { width: 100%; aspect-ratio: 3/4; object-fit: cover; border-bottom: 1px solid var(--border); }
        .res-page .resource-info { padding: 24px; flex: 1; display: flex; flex-direction: column; }
        .res-page .resource-badge { display: inline-block; font-size: 0.7rem; font-weight: 700; color: #fff; background: var(--accent); padding: 3px 10px; border-radius: 100px; margin-bottom: 12px; align-self: flex-start; }
        .res-page .resource-name { font-size: 1.05rem; font-weight: 800; margin-bottom: 8px; }
        .res-page .resource-desc { font-size: 0.85rem; color: var(--text-sub); line-height: 1.6; margin-bottom: 16px; flex: 1; }
        .res-page .resource-btn {
          display: block; text-align: center; background: var(--primary); color: #fff;
          padding: 12px; border-radius: 10px; font-size: 0.9rem; font-weight: 700;
          transition: background 0.2s;
        }
        .res-page .resource-btn:hover { background: #2d2d4a; }

        .res-page .coming-soon {
          text-align: center; padding: 60px 24px;
          border: 1px dashed var(--border); border-radius: 16px;
        }
        .res-page .coming-soon p { color: var(--text-light); font-size: 0.95rem; }

        .res-page .modal-overlay {
          display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          z-index: 200; align-items: center; justify-content: center; padding: 20px;
        }
        .res-page .modal-overlay.active { display: flex; }
        .res-page .modal {
          background: #fff; border-radius: 20px; padding: 36px 28px;
          max-width: 400px; width: 100%; position: relative;
        }
        .res-page .modal-close {
          position: absolute; top: 16px; right: 16px; background: none; border: none;
          font-size: 1.3rem; color: var(--text-sub); cursor: pointer;
        }
        .res-page .modal h3 { font-size: 1.2rem; font-weight: 900; margin-bottom: 6px; }
        .res-page .modal p { font-size: 0.85rem; color: var(--text-sub); margin-bottom: 20px; }
        .res-page .modal input {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border);
          border-radius: 10px; font-size: 0.95rem; margin-bottom: 12px;
          font-family: inherit; outline: none;
        }
        .res-page .modal input:focus { border-color: var(--accent); }
        .res-page .modal-submit {
          width: 100%; padding: 14px; background: var(--primary); color: #fff;
          border: none; border-radius: 10px; font-size: 0.95rem; font-weight: 700;
          cursor: pointer; font-family: inherit; transition: background 0.2s;
        }
        .res-page .modal-submit:hover { background: #2d2d4a; }
        .res-page .modal-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .res-page .modal-note { font-size: 0.75rem; color: var(--text-light); text-align: center; margin-top: 12px; }

        @media (max-width: 640px) {
          .res-page .hero { padding: 120px 20px 60px; }
          .res-page .resource-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="res-page">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">EAZY.</a>
            <a href="/" className="back-link">&larr; 돌아가기</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <p className="hero-sub">Free Resources</p>
          <h1 className="hero-title">무료 자료 모음</h1>
          <p className="hero-desc">원장님의 매출 성장을 도와드리는 무료 콘텐츠</p>
        </section>

        {/* Content */}
        <div className="content">
          {/* 진단 도구 */}
          <p className="category-label">진단 도구</p>
          <h2 className="category-title">내 샵 상태 점검하기</h2>
          <div className="resource-grid">
            <a href="https://beauty-structure-checker.vercel.app/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div style={{ padding: '40px', background: 'linear-gradient(135deg, #2A5FFF, #1a1a2e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="64" height="64" fill="none" stroke="#fff" strokeWidth="1.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>
              </div>
              <div className="resource-info">
                <span className="resource-badge">무료 진단</span>
                <h3 className="resource-name">뷰티샵 매출 구조 자가진단</h3>
                <p className="resource-desc">30개 질문으로 내 샵의 매출 구조를 진단하고, 맞춤 개선 가이드를 받아보세요.</p>
                <span className="resource-btn">무료로 진단하기 &rarr;</span>
              </div>
            </a>
          </div>

          {/* 서식/템플릿 */}
          <p className="category-label">서식 &middot; 템플릿</p>
          <h2 className="category-title">바로 쓸 수 있는 서식</h2>
          <div className="resource-grid">
            <div className="resource-card">
              <img src="/images/consent-form.jpg" alt="반영구 시술동의서" className="resource-thumb" />
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#9A8A6E' }}>무료 다운로드</span>
                <h3 className="resource-name">반영구 시술동의서 템플릿</h3>
                <p className="resource-desc">동의사항 10항목, 상담 메모, 서명란까지 포함된 전문 시술동의서입니다.</p>
                <DownloadButton file="consent-form.jpg" fileName="반영구_시술동의서_EAZY.jpg" title="반영구 시술동의서" />
              </div>
            </div>
            <div className="resource-card">
              <img src="/images/eyelash-consent.jpg" alt="속눈썹연장 시술동의서" className="resource-thumb" />
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#9A8A6E' }}>무료 다운로드</span>
                <h3 className="resource-name">속눈썹연장 시술동의서 템플릿</h3>
                <p className="resource-desc">속눈썹 연장 시술에 필요한 동의사항과 주의사항이 포함된 동의서입니다.</p>
                <DownloadButton file="eyelash-consent.jpg" fileName="속눈썹연장_시술동의서_EAZY.jpg" title="속눈썹연장 시술동의서" />
              </div>
            </div>
            <div className="resource-card">
              <img src="/images/eyelash-perm-consent.jpg" alt="속눈썹펌 시술동의서" className="resource-thumb" />
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#9A8A6E' }}>무료 다운로드</span>
                <h3 className="resource-name">속눈썹펌 시술동의서 템플릿</h3>
                <p className="resource-desc">속눈썹 펌 시술 전 필요한 동의사항과 사후관리 안내가 포함된 동의서입니다.</p>
                <DownloadButton file="eyelash-perm-consent.jpg" fileName="속눈썹펌_시술동의서_EAZY.jpg" title="속눈썹펌 시술동의서" />
              </div>
            </div>
            <div className="resource-card">
              <img src="/images/waxing-consent.jpg" alt="왁싱 시술동의서" className="resource-thumb" />
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#9A8A6E' }}>무료 다운로드</span>
                <h3 className="resource-name">왁싱 시술동의서 템플릿</h3>
                <p className="resource-desc">왁싱 시술 전 필요한 동의사항과 주의사항이 포함된 전문 동의서입니다.</p>
                <DownloadButton file="waxing-consent.jpg" fileName="왁싱_시술동의서_EAZY.jpg" title="왁싱 시술동의서" />
              </div>
            </div>
          </div>

          {/* AI 도구 */}
          <p className="category-label">AI 도구</p>
          <h2 className="category-title">무료로 쓸 수 있는 AI 도구</h2>
          <div className="resource-grid">
            <a href="https://chatgpt.com/g/g-699ae58f7f8081919bbaad42e513eb19-rilseu-ver-2" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div style={{ padding: '40px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#000', letterSpacing: '-1px' }}>GPTs</span>
              </div>
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#FF0050' }}>무료 AI 도구</span>
                <h3 className="resource-name">릴스 대본 자동 생성기</h3>
                <p className="resource-desc">뷰티샵 릴스 대본을 AI가 자동으로 만들어줍니다. ChatGPT 기반 무료 도구.</p>
                <span className="resource-btn" style={{ background: '#FF0050' }}>릴스 대본 만들기 &rarr;</span>
              </div>
            </a>
          </div>

          <p className="category-label">무료 영상 가이드</p>
          <h2 className="category-title">무료로 배울 수 있는 영상</h2>
          <div className="resource-grid">
            <a href="/guides/blog" className="resource-card">
              <div style={{ padding: '40px', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>YouTube</span>
              </div>
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#FF0000' }}>무료 강의</span>
                <h3 className="resource-name">블로그 무료 강의</h3>
                <p className="resource-desc">블로그 시작부터 상위노출까지. (1분부터 보시면 됩니다!)</p>
                <span className="resource-btn" style={{ background: '#FF0000' }}>강의 보러가기 &rarr;</span>
              </div>
            </a>
            <a href="/products/meta-ad-class" className="resource-card">
              <div style={{ padding: '40px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>META ADS</span>
              </div>
              <div className="resource-info">
                <span className="resource-badge" style={{ background: '#2A5FFF' }}>유료 강의</span>
                <h3 className="resource-name">메타광고 계정 만들기</h3>
                <p className="resource-desc">뷰티샵 원장님을 위한 메타광고 계정 세팅 가이드. 평생 소장 · 무제한 시청.</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text)', margin: '8px 0 12px' }}>9,900<span style={{ fontSize: '0.85rem', fontWeight: 600 }}>원</span></p>
                <span className="resource-btn" style={{ background: 'var(--bg-dark)' }}>구매하고 시청하기 &rarr;</span>
              </div>
            </a>
          </div>

          {/* 추후 추가 */}
          <div className="coming-soon">
            <p>더 많은 무료 자료가 곧 업데이트됩니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
