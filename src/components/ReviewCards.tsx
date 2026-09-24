import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { Button } from "@/components/ui";

/** 옆으로 넘겨 보는 후기 카드. 동의받은 후기가 없으면 자리 카드만 보입니다. */
export default function ReviewCards() {
  const empty = reviews.length === 0;
  return (
    <div>
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
        {empty
          ? [0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex min-h-64 w-[78%] shrink-0 snap-start flex-col items-center justify-center rounded-[18px] border border-dashed border-line bg-mist p-8 text-center md:w-[calc((100%-2rem)/3)]"
              >
                <p className="font-display text-[2.4rem] leading-none text-primary/40">“</p>
                <p className="mt-3 font-semibold text-ink/60">고객 후기 준비 중</p>
                <p className="mt-2 text-[0.92rem] text-muted">공개에 동의해 주신 후기를 곧 소개해 드릴게요.</p>
              </div>
            ))
          : reviews.map((r, i) => (
              <article
                key={i}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-[18px] border border-line bg-paper md:w-[calc((100%-2rem)/3)]"
              >
                {r.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.photo} alt="" className="tone-photo aspect-[4/3] w-full object-cover" />
                )}
                <div className="p-6">
                  <p className="text-[0.85rem] font-semibold text-primary">{r.program}</p>
                  <p className="mt-3 leading-[1.85] text-ink/85">{r.text}</p>
                  <p className="mt-4 text-[0.9rem] text-muted">
                    {r.name}
                    {r.age && ` · ${r.age}`}
                  </p>
                </div>
              </article>
            ))}
      </div>
      <div className="mt-8 text-center">
        <Button href={site.links.reviews} variant="outline">
          네이버 후기 더 보기
        </Button>
      </div>
    </div>
  );
}
