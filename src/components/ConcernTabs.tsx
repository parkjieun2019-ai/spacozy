"use client";

import Link from "next/link";
import { useState } from "react";
import { concerns } from "@/content/concerns";
import { programs } from "@/content/programs";
import { images } from "@/content/images";

const bySlug = Object.fromEntries(programs.map((p) => [p.slug, p]));

/** 고민 탭을 누르면 추천 관리가 바로 바뀌는 영역 */
export default function ConcernTabs() {
  const [active, setActive] = useState(concerns[0].slug);
  const current = concerns.find((c) => c.slug === active) ?? concerns[0];

  return (
    <div>
      <div role="tablist" aria-label="고민 선택" className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
        {concerns.map((c) => {
          const on = c.slug === active;
          return (
            <button
              key={c.slug}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(c.slug)}
              className={`min-h-12 shrink-0 rounded-full border px-5 text-[0.98rem] transition-colors duration-300 ${
                on ? "border-primary bg-primary font-semibold text-paper" : "border-line bg-paper text-ink hover:border-primary"
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-10">
        <p className="text-center text-[1.05rem] text-muted">
          <span className="font-semibold text-ink">{current.desc}</span> 이 고민이시라면
        </p>
        {current.note && <p className="mx-auto mt-3 max-w-xl text-center text-muted">{current.note}</p>}
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
          {current.programs.map((slug, i) => {
            const p = bySlug[slug];
            if (!p) return null;
            return (
              <Link
                key={`${current.slug}-${slug}`}
                href={`/programs#${slug}`}
                className="fade-up group flex overflow-hidden rounded-[18px] border border-line bg-paper transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images.programs[slug]} alt="" className="tone-photo h-auto w-32 shrink-0 object-cover md:w-40" />
                <div className="flex flex-col justify-center p-5 md:p-6">
                  {i === 0 && (
                    <span className="mb-2 w-fit rounded-full bg-mist px-3 py-0.5 text-[0.8rem] font-semibold text-primary">추천 1순위</span>
                  )}
                  <p className="font-serif text-[1.15rem] font-semibold leading-snug text-ink">{p.name}</p>
                  <p className="mt-2 text-[0.95rem] text-muted">{p.summary}</p>
                  <p className="mt-3 text-[0.9rem] font-semibold text-primary">자세히 보기 →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
