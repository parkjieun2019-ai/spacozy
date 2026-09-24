import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container, PageHero } from "@/components/ui";
import { concerns } from "@/content/concerns";
import { programs } from "@/content/programs";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "고민별 추천",
  description: "목·어깨 결림, 흐려진 얼굴선, 잦은 부기, 웨딩 준비까지 — 고민에 맞는 스파코지 관리를 찾아보세요.",
};

const bySlug = Object.fromEntries(programs.map((p) => [p.slug, p]));

export default function ConcernsPage() {
  return (
    <>
      <PageHero
        en="Your Concern"
        title={
          <>
            오늘, 어디가
            <br className="md:hidden" /> 가장 무거우신가요?
          </>
        }
        desc="고민을 고르시면 어울리는 관리를 안내해 드립니다. 정확한 추천은 첫 방문 웰컴 차트 상담에서 함께 정해요."
      />

      <section className="py-16 md:py-24">
        <Container>
          <nav aria-label="고민 목록" className="mb-14 flex flex-wrap justify-center gap-2.5">
            {concerns.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="inline-flex min-h-11 items-center border border-line bg-white/40 px-5 text-[0.95rem] hover:border-primary hover:text-primary"
              >
                {c.name}
              </a>
            ))}
          </nav>

          <div className="grid gap-5 md:grid-cols-2">
            {concerns.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="scroll-mt-28 border border-line/80 bg-white/40 p-8 target:ring-2 target:ring-primary md:p-10"
              >
                <h2 className="font-serif text-[1.35rem] text-primary">{c.name}</h2>
                <p className="mt-2 text-ink/75">{c.desc}</p>
                {c.note && <p className="mt-4 rounded-[2px] bg-mist/70 p-4 text-[0.95rem] text-ink/85">{c.note}</p>}
                <div className="mt-6 border-t border-line pt-5">
                  <p className="mb-3 text-sm text-muted">추천 관리</p>
                  <ul className="space-y-2">
                    {c.programs.map((slug, i) => {
                      const p = bySlug[slug];
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          <Link href={`/programs#${slug}`} className="group flex items-center justify-between gap-4">
                            <span className="font-serif text-[1.08rem] text-ink group-hover:text-primary">
                              {i === 0 && <span className="mr-2 text-[0.8rem] text-accent">BEST</span>}
                              {p.name}
                            </span>
                            <span className="h-px w-8 shrink-0 bg-primary/60 transition-all group-hover:w-12" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-muted">내 고민이 목록에 없어도 괜찮아요. 편하게 물어보세요.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={site.links.booking}>상담 예약하기</Button>
              <Button href={site.links.tel} variant="outline">
                전화 문의 {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
