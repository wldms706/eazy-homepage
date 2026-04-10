"use client";

import { useState } from "react";

export default function CoachingTabs() {
  const [activeTab, setActiveTab] = useState<"oneday" | "making">("oneday");

  return (
    <section className="sec">
      <div className="inner" style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Program</p>
        <h2 className="title" style={{ marginBottom: "8px" }}>원장님에게 맞는 과정을 선택하세요</h2>
      </div>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
        <div className="tab-btns">
          <button
            className={`tab-btn ${activeTab === "oneday" ? "active" : ""}`}
            onClick={() => setActiveTab("oneday")}
          >
            원데이 컨설팅&대행
          </button>
          <button
            className={`tab-btn ${activeTab === "making" ? "active" : ""}`}
            onClick={() => setActiveTab("making")}
          >
            실행메이킹 8주
          </button>
        </div>

        {/* 원데이 */}
        <div className="tab-content" style={{ display: activeTab === "oneday" ? "block" : "none" }}>
          <span className="badge" style={{ background: "#e8eeff", color: "var(--accent)" }}>1:1 맞춤</span>
          <h3 className="title">하루 6시간,<br />방향 잡고 바로 실행합니다</h3>
          <div className="price-card">
            <p className="price-num">1,200,000원</p>
            <p className="price-sub">1일 6시간 &middot; 1:1 컨설팅 + 대행</p>
          </div>
          <div className="info-grid">
            <div className="info-card"><p className="l">시간</p><p className="v">6시간</p></div>
            <div className="info-card"><p className="l">방식</p><p className="v">1:1 대면</p></div>
            <div className="info-card"><p className="l">포함</p><p className="v">컨설팅+대행</p></div>
            <div className="info-card"><p className="l">대상</p><p className="v">뷰티샵 원장님</p></div>
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px" }}>하루가 끝나면, 이게 남습니다</h3>
          <div className="info-grid" style={{ marginBottom: "32px" }}>
            <div className="info-card"><p className="l">결과물 1</p><p className="v">릴스 촬영본 1개</p></div>
            <div className="info-card"><p className="l">결과물 2</p><p className="v">광고 세팅 완료</p></div>
            <div className="info-card" style={{ gridColumn: "1/-1" }}><p className="l">결과물 3</p><p className="v">전용 랜딩 홈페이지</p></div>
          </div>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px" }}>이런 분께 추천합니다</h3>
          <div className="list">
            <div className="list-item chk">매출 정체 돌파구가 필요한 분</div>
            <div className="list-item chk">방향은 잡고 싶은데 혼자선 막막한 분</div>
            <div className="list-item chk">하루 만에 세팅 끝내고 싶은 분</div>
          </div>
        </div>

        {/* 실행메이킹 */}
        <div className="tab-content" style={{ display: activeTab === "making" ? "block" : "none" }}>
          <span className="badge" style={{ background: "#ffe8e8", color: "#FF4444" }}>3기 &middot; 6월 초 모집</span>
          <h3 className="title">8주 동안 매출의 판을<br />완전히 바꿔드립니다</h3>
          <div className="price-card">
            <p className="price-num">4,000,000원</p>
            <p className="price-sub">8주 과정 &middot; 실행메이킹 3기</p>
          </div>
          <div className="info-grid">
            <div className="info-card"><p className="l">기간</p><p className="v">8주</p></div>
            <div className="info-card"><p className="l">방식</p><p className="v">1:1 밀착</p></div>
            <div className="info-card"><p className="l">모집</p><p className="v">6월 초</p></div>
            <div className="info-card"><p className="l">정원</p><p className="v">소수 정예</p></div>
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px" }}>8주가 끝나면, 이게 전부 남습니다</h3>
          <div className="info-grid" style={{ marginBottom: "32px" }}>
            <div className="info-card"><p className="l">결과물 1</p><p className="v">릴스 완성본 1개</p></div>
            <div className="info-card"><p className="l">결과물 2</p><p className="v">광고 세팅 완료</p></div>
            <div className="info-card"><p className="l">결과물 3</p><p className="v">전문가용 홈페이지</p></div>
            <div className="info-card"><p className="l">결과물 4</p><p className="v">네이버&middot;구글 검색 등록</p></div>
            <div className="info-card"><p className="l">결과물 5</p><p className="v">피드 게시물 50개+</p></div>
            <div className="info-card"><p className="l">결과물 6</p><p className="v">평생 매출 구조 완성</p></div>
          </div>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "14px" }}>8주 동안 이런 걸 합니다</h3>
          <div className="list">
            <div className="list-item chk">매출 구조 분석 + 가격 전략 재설계</div>
            <div className="list-item chk">릴스 기획 &middot; 촬영 &middot; 편집 &middot; 업로드</div>
            <div className="list-item chk">메타 광고 세팅 및 집행</div>
            <div className="list-item chk">블로그 상위노출 구조 세팅</div>
            <div className="list-item chk">검색했을 때 나오게 — 네이버&middot;구글 서치 등록</div>
            <div className="list-item chk">주 1회 1:1 미팅 + 수시 피드백</div>
          </div>
        </div>
      </div>
    </section>
  );
}
