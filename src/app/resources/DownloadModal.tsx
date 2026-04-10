"use client";

import { useState, useCallback } from "react";

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxKTOhXCvygeHrxo-x3QNgE3Zv5kFJcWw7yYue_qbh4kAgATMIhG_J5Yx_B9He0PtKp/exec';

interface DownloadButtonProps {
  file: string;
  fileName: string;
  title: string;
}

export function DownloadButton({ file, fileName, title }: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [shop, setShop] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState("다운로드 받기");

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setName("");
    setPhone("");
    setShop("");
    setSubmitting(false);
    setBtnText("다운로드 받기");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setBtnText("처리 중...");

    const koreanJamoOnly = /^[ㄱ-ㅎㅏ-ㅣ\s]+$/;

    if (koreanJamoOnly.test(name.trim())) {
      alert("성함을 올바르게 입력해주세요.");
      setSubmitting(false);
      setBtnText("다운로드 받기");
      return;
    }
    if (shop && koreanJamoOnly.test(shop.trim())) {
      alert("상호명을 올바르게 입력해주세요.");
      setSubmitting(false);
      setBtnText("다운로드 받기");
      return;
    }

    // Google Sheets
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          shop: shop.trim(),
          resource: fileName,
          date: new Date().toLocaleString("ko-KR"),
        }),
      });
    } catch (err) {
      console.error("시트 전송 실패:", err);
    }

    // Download
    const a = document.createElement("a");
    a.href = `/images/${file}`;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setBtnText("다운로드 완료!");
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="resource-btn"
        style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}
      >
        무료 다운로드 &rarr;
      </button>

      {isOpen && (
        <div
          className="modal-overlay active"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3>{title} 다운로드</h3>
            <p>정보를 입력하시면 바로 다운로드됩니다.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="원장님 성함"
                required
                minLength={2}
                title="성함을 2글자 이상 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="연락처 (010-0000-0000)"
                required
                pattern="[0-9\-]{11,13}"
                minLength={11}
                title="휴대폰 번호 11자리를 입력해주세요"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="샵 이름 (선택)"
                value={shop}
                onChange={(e) => setShop(e.target.value)}
              />
              <button type="submit" className="modal-submit" disabled={submitting}>
                {btnText}
              </button>
            </form>
            <p className="modal-note">입력하신 정보는 자료 발송 외 다른 용도로 사용되지 않습니다.</p>
          </div>
        </div>
      )}
    </>
  );
}
