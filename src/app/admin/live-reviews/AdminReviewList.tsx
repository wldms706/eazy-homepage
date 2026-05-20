"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Review = {
  id: number;
  user_id: string;
  user_name: string | null;
  shop_name: string | null;
  rating: number;
  content: string;
  photo_url: string | null;
  status: string;
  created_at: string;
};

const STATUS_LABEL: Record<string, { label: string; color: string }> = {
  pending: { label: '대기', color: '#F59E0B' },
  approved: { label: '승인', color: '#10B981' },
  rejected: { label: '거절', color: '#EF4444' },
};

export default function AdminReviewList({ reviews }: { reviews: Review[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [busyId, setBusyId] = useState<number | null>(null);

  const filtered = reviews.filter((r) => filter === 'all' || r.status === filter);

  const updateStatus = async (id: number, status: 'approved' | 'rejected') => {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/live-reviews/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('실패');
      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : '처리 실패');
    } finally {
      setBusyId(null);
    }
  };

  const deleteReview = async (id: number) => {
    if (!confirm('후기를 영구 삭제할까요?')) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/live-reviews/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('삭제 실패');
      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제 실패');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {(['pending', 'approved', 'rejected', 'all'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 16px',
              background: filter === f ? '#1a1a1a' : '#fff',
              color: filter === f ? '#fff' : '#444',
              border: '1px solid #EBEBEB',
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {f === 'all' ? '전체' : STATUS_LABEL[f].label} ({reviews.filter((r) => f === 'all' || r.status === f).length})
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', padding: 40, color: '#888' }}>해당 상태의 후기가 없어요.</p>
        ) : (
          filtered.map((r) => (
            <div key={r.id} style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, gap: 8, flexWrap: 'wrap' }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    background: STATUS_LABEL[r.status].color,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    marginRight: 8,
                  }}>{STATUS_LABEL[r.status].label}</span>
                  <strong style={{ fontSize: '0.95rem' }}>{r.user_name || '익명'}</strong>
                  {r.shop_name && <span style={{ color: '#666', marginLeft: 6, fontSize: '0.85rem' }}>· {r.shop_name}</span>}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>{new Date(r.created_at).toLocaleString('ko-KR')}</div>
              </div>

              <div style={{ fontSize: '1rem', marginBottom: 8 }}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} style={{ color: i < r.rating ? '#FFD700' : '#E0E0E0' }}>★</span>
                ))}
              </div>

              {r.photo_url && (
                <div style={{ marginBottom: 12 }}>
                  <img src={r.photo_url} alt="후기 사진" style={{ maxWidth: 200, borderRadius: 10, border: '1px solid #EBEBEB' }} />
                </div>
              )}

              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#1a1a1a', whiteSpace: 'pre-wrap', wordBreak: 'keep-all', marginBottom: 16 }}>
                {r.content}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {r.status !== 'approved' && (
                  <button
                    onClick={() => updateStatus(r.id, 'approved')}
                    disabled={busyId === r.id}
                    style={{ padding: '8px 16px', background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    {busyId === r.id ? '처리 중...' : '✓ 승인'}
                  </button>
                )}
                {r.status !== 'rejected' && (
                  <button
                    onClick={() => updateStatus(r.id, 'rejected')}
                    disabled={busyId === r.id}
                    style={{ padding: '8px 16px', background: '#fff', color: '#EF4444', border: '1px solid #EF4444', borderRadius: 8, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    ✗ 거절
                  </button>
                )}
                <button
                  onClick={() => deleteReview(r.id)}
                  disabled={busyId === r.id}
                  style={{ padding: '8px 16px', background: 'none', color: '#888', border: 'none', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', marginLeft: 'auto' }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
