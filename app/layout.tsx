import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// 1. เพิ่ม display: 'swap' เพื่อแก้ปัญหา Font-display (ลด CLS และเพิ่มความเร็วโหลด)
const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-prompt",
  display: "swap", 
});

// 2. ปรับ Metadata ให้ครอบคลุม SEO, Open Graph และแก้ไข Syntax Error
export const metadata: Metadata = {
  title: "วงป๊อกเด้ง | ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สดเรียลไทม์ 24 ชม.",
  description: "สมัครเล่นวงป๊อกเด้ง ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สดเรียลไทม์ตลอด 24 ชม. ฝาก-ถอนไม่มีขั้นต่ำ พร้อมระบบตรวจหวยออนไลน์ EZLOTTO ครบวงจร มั่นคง โปร่งใส 100%",
  // 🟢 แก้ไขบัค: ใส่ฟันหนู ("") ครอบคำที่เป็น Keyword ทุกคำให้ถูกต้อง
  keywords: [
    "วงป๊อกเด้ง", "ป๊อกเด้งออนไลน์", "หวยออนไลน์", "บาคาร่า", "EZPOK", "POKDENG", 
    "ป๊อกเด้งได้เงินจริง", "เกมไพ่บนมือถือ", "ป๊อกเด้งออนไลน์เล่นได้2ฝั่ง", 
    "ป๊อกเด้งเงินฟรี", "เกมไพ่เล่นได้หลายคน", "ป๊อกเด้งเล่นกับเพื่อนได้"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "วงป๊อกเด้ง | ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สดเรียลไทม์ 24 ชม.",
    description: "สมัครเล่นวงป๊อกเด้ง ฝาก-ถอนไม่มีขั้นต่ำ มั่นคง โปร่งใส 100%",
    url: "https://www.ezpok168.net", // อย่าลืมเปลี่ยนเป็น URL เว็บไซต์จริงของคุณ
    siteName: "EZPOK",
    locale: "th_TH",
    type: "website",
  },
  verification: {
    google: "6-Uuwp3vfhuuUIMJS2GatzFHdzyvps9wsfG0mfjMdGc", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <meta name="facebook-domain-verification" content="vxmngfys0ljbky1elbd8tl59at8qc7" />
      </head>
      <body className={`${prompt.variable} font-sans antialiased`}> 
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
            fbq('init', '1427059765837148');
            fbq('init', '991670453533912');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}