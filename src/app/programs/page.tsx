import type { Metadata } from "next";
import { Button, Container, Eyebrow, PageHero, Photo, SectionTitle } from "@/components/ui";
import PriceMenu from "@/components/PriceMenu";
import { formatPrice, programs } from "@/content/programs";
import { site } from "@/config/site";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "시그니처 프로그램",
  description: "전신 밸런스 비움 테라피, 페이스 선(線) 디자인 테라피 — 스파코지의 시그니처 수기 관리를 소개합니다.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        en="Signature Therapy"
        title="스파코지 시그니처 테라피"
        desc={`모든 프로그램은 대표원장 또는 실장 중 원하시는 분을 선택하실 수 있습니다.`}
      />

      {programs
        .filter((p) => p.published)
        .map((p, idx) => (
          <section key={p.slug} id={p.slug} className={`scroll-mt-24 py-20 md:py-28 ${idx % 2 ? "bg-mist/50" : ""}`}>
            <Container>
              <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                <Photo label={p.name} src={images.programs[p.slug]} tone={idx % 2 ? "sand" : "wood"} className="aspect-[4/3] w-full md:aspect-[4/5]" />
                <div>
                  <Eyebrow className="mb-3">
                    Signature {String(idx + 1).padStart(2, "0")} · {p.nameEn}
                  </Eyebrow>
                  <h2 className="font-serif text-[1.7rem] leading-[1.5] text-primary md:text-[2.2rem]">{p.name}</h2>
                  <p className="mt-6 text-[1.05rem] leading-[1.95] text-ink/85">{p.intro}</p>

                  <dl className="mt-8 grid grid-cols-2 divide-x divide-line border-y border-line py-5 text-center">
                    <div>
                      <dt className="text-sm text-muted">소요 시간</dt>
                      <dd className="mt-1 font-serif text-[1.15rem] text-primary">{p.durationLabel}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">가격</dt>
                      <dd className="mt-1 font-serif text-[1.15rem] text-primary">{formatPrice(p.price)}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button href={p.bookingUrl ?? site.links.booking}>이 프로그램 예약하기</Button>
                    <Button href="/faq" variant="outline">
                      자주 묻는 질문
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <p className="mb-6 text-center font-display text-[1.05rem] italic tracking-[0.12em] text-accent">Care Step</p>
                <ol className="grid gap-4 md:grid-cols-5">
                  {p.steps.map((s, i) => (
                    <li key={s.title} className="relative border border-line/80 bg-white/40 p-6">
                      <p className="font-display text-[1.9rem] leading-none text-accent/70">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-4 font-serif text-[1.1rem] leading-snug text-primary">{s.title}</p>
                      <p className="mt-2 text-[0.95rem] leading-[1.75] text-ink/80">{s.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>
        ))}

      {/* 전체 프로그램 · 가격표 (카테고리별) */}
      <section id="price" className="scroll-mt-24 border-t border-line bg-mist py-20 md:py-28">
        <Container>
          <SectionTitle en="Price List" sub="카테고리를 누르면 세부 프로그램과 가격을 볼 수 있어요.">
            전체 프로그램 · 가격표
          </SectionTitle>
          <div className="mt-10 md:mt-14">
            <PriceMenu />
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-center text-paper md:py-20">
        <Container>
          <h2 className="font-serif text-[1.4rem] leading-[1.7] md:text-[1.75rem]">
            어떤 관리가 맞을지 고민되신다면,
            <br />
            첫 방문 웰컴 차트 상담으로 함께 정해 드립니다.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/concerns" variant="light">
              고민별 추천 보기
            </Button>
            <Button href="/membership" variant="ghost-light">
              멤버십 혜택
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
