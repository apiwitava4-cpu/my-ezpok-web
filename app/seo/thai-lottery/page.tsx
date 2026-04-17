import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, LineChart, Banknote } from "lucide-react";
import LottoChecker from "./LottoChecker"; // ดึงฟอร์มป๊อปอัปเข้ามาใช้

export const metadata: Metadata = {
  title: 'ตรวจหวยรัฐบาลไทยล่าสุด สถิติย้อนหลัง กติกาแทงหวยออนไลน์ จ่ายบาทละ 90 | EZLOTTO',
  description: 'ตรวจผลสลากกินแบ่งรัฐบาลล่าสุด แม่นยำ รวดเร็ว เช็คสถิติหวยรัฐบาลไทยย้อนหลัง พร้อมคู่มือวิธีแทงหวยออนไลน์ กติกาจ่ายสูงสุดบาทละ 90 เว็บตรง EZLOTTO',
  keywords: 'หวยรัฐบาลไทย, ตรวจหวยรัฐบาลไทย, สลากกินแบ่งรัฐบาล, ตรวจหวย, หวยออนไลน์, แทงหวยออนไลน์, เลขเด็ดหวยรัฐบาล, EZLOTTO, EZPOK168',
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "คู่มือครบเครื่อง หวยรัฐบาลไทย: วิธีตรวจผล สถิติ และกติกาการแทงหวยออนไลน์ EZLOTTO",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-16", 
  "description": "เจาะลึกข้อมูลหวยรัฐบาลไทย (สลากกินแบ่งรัฐบาล) วิธีการตรวจรางวัล สถิติเลขเด็ดย้อนหลัง และแนะนำกติกาการแทงหวยออนไลน์อัตราจ่ายสูง บาทละ 90"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "แทงหวยรัฐบาลไทยออนไลน์ที่ EZLOTTO จ่ายบาทละเท่าไหร่?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO ให้อัตราจ่ายหวยรัฐบาลไทยสูงสุดที่บาทละ 90 สำหรับรางวัลเลข 2 ตัว (บน-ล่าง) จ่ายเต็ม ไม่มีเลขอั้น มั่นใจได้ในระบบเว็บตรง" }
    },
    {
      "@type": "Question",
      "name": "สลากกินแบ่งรัฐบาล หรือ หวยรัฐบาลไทย ออกรางวัลวันไหนบ้าง?",
      "acceptedAnswer": { "@type": "Answer", "text": "ปกติจะออกรางวัลทุกวันที่ 1 และ 16 ของทุกเดือน หากตรงกับวันหยุดนักขัตฤกษ์หรือวันสำคัญ อาจมีการเลื่อนวันออกรางวัลตามประกาศของสำนักงานสลากกินแบ่งรัฐบาล" }
    }
  ]
};

export default function ThaiLotterySeoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'B2SIGN';
          src: url('/B2-SIGN.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 bg-[#0D0514]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-ezgold-400 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100 shrink-0">
            <ArrowLeft className="w-4 h-4 md:w-4 md:h-4" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          
          <img 
            src="/ezlotto-logo.gif" 
            alt="EZ LOTTO Logo" 
            className="h-10 md:h-12 w-auto max-w-[150px] sm:max-w-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full overflow-hidden flex flex-col items-center">
        
        <section className="bg-black/60 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center mb-10 w-full flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[80px] opacity-20 bg-ezgold-500 pointer-events-none"></div>
            
            <h1 
              className="text-4xl md:text-6xl mb-2 font-bold drop-shadow-md tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] relative z-10" 
              style={{ fontFamily: "'B2SIGN', 'Charm', cursive" }}
            >
              ตรวจผล สลากกินแบ่งรัฐบาล
            </h1>

            <LottoChecker />
        </section>

        <section className="mb-8 w-full max-w-full">
            <div className="flex items-center justify-center gap-3 mb-4 border-b border-gray-800 pb-2">
                <Calendar className="w-6 h-6 text-ezgold-400" />
                <h2 className="font-prompt font-bold text-xl md:text-2xl text-white text-center">สถิติผลหวยรัฐบาล ย้อนหลัง 3 งวดล่าสุด</h2>
            </div>
            <div className="overflow-x-auto w-full rounded-xl border border-gray-800">
                <table className="w-full text-center border-collapse min-w-[600px] mx-auto">
                    <thead>
                        <tr className="bg-ezgold-900/30 text-ezgold-400 text-sm font-prompt border-b border-ezgold-500/30">
                            <th className="py-4 px-2">งวดประจำวันที่</th>
                            <th className="py-4 px-2">รางวัลที่ 1</th>
                            <th className="py-4 px-2">เลขหน้า 3 ตัว</th>
                            <th className="py-4 px-2">เลขท้าย 3 ตัว</th>
                            <th className="py-4 px-2">เลขท้าย 2 ตัว</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm md:text-base font-medium">
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">16 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">309612</td>
                            <td className="py-4">868 , 424</td>
                            <td className="py-4">355 , 108</td>
                            <td className="py-4 text-lg font-bold text-red-400">77</td>
                        </tr>
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors bg-black/20">
                            <td className="py-4 font-bold text-white">1 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">292514</td>
                            <td className="py-4">406 , 113</td>
                            <td className="py-4">851 , 098</td>
                            <td className="py-4 text-lg font-bold text-red-400">47</td>
                        </tr>
                        <tr className="hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">16 มีนาคม 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">833009</td>
                            <td className="py-4">510 , 983</td>
                            <td className="py-4">439 , 954</td>
                            <td className="py-4 text-lg font-bold text-red-400">64</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* 🟡 นำ Loading Lazy มาใช้กับรูปภาพแบนเนอร์ด้านล่างลด Bandwidth */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
            <img 
                src="/lotto-banner-1.png" 
                alt="อาจารย์ธงให้เลขเด็ด หวยรัฐบาลไทย" 
                loading="lazy" decoding="async"
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
            <img 
                src="/lotto-banner-2.gif" 
                alt="แนะนำเพื่อนรับ 10% EZLOTTO" 
                loading="lazy" decoding="async"
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
        </section>
		
        <article className="bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl leading-loose w-full flex flex-col items-center text-center md:text-left md:items-start">
            <h2 className="text-2xl md:text-3xl font-prompt font-bold mb-5 border-b border-gray-700 pb-3 text-white w-full">
                ทำความรู้จัก <strong className="text-ezgold-400">หวยรัฐบาลไทย</strong> และรูปแบบการเล่นยอดนิยม
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-300 max-w-3xl">
                **หวยรัฐบาลไทย** หรือที่เรียกอย่างเป็นทางการว่า **สลากกินแบ่งรัฐบาล** เป็นการเสี่ยงโชคที่ถูกต้องตามกฎหมายและอยู่คู่สังคมไทยมาอย่างยาวนาน ออกรางวัลโดยสำนักงานสลากกินแบ่งรัฐบาล ทุกวันที่ 1 และ 16 ของเดือน (อาจมีการเลื่อนตามวันสำคัญ) โดยรางวัลใหญ่สูงสุดหรือรางวัลที่ 1 มีมูลค่าสูงถึง 6 ล้านบาทต่อใบ
            </p>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-3xl">
                ในปัจจุบัน นอกจากการซื้อสลากแบบใบแล้ว การซื้อ **สลากดิจิทัล** ผ่านแอปพลิเคชัน 'เป๋าตัง' ก็ได้รับความนิยมสูงมากเพราะสะดวกและขายในราคามาตรฐาน 80 บาท อย่างไรก็ตาม สำหรับผู้ที่ชอบความหลากหลายและต้องการอัตราจ่ายที่กำหนดเองได้ การเล่น **แทงหวยออนไลน์** ในรูปแบบหวยใต้ดิน (2 ตัว, 3 ตัว, เลขวิ่ง) ผ่านเว็บตรงที่มั่นคงอย่าง EZLOTTO ก็เป็นอีกหนึ่งทางเลือกที่ได้รับความนิยมอย่างกว้างขวาง
            </p>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-8 mb-4 text-ezgold-300 flex items-center justify-center md:justify-start gap-2 w-full">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> กติกาและมูลค่าเงินรางวัลสลากกินแบ่งรัฐบาล (อ้างอิงกองสลากฯ)
            </h3>
            <p className="text-sm text-gray-400 mb-4 max-w-3xl">สลาก 1 ชุด มี 1 ล้านฉบับ (000000-999999) หากจำหน่ายหมด เงินรางวัลรวมต่อชุดจะเป็นไปตามสัดส่วนที่กองสลากกำหนด โดยมีรางวัลหลักๆ ดังนี้:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full max-w-3xl">
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลที่ 1 (ตรงกัน 6 หลัก)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">6,000,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขหน้า 3 ตัว (มี 2 รางวัล)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 3 ตัว (มี 2 รางวัล)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 2 ตัว</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">2,000 บาท / ใบ</p>
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-10 mb-4 text-ezgold-300 flex items-center justify-center md:justify-start gap-2 w-full">
                <Banknote className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> แทงหวยรัฐบาลไทยออนไลน์ อัตราจ่ายสูง จ่ายเต็ม ที่ EZLOTTO
            </h3>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-3xl">
                สำหรับคอหวยที่เน้นการทำกำไรจากเลขเด็ด EZLOTTO เปิดให้บริการ **แทงหวยรัฐบาลไทยออนไลน์** โดยอ้างอิงผลรางวัลหลักจากสลากกินแบ่งรัฐบาล จุดเด่นที่ทำให้เราเป็นเว็บยอดนิยมคือ **"อัตราจ่ายสูง จ่ายเต็ม ไม่มีเลขอั้น"** ในรูปแบบการเล่นที่เข้าใจง่าย:
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-8 w-full max-w-4xl">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src="/ezlotto-howto.png" loading="lazy" decoding="async" alt="วิธีแทงหวยรัฐบาลไทยออนไลน์ EZLOTTO" className="w-full h-auto max-w-[350px] md:max-w-[420px] mx-auto rounded-xl border-2 border-ezgold-500/50 shadow-lg object-contain block" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h4 className="font-bold text-white text-base md:text-lg mb-3">💰 อัตราการจ่าย (รับเฉพาะ 2 ตัว และเลขวิ่ง)</h4>
                    <ul className="space-y-3 text-xs md:text-sm w-full max-w-md">
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลข 2 ตัวตรง (บน / ล่าง)</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">จ่ายบาทละ 90</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลขวิ่งบน (1 ตัวตรง)</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">3 ต่อ (รวมทุน)</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลขวิ่งล่าง (1 ตัวตรง)</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">4 ต่อ (รวมทุน)</span>
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded flex items-start justify-center lg:justify-start gap-2 w-full max-w-md text-left">
                        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                        <p className="text-[11px] md:text-xs text-red-200">เพื่อความรวดเร็วในการเคลียร์บิลและรับประกันการจ่ายเต็ม **EZLOTTO** เน้นให้บริการแทงหวยรูปแบบ 2 ตัว และเลขวิ่งเป็นหลัก โดยอ้างอิงผลจากรางวัลเลขท้ายสลากฯ</p>
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-white text-base md:text-lg mb-3 w-full text-center md:text-left">📱 วิธีการพิมพ์แทงหวยในระบบ EZLOTTO (ตัวอย่าง)</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-4 max-w-3xl">ระบบของ EZLOTTO ออกแบบให้แทงง่ายผ่านระบบแชทอัตโนมัติ โดยใช้รูปแบบ: `[เลขที่ต้องการแทง] [รูปแบบ] = [จำนวนเงิน]`:</p>
            
            <div className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 w-full max-w-md mx-auto overflow-hidden text-left">
                <ul className="list-disc list-inside text-gray-300 font-mono text-xs md:text-sm space-y-2">
                    <li><span className="text-white">12บ=100</span> (แทงเลข 12 บน 100 บาท)</li>
                    <li><span className="text-white">12ล=100</span> (แทงเลข 12 ล่าง 100 บาท)</li>
                    <li><span className="text-white">12บล=100</span> (แทง 12 บน-ล่าง อย่างละ 100 บาท)</li>
                    <li><span className="text-white">1วบ=100</span> (แทงวิ่ง 1 บน 100 บาท)</li>
                </ul>
            </div>
        </article>

        {/* โปรโมชั่น - จัดกลาง */}
        <div className="mt-10 flex flex-col items-center justify-center w-full text-center">
            <img src="/ezlotto-promo.gif" loading="lazy" decoding="async" alt="โปรโมชั่นสมัครแทงหวย EZLOTTO" className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-xl border-2 border-ezgold-500 shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-6 object-contain block" />
            <Link href="https://ezpok168.com/" target="_blank" className="inline-flex justify-center px-8 py-4 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-lg md:text-xl rounded-full shadow-lg hover:scale-105 transition-transform no-underline">
                สมัครแทงหวยรัฐบาล EZLOTTO คลิก!
            </Link>
        </div>

        {/* FAQ - จัดกลาง */}
        <section className="mt-12 bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6 border-b border-gray-700 pb-4 w-full">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-ezgold-400 shrink-0" />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white text-center">คำถามที่พบบ่อย (FAQ) หวยรัฐบาลไทย</h2>
          </div>
          <div className="space-y-4 w-full max-w-3xl mx-auto">
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full text-center md:text-left" open>
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none flex justify-center md:justify-start">แทงหวยรัฐบาลไทยออนไลน์ที่ EZLOTTO จ่ายบาทละเท่าไหร่?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">EZLOTTO มอบอัตราจ่ายสูงสุดสำหรับรางวัลเลข 2 ตัว (บน-ล่าง) ที่ **บาทละ 90** โดยเป็นเว็บตรงที่มั่นคง จ่ายเต็มยอด ไม่มีเลขอั้น และไม่ลดเปอร์เซ็นต์</p>
            </details>
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full text-center md:text-left">
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none flex justify-center md:justify-start">สลากกินแบ่งรัฐบาล ออกรางวัลวันไหนและเวลาใด?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">โดยปกติ **สลากกินแบ่งรัฐบาล** หรือ **หวยรัฐบาลไทย** จะออกรางวัลทุกวันที่ **1 และ 16 ของทุกเดือน** โดยจะเริ่มถ่ายทอดสดการออกรางวัลตั้งแต่เวลาประมาณ 14:30 น. เป็นต้นไปจนจบรางวัลที่ 1 ในเวลาประมาณ 16:00 น.</p>
            </details>
          </div>
        </section>

      </main>
      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-xs border-t border-gray-800 w-full flex justify-center">
          <p className="font-bold mb-2">สงวนลิขสิทธิ์ &copy; 2026 โดย EZLOTTO & EZPOK168.NET</p>
      </footer>
    </div>
  );
}