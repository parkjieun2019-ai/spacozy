"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col leading-none text-primary ${className}`} aria-label="스파코지 홈">
      <span className="font-display text-[1.6rem] tracking-[0.18em]">SPA COZY</span>
      <span className="mt-1 font-serif text-[0.7rem] tracking-[0.5em] text-muted">스파코지</span>
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
    <header className="sticky top-0 z-40 border-b border-line/50 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주 메뉴">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[0.95rem] transition-colors hover:text-primary ${
                pathname === n.href ? "text-primary font-semibold" : "text-ink/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary px-6 py-2.5 text-[0.9rem] tracking-[0.06em] text-primary transition-colors duration-300 hover:bg-primary hover:text-paper"
          >
            예약하기
          </a>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center lg:hidden"
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

      {open && (
        <nav className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-paper px-6 pb-32 pt-6 lg:hidden" aria-label="모바일 메뉴">
          <ul className="divide-y divide-line/70 border-y border-line/70">
            <li>
              <Link href="/" className="flex items-baseline justify-between py-5">
                <span className="font-serif text-xl">홈</span>
                <span className="font-display text-muted">Home</span>
              </Link>
            </li>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="flex items-baseline justify-between py-5">
                  <span className={`font-serif text-xl ${pathname === n.href ? "text-primary" : ""}`}>{n.label}</span>
                  <span className="font-display text-muted">{n.en}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-1 text-muted">
            <p>예약 문의 <a href={site.links.tel} className="text-ink underline underline-offset-4">{site.phone}</a></p>
            {site.hours.map((h) => (
              <p key={h.day}>{h.day} {h.time}</p>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
