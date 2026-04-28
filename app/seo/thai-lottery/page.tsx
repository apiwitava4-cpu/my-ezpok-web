import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, Banknote, ShieldCheck, Smartphone, Search, ArrowRight } from "lucide-react";
import LottoChecker from "./LottoChecker";

export const metadata: Metadata = {
  title: 'หวยไทย lotto อัพเดตผลหวยรัฐบาลล่าสุด | แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม 90',
  description: 'การตรวจหวย อัพเดตผลหวยรัฐบาลล่าสุด แม่นยำที่สุด ศูนย์รวม แทงหวยออนไลน์ หวยไทย lotto ไม่มีเลขอั้น จ่ายเต็มบาทละ 90 มั่นคง บาคาร่าเว็บตรง EZLOTTO',
  keywords: 'หวยไทย lotto, การตรวจหวย, อัพเดตผลหวยรัฐบาลล่าสุด, แทงหวยออนไลน์, ไม่มีเลขอั้น, หวยจ่ายเต็ม 90, หวยรัฐบาลไทย, ซื้อหวยออนไลน์เว็บไหนดี, บาคาร่าเว็บตรง, EZLOTTO, EZPOK168',
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "การตรวจหวย หวยไทย lotto อัพเดตผลหวยรัฐบาลล่าสุด และแหล่งแทงหวยออนไลน์ ไม่มีเลขอั้น",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-18",
  "description": "เจาะลึก หวยไทย lotto ตรวจผลหวยล่าสุดรวดเร็ว พร้อมคู่มือแทงหวยออนไลน์เว็บไหนดี แนะนำเว็บแทงหวยไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "การตรวจหวย และ อัพเดตผลหวยรัฐบาลล่าสุด ดูได้ที่ไหนรวดเร็วที่สุด?",
      "acceptedAnswer": { "@type": "Answer", "text": "สามารถติดตามหวยไทย lotto และอัพเดตผลหวยรัฐบาลล่าสุดได้แบบเรียลไทม์ผ่านระบบตรวจหวยของ EZLOTTO บนเว็บ ezpok168.net หรือติดต่อแอดมิน LINE 24 ชม." }
    },
    {
      "@type": "Question",
      "name": "ซื้อหวยออนไลน์เว็บไหนดี จ่ายเต็ม ไม่มีเลขอั้น?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO คือศูนย์รวมแทงหวยออนไลน์ เปิดรับทุกเลขดัง ไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90 มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบก่อนแทง" }
    },
    {
      "@type": "Question",
      "name": "หวยรัฐบาลไทยออกรางวัลวันไหน?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยรัฐบาลไทยออกรางวัลทุกวันที่ 1 และ 16 ของทุกเดือน ระบบปิดรับแทงเวลา 15:20 น. ของวันออกรางวัล" }
    },
    {
      "@type": "Question",
      "name": "หวยไทยมีรางวัลอะไรบ้าง?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยรัฐบาลมีรางวัลหลักได้แก่ รางวัลที่ 1 (6 หลักตรง) 6,000,000 บาท/ใบ, รางวัลเลขหน้า 3 ตัว 4,000 บาท/ใบ, รางวัลเลขท้าย 3 ตัว 4,000 บาท/ใบ, และรางวัลเลขท้าย 2 ตัว 2,000 บาท/ใบ" }
    },
    {
      "@type": "Question",
      "name": "แทงหวยออนไลน์กับ EZLOTTO ต้องทำอย่างไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "สมัครสมาชิกผ่าน LINE แอดมิน EZLOTTO จะแนะนำขั้นตอนการแทงและรูปแบบการพิมพ์ผ่านแชท เช่น '12บ=100' หมายถึงแทงเลข 12 บน 100 บาท" }
    },
    {
      "@type": "Question",
      "name": "หวยไทยกับหวยลาวต่างกันอย่างไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยรัฐบาลไทยออกเดือนละ 2 ครั้ง (วันที่ 1 และ 16) ใช้ตัวเลข 6 หลัก ส่วนหวยลาวพัฒนาออกสัปดาห์ละ 3 ครั้ง (จันทร์, พุธ, ศุกร์) ใช้ตัวเลข 4 หลัก จึงมีโอกาสลุ้นผลบ่อยกว่า" }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 shadow-md bg-[#0D0514]/95 backdrop-blur-md"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100 shrink-0"
            style={{ color: '#D4AF37' }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <img src="/ezlotto-logo_poster.webp" alt="แทงหวยออนไลน์ EZ LOTTO Logo" loading="eager" decoding="async"
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
            🔥 แทงหวยออนไลน์ ไม่มีเลขอั้น 🔥
          </span>

          <h1 className="text-3xl md:text-5xl mb-3 font-bold drop-shadow-lg tracking-wider"
            style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4', background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            หวยไทย lotto การตรวจหวย <br className="hidden md:block"/>
            อัพเดตผลหวยรัฐบาลล่าสุด
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-2 relative z-10 max-w-2xl font-medium">
            เปลี่ยนจากการแค่ <strong>การตรวจหวย</strong> มาเป็น <strong>แทงหวยออนไลน์</strong> ที่ดีที่สุด <br className="hidden md:block"/>
            เปิดรับทุกเลขดัง <strong className="text-lg md:text-xl ml-1" style={{ color: '#D4AF37' }}>ไม่มีเลขอั้น จ่ายเต็ม 90</strong>
          </p>

          <LottoChecker />

          <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
            className="mt-10 px-12 py-5 text-white font-extrabold text-xl md:text-2xl rounded-full hover:scale-105 transition-all border border-red-300 no-underline w-full max-w-md flex items-center justify-center gap-3 group"
            style={{ background: 'linear-gradient(to right, #b91c1c, #ef4444, #b91c1c)', boxShadow: '0 10px 25px rgba(220,38,38,0.5)' }}>
            💸 ซื้อหวยออนไลน์ คลิก! <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
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
          <img src="/lotto-banner-1.webp" alt="เลขเด็ด แทงหวยออนไลน์ EZLOTTO" loading="lazy" decoding="async"
            className="w-full h-auto max-w-3xl mx-auto rounded-xl object-contain block hover:scale-[1.01] transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }} />

          {/* ✅ FIX: gif → video */}
          <video autoPlay muted loop playsInline poster="/lotto-banner-2.webp"
            className="w-full h-auto max-w-3xl mx-auto rounded-xl object-contain block hover:scale-[1.01] transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}
            aria-label="โปรโมชั่นแนะนำเพื่อน แทงหวยออนไลน์ รับ 10% EZLOTTO">
            <source src="/lotto-banner-2.webm" type="video/webm" />
            <source src="/lotto-banner-2.mp4"  type="video/mp4" />
            <img src="/lotto-banner-2.webp" alt="โปรโมชั่น EZLOTTO" loading="lazy" decoding="async" className="w-full h-auto rounded-xl" />
          </video>
        </section>

        {/* Article */}
        <article className="bg-black/50 p-8 md:p-12 rounded-3xl leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left"
          style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 0 40px rgba(220,38,38,0.1)' }}>

          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 pb-5 w-full leading-snug"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            ซื้อหวยออนไลน์เว็บไหนดี? แนะนำ EZLOTTO <br className="hidden md:block" />
            แหล่งรวม หวยไทย lotto ไม่มีเลขอั้น จ่ายเต็ม 90
          </h2>

          <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
            หากคุณเป็นคนที่ชื่นชอบการเสี่ยงโชคตัวเลข และมักจะเสิร์ชหา <strong>"อัพเดตผลหวยรัฐบาลล่าสุด"</strong> หรือ <strong>"การตรวจหวย"</strong> อยู่เป็นประจำ คำถามต่อไปที่คุณอาจจะสงสัยคือ <strong>"ซื้อหวยออนไลน์เว็บไหนดี?"</strong> คำตอบคือ <strong>EZLOTTO</strong> ศูนย์รวมการ <strong>แทงหวยออนไลน์</strong> ที่มีมาตรฐานเดียวกับ <strong>บาคาร่าเว็บตรง</strong>
          </p>

          {/* ทำไมเลือก EZLOTTO */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <ShieldCheck className="w-7 h-7 shrink-0 text-green-400" /> ทำไมคอหวยถึงเลือก แทงหวยออนไลน์ กับ EZLOTTO?
          </h3>

          <ul className="list-none space-y-4 mb-10 text-sm md:text-base text-gray-300 w-full px-4 md:px-0">
            {[
              { title: 'รับประกัน ไม่มีเลขอั้น:', body: 'เปิดรับแทง หวยออนไลน์ ทุกตัวเลข ให้คุณเก็งกำไรได้เต็มที่ มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบ' },
              { title: 'จ่ายเต็ม บาทละ 90:', body: 'อัตราการจ่ายสูงสำหรับ หวยไทย เลข 2 ตัว มีเงื่อนไขตามระบบ' },
              { title: 'เว็บตรง มั่นคง ปลอดภัย:', body: 'มาตรฐานเดียวกับ บาคาร่าเว็บตรง มีแอดมินดูแลทุกรายการ 24 ชม.' },
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
              <img src="/ezlotto-howto.webp" loading="lazy" decoding="async"
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
                  เพื่อให้รับประกัน <strong>"จ่ายเต็ม ไม่มีเลขอั้น"</strong> ได้จริง ทางเว็บเน้นบริการ <strong>2 ตัว</strong> เป็นหลัก กรุณาศึกษาเงื่อนไขก่อนแทง
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

          {/* ความรู้เพิ่มเติมเกี่ยวกับหวยไทย */}
          <h3 className="text-xl md:text-2xl font-bold mt-12 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <ShieldCheck className="w-7 h-7 shrink-0 text-blue-400" /> หวยไทยคืออะไร? ประวัติและความเป็นมา
          </h3>
          <p className="mb-4 text-sm md:text-base text-gray-300 max-w-4xl">
            <strong>หวยรัฐบาลไทย</strong> หรือ <strong>สลากกินแบ่งรัฐบาล</strong> เป็นการจำหน่ายสลากโดยสำนักงานสลากกินแบ่งรัฐบาล
            ดำเนินการโดยรัฐบาลไทยมาตั้งแต่ปี พ.ศ. 2517 ปัจจุบันออกรางวัล <strong>ทุกวันที่ 1 และ 16 ของเดือน</strong>
            ฉบับละ <strong>80 บาท</strong> มีผู้ซื้อหลายล้านคนต่องวด
          </p>
          <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
            ในยุคดิจิทัล <strong>แทงหวยออนไลน์</strong> ผ่าน EZLOTTO ช่วยให้เข้าถึงได้ง่ายขึ้น ไม่ต้องออกจากบ้าน
            และ<strong>ตรวจผลหวยรัฐบาล</strong>ได้ทันทีที่ออกรางวัล
          </p>

          <h3 className="text-xl md:text-2xl font-bold mt-8 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Trophy className="w-7 h-7 shrink-0 text-yellow-400" /> เปรียบเทียบ หวยไทย vs หวยลาว
          </h3>
          <div className="overflow-x-auto w-full mb-8 max-w-4xl">
            <table className="w-full text-sm text-left min-w-[500px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr style={{ background: 'rgba(212,175,55,0.1)' }}>
                  {['หัวข้อ', 'หวยไทย (รัฐบาล)', 'หวยลาวพัฒนา'].map((h, i) => (
                    <th key={i} className="px-4 py-3 font-bold text-white" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['ความถี่ออกรางวัล', 'เดือนละ 2 ครั้ง (1 และ 16)', 'สัปดาห์ละ 3 ครั้ง'],
                  ['รูปแบบตัวเลข', '6 หลัก', '4 หลัก'],
                  ['เวลาออกรางวัล', '15:00-16:00 น.', 'ประมาณ 20:00 น.'],
                  ['ราคาต่อใบ', '80 บาท', 'ไม่มีสลากจริง (แทงออนไลน์)'],
                  ['รางวัลสูงสุด', '6,000,000 บาท/ใบ', 'ตามอัตราจ่าย'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)' }}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-300" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                        {j === 0 ? <strong className="text-white">{cell}</strong> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Related Articles */}
          <h3 className="text-xl font-bold mt-8 mb-4 text-white flex items-center gap-2">
            📚 บทความที่เกี่ยวข้อง
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            {[
              { href: '/seo/lao-lottery', title: 'หวยลาวพัฒนา ผลล่าสุด', desc: 'ตรวจผลหวยลาวออกสัปดาห์ละ 3 วัน พร้อมแทงออนไลน์', color: '#a855f7' },
              { href: '/seo/pokdeng', title: 'ป๊อกเด้งออนไลน์', desc: 'กติกา วิธีเล่น ไพ่พิเศษ ครบจบในที่เดียว', color: '#D4AF37' },
              { href: '/seo/lao-lottery', title: 'หวยลาวพัฒนา ผลล่าสุด', desc: 'ตรวจผลหวยลาว ออกสัปดาห์ละ 3 วัน ไม่มีเลขอั้น', color: '#22c55e' },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="p-4 rounded-2xl no-underline flex flex-col gap-2 hover:-translate-y-1 transition-transform"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="font-bold text-sm" style={{ color: link.color }}>{link.title}</span>
                <span className="text-xs text-gray-500">{link.desc}</span>
                <span className="text-xs flex items-center gap-1 mt-1" style={{ color: link.color }}>อ่านต่อ →</span>
              </a>
            ))}
          </div>
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
            <img src="/ezlotto-promo_poster.webp" alt="โปรโมชั่น EZLOTTO" loading="lazy" decoding="async" className="w-full h-auto rounded-3xl" />
          </video>

          <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
            className="inline-flex justify-center px-12 py-5 text-white font-black text-xl md:text-2xl rounded-full hover:scale-105 transition-transform no-underline pulse-gold border border-red-300"
            style={{ background: 'linear-gradient(to right, #b91c1c, #ef4444, #b91c1c)', boxShadow: '0 10px 30px rgba(220,38,38,0.5)' }}>
            💸 คลิกสมัคร ซื้อหวยออนไลน์ เลย!
          </a>
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
                a: 'อัตราจ่ายสูงสุดที่บาทละ 90 สำหรับเลข 2 ตัวบน/ล่าง เลขวิ่งบน 3 ต่อ เลขวิ่งล่าง 4 ต่อ มีเงื่อนไขตามระบบ',
              },
              {
                q: <><strong>การตรวจหวย</strong> หวยรัฐบาลไทย ปิดรับแทงกี่โมง?</>,
                a: 'ระบบปิดรับแทงเวลา 15:20 น. ของวันออกรางวัล (ทุกวันที่ 1 และ 16 ของเดือน)',
              },
              {
                q: <>หวยรัฐบาลไทย มีรางวัลอะไรบ้าง?</>,
                a: 'รางวัลที่ 1 (6 ตัวตรง) 6,000,000 บาท/ใบ | เลขหน้า 3 ตัว 4,000 บาท/ใบ | เลขท้าย 3 ตัว 4,000 บาท/ใบ | เลขท้าย 2 ตัว 2,000 บาท/ใบ ราคาสลากต้นทุน 80 บาท/ใบ',
              },
              {
                q: <>หวยไทยกับหวยลาวต่างกันอย่างไร?</>,
                a: 'หวยไทยออกเดือนละ 2 ครั้ง (วันที่ 1 และ 16) ใช้ตัวเลข 6 หลัก รางวัลสูงสุด 6 ล้านบาท ส่วนหวยลาวพัฒนาออกสัปดาห์ละ 3 ครั้ง (จันทร์ พุธ ศุกร์) ใช้ตัวเลข 4 หลัก มีโอกาสลุ้นผลบ่อยกว่า',
              },
              {
                q: <>วิธีแทงหวยออนไลน์ผ่าน EZLOTTO ทำอย่างไร?</>,
                a: 'สมัครสมาชิกผ่าน LINE แอดมิน จากนั้นพิมพ์คำสั่งในแชท เช่น "12บ=100" (แทงเลข 12 บน 100 บาท) หรือ "12ล=100" (เลข 12 ล่าง 100 บาท) แอดมินยืนยันและรับเดิมพันทันที',
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