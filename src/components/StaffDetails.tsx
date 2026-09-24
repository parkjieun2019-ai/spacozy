import { staff } from "@/content/staff";

/** 브랜드 스토리용 테라피스트 상세 프로필: 전문 분야 · 약속(인용문) · 現 직함 · 경력 */
export default function StaffDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {staff.map((s, i) => (
        <article key={s.id} className="reveal rounded-[18px] border border-line bg-paper p-7 md:p-10" style={{ transitionDelay: `${i * 0.12}s` }}>
          <p className="font-display text-[1rem] italic text-accent">SPA COZY&apos;s {s.roleEn}</p>
          <h3 className="mt-2 flex items-baseline gap-2 font-serif text-ink">
            <span className="text-[1.8rem] font-semibold tracking-[0.03em]">{s.name}</span>
            <span className="text-muted">{s.role}</span>
          </h3>
          <p className="mt-2 inline-flex rounded-full bg-mist px-3 py-1 text-[0.85rem] font-semibold text-primary">{s.career}</p>

          <p className="mt-6 font-serif text-[1.2rem] font-semibold leading-[1.5] text-primary">{s.headline}</p>

          <blockquote className="mt-5 border-l-2 border-primary/40 pl-4 font-serif text-[1.08rem] leading-[1.7] text-ink/85">
            “{s.quote}”
          </blockquote>

          <dl className="mt-7 space-y-5 border-t border-line pt-6 text-[0.95rem]">
            <div>
              <dt className="text-[0.82rem] font-semibold tracking-[0.08em] text-muted">전문 분야</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {s.specialties.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-[0.85rem] text-ink/80">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.82rem] font-semibold tracking-[0.08em] text-muted">현재</dt>
              <dd className="mt-2 space-y-1 text-ink/85">
                {s.current.map((c) => (
                  <p key={c}>
                    <span className="mr-2 text-muted">現</span>
                    {c}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.82rem] font-semibold tracking-[0.08em] text-muted">경력</dt>
              <dd className="mt-2 space-y-1 text-ink/85">
                {s.history.map((h) => (
                  <p key={h} className="flex gap-2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {h}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
