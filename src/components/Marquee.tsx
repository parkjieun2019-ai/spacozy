const words = ["Rest", "Release", "Renew", "SPA COZY", "The Quiet Hands"];

/** 옆으로 천천히 흐르는 영문 문구 띠 */
export default function Marquee({ dark = false }: { dark?: boolean }) {
  const row = [...words, ...words];
  return (
    <div
      aria-hidden
      className={`overflow-hidden border-y py-6 md:py-8 ${dark ? "border-primary bg-primary text-paper" : "border-line bg-paper text-primary"}`}
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center font-display text-[2.2rem] italic leading-none md:text-[3.2rem]">
                <span className="px-8 md:px-12">{w}</span>
                <span className={`text-[1.2rem] not-italic ${dark ? "text-paper/50" : "text-accent"}`}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
