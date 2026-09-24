"use client";

import { useEffect, useRef, useState } from "react";
import { images } from "@/content/images";
import { Photo } from "@/components/ui";

const gallery = images.spaceGallery;

/** 공간 소개 — 휴대폰은 배너 + View more, 누르면 넘겨보는 사진첩(디어청담식). PC는 사진 배치 + 사진첩. */
export default function SpaceSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* 휴대폰: 배너 한 장 */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen(0)}
          className="reveal relative block h-[440px] w-full overflow-hidden rounded-[18px] text-left"
          aria-label="공간 사진 더보기"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={gallery[0].src} alt="" className="tone-photo absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
          <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-paper">
            <p className="whitespace-nowrap font-display text-[1.9rem] leading-none">
              SPA COZY,<span className="italic">Space</span>
            </p>
            <p className="mt-5 leading-[1.8] text-paper/90">
              다섯 개의 프라이빗 관리실에서
              <br />
              오롯이 한 분만을 위한 시간을 준비합니다.
            </p>
            <span className="mt-7 border-b border-paper/80 pb-0.5 font-display text-[1.1rem] italic">View more</span>
            <span className="mt-2 text-[0.8rem] text-paper/70">사진 {gallery.length}장 넘겨보기</span>
          </div>
        </button>
      </div>

      {/* PC: 사진 배치 */}
      <div className="hidden gap-8 md:grid md:grid-cols-12">
        <div className="reveal md:col-span-4 md:self-center">
          <p className="font-display text-[3.2rem] leading-[1.1] text-primary">
            The Space
            <br />
            <span className="italic">of Rest</span>
          </p>
          <h2 className="mt-8 font-serif text-[1.4rem] leading-[1.7] text-ink">
            문턱을 넘는 순간부터
            <br />
            시작되는 편안함
          </h2>
          <p className="mt-6 leading-[1.95] text-ink/75">
            다섯 개의 프라이빗 관리실에서 오롯이 한 분만을 위한 시간을 준비합니다. 언제 들러도 마음 편안한, 친정집 같은 안식처가
            되겠습니다.
          </p>
          <button
            type="button"
            onClick={() => setOpen(0)}
            className="group mt-10 inline-flex items-center gap-5 font-display text-[1.15rem] italic text-primary"
          >
            View more
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 transition-colors group-hover:bg-primary group-hover:text-paper">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                <path d="M0 5h13M9 1l4 4-4 4" />
              </svg>
            </span>
          </button>
        </div>
        <button type="button" onClick={() => setOpen(0)} className="md:col-span-5" aria-label={`${gallery[0].caption} 크게 보기`}>
          <Photo label={gallery[0].caption} src={gallery[0].src} className="reveal h-[620px] w-full" />
        </button>
        <div className="grid gap-8 pt-24 md:col-span-3">
          <button type="button" onClick={() => setOpen(1)} aria-label={`${gallery[1].caption} 크게 보기`}>
            <Photo label={gallery[1].caption} src={gallery[1].src} shape="arch" className="reveal aspect-[3/4] w-full" />
          </button>
          <button type="button" onClick={() => setOpen(2)} aria-label={`${gallery[2].caption} 크게 보기`}>
            <Photo label={gallery[2].caption} src={gallery[2].src} className="reveal aspect-square w-full" />
          </button>
        </div>
      </div>

      {open !== null && <Gallery start={open} onClose={() => setOpen(null)} />}
    </>
  );
}

/** 전체 화면 사진첩: 밀기·화살표·키보드로 넘기고, X·ESC로 닫기 */
function Gallery({ start, onClose }: { start: number; onClose: () => void }) {
  const [i, setI] = useState(start);
  const touchX = useRef<number | null>(null);
  const go = (d: number) => setI((v) => (v + d + gallery.length) % gallery.length);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const g = gallery[i];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="스파코지 공간 사진"
      className="fixed inset-0 z-[70] flex flex-col bg-[#101312]/95 text-paper"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <p className="font-display text-[1.2rem]">
          SPA COZY,<span className="italic">Space</span>
        </p>
        <button type="button" onClick={onClose} aria-label="닫기" className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/40 text-[1.4rem] leading-none hover:bg-paper hover:text-ink">
          ×
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 md:px-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={g.src} src={g.src} alt={g.caption} className="fade-up max-h-[68vh] w-full max-w-5xl rounded-[14px] object-contain md:max-h-[72vh]" />
        {[-1, 1].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => go(d)}
            aria-label={d < 0 ? "이전 사진" : "다음 사진"}
            className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 hover:bg-paper hover:text-ink md:flex ${d < 0 ? "left-8" : "right-8"}`}
          >
            <svg width="16" height="12" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.3" className={d < 0 ? "rotate-180" : ""} aria-hidden>
              <path d="M0 5h13M9 1l4 4-4 4" />
            </svg>
          </button>
        ))}
      </div>

      <div className="px-5 pb-8 pt-5 text-center md:pb-10">
        <p className="font-serif text-[1.15rem]">{g.caption}</p>
        <div className="mt-4 flex justify-center gap-2">
          {gallery.map((x, k) => (
            <button
              key={x.src}
              type="button"
              onClick={() => setI(k)}
              aria-label={`${k + 1}번째 사진`}
              className={`h-[3px] rounded-full transition-all ${k === i ? "w-8 bg-paper" : "w-4 bg-paper/35"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-[0.82rem] text-paper/60 md:hidden">옆으로 밀어서 넘겨보세요</p>
      </div>
    </div>
  );
}
