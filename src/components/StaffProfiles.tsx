"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { staff } from "@/content/staff";
import { site } from "@/config/site";


// 상담 버튼: 카카오톡 비즈니스 채널 1:1 채팅 (채널 ID는 src/config/site.ts, 입력 전에는 전화로 연결)
const consultHref = site.links.kakaoChat || site.links.tel;

/** 디어청담식 프로필: 한 명씩 크게 보여주고 이름 탭·화살표·밀기로 넘깁니다. */
export default function StaffProfiles() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  const s = staff[active];

  const go = (i: number) => {
    setActive((i + staff.length) % staff.length);
  };

  return (
    <div>
      {/* 이름 탭 + 화살표 */}
      <div className="flex items-center justify-between gap-3 border-b border-line">
        <div role="tablist" aria-label="담당자 선택" className="flex">
          {staff.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => go(i)}
              className={`relative px-3 py-4 text-[0.98rem] transition-colors md:px-6 md:text-[1.05rem] ${
                i === active ? "font-semibold text-primary" : "text-muted hover:text-ink"
              }`}
            >
              <span className="mr-1.5 text-[0.82rem] font-normal">{p.role}</span>
              {p.name}
              <span className={`absolute inset-x-0 -bottom-px h-[2px] bg-primary transition-transform duration-500 ${i === active ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="mr-1 hidden font-display text-[0.95rem] text-muted sm:inline">
            {String(active + 1).padStart(2, "0")} / {String(staff.length).padStart(2, "0")}
          </span>
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(active + d)}
              aria-label={d < 0 ? "이전 담당자" : "다음 담당자"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:bg-primary hover:text-paper"
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.3" className={d < 0 ? "rotate-180" : ""} aria-hidden>
                <path d="M0 5h13M9 1l4 4-4 4" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* 프로필 */}
      <div
        key={s.id}
        className="fade-up mt-8 grid items-center gap-7 md:mt-12 md:grid-cols-[1.05fr_1fr] md:gap-14"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        {/* 사진: 뒤에 큰 'Cozy,' 글자 */}
        <div className="relative h-[330px] overflow-hidden rounded-[18px] bg-[#e9ebe8] sm:h-[420px] md:h-[560px]">
          <p
            aria-hidden
            className="pointer-events-none absolute -left-2 top-4 select-none font-display text-[7rem] italic leading-none text-ink/[0.07] md:-left-4 md:top-8 md:text-[12rem]"
          >
            Cozy,
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.photo}
            alt={`${s.role} ${s.name}`}
            className="relative h-full w-full object-cover mix-blend-multiply"
            style={{ objectPosition: s.photoFocus, scale: String(s.photoZoom), transformOrigin: s.photoFocus }}
          />
        </div>

        {/* 글 */}
        <div>
          <p className="font-display text-[1.05rem] italic text-accent">SPA COZY&apos;s {s.roleEn}</p>
          <h3 className="mt-2 flex items-baseline gap-2 font-serif text-ink">
            <span className="text-[2rem] font-semibold tracking-[0.03em] md:text-[2.4rem]">{s.name}</span>
            <span className="text-[1.05rem] text-muted">{s.role}</span>
          </h3>
          <p className="mt-3 inline-flex rounded-full bg-mist px-3 py-1 text-[0.85rem] font-semibold text-primary">{s.career}</p>
          <p className="mt-5 font-serif text-[1.3rem] font-semibold leading-[1.5] text-primary md:text-[1.5rem]">{s.headline}</p>
          <p className="mt-3 leading-[1.85] text-ink/75">{s.intro}</p>

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[0.85rem] font-semibold text-ink">전문 분야</span>
            {s.specialties.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-[0.85rem] text-ink/80">
                {t}
              </span>
            ))}
          </div>

          <Link href="/story#therapists" className="mt-5 inline-flex items-center gap-2 border-b border-ink/60 pb-0.5 text-[0.92rem] font-semibold text-ink">
            자세한 프로필 보기 <span aria-hidden>→</span>
          </Link>

          <div className="mt-7 grid grid-cols-2 gap-2">
            <a
              href={s.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center bg-primary text-[0.95rem] font-semibold text-paper transition-colors hover:bg-primary-soft"
            >
              예약하기
            </a>
            <a
              href={consultHref}
              {...(consultHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex min-h-13 items-center justify-center border border-primary text-[0.95rem] font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
            >
              상담
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
