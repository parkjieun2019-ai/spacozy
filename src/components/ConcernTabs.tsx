"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { concerns } from "@/content/concerns";
import { findMenuItem, won } from "@/content/menu";
import { images } from "@/content/images";

function StepLabel({ no, children }: { no: number; children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-3 text-[1.02rem] font-semibold leading-[1.6] text-ink">
      <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-[0.75rem] tracking-[0.08em] text-paper">STEP {no}</span>
      {children}
    </p>
  );
}

/** 1단계 고민 선택 → 2단계 실제 세부 프로그램 추천 (이름·시간·가격까지 바로 표시) */
export default function ConcernTabs() {
  const [active, setActive] = useState(concerns[0].slug);
  const resultRef = useRef<HTMLDivElement>(null);

  const pick = (slug: string) => {
    setActive(slug);
    const el = resultRef.current;
    if (el && window.innerWidth < 768) {
      const top = el.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.6) window.scrollBy({ top: top - window.innerHeight * 0.35, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* STEP 1 */}
      <StepLabel no={1}>어떤 고민이 있으세요?</StepLabel>
      <div role="radiogroup" aria-label="고민 선택" className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-5">
        {concerns.map((c) => {
          const on = c.slug === active;
          return (
            <button
              key={c.slug}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => pick(c.slug)}
              className={`flex min-h-13 items-center justify-center gap-1.5 rounded-[10px] border px-2 text-[0.95rem] transition-colors duration-200 ${
                on ? "border-primary bg-primary font-semibold text-paper" : "border-line bg-paper text-ink hover:border-primary"
              }`}
            >
              {on && <span aria-hidden>✓</span>}
              {c.name}
            </button>
          );
        })}
      </div>

      {/* 연결 화살표 */}
      <div className="my-5 flex justify-center text-primary" aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 4v15M6 13l6 6 6-6" />
        </svg>
      </div>

      {/* STEP 2 — 모든 고민의 추천을 미리 그려 두고(hidden) 선택된 것만 보여줍니다. 검색엔진·AI 도구도 전부 읽을 수 있어요. */}
      <div ref={resultRef}>
        {concerns.map((c) => (
          <div
            key={c.slug}
            role="region"
            aria-label={`${c.name} 추천`}
            hidden={c.slug !== active}
            className="fade-up rounded-[18px] border border-primary/25 bg-paper p-5 md:p-8"
          >
            <StepLabel no={2}>
              <span>
                ‘<span className="text-primary">{c.name}</span>’ 고민이라면, 이 관리를 추천해요
              </span>
            </StepLabel>
            <p className="mt-2 text-[0.95rem] text-muted">{c.desc}</p>
            {c.note && <p className="mt-2 text-[0.95rem] text-muted">{c.note}</p>}

            <div className="mt-5 grid gap-3 md:grid-cols-2 md:gap-4">
              {c.recommend.map((name, i) => {
                const found = findMenuItem(name);
                if (!found) return null;
                const { item, categoryName } = found;
                return (
                  <div key={`${c.slug}-${name}`} className="flex overflow-hidden rounded-[14px] border border-line bg-mist/40">
                    {images.programs[c.signature] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={images.programs[c.signature]} alt="" loading="lazy" className="tone-photo w-24 shrink-0 object-cover md:w-32" />
                    )}
                    <div className="flex flex-1 flex-col justify-center p-4 md:p-5">
                      <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                        <span className={`w-fit rounded-full px-2.5 py-0.5 text-[0.78rem] font-semibold ${i === 0 ? "bg-primary text-paper" : "bg-line/60 text-ink/70"}`}>
                          {i === 0 ? "가장 추천" : "함께 추천"}
                        </span>
                        <span className="text-[0.78rem] text-muted">{categoryName}</span>
                      </div>
                      <p className="font-serif text-[1.05rem] font-semibold leading-snug text-ink">{item.name}</p>
                      {item.desc && <p className="mt-1 text-[0.88rem] leading-[1.55] text-muted">{item.desc}</p>}
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.85rem]">
                        {item.duration && <span className="text-muted">{item.duration}</span>}
                        {item.price != null ? (
                          <span className="font-semibold text-primary">{item.firstPrice ? `첫 방문 ${won(item.firstPrice)}` : won(item.price)}</span>
                        ) : (
                          <span className="font-semibold text-muted">{item.priceNote ?? "상담 안내"}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 text-right">
              <Link href={`/programs#${c.signature}-price`} className="text-[0.9rem] font-semibold text-primary hover:underline">
                전체 프로그램 · 가격 더 보기 →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
