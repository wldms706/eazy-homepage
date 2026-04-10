import type { ReactNode } from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block">
              <div className="mx-auto mb-3 inline-flex h-12 px-4 items-center justify-center rounded-xl border-2 border-white/30">
                <span className="text-xl font-black text-white">EAZY.</span>
              </div>
            </Link>
            <h1 className="text-xl font-black text-white mt-3">혼자서도 살아남는 매출 구조</h1>
            <p className="text-xs text-white/40 mt-1">매출의 판을 짜고, 루트를 설계합니다</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
