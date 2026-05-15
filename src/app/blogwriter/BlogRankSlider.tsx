"use client";

const RANK_IMAGES = [
  '/blog-rank/rank-1.jpg',
  '/blog-rank/rank-2.jpg',
  '/blog-rank/rank-3.jpg',
  '/blog-rank/rank-4.jpg',
  '/blog-rank/rank-5.jpg',
];

// 무한 슬라이드용으로 두 번 반복
const DUPLICATED = [...RANK_IMAGES, ...RANK_IMAGES];

export default function BlogRankSlider() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '40px 0' }}>
      <style>{`
        @keyframes rankSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .rank-track { animation: rankSlide 40s linear infinite; }
        .rank-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="rank-track" style={{ display: 'flex', gap: '20px', width: 'max-content' }}>
        {DUPLICATED.map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              background: '#000',
            }}
          >
            <img
              src={src}
              alt={`상위노출 증거 ${(i % 5) + 1}`}
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* 좌우 페이드 */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: '60px',
        background: 'linear-gradient(to right, #fff, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: '60px',
        background: 'linear-gradient(to left, #fff, transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />
    </div>
  );
}
