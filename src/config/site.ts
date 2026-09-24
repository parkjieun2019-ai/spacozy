// 사이트 전체에서 쓰는 연락처·링크. 값이 바뀌면 이 파일만 고치면 됩니다.

// TODO: 네이버 예약 주소를 받으면 교체 (지금은 네이버 지도 검색 결과로 연결)
const NAVER_BOOKING_URL = "";
// TODO: 카카오톡 채널 개설 후 채널 ID(예: _xxxxx) 입력
const KAKAO_CHANNEL_ID = "";

const naverPlaceSearch = "https://map.naver.com/p/search/" + encodeURIComponent("스파코지 죽전");

export const site = {
  name: "스파코지",
  nameEn: "SPA COZY",
  description:
    "죽전·수지·성복동 20년 경력 대표원장의 1:1 수기 테라피. 어깨가 가벼워지면 얼굴의 선도 살아납니다. 스파코지 에스테틱.",
  url: "https://spacozy.vercel.app", // TODO: 정식 도메인 연결 후 교체
  address: "경기도 용인시 기흥구 죽전로 20 죽전누리에뜰 상가 B동 2층 221호",
  addressShort: "죽전누리에뜰 상가 B동 2층 221호",
  phone: "031-272-9595",
  phoneNaver: "0507-1490-9595",
  hours: [
    { day: "월 – 금", time: "09:30 – 20:00" },
    { day: "토요일", time: "09:30 – 17:00" },
    { day: "일요일", time: "정기 휴무" },
  ],
  director: { name: "김명숙", since: 2006, years: 20 },
  manager: { name: "켈리", years: "5년 이상" },
  // TODO: 대표자·사업자등록번호 확인 후 입력
  business: { owner: "김명숙", registration: "" },
  instagram: "", // TODO
  links: {
    booking: NAVER_BOOKING_URL || naverPlaceSearch,
    map: naverPlaceSearch,
    reviews: naverPlaceSearch,
    kakaoChat: KAKAO_CHANNEL_ID ? `https://pf.kakao.com/${KAKAO_CHANNEL_ID}/chat` : "",
    kakaoAdd: KAKAO_CHANNEL_ID ? `https://pf.kakao.com/${KAKAO_CHANNEL_ID}/friend` : "",
    tel: "tel:0312729595",
  },
} as const;

export const nav = [
  { href: "/story", label: "브랜드 스토리", en: "Story" },
  { href: "/programs", label: "프로그램", en: "Program" },
  { href: "/concerns", label: "고민별 추천", en: "Concern" },
  { href: "/membership", label: "멤버십", en: "Membership" },
  { href: "/faq", label: "FAQ · 오시는 길", en: "Visit" },
] as const;
