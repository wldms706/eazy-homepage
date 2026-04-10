"use client";

import { useState } from "react";

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxKTOhXCvygeHrxo-x3QNgE3Zv5kFJcWw7yYue_qbh4kAgATMIhG_J5Yx_B9He0PtKp/exec';

export default function MetaAdGuideForm() {
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [shop, setShop] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState("영상 바로 보기 →");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setBtnText("확인 중...");

    const koreanJamoOnly = /^[ㄱ-ㅎㅏ-ㅣ\s]+$/;

    if (koreanJamoOnly.test(name)) {
      alert("성함을 올바르게 입력해주세요.");
      setSubmitting(false);
      setBtnText("영상 바로 보기 →");
      return;
    }
    if (koreanJamoOnly.test(shop)) {
      alert("상호명을 올바르게 입력해주세요.");
      setSubmitting(false);
      setBtnText("영상 바로 보기 →");
      return;
    }

    // Google Sheets
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          shop,
          resource: "메타광고 계정 만들기 영상",
          date: new Date().toLocaleString("ko-KR"),
        }),
      });
    } catch (err) {
      // silent
    }

    setShowVideo(true);
  };

  if (showVideo) {
    return (
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", textAlign: "center", marginBottom: "16px" }}>Free Guide</p>
        <h2 className="video-title">메타광고 계정 만들기</h2>
        <iframe
          className="video-frame"
          src="https://drive.google.com/file/d/1i9GkYtq3maB0zdyFk4279WM9UIWAhgMj/preview"
          allow="autoplay"
          allowFullScreen
        ></iframe>
        <p className="video-note">영상이 도움이 되셨다면, 다른 무료 자료도 확인해보세요.</p>
        <a href="/resources" style={{ display: "block", textAlign: "center", marginTop: "16px", fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)" }}>무료 자료 더 보기 &rarr;</a>
      </div>
    );
  }

  return (
    <div className="form-card">
      <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", textAlign: "center", marginBottom: "16px" }}>Free Guide</p>
      <h1 className="form-title">메타광고 계정 만들기</h1>
      <p className="form-desc">뷰티샵 원장님을 위한 메타광고 계정 세팅 가이드입니다.<br />정보를 입력하시면 바로 영상을 시청할 수 있습니다.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">성함</label>
          <input type="text" className="form-input" placeholder="홍길동" required minLength={2} title="성함을 2글자 이상 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">연락처</label>
          <input type="tel" className="form-input" placeholder="010-0000-0000" required pattern="[0-9\-]{11,13}" minLength={11} title="휴대폰 번호 11자리를 입력해주세요" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">샵 상호명</label>
          <input type="text" className="form-input" placeholder="예) OO뷰티샵" required value={shop} onChange={(e) => setShop(e.target.value)} />
        </div>
        <button type="submit" className="form-btn" disabled={submitting}>{btnText}</button>
      </form>
      <p className="form-note">입력하신 정보는 마케팅 목적으로만 사용됩니다.</p>
      <div style={{ background: "#F8F8F8", borderRadius: "12px", padding: "16px 20px", marginTop: "16px" }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>안내사항</p>
        <p style={{ fontSize: "0.85rem", color: "var(--text-sub)", lineHeight: 1.8 }}>&bull; 본 영상은 무료 자료로, 영상 내용에 대한 별도 상담은 제공되지 않습니다.<br />&bull; 본 영상은 추후 유료 콘텐츠로 전환될 예정입니다.</p>
      </div>
    </div>
  );
}
