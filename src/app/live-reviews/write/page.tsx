import Link from "next/link";
import WriteForm from "./WriteForm";

export const metadata = {
  title: "후기 작성 | EAZY",
};

export default function WriteReviewPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
          <Link href="/live-reviews" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>← 후기 목록</Link>
        </div>
      </header>

      <main style={{ maxWidth: 560, margin: '0 auto', padding: '120px 24px 80px' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2A5FFF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Live Review</p>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 8 }}>라이브 후기 작성</h1>
        <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, marginBottom: 24 }}>
          솔직한 후기 한 줄이면 충분해요.<br />
          작성 완료 시 <strong style={{ color: '#2A5FFF' }}>무료 자료 영상</strong>을 받으실 수 있어요!
        </p>

        <WriteForm />
      </main>
    </div>
  );
}
