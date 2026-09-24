import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "개인정보처리방침", robots: { index: false } };

export default function PrivacyPage() {
  return (
    <>
      <PageHero en="Privacy Policy" title="개인정보처리방침" />
      <section className="py-16">
        <Container className="max-w-3xl space-y-8 leading-[1.9] text-ink/85">
          <p>
            스파코지(이하 “매장”)는 이용자의 개인정보를 소중히 여기며 「개인정보 보호법」을 준수합니다.
          </p>
          <div>
            <h2 className="mb-2 font-serif text-[1.2rem] text-green">1. 수집하는 개인정보</h2>
            <p>
              현재 홈페이지에서는 개인정보를 직접 수집하지 않습니다. 예약은 네이버 예약, 상담은 카카오톡 채널 및 전화를 통해 이루어지며,
              해당 서비스의 개인정보처리방침이 함께 적용됩니다.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-[1.2rem] text-green">2. 개인정보 보호책임자</h2>
            <p>
              성명: {site.business.owner} · 연락처: {site.phone}
            </p>
          </div>
          <p className="text-sm text-greige">
            {/* TODO: 2단계(홈페이지 자체 예약) 도입 시 수집 항목·보유 기간·제3자 제공 등 전체 방침으로 교체 */}
            시행일: 2026년 10월 1일
          </p>
        </Container>
      </section>
    </>
  );
}
