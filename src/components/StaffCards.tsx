import { staff } from "@/content/staff";
import { site } from "@/config/site";

// 상담 버튼: 카카오톡 비즈니스 채널 1:1 채팅으로 연결 (채널 ID는 src/config/site.ts 에 입력, 입력 전에는 전화로 연결)
const consultHref = site.links.kakaoChat || site.links.tel;

/** 잡지 인물 화보처럼 담당자를 소개하고 바로 예약·상담으로 연결 */
export default function StaffCards() {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
      {staff.map((s, i) => (
        <article key={s.id} className={`reveal ${i === 1 ? "md:mt-32" : ""}`} style={{ transitionDelay: `${i * 0.15}s` }}>
          {/* 화보 사진 — 두 사진을 같은 비율·같은 배경 톤으로 통일 */}
          <div className="unveil relative aspect-[3/4] overflow-hidden bg-[#e9ebe8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.photo}
              alt={`${s.role} ${s.name}`}
              loading="lazy"
              className="h-full w-full object-cover mix-blend-multiply grayscale-[15%]"
              style={{ objectPosition: s.photoFocus, scale: String(s.photoZoom), transformOrigin: s.photoFocus }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />

            {/* 잡지식 표기 */}
            <p className="absolute left-5 top-5 font-display text-[0.95rem] tracking-[0.2em] text-ink/70 md:left-7 md:top-7">
              No. {String(i + 1).padStart(2, "0")}
            </p>
            <p className="absolute right-4 top-1/2 origin-center -translate-y-1/2 translate-x-1/2 rotate-90 whitespace-nowrap text-[0.7rem] tracking-[0.45em] text-ink/45 md:right-6">
              SPA COZY THERAPIST
            </p>
            <p className="absolute bottom-4 left-5 font-display text-[2.6rem] italic leading-none text-paper md:bottom-6 md:left-7 md:text-[3.4rem]">
              {s.roleEn}
            </p>
          </div>

          {/* 이름 · 인용문 */}
          <div className="mt-8 flex items-end justify-between gap-4 border-b border-ink/80 pb-4">
            <h3 className="font-serif leading-none text-ink">
              <span className="block text-[0.95rem] text-muted">{s.role}</span>
              <span className="mt-3 block text-[2.1rem] font-semibold tracking-[0.18em] md:text-[2.4rem]">{s.name}</span>
            </h3>
            <p className="shrink-0 pb-1 text-[0.85rem] font-semibold tracking-[0.04em] text-primary">{s.career}</p>
          </div>

          <blockquote className="relative mt-7 pl-8 font-serif text-[1.25rem] leading-[1.65] text-ink md:text-[1.35rem]">
            <span className="absolute -left-1 -top-3 font-display text-[3.2rem] leading-none text-primary/40">“</span>
            {s.quote}
          </blockquote>
          <p className="mt-4 leading-[1.85] text-ink/75">{s.intro}</p>

          <p className="mt-5 text-[0.92rem] leading-[1.9] text-muted">
            {s.specialties.map((t, k) => (
              <span key={t}>
                {k > 0 && <span className="mx-2 text-line">/</span>}
                {t}
              </span>
            ))}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2">
            <a
              href={s.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center bg-primary text-[0.95rem] font-semibold tracking-[0.04em] text-paper transition-colors hover:bg-primary-soft"
            >
              예약하기
            </a>
            <a
              href={consultHref}
              {...(consultHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex min-h-13 items-center justify-center border border-primary text-[0.95rem] font-semibold tracking-[0.04em] text-primary transition-colors hover:bg-primary hover:text-paper"
            >
              상담
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
