import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

/** 작은 영문 라벨 (예: SIGNATURE THERAPY) */
export function Eyebrow({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.32em] ${light ? "text-line" : "text-accent"} ${className}`}>
      <span className={`h-px w-8 ${light ? "bg-line/70" : "bg-accent/70"}`} />
      {children}
    </p>
  );
}

/** 큰 영문 세리프 제목 + 한글 부제 (셀파크 스타일) */
export function SectionTitle({
  en,
  children,
  sub,
  center = true,
  light = false,
}: {
  en?: string;
  children: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "text-center" : ""}`}>
      {en && (
        <p className={`font-display text-[2.5rem] leading-[1.05] tracking-[-0.01em] md:text-[3.6rem] ${light ? "text-paper" : "text-primary"}`}>
          {en}
        </p>
      )}
      <h2 className={`mt-4 font-serif text-[1.2rem] leading-[1.7] md:text-[1.4rem] ${light ? "text-paper/85" : "text-ink/80"}`}>{children}</h2>
      {sub && <p className={`mt-4 ${light ? "text-paper/65" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "ghost-light";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "solid", external, className = "" }: BtnProps) {
  const styles = {
    solid: "bg-primary text-paper hover:bg-primary-soft",
    outline: "border border-primary/70 text-primary hover:bg-primary hover:text-paper",
    light: "bg-paper text-primary hover:bg-mist",
    "ghost-light": "border border-paper/60 text-paper hover:bg-paper hover:text-primary",
  }[variant];
  const cls = `group inline-flex min-h-14 items-center justify-center gap-4 px-8 text-[0.98rem] tracking-[0.04em] transition-colors duration-300 ${styles} ${className}`;
  const inner = (
    <>
      {children}
      <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" aria-hidden />
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("tel:"))
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function ViewMore({ href, children = "View more", light = false }: { href: string; children?: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-5 font-display text-[1.15rem] italic tracking-[0.06em] ${light ? "text-paper" : "text-primary"}`}
    >
      {children}
      <span className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${light ? "border-paper/50 group-hover:bg-paper group-hover:text-primary" : "border-primary/40 group-hover:bg-primary group-hover:text-paper"}`}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M0 5h13M9 1l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}

/** 사진. shape="arch"는 위쪽이 둥근 아치형. src가 없으면 웜톤 자리표시자. */
export function Photo({
  label,
  src,
  alt,
  className = "",
  tone = "sand",
  shape = "rect",
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  tone?: "sand" | "wood" | "dark";
  shape?: "rect" | "arch";
}) {
  const radius = shape === "arch" ? "rounded-t-[999px] rounded-b-[18px]" : "rounded-[18px]";
  if (src)
    return (
      <div className={`overflow-hidden bg-mist ${radius} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className="tone-photo h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
        />
      </div>
    );
  const bg = {
    sand: "from-mist via-line to-[#cfc5bd]",
    wood: "from-[#d8ccc3] via-[#b3a196] to-accent",
    dark: "from-[#5a4d48] via-primary-soft to-primary",
  }[tone];
  return (
    <div role="img" aria-label={`${label} (사진 준비 중)`} className={`relative overflow-hidden bg-gradient-to-br ${bg} ${radius} ${className}`}>
      <span className={`absolute bottom-4 left-5 text-[0.8rem] tracking-wider ${tone === "dark" ? "text-paper/70" : "text-ink/45"}`}>
        {label} · 사진 준비 중
      </span>
    </div>
  );
}

export function PageHero({ en, title, desc }: { en: string; title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="border-b border-line/70">
      <Container className="pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <p className="fade-up font-display text-[3rem] leading-none text-primary md:text-[5rem]">{en}</p>
        <h1 className="fade-up mt-6 font-serif text-[1.35rem] leading-[1.7] text-ink/85 [animation-delay:.15s] md:text-[1.7rem]">
          {title}
        </h1>
        {desc && <p className="fade-up mx-auto mt-6 max-w-2xl text-muted [animation-delay:.3s]">{desc}</p>}
      </Container>
    </section>
  );
}
