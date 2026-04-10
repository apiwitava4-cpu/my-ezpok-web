import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

// ตั้งค่าฟอนต์ Prompt 
const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-prompt",
});

// --- ตรงนี้คือโค้ด SEO ที่ถูกต้อง ---
export const metadata: Metadata = {
  title: 'วงป๊อกเด้ง | ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สดเรียลไทม์ 24 ชม.',
  description: 'สมัครเล่นวงป๊อกเด้ง ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สดเรียลไทม์ตลอด 24 ชม. ฝาก-ถอนไม่มีขั้นต่ำ พร้อมระบบตรวจหวยออนไลน์ EZLOTTO ครบวงจร มั่นคง โปร่งใส 100%',
  keywords: 'วงป๊อกเด้ง, ป๊อกเด้งออนไลน์, หวยออนไลน์',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-sans`}>{children}</body>
    </html>
  );
}