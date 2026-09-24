// 임시 사진 (Unsplash 무료 라이선스). 실제 매장·원장님 사진을 받으면
// public/images/ 에 넣고 여기 값을 "/images/파일명.jpg" 로 바꾸면 됩니다.

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const images = {
  hero: unsplash("1639162906614-0603b0ae95fd", 1100), // TODO: 매장 관리실 대표 사진
  director: unsplash("1598901986949-f593ff2a31a6", 900), // TODO: 대표원장 김명숙 사진
  directorStory: unsplash("1745327883508-b6cd32e5dde5", 900), // TODO: 대표원장 김명숙 사진
  manager: unsplash("1706795033849-7ca391f007c5", 900), // TODO: 실장 켈리 사진
  programs: {
    balance: unsplash("1741522509438-a120c0bb5e88"),
    "face-line": unsplash("1706795033728-9232ef548a16"),
  } as Record<string, string>,
  spaceRoom: unsplash("1693578538512-fc66f318c833"), // TODO: 프라이빗 관리실
  spaceLobby: unsplash("1596748176765-08b3a6c9969a", 700), // TODO: 로비
  spaceTea: unsplash("1616371041303-a468ea826828", 700), // TODO: 웰컴 티
};
