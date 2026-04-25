import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ✅ FIX: ลบ claim เกินจริงออกจาก description / title
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ezpok168.net"),
  title: {
    default: "EZPOK168 | ป๊อกเด้งออนไลน์ 2 ใบเปิด กติกา หวยออนไลน์",
    template: "%s | EZPOK168",
  },
  description:
    "EZPOK168 ศูนย์รวมข้อมูลป๊อกเด้งออนไลน์ 2 ใบเปิด กติกา วิธีเล่น แทงหวยออนไลน์ และเงื่อนไขโปรโมชัน ติดต่อแอดมินได้ 24 ชม.",
  keywords: [
    "วงป๊อกเด้ง", "ป๊อกเด้งออนไลน์", "หวยออนไลน์", "บาคาร่า", "EZPOK",
    "ป๊อกเด้งออนไลน์เล่นได้2ฝั่ง", "เกมไพ่บนมือถือ", "สอนเล่นป๊อกเด้ง",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "EZPOK168 | ป๊อกเด้งออนไลน์ 2 ใบเปิด กติกาและวิธีเล่น",
    description: "อ่านกติกาป๊อกเด้งออนไลน์ แทงหวยออนไลน์ และตรวจสอบเงื่อนไขก่อนสมัครใช้งาน",
    url: "/",
    siteName: "EZPOK168",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/NEWLOGOBANNER_poster.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZPOK168 | ป๊อกเด้งออนไลน์ 2 ใบเปิด",
    description: "กติกาป๊อกเด้งออนไลน์ แทงหวยออนไลน์ และเงื่อนไขการใช้งาน",
    images: ["/NEWLOGOBANNER_poster.webp"],
  },
  verification: { google: "6-Uuwp3vfhuuUIMJS2GatzFHdzyvps9wsfG0mfjMdGc" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <meta name="facebook-domain-verification" content="vxmngfys0ljbky1elbd8tl59at8qc7" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#07030F" />
        
        {/* ✅ Performance: Resource Hints */}
        <link rel="preconnect" href="https://ezpok168.com" />
        <link rel="dns-prefetch" href="https://ezpok168.com" />
        
        {/* ✅ Performance: Preload critical assets */}
        <link rel="preload" href="/B2-SIGN.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">

        {/* ✅ FIX: รวม 2x fbq('init') ไว้ใน block เดียว → ป้องกัน duplicate PageView event */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1427059765837148');
            fbq('init','991670453533912');
            fbq('track','PageView');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
