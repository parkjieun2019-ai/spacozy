import type { Metadata } from "next";
import { Button, Container, Eyebrow, PageHero, SectionTitle } from "@/components/ui";
import { site } from "@/config/site";
import { membershipTiers } from "@/content/membership";

export const metadata: Metadata = {
  title: "멤버십 · 혜택",
  description: "첫 방문 웰컴 혜택과 가족이 함께 쓰는 프라이빗 정액권 멤버십 안내.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero en="Membership" title="스파코지 멤버십 & 혜택" desc="처음 오시는 분도, 오래 함께하실 분도 편안하게." />

      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {/* 첫 방문 */}
          <article className="flex flex-col bg-primary p-9 text-paper md:p-12">
            <p className="font-display text-[1.05rem] italic tracking-[0.12em] text-line">Welcome Benefit</p>
            <h2 className="mt-4 font-serif text-[1.6rem] leading-[1.5] md:text-[1.9rem]">첫 방문 웰컴 혜택</h2>
            <p className="mt-5 leading-[1.9] text-paper/85">
              스파코지를 처음 찾아 주시는 분께 드리는 혜택이에요. {site.director.years}년 경력 대표원장의 1:1 수기 테라피를 부담 없이 먼저 경험해 보세요.
            </p>
            {/* 첫 방문 혜택은 네이버 플레이스 공개 기준과 동일하게 유지 */}
            <p className="mt-6 rounded-[2px] bg-paper/10 p-5 text-paper/90">
              첫 방문 시 비회원가에서 <strong className="text-paper">최대 40% 할인</strong>된 가격으로 관리받으실 수 있어요. (프로그램별 할인율 상이)
            </p>
            <div className="mt-auto pt-10">
              <Button href={site.links.booking} variant="light">
                웰컴 혜택 확인하고 예약하기
              </Button>
            </div>
          </article>

          {/* 정액권 */}
          <article className="flex flex-col border border-line/80 bg-white/40 p-9 md:p-12">
            <Eyebrow>Private Membership</Eyebrow>
            <h2 className="mt-4 font-serif text-[1.6rem] leading-[1.5] text-primary md:text-[1.9rem]">프라이빗 정액권 멤버십</h2>
            <ul className="mt-7 space-y-5">
              {[
                ["유연한 차감", "그날의 컨디션에 맞춰 원하는 프로그램으로 자유롭게 차감합니다."],
                ["회원가 적용", "모든 프로그램을 회원가로 이용하실 수 있습니다."],
                ["결제 금액 적립", "정액권 금액에 따라 10~20%를 더 적립해 드립니다."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="font-serif text-[1.12rem] text-primary">{t}</p>
                    <p className="mt-1 text-ink/80">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted">현금 결제 시 정액권 금액에 따라 사은품을 드려요.</p>
            <div className="mt-auto pt-10">
              <Button href={site.links.tel} variant="outline">
                멤버십 문의 {site.phone}
              </Button>
            </div>
          </article>
        </Container>
      </section>

      {/* 정액권 종류 */}
      <section className="border-t border-line bg-mist py-20 md:py-28">
        <Container>
          <SectionTitle en="Membership Tiers" sub="금액이 클수록 적립률이 높고, 이용 가능한 관리 범위도 넓어져요.">
            정액권 종류
          </SectionTitle>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {membershipTiers.map((t) => (
              <div key={t.amount} className="flex flex-col rounded-[2px] border border-line bg-paper p-7">
                <p className="font-serif text-[1.35rem] font-semibold text-primary">{t.amount}</p>
                <p className="mt-1 text-[0.92rem] text-muted">유효기간 {t.validity}</p>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[0.85rem] text-muted">적립 {t.savingRate}</p>
                  <p className="mt-1 font-serif text-[1.15rem] text-ink">
                    총 <span className="font-semibold text-primary">{t.totalUse}</span> 사용 가능
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-[0.92rem] text-ink/80">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    모든 관리 회원가 적용
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {t.scope.join(" · ")} 이용 가능
                  </li>
                  {t.family && (
                    <li className="flex gap-2 font-semibold text-primary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      가족과 함께 사용 가능
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-[0.9rem] text-muted">
            ※ 하이푸 관리는 방문 상담 후 안내해 드려요. · ♥ 현금 결제 시 금액별 사은품을 드려요.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href={site.links.tel} variant="outline">
              정액권 상담 {site.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
