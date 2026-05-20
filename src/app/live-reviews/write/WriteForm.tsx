"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function WriteForm() {
  const router = useRouter();
  const supabase = createClient();

  const [checking, setChecking] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [shop, setShop] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace('/login?next=/live-reviews/write');
        return;
      }
      setUserId(user.id);

      const { data: profile } = await supabase
        .from('profiles')
        .select('name, business_name')
        .eq('id', user.id)
        .single();

      if (profile) {
        if (profile.name) setName(profile.name);
        if (profile.business_name) setShop(profile.business_name);
      }
      setChecking(false);
    };
    init();
  }, [router, supabase]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      setError('사진은 5MB 이하만 가능해요.');
      return;
    }
    setPhotoFile(f);
    setPhotoPreview(URL.createObjectURL(f));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    if (name.trim().length < 2) { setError('성함을 정확히 입력해주세요.'); return; }
    if (content.trim().length < 10) { setError('후기는 최소 10자 이상 작성해주세요.'); return; }

    setSubmitting(true);
    setError('');

    try {
      let photoUrl: string | null = null;

      // 사진 업로드
      if (photoFile) {
        const ext = photoFile.name.split('.').pop()?.toLowerCase() || 'jpg';
        const filename = `${userId}-${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('live-review-photos')
          .upload(filename, photoFile, { upsert: false });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('live-review-photos')
          .getPublicUrl(filename);
        photoUrl = publicUrl;
      }

      // DB 저장
      const { error: insertError } = await supabase
        .from('live_reviews')
        .insert({
          user_id: userId,
          user_name: name.trim(),
          shop_name: shop.trim() || null,
          rating,
          content: content.trim(),
          photo_url: photoUrl,
          status: 'pending',
        });

      if (insertError) throw insertError;

      router.push('/live-reviews/thank-you');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : '저장에 실패했어요.');
      setSubmitting(false);
    }
  };

  if (checking) {
    return <p style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>확인 중...</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 별점 */}
      <div>
        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: 10 }}>별점 *</label>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              style={{
                fontSize: '2.4rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: n <= rating ? '#FFD700' : '#E0E0E0',
                transition: 'transform 0.1s',
              }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* 이름 */}
      <div>
        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>성함 *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
          required
          minLength={2}
          style={{ width: '100%', padding: '14px 16px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '1rem', fontFamily: 'inherit' }}
        />
      </div>

      {/* 샵 이름 */}
      <div>
        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>샵 상호명</label>
        <input
          type="text"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          placeholder="OO뷰티샵 (선택)"
          style={{ width: '100%', padding: '14px 16px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '1rem', fontFamily: 'inherit' }}
        />
      </div>

      {/* 후기 내용 */}
      <div>
        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>후기 내용 *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="라이브 강의 들으시고 어떤 점이 좋았는지, 어떤 변화가 있었는지 솔직하게 적어주세요. (최소 10자)"
          required
          minLength={10}
          rows={6}
          style={{ width: '100%', padding: '14px 16px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', lineHeight: 1.7 }}
        />
        <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'right', marginTop: 4 }}>{content.length}자</p>
      </div>

      {/* 사진 업로드 */}
      <div>
        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>
          사진 첨부 <span style={{ fontWeight: 400, color: '#888', fontSize: '0.8rem' }}>(선택, 5MB 이하)</span>
        </label>
        {photoPreview && (
          <div style={{ marginBottom: 10 }}>
            <img src={photoPreview} alt="미리보기" style={{ maxWidth: '100%', borderRadius: 10, border: '1px solid #EBEBEB' }} />
            <button
              type="button"
              onClick={() => { setPhotoFile(null); setPhotoPreview(''); }}
              style={{ marginTop: 8, fontSize: '0.85rem', color: '#FF4444', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
              사진 제거
            </button>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ fontSize: '0.85rem' }}
        />
      </div>

      {error && (
        <div style={{ padding: '12px 16px', background: '#FFF5F5', border: '1px solid #FFE0E0', borderRadius: 8, fontSize: '0.9rem', color: '#FF4444' }}>
          {error}
        </div>
      )}

      <div style={{ background: '#F0F4FF', borderRadius: 10, padding: '14px 16px', fontSize: '0.85rem', color: '#444', lineHeight: 1.7 }}>
        📌 후기는 <strong>관리자 승인 후</strong> 공개되며, 작성 직후 <strong style={{ color: '#2A5FFF' }}>무료 자료 영상</strong>을 받으실 수 있어요!
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          padding: '18px',
          background: submitting ? '#ccc' : '#2A5FFF',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          fontSize: '1.05rem',
          fontWeight: 900,
          cursor: submitting ? 'wait' : 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {submitting ? '저장 중...' : '후기 작성 완료 →'}
      </button>
    </form>
  );
}
