import { staff } from "@/content/staff";
import { site } from "@/config/site";
import { Photo } from "@/components/ui";

// 상담 버튼: 카카오톡 비즈니스 채널 1:1 채팅으로 연결 (채널 ID는 src/config/site.ts 에 입력, 입력 전에는 전화로 연결)
const consultHref = site.links.kakaoChat || site.links.tel;

/** 병원 '의료진 소개'처럼 담당자를 나란히 보여주고 바로 예약·상담으로 연결 */
export default function StaffCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {staff.map((s, i) => (
        <article
          key={s.id}
          className="reveal flex flex-col overflow-hidden rounded-[18px] border border-line bg-paper sm:flex-row"
          style={{ transitionDelay: `${i * 0.12}s` }}
        >
          <Photo label={`${s.role} ${s.name}`} src={s.photo} className="aspect-[4/3] w-full shrink-0 !rounded-none sm:aspect-auto sm:w-[42%]" />
          <div className="flex flex-1 flex-col p-7 md:p-8">
            <p className="font-display text-[1rem] italic text-accent">{s.roleEn}</p>
            <h3 className="mt-2 flex items-baseline gap-3 font-serif text-ink">
              <span className="text-[1rem] text-muted">{s.role}</span>
              <span className="text-[1.7rem] font-semibold tracking-[0.12em]">{s.name}</span>
            </h3>
            <p className="mt-2 inline-flex w-fit rounded-full bg-mist px-3 py-1 text-[0.85rem] font-semibold text-primary">{s.career}</p>
            <p className="mt-5 leading-[1.85] text-ink/80">{s.intro}</p>
            <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
              {s.specialties.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[0.95rem] text-ink/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto grid grid-cols-2 gap-2 pt-7">
              <a
                href={s.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-13 items-center justify-center bg-primary text-[0.95rem] font-semibold text-paper transition-colors hover:bg-primary-soft"
              >
                예약하기
              </a>
              <a
                href={consultHref}
                {...(consultHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-h-13 items-center justify-center border border-primary text-[0.95rem] font-semibold text-primary transition-colors hover:bg-primary hover:text-paper"
              >
                상담
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
