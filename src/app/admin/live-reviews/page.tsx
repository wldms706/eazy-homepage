import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail } from "@/lib/admin";
import { redirect } from "next/navigation";
import AdminReviewList from "./AdminReviewList";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "라이브 후기 관리 | EAZY Admin",
  robots: { index: false, follow: false },
};

export default async function AdminReviewsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    redirect('/login?next=/admin/live-reviews');
  }

  const admin = createAdminClient();
  const { data: reviews } = await admin
    .from('live_reviews')
    .select('id, user_id, user_name, shop_name, rating, content, photo_url, status, created_at')
    .order('created_at', { ascending: false });

  return (
    <div style={{ background: '#F5F5F5', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 8 }}>라이브 후기 관리</h1>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 24 }}>총 {reviews?.length || 0}개의 후기</p>
        <AdminReviewList reviews={reviews || []} />
      </div>
    </div>
  );
}
