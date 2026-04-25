import type { Metadata } from "next";
import PokdengHubClient from "./PokdengHubClient";

export const metadata: Metadata = {
  title: "รวมบทความป๊อกเด้งออนไลน์ 2 ใบเปิด | EZPOK168",
  description:
    "คลังบทความป๊อกเด้งออนไลน์ 2 ใบเปิด กติกา วิธีเล่น ความเสี่ยง การจัดการงบประมาณ และข้อมูลบาคาร่าเว็บตรงสำหรับผู้เล่นมือใหม่",
  keywords:
    "บทความป๊อกเด้งออนไลน์, ป๊อกเด้ง 2 ใบเปิด, กติกาป๊อกเด้ง, บาคาร่าเว็บตรง, EZPOK168",
  alternates: { canonical: "/seo/pokdeng-hub" },
  openGraph: {
    title: "รวมบทความป๊อกเด้งออนไลน์ 2 ใบเปิด",
    description: "อ่านกติกา วิธีเล่น ความเสี่ยง และแนวทางจัดการงบประมาณก่อนเริ่มใช้งาน",
    url: "/seo/pokdeng-hub",
    siteName: "EZPOK168",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/pok11.webp", width: 1200, height: 630 }],
  },
};

export default function PokdengHubPage() {
  return <PokdengHubClient />;
}
