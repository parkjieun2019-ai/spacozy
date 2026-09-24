import Link from "next/link";
import { Button, Container, Eyebrow, Photo, SectionTitle, ViewMore } from "@/components/ui";
import { programs } from "@/content/programs";
import { concerns } from "@/content/concerns";
import { site } from "@/config/site";

const points = [
  {
    no: "01",
    title: "기계에 의존하지 않는\n정직한 1:1 수기 테라피",
    body: `기계는 꼭 필요한 순간에 거들 뿐입니다. 관리 시간의 대부분은 대표원장의 ${site.director.years}년 손끝 감각으로 뭉친 결을 읽어내는 정통 수기 케어로 채워집니다.`,
  },
  {
    no: "02",
    title: "아프지 않은\n깊은 이완",
    body: "멍들고 붓는 강한 마사지가 아닙니다. 순환의 길을 부드럽게 열어주는 관리로, 다음 날 몸살 없는 가벼움을 느끼실 수 있습니다.",
  },
  {
    no: "03",
    title: "얼굴선을 살리는\n바디 베이스",
    body: "얼굴만 억지로 만지지 않습니다. 등과 데콜테를 먼저 풀어 맑은 안색과 선을 위한 근본 케어를 지향합니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. 메인 배너 */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-10 pb-16 pt-12 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-24 md:pt-20">
          <div>
            <Eyebrow className="mb-6">Since {site.director.since} · Private Beauty Ritual</Eyebrow>
            <h1 className="font-serif text-[1.85rem] leading-[1.55] text-green md:text-[2.6rem] md:leading-[1.5]">
              무거웠던 당신의 어깨가
              <br />
              가벼워지는 순간,
              <br />
              얼굴의 선(線)도
              <br className="md:hidden" /> 함께 살아납니다.
            </h1>
            <p className="mt-7 max-w-md text-[1.05rem] text-greige md:text-[1.12rem]">
              {site.director.years}년의 정교한 노하우로 속을 비우고
              <br />
              본연의 맑음을 채우는 곳, 스파코지
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.links.booking}>첫 방문 웰컴 혜택 예약하기</Button>
              <Button href="/programs" variant="outline">
                시그니처 프로그램 보기
              </Button>
            </div>
          </div>
          <Photo label="메인 · 관리실 전경" tone="wood" className="aspect-[4/5] w-full md:aspect-[4/5]" />
        </Container>
      </section>

      {/* 2. Intro */}
      <section className="bg-beige/50 py-20 md:py-32">
        <Container className="max-w-3xl text-center">
          <Eyebrow className="mb-6">Our Philosophy</Eyebrow>
          <h2 className="font-serif text-[1.55rem] leading-[1.7] text-green md:text-[2.1rem]">
            겉을 화려하게 꾸미기 전에,
            <br />
            지친 속부터 어루만집니다.
          </h2>
          <div className="mx-auto my-10 h-12 w-px bg-wood/60" />
          <p className="text-[1.05rem] leading-[2] text-ink/85 md:text-[1.12rem]">
            {site.director.years}년의 정교한 감각이 담긴 따뜻한 수기(手技)로
            <br className="hidden md:block" /> 몸 깊은 곳의 긴장을 풀고, 일상에 지친 마음까지 위로받는 시간.
            <br />
            오직 당신만을 위한 프라이빗 뷰티 리추얼, 스파코지입니다.
          </p>
          <div className="mt-12">
            <ViewMore href="/story" />
          </div>
        </Container>
      </section>

      {/* 3. Our Point */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionTitle en="Our Point">스파코지만의 세 가지 약속</SectionTitle>
          <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
            {points.map((p) => (
              <article key={p.no} className="rounded-[1.75rem] bg-white/70 p-8 ring-1 ring-sand/70 md:p-10">
                <p className="font-display text-[2.6rem] leading-none text-wood/70">{p.no}</p>
                <h3 className="mt-6 whitespace-pre-line font-serif text-[1.3rem] leading-[1.55] text-green">{p.title}</h3>
                <p className="mt-5 text-ink/80">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. 대표원장 */}
      <section className="bg-green py-20 text-ivory md:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Photo label="대표원장 김명숙" tone="green" className="aspect-[4/5] w-full max-w-md md:justify-self-end" />
          <div>
            <p className="font-display text-[1.05rem] italic tracking-[0.12em] text-sand">Director</p>
            <p className="mt-6 font-display text-[4.5rem] leading-none text-ivory md:text-[6rem]">
              {site.director.years}
              <span className="ml-2 font-serif text-[1.4rem] md:text-[1.7rem]">년</span>
            </p>
            <p className="mt-4 text-sand">Since {site.director.since}, 한결같은 손끝</p>
            <h2 className="mt-10 font-serif text-[1.5rem] leading-[1.6] md:text-[1.9rem]">
              대표원장 <span className="tracking-[0.2em]">{site.director.name}</span>
            </h2>
            <p className="mt-5 max-w-md leading-[1.9] text-ivory/80">
              화려한 기계보다 정직한 손을 믿습니다. {site.director.years}년 동안 수많은 고객의 몸을 읽어 온 감각으로, 그날의 컨디션에
              꼭 맞는 압과 흐름을 찾아드립니다.
            </p>
            <div className="mt-10">
              <Link
                href="/story"
                className="group inline-flex items-center gap-4 font-display text-[1.05rem] tracking-[0.14em] text-ivory"
              >
                BRAND STORY
                <span className="h-px w-14 bg-ivory transition-all group-hover:w-20" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 고민별 바로가기 */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionTitle en="Your Concern" sub="가장 신경 쓰이는 고민을 눌러 보세요. 맞는 관리를 안내해 드립니다.">
            오늘, 어디가 가장 무거우신가요?
          </SectionTitle>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {concerns.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/concerns#${c.slug}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-sand bg-white/60 px-6 text-[1rem] text-ink transition-colors hover:border-green hover:bg-green hover:text-ivory"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. 시그니처 */}
      <section className="bg-beige/50 py-20 md:py-32">
        <Container>
          <SectionTitle en="Signature Therapy">스파코지 시그니처 테라피</SectionTitle>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {programs.map((p, i) => (
              <Link key={p.slug} href={`/programs#${p.slug}`} className="group block">
                <Photo label={p.name} tone={i === 0 ? "wood" : "sand"} className="aspect-[4/3] w-full" />
                <div className="mt-6 px-1">
                  <p className="font-display text-[1.05rem] italic tracking-wider text-wood">{p.nameEn}</p>
                  <h3 className="mt-2 font-serif text-[1.4rem] text-green md:text-[1.55rem]">{p.name}</h3>
                  <p className="mt-3 text-ink/75">{p.summary}</p>
                  <p className="mt-5 inline-flex items-center gap-3 font-display tracking-[0.14em] text-green">
                    VIEW MORE <span className="h-px w-10 bg-green transition-all group-hover:w-16" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. 공간 */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">The Space of Rest</Eyebrow>
              <h2 className="font-serif text-[1.6rem] leading-[1.6] text-green md:text-[2.1rem]">
                문턱을 넘는 순간부터
                <br />
                시작되는 편안함
              </h2>
              <p className="mt-6 text-ink/80">
                다섯 개의 프라이빗 관리실에서 오롯이 한 분만을 위한 시간을 준비합니다. 언제 들러도 마음 편안한, 친정집 같은 안식처가
                되겠습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Photo label="프라이빗 관리실" className="col-span-2 aspect-[16/9]" />
              <Photo label="로비" tone="wood" className="aspect-square" />
              <Photo label="웰컴 티" className="aspect-square" />
            </div>
          </div>
        </Container>
      </section>

      {/* 8. 후기 · 오시는 길 */}
      <section className="bg-beige/50 py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white/70 p-9 ring-1 ring-sand/70 md:p-12">
            <Eyebrow className="mb-4">Review</Eyebrow>
            <h3 className="font-serif text-[1.4rem] text-green">다녀가신 고객님들의 이야기</h3>
            <p className="mt-4 text-ink/80">스파코지를 경험하신 분들의 솔직한 후기를 네이버에서 확인해 보세요.</p>
            <div className="mt-8">
              <Button href={site.links.reviews} variant="outline">
                네이버 후기 보기
              </Button>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-green p-9 text-ivory md:p-12">
            <p className="mb-4 font-display text-[1.05rem] italic tracking-[0.12em] text-sand">Visit</p>
            <h3 className="font-serif text-[1.4rem]">오시는 길</h3>
            <p className="mt-4 text-ivory/85">
              죽전로 20 {site.addressShort}
              <br />
              <span className="text-ivory/65">죽전 · 수지 · 성복동에서 가까운 곳</span>
            </p>
            <ul className="mt-5 space-y-0.5 text-ivory/85">
              {site.hours.map((h) => (
                <li key={h.day}>
                  {h.day} <span className="text-ivory">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/faq#location" variant="light">
                자세히 보기
              </Button>
              <Button href={site.links.tel} variant="light" className="!bg-transparent !text-ivory ring-1 ring-ivory/50">
                {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
