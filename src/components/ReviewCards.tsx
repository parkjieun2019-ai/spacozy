import { reviews, SAMPLE_REVIEWS, type Review } from "@/content/reviews";
import { site } from "@/config/site";
import { Button } from "@/components/ui";

function Card({ r }: { r: Review }) {
  return (
    <article className="relative flex w-[300px] shrink-0 flex-col rounded-[18px] border border-line bg-paper p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] md:w-[360px]">
      {SAMPLE_REVIEWS && (
        <span className="absolute right-5 top-5 rounded-full border border-line px-2.5 py-0.5 text-[0.72rem] text-muted">예시</span>
      )}
      <p className="text-[1.05rem] tracking-[0.15em] text-[#c9a35b]" aria-label="별점 5점">
        ★★★★★
      </p>
      <p className="mt-4 flex-1 font-serif text-[1.08rem] leading-[1.75] text-ink">“{r.text}”</p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
        <p className="text-[0.92rem] font-semibold text-ink">
          {r.name} 님{r.age && <span className="ml-1.5 font-normal text-muted">· {r.age}</span>}
        </p>
        <p className="truncate rounded-full bg-mist px-3 py-1 text-[0.78rem] font-semibold text-primary">{r.program}</p>
      </div>
    </article>
  );
}

/** 후기 카드가 두 줄로 서로 반대 방향으로 천천히 흐릅니다. */
export default function ReviewCards() {
  const half = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, half), reviews.slice(half)];

  return (
    <div>
      <div className="relative -mx-6 space-y-5 overflow-hidden md:mx-0 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {rows.map((row, k) => (
          <div key={k} className={`review-track flex w-max gap-5 ${k === 1 ? "review-track--reverse" : ""}`}>
            {[...row, ...row, ...row, ...row].map((r, i) => (
              <Card key={`${k}-${i}`} r={r} />
            ))}
          </div>
        ))}
      </div>
      {SAMPLE_REVIEWS && (
        <p className="mt-6 text-center text-[0.85rem] text-muted">※ 위 후기는 디자인 확인용 예시이며, 실제 고객 후기로 교체될 예정입니다.</p>
      )}
      <div className="mt-8 text-center">
        <Button href={site.links.reviews} variant="outline">
          네이버 후기 더 보기
        </Button>
      </div>
    </div>
  );
}
