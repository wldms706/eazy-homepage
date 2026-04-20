'use client';

import { useState, useEffect } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || '';
const PRODUCT_ID = 'meta-ad-class';
const PRODUCT_NAME = '뷰티샵 메타광고 가이드';
const PRICE = 9900;

export default function CheckoutClient() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!clientKey) {
      setError('결제 시스템 설정이 완료되지 않았습니다.');
    }
  }, []);

  const validate = () => {
    if (name.trim().length < 2) return '성함을 정확히 입력해주세요.';
    const phoneClean = phone.replace(/-/g, '');
    if (!/^01[0-9]{8,9}$/.test(phoneClean)) return '휴대폰 번호 11자리를 입력해주세요.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '이메일 주소를 정확히 입력해주세요.';
    if (!agree) return '구매 조건 및 결제 진행에 동의해주세요.';
    return '';
  };

  const handlePayment = async () => {
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const tossPayments = await loadTossPayments(clientKey);
      const phoneClean = phone.replace(/-/g, '');
      const orderId = `ORDER_${PRODUCT_ID}_${Date.now()}`;

      // 주문 정보를 sessionStorage에 임시 저장 (success 페이지에서 사용)
      sessionStorage.setItem('order_buyer', JSON.stringify({ name, phone: phoneClean, email, productId: PRODUCT_ID, productName: PRODUCT_NAME, amount: PRICE }));

      const payment = tossPayments.payment({ customerKey: `customer_${phoneClean}` });

      await payment.requestPayment({
        method: 'CARD',
        amount: { currency: 'KRW', value: PRICE },
        orderId,
        orderName: PRODUCT_NAME,
        customerName: name,
        customerEmail: email,
        customerMobilePhone: phoneClean,
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
      });
    } catch (err) {
      console.error('결제 요청 실패:', err);
      const message = err instanceof Error ? err.message : '결제 요청에 실패했습니다.';
      // 사용자가 결제창 닫은 경우는 에러로 표시 안 함
      if (!message.includes('취소') && !message.includes('PAY_PROCESS_CANCELED')) {
        setError(message);
      }
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#fff', border: '1px solid #EBEBEB', borderRadius: 16, padding: 24 }}>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: 16 }}>주문자 정보</h2>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>성함 *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
          style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>휴대폰 번호 *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="01012345678"
          style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 6 }}>이메일 *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          style={{ width: '100%', padding: '12px 14px', border: '1px solid #EBEBEB', borderRadius: 10, fontSize: '0.95rem' }}
        />
        <p style={{ fontSize: '0.75rem', color: '#888', marginTop: 4 }}>※ 결제 영수증과 영상 시청 안내가 발송됩니다</p>
      </div>

      {/* 주문 요약 */}
      <div style={{ background: '#FAFAFA', borderRadius: 10, padding: 16, marginBottom: 16 }}>
        <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: 8 }}>주문 상품</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{PRODUCT_NAME}</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>{PRICE.toLocaleString()}원</span>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #EBEBEB', margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>총 결제 금액</span>
          <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2A5FFF' }}>{PRICE.toLocaleString()}원</span>
        </div>
      </div>

      {/* 결제수단 */}
      <div style={{ background: '#FAFAFA', borderRadius: 10, padding: 16, marginBottom: 16 }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 8 }}>결제수단</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="radio" id="card" name="method" defaultChecked style={{ accentColor: '#2A5FFF' }} />
          <label htmlFor="card" style={{ fontSize: '0.95rem' }}>신용카드</label>
        </div>
      </div>

      {/* 동의 */}
      <div style={{ marginBottom: 16, padding: 14, background: '#FAFAFA', borderRadius: 10 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.85rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} style={{ marginTop: 2, accentColor: '#2A5FFF' }} />
          <span>
            <strong>구매 조건 및 결제 진행에 동의합니다</strong>
            <br />
            <span style={{ color: '#666', fontSize: '0.8rem' }}>영상 시청 시 환불이 불가하며, 미시청 시 3일 이내 환불 가능합니다.</span>
          </span>
        </label>
      </div>

      {error && (
        <div style={{ padding: 12, background: '#FFF5F5', border: '1px solid #FFE0E0', borderRadius: 8, fontSize: '0.85rem', color: '#FF4444', marginBottom: 12 }}>
          {error}
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: '100%',
          padding: '16px',
          background: loading ? '#ccc' : '#2A5FFF',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          fontSize: '1rem',
          fontWeight: 800,
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s',
        }}
      >
        {loading ? '결제창 여는 중...' : `${PRICE.toLocaleString()}원 결제하기`}
      </button>

      <p style={{ marginTop: 12, fontSize: '0.75rem', color: '#888', textAlign: 'center', lineHeight: 1.6 }}>
        결제 시스템: 토스페이먼츠 (안전한 결제)
      </p>
    </div>
  );
}
