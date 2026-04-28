import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle, Trophy, HelpCircle, Star,
  PlayCircle, Gamepad2, BookOpen, AlertTriangle, Info,
  Target, ShieldCheck, Sparkles, Users, Banknote, ArrowRight,
  Clock, BarChart2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ป๊อกเด้งออนไลน์คืออะไร? กติกา วิธีเล่น ไพ่พิเศษ ครบจบในที่เดียว | EZPOK168",
  description:
    "คู่มือ ป๊อกเด้งออนไลน์ ฉบับสมบูรณ์ 2026 ครอบคลุมกติกา วิธีนับแต้ม ไพ่พิเศษ ป๊อก8 ป๊อก9 เด้ง ไพ่เรียง ไพ่ตอง ความแตกต่างกับบาคาร่า และแนวทางเล่นอย่างมีสติ",
  keywords:
    "ป๊อกเด้งออนไลน์, ป๊อกเด้งคืออะไร, กติกาป๊อกเด้ง, วิธีเล่นป๊อกเด้ง, ป๊อก9, ป๊อก8, ไพ่เด้ง, ป๊อกเด้ง2ใบเปิด, บาคาร่าเว็บตรง, เว็บตรงไม่ผ่านเอเย่นต์, EZPOK168",
  alternates: { canonical: "https://www.ezpok168.net/seo/pokdeng" },
  openGraph: {
    title: "ป๊อกเด้งออนไลน์คืออะไร? กติกา วิธีเล่น ครบจบ | EZPOK168",
    description: "คู่มือป๊อกเด้งออนไลน์ฉบับสมบูรณ์ กติกา ไพ่พิเศษ วิธีนับแต้ม สำหรับผู้เล่นมือใหม่และมืออาชีพ",
    url: "https://www.ezpok168.net/seo/pokdeng",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ป๊อกเด้งออนไลน์คืออะไร? กติกา วิธีเล่น ไพ่พิเศษ ครบจบในที่เดียว",
  author: { "@type": "Organization", name: "EZPOK168", url: "https://www.ezpok168.net" },
  publisher: {
    "@type": "Organization",
    name: "EZPOK168",
    logo: { "@type": "ImageObject", url: "https://www.ezpok168.net/NEWLOGOBANNER_poster.webp" },
  },
  datePublished: "2026-04-18",
  dateModified: "2026-04-26",
  description: "คู่มือป๊อกเด้งออนไลน์ฉบับสมบูรณ์ กติกา การนับแต้ม ไพ่พิเศษ ป๊อก8 ป๊อก9 ไพ่ตอง ไพ่เรียง เด้ง ความแตกต่างกับบาคาร่า",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.ezpok168.net/seo/pokdeng" },
  wordCount: 1800,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "วิธีเล่นป๊อกเด้งออนไลน์ 2 ใบเปิด",
  description: "ขั้นตอนการเล่นป๊อกเด้งออนไลน์แบบ 2 ใบเปิดตั้งแต่ต้นจนจบ",
  step: [
    { "@type": "HowToStep", position: 1, name: "วางเดิมพัน", text: "เลือกจำนวนเงินเดิมพันในแต่ละขา สามารถแทงได้หลายขาพร้อมกัน" },
    { "@type": "HowToStep", position: 2, name: "รับไพ่", text: "เจ้ามือแจกไพ่ 2 ใบให้แต่ละฝ่าย ในรูปแบบ 2 ใบเปิด ไพ่ทุกใบมองเห็นได้ทันที" },
    { "@type": "HowToStep", position: 3, name: "ตัดสินใจขอไพ่ใบที่ 3", text: "หากแต้มรวมต่ำกว่า 5 สามารถขอไพ่ใบที่ 3 ได้ หากแต้ม 6–9 แนะนำให้หยุด" },
    { "@type": "HowToStep", position: 4, name: "เปิดไพ่และตัดสินผล", text: "ฝ่ายที่แต้มสูงกว่าชนะ หากแต้มเท่ากันถือเป็น เสมอ (push) ไม่ได้ไม่เสียเงิน" },
    { "@type": "HowToStep", position: 5, name: "รับเงินรางวัล", text: "ชนะธรรมดารับ 1 เท่า เด้งรับ 1–3 เท่า ไพ่เรียงรับ 3 เท่า ไพ่ตองรับ 5 เท่า" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ป๊อกเด้งออนไลน์คืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้งออนไลน์คือเกมไพ่ไทยที่นำมาเล่นผ่านอินเทอร์เน็ต โดยใช้ไพ่ป๊อกเกอร์ 1 สำรับ (52 ใบ) ผู้เล่นแข่งแต้มกับเจ้ามือโดยตรง เป้าหมายคือให้ได้แต้มสูงสุด 9 แต้ม หรือใกล้ 9 มากที่สุด",
      },
    },
    {
      "@type": "Question",
      name: "ป๊อก 8 และป๊อก 9 คืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อก 9 คือการได้ไพ่ 2 ใบแรกรวมกันได้แต้ม 9 พอดี ถือเป็นมือสูงสุดในเกม ป๊อก 8 คือได้ 8 แต้มจากไพ่ 2 ใบแรก ทั้งคู่เป็นมือพิเศษที่ไม่สามารถขอไพ่เพิ่มได้และชนะไพ่ธรรมดาทั้งหมด",
      },
    },
    {
      "@type": "Question",
      name: "เด้งในป๊อกเด้งคืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เด้งคือการที่ไพ่ของผู้เล่นทุกใบเป็นดอกเดียวกัน (Flush) เช่น ไพ่โพธิ์ดำ 3 ใบ จะจ่ายเงินทวีคูณ: เด้ง 1 ดอก = จ่าย 1 เท่า, เด้ง 2 ดอก = จ่าย 2 เท่า, เด้ง 3 ดอก = จ่าย 3 เท่า",
      },
    },
    {
      "@type": "Question",
      name: "ป๊อกเด้งต่างจากบาคาร่าอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้งผู้เล่นแข่งแต้มกับเจ้ามือโดยตรงและมีโอกาสได้ไพ่พิเศษ (เด้ง, ไพ่เรียง, ไพ่ตอง) ที่จ่ายทวีคูณ บาคาร่าผู้เล่นทายว่าฝั่ง Player หรือ Banker ชนะ ไม่ได้แข่งแต้มโดยตรง",
      },
    },
    {
      "@type": "Question",
      name: "ป๊อกเด้ง 2 ใบเปิดคืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้ง 2 ใบเปิด (Open Card) คือรูปแบบที่ไพ่ 2 ใบแรกของทุกฝ่ายถูกเปิดให้เห็นได้ทันทีตั้งแต่แรก ช่วยให้ผู้เล่นตัดสินใจขอไพ่ใบที่ 3 ได้อย่างมีข้อมูลมากขึ้น",
      },
    },
    {
      "@type": "Question",
      name: "ไพ่ตองในป๊อกเด้งคืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไพ่ตอง (Triple) คือการได้ไพ่ 3 ใบที่มีหน้าเดียวกัน เช่น K สามใบ หรือ 7 สามใบ ถือเป็นมือสูงสุดในป๊อกเด้งและจ่ายเงิน 5 เท่าของเดิมพัน",
      },
    },
    {
      "@type": "Question",
      name: "ไพ่เรียง (Straight) ในป๊อกเด้งจ่ายเท่าไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไพ่เรียง (Straight) คือไพ่ 3 ใบที่มีเลขเรียงติดกัน เช่น 7-8-9 หรือ A-2-3 จ่ายเงิน 3 เท่าของเดิมพัน ถือเป็นมือพิเศษที่ให้รางวัลสูงกว่าไพ่ธรรมดา",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: "https://www.ezpok168.net/" },
    { "@type": "ListItem", position: 2, name: "ป๊อกเด้ง", item: "https://www.ezpok168.net/seo/pokdeng" },
  ],
};

export default function PokdengSeoArticle() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden relative text-gray-200 font-sans pb-20"
      style={{ backgroundColor: "#0D0514" }}
      id="top"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08]"
          style={{ backgroundColor: "#D4AF37" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08]"
          style={{ backgroundColor: "#A855F7" }} />
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-40 shadow-md w-full"
        style={{ backgroundColor: "rgba(13,5,20,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors no-underline shrink-0 group"
            style={{ color: "#D4AF37" }}>
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <span className="font-bold text-base md:text-xl tracking-tight text-white shrink-0">
            EZPOK168{" "}
            <span style={{ background: "linear-gradient(135deg, #D4AF37, #FFE566)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KNOWLEDGE
            </span>
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10 flex flex-col items-center">

        {/* Hero Banner */}
        <div className="w-full rounded-3xl overflow-hidden mb-10 relative group"
          style={{ border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 10px 40px rgba(212,175,55,0.15)" }}>
          <div className="absolute inset-0 z-10"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)" }} />
          <img src="/pok9-bg.webp" alt="ป๊อกเด้งออนไลน์ EZPOK168" loading="eager" decoding="async"
            className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center p-8 text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 text-black font-extrabold text-xs md:text-sm"
              style={{ background: "linear-gradient(135deg, #FFE566, #D4AF37)", boxShadow: "0 0 20px rgba(212,175,55,0.5)" }}>
              <BookOpen className="w-4 h-4" /> อัปเดต 2026 — คู่มือฉบับสมบูรณ์
            </span>
            <h1
              className="text-3xl md:text-6xl mb-4 font-bold tracking-wider"
              style={{
                background: "linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontFamily: "'B2SIGN', 'Charm', cursive",
                lineHeight: "1.4",
              }}
            >
              ป๊อกเด้งออนไลน์
              <br className="hidden md:block" />
              กติกา &amp; วิธีเล่นฉบับสมบูรณ์
            </h1>
            <p className="text-gray-300 text-sm md:text-lg font-medium max-w-2xl hidden md:block px-4 py-2 rounded-xl"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.07)" }}>
              ตั้งแต่กติกาพื้นฐาน ไพ่พิเศษ จนถึงแนวทางการเล่นอย่างมีสติ — <strong>EZPOK168</strong>
            </p>
          </div>
        </div>

        {/* Quick Nav */}
        <nav className="w-full mb-8 p-4 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <p className="text-xs text-gray-500 mb-3 font-bold uppercase tracking-widest">สารบัญ</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "ป๊อกเด้งคืออะไร", href: "#intro" },
              { label: "วิธีเล่น Step-by-Step", href: "#howto" },
              { label: "นับแต้มไพ่", href: "#counting" },
              { label: "ไพ่พิเศษ & อัตราจ่าย", href: "#special" },
              { label: "vs บาคาร่า", href: "#vs" },
              { label: "เล่นอย่างมีสติ", href: "#responsible" },
              { label: "FAQ", href: "#faq" },
            ].map((nav) => (
              <a key={nav.href} href={nav.href}
                className="text-xs px-3 py-1.5 rounded-lg no-underline font-medium transition-opacity hover:opacity-70"
                style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>
                {nav.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Article */}
        <article
          className="p-6 md:p-10 rounded-3xl leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left"
          style={{ background: "rgba(17,17,17,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 0 30px rgba(0,0,0,0.8)" }}
        >
          {/* Executive Summary */}
          <div className="flex items-start gap-4 mb-8 p-5 rounded-r-2xl w-full max-w-4xl text-left"
            style={{ background: "rgba(212,175,55,0.06)", borderLeft: "4px solid #D4AF37", borderRadius: "0 1rem 1rem 0" }}>
            <BookOpen className="w-7 h-7 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
            <p className="text-sm md:text-base text-gray-300 font-medium">
              <strong>บทสรุป:</strong> ป๊อกเด้งออนไลน์คือเกมไพ่ไทยแท้ที่ผู้เล่นแข่งแต้มกับเจ้ามือโดยตรง
              คู่มือนี้ครอบคลุม กติกา วิธีนับแต้ม ไพ่พิเศษทุกประเภท ขั้นตอนการเล่น และเปรียบเทียบกับบาคาร่า
              — อ่านจบรู้เรื่องพร้อมเล่นทันที
            </p>
          </div>

          {/* Section 1: ป๊อกเด้งคืออะไร */}
          <section id="intro" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#D4AF37" }}>
              <Gamepad2 className="w-8 h-8 shrink-0" /> ป๊อกเด้งออนไลน์คืออะไร?
            </h2>

            <p className="mb-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <strong className="text-white">ป๊อกเด้ง</strong> (Pokdeng) เป็นเกมไพ่พื้นบ้านของไทยที่มีมาหลายร้อยปี
              ใช้ไพ่ป๊อกเกอร์มาตรฐาน 1 สำรับ (52 ใบ) ผู้เล่นแต่ละคนแข่งแต้มกับ<strong className="text-white">เจ้ามือ</strong>โดยตรง
              เป้าหมายคือให้ได้แต้มรวม <strong style={{ color: "#D4AF37" }}>9 แต้ม (ป๊อก 9)</strong> หรือใกล้ 9 มากที่สุด
            </p>

            <p className="mb-4 text-gray-300 leading-relaxed">
              ในยุคดิจิทัล <strong className="text-white">ป๊อกเด้งออนไลน์</strong> ถูกพัฒนาให้เล่นได้ผ่านเว็บและแอปพลิเคชัน
              มีทั้งแบบ Live Dealer ที่มีดีลเลอร์จริงและแบบ RNG ที่ระบบคำนวณผลอัตโนมัติ
              ปัจจุบันเป็นหนึ่งในเกมที่ได้รับความนิยมสูงสุดในกลุ่มเกมไพ่ไทย
            </p>

            <p className="mb-6 text-gray-300 leading-relaxed">
              รูปแบบ <strong className="text-white">ป๊อกเด้ง 2 ใบเปิด</strong> (Open Card) ที่นิยมในปัจจุบัน
              คือการที่ไพ่ 2 ใบแรกของทุกฝ่ายถูกเปิดเผยให้เห็นพร้อมกัน
              ผู้เล่นจึงสามารถตัดสินใจขอไพ่ใบที่ 3 ได้อย่างมีข้อมูลมากขึ้น
              ต่างจากป๊อกเด้งแบบดั้งเดิมที่ไพ่คว่ำ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-2">
              <div className="p-5 rounded-2xl flex items-start gap-3"
                style={{ background: "linear-gradient(160deg, rgba(50,50,50,0.4), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <ShieldCheck className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-bold text-white mb-1">เจ้ามือ (Dealer)</p>
                  <p className="text-sm text-gray-400">ผู้แจกไพ่ รับจ่ายเงินทุกขา มีข้อได้เปรียบที่ชนะเมื่อแต้มเสมอ</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl flex items-start gap-3"
                style={{ background: "linear-gradient(160deg, rgba(50,50,50,0.4), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Users className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-bold text-white mb-1">ลูกมือ / ขา (Player)</p>
                  <p className="text-sm text-gray-400">วางเดิมพันแข่งกับเจ้ามือ สามารถเล่นได้หลายขาพร้อมกัน</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: วิธีเล่น Step-by-Step */}
          <section id="howto" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <PlayCircle className="w-8 h-8 text-green-400 shrink-0" /> วิธีเล่นป๊อกเด้งออนไลน์ Step-by-Step
            </h2>

            <div className="flex flex-col gap-4 w-full">
              {[
                {
                  step: "1",
                  title: "วางเดิมพัน",
                  desc: "เลือกจำนวนเงินเดิมพันในแต่ละขา บนเว็บออนไลน์สามารถกดปุ่มเลือกขนาดชิปได้ทันที และสามารถแทงหลายขาพร้อมกันได้",
                  color: "#D4AF37",
                },
                {
                  step: "2",
                  title: "รับไพ่ 2 ใบ",
                  desc: "เจ้ามือแจกไพ่ 2 ใบให้ทุกฝ่ายพร้อมกัน ในแบบ 2 ใบเปิด ไพ่ทุกใบจะเปิดหน้าให้เห็นทันที ทั้งไพ่เจ้ามือและลูกมือ",
                  color: "#22c55e",
                },
                {
                  step: "3",
                  title: "ตัดสินใจขอไพ่ใบที่ 3 (ถ้าต้องการ)",
                  desc: "ถ้าแต้มรวม 0–4 ควรขอไพ่เพิ่ม | ถ้าได้ 5 ขึ้นอยู่กับสถานการณ์ | ถ้าได้ 6–9 ให้หยุด | ถ้าได้ ป๊อก 8 หรือ ป๊อก 9 จบเกมทันทีโดยไม่ขอไพ่",
                  color: "#a855f7",
                },
                {
                  step: "4",
                  title: "เปิดไพ่และตัดสินผล",
                  desc: "เปรียบแต้มรวมของทุกฝ่ายกับเจ้ามือ ฝ่ายแต้มสูงกว่าชนะ หากแต้มเท่ากัน (push) ไม่ได้ไม่เสียเงิน ยกเว้นโต๊ะบางโต๊ะที่เจ้ามือชนะกรณีเสมอ",
                  color: "#f87171",
                },
                {
                  step: "5",
                  title: "รับเงินรางวัล",
                  desc: "ชนะธรรมดา = 1 เท่า | เด้ง 1–3 ดอก = 1–3 เท่า | ไพ่เรียง = 3 เท่า | ไพ่ตอง = 5 เท่า | ป๊อก 9 ชนะป๊อก 8 = จ่ายปกติ",
                  color: "#D4AF37",
                },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 p-5 rounded-2xl text-left"
                  style={{ background: "linear-gradient(160deg, rgba(30,30,30,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shrink-0 text-black"
                    style={{ background: s.color, minWidth: "2.5rem" }}>{s.step}</div>
                  <div>
                    <p className="font-bold text-white mb-1">{s.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: นับแต้ม */}
          <section id="counting" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <CheckCircle className="w-8 h-8 text-green-500 shrink-0" /> กติกาการนับแต้มไพ่
            </h2>

            <p className="mb-4 text-gray-300">
              วิธีนับแต้มป๊อกเด้งคล้าย<strong className="text-white">บาคาร่า</strong> โดยนำค่าของไพ่ทุกใบมาบวกกัน
              แล้วนับเฉพาะ<strong style={{ color: "#D4AF37" }}>หลักหน่วย</strong>:
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
              {[
                { label: "A", value: "= 1 แต้ม", color: "#D4AF37" },
                { label: "2 – 9", value: "= ตามหน้าไพ่", color: "#D4AF37" },
                { label: "10, J, Q, K", value: "= 0 แต้ม", color: "#f87171" },
              ].map((card, i) => (
                <div key={i} className="flex-1 p-5 rounded-2xl flex flex-col items-center text-center"
                  style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-3xl font-black text-white mb-2">{card.label}</span>
                  <p className="font-bold" style={{ color: card.color }}>{card.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 w-full text-left text-sm">
              {[
                { ex: "5 + 7 = 12", result: "→ นับเป็น 2 แต้ม" },
                { ex: "K + Q = 0", result: "→ นับเป็น 0 แต้ม (บาปอง)" },
                { ex: "9 + A = 10", result: "→ นับเป็น 0 แต้ม" },
              ].map((ex, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-white font-mono font-bold">{ex.ex}</p>
                  <p className="text-gray-400 mt-1">{ex.result}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl w-full text-left text-gray-300 text-sm md:text-base"
              style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}>
              <strong style={{ color: "#D4AF37" }}>💡 หลักจำง่าย:</strong>{" "}
              ผลรวมเกิน 9 ให้ดูเฉพาะหลักหน่วย เช่น 15 → 5 แต้ม, 10 → 0 แต้ม (บาปอง), 19 → 9 แต้ม
            </div>
          </section>

          {/* Section 4: ไพ่พิเศษ */}
          <section id="special" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Star className="w-8 h-8 text-purple-400 shrink-0" /> ไพ่พิเศษ และอัตราการจ่ายเงิน
            </h2>

            <p className="mb-6 text-gray-300">
              จุดเด่นของป๊อกเด้งที่ต่างจากเกมไพ่อื่นคือ<strong className="text-white">ระบบไพ่พิเศษ</strong>ที่จ่ายเงินทวีคูณ:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 w-full">
              {[
                {
                  title: "ป๊อก 9 (Pok 9)",
                  tag: "สูงสุด",
                  tagColor: "#dc2626",
                  color: "rgba(220,38,38,0.12)",
                  border: "rgba(220,38,38,0.4)",
                  desc: "ไพ่ 2 ใบแรกรวมกันได้ 9 แต้มพอดี เป็นมือสูงสุดในเกม ชนะทุกมือยกเว้นป๊อก 9 เท่ากัน",
                  icon: <Trophy className="w-5 h-5 text-red-400" />,
                  payout: "ชนะทันที",
                },
                {
                  title: "ป๊อก 8 (Pok 8)",
                  tag: "สูงมาก",
                  tagColor: "#ea580c",
                  color: "rgba(234,88,12,0.12)",
                  border: "rgba(234,88,12,0.4)",
                  desc: "ไพ่ 2 ใบแรกรวมกันได้ 8 แต้มพอดี ชนะไพ่ธรรมดาทุกมือ แพ้เฉพาะป๊อก 9 เท่านั้น",
                  icon: <Star className="w-5 h-5 text-orange-400" />,
                  payout: "ชนะทันที",
                },
                {
                  title: "ไพ่ตอง (Triple)",
                  tag: "x5",
                  tagColor: "#D4AF37",
                  color: "rgba(212,175,55,0.10)",
                  border: "rgba(212,175,55,0.3)",
                  desc: "ไพ่ 3 ใบมีหน้าเดียวกันทั้งหมด เช่น K-K-K หรือ 7-7-7 ถือเป็นมือพิเศษสูงสุด ชนะแม้แต้มน้อยกว่า",
                  icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
                  payout: "จ่าย 5 เท่า",
                },
                {
                  title: "ไพ่เรียง (Straight)",
                  tag: "x3",
                  tagColor: "#7c3aed",
                  color: "rgba(124,58,237,0.12)",
                  border: "rgba(124,58,237,0.4)",
                  desc: "ไพ่ 3 ใบที่มีเลขเรียงต่อกัน เช่น A-2-3 หรือ 7-8-9 ไม่จำเป็นต้องดอกเดียวกัน",
                  icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
                  payout: "จ่าย 3 เท่า",
                },
                {
                  title: "เด้ง 3 ดอก",
                  tag: "x3",
                  tagColor: "#22c55e",
                  color: "rgba(34,197,94,0.10)",
                  border: "rgba(34,197,94,0.3)",
                  desc: "ไพ่ทั้ง 3 ใบเป็นดอกเดียวกัน เช่น ♠♠♠ หรือ ♥♥♥ (Flush สมบูรณ์)",
                  icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                  payout: "จ่าย 3 เท่า",
                },
                {
                  title: "เด้ง 1–2 ดอก",
                  tag: "x1–x2",
                  tagColor: "#0ea5e9",
                  color: "rgba(14,165,233,0.10)",
                  border: "rgba(14,165,233,0.3)",
                  desc: "ไพ่ 1 หรือ 2 ใบเป็นดอกเดียวกัน จ่ายทวีคูณตามจำนวนดอกที่ตรงกัน",
                  icon: <CheckCircle className="w-5 h-5 text-sky-400" />,
                  payout: "จ่าย 1–2 เท่า",
                },
              ].map((card, i) => (
                <div key={i} className="p-5 rounded-2xl relative overflow-hidden text-left"
                  style={{ background: `linear-gradient(160deg, ${card.color}, rgba(0,0,0,0.9))`, border: `1px solid ${card.border}` }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white flex items-center gap-2">{card.icon} {card.title}</h4>
                    <span className="text-white text-xs font-bold px-2 py-1 rounded-lg" style={{ background: card.tagColor }}>{card.tag}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{card.desc}</p>
                  <p className="text-xs font-bold" style={{ color: card.tagColor }}>อัตราจ่าย: {card.payout}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl w-full text-left text-sm" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-gray-400"><strong className="text-white">หมายเหตุ:</strong> อัตราการจ่ายอาจแตกต่างกันตามแต่ละโต๊ะและเงื่อนไขของแพลตฟอร์ม ควรตรวจสอบกฎของโต๊ะก่อนเล่นทุกครั้ง</p>
            </div>
          </section>

          {/* Section 5: ป๊อกเด้ง vs บาคาร่า */}
          <section id="vs" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Target className="w-8 h-8 text-blue-400 shrink-0" /> ป๊อกเด้ง vs บาคาร่า ต่างกันอย่างไร?
            </h2>

            <div className="overflow-x-auto w-full mb-4">
              <table className="w-full text-sm text-left" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr style={{ background: "rgba(212,175,55,0.1)" }}>
                    {["หัวข้อ", "ป๊อกเด้ง", "บาคาร่า"].map((h, i) => (
                      <th key={i} className="px-4 py-3 font-bold text-white" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["สไตล์การเล่น", "แข่งแต้มกับเจ้ามือโดยตรง", "ทายว่าฝั่งไหนชนะ"],
                    ["ผู้เล่นมีอิทธิพล", "ใช่ (เลือกขอไพ่ได้)", "น้อยมาก (กฎตายตัว)"],
                    ["ไพ่พิเศษ", "ป๊อก / เด้ง / ตอง / เรียง", "ไม่มี"],
                    ["เงินรางวัลทวีคูณ", "สูงสุด 5 เท่า", "1–8 เท่า (Tie)"],
                    ["ความเร็วเกม", "เร็วมาก", "เร็ว"],
                    ["สำหรับใคร", "ชอบเกมที่มีการตัดสินใจ", "ชอบเกมที่ง่ายและรวดเร็ว"],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.15)" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-gray-300" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                          {j === 0 ? <strong className="text-white">{cell}</strong> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: เล่นอย่างมีสติ */}
          <section id="responsible" className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <ShieldCheck className="w-8 h-8 text-yellow-400 shrink-0" /> แนวทางการเล่นป๊อกเด้งอย่างมีสติ
            </h2>

            <div className="w-full mb-6 p-5 rounded-2xl flex items-start gap-3"
              style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.3)" }}>
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300 text-left">
                <strong className="text-yellow-400">คำเตือนสำคัญ:</strong>{" "}
                การพนันทุกประเภทมีความเสี่ยง ไม่มีระบบหรือ "สูตร" ใดที่รับประกันกำไร 100%
                ควรกำหนดงบประมาณล่วงหน้าและเล่นเพื่อความบันเทิงเท่านั้น
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {[
                {
                  icon: <Banknote className="w-6 h-6 text-green-400" />,
                  title: "กำหนดงบประมาณ",
                  desc: "ตัดสินใจวงเงินสูงสุดก่อนเริ่มและหยุดทันทีเมื่อถึงขีดจำกัด ทั้งกรณีแพ้และชนะ",
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-blue-400" />,
                  title: "เข้าใจกติกาก่อน",
                  desc: "อ่านกฎของโต๊ะและอัตราจ่ายให้ครบก่อนวางเดิมพัน แต่ละโต๊ะอาจมีเงื่อนไขต่างกัน",
                },
                {
                  icon: <Info className="w-6 h-6 text-yellow-400" />,
                  title: "เล่นเพื่อความสนุก",
                  desc: "มองการเล่นเป็นความบันเทิง เช่นเดียวกับการดูหนังหรือกีฬา ไม่ใช่วิธีสร้างรายได้",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl text-left"
                  style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: ข้อดีของป๊อกเด้ง 2 ใบเปิด */}
          <section className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Star className="w-8 h-8 text-yellow-400 shrink-0" /> ข้อดีของป๊อกเด้ง 2 ใบเปิด ที่ต้องรู้
            </h2>
            <p className="mb-6 text-gray-300">
              ทำไมผู้เล่นหลายคนสนใจ <strong className="text-white">ป๊อกเด้ง 2 ใบเปิด</strong>? มี 4 จุดเด่นหลักที่ทำให้รูปแบบนี้แตกต่าง:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-6">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-yellow-400" />,
                  title: "1. ความรวดเร็วในการจบรอบ",
                  desc: "ระบบ 2 ใบเปิดทำให้รอบเล่นกระชับขึ้น ดีลเลอร์แจกไพ่และเปิดผลทันที ผู้เล่นเข้าใจจังหวะของเกมได้ง่ายขึ้น แต่จำนวนรอบที่มากขึ้นหมายถึงความเสี่ยงสะสมที่ต้องควบคุม",
                },
                {
                  icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
                  title: "2. เห็นข้อมูลก่อนตัดสินใจ",
                  desc: "เมื่อไพ่ทุกใบเปิดหน้า ผู้เล่นสามารถเห็นแต้มของเจ้ามือก่อนตัดสินใจขอไพ่ใบที่ 3 ช่วยให้ตัดสินใจได้อย่างมีข้อมูลมากกว่าการเล่นแบบปิด",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                  title: "3. อัตราจ่ายทวีคูณตามกติกา",
                  desc: "แม้กติกาจะเหลือ 2 ใบ จุดเด่นของป๊อกเด้งยังอยู่ที่ไพ่พิเศษ (เด้ง, ไพ่ตอง, ไพ่เรียง) ที่จ่ายทวีคูณ ต้องตรวจสอบกติกาโต๊ะก่อนเล่นทุกครั้ง",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
                  title: "4. ความโปร่งใสของแพลตฟอร์ม",
                  desc: "การเลือกเล่นควรดูความชัดเจนของกติกา ช่องทางติดต่อ และเงื่อนไขโปรโมชัน EZPOK168 เน้นให้ผู้เล่นอ่านรายละเอียดก่อนเริ่มใช้งาน",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl text-left"
                  style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-2 mb-3">{item.icon}<h4 className="font-bold text-white">{item.title}</h4></div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl text-left" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}>
              <p className="text-sm text-gray-300">
                <strong style={{ color: "#D4AF37" }}>สรุป:</strong>{" "}
                <strong>ป๊อกเด้ง 2 ใบเปิด</strong> เหมาะกับผู้ที่ชอบเกมจบรอบเร็ว อยากเห็นข้อมูลก่อนตัดสินใจ และรับความผันผวนของอัตราจ่ายทวีคูณได้ ควรตั้งวงเงินก่อนเริ่มทุกครั้ง
              </p>
            </div>
          </section>

          {/* Section 8: วิธีจัดการงบประมาณ */}
          <section className="w-full max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Banknote className="w-8 h-8 text-green-400 shrink-0" /> วิธีจัดการงบประมาณป๊อกเด้งออนไลน์ให้อยู่หมัด
            </h2>
            <p className="mb-5 text-gray-300">
              ทักษะสำคัญที่สุดในการเล่น <strong className="text-white">ป๊อกเด้งออนไลน์</strong> ไม่ใช่การอ่านไพ่ แต่คือการ<strong className="text-white">จัดการงบประมาณ</strong>:
            </p>
            <div className="flex flex-col gap-4 w-full">
              {[
                {
                  num: "1", color: "#D4AF37",
                  title: "ตั้งวงเงินก่อนเริ่มทุกครั้ง",
                  desc: "กำหนดทั้งวงเงินสูงสุดต่อรอบและต่อวันล่วงหน้า เมื่อถึงขีดจำกัดให้หยุดทันที ไม่ว่าจะชนะหรือแพ้ เพราะในเกมที่จบรอบเร็วความผันผวนสะสมได้รวดเร็ว",
                },
                {
                  num: "2", color: "#f87171",
                  title: "ไม่แทงทบเพื่อตามคืนยอดเสีย",
                  desc: "การแทงทบ (Martingale) ต้องการทุนสำรองมหาศาลและโต๊ะมีวงเงินสูงสุดต่อรอบ ทำให้ใช้ได้จริงไม่ได้ในระยะยาว ควรหยุดพักและกลับมาใหม่ในรอบถัดไปแทน",
                },
                {
                  num: "3", color: "#22c55e",
                  title: "แยกเงินเล่นออกจากเงินใช้จ่าย",
                  desc: "ใช้ยอดที่โอนเข้าระบบเฉพาะสำหรับการเล่น ไม่ปะปนกับบัญชีส่วนตัว เมื่อหมดยอดในระบบก็หยุด ไม่โอนเพิ่มจนกว่าจะถึงรอบถัดไปที่กำหนดไว้",
                },
                {
                  num: "4", color: "#a855f7",
                  title: "ตั้งเป้าหมายกำไรและหยุดเมื่อถึง",
                  desc: "นอกจากกำหนดวงเงินแพ้สูงสุดแล้ว ควรตั้งเป้าหมายกำไรด้วย เช่น ถ้าได้กำไร 30% ของทุนก็หยุด ป้องกันการเสียคืนซึ่งเกิดขึ้นบ่อยในเกมที่จบรอบเร็ว",
                },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-4 p-5 rounded-2xl text-left"
                  style={{ background: "linear-gradient(160deg, rgba(30,30,30,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shrink-0 text-black"
                    style={{ background: s.color, minWidth: "2.5rem" }}>{s.num}</div>
                  <div>
                    <p className="font-bold text-white mb-1">{s.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="w-full max-w-4xl mb-10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" style={{ color: "#D4AF37" }} /> บทความที่เกี่ยวข้อง
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/seo/thai-lottery",
                  title: "หวยไทย & ตรวจหวยออนไลน์",
                  desc: "ผลหวยไทยล่าสุด พร้อมวิธีตรวจและแทงหวย",
                  color: "#22c55e",
                },
                {
                  href: "/seo/lao-lottery",
                  title: "หวยลาวพัฒนา ผลล่าสุด",
                  desc: "ตรวจผลหวยลาวแม่นยำ พร้อมแนวทางแทงหวย",
                  color: "#a855f7",
                },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="p-4 rounded-2xl no-underline flex flex-col gap-2 transition-transform hover:-translate-y-1"
                  style={{ background: "rgba(0,0,0,0.5)", border: `1px solid rgba(255,255,255,0.07)` }}>
                  <span className="font-bold text-sm" style={{ color: link.color }}>{link.title}</span>
                  <span className="text-xs text-gray-500">{link.desc}</span>
                  <span className="flex items-center gap-1 text-xs mt-1" style={{ color: link.color }}>
                    อ่านต่อ <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="mt-6 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden w-full max-w-4xl"
            style={{ background: "linear-gradient(135deg, #1A0B2E, #000)", border: "1px solid rgba(212,175,55,0.35)", boxShadow: "0 15px 50px rgba(212,175,55,0.12)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
            <h3 className="font-extrabold text-3xl md:text-4xl text-white mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h3>
            <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              ติดต่อแอดมินเพื่อสอบถามเงื่อนไขและสมัครใช้งาน{" "}
              <strong style={{ color: "#D4AF37" }}>ป๊อกเด้งออนไลน์</strong> บน EZPOK168
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer noopener"
                className="btn-line px-10 py-4 text-base md:text-lg no-underline">
                ติดต่อแอดมิน 24 ชม.
              </a>
              <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
                className="btn-primary px-10 py-4 text-base md:text-lg no-underline pulse-gold">
                <PlayCircle className="w-6 h-6 fill-black" /> สมัครสมาชิก
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-4">⚠️ สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section id="faq"
          className="mt-12 p-6 md:p-12 rounded-3xl w-full flex flex-col items-center md:items-start"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 pb-4 w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <HelpCircle className="w-8 h-8 shrink-0" style={{ color: "#D4AF37" }} />
            <h2 className="font-bold text-2xl md:text-3xl text-white">
              คำถามที่พบบ่อย (FAQ)
            </h2>
          </div>

          <div className="space-y-3 w-full max-w-4xl">
            {[
              {
                q: "ป๊อกเด้งออนไลน์คืออะไร?",
                a: "ป๊อกเด้งออนไลน์คือเกมไพ่ไทยที่เล่นผ่านอินเทอร์เน็ต ใช้ไพ่ 1 สำรับ 52 ใบ ผู้เล่นแข่งแต้มกับเจ้ามือโดยตรง เป้าหมายคือให้ได้แต้มสูงสุด 9 (ป๊อก 9) หรือใกล้ 9 มากที่สุด มีระบบไพ่พิเศษ (เด้ง, ป๊อก, ตอง, เรียง) ที่จ่ายเงินทวีคูณ",
                open: true,
              },
              {
                q: "ป๊อก 8 และป๊อก 9 ต่างกันอย่างไร?",
                a: "ป๊อก 9 คือไพ่ 2 ใบแรกรวมได้ 9 แต้มพอดี เป็นมือสูงสุดในเกม ป๊อก 8 คือได้ 8 แต้มจาก 2 ใบแรก ชนะไพ่ธรรมดาทุกมือแต่แพ้ป๊อก 9 ทั้งคู่หยุดเกมทันทีโดยไม่ขอไพ่เพิ่ม",
              },
              {
                q: "เด้งในป๊อกเด้งคืออะไร? จ่ายเท่าไร?",
                a: "เด้งคือการที่ไพ่ของผู้เล่นทุกใบเป็นดอกเดียวกัน (Flush): เด้ง 1 ดอก = จ่าย 1 เท่า, เด้ง 2 ดอก = จ่าย 2 เท่า, เด้ง 3 ดอก = จ่าย 3 เท่า ไพ่ตอง (3 ใบหน้าเดียวกัน) = จ่าย 5 เท่า",
              },
              {
                q: "ป๊อกเด้งต่างจากบาคาร่าอย่างไร?",
                a: "ป๊อกเด้งผู้เล่นแข่งแต้มกับเจ้ามือโดยตรงและมีสิทธิ์ขอไพ่ใบที่ 3 บาคาร่าผู้เล่นทายว่าฝั่ง Player หรือ Banker ชนะ กฎการจั่วไพ่เป็นอัตโนมัติ ป๊อกเด้งมีไพ่พิเศษที่จ่ายทวีคูณสูงกว่า",
              },
              {
                q: "ป๊อกเด้ง 2 ใบเปิดคืออะไร?",
                a: "ป๊อกเด้ง 2 ใบเปิด (Open Card) คือรูปแบบที่ไพ่ 2 ใบแรกของทุกฝ่ายเปิดหน้าให้เห็นทันที ต่างจากป๊อกเด้งดั้งเดิมที่ไพ่คว่ำ ช่วยให้ผู้เล่นตัดสินใจได้อย่างมีข้อมูลมากขึ้น",
              },
              {
                q: "ควรขอไพ่ใบที่ 3 เมื่อไร?",
                a: "แนวทางทั่วไป: 0–4 แต้ม = ควรขอไพ่เพิ่ม | 5 แต้ม = ดูสถานการณ์ | 6–9 แต้ม = ควรหยุด อย่างไรก็ตามไม่มีกฎตายตัวที่รับประกันผลลัพธ์ ควรอิงจากแต้มที่เห็นของเจ้ามือด้วย",
              },
              {
                q: "สมัครเล่นป๊อกเด้งออนไลน์ที่ EZPOK168 อย่างไร?",
                a: "ติดต่อแอดมิน EZPOK168 ผ่าน LINE ได้ตลอด 24 ชม. แอดมินจะแนะนำขั้นตอนและเงื่อนไขการสมัครให้ครบก่อนเริ่มใช้งาน",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="cursor-pointer rounded-2xl overflow-hidden"
                open={item.open}
                style={{ background: "linear-gradient(160deg, rgba(18,10,35,0.9), rgba(5,3,14,0.95))", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <summary className="font-bold text-gray-200 text-sm md:text-base flex justify-between items-center outline-none px-6 py-4 hover:bg-white/[0.02] transition-colors list-none">
                  <span>{item.q}</span>
                  <span className="text-gray-500 shrink-0 ml-4">▾</span>
                </summary>
                <p className="px-6 pb-5 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 mt-12 text-center text-xs w-full flex flex-col items-center"
        style={{ background: "#040108", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="font-bold mb-2 text-sm" style={{ color: "#D4AF37" }}>
          สงวนลิขสิทธิ์ &copy; 2026 EZPOK168.NET
        </p>
        <p className="max-w-3xl mx-auto px-4 text-gray-600">
          ศูนย์รวมความรู้ <strong>ป๊อกเด้งออนไลน์</strong> กติกา วิธีเล่น ไพ่พิเศษ และ <strong>บาคาร่าเว็บตรง</strong>
          <br />
          <strong>สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</strong>
        </p>
      </footer>
    </div>
  );
}
