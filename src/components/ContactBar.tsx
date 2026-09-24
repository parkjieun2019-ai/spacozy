import { site } from "@/config/site";

// 카카오톡 채널 ID가 아직 없으면 전화로 연결됩니다. (src/config/site.ts)
const kakao = site.links.kakaoChat || site.links.tel;

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function KakaoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.86 5.32 4.66 6.74l-.95 3.5a.4.4 0 0 0 .6.44l4.1-2.72c.52.06 1.05.1 1.59.1 5.52 0 10-3.58 10-8S17.52 3 12 3Z" />
    </svg>
  );
}

/** 네이버 톡톡: 말풍선 안에 N */
function TalkTalkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path fill="currentColor" d="M12 2.5c-5.25 0-9.5 3.6-9.5 8.05 0 2.6 1.46 4.9 3.73 6.37L5.4 21a.45.45 0 0 0 .66.5l4.3-2.6c.54.07 1.08.1 1.64.1 5.25 0 9.5-3.6 9.5-8.05S17.25 2.5 12 2.5Z" />
      <path fill="#fff" d="M8.6 7.6h2.1l2.4 3.6V7.6h2.3v6.6h-2.1l-2.4-3.6v3.6H8.6z" />
    </svg>
  );
}

const items = [
  { label: "전화", href: site.links.tel, Icon: PhoneIcon, color: "text-primary", bubble: "bg-primary text-paper" },
  { label: "카톡", href: kakao, Icon: KakaoIcon, color: "text-[#3a1d1d]", bubble: "bg-[#fee500] text-[#3a1d1d]" },
  { label: "네이버톡톡", href: site.links.naverTalk, Icon: TalkTalkIcon, color: "text-[#03c75a]", bubble: "bg-[#03c75a] text-paper" },
];

const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** 모바일: 하단 고정 바 / PC: 우측 하단 원형 버튼 — 전화 · 카톡 · 네이버톡톡 */
export default function ContactBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-3 divide-x divide-line">
          {items.map(({ label, href, Icon, color }) => (
            <a key={label} href={href} {...ext(href)} className="flex items-center justify-center gap-2 py-4 text-[0.92rem] font-semibold text-ink">
              <Icon className={`h-6 w-6 ${color}`} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 right-6 z-50 hidden flex-col gap-3 lg:flex">
        {items.map(({ label, href, Icon, bubble }) => (
          <a
            key={label}
            href={href}
            {...ext(href)}
            aria-label={label}
            title={label === "전화" ? `전화 ${site.phone}` : label}
            className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-ink/15 transition-transform hover:-translate-y-0.5 ${bubble}`}
          >
            <Icon className="h-6 w-6" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[0.8rem] text-paper opacity-0 transition-opacity group-hover:opacity-100">
              {label === "전화" ? site.phone : label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
