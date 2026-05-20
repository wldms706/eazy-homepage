import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

type Review = {
  id: number;
  user_name: string | null;
  shop_name: string | null;
  rating: number;
  content: string;
};

function maskName(name: string | null): string {
  if (!name) return '익명';
  if (name.length <= 1) return name;
  if (name.length === 2) return name[0] + 'O';
  return name[0] + 'O'.repeat(name.length - 2) + name[name.length - 1];
}

export const revalidate = 120;

export default async function LiveReviewPreview() {
  const admin = createAdminClient();

  const { data, count } = await admin
    .from('live_reviews')
    .select('id, user_name, shop_name, rating, content', { count: 'exact' })
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(3);

  const reviews = (data || []) as Review[];

  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #fff 0%, #F0F4FF 100%)', borderTop: '1px solid #EBEBEB' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, gap: 12, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2A5FFF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>Live Reviews</p>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0, fontSize: '1.6rem' }}>라이브 강의 후기</h2>
          </div>
          <Link href="/live-reviews" style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2A5FFF', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            전체 보기 →
          </Link>
        </div>

        {reviews.length === 0 ? (
          <div style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 16, padding: '48px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✍️</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 6 }}>첫 번째 후기의 주인공이 되어보세요</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 20 }}>
              라이브 강의 후기 남기시면 무료 자료 영상 드려요.
            </p>
            <Link href="/live-reviews" style={{
              display: 'inline-block',
              background: '#2A5FFF',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '100px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}>후기 작성하러 가기 →</Link>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
              {reviews.map((r) => (
                <div key={r.id} style={{
                  background: '#fff',
                  border: '1px solid #EBEBEB',
                  borderRadius: 16,
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ fontSize: '1rem', display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} style={{ color: n <= r.rating ? '#FFD700' : '#E0E0E0' }}>★</span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    color: '#1a1a1a',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    wordBreak: 'keep-all',
                  }}>{r.content}</p>
                  <div style={{ fontSize: '0.82rem', color: '#666', paddingTop: 8, borderTop: '1px solid #F0F0F0' }}>
                    <strong style={{ color: '#1a1a1a' }}>{maskName(r.user_name)}</strong>
                    {r.shop_name && <span> · {r.shop_name}</span>}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666' }}>
              총 <strong style={{ color: '#2A5FFF' }}>{count || 0}개</strong>의 후기 ·{' '}
              <Link href="/live-reviews" style={{ color: '#2A5FFF', fontWeight: 700, textDecoration: 'underline' }}>전체 보기</Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
