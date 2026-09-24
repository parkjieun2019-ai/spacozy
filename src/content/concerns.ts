// 고민별 추천 — 2단계에서 Supabase `concerns` 테이블로 옮길 구조입니다.

export type Concern = {
  slug: string;
  name: string;
  desc: string;
  programs: string[]; // programs.ts 의 slug
  note?: string;
};

export const concerns: Concern[] = [
  { slug: "neck-shoulder", name: "목 · 어깨 결림", desc: "딱딱하게 굳은 뒷목과 무거운 어깨", programs: ["balance", "face-line"] },
  { slug: "face-line", name: "흐려진 얼굴선", desc: "예전 같지 않은 턱선과 둔탁해진 윤곽", programs: ["face-line", "balance"] },
  { slug: "elasticity", name: "탄력 고민", desc: "푸석하고 힘없어 보이는 피부", programs: ["face-line"] },
  { slug: "circulation", name: "잦은 부기 · 순환", desc: "저녁마다 붓고 무거운 다리", programs: ["balance"] },
  { slug: "bodyline", name: "바디라인", desc: "뭉친 등과 무거워진 몸의 선", programs: ["balance"] },
  { slug: "dry", name: "건조한 피부", desc: "당기고 거칠어진 피부결", programs: ["face-line"] },
  { slug: "sensitive", name: "예민한 피부", desc: "작은 자극에도 붉어지는 피부", programs: ["face-line"] },
  { slug: "trouble", name: "피부 트러블 관리", desc: "반복되는 트러블로 신경 쓰이는 피부", programs: ["face-line"] },
  { slug: "fatigue", name: "만성 피로", desc: "자고 일어나도 개운하지 않은 몸", programs: ["balance"] }, // TODO: 10번째 고민 확정 필요
  {
    slug: "wedding",
    name: "웨딩 준비",
    desc: "특별한 날을 앞둔 혼주 · 예비신부 · 가족",
    programs: ["face-line", "balance"],
    note: "혼주(어머님), 예비신부, 가족 동반 관리 모두 상담 후 일정에 맞춰 준비해 드립니다.",
  },
];
