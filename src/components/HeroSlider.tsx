"use client";

import { useEffect, useState } from "react";
import { images } from "@/content/images";

const INTERVAL = 6000;

/** 메인 사진 슬라이드: 천천히 겹치며 바뀌고, 사진은 아주 느리게 다가옵니다. */
export default function HeroSlider() {
  const slides = images.heroSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 클릭하지 않아도 6초마다 자동으로 넘어갑니다. (움직임 줄이기 설정에서도 전환은 유지, 확대 효과만 끔)
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, slides.length]);

  return (
    <div
      className="relative h-[62svh] min-h-[380px] overflow-hidden rounded-[18px] bg-mist md:h-[78vh]"
      aria-roledescription="carousel"
      aria-label="스파코지 관리 사진"
    >
      {slides.map((s, i) => {
        const on = i === index;
        return (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${on ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!on}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.caption}
              loading={i === 0 ? "eager" : "lazy"}
              className={`tone-photo h-full w-full object-cover transition-transform ease-out ${on ? "scale-100 duration-[7000ms]" : "scale-110 duration-0"} motion-reduce:scale-100`}
            />
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

      {/* 캡션 + 넘김 표시 */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-10">
        <p key={index} className="fade-up font-display text-[1.25rem] italic text-paper md:text-[1.6rem]">
          {slides[index].caption}
        </p>
        <div className="flex items-center gap-4 text-paper">
          <span className="font-display text-[1rem] tabular-nums">
            {String(index + 1).padStart(2, "0")} <span className="text-paper/50">/ {String(slides.length).padStart(2, "0")}</span>
          </span>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번째 사진 보기`}
                aria-current={i === index}
                className="relative h-[3px] w-10 overflow-hidden rounded-full bg-paper/35 md:w-14"
              >
                <span
                  key={index}
                  className={`absolute inset-y-0 left-0 bg-paper ${i === index ? "animate-[progress_6s_linear_forwards]" : i < index ? "w-full" : "w-0"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
