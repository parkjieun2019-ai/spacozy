import type { Metadata } from "next";
import { Button, Container, PageHero } from "@/components/ui";
import ConcernTabs from "@/components/ConcernTabs";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "고민별 추천",
  description: "목·어깨 결림, 흐려진 얼굴선, 잦은 부기, 웨딩 준비까지 — 고민에 맞는 스파코지 관리를 찾아보세요.",
};

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
          <ConcernTabs />

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
