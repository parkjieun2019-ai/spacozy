// 사이트 전체에서 쓰는 연락처·링크. 값이 바뀌면 이 파일만 고치면 됩니다.

// 네이버 예약 (스파코지 예약 페이지)
const NAVER_BOOKING_URL = "https://m.booking.naver.com/booking/13/bizes/857141";
// TODO: 카카오톡 채널 개설 후 채널 ID(예: _xxxxx) 입력
const KAKAO_CHANNEL_ID = "";
// TODO: 네이버 톡톡 ID (스마트플레이스 > 톡톡 설정의 talk.naver.com/ct/xxxxx 에서 xxxxx)
const NAVER_TALK_ID = "";

const naverPlaceSearch = "https://map.naver.com/p/entry/place/36561423";

export const site = {
  name: "스파코지",
  nameEn: "SPA COZY",
  description:
    "죽전·수지·성복동 20년 경력 대표원장의 1:1 수기 테라피. 어깨가 가벼워지면 얼굴의 선도 살아납니다. 스파코지 에스테틱.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spacozy.vercel.app", // TODO: 정식 도메인 연결 후 교체
  /** 의견 확인용 미리보기 배포 — 검색엔진 노출 차단 */
  preview: process.env.NEXT_PUBLIC_PREVIEW === "1",
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
    naverTalk: NAVER_TALK_ID ? `https://talk.naver.com/ct/${NAVER_TALK_ID}` : naverPlaceSearch,
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
