import MobileMenu from "./components/MobileMenu";
import HeaderScroll from "./components/HeaderScroll";
import ResourceSlider from "./components/ResourceSlider";
import ReviewSlider from "./components/ReviewSlider";
import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
    <>
      <HeaderScroll />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            EAZY.
          </a>
          <nav className="nav">
            <a href="#services">서비스</a>
            <a href="#reviews">후기</a>
            <a href="/resources">무료자료</a>
            <a href="/columns">인사이트 칼럼</a>
            <a href="/about">소개</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <AuthButton />
            <a
              href="http://pf.kakao.com/_yCZQn"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta"
            >
              무료 상담
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-tag">혼자서도 살아남는 매출 구조</p>
            <h1 className="hero-headline">
              Make it
              <br />
              <span className="hero-accent">EAZY</span>
            </h1>
            <p className="hero-sub">
              열심히가 아니라, 구조로 이기는 법
              <br />
              매출의{" "}
              <strong style={{ color: "var(--accent)" }}>판</strong>을 짜고
              <br />
              고객이 들어오는{" "}
              <strong style={{ color: "var(--accent)" }}>루트</strong>를
              설계합니다.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <strong>7+</strong>
                <span>Years</span>
              </div>
              <div className="stat">
                <strong>100+</strong>
                <span>Customers</span>
              </div>
              <div className="stat">
                <strong>200%</strong>
                <span>Avg Growth</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                서비스 둘러보기
              </a>
              <a href="#about" className="btn-secondary">
                더 알아보기
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/logo-bg.png" alt="" className="hero-logo-bg" />
            <img src="/images/hero.png" alt="EAZY 대표" />
          </div>
        </div>
      </section>

      {/* 무료 자료 모음 (Resource Slider) */}
      <ResourceSlider />

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">어떤 방식이 맞으세요?</h2>
          <div className="quick-grid">
            <a href="#product-tools" className="quick-card active">
              <div className="quick-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.591.659H9.061a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0H5"
                  />
                </svg>
              </div>
              <span>엔진 장착하기</span>
            </a>
            <a href="#product-learn" className="quick-card">
              <div className="quick-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.218.81 6.51 1.26 9.873 1.26 3.363 0 6.654-.45 9.873-1.26a23.838 23.838 0 0 0-1.012-5.434m-15.482 0A47.125 47.125 0 0 1 12 5.69a47.125 47.125 0 0 1 7.74 4.457m-15.482 0L12 2.25l7.741 7.897"
                  />
                </svg>
              </div>
              <span>판 짜기</span>
            </a>
            <a href="#product-done" className="quick-card">
              <div className="quick-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </div>
              <span>루트 설계 맡기기</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="services">
        <div className="container">
          <h2 className="section-title">매출 구조를 만드는 3가지 엔진</h2>
          <p className="section-sub">원장님 샵에 필요한 엔진을 선택하세요</p>

          <div className="product-grid">
            {/* 블로그라이터 */}
            <div className="product-card" id="product-tools">
              <div className="product-badge">인기</div>
              <div className="product-thumb blue">
                <img
                  src="/images/blogwriter.png"
                  alt="블로그라이터"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              </div>
              <div className="product-info">
                <h3>블로그라이터</h3>
                <p className="product-desc">
                  고객이 들어오는 루트를 자동으로 만드는 엔진. 키워드만
                  입력하면 상위노출 블로그 글이 완성됩니다.
                </p>
                <div className="product-meta">
                  <span className="product-tag">엔진</span>
                  <span className="product-tag">루트 자동화</span>
                </div>
                <div className="product-price">
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-light)",
                      textDecoration: "line-through",
                    }}
                  >
                    월 19,900원
                  </span>
                  <span
                    className="price-amount"
                    style={{ color: "#FF4444" }}
                  >
                    {" "}
                    SALE 월 9,900원
                  </span>
                </div>
                <a href="/blogwriter" className="product-btn">
                  자세히 보기
                </a>
              </div>
            </div>

            {/* 코칭&대행 */}
            <div className="product-card" id="product-learn">
              <div className="product-badge hot">BEST</div>
              <div className="product-thumb purple">
                <img
                  src="/images/coaching.png"
                  alt="코칭&대행"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              </div>
              <div className="product-info">
                <h3>코칭&대행</h3>
                <p className="product-desc">
                  원장님 샵의 판 설계를 직접 세팅합니다. 릴스, 광고, 가격
                  전략까지 8주간 1:1 실행메이킹.
                </p>
                <div className="product-meta">
                  <span className="product-tag">판 설계</span>
                  <span className="product-tag">실행메이킹</span>
                </div>
                <div className="product-price">
                  <span
                    className="price-amount"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--accent)",
                    }}
                  >
                    실행메이킹 3기 · 6월 초 모집 예정
                  </span>
                </div>
                <a href="/coaching" className="product-btn">
                  자세히 보기
                </a>
              </div>
            </div>

            {/* 홈페이지 제작 */}
            <div className="product-card" id="product-done">
              <div className="product-thumb green">
                <img
                  src="/images/homepage-thumb.png"
                  alt="홈페이지 제작"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              </div>
              <div className="product-info">
                <h3>검색되는 홈페이지 구축</h3>
                <p className="product-desc">
                  검색하고, 확인하고, 예약하는 루트를 설계합니다. 고객이
                  신뢰하고 찾아오는 구조를 만듭니다.
                </p>
                <div className="product-meta">
                  <span className="product-tag">루트 설계</span>
                  <span className="product-tag">검색 구조</span>
                </div>
                <div className="product-price">
                  <span className="price-label">맞춤 견적</span>
                </div>
                <a href="/homepage-service" className="product-btn">
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSlider />

      {/* 인사이트 칼럼 */}
      <section style={{ padding: "80px 0", background: "#FAFAFA" }}>
        <div className="container">
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
              marginBottom: "8px",
            }}
          >
            Insight Column
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
            }}
          >
            <h2
              className="section-title"
              style={{ textAlign: "left", marginBottom: 0 }}
            >
              인사이트 칼럼
            </h2>
            <a
              href="/columns"
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--accent)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              전체 보기 &rarr;
            </a>
          </div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-sub)",
              marginBottom: "40px",
            }}
          >
            매출의 판을 짜는 사람의 현장 기록
          </p>
          <a
            href="/columns"
            style={{
              display: "block",
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "32px",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--accent)",
                background: "#e8eeff",
                padding: "4px 10px",
                borderRadius: "6px",
              }}
            >
              최신 칼럼
            </span>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              인사이트 칼럼에서 매출의 판을 읽어보세요
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-sub)",
                lineHeight: 1.8,
              }}
            >
              기술만으로는 오래 살아남기 어렵습니다. 구조를 만들면, 혼자서도
              살아남을 수 있습니다.
            </p>
            <span
              style={{
                display: "inline-block",
                marginTop: "16px",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--accent)",
              }}
            >
              읽으러 가기 &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-inner">
            <div className="about-text">
              <h2 className="section-title left">
                Make it <span className="hero-accent">EAZY</span>
              </h2>
              <p className="about-desc">
                좋은 제품과 매출을 만드는 구조는 다릅니다.
                <br />
                저희는 원장님의 시간과 에너지를 아끼면서
                <br />
                매출이 자동으로 올라가는 시스템을 만들어드립니다.
              </p>
              <div className="about-buttons">
                <a
                  href="http://pf.kakao.com/_yCZQn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  무료 상담 신청
                </a>
                <a href="#" className="btn-outline">
                  다른 사례도 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-logo">EAZY.</span>
              <p className="footer-desc">
                원장님의 가게 운영을 쉽게 만듭니다.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>서비스</h4>
                <a href="/blogwriter">블로그라이터</a>
                <a href="/coaching">코칭&대행</a>
                <a href="/homepage-service">홈페이지 제작</a>
              </div>
              <div className="footer-col">
                <h4>고객센터</h4>
                <a href="#">자주 묻는 질문</a>
                <a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer">카카오톡 문의</a>
                <a href="#">인스타그램</a>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.8,
            }}
          >
            <p>
              상호명: 찐이지 뷰티샵 비지니스 컨설팅 | 대표자명: 정지은
            </p>
            <p>
              사업자등록번호: 542-02-03878 | 통신판매업: 제
              2025-서울종로-1362 호
            </p>
            <p>
              주소: 충청남도 천안시 동남구 풍세면 풍세산단로 290, 104동
              504호
            </p>
            <p>
              전화번호: 010-3757-3918 | 이메일: wldms706@naver.com
            </p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 EAZY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
