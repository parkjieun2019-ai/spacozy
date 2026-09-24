// 고민별 추천 — 2단계에서 Supabase `concerns` 테이블로 옮길 구조입니다.
// recommend 의 이름은 menu.ts 에 실제 등록된 세부 프로그램 이름과 정확히 같아야 합니다.

export type Concern = {
  slug: string;
  name: string;
  desc: string;
  note?: string;
  /** 소속 시그니처 (programs.ts 의 slug) — "전체 프로그램 보기" 링크에 사용 */
  signature: "balance" | "face-line";
  /** menu.ts 세부 프로그램 이름 1~2개 (가장 추천 먼저) */
  recommend: string[];
};

export const concerns: Concern[] = [
  {
    slug: "neck-shoulder",
    name: "목 · 어깨 결림",
    desc: "딱딱하게 굳은 뒷목과 무거운 어깨",
    signature: "balance",
    recommend: ["등 관리 A코스"],
  },
  {
    slug: "face-line",
    name: "흐려진 얼굴선",
    desc: "예전 같지 않은 턱선과 둔탁해진 윤곽",
    signature: "face-line",
    recommend: ["V라인 리프팅"],
  },
  {
    slug: "elasticity",
    name: "탄력 고민",
    desc: "푸석하고 힘없어 보이는 피부",
    signature: "face-line",
    recommend: ["딸고 실리시움 리프트 (탄력)", "콜라겐 집중 관리"],
  },
  {
    slug: "circulation",
    name: "잦은 부기 · 순환",
    desc: "저녁마다 붓고 무거운 다리",
    signature: "balance",
    recommend: ["하체 집중 관리"],
  },
  {
    slug: "bodyline",
    name: "바디라인",
    desc: "뭉친 등과 무거워진 몸의 선",
    signature: "balance",
    recommend: ["상체 집중 관리", "전신 관리 (피부 제외)"],
  },
  {
    slug: "dry",
    name: "건조한 피부",
    desc: "당기고 거칠어진 피부결",
    signature: "face-line",
    recommend: ["딸고 콜드크림 마린 (수분·진정)"],
  },
  {
    slug: "sensitive",
    name: "예민한 피부",
    desc: "작은 자극에도 붉어지는 피부",
    signature: "face-line",
    recommend: ["딸고 콜드크림 마린 (수분·진정)"],
  },
  {
    slug: "trouble",
    name: "피부 트러블 관리",
    desc: "반복되는 트러블로 신경 쓰이는 피부",
    signature: "face-line",
    recommend: ["여드름 집중 관리"],
  },
  {
    slug: "fatigue",
    name: "만성 피로",
    desc: "자고 일어나도 개운하지 않은 몸",
    signature: "balance",
    recommend: ["에너지테라피 바디 관리"],
  },
  {
    slug: "wedding",
    name: "웨딩 준비",
    desc: "특별한 날을 앞둔 혼주 · 예비신부 · 가족",
    note: "혼주(어머님), 예비신부, 가족 동반 관리 모두 상담 후 일정에 맞춰 준비해 드립니다.",
    signature: "face-line",
    recommend: ["달팡 시그니처 관리", "V라인 리프팅"],
  },
];
