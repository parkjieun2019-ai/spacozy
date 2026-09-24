// 고객 후기 — 고객이 공개에 동의한 후기만 넣습니다. (광고 규정: 실제 후기만, 과장·편집 금지)
// 비어 있으면 홈페이지에는 "후기 준비 중" 카드와 네이버 후기 버튼이 보입니다.
//
// 예시:
// { name: "김○○", age: "50대", program: "전신 밸런스 비움 테라피", text: "…", photo: "/images/review-1.jpg" },

export type Review = { name: string; age?: string; program: string; text: string; photo?: string };

export const reviews: Review[] = [];
