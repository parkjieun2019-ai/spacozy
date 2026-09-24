import Link from "next/link";
import { Button, Container, Eyebrow, SectionTitle, ViewMore } from "@/components/ui";
import { programs } from "@/content/programs";
import ConcernTabs from "@/components/ConcernTabs";
import HeroSlider from "@/components/HeroSlider";
import StaffProfiles from "@/components/StaffProfiles";
import SpaceSection from "@/components/SpaceSection";
import ReviewCards from "@/components/ReviewCards";
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
    body: "멍들고 붓는 강한 마사지가 아닙니다. 순환의 길을 부드럽게 열어 주는 관리로, 다음 날 몸살 없는 가벼움을 느끼실 수 있습니다.",
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
      {/* 1. 메인 — 셀파크 스타일: 흰 바탕 큰 영문 제목 + 아래 큰 사진 */}
      <section className="pt-14 md:pt-24">
        <Container>
          <p className="fade-up font-display text-[2.35rem] leading-[1.08] tracking-[-0.01em] text-ink sm:text-[3.4rem] md:text-[5.4rem]">
            SPA COZY,
            <br />
            <span className="italic text-accent">The Quiet Hands</span>
          </p>
          <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 className="fade-up font-serif text-[1.35rem] leading-[1.75] text-ink [animation-delay:.15s] md:text-[1.75rem]">
                무거웠던 당신의 어깨가 가벼워지는 순간,
                <br />
                얼굴의 선(線)도 함께 살아납니다.
              </h1>
              <p className="fade-up mt-4 text-muted [animation-delay:.3s]">
                {site.director.years}년의 정교한 노하우로 속을 비우고, 본연의 맑음을 채우는 곳 · 스파코지
              </p>
            </div>
            <div className="fade-up flex flex-col gap-3 [animation-delay:.45s] sm:flex-row">
              <Button href={site.links.booking}>첫 방문 웰컴 혜택 예약하기</Button>
            </div>
          </div>
        </Container>
        <div className="mx-auto mt-12 max-w-[1440px] px-4 md:mt-16 md:px-6">
          <HeroSlider />
        </div>
      </section>

      {/* 2. 원장 · 실장 소개 — 병원 의료진 소개처럼 */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionTitle en="Our Therapists" sub="이름을 눌러 담당자를 선택하고, 바로 예약하거나 상담하실 수 있어요.">
            스파코지를 지키는 사람들
          </SectionTitle>
          <div className="reveal mt-10 md:mt-14">
            <StaffProfiles />
          </div>
        </Container>
      </section>

      {/* 2. Intro */}
      <section className="py-28 md:py-44">
        <Container className="max-w-3xl text-center">
          <p className="reveal font-display text-[1.2rem] italic tracking-[0.06em] text-accent">Since {site.director.since} · Private Beauty Ritual</p>
          <h2 className="reveal mt-8 font-serif text-[1.45rem] leading-[1.8] text-ink md:text-[1.9rem]">
            겉을 화려하게 꾸미기 전에,
            <br />
            지친 속부터 어루만집니다.
          </h2>
          <p className="reveal mt-10 leading-[2.1] text-ink/75 md:text-[1.06rem]">
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

      {/* 5. 시그니처 — 셀파크 트리트먼트 타일 */}
      <section className="pt-24 md:pt-36">
        <Container>
          <SectionTitle en="Signature Therapy">당신에게 필요한 깊이를 만나 보세요</SectionTitle>
        </Container>
        <div className="mt-14 grid md:mt-20 md:grid-cols-2">
          {programs.map((p) => (
            <Link key={p.slug} href={`/programs#${p.slug}`} className="group relative block h-[70svh] min-h-[420px] overflow-hidden md:h-[82vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.programs[p.slug]}
                alt={p.name}
                loading="lazy"
                className="tone-photo absolute inset-0 h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-[#003c26]/55" />
              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-paper">
                <p className="font-display text-[1.6rem] uppercase tracking-[0.12em] md:text-[2rem]">{p.nameEn.replace(" Therapy", "")}</p>
                <p className="mt-4 font-serif text-[1.2rem] leading-[1.6] md:text-[1.35rem]">{p.name}</p>
                <p className="mt-5 max-w-xs text-paper/75">{p.summary}</p>
                <span className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-paper/60 transition-colors duration-300 group-hover:bg-paper group-hover:text-primary">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <path d="M0 5h13M9 1l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. 고민별 — 탭을 누르면 추천이 바뀜 */}
      <section className="bg-mist py-24 md:py-36">
        <Container>
          <SectionTitle en="Your Concern" sub="고민을 하나 누르면, 아래에 맞는 관리가 바로 나와요.">
            어떤 고민이 있으신가요?
          </SectionTitle>
          <div className="reveal mt-12">
            <ConcernTabs />
          </div>
        </Container>
      </section>

      {/* 7. 공간 — 휴대폰은 배너 + View more 사진첩 */}
      <section className="py-20 md:py-36">
        <Container>
          <SpaceSection />
        </Container>
      </section>

      {/* 8. 후기 카드 */}
      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <SectionTitle en="Best Review">다녀가신 분들의 솔직한 이야기</SectionTitle>
          <div className="reveal mt-12">
            <ReviewCards />
          </div>
        </Container>
      </section>

      {/* 9. 오시는 길 */}
      <section className="border-t border-line bg-mist">
        <Container className="max-w-3xl text-center">
          <div className="reveal py-16 md:py-24">
            <Eyebrow className="justify-center">Visit</Eyebrow>
            <h3 className="mt-6 font-serif text-[1.45rem] text-primary md:text-[1.6rem]">오시는 길</h3>
            <p className="mt-4 leading-[1.9] text-ink/80">
              죽전로 20 {site.addressShort}
              <br />
              <span className="text-muted">죽전 · 수지 · 성복동에서 가까운 곳</span>
            </p>
            <dl className="mx-auto mt-6 w-fit space-y-1 text-left">
              {site.hours.map((h) => (
                <div key={h.day} className="flex gap-6">
                  <dt className="w-20 text-muted">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/faq#location">자세히 보기</Button>
              <Button href={site.links.tel} variant="outline">
                {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {/* 10. Our Promise — 맨 아래 */}
      <section className="border-t border-line/70 py-24 md:py-36">
        <Container>
          <SectionTitle en="Our Promise">스파코지만의 세 가지 약속</SectionTitle>
          <div className="mt-16 grid md:mt-24 md:grid-cols-3">
            {points.map((p, i) => (
              <article
                key={p.no}
                className={`reveal border-line/80 py-10 md:px-10 md:py-4 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <p className="font-display text-[1.1rem] italic text-accent">
                  {p.no}. {p.en}
                </p>
                <h3 className="mt-6 whitespace-pre-line font-serif text-[1.3rem] leading-[1.6] text-primary md:text-[1.4rem]">{p.title}</h3>
                <p className="mt-6 leading-[1.95] text-ink/75">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
