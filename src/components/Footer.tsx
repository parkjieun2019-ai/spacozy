import Link from "next/link";
import { nav, site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#003c26] pb-28 text-paper/80 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-[1.8rem] tracking-[0.28em] text-paper">SPA COZY</p>
          <p className="mt-2 text-[0.7rem] tracking-[0.42em] text-paper/55">SINCE 2006 · 스파코지</p>
          <p className="mt-6 leading-relaxed">
            어깨가 가벼워지는 순간,
            <br />
            얼굴의 선도 함께 살아납니다.
          </p>
        </div>

        <div>
          <p className="mb-4 font-display text-lg tracking-widest text-paper">Visit</p>
          <p>{site.address}</p>
          <p className="mt-3">
            예약 문의{" "}
            <a href={site.links.tel} className="text-paper underline underline-offset-4">
              {site.phone}
            </a>
          </p>
          <ul className="mt-3 space-y-0.5">
            {site.hours.map((h) => (
              <li key={h.day}>
                {h.day} <span className="text-paper">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-display text-lg tracking-widest text-paper">Menu</p>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden px-5 md:px-8" aria-hidden>
        <p className="mx-auto max-w-7xl select-none text-center font-display text-[17vw] leading-[0.85] tracking-[0.04em] text-paper/[0.07] md:text-[13.5vw]">
          SPA COZY
        </p>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            상호 스파코지 · 대표 {site.business.owner}
            {site.business.registration && ` · 사업자등록번호 ${site.business.registration}`}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-paper">
              개인정보처리방침
            </Link>
            <span>© {new Date().getFullYear()} SPA COZY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
