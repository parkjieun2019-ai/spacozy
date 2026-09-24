import Link from "next/link";
import { Button, Container, Eyebrow, Photo, SectionTitle, ViewMore } from "@/components/ui";
import { programs } from "@/content/programs";
import { concerns } from "@/content/concerns";
import { site } from "@/config/site";
import { images } from "@/content/images";

const points = [
  {
    no: "I",
    en: "Honest Hands",
    title: "기계에 의존하지 않는\n정직한 1:1 수기 테라피",
    body: `기계는 꼭 필요한 순간에 거들 뿐입니다. 관리 시간의 대부분은 대표원장의 ${site.director.years}년 손끝 감각으로 뭉친 결을 읽어내는 정통 수기 케어로 채워집니다.`,
  },
  {
    no: "II",
    en: "Gentle Depth",
    title: "아프지 않은\n깊은 이완",
    body: "멍들고 붓는 강한 마사지가 아닙니다. 순환의 길을 부드럽게 열어주는 관리로, 다음 날 몸살 없는 가벼움을 느끼실 수 있습니다.",
  },
  {
    no: "III",
    en: "Body First",
    title: "얼굴선을 살리는\n바디 베이스",
    body: "얼굴만 억지로 만지지 않습니다. 등과 데콜테를 먼저 풀어 맑은 안색과 선을 위한 근본 케어를 지향합니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. 메인 배너 — 화면 가득 */}
      <section className="relative h-[88svh] min-h-[560px] overflow-hidden bg-green md:h-[92vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.hero} alt="스파코지 수기 테라피" className="slow-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2620]/85 via-[#1a2620]/35 to-[#1a2620]/10" />
        <Container className="relative flex h-full flex-col justify-end pb-16 md:pb-24">
          <p className="fade-up font-display text-[1.1rem] italic tracking-[0.08em] text-sand">
            Since {site.director.since} · Private Beauty Ritual
          </p>
          <h1 className="fade-up mt-5 font-serif text-[1.75rem] leading-[1.6] text-ivory [animation-delay:.15s] md:text-[2.7rem] md:leading-[1.55]">
            무거웠던 당신의 어깨가 가벼워지는 순간,
            <br />
            얼굴의 선(線)도 함께 살아납니다.
          </h1>
          <p className="fade-up mt-6 max-w-xl text-[1.02rem] text-ivory/80 [animation-delay:.3s] md:text-[1.1rem]">
            {site.director.years}년의 정교한 노하우로 속을 비우고, 본연의 맑음을 채우는 곳
          </p>
          <div className="fade-up mt-10 flex flex-col gap-3 [animation-delay:.45s] sm:flex-row">
            <Button href={site.links.booking} variant="light">
              첫 방문 웰컴 혜택 예약하기
            </Button>
            <Button href="/programs" variant="ghost-light">
              시그니처 프로그램
            </Button>
          </div>
        </Container>
        <div className="absolute bottom-8 right-10 hidden flex-col items-center gap-3 text-ivory/70 md:flex">
          <span className="font-display text-sm tracking-[0.3em] [writing-mode:vertical-rl]">SCROLL</span>
          <span className="h-14 w-px bg-ivory/50" />
        </div>
      </section>

      {/* 2. Intro */}
      <section className="py-28 md:py-44">
        <Container className="max-w-3xl text-center">
          <p className="reveal font-display text-[2.6rem] leading-[1.1] text-green md:text-[4rem]">
            SPA COZY,
            <br />
            <span className="italic">The Quiet Hands</span>
          </p>
          <h2 className="reveal mt-10 font-serif text-[1.35rem] leading-[1.8] text-ink md:text-[1.65rem]">
            겉을 화려하게 꾸미기 전에,
            <br />
            지친 속부터 어루만집니다.
          </h2>
          <div className="reveal mx-auto my-12 h-16 w-px bg-wood/50" />
          <p className="reveal leading-[2.1] text-ink/75 md:text-[1.06rem]">
            {site.director.years}년의 정교한 감각이 담긴 따뜻한 수기(手技)로
            <br className="hidden md:block" /> 몸 깊은 곳의 긴장을 풀고, 일상에 지친 마음까지 위로받는 시간.
            <br />
            오직 당신만을 위한 프라이빗 뷰티 리추얼, 스파코지입니다.
          </p>
          <div className="reveal mt-14">
            <ViewMore href="/story" />
          </div>
        </Container>
      </section>

      {/* 3. Our Point — 박스 없이 가는 선으로 */}
      <section className="border-t border-sand/70 py-24 md:py-36">
        <Container>
          <SectionTitle en="Our Promise">스파코지만의 세 가지 약속</SectionTitle>
          <div className="mt-16 grid md:mt-24 md:grid-cols-3">
            {points.map((p, i) => (
              <article
                key={p.no}
                className={`reveal border-sand/80 py-10 md:px-10 md:py-4 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <p className="font-display text-[1.1rem] italic text-wood">
                  {p.no}. {p.en}
                </p>
                <h3 className="mt-6 whitespace-pre-line font-serif text-[1.3rem] leading-[1.6] text-green md:text-[1.4rem]">{p.title}</h3>
                <p className="mt-6 leading-[1.95] text-ink/75">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. 대표원장 */}
      <section className="bg-green py-24 text-ivory md:py-36">
        <Container className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          <Photo label="대표원장 김명숙" src={images.director} shape="arch" className="reveal aspect-[3/4] w-full max-w-sm justify-self-center" />
          <div className="reveal">
            <Eyebrow light>Director</Eyebrow>
            <p className="mt-8 flex items-end gap-4 font-display leading-none">
              <span className="text-[6.5rem] font-light md:text-[9rem]">{site.director.years}</span>
              <span className="mb-4 text-[1.3rem] italic tracking-[0.1em] text-sand md:mb-6 md:text-[1.6rem]">years of hands</span>
            </p>
            <h2 className="mt-8 font-serif text-[1.45rem] md:text-[1.75rem]">
              대표원장 <span className="tracking-[0.25em]">{site.director.name}</span>
            </h2>
            <p className="mt-6 max-w-md leading-[2] text-ivory/75">
              화려한 기계보다 정직한 손을 믿습니다. {site.director.since}년부터 {site.director.years}년 동안 수많은 고객의 몸을 읽어 온
              감각으로, 그날의 컨디션에 꼭 맞는 압과 흐름을 찾아드립니다.
            </p>
            <div className="mt-12">
              <ViewMore href="/story" light>
                Brand story
              </ViewMore>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. 시그니처 */}
      <section className="py-24 md:py-36">
        <Container>
          <SectionTitle en="Signature Therapy">스파코지 시그니처 테라피</SectionTitle>
          <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-2 md:gap-10">
            {programs.map((p, i) => (
              <Link
                key={p.slug}
                href={`/programs#${p.slug}`}
                className={`reveal group block ${i === 1 ? "md:mt-28" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <Photo label={p.name} src={images.programs[p.slug]} className="aspect-[4/5] w-full" />
                <div className="mt-8">
                  <p className="font-display text-[1.15rem] italic text-wood">
                    {String(i + 1).padStart(2, "0")} — {p.nameEn}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.4rem] text-green md:text-[1.6rem]">{p.name}</h3>
                  <p className="mt-3 text-ink/70">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. 고민별 */}
      <section className="bg-beige/60 py-24 md:py-36">
        <Container className="max-w-4xl">
          <SectionTitle en="Your Concern" sub="가장 신경 쓰이는 고민을 눌러 보세요. 맞는 관리를 안내해 드립니다.">
            오늘, 어디가 가장 무거우신가요?
          </SectionTitle>
          <ul className="reveal mt-14 grid grid-cols-2 border-t border-sand md:grid-cols-5">
            {concerns.map((c) => (
              <li key={c.slug} className="border-b border-sand odd:border-r md:border-r md:[&:nth-child(5n)]:border-r-0">
                <Link
                  href={`/concerns#${c.slug}`}
                  className="flex min-h-18 items-center justify-center px-3 py-5 text-center font-serif text-[1rem] text-ink transition-colors duration-300 hover:bg-green hover:text-ivory"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. 공간 */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="reveal md:col-span-4 md:self-center">
              <p className="font-display text-[2.5rem] leading-[1.1] text-green md:text-[3.2rem]">
                The Space
                <br />
                <span className="italic">of Rest</span>
              </p>
              <h2 className="mt-8 font-serif text-[1.25rem] leading-[1.7] text-ink md:text-[1.4rem]">
                문턱을 넘는 순간부터
                <br />
                시작되는 편안함
              </h2>
              <p className="mt-6 leading-[1.95] text-ink/75">
                다섯 개의 프라이빗 관리실에서 오롯이 한 분만을 위한 시간을 준비합니다. 언제 들러도 마음 편안한, 친정집 같은 안식처가
                되겠습니다.
              </p>
            </div>
            <Photo label="프라이빗 관리실" src={images.spaceRoom} className="reveal aspect-[4/5] md:col-span-5 md:aspect-auto md:h-[620px]" />
            <div className="grid grid-cols-2 gap-4 md:col-span-3 md:grid-cols-1 md:gap-8 md:pt-24">
              <Photo label="로비" src={images.spaceLobby} shape="arch" className="reveal aspect-[3/4]" />
              <Photo label="웰컴 티" src={images.spaceTea} className="reveal aspect-[3/4] md:aspect-square" />
            </div>
          </div>
        </Container>
      </section>

      {/* 8. 방문 안내 */}
      <section className="border-t border-sand/70">
        <Container className="grid md:grid-cols-2">
          <div className="reveal border-b border-sand/70 py-16 md:border-b-0 md:border-r md:py-24 md:pr-16">
            <Eyebrow>Review</Eyebrow>
            <h3 className="mt-6 font-serif text-[1.45rem] text-green md:text-[1.6rem]">다녀가신 분들의 이야기</h3>
            <p className="mt-4 leading-[1.9] text-ink/75">스파코지를 경험하신 고객님들의 솔직한 후기를 네이버에서 확인해 보세요.</p>
            <div className="mt-10">
              <Button href={site.links.reviews} variant="outline">
                네이버 후기 보기
              </Button>
            </div>
          </div>
          <div className="reveal py-16 md:py-24 md:pl-16">
            <Eyebrow>Visit</Eyebrow>
            <h3 className="mt-6 font-serif text-[1.45rem] text-green md:text-[1.6rem]">오시는 길</h3>
            <p className="mt-4 leading-[1.9] text-ink/80">
              죽전로 20 {site.addressShort}
              <br />
              <span className="text-greige">죽전 · 수지 · 성복동에서 가까운 곳</span>
            </p>
            <dl className="mt-6 space-y-1">
              {site.hours.map((h) => (
                <div key={h.day} className="flex gap-6">
                  <dt className="w-20 text-greige">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/faq#location">자세히 보기</Button>
              <Button href={site.links.tel} variant="outline">
                {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
