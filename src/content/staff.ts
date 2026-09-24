// 담당자 — 2단계에서 Supabase `staff` 테이블로 옮길 구조입니다.
import { site } from "@/config/site";
import { images } from "@/content/images";

export type Staff = {
  id: string;
  role: string;
  roleEn: string;
  name: string;
  career: string;
  intro: string;
  specialties: string[];
  photo: string; // TODO: 실제 사진으로 교체
  bookingUrl: string; // TODO: 네이버 예약에서 담당자별 링크가 있으면 교체
};

export const staff: Staff[] = [
  {
    id: "director",
    role: "대표원장",
    roleEn: "Director",
    name: site.director.name,
    career: `경력 ${site.director.years}년 · Since ${site.director.since}`,
    intro: "화려한 기계보다 정직한 손을 믿습니다. 그날의 컨디션에 꼭 맞는 압과 흐름을 찾아드립니다.",
    specialties: ["전신 밸런스 수기 테라피", "페이스 선(線) 디자인", "목 · 어깨 · 등 이완 케어"],
    photo: images.directorStory,
    bookingUrl: site.links.booking,
  },
  {
    id: "manager",
    role: "실장",
    roleEn: "Beauty Curator",
    name: site.manager.name,
    career: `경력 ${site.manager.years}`,
    intro: "문턱을 넘는 순간부터 편안하시도록, 첫 상담부터 사후 관리까지 세심하게 챙겨드립니다.",
    specialties: ["웰컴 차트 맞춤 상담", "뷰티 큐레이팅", "전 프로그램 관리 가능"],
    photo: images.manager,
    bookingUrl: site.links.booking,
  },
];
