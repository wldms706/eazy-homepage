"use client";

const reviews = [
  {
    badge: "충남",
    name: "A 원장님",
    text: (
      <>
        오픈하자마자 지은 원장님이 릴스를 직접 만들어주셔서 바로 홍보했어요.
        그때부터 흐름이 잡혔고, 지금은 꾸준히{" "}
        <strong>월 매출 400만원</strong> 이상 나오고 있어요.
      </>
    ),
    result: "월 매출 400만원+",
  },
  {
    badge: "충남",
    name: "B 원장님",
    text: (
      <>
        매출이 늘 350~400만원에서 정체돼 있었고 뭘 어떻게 실행해야 할지
        막막했어요. 지은 원장님이 릴스 기획부터 편집, 광고 집행까지 직접
        해주셨고, <strong>한 달 만에 매출이 2배</strong>로 올랐습니다.
      </>
    ),
    result: "한 달 만에 매출 2배",
  },
  {
    badge: "서울",
    name: "C 원장님",
    text: (
      <>
        샵 매출이 불안해서 유치원 보조 교사로 투잡을 하고 있었어요. 그런데
        매출이 오르는 걸 체감하면서 이제는{" "}
        <strong>샵에만 집중</strong>할 수 있게 됐어요.
      </>
    ),
    result: "투잡 → 샵 전념",
  },
  {
    badge: "서울",
    name: "D 원장님",
    text: (
      <>
        1:1 컨설팅을 듣고 가격 조정과 홍보 방식을 바꿨습니다. 그 결과{" "}
        <strong>한 달 만에 매출이 300만원에서 500만원</strong>으로
        증가했어요.
      </>
    ),
    result: "300만 → 500만원",
  },
  {
    badge: "경기도",
    name: "E 원장님",
    text: (
      <>
        월 매출이 100만원도 안 돼서 헬스장 투잡 알바를 했었어요. 1:1 컨설팅
        때 만들어준 릴스 대본으로 광고를 돌렸고, 매출이{" "}
        <strong>230만원대</strong>까지 올라 투잡을 정리했습니다.
      </>
    ),
    result: "100만 → 230만원",
  },
  {
    badge: "서울",
    name: "F 원장님",
    text: (
      <>
        1:1 컨설팅을 받은 뒤 지은 원장님이 잡아준 방향대로 릴스를 제작해
        홍보했어요. 그 결과 <strong>외국인 손님 예약</strong>까지 이어졌고,
        이 방식이 실제로 통한다는 확신이 생겼습니다.
      </>
    ),
    result: "외국인 고객 유치",
  },
];

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[0];
}) {
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-badge">{review.badge}</span>
        <span className="review-name">{review.name}</span>
      </div>
      <p className="review-text">{review.text}</p>
      <div className="review-result">{review.result}</div>
    </div>
  );
}

export default function ReviewSlider() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="section-title">구조를 만든 원장님들의 변화</h2>
        <p className="section-sub">판을 짠 원장님들의 실제 이야기</p>
      </div>
      <div className="review-slider-wrap">
        <div className="review-slider">
          {reviews.map((review, i) => (
            <ReviewCard key={`original-${i}`} review={review} />
          ))}
          {/* Duplicated for infinite scroll */}
          {reviews.map((review, i) => (
            <ReviewCard key={`clone-${i}`} review={review} />
          ))}
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--text-light)",
          marginTop: "32px",
        }}
      >
        ※ 모든 후기는 실제 카카오톡 대화 캡쳐이며, 개인정보 보호를 위해
        일부만 공개합니다.
      </p>
    </section>
  );
}
