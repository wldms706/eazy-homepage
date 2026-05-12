'use client';

import { useEffect, useState } from 'react';

interface Stats {
  total: number;
  subscribers: number;
  remaining: number;
  percentageTaken: number;
}

interface Props {
  variant?: 'hero' | 'cta';
}

export default function SlotCounter({ variant = 'hero' }: Props) {
  const [stats, setStats] = useState<Stats>({ total: 100, subscribers: 36, remaining: 64, percentageTaken: 36 });

  useEffect(() => {
    fetch('/api/blogwriter-stats')
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {});
  }, []);

  const containerStyle = variant === 'cta'
    ? { maxWidth: '360px', marginLeft: 'auto', marginRight: 'auto', marginTop: '16px' }
    : { marginBottom: '20px' };

  return (
    <div
      style={{
        background: 'rgba(255, 68, 68, 0.15)',
        border: '1px solid rgba(255, 68, 68, 0.4)',
        borderRadius: '12px',
        padding: '14px 18px',
        ...containerStyle,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFD700' }}>🔥 선착순 {stats.total}명 한정</span>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
          남은 자리 <span style={{ fontSize: '1.2rem', color: '#FFD700' }}>{stats.remaining}</span>명
        </span>
      </div>
      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${stats.percentageTaken}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF4444 0%, #FFD700 100%)',
            borderRadius: '999px',
            transition: 'width 0.6s ease',
          }}
        />
      </div>
    </div>
  );
}
