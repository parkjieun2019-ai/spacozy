import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-display text-[1.05rem] italic tracking-[0.12em] text-wood ${className}`}>{children}</p>
  );
}

export function SectionTitle({
  en,
  children,
  sub,
  center = true,
}: {
  en?: string;
  children: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {en && <Eyebrow className="mb-4">{en}</Eyebrow>}
      <h2 className="font-serif text-[1.6rem] leading-[1.55] text-green md:text-[2.1rem]">{children}</h2>
      {sub && <p className="mt-5 text-greige md:text-[1.05rem]">{sub}</p>}
    </div>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "solid" | "outline" | "light"; external?: boolean; className?: string };

export function Button({ href, children, variant = "solid", external, className = "" }: BtnProps) {
  const styles = {
    solid: "bg-green text-ivory hover:bg-green-soft",
    outline: "border border-green text-green hover:bg-green hover:text-ivory",
    light: "bg-ivory text-green hover:bg-beige",
  }[variant];
  const cls = `inline-flex min-h-14 items-center justify-center rounded-full px-8 text-[1.02rem] font-medium transition-colors ${styles} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:"))
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ViewMore({ href, children = "VIEW MORE" }: { href: string; children?: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-4 font-display text-[1.05rem] tracking-[0.14em] text-green">
      {children}
      <span className="relative h-px w-14 bg-green transition-all group-hover:w-20">
        <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-green" />
      </span>
    </Link>
  );
}

/** 실제 사진을 받기 전까지 쓰는 웜톤 자리표시자. src를 넣으면 사진으로 바뀝니다. */
export function Photo({
  label,
  src,
  alt,
  className = "",
  tone = "sand",
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  tone?: "sand" | "wood" | "green";
}) {
  if (src)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt ?? label} className={`rounded-[1.75rem] object-cover ${className}`} />;
  const bg = {
    sand: "from-beige via-sand to-[#cbb89a]",
    wood: "from-[#d9c6ad] via-[#b89878] to-wood",
    green: "from-[#4b6a5c] via-green-soft to-green",
  }[tone];
  return (
    <div
      role="img"
      aria-label={`${label} (사진 준비 중)`}
      className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${bg} ${className}`}
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,#fff_0,transparent_45%)]" />
      <span className={`absolute bottom-4 left-5 text-[0.8rem] tracking-wider ${tone === "green" ? "text-ivory/70" : "text-ink/45"}`}>
        {label} · 사진 준비 중
      </span>
    </div>
  );
}

export function PageHero({ en, title, desc }: { en: string; title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="border-b border-sand/60 bg-beige/50">
      <Container className="py-16 text-center md:py-24">
        <Eyebrow className="mb-4">{en}</Eyebrow>
        <h1 className="font-serif text-[1.9rem] leading-[1.5] text-green md:text-[2.6rem]">{title}</h1>
        {desc && <p className="mx-auto mt-6 max-w-2xl text-greige md:text-[1.08rem]">{desc}</p>}
      </Container>
    </section>
  );
}
