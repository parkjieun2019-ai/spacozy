// 임시 사진 (Unsplash 무료 라이선스). 실제 매장·원장님 사진을 받으면
// public/images/ 에 넣고 여기 값을 "/images/파일명.jpg" 로 바꾸면 됩니다.

import { asset } from "@/lib/asset";

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const images = {
  // 메인 슬라이드 — 사용자 제공 이미지 (원본은 _자료/hero-*-원본.webp). focus: 휴대폰 세로 크롭 시 보여줄 가로 위치
  heroSlides: [
    { src: asset("/images/hero-1.jpg"), caption: "Full Body Balance", focus: "62% 50%" },
    { src: asset("/images/hero-2.jpg"), caption: "Face Line Design", focus: "68% 50%" },
    { src: asset("/images/hero-3.jpg"), caption: "Aroma Relaxing", focus: "50% 50%" },
  ],
  // ⚠ 임시 인물 사진 — 공개(배포) 전 반드시 실제 사진으로 교체
  directorStory: asset("/images/director-temp.webp"), // TODO: 대표원장 실제 사진 (현재는 AI/스톡풍 임시 인물 사진 — 실제 사진 확보 시 교체)
  // 대표원장 자필 서명 (투명 PNG)
  signature: asset("/images/signature.png"),
  // 프로그램 페이지(/programs) 큰 사진
  programs: {
    balance: asset("/images/hero-1.jpg"), // 메인 슬라이드의 등 관리 사진과 동일 (사용자 요청)
    "face-line": asset("/images/program-face-line.jpg"), // 사용자 제공 이미지(턱선·목, 하단 문구 잘라내고 목 피부 보정)
  } as Record<string, string>,
  // 고민별 추천 카드 썸네일 — 세부 프로그램 이름(menu.ts)별로 코스에 어울리는 무료 사진(Unsplash). 없으면 시그니처 사진으로 대체
  menuPhotos: {
    "등 관리 A코스": asset("/images/hero-1.jpg"), // 메인 슬라이드의 등 관리 사진 재사용 (사용자 요청)
    "상체 집중 관리": unsplash("1649751295468-953038600bef", 600),
    "전신 관리 (피부 제외)": unsplash("1600334129128-685c5582fd35", 600),
    "하체 집중 관리": unsplash("1712638932314-e2b185ca0930", 600), // 종아리 수기 관리
    "에너지테라피 바디 관리": unsplash("1600334089648-b0d9d3028eb2", 600),
    "V라인 리프팅": unsplash("1741934023052-26baf5535088", 600),
    "딸고 실리시움 리프트 (탄력)": unsplash("1785852790570-0d2858068c70", 600),
    "콜라겐 집중 관리": unsplash("1570172619644-dfd03ed5d881", 600),
    "딸고 콜드크림 마린 (수분·진정)": unsplash("1616394584738-fc6e612e71b9", 600),
    "여드름 집중 관리": unsplash("1717160675158-fdd75b8595cf", 600),
    "달팡 시그니처 관리": unsplash("1728727242233-0924178c1fb1", 600),
  } as Record<string, string>,
  // 홈 시그니처 타일 배경 (사용자 요청: 기존 사진 유지)
  programTiles: {
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
