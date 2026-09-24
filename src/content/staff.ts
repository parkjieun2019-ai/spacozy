// 담당자 — 2단계에서 Supabase `staff` 테이블로 옮길 구조입니다.
import { site } from "@/config/site";
import { images } from "@/content/images";

export type Staff = {
  id: string;
  role: string;
  roleEn: string;
  name: string;
  career: string;
  /** 프로필 대표 문장 */
  headline: string;
  intro: string;
  specialties: string[];
  photo: string; // TODO: 실제 사진으로 교체
  /** 두 사진의 얼굴 크기·위치를 맞추기 위한 값 (사진 교체 시 조정) */
  photoFocus: string;
  photoZoom: number;
  quote: string;
  /** 現 직함 */
  current: string[];
  /** 경력보기에 펼쳐지는 목록 — 사실 확인된 내용만 (TODO: 자격증·교육 이력 받으면 추가) */
  history: string[];
  bookingUrl: string; // TODO: 네이버 예약에서 담당자별 링크가 있으면 교체
};

export const staff: Staff[] = [
  {
    id: "director",
    role: "대표원장",
    roleEn: "Director",
    name: site.director.name,
    career: `경력 ${site.director.years}년 · Since ${site.director.since}`,
    headline: "몸의 흐름을 읽고, 균형을 설계합니다",
    intro: `피부와 몸을 따로 보지 않습니다. 목과 어깨의 긴장, 부기와 순환, 그날의 피부 컨디션까지 함께 살피고, ${site.director.years}년 수기 테라피의 감각으로 지금 꼭 필요한 관리만 세심하게 제안합니다.`,
    specialties: ["바디 밸런스", "순환 케어", "맞춤 피부 관리", "전류 케어"],
    photo: images.directorStory,
    photoFocus: "50% 22%",
    photoZoom: 1,
    quote: "많이 하는 관리보다, 지금 꼭 필요한 관리를 정확하게 제안하겠습니다.",
    current: ["스파코지 대표원장"],
    history: [`${site.director.since}년 에스테틱 입문 · 경력 ${site.director.years}년`],
    bookingUrl: site.links.booking,
  },
  {
    id: "manager",
    role: "실장",
    roleEn: "Beauty Curator",
    name: site.manager.name,
    career: `경력 ${site.manager.years}`,
    headline: "섬세한 손길로, 자연스러운 선을 완성합니다",
    intro: "얼굴선과 바디라인, 부기와 순환을 꼼꼼히 살피고 생활 리듬과 일정에 맞춘 관리를 제안합니다. 편안한 상담을 바탕으로, 부담 없이 오래 이어갈 수 있는 변화를 함께 만들어 갑니다.",
    specialties: ["얼굴선", "윤곽 케어", "부기", "바디라인", "웨딩 관리"],
    photo: images.manager,
    photoFocus: "58% 16%",
    photoZoom: 1.1,
    quote: "고객님의 이야기를 먼저 듣고, 가장 편안한 관리부터 시작하겠습니다.",
    current: ["스파코지 실장 · 뷰티 큐레이터"],
    history: [`에스테틱 경력 ${site.manager.years}`],
    bookingUrl: site.links.booking,
  },
];
