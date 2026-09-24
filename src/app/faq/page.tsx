import type { Metadata } from "next";
import { Button, Container, Eyebrow, PageHero } from "@/components/ui";
import { faqs } from "@/content/faq";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ · 오시는 길",
  description: `스파코지 자주 묻는 질문과 오시는 길. ${site.address}`,
};

export default function FaqPage() {
  return (
    <>
      <PageHero en="FAQ & Location" title="궁금하신 점을 모았습니다" />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[1.4rem] leading-none text-accent">Q</span>
                  <span className="flex-1 font-serif text-[1.12rem] leading-[1.6] text-ink">{f.q}</span>
                  <span className="mt-1.5 text-primary transition-transform group-open:rotate-45" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 2v14M2 9h14" />
                    </svg>
                  </span>
                </summary>
                <div className="mb-5 flex gap-4 rounded-[2px] bg-white/70 p-6">
                  <span className="font-display text-[1.4rem] leading-none text-primary">A</span>
                  <p className="flex-1 leading-[1.9] text-ink/85">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section id="location" className="scroll-mt-24 bg-mist/50 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow className="mb-4">Location</Eyebrow>
            <h2 className="font-serif text-[1.6rem] text-primary md:text-[2rem]">오시는 길</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm text-muted">주소</dt>
                <dd className="mt-1 text-[1.05rem]">{site.address}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">예약 문의</dt>
                <dd className="mt-1 text-[1.05rem]">
                  <a href={site.links.tel} className="underline underline-offset-4">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">영업시간</dt>
                <dd className="mt-1 space-y-0.5 text-[1.05rem]">
                  {site.hours.map((h) => (
                    <p key={h.day}>
                      <span className="inline-block w-20 text-muted">{h.day}</span> {h.time}
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">주차</dt>
                <dd className="mt-1 text-[1.05rem]">죽전누리에뜰 상가 건물 주차장 이용 (방문 시 등록 안내)</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.links.map}>네이버 지도로 길찾기</Button>
              <Button href={site.links.tel} variant="outline">
                전화하기
              </Button>
            </div>
          </div>
          <a
            href={site.links.map}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-80 items-center justify-center overflow-hidden rounded-[2px] bg-gradient-to-br from-mist via-line to-[#cbb89a]"
            aria-label="네이버 지도에서 스파코지 위치 보기"
          >
            <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(45deg,transparent_0_22px,#fff3_22px_23px)]" />
            <div className="relative text-center">
              <svg className="mx-auto h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <p className="mt-3 font-serif text-[1.15rem] text-primary">죽전누리에뜰 B동 2층</p>
              <p className="mt-1 text-sm text-ink/60 group-hover:underline">눌러서 네이버 지도 열기</p>
            </div>
          </a>
        </Container>
      </section>
    </>
  );
}
