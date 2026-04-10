"use client";

import { useEffect, useRef } from "react";

export function CounterAnimation() {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let n = 12400;
    const target = 12847;
    const step = Math.ceil((target - n) / 60);
    const timer = setInterval(() => {
      n += step;
      if (n >= target) {
        n = target;
        clearInterval(timer);
      }
      el.textContent = n.toLocaleString();
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return <span className="counter-num" ref={elRef}>12,847</span>;
}

export function ReviewImageSlider() {
  const reviews = [
    "review1.jpg", "review2.jpg", "review3.jpg", "review4.jpg",
    "review5.jpg", "review6.jpg", "review7.jpg", "review8.jpg",
    "review9.jpg", "review10.jpg", "review11.jpg", "review13.jpg",
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className="review-img-slider">
        {reviews.map((r, i) => (
          <img key={`a-${i}`} src={`/reviews/${r}`} alt="후기" />
        ))}
        {reviews.map((r, i) => (
          <img key={`b-${i}`} src={`/reviews/${r}`} alt="후기" />
        ))}
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "80px", background: "linear-gradient(to right,#fff,transparent)", pointerEvents: "none", zIndex: 1 }}></div>
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "80px", background: "linear-gradient(to left,#fff,transparent)", pointerEvents: "none", zIndex: 1 }}></div>
    </div>
  );
}

export function FloatingCTA() {
  return (
    <a href="https://www.blogwriter.co.kr" target="_blank" rel="noopener noreferrer" className="floating-cta">
      무료로 시작하기 &rarr;
    </a>
  );
}
