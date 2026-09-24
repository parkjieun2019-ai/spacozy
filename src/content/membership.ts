// 프라이빗 정액권 멤버십 — 매장 가격표(2026-09-24 촬영본) 기준
// ⚠ 하이푸(HIFU)는 의료기기로 오인될 수 있어 홈페이지 문구에는 상세 설명 없이
//   "상담 후 안내"로만 표기합니다. (programs/menu 에서도 동일 원칙 적용 중)

export type MembershipTier = {
  amount: string; // 예: "100만원권"
  validity: string; // 유효기간
  savingRate: string; // 적립률
  totalUse: string; // 총 사용 가능 금액
  scope: string[]; // 이용 가능 관리 범위
  family?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    amount: "100만원권",
    validity: "6개월",
    savingRate: "10%",
    totalUse: "110만원",
    scope: ["피부 관리"],
  },
  {
    amount: "200만원권",
    validity: "9개월",
    savingRate: "10%",
    totalUse: "220만원",
    scope: ["피부", "바디", "에너지 관리"],
  },
  {
    amount: "300만원권",
    validity: "12개월",
    savingRate: "15%",
    totalUse: "345만원",
    scope: ["피부", "바디", "에너지", "하이푸 관리"],
  },
  {
    amount: "500만원권",
    validity: "12개월",
    savingRate: "20%",
    totalUse: "600만원",
    scope: ["피부", "바디", "에너지", "하이푸 관리"],
    family: true,
  },
];
