// 임시 사진 (Unsplash 무료 라이선스). 실제 매장·원장님 사진을 받으면
// public/images/ 에 넣고 여기 값을 "/images/파일명.jpg" 로 바꾸면 됩니다.

import { asset } from "@/lib/asset";

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const images = {
  // 메인 슬라이드 (TODO: 실제 매장·관리 사진으로 교체)
  heroSlides: [
    { src: unsplash("1639162906614-0603b0ae95fd", 1800), caption: "Full Body Balance" },
    { src: unsplash("1570172619644-dfd03ed5d881", 1800), caption: "Face Line Design" },
    { src: unsplash("1544161515-4ab6ce6db874", 1800), caption: "Aroma Relaxing" },
  ],
  // ⚠ 임시 인물 사진 — 공개(배포) 전 반드시 실제 사진으로 교체 (manager-temp는 pngtree 워터마크 스톡 이미지)
  directorStory: asset("/images/director-temp.webp"), // TODO: 대표원장 김명숙 실제 사진 (현재는 AI/스톡풍 임시 인물 사진 — 실제 사진 확보 시 교체)
  manager: asset("/images/manager-temp.png"), // TODO: 실장 켈리 실제 사진
  programs: {
    balance: unsplash("1741522509438-a120c0bb5e88"),
    "face-line": unsplash("1706795033728-9232ef548a16"),
  } as Record<string, string>,
  // 공간 사진첩 — 앞 3장은 실제 매장 사진 (0: 큰 세로, 1: 아치 세로, 2: 정사각형 자리)
  spaceGallery: [
    { src: asset("/images/space-room.jpg"), caption: "프라이빗 관리실" },
    { src: asset("/images/space-hallway.jpg"), caption: "관리실로 이어지는 복도" },
    { src: asset("/images/space-welcome-tea.jpg"), caption: "웰컴 티" },
    { src: unsplash("1706795033849-7ca391f007c5", 1600), caption: "관리 준비" }, // TODO: 실제 사진
    { src: unsplash("1540555700478-4be289fbecef", 1600), caption: "정갈한 어메니티" }, // TODO: 실제 사진
  ],
  // 오시는 길 — 건물 외관과 주차장 입구
  exterior: asset("/images/exterior-parking.jpg"),
};
