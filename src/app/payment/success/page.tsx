import { Suspense } from 'react';
import SuccessClient from './SuccessClient';

export const metadata = {
  title: '결제 완료',
};

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div style={{ padding: 80, textAlign: 'center' }}>로딩 중...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
