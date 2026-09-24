import type { Metadata } from "next";
import { Button, Container, Eyebrow, PageHero, Photo } from "@/components/ui";
import { site } from "@/config/site";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "브랜드 스토리",
  description: `${site.director.years}년 경력 대표원장 ${site.director.name}과 실장 ${site.manager.name}이 전하는 스파코지의 관리 철학.`,
};

// TODO: 자격증 취득 · 매장 오픈 연도를 받으면 추가
const timeline = [
  { year: String(site.director.since), text: "에스테틱 테라피스트로 첫 손길을 시작하다" },
  { year: "·····", text: "수기 테라피 한 길을 걸으며 수많은 고객의 몸을 읽다" },
  { year: String(site.director.since + site.director.years), text: `${site.director.years}년의 손끝, 스파코지에서 당신을 기다립니다` },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        en="Brand Story"
        title={
          <>
            몸이 가벼워지면,
            <br />
            얼굴도 달라집니다
          </>
        }
      />

      {/* 원장 철학 */}
      <section className="py-20 md:py-32">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <Photo label={`대표원장 ${site.director.name}`} src={images.directorStory} tone="wood" className="aspect-[4/5] w-full" />
            <p className="mt-5 text-center font-serif text-greige">
              대표원장 <span className="tracking-[0.2em] text-ink">{site.director.name}</span> · 경력 {site.director.years}년
            </p>
          </div>
          <div>
            <Eyebrow className="mb-5">Director&apos;s Philosophy</Eyebrow>
            <h2 className="font-serif text-[1.55rem] leading-[1.7] text-green md:text-[2rem]">
              “무거웠던 당신의 어깨가 가벼워지는 순간,
              <br className="hidden md:block" /> 얼굴의 선도 함께 살아납니다.”
            </h2>
            <div className="mt-10 space-y-6 text-[1.05rem] leading-[2] text-ink/85">
              <p>
                나이가 들수록 몸은 정직하게 삶의 무게를 담아냅니다. 스트레스로 딱딱해진 뒷목, 순환이 막혀 둔탁해진 얼굴선과 자주 붓는
                다리. 이것은 단순히 피부 겉면만의 문제가 아닙니다.
              </p>
              <p>
                스파코지에서의 시간은 처음부터 끝까지 기계에만 의존하는 획일화된 관리와는 다릅니다. {site.director.years}년의 정교한
                노하우가 담긴 따뜻한 수기(手技)를 중심에 두고, 꼭 필요한 순간에만 엄선한 기기 케어를 더했습니다.
              </p>
              <p>억지로 누르거나 당기지 않고, 몸이 스스로 편안함을 되찾을 수 있도록 곁에서 돕겠습니다.</p>
            </div>
            <div className="mt-12 text-right">
              <p className="text-greige">대표원장</p>
              {/* TODO: 자필 서명 이미지로 교체 (public/images/signature.png) */}
              <p className="mt-1 font-serif text-[2rem] italic tracking-[0.3em] text-green">{site.director.name}</p>
              <p className="text-greige">올림</p>
            </div>

            <div className="mt-16 border-t border-sand pt-12">
              <Eyebrow className="mb-8">History</Eyebrow>
              <ol className="relative space-y-10 border-l border-wood/40 pl-8">
                {timeline.map((t) => (
                  <li key={t.text} className="relative">
                    <span className="absolute -left-[37px] top-3 h-2.5 w-2.5 rounded-full bg-wood" />
                    <p className="font-display text-[2rem] leading-none text-green">{t.year}</p>
                    <p className="mt-3 text-ink/80">{t.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* 실장 큐레이팅 */}
      <section className="bg-beige/50 py-20 md:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="order-2 md:order-1">
            <Eyebrow className="mb-5">Beauty Curating</Eyebrow>
            <h2 className="font-serif text-[1.5rem] leading-[1.7] text-green md:text-[1.9rem]">
              “문턱을 넘는 순간부터 시작되는 편안함,
              <br className="hidden md:block" /> 고객님의 진정한 쉼을 돕겠습니다.”
            </h2>
            <div className="mt-10 space-y-6 text-[1.05rem] leading-[2] text-ink/85">
              <p>
                단순히 관리실에 머무는 시간이 아닌, 첫 방문부터 사후 관리까지 오직 한 분만을 위한 프라이빗 컨설팅을 진행합니다.
              </p>
              <p>
                웰컴 차트를 통해 그날의 컨디션과 수면 상태, 고민 부위를 세심하게 살펴 가장 알맞은 관리를 큐레이션해 드립니다. 언제
                들러도 마음 편안한 친정집 같은 안식처가 되도록 정성을 다해 모시겠습니다.
              </p>
            </div>
            <p className="mt-10 font-serif text-greige">
              실장 <span className="text-ink">{site.manager.name}</span> · 경력 {site.manager.years}
            </p>
          </div>
          <Photo label={`실장 ${site.manager.name}`} src={images.manager} className="order-1 aspect-[4/5] w-full md:order-2" />
        </Container>
      </section>

      {/* 웰컴 차트 흐름 */}
      <section className="py-20 md:py-28">
        <Container className="text-center">
          <Eyebrow className="mb-4">Your First Visit</Eyebrow>
          <h2 className="font-serif text-[1.5rem] text-green md:text-[1.9rem]">첫 방문은 이렇게 진행됩니다</h2>
          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 text-left md:grid-cols-3">
            {[
              ["웰컴 차트", "컨디션, 수면 상태, 고민 부위를 함께 살펴봅니다."],
              ["맞춤 큐레이션", "대표원장 또는 실장이 그날에 맞는 관리를 제안합니다."],
              ["관리 후 안내", "홈케어 팁과 다음 관리 시기를 알려 드립니다."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-[1.5rem] bg-white/70 p-8 ring-1 ring-sand/70">
                <p className="font-display text-[2rem] leading-none text-wood/70">0{i + 1}</p>
                <p className="mt-4 font-serif text-[1.2rem] text-green">{t}</p>
                <p className="mt-2 text-ink/80">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button href={site.links.booking}>첫 방문 예약하기</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
