"use client";

type Review = {
  id: number;
  user_name: string | null;
  shop_name: string | null;
  rating: number;
  content: string;
  photo_url: string | null;
  created_at: string;
};

function maskName(name: string | null): string {
  if (!name) return '익명';
  if (name.length <= 1) return name;
  if (name.length === 2) return name[0] + 'O';
  return name[0] + 'O'.repeat(name.length - 2) + name[name.length - 1];
}

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, fontSize: '1rem' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ color: n <= rating ? '#FFD700' : '#E0E0E0' }}>★</span>
      ))}
    </div>
  );
}

export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
  // 무한 슬라이드용으로 2배 복제
  const list = reviews.length >= 3 ? [...reviews, ...reviews] : reviews;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '20px 0' }}>
      <style>{`
        @keyframes liveReviewScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lr-track { animation: ${reviews.length >= 3 ? 'liveReviewScroll 50s linear infinite' : 'none'}; }
        .lr-track:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="lr-track"
        style={{
          display: 'flex',
          gap: '20px',
          width: reviews.length >= 3 ? 'max-content' : '100%',
          justifyContent: reviews.length < 3 ? 'center' : 'flex-start',
          padding: '0 24px',
          flexWrap: reviews.length < 3 ? 'wrap' : 'nowrap',
        }}
      >
        {list.map((r, i) => (
          <div
            key={`${r.id}-${i}`}
            style={{
              flexShrink: 0,
              width: '320px',
              background: '#fff',
              border: '1px solid #EBEBEB',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Stars rating={r.rating} />
            {r.photo_url && (
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', background: '#F5F5F5' }}>
                <img src={r.photo_url} alt="후기 사진" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#1a1a1a', wordBreak: 'keep-all', whiteSpace: 'pre-wrap', flex: 1 }}>
              {r.content}
            </p>
            <div style={{ paddingTop: '12px', borderTop: '1px solid #F0F0F0', fontSize: '0.85rem', color: '#666' }}>
              <strong style={{ color: '#1a1a1a' }}>{maskName(r.user_name)}</strong>
              {r.shop_name && <span> · {r.shop_name}</span>}
            </div>
          </div>
        ))}
      </div>

      {reviews.length >= 3 && (
        <>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '60px', background: 'linear-gradient(to right, #fff, transparent)', pointerEvents: 'none', zIndex: 1 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '60px', background: 'linear-gradient(to left, #fff, transparent)', pointerEvents: 'none', zIndex: 1 }} />
        </>
      )}
    </div>
  );
}
