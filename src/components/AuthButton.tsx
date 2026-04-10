'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AuthButton() {
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (loading) return null;

  if (user) {
    return (
      <button
        onClick={handleLogout}
        style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        로그아웃
      </button>
    );
  }

  return (
    <Link
      href="/login"
      style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
    >
      로그인
    </Link>
  );
}
