"use client";

import { useState, useCallback } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
      return next;
    });
  }, []);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        style={{
          display: "none",
          alignItems: "center",
          gap: "6px",
          color: "#fff",
          fontSize: "0.8rem",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        메뉴
      </button>

      <div className={`mobile-menu${isOpen ? " open" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <a href="#services" onClick={toggleMenu}>
            서비스
          </a>
          <a href="#reviews" onClick={toggleMenu}>
            후기
          </a>
          <a href="/resources" onClick={toggleMenu}>
            무료자료
          </a>
          <a href="/columns" onClick={toggleMenu}>
            인사이트 칼럼
          </a>
          <a href="/about" onClick={toggleMenu}>
            소개
          </a>
          <a
            href="http://pf.kakao.com/_yCZQn"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-cta"
            onClick={toggleMenu}
          >
            무료 상담
          </a>
        </div>
      </div>
    </>
  );
}
