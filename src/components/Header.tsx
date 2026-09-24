"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col items-center leading-none text-primary ${className}`} aria-label="스파코지 홈">
      <span className="whitespace-nowrap font-display text-[1.45rem] tracking-[0.26em] md:text-[1.75rem]">SPA COZY</span>
      <span className="mt-1.5 flex items-center gap-2 text-[0.62rem] tracking-[0.42em] text-muted">
        <span className="h-px w-4 bg-line" />
        SINCE 2006
        <span className="h-px w-4 bg-line" />
      </span>
    </Link>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative py-2 text-[0.95rem] tracking-[0.02em] transition-colors hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-500 ${
        active ? "text-primary after:scale-x-100" : "text-ink/75 after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:h-22 md:px-10">
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="주 메뉴">
          {nav.slice(0, 3).map((n) => (
            <NavLink key={n.href} href={n.href} label={n.label} active={pathname === n.href} />
          ))}
        </nav>
        <div className="col-span-2 col-start-1 lg:col-span-1 lg:col-start-2">
          <Logo className="!items-start lg:!items-center" />
        </div>
        <nav className="hidden items-center justify-end gap-6 lg:flex xl:gap-9" aria-label="보조 메뉴">
          {nav.slice(3).map((n) => (
            <NavLink key={n.href} href={n.href} label={n.label} active={pathname === n.href} />
          ))}
          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary px-6 py-2.5 text-[0.9rem] tracking-[0.08em] text-primary transition-colors duration-500 hover:bg-primary hover:text-paper"
          >
            예약하기
          </a>
        </nav>

        <button
          type="button"
          className="col-start-3 flex h-12 w-12 items-center justify-center justify-self-end lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-7">
            <span className={`absolute left-0 h-[1.5px] w-7 bg-primary transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-[1.5px] w-7 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[1.5px] w-7 bg-primary transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

    </header>

      {/* 모바일 메뉴 — header의 blur 효과 밖에 두어야 화면 전체 높이를 씁니다 */}
      {open && (
        <div className="fixed inset-x-0 top-18 bottom-0 z-[45] lg:hidden">
          {/* 왼쪽 어두운 영역 — 누르면 닫힘 */}
          <button type="button" aria-label="메뉴 닫기" onClick={() => setOpen(false)} className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" />

          {/* 오른쪽 반 화면 메뉴 */}
          <nav
            aria-label="모바일 메뉴"
            className="menu-slide absolute inset-y-0 right-0 flex w-[56%] min-w-[210px] max-w-[320px] flex-col overflow-y-auto bg-paper pb-24 shadow-2xl shadow-ink/20"
          >
            <ul className="pt-2">
              {[{ href: "/", label: "홈" }, ...nav].map((n) => {
                const on = pathname === n.href;
                return (
                  <li key={n.href} className="border-b border-line">
                    <Link
                      href={n.href}
                      aria-current={on ? "page" : undefined}
                      className={`flex min-h-14 items-center justify-between gap-2 border-l-[3px] py-3.5 pl-4 pr-3 ${on ? "border-primary bg-mist" : "border-transparent"}`}
                    >
                      <span className={`text-[1.08rem] font-semibold leading-snug ${on ? "text-primary" : "text-ink"}`}>{n.label}</span>
                      <span className={`text-[1.2rem] leading-none ${on ? "text-primary" : "text-line"}`} aria-hidden>
                        ›
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto space-y-3 px-4 pt-6">
              <a
                href={site.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-13 items-center justify-center bg-primary text-[1rem] font-semibold text-paper"
              >
                네이버 예약하기
              </a>
              <a href={site.links.tel} className="flex min-h-13 items-center justify-center border border-primary text-[1rem] font-semibold text-primary">
                {site.phone}
              </a>
              <dl className="space-y-1 pt-2 text-[0.88rem]">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-2">
                    <dt className="text-muted">{h.day}</dt>
                    <dd className={h.time.includes("휴무") ? "text-muted" : "font-semibold text-ink"}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
