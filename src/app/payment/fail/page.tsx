import { Suspense } from 'react';
import FailClient from './FailClient';

export const metadata = {
  title: '결제 실패',
};

export default function PaymentFailPage() {
  return (
    <Suspense fallback={<div style={{ padding: 80, textAlign: 'center' }}>로딩 중...</div>}>
      <FailClient />
    </Suspense>
  );
}
