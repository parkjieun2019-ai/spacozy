// 프로그램 데이터 — 2단계에서 Supabase `programs` 테이블로 옮길 구조입니다.

export type ProgramStep = { title: string; desc: string };

export type Program = {
  slug: string;
  category: "body" | "face";
  nameEn: string;
  name: string;
  summary: string;
  intro: string;
  steps: ProgramStep[];
  durationLabel: string; // 고객 화면 표시용
  durationMinutes: number; // 예약 계산용 (2단계)
  price: number | null; // TODO: 네이버 예약 가격과 동일하게 입력
  bookingUrl?: string; // TODO: 네이버 예약 상품별 링크
  published: boolean;
};

export const programs: Program[] = [
  {
    slug: "balance",
    category: "body",
    nameEn: "Full Body Balance Therapy",
    name: "전신 밸런스 비움 테라피",
    summary: "굳은 몸의 긴장을 비워내는 시그니처 전신 수기 관리",
    intro:
      "굳은 몸의 결을 따라 순환의 길을 찾아, 쌓인 부기와 피로를 가볍게 비워냅니다. 20년 숙련된 손끝이 그날의 컨디션에 맞춰 압을 조절하는 스파코지의 시그니처 전신 수기 관리입니다.",
    steps: [
      { title: "아로마 릴랙싱", desc: "천연 에센셜 오일의 향과 함께 깊은 호흡으로 긴장을 내려놓습니다." },
      { title: "후면 이완 케어", desc: "목, 어깨, 등줄기의 뭉친 결을 따라 풀어내는 수기 테라피." },
      { title: "하체 순환 케어", desc: "무거운 다리를 부드럽게 쓸어 올려 가벼워지는 순환 관리." },
      { title: "복부 온열 케어", desc: "복부를 따뜻하게 감싸 몸의 중심부터 편안하게 데워 줍니다." },
      { title: "두피 이완 마무리", desc: "굳은 두피를 부드럽게 풀어 주는 이완 케어와 스트레칭." },
    ],
    durationLabel: "90분 내외", // TODO: 확인
    durationMinutes: 90,
    price: null,
    published: true,
  },
  {
    slug: "face-line",
    category: "face",
    nameEn: "Face Line Design Therapy",
    name: "페이스 선(線) 디자인 테라피",
    summary: "목과 데콜테부터 열어 얼굴선을 정돈하는 시그니처 페이셜",
    intro:
      "목과 데콜테를 먼저 풀어 준 뒤, 얼굴의 결을 따라 부드럽게 이완해 탄력 있는 선을 위한 관리를 더합니다. 억지로 당기지 않고, 본연의 우아한 얼굴선을 정돈합니다.",
    steps: [
      { title: "두피 & 데콜테 오픈", desc: "얼굴로 이어지는 목과 데콜테를 먼저 풀어 주는 순환 케어." },
      { title: "저자극 딥 클렌징", desc: "예민한 피부도 편안하도록 자극을 줄인 클렌징." },
      { title: "페이스 수기 디자인", desc: "얼굴형에 맞춰 결을 따라 이완하는 윤곽 수기 테라피." },
      { title: "광채 부스팅", desc: "맞춤 앰플을 바른 뒤, 촉촉하게 스며들도록 돕는 엄선한 기기 케어를 더합니다." },
      { title: "수분 잠금 & 릴랙싱", desc: "진정 모델링 마스크와 함께 온전한 휴식으로 마무리합니다." },
    ],
    durationLabel: "80분 내외", // TODO: 확인
    durationMinutes: 80,
    price: null,
    published: true,
  },
];

export const formatPrice = (p: number | null) =>
  p === null ? "가격 상담 안내" : `${p.toLocaleString("ko-KR")}원`;
