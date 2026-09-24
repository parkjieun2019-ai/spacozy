import { site } from "@/config/site";

const kakao = site.links.kakaoChat;

function KakaoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.86 5.32 4.66 6.74l-.95 3.5a.4.4 0 0 0 .6.44l4.1-2.72c.52.06 1.05.1 1.59.1 5.52 0 10-3.58 10-8S17.52 3 12 3Z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

/** 모바일: 화면 하단 고정 바 / PC: 우측 하단 원형 버튼 */
export default function ContactBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-3">
          <a href={site.links.tel} className="flex flex-col items-center gap-1 py-3 text-[0.85rem] text-ink">
            <PhoneIcon className="h-6 w-6 text-primary" />
            전화
          </a>
          <a
            href={kakao || site.links.tel}
            target={kakao ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-line py-3 text-[0.85rem] text-ink"
          >
            <KakaoIcon className="h-6 w-6 text-primary" />
            카톡 상담
          </a>
          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 bg-primary py-3 text-[0.85rem] font-medium text-paper"
          >
            <CalendarIcon className="h-6 w-6" />
            네이버 예약
          </a>
        </div>
      </div>

      <div className="fixed bottom-8 right-6 z-50 hidden flex-col gap-3 lg:flex">
        <a
          href={site.links.booking}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="네이버 예약"
          title="네이버 예약"
          className="flex h-15 w-15 items-center justify-center rounded-full bg-primary text-paper shadow-lg shadow-ink/20 ring-1 ring-paper/40 transition-transform hover:-translate-y-0.5"
        >
          <CalendarIcon className="h-6 w-6" />
        </a>
        {kakao && (
          <a
            href={kakao}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 상담"
            title="카카오톡 상담"
            className="flex h-15 w-15 items-center justify-center rounded-full bg-primary text-paper shadow-lg shadow-ink/20 ring-1 ring-paper/40 transition-transform hover:-translate-y-0.5"
          >
            <KakaoIcon className="h-7 w-7" />
          </a>
        )}
        <a
          href={site.links.tel}
          aria-label={`전화 ${site.phone}`}
          title={site.phone}
          className="flex h-15 w-15 items-center justify-center rounded-full bg-primary text-paper shadow-lg shadow-ink/20 ring-1 ring-paper/40 transition-transform hover:-translate-y-0.5"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
