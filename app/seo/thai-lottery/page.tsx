import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, Banknote, ShieldCheck, Smartphone, Search, ArrowRight } from "lucide-react";
import { jsonLd } from "../../../lib/seo";
import LottoChecker from "./LottoChecker";

export const metadata: Metadata = {
  title: 'หวยไทย lotto อัปเดตผลหวยรัฐบาลล่าสุด | แทงหวยออนไลน์',
  description: 'ตรวจหวยรัฐบาลไทยล่าสุด พร้อมข้อมูลการแทงหวยออนไลน์ อัตราจ่าย เงื่อนไข และตัวอย่างวิธีพิมพ์เลขกับ EZLOTTO',
  keywords: 'หวยไทย lotto, การตรวจหวย, อัพเดตผลหวยรัฐบาลล่าสุด, แทงหวยออนไลน์, ไม่มีเลขอั้น, หวยจ่ายเต็ม 90, หวยรัฐบาลไทย, ซื้อหวยออนไลน์เว็บไหนดี, บาคาร่าเว็บตรง, EZLOTTO, EZPOK168',
  alternates: { canonical: '/seo/thai-lottery' },
  openGraph: {
    title: 'หวยไทย lotto อัปเดตผลหวยรัฐบาลล่าสุด | EZLOTTO',
    description: 'ข้อมูลตรวจหวยรัฐบาลไทย อัตราจ่าย และเงื่อนไขการแทงหวยออนไลน์',
    url: '/seo/thai-lottery',
    siteName: 'EZPOK168',
    locale: 'th_TH',
    type: 'article',
    images: [{ url: '/lotto-banner-1.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "การตรวจหวย หวยไทย lotto อัพเดตผลหวยรัฐบาลล่าสุด และแหล่งแทงหวยออนไลน์ ไม่มีเลขอั้น",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-18",
  "description": "เจาะลึกหวยไทย lotto ตรวจผลหวยล่าสุด พร้อมคู่มือแทงหวยออนไลน์ เงื่อนไข และอัตราจ่ายสูงสุดบาทละ 90"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "การตรวจหวย และ อัพเดตผลหวยรัฐบาลล่าสุด ดูได้ที่ไหนรวดเร็วที่สุด?",
      "acceptedAnswer": { "@type": "Answer", "text": "สามารถติดตาม หวยไทย lotto และ อัพเดตผลหวยรัฐบาลล่าสุด ได้แบบเรียลไทม์ผ่านระบบตรวจหวยของ EZLOTTO" }
    },
    {
      "@type": "Question",
      "name": "ซื้อหวยออนไลน์เว็บไหนดี จ่ายเต็ม ไม่มีเลขอั้น?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO มีข้อมูลแทงหวยออนไลน์ เงื่อนไขการรับเลข และอัตราจ่ายสูงสุดบาทละ 90 กรุณาติดต่อแอดมินเพื่อตรวจสอบรายละเอียดก่อนทำรายการ" }
    }
  ]
};

// ✅ เพิ่ม BreadcrumbList Schema สำหรับ SEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "หน้าหลัก", "item": "https://www.ezpok168.net/" },
    { "@type": "ListItem", "position": 2, "name": "หวยไทย", "item": "https://www.ezpok168.net/seo/thai-lottery" },
    { "@type": "ListItem", "position": 3, "name": "ผลหวยรัฐบาลล่าสุด" }
  ]
};

export default function ThaiLotterySeoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0D0514] text-gray-200 font-sans pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 shadow-md bg-[#0D0514]/95 backdrop-blur-md"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100 shrink-0"
            style={{ color: '#D4AF37' }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <Image src="/ezlotto-logo_poster.webp" alt="แทงหวยออนไลน์ EZ LOTTO Logo" width={210} height={60} loading="eager"
            className="h-10 md:h-12 w-auto max-w-[150px] sm:max-w-full object-contain" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full overflow-hidden flex flex-col items-center">

        {/* Hero */}
        <section className="bg-black/60 p-6 md:p-8 rounded-3xl text-center mb-12 w-full flex flex-col items-center relative overflow-hidden"
          style={{ border: '1px solid rgba(220,38,38,0.4)', boxShadow: '0 0 30px rgba(220,38,38,0.15)' }}>
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[100px] opacity-20 bg-red-500 pointer-events-none" />

          <span className="px-5 py-2 text-white font-bold text-xs md:text-sm rounded-full mb-4 border border-red-400"
            style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)', boxShadow: '0 0 15px rgba(220,38,38,0.6)' }}>
            แทงหวยออนไลน์ ตรวจเงื่อนไขก่อนทำรายการ
          </span>

          <h1 className="text-3xl md:text-5xl mb-3 font-bold drop-shadow-lg tracking-wider"
            style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4', background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            หวยไทย lotto การตรวจหวย <br className="hidden md:block"/>
            อัพเดตผลหวยรัฐบาลล่าสุด
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-2 relative z-10 max-w-2xl font-medium">
            จาก <strong>การตรวจหวย</strong> สู่ข้อมูล <strong>แทงหวยออนไลน์</strong> ที่อ่านเงื่อนไขได้ชัดเจน <br className="hidden md:block"/>
            อัตราจ่ายสูงสุด <strong className="text-lg md:text-xl ml-1" style={{ color: '#D4AF37' }}>บาทละ 90</strong> ตามเงื่อนไขของระบบ
          </p>

          <LottoChecker />

          <Link href="https://ezpok168.com/" target="_blank"
            className="mt-10 px-12 py-5 text-white font-extrabold text-xl md:text-2xl rounded-full hover:scale-105 transition-all border border-red-300 no-underline w-full max-w-md flex items-center justify-center gap-3 group"
            style={{ background: 'linear-gradient(to right, #b91c1c, #ef4444, #b91c1c)', boxShadow: '0 10px 25px rgba(220,38,38,0.5)' }}>
            ดูเงื่อนไขการซื้อหวยออนไลน์ <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </section>

        {/* สถิติย้อนหลัง */}
        <section className="mb-12 w-full max-w-full">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-7 h-7 drop-shadow-md" style={{ color: '#D4AF37' }} />
            <h2 className="font-extrabold text-2xl md:text-3xl text-white text-center tracking-wide">
              สถิติผลหวยรัฐบาล{' '}
              <span style={{ background: 'linear-gradient(135deg, #D4AF37, #FFE566)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ย้อนหลัง 3 งวดล่าสุด
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto w-full rounded-2xl bg-black/80 backdrop-blur-sm relative"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />
            <table className="w-full text-center border-collapse min-w-[650px] mx-auto relative z-10">
              <thead>
                <tr className="text-sm md:text-base font-bold border-b-2"
                  style={{ background: 'linear-gradient(to right, rgba(100,0,0,0.8), #000, rgba(100,0,0,0.8))', color: '#D4AF37', borderColor: 'rgba(212,175,55,0.5)' }}>
                  <th className="py-5 px-4 tracking-wide uppercase">งวดประจำวันที่</th>
                  <th className="py-5 px-4 tracking-wide uppercase">รางวัลที่ 1</th>
                  <th className="py-5 px-4 tracking-wide uppercase text-gray-300">เลขหน้า 3 ตัว</th>
                  <th className="py-5 px-4 tracking-wide uppercase text-gray-300">เลขท้าย 3 ตัว</th>
                  <th className="py-5 px-4 tracking-wide uppercase">เลขท้าย 2 ตัว</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 text-sm md:text-base font-medium">
                {[
                  { date: '16 เมษายน 2569', prize1: '309612', front3: '868 , 424', back3: '355 , 108', back2: '77' },
                  { date: '1 เมษายน 2569',  prize1: '292514', front3: '406 , 113', back3: '851 , 098', back2: '47', dark: true },
                  { date: '16 มีนาคม 2569', prize1: '833009', front3: '510 , 983', back3: '439 , 954', back2: '64' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-red-900/20 transition-all duration-300 group"
                    style={row.dark ? { backgroundColor: 'rgba(0,0,0,0.4)' } : {}}>
                    <td className="py-5 px-4 font-bold text-white group-hover:text-yellow-300 transition-colors">{row.date}</td>
                    <td className="py-5 px-4 text-2xl md:text-3xl font-black tracking-[0.2em]"
                      style={{ background: 'linear-gradient(180deg,#fff,#9ca3af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {row.prize1}
                    </td>
                    <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">{row.front3}</td>
                    <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">{row.back3}</td>
                    <td className="py-5 px-4 text-xl md:text-2xl font-black text-red-400">{row.back2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm">
            <Search className="w-4 h-4" /> ดูสถิติ <strong>หวยไทย lotto</strong> เพิ่มเติม หรือ <strong className="text-red-400">แทงหวยออนไลน์</strong> ที่ EZLOTTO
          </div>
        </section>

        {/* ── Banners ── */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
          {/* ✅ FIX: png → webp */}
          <Image src="/lotto-banner-1.webp" alt="เลขเด็ด แทงหวยออนไลน์ EZLOTTO" width={860} height={287} loading="lazy"
            className="w-full h-auto max-w-3xl mx-auto rounded-xl object-contain block hover:scale-[1.01] transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }} />

          {/* ✅ FIX: gif → video */}
          <video autoPlay muted loop playsInline poster="/lotto-banner-2.webp"
            className="w-full h-auto max-w-3xl mx-auto rounded-xl object-contain block hover:scale-[1.01] transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}
            aria-label="โปรโมชั่นแนะนำเพื่อน แทงหวยออนไลน์ รับ 10% EZLOTTO">
            <source src="/lotto-banner-2.webm" type="video/webm" />
            <source src="/lotto-banner-2.mp4"  type="video/mp4" />
          </video>
        </section>

        {/* Article */}
        <article className="bg-black/50 p-8 md:p-12 rounded-3xl leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left"
          style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 0 40px rgba(220,38,38,0.1)' }}>

          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 pb-5 w-full leading-snug"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            ซื้อหวยออนไลน์ต้องดูอะไรบ้าง? แนะนำข้อมูล EZLOTTO <br className="hidden md:block" />
            หวยไทย lotto เงื่อนไขชัดเจน อัตราจ่ายสูงสุด 90
          </h2>

          <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
            หากคุณชอบติดตามผลรางวัลและมักค้นหา <strong>อัปเดตผลหวยรัฐบาลล่าสุด</strong> หรือ <strong>การตรวจหวย</strong> อยู่เป็นประจำ
            คำถามต่อไปคือควรดูเงื่อนไขอะไรบ้างก่อนซื้อหวยออนไลน์ หน้านี้รวมข้อมูลของ <strong>EZLOTTO</strong> ทั้งวิธีแทง อัตราจ่าย และข้อควรตรวจสอบก่อนทำรายการ
          </p>

          {/* ทำไมเลือก EZLOTTO */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <ShieldCheck className="w-7 h-7 shrink-0 text-green-400" /> ทำไมคอหวยถึงเลือก แทงหวยออนไลน์ กับ EZLOTTO?
          </h3>

          <ul className="list-none space-y-4 mb-10 text-sm md:text-base text-gray-300 w-full px-4 md:px-0">
            {[
              { title: 'ตรวจเงื่อนไขรับเลขก่อนแทง:', body: 'ระบบมีรายละเอียดการรับเลขและข้อจำกัด กรุณาสอบถามแอดมินก่อนยืนยันรายการ' },
              { title: 'อัตราจ่ายสูงสุดบาทละ 90:', body: 'สำหรับหวยไทยเลข 2 ตัว ตามเงื่อนไขและช่วงเวลาที่ระบบกำหนด' },
              { title: 'มีแอดมินดูแล:', body: 'สอบถามขั้นตอนและเงื่อนไขได้ 24 ชม. ก่อนเริ่มใช้งาน' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 shrink-0 mt-1" style={{ color: '#B8960C' }} />
                <span><strong className="text-white text-lg">{item.title}</strong> {item.body}</span>
              </li>
            ))}
          </ul>

          {/* กติกา */}
          <h3 className="text-xl md:text-2xl font-bold mt-8 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Trophy className="w-7 h-7 shrink-0 text-yellow-400" /> กติกาและมูลค่ารางวัล หวยไทย lotto (หวยรัฐบาล)
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-4xl">
            <strong>หวยรัฐบาลไทย</strong> ออกรางวัลทุกวันที่ 1 และ 16 ของเดือน ฉบับละ 80 บาท มูลค่ารางวัลอ้างอิงดังนี้:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-4xl mx-auto">
            {[
              { label: 'รางวัลที่ 1 (ตรงกัน 6 หลัก)', prize: '6,000,000 บาท / ใบ' },
              { label: 'รางวัลเลขหน้า 3 ตัว', prize: '4,000 บาท / ใบ' },
              { label: 'รางวัลเลขท้าย 3 ตัว', prize: '4,000 บาท / ใบ' },
              { label: 'รางวัลเลขท้าย 2 ตัว', prize: '2,000 บาท / ใบ' },
            ].map((r, i) => (
              <div key={i} className="p-5 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
                style={{ background: 'linear-gradient(180deg,#111,#000)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-bold text-white text-sm md:text-base">{r.label}</p>
                <p className="text-xl md:text-2xl font-black mt-2" style={{ color: '#D4AF37' }}>{r.prize}</p>
              </div>
            ))}
          </div>

          {/* อัตราจ่าย */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Banknote className="w-7 h-7 shrink-0 text-red-400" /> อัตราการจ่าย หวยใต้ดินออนไลน์ (จ่ายเต็ม บาทละ 90)
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-10 w-full max-w-4xl">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src="/ezlotto-howto.webp" loading="lazy" width={420} height={520}
                alt="วิธีแทงหวยรัฐบาลไทยออนไลน์ EZLOTTO"
                className="w-full h-auto max-w-[350px] md:max-w-[420px] mx-auto rounded-2xl object-contain block"
                style={{ border: '1px solid rgba(220,38,38,0.5)', boxShadow: '0 10px 30px rgba(220,38,38,0.3)' }} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="font-bold text-white text-lg md:text-xl mb-5 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                💰 อัตราการจ่าย (รับเฉพาะ 2 ตัวและเลขวิ่ง)
              </h4>
              <ul className="space-y-4 text-sm md:text-base w-full max-w-md">
                <li className="flex justify-between items-center p-4 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(100,0,0,0.4), #000)', border: '1px solid rgba(127,29,29,0.5)' }}>
                  <span className="text-gray-200 font-bold">เลข 2 ตัวตรง (บน / ล่าง)</span>
                  <span className="font-black text-xl" style={{ color: '#D4AF37' }}>จ่ายบาทละ 90</span>
                </li>
                {[
                  ['เลขวิ่งบน (1 ตัวตรง)', '3 ต่อ (รวมทุน)'],
                  ['เลขวิ่งล่าง (1 ตัวตรง)', '4 ต่อ (รวมทุน)'],
                ].map(([label, val], i) => (
                  <li key={i} className="flex justify-between items-center p-4 rounded-xl"
                    style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-gray-400 font-medium">{label}</span>
                    <span className="text-white font-bold text-lg">{val}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-5 rounded-2xl flex items-start gap-3 w-full max-w-md text-left"
                style={{ background: 'linear-gradient(135deg, rgba(127,0,0,0.3), #000)', border: '1px solid rgba(220,38,38,0.4)' }}>
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                <p className="text-xs md:text-sm text-red-200 leading-relaxed font-medium">
                  อัตราจ่ายและการรับเลขขึ้นอยู่กับเงื่อนไขของระบบ ทางเว็บเน้นบริการ <strong>2 ตัว</strong> เป็นหลัก กรุณาศึกษาเงื่อนไขก่อนแทง
                </p>
              </div>
            </div>
          </div>

          {/* วิธีพิมพ์ */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Smartphone className="w-7 h-7 shrink-0 text-blue-400" /> วิธีแทงหวยออนไลน์ พิมพ์ง่ายๆ ผ่านแชท
          </h3>

          <div className="bg-black/80 p-6 md:p-8 rounded-2xl w-full max-w-2xl mx-auto md:mx-0 text-left mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 5px 20px rgba(0,0,0,0.8)' }}>
            <p className="text-gray-400 text-sm mb-4 font-bold pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              📝 รูปแบบ: <code className="bg-gray-900 border border-gray-600 px-2 py-1 rounded mx-1" style={{ color: '#D4AF37' }}>[เลข] [รูปแบบ] = [จำนวนเงิน]</code>
            </p>
            <ul className="list-none space-y-3 text-sm md:text-base">
              {[
                ['12บ=100', 'แทงเลข 12 บน จำนวน 100 บาท'],
                ['12ล=100', 'แทงเลข 12 ล่าง จำนวน 100 บาท'],
                ['12บล=100', 'แทง 12 บนและล่าง อย่างละ 100 บาท'],
                ['1วบ=100', 'แทงเลขวิ่ง 1 บน จำนวน 100 บาท'],
              ].map(([cmd, desc], i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-28 text-center">{cmd}</span>
                  <span className="text-gray-400">({desc})</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-300 max-w-4xl text-center md:text-left mt-4 pt-6 font-medium"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            นอกจาก <strong>หวยไทย lotto</strong> แล้ว เรายังมีบริการ <strong>บาคาร่าเว็บตรง</strong> ให้เล่นรอเวลาหวยออก สมัครสมาชิกฟรีวันนี้!
          </p>
        </article>

        {/* โปรโมชั่น */}
        <div className="mt-12 flex flex-col items-center justify-center w-full text-center">
          {/* ✅ FIX: img+.webm → <video> */}
          <video autoPlay muted loop playsInline poster="/ezlotto-promo_poster.webp"
            className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-3xl mb-8 object-contain block hover:scale-105 transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.6)', boxShadow: '0 0 40px rgba(212,175,55,0.4)' }}
            aria-label="สมัครแทงหวยออนไลน์ EZLOTTO ไม่มีเลขอั้น">
            <source src="/ezlotto-promo.webm" type="video/webm" />
            <source src="/ezlotto-promo.mp4"  type="video/mp4" />
          </video>

          <Link href="https://ezpok168.com/" target="_blank"
            className="inline-flex justify-center px-12 py-5 text-white font-black text-xl md:text-2xl rounded-full hover:scale-105 transition-transform no-underline pulse-gold border border-red-300"
            style={{ background: 'linear-gradient(to right, #b91c1c, #ef4444, #b91c1c)', boxShadow: '0 10px 30px rgba(220,38,38,0.5)' }}>
            ดูเงื่อนไขและสมัครซื้อหวยออนไลน์
          </Link>
        </div>

        {/* FAQ */}
        <section className="mt-16 bg-black/50 p-6 md:p-10 rounded-3xl w-full flex flex-col items-center md:items-start"
          style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 0 30px rgba(0,0,0,0.6)' }}>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 pb-4 w-full"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 shrink-0" style={{ color: '#D4AF37' }} />
            <h2 className="font-extrabold text-2xl md:text-3xl text-white text-center md:text-left">
              คำถามที่พบบ่อย (FAQ) - แทงหวยออนไลน์
            </h2>
          </div>
          <div className="space-y-4 w-full max-w-4xl mx-auto">
            {[
              {
                q: <>ซื้อหวยออนไลน์เว็บไหนดี จ่ายเต็ม <strong className="text-red-400">ไม่มีเลขอั้น</strong>?</>,
                a: 'EZLOTTO เปิดรับทุกเลขดัง ไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90 มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบก่อนแทง',
                open: true,
              },
              {
                q: <><strong style={{ color: '#D4AF37' }}>แทงหวยออนไลน์</strong> ที่ EZLOTTO จ่ายบาทละเท่าไหร่?</>,
                a: 'อัตราจ่ายสูงสุดที่บาทละ 90 สำหรับเลข 2 ตัวบน/ล่าง เลขวิ่ง 3-4 ต่อ มีเงื่อนไขตามระบบ',
              },
              {
                q: <><strong>การตรวจหวย</strong> หวยรัฐบาลไทย ปิดรับแทงกี่โมง?</>,
                a: 'ระบบปิดรับแทงเวลา 15:20 น. ของวันออกรางวัล (ทุกวันที่ 1 และ 16 ของเดือน)',
              },
            ].map((item, i) => (
              <details key={i} open={item.open} className="cursor-pointer group rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <summary className="font-bold text-gray-200 text-base md:text-lg outline-none flex justify-center md:justify-start items-center gap-2 px-6 py-5 hover:bg-white/[0.02] transition-colors list-none">
                  {item.q}
                </summary>
                <p className="px-6 pb-5 pt-4 text-gray-400 text-sm md:text-base leading-relaxed font-medium"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-xs w-full flex justify-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="font-bold">สงวนลิขสิทธิ์ &copy; 2026 โดย EZLOTTO &amp; EZPOK168.NET · สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</p>
      </footer>
    </div>
  );
}
