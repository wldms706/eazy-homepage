'use client';

import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

type Profile = {
  id: string;
  name: string | null;
  business_name: string | null;
  shop_phone: string | null;
};

type Status = 'loading' | 'unauthed' | 'no-profile' | 'ready';

interface Props {
  /** 인증 + 프로필 완료 후 보여줄 내용 */
  children: (user: { id: string; email: string; profile: Profile }) => ReactNode;
  /** 안내 문구 */
  title?: string;
  description?: string;
}

export default function AuthGate({ children, title = '무료 자료 받기', description = '간편 로그인 후 정보를 한 번만 입력하시면 모든 자료를 받으실 수 있어요.' }: Props) {
  const [status, setStatus] = useState<Status>('loading');
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shop, setShop] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [socialLoading, setSocialLoading] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    const init = async () => {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) {
        setStatus('unauthed');
        return;
      }
      setUser({ id: u.id, email: u.email || '' });
      const { data: p } = await supabase.from('profiles').select('id, name, business_name, shop_phone').eq('id', u.id).single();
      if (!p || !p.shop_phone || !p.name || !p.business_name) {
        setProfile(p as Profile | null);
        setName(p?.name || '');
        setShop(p?.business_name || '');
        setPhone(p?.shop_phone || '');
        setStatus('no-profile');
        return;
      }
      setProfile(p as Profile);
      setStatus('ready');
    };
    init();
  }, [supabase]);

  const handleLogin = async (provider: 'kakao' | 'google') => {
    setSocialLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(window.location.pathname)}` },
    });
    if (error) {
      setError(provider === 'kakao' ? '카카오 로그인 실패' : 'Google 로그인 실패');
      setSocialLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    if (name.trim().length < 2) { setError('성함을 정확히 입력해주세요.'); return; }
    const phoneClean = phone.replace(/-/g, '');
    if (!/^01[0-9]{8,9}$/.test(phoneClean)) { setError('휴대폰 번호 11자리를 입력해주세요.'); return; }
    if (shop.trim().length < 2) { setError('샵 상호명을 입력해주세요.'); return; }

    setSaving(true);
    setError('');

    try {
      // upsert profile
      const { error: upsertError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          name: name.trim(),
          business_name: shop.trim(),
          shop_phone: phoneClean,
        });

      if (upsertError) throw upsertError;

      // Google Sheets에도 백업 (기존 리드 수집 유지)
      try {
        await fetch('https://script.google.com/macros/s/AKfycbxKTOhXCvygeHrxo-x3QNgE3Zv5kFJcWw7yYue_qbh4kAgATMIhG_J5Yx_B9He0PtKp/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.trim(),
            phone: phoneClean,
            shop: shop.trim(),
            resource: '회원가입_자료다운로드',
            date: new Date().toLocaleString('ko-KR'),
          }),
        });
      } catch {}

      setProfile({ id: user.id, name: name.trim(), business_name: shop.trim(), shop_phone: phoneClean });
      setStatus('ready');
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장에 실패했습니다.');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading') {
    return <div style={{ padding: 40, textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>확인 중...</div>;
  }

  if (status === 'unauthed') {
    return (
      <div style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 16, padding: 28, textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 20 }}>{description}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320, margin: '0 auto' }}>
          <button
            onClick={() => handleLogin('kakao')}
            disabled={socialLoading}
            style={{ padding: '12px', background: '#FEE500', color: '#000', border: 'none', borderRadius: 100, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {socialLoading ? '로그인 중...' : '카카오로 시작하기'}
          </button>
          <button
            onClick={() => handleLogin('google')}
            disabled={socialLoading}
            style={{ padding: '12px', background: '#fff', color: '#000', border: '1.5px solid #EBEBEB', borderRadius: 100, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Google로 시작하기
          </button>
        </div>
        {error && <p style={{ marginTop: 12, fontSize: '0.85rem', color: '#FF4444' }}>{error}</p>}
        <p style={{ marginTop: 16, fontSize: '0.75rem', color: '#888' }}>로그인 시 본 사이트의 모든 무료 자료를 받으실 수 있어요.</p>
      </div>
    );
  }

  if (status === 'no-profile') {
    return (
      <div style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 16, padding: 28 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: 8, textAlign: 'center' }}>마지막 단계</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 20, textAlign: 'center' }}>한 번만 입력하시면 다음부터는 바로 다운로드돼요.</p>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>성함 *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>휴대폰 번호 *</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01012345678" style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>샵 상호명 *</label>
          <input value={shop} onChange={(e) => setShop(e.target.value)} placeholder="OO뷰티샵" style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }} />
        </div>
        {error && <div style={{ padding: 10, background: '#FFF5F5', border: '1px solid #FFE0E0', borderRadius: 8, fontSize: '0.85rem', color: '#FF4444', marginBottom: 12 }}>{error}</div>}
        <button
          onClick={handleSaveProfile}
          disabled={saving}
          style={{ width: '100%', padding: '14px', background: saving ? '#ccc' : '#2A5FFF', color: '#fff', border: 'none', borderRadius: 12, fontSize: '0.95rem', fontWeight: 800, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}
        >
          {saving ? '저장 중...' : '저장하고 시작하기'}
        </button>
      </div>
    );
  }

  // status === 'ready'
  if (user && profile) {
    return <>{children({ ...user, profile })}</>;
  }

  return null;
}

export function getDownloadHref(file: string) {
  return `/${file}`;
}
