import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jjeen-eazy.com"),
  title: {
    default: "찐이지 EAZY | 뷰티샵 블로그·네이버 홍보·손님 늘리기",
    template: "%s | 찐이지 EAZY",
  },
  description:
    "네일샵·반영구·피부관리실 원장님을 위한 뷰티샵 블로그·네이버 홍보 솔루션. 블로그 자동 작성 도구(블로그라이터), 1:1 코칭, 릴스 만들기, 살롱 홈페이지까지. 혼자서도 손님 늘리는 법, 찐이지 EAZY.",
  keywords: [
    "찐이지",
    "EAZY",
    "찐이지 EAZY",
    "뷰티샵 블로그",
    "뷰티샵 네이버 홍보",
    "네일샵 홍보",
    "반영구 홍보",
    "피부관리실 홍보",
    "1인샵 홍보 방법",
    "뷰티샵 손님 늘리는 법",
    "네일샵 손님 늘리는 법",
    "반영구 손님 늘리는 법",
    "뷰티샵 매출 올리기",
    "1인샵 매출 올리기",
    "뷰티샵 인스타 릴스",
    "지은 원장",
  ],
  authors: [{ name: "지은 (EAZY)" }],
  creator: "EAZY",
  publisher: "EAZY",
  alternates: {
    canonical: "https://www.jjeen-eazy.com",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "찐이지 EAZY | 뷰티샵 블로그·네이버 홍보 솔루션",
    description:
      "네일샵·반영구·피부관리실 원장님을 위한 뷰티샵 블로그·네이버 홍보. 블로그 자동 작성, 1:1 코칭, 릴스, 홈페이지까지. 혼자서도 손님 늘리는 법.",
    url: "https://www.jjeen-eazy.com",
    siteName: "찐이지 EAZY",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "찐이지 EAZY | 뷰티샵 블로그·네이버 홍보 솔루션",
    description:
      "뷰티샵 블로그, 네이버 홍보, 손님 늘리는 법. 네일샵·반영구·피부관리실 원장님을 위한 찐이지 EAZY.",
    images: ["https://www.jjeen-eazy.com/about-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "여기에-구글-인증-코드",
    other: {
      "naver-site-verification": "9aadb4d968f47074d3f9006471a40048baac342b",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1418494838780017&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1418494838780017');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KYY3F4VQJ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KYY3F4VQJ7');
          `}
        </Script>
      </body>
    </html>
  );
}
