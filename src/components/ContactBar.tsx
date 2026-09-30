"use client";

import { site } from "@/config/site";

// 카카오톡 채널 ID가 아직 없으면 전화로 연결됩니다. (src/config/site.ts)
const kakao = site.links.kakaoChat || site.links.tel;

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

/** 네이버 예약: 초록 네모 안에 N */
function NaverIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#03c75a" />
      <path fill="#fff" d="M7.5 6.5h3.1l3 4.6V6.5h2.9v11h-3.1l-3-4.6v4.6H7.5z" />
    </svg>
  );
}

/** 카카오톡: 노란 말풍선 + TALK */
function KakaoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path fill="#fee500" d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.86 5.32 4.66 6.74l-.95 3.5a.4.4 0 0 0 .6.44l4.1-2.72c.52.06 1.05.1 1.59.1 5.52 0 10-3.58 10-8S17.52 3 12 3Z" />
      <text x="12" y="13.4" textAnchor="middle" fontSize="6.2" fontWeight="800" fill="#3a1d1d" fontFamily="Arial, sans-serif">
        TALK
      </text>
    </svg>
  );
}

/** 네이버 톡톡: 초록 말풍선 안에 N */
function TalkTalkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path fill="#03c75a" d="M12 2.5c-5.25 0-9.5 3.6-9.5 8.05 0 2.6 1.46 4.9 3.73 6.37L5.4 21a.45.45 0 0 0 .66.5l4.3-2.6c.54.07 1.08.1 1.64.1 5.25 0 9.5-3.6 9.5-8.05S17.25 2.5 12 2.5Z" />
      <path fill="#fff" d="M8.6 7.6h2.1l2.4 3.6V7.6h2.3v6.6h-2.1l-2.4-3.6v3.6H8.6z" />
    </svg>
  );
}

const items = [
  { label: "네이버 예약", short: "예약", href: site.links.booking, Icon: NaverIcon },
  { label: "카톡 상담", short: "카톡", href: kakao, Icon: KakaoIcon },
  { label: "네이버 톡톡", short: "톡톡", href: site.links.naverTalk, Icon: TalkTalkIcon },
  { label: `전화 ${site.phone}`, short: "전화", href: site.links.tel, Icon: PhoneIcon },
];

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** 모바일: 하단 고정 바 / PC: 우측 세로 원형 버튼(흰 원 + 브랜드 아이콘, 마우스 올리면 이름) + 맨 위로 */
export default function ContactBar() {
  return (
    <>
      {/* 모바일 하단 바 */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-4 divide-x divide-line">
          {items.map(({ short, href, Icon }) => (
            <a key={short} href={href} {...ext(href)} className="flex items-center justify-center gap-1.5 py-3.5 text-[0.9rem] font-semibold text-ink">
              <Icon className={`h-6 w-6 ${short === "전화" ? "text-primary" : ""}`} />
              {short}
            </a>
          ))}
        </div>
      </div>

      {/* PC 우측 플로팅 */}
      <div className="fixed bottom-8 right-6 z-50 hidden flex-col items-center gap-3 lg:flex">
        {items.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            {...ext(href)}
            aria-label={label}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
          >
            <Icon className={`h-8 w-8 ${label.startsWith("전화") ? "text-primary" : ""}`} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink/85 px-3 py-1.5 text-[0.82rem] font-semibold text-paper opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="맨 위로"
          className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 14l6-6 6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
