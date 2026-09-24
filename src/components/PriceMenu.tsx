"use client";

import { useState } from "react";
import { menu, won } from "@/content/menu";
import { site } from "@/config/site";

/** 카테고리 탭 + 세부 프로그램 가격표 */
export default function PriceMenu({ ids }: { ids?: string[] }) {
  const list = ids ? menu.filter((c) => ids.includes(c.id)) : menu;
  const [active, setActive] = useState(list[0].id);
  const cat = list.find((c) => c.id === active) ?? list[0];

  return (
    <div className="mx-auto max-w-4xl">
      {/* 카테고리 탭 (2개 이상일 때만) */}
      {list.length > 1 && (
      <div role="tablist" aria-label="프로그램 카테고리" className={`grid gap-2 ${list.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
        {list.map((c) => {
          const on = c.id === active;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(c.id)}
              className={`flex min-h-14 flex-col items-center justify-center rounded-[10px] border px-2 transition-colors ${
                on ? "border-primary bg-primary text-paper" : "border-line bg-paper text-ink hover:border-primary"
              }`}
            >
              <span className="text-[1rem] font-semibold">{c.name}</span>
              <span className={`font-display text-[0.8rem] italic ${on ? "text-paper/70" : "text-muted"}`}>{c.nameEn}</span>
            </button>
          );
        })}
      </div>
      )}

      {/* 가격표 */}
      <div key={cat.id} role="tabpanel" className={`fade-up ${list.length > 1 ? "mt-6" : ""} rounded-[18px] border border-line bg-paper p-5 md:p-8`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-4">
          <h3 className="font-serif text-[1.35rem] font-semibold text-ink">{cat.name}</h3>
          <p className="text-[0.92rem] text-muted">{cat.desc}</p>
        </div>

        {cat.note && <p className="mt-4 rounded-[10px] bg-mist px-4 py-3 text-[0.92rem] text-ink/80">{cat.note}</p>}

        {cat.items.length === 0 ? (
          <p className="py-10 text-center text-muted">세부 프로그램과 가격을 준비하고 있어요. 전화나 상담으로 먼저 안내해 드립니다.</p>
        ) : (
          <ul className="divide-y divide-line">
            {cat.items.map((it) => (
              <li key={it.name} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex-1">
                  <p className="flex flex-wrap items-center gap-2 text-[1.08rem] font-semibold text-ink">
                    {it.name}
                  </p>
                  <p className="mt-1 text-[0.9rem] text-muted">
                    {[it.desc, it.duration].filter(Boolean).join(" · ")}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <dl className="grid min-w-[190px] grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-0.5 text-right">
                    {it.price === null ? (
                      <>
                        <dt className="text-[0.82rem] text-muted">가격</dt>
                        <dd className="text-[1rem] font-semibold text-ink">{it.priceNote ?? "상담 안내"}</dd>
                      </>
                    ) : (
                      <>
                        <dt className="text-[0.82rem] text-muted">1회</dt>
                        <dd className="text-[1rem] font-semibold text-ink">{won(it.price)}</dd>
                      </>
                    )}
                    {it.memberPrice ? (
                      <>
                        <dt className="text-[0.82rem] text-muted">회원가</dt>
                        <dd className="text-[1rem] font-semibold text-ink">{won(it.memberPrice)}</dd>
                      </>
                    ) : null}
                    {it.firstPrice || it.firstNote ? (
                      <>
                        <dt className="text-[0.82rem] font-semibold text-primary">첫 방문</dt>
                        <dd className="text-[1.12rem] font-bold text-primary">{it.firstPrice ? won(it.firstPrice) : it.firstNote}</dd>
                      </>
                    ) : null}
                  </dl>
                  <a
                    href={site.links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 border border-primary px-4 py-2 text-[0.88rem] font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
                  >
                    예약
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="mt-5 space-y-1 text-[0.85rem] text-muted">
        <li>※ 첫 방문 웰컴 혜택은 네이버 예약에서 확인하실 수 있습니다.</li>
        <li>※ 관리 시간과 구성은 당일 컨디션에 따라 조정될 수 있습니다.</li>
      </ul>
    </div>
  );
}
