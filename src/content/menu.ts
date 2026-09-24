// 전체 프로그램 · 가격표 (카테고리별)
// 출처: 스파코지 네이버 예약 등록 옵션 (2026-09-24 기준). 가격이 바뀌면 네이버 예약과 같이 고쳐 주세요.
// 설명 문구는 의료 오인 표현(통증·오십견·항염 등)을 빼고 순화했습니다.
// ⚠ '하이푸 윤곽관리'는 의료기기(HIFU) 사용으로 오인될 수 있어 홈페이지에는 싣지 않았습니다.
// 2단계에서 Supabase `programs` 테이블로 옮길 구조입니다.

export type MenuItem = {
  name: string;
  desc?: string;
  duration?: string;
  price: number | null; // 정가(1회)
  memberPrice?: number | null; // 회원가
  firstPrice?: number | null; // 첫 방문가
  firstNote?: string; // 첫 방문 혜택을 금액 대신 문구로 표시할 때
  priceNote?: string; // 가격 대신 안내 문구
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEn: string;
  desc: string;
  note?: string;
  /** 어느 시그니처 프로그램에 속하는지 (programs.ts 의 slug) */
  signature?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "face",
    signature: "face-line",
    name: "페이셜",
    nameEn: "Facial",
    desc: "피부 컨디션에 맞춘 맞춤 피부 관리",
    items: [
      { name: "첫 방문 상담 후 관리", desc: "어떤 관리가 맞을지 상담한 뒤 맞춤 케어까지", duration: "90분", price: null, priceNote: "상담 후 안내" },
      { name: "딸고 콜드크림 마린 (수분·진정)", desc: "딸고 마린 라인으로 건조하고 예민한 피부에 수분과 편안함을", duration: "70분", price: 150000, memberPrice: 130000, firstPrice: 105000 },
      { name: "화이트닝 관리", desc: "고농축 비타민 앰플로 칙칙한 피부 톤을 맑게", duration: "80분", price: 120000, memberPrice: 100000, firstPrice: 72000 },
      { name: "콜라겐 집중 관리", desc: "콜라겐 라인 제품과 벨벳 마스크로 촘촘한 탄력 케어", duration: "80분", price: 120000, memberPrice: 100000, firstPrice: 90000 },
      { name: "여드름 집중 관리", desc: "모공 속 노폐물을 정리하고 피부를 편안하게 진정", duration: "80분", price: 120000, memberPrice: 100000, firstPrice: 72000 },
      { name: "LDM 물방울 관리", desc: "촉촉한 물광과 탄력을 위한 물방울 케어", duration: "80분", price: 110000, memberPrice: 90000, firstPrice: 70000 },
      { name: "달팡 시그니처 관리", desc: "달팡 전 제품과 괄사 테크닉으로 광채를 더하는 관리 · 신부 관리 추천", duration: "80분", price: 180000, memberPrice: 160000, firstPrice: 126000 },
    ],
  },
  {
    id: "contour",
    signature: "face-line",
    name: "윤곽 · 리프팅",
    nameEn: "Contour",
    desc: "얼굴선과 탄력을 위한 관리",
    items: [
      { name: "V라인 리프팅", desc: "두피 관리와 수기 테라피로 얼굴선을 정돈하는 윤곽 관리", duration: "80분", price: 150000, memberPrice: 130000, firstPrice: 90000 },
      { name: "딸고 실리시움 리프트 (탄력)", desc: "딸고 롤러와 쿨 석고 마스크로 얼굴선을 탄탄하게", duration: "80분", price: 170000, memberPrice: 150000, firstPrice: 119000 },
    ],
  },
  {
    id: "body",
    signature: "balance",
    name: "바디",
    nameEn: "Body",
    desc: "뭉친 몸을 풀고 순환을 돕는 수기 중심 바디 관리",
    items: [
      { name: "등 관리 A코스", desc: "목 · 어깨 · 등의 뭉침을 풀고 순환을 돕는 관리", duration: "60분", price: 90000, memberPrice: 70000, firstPrice: 60000 },
      { name: "등 관리 B코스", desc: "등과 데콜테까지 함께 풀어 주는 집중 관리", duration: "80분", price: 110000, memberPrice: 90000, firstPrice: 80000 },
      { name: "부분 관리 (복부 또는 팔뚝)", desc: "한 부위를 골라 집중하는 관리", duration: "40분", price: 80000, memberPrice: 60000, firstPrice: 48000 },
      { name: "상체 집중 관리", desc: "등 · 복부 · 팔 순환 관리 (수기 + 고주파 + 돔)", duration: "80분", price: 150000, memberPrice: 130000, firstPrice: 105000 },
      { name: "하체 집중 관리", desc: "무거운 다리의 부기와 라인을 위한 관리", duration: "80분", price: 150000, memberPrice: 130000, firstPrice: 105000 },
      { name: "전신 관리 (피부 제외)", desc: "관리사 2명이 함께하는 전신 관리 · 피부 관리 추가 가능", duration: "90분", price: 240000, memberPrice: 220000, firstNote: "3만 원 할인" },
      { name: "에너지테라피 바디 관리", desc: "에너지테라피를 이용한 부드러운 수기 관리", duration: "60분", price: null, priceNote: "부위별 상이", firstNote: "30% 할인" },
    ],
  },
  {
    id: "wedding",
    name: "웨딩",
    nameEn: "Wedding",
    desc: "혼주 · 예비신부 · 가족 동반 관리",
    note: "예식 일정에 맞춰 상담 후 코스를 구성해 드려요. 많이 찾으시는 관리예요.",
    items: [
      { name: "달팡 시그니처 관리", desc: "광채를 더하는 신부 관리 추천 코스", duration: "80분", price: 180000, memberPrice: 160000, firstPrice: 126000 },
      { name: "V라인 리프팅", desc: "사진 속 얼굴선을 위한 윤곽 관리", duration: "80분", price: 150000, memberPrice: 130000, firstPrice: 90000 },
      { name: "등 관리 B코스", desc: "드레스 라인을 위한 등 · 데콜테 관리", duration: "80분", price: 110000, memberPrice: 90000, firstPrice: 80000 },
    ],
  },
];

export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

/** 시그니처에 속한 세부 프로그램들의 1회 가격 범위 (예: "90,000원 ~ 240,000원") */
export function priceRange(signature: string) {
  const prices = menu
    .filter((c) => c.signature === signature)
    .flatMap((c) => c.items.map((i) => i.price))
    .filter((p): p is number => typeof p === "number");
  if (!prices.length) return null;
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  return lo === hi ? won(lo) : `${won(lo)} ~ ${won(hi)}`;
}

/** 시그니처에 속한 카테고리 id 목록 */
export const categoriesOf = (signature: string) => menu.filter((c) => c.signature === signature).map((c) => c.id);
