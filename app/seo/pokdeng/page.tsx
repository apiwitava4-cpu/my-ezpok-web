import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle, Trophy, HelpCircle, Star,
  PlayCircle, Gamepad2, BookOpen, AlertTriangle, Info,
  Target, TrendingUp, LineChart, ShieldCheck, Sparkles, Users, Banknote,
} from "lucide-react";

// ✅ FIX: ลบ "สูตรทำเงิน / ทำกำไรได้จริง" ออกจาก title/description
export const metadata: Metadata = {
  title: "สอนเล่น ป๊อกเด้งออนไลน์ กติกา วิธีเล่น 2 ใบเปิด | EZPOK168",
  description:
    "คู่มือสอนเล่นป๊อกเด้งออนไลน์ 2 ใบเปิด อัปเดต 2026 อธิบายกติกา การนับแต้ม ไพ่พิเศษ ความแตกต่างระหว่างเจ้าและขา สำหรับผู้เล่นมือใหม่",
  keywords:
    "สอนเล่นป๊อกเด้ง, ป๊อกเด้งออนไลน์, กติกาป๊อกเด้ง, วิธีเล่นป๊อกเด้ง, บาคาร่าเว็บตรง, เว็บตรงไม่ผ่านเอเย่นต์, EZPOK168",
};

// ✅ FIX: ลบ claim "ถอนได้ไม่อั้น 100%" ออกจาก Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "สอนเล่นป๊อกเด้งออนไลน์ กติกาและวิธีเล่น 2 ใบเปิด",
  author: { "@type": "Organization", name: "EZPOK168" },
  publisher: {
    "@type": "Organization",
    name: "EZPOK168",
    logo: { "@type": "ImageObject", url: "https://www.ezpok168.net/logo.png" },
  },
  datePublished: "2026-04-18",
  description:
    "อธิบายกติกาป๊อกเด้งออนไลน์ 2 ใบเปิด การนับแต้ม ไพ่พิเศษ วิธีแทงเจ้าและขา สำหรับผู้เล่นมือใหม่",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ป๊อกเด้ง 2 ใบเปิดคืออะไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้ง 2 ใบเปิดคือรูปแบบที่ไพ่ 2 ใบแรกของแต่ละฝ่ายถูกเปิดให้เห็นได้ทันที ทำให้สามารถตัดสินใจได้ว่าจะหยุดหรือขอไพ่ใบที่ 3",
      },
    },
    {
      "@type": "Question",
      name: "เล่นเจ้าและขาต่างกันอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เจ้ามือ (Dealer) คือผู้แจกไพ่และรับจ่ายเงินเดิมพัน ส่วนขา (Player) คือผู้วางเดิมพันแข่งกับเจ้ามือ เว็บ EZPOK168 ให้เล่นได้ทั้งสองฝ่าย",
      },
    },
    {
      "@type": "Question",
      name: "ป๊อกเด้งต่างจากบาคาร่าอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ป๊อกเด้งผู้เล่นแข่งแต้มกับเจ้ามือโดยตรงและมีการเด้ง (จ่ายทวีคูณ) หากได้ไพ่ดอกเดียวกัน บาคาร่าเป็นแค่การทายว่าฝั่งไหนแต้มสูงกว่า",
      },
    },
  ],
};

// ✅ เพิ่ม BreadcrumbList Schema สำหรับ SEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "หน้าหลัก", "item": "https://www.ezpok168.net/" },
    { "@type": "ListItem", "position": 2, "name": "ป๊อกเด้ง", "item": "https://www.ezpok168.net/seo/pokdeng" },
    { "@type": "ListItem", "position": 3, "name": "สอนเล่น" }
  ]
};

export default function PokdengSeoArticle() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden relative text-gray-200 font-sans pb-20"
      style={{ backgroundColor: "#0D0514" }}
      id="top"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
          <video autoPlay muted loop playsInline poster="/pok11.webp"
            className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            aria-label="สอนเล่นป๊อกเด้งออนไลน์ EZPOK168">
            <source src="/pok9-bg.webm" type="video/webm" />
            <source src="/ezpok-bg.mp4" type="video/mp4" />
            <img src="/pok11.webp" alt="สอนเล่นป๊อกเด้งออนไลน์ EZPOK168" loading="eager" decoding="async" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center p-8 text-center">
            {/* ✅ FIX: ลบ "คลาสเรียนเซียนไพ่ VIP" → เปลี่ยนเป็น badge ที่ neutral กว่า */}
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 text-black font-extrabold text-xs md:text-sm"
              style={{ background: "linear-gradient(135deg, #FFE566, #D4AF37)", boxShadow: "0 0 20px rgba(212,175,55,0.5)" }}>
              <BookOpen className="w-4 h-4" /> คู่มือสำหรับมือใหม่ 2026
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
              สอนเล่น ป๊อกเด้งออนไลน์
              <br className="hidden md:block" />
              กติกา &amp; วิธีเล่นฉบับสมบูรณ์
            </h1>
            <p className="text-gray-300 text-sm md:text-lg font-medium max-w-2xl hidden md:block px-4 py-2 rounded-xl"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.07)" }}>
              เข้าใจกติกาก่อนเริ่มเล่น — <strong>บาคาร่าเว็บตรง</strong> EZPOK168
            </p>
          </div>
        </div>

        {/* Article */}
        <article
          className="p-6 md:p-10 rounded-3xl leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left"
          style={{ background: "rgba(17,17,17,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 0 30px rgba(0,0,0,0.8)" }}
        >

          {/* Executive summary */}
          <div className="flex items-start gap-4 mb-8 p-5 rounded-r-2xl w-full max-w-4xl text-left"
            style={{ background: "rgba(212,175,55,0.06)", borderLeft: "4px solid #D4AF37", borderRadius: "0 1rem 1rem 0" }}>
            <BookOpen className="w-7 h-7 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
            <p className="text-sm md:text-base text-gray-300 font-medium">
              <strong>บทสรุป:</strong> คู่มือนี้ครอบคลุมกติกาพื้นฐาน การนับแต้ม ไพ่พิเศษ
              และความแตกต่างระหว่างเจ้าและขา เหมาะสำหรับผู้เล่น <strong>ป๊อกเด้งออนไลน์</strong> มือใหม่ที่ต้องการเข้าใจก่อนเริ่มใช้งาน EZPOK168
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-10 font-medium max-w-4xl leading-relaxed">
            <strong>"ไพ่ป๊อกเด้ง"</strong> เป็นเกมไพ่ที่ใช้ทั้งดวงและการคำนวณ กติกาจบเร็วและมีลุ้นเด้งได้เงินทวีคูณ
            ปัจจุบันถูกพัฒนาเป็น <strong style={{ color: "#D4AF37" }}>ป๊อกเด้งออนไลน์</strong>{" "}
            บน <strong className="text-red-400">บาคาร่าเว็บตรง</strong> ที่เล่นได้ตลอด 24 ชม.
          </p>

          {/* Section 1: กติกาพื้นฐาน */}
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#D4AF37" }}>
            <Gamepad2 className="w-8 h-8 shrink-0" /> 1. สอนเล่น ป๊อกเด้งออนไลน์ คืออะไร?
          </h2>
          <p className="mb-4 text-gray-300 max-w-4xl">
            <strong>ป๊อกเด้ง</strong> ใช้ไพ่มาตรฐาน 1 สำรับ (52 ใบ ไม่รวมโจ๊กเกอร์) แบ่งผู้เล่นเป็น 2 ฝ่าย:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mb-8">
            <div className="p-5 rounded-2xl flex items-start gap-3 hover:-translate-y-1 transition-transform"
              style={{ background: "linear-gradient(160deg, rgba(50,50,50,0.4), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ShieldCheck className="w-6 h-6 text-red-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white mb-1">เจ้ามือ (Dealer)</p>
                <p className="text-sm text-gray-400">ผู้แจกไพ่และเป็นศูนย์กลางรับจ่ายเงินเดิมพัน</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl flex items-start gap-3 hover:-translate-y-1 transition-transform"
              style={{ background: "linear-gradient(160deg, rgba(50,50,50,0.4), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Users className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white mb-1">ลูกมือ / ขา (Player)</p>
                <p className="text-sm text-gray-400">ผู้วางเงินเดิมพัน (สามารถแทงหลายขาพร้อมกันได้)</p>
              </div>
            </div>
          </div>

          {/* Section 2: นับแต้ม */}
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <CheckCircle className="w-8 h-8 text-green-500 shrink-0" /> 2. กติกาการนับแต้มไพ่
          </h2>
          <p className="mb-6 text-gray-300 max-w-4xl">
            การนับแต้มคล้ายคลึงกับ <strong>บาคาร่าออนไลน์</strong> โดยประเมินค่าไพ่ดังนี้:
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl">
            {[
              { label: "A", value: "มีค่า = 1 แต้ม", color: "#D4AF37" },
              { label: "2–9", value: "มีค่าตามตัวเลข", color: "#D4AF37" },
              { label: "10 J Q K", value: "มีค่า = 0 แต้ม", color: "#f87171" },
            ].map((card, i) => (
              <div key={i} className="flex-1 p-6 rounded-2xl flex flex-col items-center text-center"
                style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-4xl font-black text-white mb-2">{card.label}</span>
                <p className="font-bold text-lg" style={{ color: card.color }}>{card.value}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl mb-8 w-full max-w-4xl text-left text-gray-300 text-sm md:text-base"
            style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <strong style={{ color: "#D4AF37" }}>💡 วิธีคิดผลรวมแต้ม:</strong>{" "}
            นำแต้มทุกใบมาบวกกัน หากเกิน 9 ให้ยึด <strong>หลักหน่วย</strong> เช่น 8+7=15 → นับเป็น <strong>5 แต้ม</strong>
          </div>

          {/* Section 3: ไพ่พิเศษ */}
          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <Star className="w-8 h-8 text-purple-400 shrink-0" /> 3. ไพ่พิเศษ และ อัตราการจ่าย
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-4xl">
            {[
              {
                title: "ป๊อก 9 / ป๊อก 8",
                tag: "แต้มสูงสุด",
                tagColor: "#dc2626",
                color: "rgba(220,38,38,0.15)",
                border: "rgba(220,38,38,0.4)",
                desc: "ไพ่ 2 ใบแรกบวกกันได้ 9 หรือ 8 พอดี เกมหยุดทันที ชนะไพ่ธรรมดาทั้งหมด",
                icon: <Trophy className="w-5 h-5 text-red-400" />,
              },
              {
                title: "ไพ่เรียง (Straight)",
                tag: "x3",
                tagColor: "#7c3aed",
                color: "rgba(124,58,237,0.15)",
                border: "rgba(124,58,237,0.4)",
                desc: "ไพ่ 3 ใบเรียงกัน เช่น 7-8-9 จ่าย 3 เท่าของเดิมพัน",
                icon: <Star className="w-5 h-5 text-purple-400" />,
              },
              {
                title: "ไพ่ตอง (Triple)",
                tag: "x5",
                tagColor: "#D4AF37",
                color: "rgba(212,175,55,0.1)",
                border: "rgba(212,175,55,0.3)",
                desc: "ไพ่ 3 ใบหน้าเดียวกัน จ่าย 5 เท่า ถือเป็นมือสูงสุดในเกม",
                icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
              },
              {
                title: "เด้ง 1–3 ดอก",
                tag: "x1–x3",
                tagColor: "#22c55e",
                color: "rgba(34,197,94,0.1)",
                border: "rgba(34,197,94,0.3)",
                desc: "ไพ่ดอกเดียวกัน 1-3 ใบ จ่ายทวีคูณตามจำนวนดอก",
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
              },
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl relative overflow-hidden text-left hover:-translate-y-1 transition-transform"
                style={{ background: `linear-gradient(160deg, ${card.color}, rgba(0,0,0,0.9))`, border: `1px solid ${card.border}` }}>
                <div className="absolute top-3 right-3 text-white text-[10px] font-bold px-3 py-1 rounded-lg"
                  style={{ background: card.tagColor }}>{card.tag}</div>
                <h4 className="font-bold text-xl text-white mb-2 flex items-center gap-2">{card.icon} {card.title}</h4>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 4: เทคนิค — ✅ FIX: ลบ Martingale / "จุดอ่อนเจ้ามือ" ออก แทนด้วยข้อมูลที่ถูกต้อง */}
          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <Target className="w-8 h-8 text-blue-400 shrink-0" /> 4. แนวทางการเล่นอย่างมีสติ
          </h2>

          {/* ✅ เพิ่ม Responsible Gambling box */}
          <div className="w-full max-w-4xl mb-6 p-5 rounded-2xl flex items-start gap-3"
            style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.3)" }}>
            <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <strong className="text-yellow-400">คำเตือน:</strong>{" "}
              การพนันมีความเสี่ยง ควรเล่นด้วยงบประมาณที่รับได้ ไม่ใช้เงินจำเป็น
              และไม่พยายามล้างตัวด้วยการเพิ่มเดิมพัน ไม่มี "สูตร" ใดที่รับประกันกำไรได้ 100%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
            {[
              {
                icon: <Banknote className="w-6 h-6 text-green-400" />,
                title: "กำหนดงบประมาณ",
                desc: "ตั้งวงเงินเล่นต่อครั้งและหยุดเมื่อถึงขีดจำกัด ไม่ว่าจะแพ้หรือชนะ",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
                title: "เข้าใจกติกาก่อนเล่น",
                desc: "อ่านกฎของโต๊ะและเงื่อนไขโปรโมชันให้ครบก่อนวางเดิมพัน",
              },
              {
                icon: <Info className="w-6 h-6 text-yellow-400" />,
                title: "เล่นเพื่อความบันเทิง",
                desc: "มองการเล่นเป็นความบันเทิง ไม่ใช่แหล่งรายได้หลัก",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl text-left"
                style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Box — ✅ FIX: ลบ "ถอนเงินได้ไม่อั้น 100%" */}
          <div
            className="mt-14 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden w-full max-w-4xl"
            style={{ background: "linear-gradient(135deg, #1A0B2E, #000)", border: "1px solid rgba(212,175,55,0.35)", boxShadow: "0 15px 50px rgba(212,175,55,0.12)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

            <h3 className="font-extrabold text-3xl md:text-5xl text-white mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h3>
            <p className="text-gray-300 mb-4 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
              ติดต่อแอดมินเพื่อสอบถามเงื่อนไขและสมัครใช้งาน{" "}
              <strong style={{ color: "#D4AF37" }}>บาคาร่าเว็บตรง</strong> EZPOK168
            </p>

            {/* ✅ เพิ่ม secondary CTA ก่อน primary */}
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

            <p className="text-xs text-gray-600 mt-4">⚠️ เนื้อหานี้สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section
          className="mt-16 p-6 md:p-12 rounded-3xl w-full flex flex-col items-center md:items-start"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 pb-4 w-full"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <HelpCircle className="w-8 h-8 shrink-0" style={{ color: "#D4AF37" }} />
            <h2 className="font-bold text-2xl md:text-3xl text-white text-center md:text-left">
              คำถามที่พบบ่อย (FAQ)
            </h2>
          </div>

          <div className="space-y-4 w-full max-w-4xl">
            {[
              {
                q: "ไพ่ป๊อกเด้ง แตกต่างจาก บาคาร่า อย่างไร?",
                a: "ป๊อกเด้งผู้เล่นต้องแข่งแต้มกับเจ้ามือโดยตรง มีจุดเด่นคือการได้เงินทวีคูณ (เด้ง) หากได้ไพ่พิเศษ ส่วนบาคาร่าผู้เล่นเป็นเพียงผู้ทายว่าฝั่ง Player หรือ Banker จะแต้มสูงกว่า",
                open: true,
              },
              {
                q: "เล่นเจ้าและขาในป๊อกเด้งออนไลน์ต่างกันอย่างไร?",
                a: "เจ้ามือ (Dealer) แจกไพ่และรับจ่ายเงินทุกขา ขา (Player) วางเดิมพันแข่งกับเจ้ามือ EZPOK168 เปิดให้เล่นได้ทั้งสองฝ่าย",
              },
              {
                q: "สมัครเล่นป๊อกเด้งออนไลน์ที่ EZPOK168 ต้องทำอย่างไร?",
                a: "ติดต่อแอดมินผ่าน LINE ได้ตลอด 24 ชม. แอดมินจะแนะนำขั้นตอนและเงื่อนไขการสมัครให้ครบก่อนเริ่มใช้งาน",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="cursor-pointer group rounded-2xl overflow-hidden"
                open={item.open}
                style={{ background: "linear-gradient(160deg, rgba(18,10,35,0.9) 0%, rgba(5,3,14,0.95) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <summary className="font-bold text-gray-200 text-base md:text-lg flex justify-between items-center outline-none px-6 py-5 hover:bg-white/[0.02] transition-colors">
                  {item.q}
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
          ศูนย์รวมความรู้ <strong>สอนเล่นป๊อกเด้งออนไลน์</strong> และ <strong>บาคาร่าเว็บตรง</strong>
          <br />
          เนื้อหานี้มุ่งเน้นข้อมูลความรู้เกี่ยวกับกติกา — <strong>สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</strong>
        </p>
      </footer>
    </div>
  );
}
