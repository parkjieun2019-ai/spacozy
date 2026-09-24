// 전체 프로그램 · 가격표 (카테고리별)
// ⚠ 가격은 원장님 확인 후 입력합니다. price 가 null 이면 화면에 "가격 입력 예정"으로 보입니다.
//   네이버 예약 가격과 반드시 같게 맞춰 주세요. 2단계에서 Supabase `programs` 테이블로 옮길 구조입니다.

export type MenuItem = {
  name: string;
  desc?: string;
  duration?: string; // 예: "60분"
  price: number | null; // 정가
  memberPrice?: number | null; // 회원가(있을 때만)
  signature?: string; // 시그니처 프로그램이면 programs.ts 의 slug (상세 설명으로 연결)
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEn: string;
  desc: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "body",
    name: "바디",
    nameEn: "Body",
    desc: "굳은 몸의 긴장을 풀고 순환을 돕는 수기 중심 바디 관리",
    items: [
      { name: "전신 밸런스 비움 테라피", desc: "시그니처 전신 수기 관리", duration: "90분 내외", price: null, signature: "balance" },
      // TODO: 바디 세부 프로그램 추가 (예: 등·어깨 집중 / 하체 순환 등 — 실제 메뉴 받으면 입력)
    ],
  },
  {
    id: "face",
    name: "페이셜",
    nameEn: "Facial",
    desc: "피부 컨디션에 맞춘 맞춤 피부 관리",
    items: [
      // TODO: 페이셜 세부 프로그램 (수분·진정·트러블 등 — 실제 메뉴 받으면 입력)
    ],
  },
  {
    id: "contour",
    name: "윤곽 · 리프팅",
    nameEn: "Contour",
    desc: "목과 데콜테부터 풀어 얼굴선을 정돈하는 관리",
    items: [
      { name: "페이스 선(線) 디자인 테라피", desc: "시그니처 페이셜 · 윤곽 관리", duration: "80분 내외", price: null, signature: "face-line" },
      // TODO: 윤곽·리프팅 세부 프로그램
    ],
  },
  {
    id: "wedding",
    name: "웨딩",
    nameEn: "Wedding",
    desc: "혼주 · 예비신부 · 가족 동반 관리",
    items: [
      // TODO: 웨딩 세부 프로그램 (혼주 / 예비신부 / 가족 동반 패키지)
    ],
  },
];

export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
