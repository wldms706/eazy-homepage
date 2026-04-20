import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '환불 규정',
  description: 'EAZY 환불 규정 및 취소 정책',
};

export default function RefundPolicyPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff', border: '2px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: 8, textDecoration: 'none' }}>EAZY.</Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>← 돌아가기</Link>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2A5FFF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Refund Policy</p>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 32, lineHeight: 1.4 }}>환불 규정</h1>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제1조 (목적)</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#444', wordBreak: 'keep-all' }}>
            본 환불 규정은 찐이지 뷰티샵 비지니스 컨설팅(이하 &quot;회사&quot;)이 운영하는 EAZY (https://www.jjeen-eazy.com) 사이트에서 판매하는 영상 강의, 코칭, 제작 서비스 등의 환불 절차와 기준을 정함을 목적으로 합니다.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제2조 (영상 강의 환불)</h2>
          <ol style={{ paddingLeft: 20, fontSize: '1rem', lineHeight: 2, color: '#444' }}>
            <li style={{ marginBottom: 8 }}>결제 후 <strong>3일 이내, 영상을 시청하지 않은 경우</strong> 100% 환불이 가능합니다.</li>
            <li style={{ marginBottom: 8 }}>영상을 1회라도 시청한 이후에는 환불이 불가합니다. (콘텐츠의 특성상 복제·유출 가능성이 있어 시청 즉시 사용 종료로 간주합니다.)</li>
            <li style={{ marginBottom: 8 }}>결제 후 <strong>3일이 지난 경우</strong>에는 시청 여부와 관계없이 환불이 불가합니다.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제3조 (코칭·컨설팅 환불)</h2>
          <ol style={{ paddingLeft: 20, fontSize: '1rem', lineHeight: 2, color: '#444' }}>
            <li style={{ marginBottom: 8 }}>결제 후 <strong>코칭/컨설팅 시작 전</strong>에 환불 요청 시 100% 환불이 가능합니다.</li>
            <li style={{ marginBottom: 8 }}>코칭/컨설팅이 시작된 이후에는 진행된 회차를 제외한 잔여 금액을 일할 계산하여 환불합니다.</li>
            <li style={{ marginBottom: 8 }}>장기 프로그램(8주 실행메이킹 등)의 경우 50% 이상 진행된 시점부터는 환불이 불가합니다.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제4조 (제작 서비스 환불)</h2>
          <ol style={{ paddingLeft: 20, fontSize: '1rem', lineHeight: 2, color: '#444' }}>
            <li style={{ marginBottom: 8 }}>홈페이지 제작 등 맞춤형 제작 서비스는 작업 시작 전까지만 100% 환불 가능합니다.</li>
            <li style={{ marginBottom: 8 }}>작업이 진행된 이후에는 진행률에 따라 부분 환불이 적용됩니다.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제5조 (환불 신청 방법)</h2>
          <ol style={{ paddingLeft: 20, fontSize: '1rem', lineHeight: 2, color: '#444' }}>
            <li style={{ marginBottom: 8 }}>카카오톡 채널(<a href="http://pf.kakao.com/_yCZQn" target="_blank" rel="noopener noreferrer" style={{ color: '#2A5FFF', textDecoration: 'underline' }}>@찐이지</a>) 또는 이메일(wldms706@naver.com)로 환불 요청을 접수합니다.</li>
            <li style={{ marginBottom: 8 }}>환불 요청 접수 후 영업일 기준 3~5일 이내에 결제 수단으로 환불됩니다.</li>
            <li style={{ marginBottom: 8 }}>카드 결제의 경우 카드사 사정에 따라 환불 처리 시점이 다를 수 있습니다.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #1a1a1a' }}>제6조 (회사의 귀책 사유)</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#444', wordBreak: 'keep-all' }}>
            회사의 귀책 사유로 서비스가 제공되지 않거나 중단된 경우, 시청 여부 및 진행률과 관계없이 100% 환불이 가능합니다.
          </p>
        </section>

        <div style={{ marginTop: 60, padding: 24, background: '#F8F8F8', borderRadius: 12, fontSize: '0.9rem', color: '#666', lineHeight: 1.8 }}>
          <p style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>고객센터</p>
          <p>상호명: 찐이지 뷰티샵 비지니스 컨설팅</p>
          <p>대표자명: 정지은 | 사업자등록번호: 542-02-03878</p>
          <p>주소: 충청남도 천안시 동남구 풍세면 풍세산단로 290, 104동 504호</p>
          <p>전화: 010-3757-3918 | 이메일: wldms706@naver.com</p>
          <p style={{ marginTop: 12, fontSize: '0.8rem', color: '#999' }}>본 환불 규정은 2026년 4월 20일부터 적용됩니다.</p>
        </div>
      </main>
    </div>
  );
}
