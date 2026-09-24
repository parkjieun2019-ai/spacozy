import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Serif_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { site } from "@/config/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "스파코지 SPA COZY | 죽전·수지 20년 경력 수기 테라피 에스테틱",
    template: "%s | 스파코지 SPA COZY",
  },
  description: site.description,
  keywords: ["스파코지", "SPA COZY", "죽전 에스테틱", "수지 에스테틱", "성복동 피부관리", "수기 테라피", "전신 관리", "얼굴선 관리"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "스파코지 SPA COZY",
    title: "스파코지 SPA COZY | 20년 경력 수기 테라피",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f3d33",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "스파코지 SPA COZY",
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "죽전로 20 죽전누리에뜰 상가 B동 2층 221호",
    addressLocality: "용인시 기흥구",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:30", closes: "17:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSerif.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:p-3">
          본문 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactBar />
      </body>
    </html>
  );
}
