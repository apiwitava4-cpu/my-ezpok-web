import type { Metadata } from "next";
import PokdengHubClient from "./PokdengHubClient";

export const metadata: Metadata = {
  title: "วิธีเล่นป๊อกเด้ง กติกาแบบไทยดั้งเดิมและสากล อัตราจ่ายครบจบ | EZPOK168",
  description:
    "เปรียบเทียบป๊อกเด้งแบบไทยดั้งเดิม (ไพ่ปิด/ผลัดเจ้า) กับสากล 2 ใบเปิด (Open Card) พร้อมตารางอัตราจ่ายครบทุกมือ ป๊อก9 ป๊อก8 เด้ง ไพ่ตอง ไพ่เรียง และข้อได้เปรียบ EZPOK168 ที่เล่นได้ทั้งเจ้าและขา",
  keywords:
    "วิธีเล่นป๊อกเด้ง, กติกาป๊อกเด้ง, ป๊อกเด้งไทยดั้งเดิม, ป๊อกเด้งสากล, ป๊อกเด้ง2ใบเปิด, อัตราจ่ายป๊อกเด้ง, เจ้าและขา, เจ้ามือ, ป๊อก9, ป๊อก8, ไพ่ตอง, ไพ่เรียง, EZPOK168",
  alternates: { canonical: "https://www.ezpok168.net/seo/pokdeng-hub" },
  openGraph: {
    title: "วิธีเล่นป๊อกเด้ง กติกาแบบไทยดั้งเดิมและสากล อัตราจ่ายครบจบ | EZPOK168",
    description:
      "คู่มือป๊อกเด้งฉบับใหม่ 2026 — ไทยดั้งเดิม vs สากล 2 ใบเปิด อัตราจ่ายครบ เล่นได้ทั้งเจ้าและขาที่ EZPOK168",
    url: "https://www.ezpok168.net/seo/pokdeng-hub",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ป๊อกเด้งแบบไทยดั้งเดิมต่างจากสากลอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้งแบบไทยดั้งเดิมใช้ไพ่ปิด ผู้เล่นสลับเป็นเจ้ามือ (ผลัดเจ้า) ทุกรอบ ส่วนแบบสากล 2 ใบเปิด (Open Card) ทุกฝ่ายเปิดไพ่ให้เห็นทันที มีดีลเลอร์ประจำ เหมาะสำหรับการเล่นออนไลน์",
      },
    },
    {
      "@type": "Question",
      name: "อัตราจ่ายป๊อกเด้งมีอะไรบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ชนะธรรมดา 1:1 | ป๊อก8/ป๊อก9 ชนะทันที 1:1 | เด้ง1ดอก 1:1 | เด้ง2ดอก 1:2 | เด้ง3ดอก 1:3 | ไพ่เรียง(Straight) 1:3 | ไพ่ตอง(Triple) 1:5 อัตราจ่ายอาจแตกต่างกันตามแต่ละโต๊ะ",
      },
    },
    {
      "@type": "Question",
      name: "เล่นป๊อกเด้งในฐานะเจ้ามือได้หรือไม่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ที่ EZPOK168 ผู้เล่นสามารถเลือกเล่นได้ทั้งในฐานะเจ้ามือ (Dealer) ที่รับจ่ายเงินทุกขา และในฐานะลูกมือ (Player) ที่วางเดิมพันแข่งกับเจ้ามือ เป็นข้อได้เปรียบพิเศษที่หาไม่ได้จากทุกเว็บ",
      },
    },
    {
      "@type": "Question",
      name: "ป๊อกเด้ง 2 ใบเปิด (Open Card) คืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้ง 2 ใบเปิด คือรูปแบบที่ไพ่ 2 ใบแรกของทุกฝ่ายถูกเปิดให้เห็นตั้งแต่แรก ผู้เล่นจึงเห็นแต้มของเจ้ามือก่อนตัดสินใจขอไพ่ใบที่ 3 ช่วยให้ตัดสินใจได้มีข้อมูลมากขึ้นกว่าแบบดั้งเดิม",
      },
    },
    {
      "@type": "Question",
      name: "ไพ่ตองในป๊อกเด้งจ่ายเท่าไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไพ่ตอง (Triple) คือไพ่ 3 ใบที่มีหน้าเดียวกัน เช่น K-K-K หรือ 7-7-7 จ่าย 5 เท่าของเดิมพัน ถือเป็นมือพิเศษสูงสุดในป๊อกเด้ง",
      },
    },
    {
      "@type": "Question",
      name: "ข้อดีของการเล่นป๊อกเด้งในฐานะเจ้ามือคืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เจ้ามือได้เปรียบเมื่อแต้มเสมอกับลูกมือ รับจ่ายเงินทุกขาพร้อมกัน หากลูกมือหลายขาแพ้พร้อมกันได้รับเงินทุกขา ทำให้มีศักยภาพกำไรสูงกว่าการเล่นเป็นลูกมือ แต่ความเสี่ยงก็สูงกว่าด้วย",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "วิธีเล่นป๊อกเด้งออนไลน์ที่ EZPOK168",
  description: "ขั้นตอนการเล่นป๊อกเด้งออนไลน์ 2 ใบเปิด ตั้งแต่สมัครจนถึงรับเงินรางวัล",
  step: [
    { "@type": "HowToStep", position: 1, name: "สมัครสมาชิก", text: "ติดต่อแอดมิน EZPOK168 ผ่าน LINE เพื่อสมัครและรับข้อมูลล็อกอิน" },
    { "@type": "HowToStep", position: 2, name: "เลือกโต๊ะและฝั่ง", text: "เลือกว่าจะเล่นเป็นเจ้ามือหรือลูกมือ เลือกขนาดโต๊ะที่เหมาะกับงบประมาณ" },
    { "@type": "HowToStep", position: 3, name: "วางเดิมพัน", text: "เลือกจำนวนเงินเดิมพันในแต่ละขา สามารถแทงได้หลายขาพร้อมกัน" },
    { "@type": "HowToStep", position: 4, name: "รับไพ่และตัดสินใจ", text: "รับไพ่ 2 ใบเปิด ดูแต้มของทุกฝ่าย ตัดสินใจขอไพ่ใบที่ 3 หากแต้มต่ำกว่า 5" },
    { "@type": "HowToStep", position: 5, name: "รับเงินรางวัล", text: "ฝ่ายแต้มสูงกว่าชนะ รับเงินตามอัตราจ่าย ชนะธรรมดา 1:1 ไพ่ตองสูงสุด 1:5" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "วิธีเล่นป๊อกเด้ง กติกาแบบไทยดั้งเดิมและสากล อัตราจ่ายครบจบ",
  author: { "@type": "Organization", name: "EZPOK168", url: "https://www.ezpok168.net" },
  publisher: {
    "@type": "Organization",
    name: "EZPOK168",
    logo: { "@type": "ImageObject", url: "https://www.ezpok168.net/NEWLOGOBANNER_poster.webp" },
  },
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  description:
    "เปรียบเทียบป๊อกเด้งแบบไทยดั้งเดิมและสากล 2 ใบเปิด พร้อมตารางอัตราจ่ายครบทุกมือ และข้อได้เปรียบ EZPOK168 ที่เล่นได้ทั้งเจ้าและขา",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.ezpok168.net/seo/pokdeng-hub" },
  wordCount: 2200,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: "https://www.ezpok168.net/" },
    { "@type": "ListItem", position: 2, name: "บทความป๊อกเด้ง", item: "https://www.ezpok168.net/seo/pokdeng-hub" },
  ],
};

export default function PokdengHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PokdengHubClient />
    </>
  );
}
