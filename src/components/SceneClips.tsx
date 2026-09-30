import { asset } from "@/lib/asset";

// 홈 "관리 장면" — 실제 관리 영상에서 잘라낸 짧은 무음 루프 클립 (public/videos/, 원본은 _자료/)
const clips = [
  { src: asset("/videos/clip-shoulder.mp4"), poster: asset("/videos/clip-shoulder.jpg"), en: "Shoulder & Back", title: "어깨 · 등 수기 관리", desc: "굳은 어깨의 결을 따라 천천히 풀어냅니다" },
  { src: asset("/videos/clip-decollete.mp4"), poster: asset("/videos/clip-decollete.jpg"), en: "Shoulder & Décolleté", title: "어깨 · 데콜테 관리", desc: "굳은 어깨선을 풀고 데콜테까지 이어 갑니다" },
  { src: asset("/videos/clip-face.mp4"), poster: asset("/videos/clip-face.jpg"), en: "Face Line", title: "페이스 라인 수기 관리", desc: "손끝으로 얼굴의 결을 따라 선을 정돈합니다" },
];

export default function SceneClips() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-6">
      {clips.map((c, i) => (
        <figure key={c.src} className="reveal group" style={{ transitionDelay: `${i * 0.12}s` }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-mist">
            <video
              src={c.src}
              poster={c.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={c.title}
              className="tone-photo h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-[0.95rem] italic tracking-[0.06em] text-paper/90">{c.en}</p>
          </div>
          <figcaption className="mt-4">
            <p className="font-serif text-[1.15rem] text-primary">{c.title}</p>
            <p className="mt-1 text-[0.95rem] text-muted">{c.desc}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
