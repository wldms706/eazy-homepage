"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function WriteButton({ variant = 'default' }: { variant?: 'default' | 'large' }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      router.push('/live-reviews/write');
    } else {
      // 로그인 페이지로 보내고, 로그인 후 작성 페이지로 자동 이동
      router.push('/login?next=/live-reviews/write');
    }
  };

  const styles = variant === 'large'
    ? { padding: '18px 40px', fontSize: '1.05rem' }
    : { padding: '14px 32px', fontSize: '0.95rem' };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      style={{
        background: '#fff',
        color: '#2A5FFF',
        border: 'none',
        borderRadius: '100px',
        fontWeight: 800,
        fontFamily: 'inherit',
        cursor: loading ? 'wait' : 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        ...styles,
      }}
    >
      {loading ? '잠시만요...' : '✍️ 후기 작성하기'}
    </button>
  );
}
