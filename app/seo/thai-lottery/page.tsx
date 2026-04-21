import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, LineChart, Banknote, ShieldCheck, Smartphone, Search, ArrowRight } from "lucide-react";
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
  "description": "เจาะลึก หวยไทย lotto ตรวจผลหวยล่าสุดรวดเร็ว พร้อมคู่มือแทงหวยออนไลน์เว็บไหนดี แนะนำเว็บแทงหวยไม่มีเลขอั้น จ่ายเต็มบาทละ 90"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "การตรวจหวย และ อัพเดตผลหวยรัฐบาลล่าสุด ดูได้ที่ไหนรวดเร็วที่สุด?",
      "acceptedAnswer": { "@type": "Answer", "text": "สามารถติดตาม หวยไทย lotto และ อัพเดตผลหวยรัฐบาลล่าสุด ได้แบบเรียลไทม์ผ่านระบบตรวจหวยของ EZLOTTO แม่นยำและอัปเดตไวที่สุดในประเทศ" }
    },
    {
      "@type": "Question",
      "name": "ซื้อหวยออนไลน์เว็บไหนดี จ่ายเต็ม ไม่มีเลขอั้น?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO คือศูนย์รวม แทงหวยออนไลน์ ที่ดีที่สุดในตอนนี้ เปิดรับทุกเลขดัง ไม่มีเลขอั้น จ่ายเต็มสูงสุดบาทละ 90 มั่นใจได้ในระบบเทียบเท่า บาคาร่าเว็บตรง ถอนเงินได้จริง 100%" }
    }
  ]
};

export default function ThaiLotterySeoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `@font-face { font-family: 'B2SIGN'; src: url('/B2-SIGN.ttf') format('truetype'); }`}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 bg-[#0D0514]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-ezgold-400 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100 shrink-0">
            <ArrowLeft className="w-4 h-4 md:w-4 md:h-4" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <img src="/ezlotto-logo.gif" alt="แทงหวยออนไลน์ EZ LOTTO Logo" className="h-10 md:h-12 w-auto max-w-[150px] sm:max-w-full object-contain" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full overflow-hidden flex flex-col items-center">
        
        {/* 🟢 Hero & Action Section: ดันคำว่า หวยไทย lotto & แทงหวยออนไลน์ */}
        <section className="bg-black/60 p-6 md:p-8 rounded-3xl border border-red-500/40 shadow-[0_0_30px_rgba(220,38,38,0.15)] text-center mb-12 w-full flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[100px] opacity-20 bg-red-500 pointer-events-none"></div>
            
            <span className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-xs md:text-sm rounded-full mb-4 shadow-[0_0_15px_rgba(220,38,38,0.6)] animate-pulse border border-red-400">
                🔥 แทงหวยออนไลน์ ไม่มีเลขอั้น 🔥
            </span>
            <h1 className="text-3xl md:text-5xl mb-3 font-bold drop-shadow-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37]" style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4' }}>
              หวยไทย lotto การตรวจหวย <br className="hidden md:block"/>
              อัพเดตผลหวยรัฐบาลล่าสุด
            </h1>
            <p className="text-gray-300 text-sm md:text-lg mb-2 relative z-10 max-w-2xl font-prompt font-medium">
              เปลี่ยนจากการแค่ <strong>การตรวจหวย</strong> มาเป็น <strong>แทงหวยออนไลน์</strong> ที่ดีที่สุด <br className="hidden md:block"/>
              เปิดรับทุกเลขดัง <strong className="text-ezgold-400 text-lg md:text-xl ml-1">ไม่มีเลขอั้น จ่ายเต็ม 90</strong>
            </p>
            
            {/* 🟡 1. อัปเกรด Component ตรวจหวย (ถูกแก้ให้มีมิติแล้วจากด้านบน) */}
            <LottoChecker />
            
            <Link href="https://ezpok168.com/" target="_blank" className="mt-10 px-12 py-5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white font-extrabold text-xl md:text-2xl rounded-full hover:scale-105 transition-all shadow-[0_10px_25px_rgba(220,38,38,0.5)] border border-red-300 no-underline w-full max-w-md flex items-center justify-center gap-3 group">
                💸 ซื้อหวยออนไลน์ คลิก! <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
        </section>

        {/* 🟡 2. อัปเกรด ตารางสถิติย้อนหลัง (3D, Gradient, Glowing) */}
        <section className="mb-12 w-full max-w-full">
            <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="w-7 h-7 text-ezgold-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white text-center tracking-wide">
                    สถิติผลหวยรัฐบาล <span className="text-transparent bg-clip-text bg-gradient-to-r from-ezgold-400 to-yellow-200">ย้อนหลัง 3 งวดล่าสุด</span>
                </h2>
            </div>
            
            <div className="overflow-x-auto w-full rounded-2xl border border-gray-700 shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-black/80 backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>
                <table className="w-full text-center border-collapse min-w-[650px] mx-auto relative z-10">
                    <thead>
                        <tr className="bg-gradient-to-r from-red-950/80 via-black to-red-950/80 text-ezgold-400 text-sm md:text-base font-prompt border-b-2 border-ezgold-500/50 shadow-md">
                            <th className="py-5 px-4 font-bold tracking-wide uppercase">งวดประจำวันที่</th>
                            <th className="py-5 px-4 font-bold tracking-wide uppercase">รางวัลที่ 1</th>
                            <th className="py-5 px-4 font-bold tracking-wide uppercase text-gray-300">เลขหน้า 3 ตัว</th>
                            <th className="py-5 px-4 font-bold tracking-wide uppercase text-gray-300">เลขท้าย 3 ตัว</th>
                            <th className="py-5 px-4 font-bold tracking-wide uppercase">เลขท้าย 2 ตัว</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-200 text-sm md:text-base font-medium">
                        <tr className="border-b border-gray-800 hover:bg-red-900/20 transition-all duration-300 group">
                            <td className="py-5 px-4 font-bold text-white group-hover:text-ezgold-300 transition-colors">16 เมษายน 2569</td>
                            <td className="py-5 px-4 text-2xl md:text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">309612</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">868 , 424</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">355 , 108</td>
                            <td className="py-5 px-4 text-xl md:text-2xl font-black text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]">77</td>
                        </tr>
                        <tr className="border-b border-gray-800 hover:bg-red-900/20 transition-all duration-300 bg-black/40 group">
                            <td className="py-5 px-4 font-bold text-white group-hover:text-ezgold-300 transition-colors">1 เมษายน 2569</td>
                            <td className="py-5 px-4 text-2xl md:text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">292514</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">406 , 113</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">851 , 098</td>
                            <td className="py-5 px-4 text-xl md:text-2xl font-black text-red-400">47</td>
                        </tr>
                        <tr className="hover:bg-red-900/20 transition-all duration-300 group">
                            <td className="py-5 px-4 font-bold text-white group-hover:text-ezgold-300 transition-colors">16 มีนาคม 2569</td>
                            <td className="py-5 px-4 text-2xl md:text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">833009</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">510 , 983</td>
                            <td className="py-5 px-4 font-mono text-gray-400 group-hover:text-gray-200">439 , 954</td>
                            <td className="py-5 px-4 text-xl md:text-2xl font-black text-red-400">64</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-center w-full flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-prompt">
                <Search className="w-4 h-4" /> ดูสถิติ <strong>หวยไทย lotto</strong> เพิ่มเติม หรือ <strong className="text-red-400">แทงหวยออนไลน์</strong> ที่ EZLOTTO
            </div>
        </section>

        {/* Banners */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
            <img src="/lotto-banner-1.png" alt="เลขเด็ด อาจารย์ธง แทงหวยออนไลน์" loading="lazy" decoding="async" className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block hover:scale-[1.01] transition-transform" />
            <img src="/lotto-banner-2.gif" alt="ซื้อหวยออนไลน์ แนะนำเพื่อนรับ 10% EZLOTTO" loading="lazy" decoding="async" className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block hover:scale-[1.01] transition-transform" />
        </section>
		
        {/* 🟢 LONG-FORM SEO ARTICLE: ยำคีย์เวิร์ด หวยไทย lotto & ไม่มีเลขอั้น */}
        <article className="bg-black/50 p-8 md:p-12 rounded-3xl border border-gray-800 shadow-[0_0_40px_rgba(220,38,38,0.1)] leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-prompt font-extrabold mb-8 pb-5 border-b border-gray-700 w-full text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] leading-snug">
                ซื้อหวยออนไลน์เว็บไหนดี? แนะนำ EZLOTTO <br className="hidden md:block" />
                แหล่งรวม หวยไทย lotto ไม่มีเลขอั้น จ่ายเต็ม 90
            </h2>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
                หากคุณเป็นคนที่ชื่นชอบการเสี่ยงโชคตัวเลข และมักจะเสิร์ชหา <strong>"อัพเดตผลหวยรัฐบาลล่าสุด"</strong> หรือ <strong>"การตรวจหวย"</strong> อยู่เป็นประจำ คำถามต่อไปที่คุณอาจจะสงสัยคือ <strong>"ซื้อหวยออนไลน์เว็บไหนดี?"</strong> ที่เชื่อถือได้ จ่ายจริง และไม่เอาเปรียบผู้เล่น คำตอบที่ดีที่สุดในวงการตอนนี้คือ <strong>EZLOTTO</strong> ศูนย์รวมการ <strong>แทงหวยออนไลน์</strong> ที่ได้รับความน่าเชื่อถือระดับเดียวกับ <strong>บาคาร่าเว็บตรง</strong> ไม่ผ่านเอเย่นต์
            </p>

            <h3 className="text-xl md:text-2xl font-prompt font-bold mt-10 mb-5 text-ezgold-300 flex items-center justify-center md:justify-start gap-3 w-full">
                <ShieldCheck className="w-7 h-7 shrink-0 text-green-400 drop-shadow-md" /> ทำไมคอหวยถึงเลือก แทงหวยออนไลน์ กับ EZLOTTO?
            </h3>
            <p className="mb-5 text-sm md:text-base text-gray-300 max-w-4xl">
                ปัญหาคลาสสิกของการซื้อหวยผ่านเจ้ามือทั่วไปคือ "การอั้นเลขดัง" หรือ "การจ่ายครึ่งราคา" เมื่อเลขนั้นมีคนซื้อเยอะ แต่ที่ <strong>EZLOTTO</strong> เราทลายข้อจำกัดเหล่านั้นทิ้งทั้งหมด เพื่อยกระดับประสบการณ์ <strong>หวยไทย lotto</strong> ของคุณ:
            </p>
            <ul className="list-none space-y-4 mb-10 text-sm md:text-base text-gray-300 w-full mx-auto md:mx-0 px-4 md:px-0">
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ezgold-500 shrink-0 mt-1" />
                    <span><strong className="text-white text-lg">รับประกัน ไม่มีเลขอั้น:</strong> ไม่ว่าจะเป็นเลขเด็ดจากสำนักไหน หรือเลขดังโซเชียล เราเปิดรับแทง <strong>หวยออนไลน์</strong> ทุกตัวเลข 100% ให้คุณเก็งกำไรได้เต็มที่</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ezgold-500 shrink-0 mt-1" />
                    <span><strong className="text-white text-lg">จ่ายเต็ม บาทละ 90:</strong> เราให้อัตราการจ่ายสูงที่สุดในตลาดสำหรับ <strong>หวยไทย</strong> เลข 2 ตัว ถูกปุ๊บรับเงินเต็มจำนวน ไม่มีการหักเปอร์เซ็นต์ใดๆ</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ezgold-500 shrink-0 mt-1" />
                    <span><strong className="text-white text-lg">เว็บตรง มั่นคง ปลอดภัย:</strong> ด้วยมาตรฐานเดียวกับ <strong>บาคาร่าเว็บตรง</strong> คุณจึงมั่นใจได้ว่า ถูกหลักล้านก็จ่ายหลักล้าน ถอนเงินได้รวดเร็วทันใจ</span>
                </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-prompt font-bold mt-8 mb-5 text-ezgold-300 flex items-center justify-center md:justify-start gap-3 w-full">
                <Trophy className="w-7 h-7 shrink-0 text-yellow-400 drop-shadow-md" /> กติกาและมูลค่ารางวัล หวยไทย lotto (หวยรัฐบาล)
            </h3>
            <p className="text-sm text-gray-400 mb-6 max-w-4xl">
                <strong>หวยรัฐบาลไทย</strong> จะดำเนินการ <strong>อัพเดตผลหวยรัฐบาลล่าสุด</strong> โดยสำนักงานสลากกินแบ่งรัฐบาล ทุกวันที่ 1 และ 16 ของเดือน สำหรับการซื้อลอตเตอรี่แบบใบ (ฉบับละ 80 บาท) จะมีเงินรางวัลอ้างอิงตามมาตรฐานดังนี้:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-4xl mx-auto">
                <div className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลที่ 1 (ตรงกัน 6 หลัก)</p>
                    <p className="text-ezgold-400 text-xl md:text-2xl font-black mt-2 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">6,000,000 บาท / ใบ</p>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขหน้า 3 ตัว</p>
                    <p className="text-ezgold-400 text-xl md:text-2xl font-black mt-2 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 3 ตัว</p>
                    <p className="text-ezgold-400 text-xl md:text-2xl font-black mt-2 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 2 ตัว</p>
                    <p className="text-ezgold-400 text-xl md:text-2xl font-black mt-2 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">2,000 บาท / ใบ</p>
                </div>
            </div>

            <h3 className="text-xl md:text-2xl font-prompt font-bold mt-10 mb-5 text-ezgold-300 flex items-center justify-center md:justify-start gap-3 w-full">
                <Banknote className="w-7 h-7 shrink-0 text-red-400 drop-shadow-md" /> อัตราการจ่าย หวยใต้ดินออนไลน์ (จ่ายเต็ม บาทละ 90)
            </h3>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-4xl">
                เพื่อให้ <strong>การตรวจหวย</strong> ของคุณตื่นเต้นและทำกำไรได้มากที่สุด EZLOTTO เปิดรับ <strong>แทงหวยออนไลน์</strong> รูปแบบหวยใต้ดิน โดยเน้นที่ <strong>เลข 2 ตัว และเลขวิ่ง</strong> เพื่อการันตีการจ่ายสูงสุด <strong>ไม่มีเลขอั้น</strong>:
            </p>

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-10 w-full max-w-4xl">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src="/ezlotto-howto.png" loading="lazy" decoding="async" alt="วิธีแทงหวยรัฐบาลไทยออนไลน์ EZLOTTO" className="w-full h-auto max-w-[350px] md:max-w-[420px] mx-auto rounded-2xl border border-red-500/50 shadow-[0_10px_30px_rgba(220,38,38,0.3)] object-contain block" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h4 className="font-bold text-white text-lg md:text-xl mb-5 border-b border-gray-700 pb-2">💰 อัตราการจ่าย (รับเฉพาะ 2 ตัวและเลขวิ่ง)</h4>
                    <ul className="space-y-4 text-sm md:text-base w-full max-w-md">
                        <li className="flex justify-between items-center bg-gradient-to-r from-red-950/40 to-black p-4 rounded-xl border border-red-900/50 shadow-inner">
                            <span className="text-gray-200 font-bold">เลข 2 ตัวตรง (บน / ล่าง)</span>
                            <span className="text-ezgold-400 font-black text-xl drop-shadow-md">จ่ายบาทละ 90</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/60 p-4 rounded-xl border border-gray-800">
                            <span className="text-gray-400 font-medium">เลขวิ่งบน (1 ตัวตรง)</span>
                            <span className="text-white font-bold text-lg">3 ต่อ (รวมทุน)</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/60 p-4 rounded-xl border border-gray-800">
                            <span className="text-gray-400 font-medium">เลขวิ่งล่าง (1 ตัวตรง)</span>
                            <span className="text-white font-bold text-lg">4 ต่อ (รวมทุน)</span>
                        </li>
                    </ul>
                    <div className="mt-6 p-5 bg-gradient-to-r from-red-900/30 to-black border border-red-500/40 rounded-2xl flex items-start justify-center lg:justify-start gap-3 w-full max-w-md text-left shadow-[0_5px_15px_rgba(220,38,38,0.1)]">
                        <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                        <p className="text-xs md:text-sm text-red-200 leading-relaxed font-medium">
                            เพื่อให้เราสามารถรับประกัน <strong>"จ่ายเต็ม ไม่มีเลขอั้น"</strong> ได้จริง 100% ทางเว็บไซต์จึงเน้นให้บริการ <strong>แทงหวยออนไลน์</strong> รูปแบบ 2 ตัวเป็นหลัก เพื่อความมั่นคงสูงสุด
                        </p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl md:text-2xl font-prompt font-bold mt-10 mb-5 text-ezgold-300 flex items-center justify-center md:justify-start gap-3 w-full">
                <Smartphone className="w-7 h-7 shrink-0 text-blue-400 drop-shadow-md" /> วิธีแทงหวยออนไลน์ พิมพ์ง่ายๆ ผ่านแชท
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-5 max-w-4xl">
                ระบบของ EZLOTTO ออกแบบให้คุณสามารถ <strong>ซื้อหวยออนไลน์</strong> ได้ง่ายๆ ผ่านมือถือ โดยใช้รูปแบบการพิมพ์มาตรฐานที่คอหวยคุ้นเคย ดังนี้:
            </p>
            <div className="bg-black/80 p-6 md:p-8 rounded-2xl border border-gray-700 w-full max-w-2xl mx-auto md:mx-0 overflow-hidden text-left mb-6 shadow-[inset_0_5px_20px_rgba(0,0,0,0.8)]">
                <p className="text-gray-400 text-sm mb-4 font-bold border-b border-gray-800 pb-2">📝 รูปแบบ: <code className="bg-gray-900 border border-gray-600 px-2 py-1 rounded text-ezgold-400 mx-1">[เลข] [รูปแบบ] = [จำนวนเงิน]</code></p>
                <ul className="list-none space-y-3 text-sm md:text-base">
                    <li className="flex items-center gap-3"><span className="text-green-400">✔️</span> <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-24 text-center">12บ=100</span> <span className="text-gray-400">(แทงเลข 12 บน จำนวน 100 บาท)</span></li>
                    <li className="flex items-center gap-3"><span className="text-green-400">✔️</span> <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-24 text-center">12ล=100</span> <span className="text-gray-400">(แทงเลข 12 ล่าง จำนวน 100 บาท)</span></li>
                    <li className="flex items-center gap-3"><span className="text-green-400">✔️</span> <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-24 text-center">12บล=100</span> <span className="text-gray-400">(แทง 12 บนและล่าง อย่างละ 100 บาท)</span></li>
                    <li className="flex items-center gap-3"><span className="text-green-400">✔️</span> <span className="text-white font-mono font-bold bg-gray-900 px-2 py-1 rounded w-24 text-center">1วบ=100</span> <span className="text-gray-400">(แทงเลขวิ่ง 1 บน จำนวน 100 บาท)</span></li>
                </ul>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 max-w-4xl text-center md:text-left mt-4 border-t border-gray-800 pt-6 font-medium">
                นอกจาก <strong>หวยไทย lotto</strong> แล้ว เรายังมีบริการเสริมระดับ VIP อย่าง <strong>บาคาร่าเว็บตรง</strong> ให้คุณได้เล่นรอเวลาหวยออก สมัครสมาชิกฟรีวันนี้ พร้อมรับโปรโมชั่นจัดเต็ม!
            </p>
        </article>

        {/* โปรโมชั่น */}
        <div className="mt-12 flex flex-col items-center justify-center w-full text-center">
            <img src="/ezlotto-promo.gif" loading="lazy" decoding="async" alt="สมัครแทงหวยออนไลน์ EZLOTTO ไม่มีเลขอั้น" className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-3xl border border-ezgold-500 shadow-[0_0_40px_rgba(212,175,55,0.4)] mb-8 object-contain block hover:scale-105 transition-transform" />
            <Link href="https://ezpok168.com/" target="_blank" className="inline-flex justify-center px-12 py-5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white font-black text-xl md:text-2xl rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:scale-105 transition-transform no-underline pulse-gold border border-red-300">
                💸 คลิกสมัคร ซื้อหวยออนไลน์ เลย!
            </Link>
        </div>

        {/* 🟢 FAQ Section (AEO Schema Support) */}
        <section className="mt-16 bg-black/50 p-6 md:p-10 rounded-3xl border border-gray-800 shadow-2xl w-full flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 border-b border-gray-700 pb-4 w-full">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 shrink-0 text-ezgold-400 drop-shadow-md" />
            <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white text-center md:text-left">คำถามที่พบบ่อย (FAQ) - แทงหวยออนไลน์</h2>
          </div>
          <div className="space-y-5 w-full max-w-4xl mx-auto">
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full text-center md:text-left shadow-md hover:border-gray-600 transition-colors" open>
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg outline-none flex justify-center md:justify-start items-center gap-2">
                 ซื้อหวยออนไลน์เว็บไหนดี จ่ายเต็ม <strong className="text-red-400">ไม่มีเลขอั้น</strong>?
              </summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4 font-medium">
                <strong>EZLOTTO</strong> คือเว็บ <strong>แทงหวยออนไลน์</strong> ที่ดีที่สุดในตอนนี้ เปิดรับทุกเลขดัง <strong>ไม่มีเลขอั้น จ่ายเต็มสูงสุดบาทละ 90</strong> มั่นใจได้ในระบบ <strong>บาคาร่าเว็บตรง</strong> การเงินมั่นคง ถอนเงินได้จริง 100% ปลอดภัยแน่นอน
              </p>
            </details>
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full text-center md:text-left shadow-md hover:border-gray-600 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg outline-none flex justify-center md:justify-start items-center gap-2">
                 <strong className="text-ezgold-400">แทงหวยออนไลน์</strong> ที่ EZLOTTO จ่ายบาทละเท่าไหร่?
              </summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4 font-medium">
                เราให้อัตราจ่าย <strong>หวยรัฐบาลไทย</strong> (หวยใต้ดิน) <strong>สูงสุดที่บาทละ 90</strong> สำหรับรางวัลเลข 2 ตัวบนและล่าง และ 3 ต่อสำหรับเลขวิ่ง <strong>จ่ายเต็มจำนวน</strong> ไม่หักเปอร์เซ็นต์เหมือนที่อื่น
              </p>
            </details>
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full text-center md:text-left shadow-md hover:border-gray-600 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg outline-none flex justify-center md:justify-start items-center gap-2">
                 <strong className="text-white">การตรวจหวย</strong> หวยรัฐบาลไทย ปิดรับแทงกี่โมง?
              </summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4 font-medium">
                เพื่อรอรับ <strong>อัพเดตผลหวยรัฐบาลล่าสุด</strong> ทุกวันที่ <strong>1 และ 16 ของทุกเดือน</strong> ระบบแทงหวยออนไลน์ EZLOTTO จะ <strong>ปิดรับแทงในเวลา 15:20 น.</strong> ของวันออกรางวัล ให้คุณมีเวลาตัดสินใจนานที่สุด
              </p>
            </details>
          </div>
        </section>

      </main>
      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-xs border-t border-gray-800 w-full flex justify-center">
          <p className="font-bold mb-2">สงวนลิขสิทธิ์ &copy; 2026 โดย EZLOTTO & EZPOK168.NET - แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม</p>
      </footer>
    </div>
  );
}