import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, Banknote, ShieldCheck, Smartphone, Search, ArrowRight } from "lucide-react";
import LaoLottoChecker from "./LaoLottoChecker";

export const metadata: Metadata = {
  title: 'หวยลาว lotto อัพเดตผลหวยลาวพัฒนาล่าสุด | แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม 90',
  description: 'การตรวจหวย อัพเดตผลหวยลาวพัฒนาล่าสุด แม่นยำที่สุด ศูนย์รวม แทงหวยออนไลน์ หวยลาว lotto ไม่มีเลขอั้น จ่ายเต็มบาทละ 90 มั่นคง บาคาร่าเว็บตรง EZLOTTO',
  keywords: 'หวยลาว lotto, การตรวจหวย, อัพเดตผลหวยลาวพัฒนาล่าสุด, แทงหวยออนไลน์, ไม่มีเลขอั้น, หวยจ่ายเต็ม 90, หวยลาวพัฒนา, ซื้อหวยออนไลน์เว็บไหนดี, บาคาร่าเว็บตรง, EZLOTTO, EZPOK168',
  alternates: { canonical: 'https://www.ezpok168.net/seo/lao-lottery' },
  openGraph: {
    title: 'หวยลาวพัฒนา อัพเดตผลล่าสุด | แทงหวยออนไลน์ EZLOTTO',
    description: 'ตรวจผลหวยลาวพัฒนาล่าสุด แม่นยำ ไม่มีเลขอั้น จ่ายเต็มบาทละ 90',
    url: 'https://www.ezpok168.net/seo/lao-lottery',
    type: 'article',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "การตรวจหวย หวยลาว lotto อัพเดตผลหวยลาวพัฒนาล่าสุด และแหล่งแทงหวยออนไลน์ ไม่มีเลขอั้น",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-18",
  "description": "เจาะลึก หวยลาว lotto ตรวจผลหวยล่าสุดรวดเร็ว พร้อมคู่มือแทงหวยออนไลน์เว็บไหนดี แนะนำเว็บแทงหวยลาวไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "การตรวจหวย และ อัพเดตผลหวยลาวพัฒนาล่าสุด ดูได้ที่ไหนรวดเร็วที่สุด?",
      "acceptedAnswer": { "@type": "Answer", "text": "ติดตาม หวยลาว lotto และ อัพเดตผลหวยลาวพัฒนาล่าสุด ได้แบบเรียลไทม์ผ่านระบบตรวจหวยของ EZLOTTO" }
    },
    {
      "@type": "Question",
      "name": "ซื้อหวยลาวออนไลน์เว็บไหนดี จ่ายเต็ม ไม่มีเลขอั้น?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO เปิดรับหวยลาวพัฒนาทุกเลขดัง ไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90 มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบ" }
    },
    {
      "@type": "Question",
      "name": "หวยลาวพัฒนาออกรางวัลวันไหนบ้าง?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยลาวพัฒนาออกรางวัลสัปดาห์ละ 3 วัน คือวันจันทร์, วันพุธ และวันศุกร์ เริ่มประกาศผลตั้งแต่ประมาณ 20:00 น. ตามเวลาประเทศไทย" }
    },
    {
      "@type": "Question",
      "name": "หวยลาวมีรางวัลอะไรบ้าง?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยลาวพัฒนาใช้ตัวเลข 4 หลักสุดท้าย แบ่งรางวัลเป็น 4 ประเภท ได้แก่ รางวัลเลข 4 ตัวตรง, เลข 3 ตัวตรงบน, เลข 2 ตัวตรงบน และเลข 2 ตัวล่าง" }
    },
    {
      "@type": "Question",
      "name": "วิธีแทงหวยลาวออนไลน์ผ่านแชท ทำอย่างไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "พิมพ์ตามรูปแบบ [เลข][รูปแบบ]=[จำนวนเงิน] เช่น 12บ=100 (ซื้อ 12 บน 100 บาท), 12ล=100 (ซื้อ 12 ล่าง 100 บาท), 12บล=100 (ซื้อทั้งบนและล่าง) ติดต่อแอดมิน EZLOTTO เพื่อตรวจสอบเงื่อนไขก่อนแทงทุกครั้ง" }
    },
    {
      "@type": "Question",
      "name": "หวยลาวกับหวยไทยต่างกันอย่างไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยไทยออกเดือนละ 2 ครั้ง มีรางวัลหลายประเภทตั้งแต่รางวัลที่ 1 ถึงรางวัลเลขท้าย ส่วนหวยลาวพัฒนาออกสัปดาห์ละ 3 ครั้ง ใช้เลข 4 หลัก โอกาสลุ้นรับรางวัลบ่อยกว่า แต่เงินรางวัลต่อครั้งแตกต่างกันตามประเภทการแทง" }
    }
  ]
};

// ✅ เพิ่ม BreadcrumbList Schema สำหรับ SEO
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "หน้าหลัก", "item": "https://www.ezpok168.net/" },
    { "@type": "ListItem", "position": 2, "name": "หวยลาว", "item": "https://www.ezpok168.net/seo/lao-lottery" },
    { "@type": "ListItem", "position": 3, "name": "ผลหวยลาวพัฒนาล่าสุด" }
  ]
};

export default function LaoLotterySeoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0D0514] text-gray-200 font-sans pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 shadow-md bg-[#0D0514]/95 backdrop-blur-md w-full"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 md:h-[75px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors no-underline opacity-90 shrink-0"
            style={{ color: '#D4AF37' }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <img src="/ezlotto-logo_poster.webp" alt="แทงหวยลาวออนไลน์ EZ LOTTO Logo" loading="eager" decoding="async"
            className="h-10 md:h-12 w-auto max-w-[150px] md:max-w-[210px] object-contain"
            style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex flex-col items-center">

        {/* Hero */}
        <section className="bg-black/60 p-6 md:p-8 rounded-3xl text-center mb-12 w-full flex flex-col items-center relative overflow-hidden"
          style={{ border: '1px solid rgba(168,85,247,0.4)', boxShadow: '0 0 30px rgba(168,85,247,0.15)' }}>
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[100px] opacity-20 bg-purple-500 pointer-events-none" />

          <span className="px-5 py-2 text-white font-bold text-xs md:text-sm rounded-full mb-4 border border-purple-400"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', boxShadow: '0 0 15px rgba(168,85,247,0.6)' }}>
            💎 แทงหวยลาวออนไลน์ ไม่มีเลขอั้น 💎
          </span>

          <h1 className="text-3xl md:text-5xl mb-3 font-bold drop-shadow-lg tracking-wider"
            style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4', background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            หวยลาว lotto การตรวจหวย <br className="hidden md:block"/>
            อัพเดตผลหวยลาวพัฒนาล่าสุด
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-2 relative z-10 max-w-2xl font-medium">
            เปลี่ยนจากการแค่ <strong>การตรวจหวย</strong> มาเป็น <strong>แทงหวยออนไลน์</strong> ที่ดีที่สุด <br className="hidden md:block"/>
            เปิดรับหวยลาวพัฒนาทุกเลข <strong className="text-lg md:text-xl ml-1" style={{ color: '#D4AF37' }}>ไม่มีเลขอั้น จ่ายเต็ม 90</strong>
          </p>

          <LaoLottoChecker />

          <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
            className="mt-10 px-12 py-5 text-white font-extrabold text-xl md:text-2xl rounded-full hover:scale-105 transition-all border border-purple-300 no-underline w-full max-w-md flex items-center justify-center gap-3 group"
            style={{ background: 'linear-gradient(to right, #6d28d9, #7c3aed, #6d28d9)', boxShadow: '0 10px 25px rgba(168,85,247,0.5)' }}>
            💸 ซื้อหวยลาว คลิก! <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </section>

        {/* สถิติย้อนหลัง */}
        <section className="mb-12 w-full max-w-full">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-7 h-7 drop-shadow-md" style={{ color: '#D4AF37' }} />
            <h2 className="font-extrabold text-2xl md:text-3xl text-white text-center tracking-wide">
              สถิติผลหวยลาว{' '}
              <span style={{ background: 'linear-gradient(135deg, #D4AF37, #FFE566)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ย้อนหลังล่าสุด
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto w-full rounded-2xl bg-black/80 backdrop-blur-sm relative"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
            <table className="w-full text-center border-collapse min-w-[600px] relative z-10">
              <thead>
                <tr className="text-sm md:text-base font-bold border-b-2"
                  style={{ background: 'linear-gradient(to right, rgba(60,0,100,0.8), #000, rgba(60,0,100,0.8))', color: '#D4AF37', borderColor: 'rgba(212,175,55,0.5)' }}>
                  <th className="py-5 px-4 tracking-wide uppercase">งวดประจำวันที่</th>
                  <th className="py-5 px-4 tracking-wide uppercase">รางวัลเลข 4 ตัว</th>
                  <th className="py-5 px-4 tracking-wide uppercase text-gray-300">เลข 3 ตัว</th>
                  <th className="py-5 px-4 tracking-wide uppercase">เลข 2 ตัว (บน/ล่าง)</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 text-sm md:text-base font-medium">

                {/* งวดล่าสุด 28/04 — รอผลออก */}
                <tr style={{ backgroundColor: 'rgba(212,175,55,0.08)', borderBottom: '1px solid rgba(212,175,55,0.25)' }}>
                  <td className="py-5 px-4 font-bold text-left" style={{ color: '#FFE566' }}>
                    วันอังคารที่ 28 เมษายน 2569&nbsp;
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full font-bold align-middle"
                      style={{ background: 'rgba(212,175,55,0.2)', color: '#FFE566', border: '1px solid rgba(212,175,55,0.4)' }}>
                      ล่าสุด
                    </span>
                  </td>
                  <td colSpan={3} className="py-5 px-4 text-center font-bold text-base md:text-lg" style={{ color: '#D4AF37' }}>
                    ⏳ ผลออกเวลา 20:30 น.
                  </td>
                </tr>

                {/* งวดย้อนหลัง */}
                {[
                  { date: 'วันจันทร์ที่ 27 เมษายน 2569', p4: '----', p3: '---', p2: '-- / --', dark: true },
                  { date: 'วันศุกร์ที่ 25 เมษายน 2569',  p4: '----', p3: '---', p2: '-- / --' },
                  { date: 'วันพฤหัสบดีที่ 24 เมษายน 2569', p4: '----', p3: '---', p2: '-- / --', dark: true },
                  { date: 'วันศุกร์ที่ 17 เมษายน 2569',  p4: '5079', p3: '079', p2: '79 / 50' },
                  { date: 'วันจันทร์ที่ 13 เมษายน 2569',  p4: '7568', p3: '568', p2: '68 / 75', dark: true },
                  { date: 'วันศุกร์ที่ 10 เมษายน 2569',  p4: '0389', p3: '389', p2: '89 / 03' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-purple-900/20 transition-all duration-300 group"
                    style={row.dark ? { backgroundColor: 'rgba(0,0,0,0.4)' } : {}}>
                    <td className="py-5 px-4 font-bold text-white group-hover:text-yellow-300 transition-colors">{row.date}</td>
                    <td className="py-5 px-4 font-black tracking-[0.2em] text-xl md:text-2xl"
                      style={{ background: 'linear-gradient(180deg,#fff,#9ca3af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {row.p4}
                    </td>
                    <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">{row.p3}</td>
                    <td className="py-5 px-4 font-black text-purple-400 text-lg md:text-xl">{row.p2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm">
            <Search className="w-4 h-4" /> ดูสถิติ <strong>หวยลาว lotto</strong> เพิ่มเติม หรือ <strong className="text-purple-400">แทงหวยออนไลน์</strong> ที่ EZLOTTO
          </div>
        </section>

        {/* ── Banners ── */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
          {/* ✅ FIX: png → webp */}
          <img src="/lotto-banner-1.webp" alt="เลขเด็ด แทงหวยลาวพัฒนา EZLOTTO" loading="lazy" decoding="async"
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
          style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 0 40px rgba(168,85,247,0.08)' }}>

          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 pb-5 w-full leading-snug"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            แทงหวยลาวออนไลน์เว็บไหนดี? แนะนำ EZLOTTO <br className="hidden md:block" />
            หวยลาว lotto ไม่มีเลขอั้น จ่ายเต็ม 90
          </h2>

          <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
            หากคุณเสิร์ชหาคำว่า <strong>"อัพเดตผลหวยลาวพัฒนาล่าสุด"</strong> หรือ <strong>"การตรวจหวย"</strong> อยู่เป็นประจำ และสงสัยว่า <strong>"ซื้อหวยออนไลน์เว็บไหนดี?"</strong> คำตอบคือ <strong>EZLOTTO</strong> ศูนย์รวมการ <strong>แทงหวยออนไลน์</strong> มาตรฐานเดียวกับ <strong>บาคาร่าเว็บตรง</strong>
          </p>

          <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
            <strong>หวยลาวพัฒนา</strong> ออกรางวัลบ่อยถึง <strong>สัปดาห์ละ 3 วัน (วันจันทร์, วันพุธ, วันศุกร์)</strong> การ <strong>แทงหวยลาวออนไลน์</strong> จึงเป็นช่องทางที่รวดเร็วและต่อเนื่องที่สุด
          </p>

          {/* ทำไมเลือก EZLOTTO */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <ShieldCheck className="w-7 h-7 shrink-0 text-green-400" /> ทำไมต้อง ซื้อหวยลาวออนไลน์ กับ EZLOTTO?
          </h3>

          <ul className="list-none space-y-4 mb-10 text-sm md:text-base text-gray-300 w-full px-4 md:px-0">
            {[
              { title: 'รับประกัน ไม่มีเลขอั้น:', body: 'เปิดรับแทงหวยลาวพัฒนาทุกตัวเลข มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบก่อนแทง' },
              { title: 'จ่ายหนัก จ่ายเต็ม บาทละ 90:', body: 'อัตราการจ่ายสูงสำหรับ หวยลาว lotto มีเงื่อนไขตามระบบ' },
              { title: 'สถิติหวยลาวแม่นยำ:', body: 'มีระบบ การตรวจหวย และอัปเดตผลแบบเรียลไทม์ พร้อมตารางสถิติย้อนหลัง' },
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
            <Trophy className="w-7 h-7 shrink-0 text-yellow-400" /> กติกาการออกรางวัล หวยลาวพัฒนา
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-4xl">
            ใช้ตัวเลข <strong>4 หลักสุดท้าย</strong> มาเป็นเกณฑ์ตัดสินรางวัล ดังนี้:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-4xl mx-auto">
            {[
              { label: 'รางวัลเลข 4 ตัวตรง', sub: 'ใช้ตัวเลขทั้ง 4 หลักสุดท้าย' },
              { label: 'รางวัลเลข 3 ตัวตรง (บน)', sub: 'ใช้ตัวเลข 3 หลักสุดท้าย' },
              { label: 'รางวัลเลข 2 ตัวตรง (บน)', sub: 'ใช้ตัวเลข 2 หลักสุดท้าย' },
              { label: 'รางวัลเลข 2 ตัวล่าง', sub: 'ใช้ตัวเลขหลักที่ 1 และ 2 (นับจากซ้ายของ 4 ตัวท้าย)' },
            ].map((r, i) => (
              <div key={i} className="p-5 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
                style={{ background: 'linear-gradient(180deg,#111,#000)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-bold text-white text-sm md:text-base">{r.label}</p>
                <p className="text-gray-400 text-sm mt-1">{r.sub}</p>
              </div>
            ))}
          </div>

          {/* อัตราจ่าย */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Banknote className="w-7 h-7 shrink-0 text-purple-400" /> อัตราการจ่าย หวยลาวออนไลน์ (จ่ายเต็ม บาทละ 90)
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-10 w-full max-w-4xl">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src="/ezlotto-howto.webp" alt="วิธีแทงหวยลาวพัฒนาออนไลน์ EZLOTTO" loading="lazy" decoding="async"
                className="w-full h-auto max-w-[350px] md:max-w-[420px] mx-auto rounded-2xl object-contain block"
                style={{ border: '1px solid rgba(168,85,247,0.5)', boxShadow: '0 10px 30px rgba(168,85,247,0.3)' }} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="font-bold text-white text-lg md:text-xl mb-5 pb-2 w-full"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                💰 อัตราการจ่าย (รับเฉพาะ 2 ตัวและเลขวิ่ง)
              </h4>
              <ul className="space-y-4 text-sm md:text-base w-full max-w-md">
                <li className="flex justify-between items-center p-4 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(60,0,100,0.4), #000)', border: '1px solid rgba(88,28,135,0.5)' }}>
                  <span className="text-gray-200 font-bold">หวยลาว 2 ตัวตรง (บน / ล่าง)</span>
                  <span className="font-black text-xl" style={{ color: '#D4AF37' }}>จ่ายบาทละ 90</span>
                </li>
                {[
                  ['เลขวิ่งบน', '3 ต่อ (รวมทุน)'],
                  ['เลขวิ่งล่าง', '4 ต่อ (รวมทุน)'],
                ].map(([label, val], i) => (
                  <li key={i} className="flex justify-between items-center p-4 rounded-xl"
                    style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-gray-400 font-medium">{label}</span>
                    <span className="text-white font-bold text-lg">{val}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-5 rounded-2xl flex items-start gap-3 w-full max-w-md text-left"
                style={{ background: 'linear-gradient(135deg, rgba(60,0,100,0.3), #000)', border: '1px solid rgba(168,85,247,0.4)' }}>
                <AlertTriangle className="w-6 h-6 text-purple-400 shrink-0" />
                <p className="text-xs md:text-sm text-purple-200 leading-relaxed font-medium">
                  เรามอบอัตราจ่ายเลข 2 ตัว <strong>เต็มบาทละ 90</strong> รับเฉพาะ 2 ตัวและเลขวิ่ง มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบก่อนแทง
                </p>
              </div>
            </div>
          </div>

          {/* วิธีพิมพ์ */}
          <h3 className="text-xl md:text-2xl font-bold mt-10 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Smartphone className="w-7 h-7 shrink-0 text-blue-400" /> วิธีแทงหวยลาว พิมพ์ง่ายๆ ผ่านแชท
          </h3>

          <div className="bg-black/80 p-6 md:p-8 rounded-2xl w-full max-w-2xl mx-auto md:mx-0 text-left mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 5px 20px rgba(0,0,0,0.8)' }}>
            <p className="text-gray-400 text-sm mb-4 font-bold pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              📝 รูปแบบ: <code className="bg-gray-900 border border-gray-600 px-2 py-1 rounded mx-1" style={{ color: '#D4AF37' }}>[เลข] [รูปแบบ] = [จำนวนเงิน]</code>
            </p>
            <ul className="list-none space-y-3 text-sm md:text-base">
              {[
                ['12บ=100', 'ซื้อเลข 12 บน จำนวน 100 บาท'],
                ['12ล=100', 'ซื้อเลข 12 ล่าง จำนวน 100 บาท'],
                ['12บล=100', 'ซื้อ 12 บนและล่าง อย่างละ 100 บาท'],
                ['12บก=100', 'ซื้อ 12 และ 21 บน อย่างละ 100 บาท'],
              ].map(([cmd, desc], i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-28 text-center">{cmd}</span>
                  <span className="text-gray-400">({desc})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ประวัติหวยลาวพัฒนา */}
          <h3 className="text-xl md:text-2xl font-bold mt-12 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Trophy className="w-7 h-7 shrink-0 text-yellow-400" /> ประวัติหวยลาวพัฒนา
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 max-w-4xl">
            <strong>หวยลาวพัฒนา</strong> หรือที่รู้จักกันในชื่อ <strong>หวยลาว lotto</strong> เป็นสลากกินแบ่งที่ดำเนินการอย่างเป็นทางการโดยรัฐบาล สาธารณรัฐประชาธิปไตยประชาชนลาว เพื่อสนับสนุนรายได้ภาครัฐและการพัฒนาเศรษฐกิจ ใช้ระบบการออกรางวัลตัวเลข <strong>4 หลัก</strong> ที่สามารถตรวจสอบผลได้อย่างโปร่งใส
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-4xl">
            จุดเด่นที่ทำให้นักแทงหวยชาวไทยนิยม <strong>แทงหวยลาวออนไลน์</strong> คือความถี่ในการออกรางวัลสูงถึง <strong>3 ครั้งต่อสัปดาห์</strong> ในวันจันทร์ พุธ ศุกร์ ซึ่งบ่อยกว่าหวยรัฐบาลไทยที่ออกเพียง 2 ครั้งต่อเดือน ทำให้มีโอกาสลุ้นรับรางวัลได้ถึง <strong>12–13 ครั้งต่อเดือน</strong> นอกจากนี้ระบบการ <strong>การตรวจหวย</strong> ยังรวดเร็วและแม่นยำผ่านช่องทางออนไลน์ของ EZLOTTO
          </p>

          {/* เปรียบเทียบ หวยลาว vs หวยไทย */}
          <h3 className="text-xl md:text-2xl font-bold mt-6 mb-5 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <Search className="w-7 h-7 shrink-0 text-blue-400" /> หวยลาว vs หวยไทย: ต่างกันอย่างไร?
          </h3>
          <div className="overflow-x-auto w-full rounded-2xl mb-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <table className="w-full text-sm md:text-base border-collapse min-w-[480px]">
              <thead>
                <tr style={{ background: 'linear-gradient(to right, rgba(60,0,100,0.8), #000, rgba(60,0,100,0.8))', color: '#D4AF37' }}>
                  <th className="py-4 px-5 text-left font-bold tracking-wide">หัวข้อ</th>
                  <th className="py-4 px-5 text-center font-bold tracking-wide">หวยลาวพัฒนา</th>
                  <th className="py-4 px-5 text-center font-bold tracking-wide">หวยรัฐบาลไทย</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ['ความถี่ออกรางวัล', '3 ครั้ง/สัปดาห์', '2 ครั้ง/เดือน'],
                  ['ระบบตัวเลข', 'เลข 4 หลัก (2/3/4 ตัว)', 'หลายประเภท 2–6 หลัก'],
                  ['ราคาต่อครั้ง', 'ขึ้นอยู่กับเว็บแทง', '80 บาท/ใบ'],
                  ['แทงออนไลน์', '✅ ผ่าน EZLOTTO', '✅ บางแพลตฟอร์ม'],
                  ['เหมาะกับ', 'ชอบลุ้นบ่อย งบน้อย', 'ลุ้นรางวัลใหญ่ครั้งเดียว'],
                ].map(([topic, lao, thai], i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-purple-900/10 transition-colors"
                    style={i % 2 === 0 ? { backgroundColor: 'rgba(0,0,0,0.4)' } : {}}>
                    <td className="py-4 px-5 font-bold text-white">{topic}</td>
                    <td className="py-4 px-5 text-center text-purple-300">{lao}</td>
                    <td className="py-4 px-5 text-center text-gray-400">{thai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Related Articles */}
          <h3 className="text-xl md:text-2xl font-bold mt-8 mb-6 flex items-center justify-center md:justify-start gap-3 w-full"
            style={{ color: '#FFE566' }}>
            <ArrowRight className="w-7 h-7 shrink-0" /> บทความที่เกี่ยวข้อง
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
            {[
              { href: '/seo/thai-lottery', title: '🏅 ตรวจหวยไทย', desc: 'ผลสลากกินแบ่งรัฐบาลไทยล่าสุด พร้อมระบบตรวจหวยออนไลน์', color: '#D4AF37' },
              { href: '/seo/pokdeng', title: '🃏 สอนเล่นป๊อกเด้ง', desc: 'กติกา วิธีเล่น การนับแต้ม และไพ่พิเศษ ฉบับสมบูรณ์', color: '#A855F7' },
              { href: '/seo/pokdeng-hub', title: '🃏 บทความป๊อกเด้ง', desc: 'รวมบทความ กติกา อัตราจ่าย เปรียบเทียบ เล่นได้ทั้งเจ้าและขา', color: '#22c55e' },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="p-5 rounded-2xl no-underline hover:-translate-y-1 transition-transform flex flex-col gap-2 text-left"
                style={{ background: 'linear-gradient(160deg, #111, #000)', border: `1px solid ${a.color}40` }}>
                <span className="font-bold text-white text-base">{a.title}</span>
                <span className="text-sm text-gray-400 leading-relaxed">{a.desc}</span>
                <span className="text-xs font-bold flex items-center gap-1 mt-1" style={{ color: a.color }}>
                  อ่านต่อ <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <p className="text-sm md:text-base text-gray-300 max-w-4xl text-center md:text-left mt-4 pt-6 font-medium"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            นอกจาก <strong>หวยลาว lotto</strong> แล้ว เรายังมีบริการระดับ VIP อย่าง <strong>บาคาร่าเว็บตรง</strong> ให้เล่นรอเวลาหวยออก สมัครสมาชิกฟรีวันนี้!
          </p>
        </article>

        {/* โปรโมชั่น */}
        <div className="mt-12 flex flex-col items-center justify-center w-full text-center">
          {/* ✅ FIX: img+.mp4 → <video> */}
          <video autoPlay muted loop playsInline poster="/ezlotto-promo_poster.webp"
            className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-3xl mb-8 object-contain block hover:scale-105 transition-transform"
            style={{ border: '1px solid rgba(212,175,55,0.6)', boxShadow: '0 0 40px rgba(212,175,55,0.4)' }}
            aria-label="สมัครแทงหวยออนไลน์ หวยลาวพัฒนา EZLOTTO">
            <source src="/ezlotto-promo.webm" type="video/webm" />
            <source src="/ezlotto-promo.mp4"  type="video/mp4" />
            <img src="/ezlotto-promo_poster.webp" alt="โปรโมชั่น EZLOTTO" loading="lazy" decoding="async" className="w-full h-auto rounded-3xl" />
          </video>

          <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
            className="inline-flex justify-center px-12 py-5 text-white font-black text-xl md:text-2xl rounded-full hover:scale-105 transition-transform no-underline pulse-gold border border-purple-300"
            style={{ background: 'linear-gradient(to right, #6d28d9, #7c3aed, #6d28d9)', boxShadow: '0 10px 30px rgba(168,85,247,0.5)' }}>
            💸 คลิกสมัคร ซื้อหวยลาว เลย!
          </a>
        </div>

        {/* FAQ */}
        <section className="mt-16 bg-black/50 p-6 md:p-10 rounded-3xl w-full flex flex-col items-center md:items-start backdrop-blur-sm"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 pb-4 w-full"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 shrink-0" style={{ color: '#D4AF37' }} />
            <h2 className="font-extrabold text-2xl md:text-3xl text-white text-center md:text-left">
              คำถามที่พบบ่อย (FAQ) - แทงหวยออนไลน์ หวยลาว
            </h2>
          </div>
          <div className="space-y-4 w-full max-w-4xl mx-auto">
            {[
              {
                q: <>ซื้อหวยลาวออนไลน์ เว็บไหนดี จ่ายเต็ม <strong className="text-purple-400">ไม่มีเลขอั้น</strong>?</>,
                a: 'EZLOTTO เปิดรับแทงหวยลาวพัฒนาทุกเลขเด็ด ไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90 มีเงื่อนไข ติดต่อแอดมินเพื่อตรวจสอบก่อนแทง',
                open: true,
              },
              {
                q: <><strong>การตรวจหวย</strong> หวยลาวพัฒนา ออกรางวัลวันไหนบ้าง?</>,
                a: 'ออกรางวัลสัปดาห์ละ 3 วัน ทุกวันจันทร์, วันพุธ และวันศุกร์ เริ่มประกาศผลตั้งแต่ 20:00 น. (เวลาประเทศไทย)',
              },
              {
                q: <><strong style={{ color: '#D4AF37' }}>แทงหวยลาวออนไลน์</strong> กับ EZLOTTO ได้เงินบาทละเท่าไหร่?</>,
                a: 'รางวัลเลข 2 ตัวตรง (บน/ล่าง) จ่ายสูงสุดบาทละ 90 เลขวิ่ง 3-4 ต่อ มีเงื่อนไขตามระบบ',
              },
              {
                q: <>หวยลาวพัฒนา <strong>มีรางวัลอะไรบ้าง</strong>?</>,
                a: 'หวยลาวพัฒนาใช้ตัวเลข 4 หลักสุดท้ายในการออกรางวัล แบ่งเป็น 4 ประเภท: รางวัลเลข 4 ตัวตรง, เลข 3 ตัวตรงบน, เลข 2 ตัวตรงบน และเลข 2 ตัวล่าง (ใช้ 2 หลักแรกของ 4 หลักท้าย)',
              },
              {
                q: <>วิธี <strong>แทงหวยลาว</strong> ผ่านแชท พิมพ์อย่างไร?</>,
                a: 'พิมพ์รูปแบบ [เลข][ประเภท]=[จำนวนเงิน] เช่น "12บ=100" คือซื้อเลข 12 บน 100 บาท, "12ล=100" คือซื้อ 12 ล่าง 100 บาท, "12บล=100" คือซื้อทั้งบนและล่าง ติดต่อแอดมิน EZLOTTO เพื่อตรวจสอบเงื่อนไขก่อนแทงทุกครั้ง',
              },
              {
                q: <><strong>หวยลาว</strong> กับ <strong>หวยไทย</strong> ต่างกันอย่างไร?</>,
                a: 'หวยไทยออกเดือนละ 2 ครั้ง มีรางวัลหลายประเภทตั้งแต่รางวัลที่ 1 ถึงเลขท้าย ส่วนหวยลาวพัฒนาออกสัปดาห์ละ 3 ครั้ง ใช้เลข 4 หลัก เหมาะกับผู้ที่ชอบลุ้นบ่อย แต่เงินรางวัลต่อครั้งแตกต่างกันตามประเภทการแทง',
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