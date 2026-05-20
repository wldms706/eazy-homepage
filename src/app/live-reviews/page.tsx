import type { Metadata } from "next";
import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import ReviewSlider from "./ReviewSlider";
import WriteButton from "./WriteButton";

export const metadata: Metadata = {
  title: "라이브 후기 | EAZY",
  description: "EAZY 무료 라이브 강의를 들은 원장님들의 진짜 후기",
};

export const revalidate = 60;

type Review = {
  id: number;
  user_name: string | null;
  shop_name: string | null;
  rating: number;
  content: string;
  photo_url: string | null;
  created_at: string;
};

export default async function LiveReviewsPage() {
  const supabase = createAdminClient();

  const { data: reviews } = await supabase
    .from("live_reviews")
    .select("id, user_name, shop_name, rating, content, photo_url, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  const list = (reviews ?? []) as Review[];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>← 돌아가기</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #2A5FFF 0%, #5B82FF 100%)', color: '#fff', padding: '140px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>Live Reviews</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: 16, wordBreak: 'keep-all' }}>
            EAZY 무료 라이브 강의<br />
            <span style={{ background: 'rgba(0,0,0,0.2)', padding: '4px 14px', borderRadius: '10px', display: 'inline-block', marginTop: '12px' }}>실제 후기</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 32, wordBreak: 'keep-all' }}>
            라이브 강의 참여하신 원장님들의 진짜 이야기입니다.
          </p>
          <WriteButton />
        </div>
      </section>

      {/* 후기 슬라이더 */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent, #2A5FFF)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Real Voices</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 900, marginBottom: 12, lineHeight: 1.4 }}>
            원장님들이 직접 쓴 후기
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8 }}>
            총 <strong style={{ color: '#2A5FFF' }}>{list.length}개</strong>의 후기가 있어요.
          </p>
        </div>

        {list.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 24px', color: '#888' }}>
            <p style={{ fontSize: '1rem' }}>아직 등록된 후기가 없어요.</p>
            <p style={{ fontSize: '0.85rem', marginTop: 8 }}>첫 번째 후기의 주인공이 되어보세요!</p>
          </div>
        ) : (
          <ReviewSlider reviews={list} />
        )}
      </section>

      {/* 작성 안내 */}
      <section style={{ padding: '80px 24px', background: '#FAFAFA', textAlign: 'center', borderTop: '1px solid #EBEBEB' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12, lineHeight: 1 }}>🎁</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 900, lineHeight: 1.4, marginBottom: 12 }}>
            후기 작성하면<br /><span style={{ color: '#2A5FFF' }}>무료 자료</span>를 드려요
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, marginBottom: 28 }}>
            라이브 강의 후기를 솔직하게 남겨주시면,<br />
            추가로 무료 자료 영상을 보내드립니다.
          </p>
          <WriteButton variant="large" />
        </div>
      </section>
    </div>
  );
}
