import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, HelpCircle, AlertTriangle, LineChart, Banknote } from "lucide-react";
import LaoLottoChecker from "./LaoLottoChecker"; // 🟢 เรียกใช้ฟอร์มป๊อปอัป

export const metadata: Metadata = {
  title: 'สถิติหวยลาวพัฒนา ตรวจหวยลาววันนี้ กติกาแทงหวยลาวออนไลน์ จ่ายเต็ม 90 | EZLOTTO',
  description: 'ศูนย์รวมข้อมูลหวยลาวพัฒนาครบวงจร ตรวจผลหวยลาวล่าสุด วิเคราะห์สถิติหวยลาวพัฒนาย้อนหลัง พร้อมคู่มือวิธีแทงหวยลาวออนไลน์ กติกาการจ่ายเงินสูงสุดบาทละ 90 ที่ EZLOTTO เว็บตรง มั่นคง จ่ายจริง',
  keywords: 'หวยลาว, หวยลาวพัฒนา, ตรวจหวยลาว, ตรวจหวยลาวพัฒนา, สถิติหวยลาว, สถิติหวยลาวพัฒนา, แทงหวยออนไลน์, แทงหวยลาว, หวยลาววันนี้, เลขเด็ดหวยลาว, EZLOTTO, EZPOK168',
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "คู่มือครบเครื่อง หวยลาวพัฒนา: ตรวจผลล่าสุด สถิติย้อนหลัง และวิธีแทงออนไลน์ให้ได้เงิน",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-16",
  "description": "เจาะลึกข้อมูลหวยลาวพัฒนา (สลากพัฒนา) อัปเดตผลรางวัลรวดเร็ว วิเคราะห์สถิติเลขออกบ่อย และคู่มือการแทงหวยลาวออนไลน์อัตราจ่ายสูง บาทละ 90 ที่ EZLOTTO"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "หวยลาวพัฒนา ออกรางวัลวันไหนบ้าง และออกเวลากี่โมง?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยลาวพัฒนา หรือ สลากพัฒนา จะทำการออกรางวัลสัปดาห์ละ 3 วัน คือ ทุกวันจันทร์ วันพุธ และวันศุกร์ โดยจะเริ่มประกาศผลรางวัลตั้งแต่เวลา 20.00 น. และสิ้นสุดเวลาประมาณ 20.30 น. ตามเวลาประเทศไทย" }
    },
    {
      "@type": "Question",
      "name": "แทงหวยลาวพัฒนาออนไลน์กับ EZLOTTO ได้เงินบาทละเท่าไหร่?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZLOTTO มอบอัตราจ่ายสูงสุดสำหรับหวยลาวพัฒนา โดยรางวัลเลข 2 ตัว (บนและล่าง) จ่ายหนักถึงบาทละ 90 และเลขวิ่งรับเงินคืนหลายเท่า มั่นคง ปลอดภัย จ่ายจริง 100%" }
    }
  ]
};

export default function LaoLotterySeoPage() {
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

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 bg-[#0D0514]/95 backdrop-blur-md w-full">
        <div className="max-w-5xl mx-auto px-4 h-16 md:h-[75px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-ezgold-400 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100 shrink-0">
            <ArrowLeft className="w-4 h-4 md:w-4 md:h-4" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          
          <img 
            src="/ezlotto-logo.gif" 
            alt="EZ LOTTO Logo" 
            className="h-10 md:h-12 w-auto max-w-[150px] md:max-w-[210px] object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex flex-col items-center">
        
        {/* 🟢 ส่วนตรวจหวยลาว (เรียกใช้ Component ป๊อปอัป) */}
        <section className="bg-black/60 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center mb-10 w-full flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[80px] opacity-20 bg-purple-500 pointer-events-none"></div>
            <h1 
              className="text-4xl md:text-6xl mb-2 font-bold drop-shadow-md tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] relative z-10" 
              style={{ fontFamily: "'B2SIGN', 'Charm', cursive" }}
            >
              ตรวจผล หวยลาวพัฒนา
            </h1>
            <p className="text-gray-400 text-sm mb-4 relative z-10">อัปเดตผลหวยลาววันนี้ รวดเร็ว แม่นยำ ส่งตรงจาก สปป.ลาว</p>
            
            <LaoLottoChecker />
        </section>

        {/* ตารางสถิติหวยลาว */}
        <section className="mb-8 w-full max-w-full">
            <div className="flex items-center justify-center gap-3 mb-4 border-b border-gray-800 pb-2">
                <LineChart className="w-6 h-6 text-ezgold-400" />
                <h2 className="font-prompt font-bold text-xl md:text-2xl text-white text-center">สถิติ หวยลาวพัฒนาล่าสุด ย้อนหลัง</h2>
            </div>
            <div className="overflow-x-auto w-full rounded-xl border border-gray-800">
                <table className="w-full text-center border-collapse min-w-[600px] mx-auto">
                    <thead>
                        <tr className="bg-ezgold-900/30 text-ezgold-400 text-sm font-prompt border-b border-ezgold-500/30">
                            <th className="py-4 px-2">งวดประจำวันที่</th>
                            <th className="py-4 px-2">รางวัลเลข 4 ตัว</th>
                            <th className="py-4 px-2">เลข 3 ตัว</th>
                            <th className="py-4 px-2">เลข 2 ตัว (บน/ล่าง)</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm md:text-base font-medium">
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">วันศุกร์ที่ 10 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">4329</td>
                            <td className="py-4">329</td>
                            <td className="py-4 text-lg font-bold text-red-400">29 / 43</td>
                        </tr>
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors bg-black/20">
                            <td className="py-4 font-bold text-white">วันพุธที่ 8 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">7704</td>
                            <td className="py-4">704</td>
                            <td className="py-4 text-lg font-bold text-red-400">04 / 77</td>
                        </tr>
                        <tr className="hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">วันจันทร์ที่ 6 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">1952</td>
                            <td className="py-4">952</td>
                            <td className="py-4 text-lg font-bold text-red-400">52 / 19</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* แบนเนอร์โปรโมชั่น 2 รูป */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
            <img 
                src="/lotto-banner-1.png" 
                alt="อาจารย์ธงให้เลขเด็ด หวยลาวพัฒนา" 
                loading="lazy" decoding="async"
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
            <img 
                src="/lotto-banner-2.gif" 
                alt="โปรโมชั่นแนะนำเพื่อนรับ 10% EZLOTTO" 
                loading="lazy" decoding="async"
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
        </section>

        <article className="bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl leading-loose w-full flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-prompt font-bold mb-5 border-b border-gray-700 pb-3 text-white w-full">
                เจาะลึก <strong className="text-ezgold-400">หวยลาวพัฒนา</strong> (สลากพัฒนา) ข้อมูลครบจบในที่เดียว
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-300 max-w-3xl">
                <strong>หวยลาวพัฒนา</strong> หรือชื่ออย่างเป็นทางการคือ <strong>"สลากพัฒนา"</strong> ดำเนินการโดยรัฐวิสาหกิจหวยพัฒนา กระทรวงการเงิน แห่ง สปป.ลาว คือรูปแบบการเสี่ยงโชคที่ได้รับความนิยมสูงสุดในหมู่นักเสี่ยงโชคชาวไทยในปัจจุบัน เนื่องจากมีข้อดีคือการออกรางวัลที่บ่อยครั้งถึง <strong>สัปดาห์ละ 3 วัน (วันจันทร์, วันพุธ, วันศุกร์)</strong> ทำให้ไม่ต้องรอนานเหมือนหวยรัฐบาลไทย การเล่น <strong>หวยลาวออนไลน์</strong> จึงกลายเป็นช่องทางสร้างรายได้ที่รวดเร็วและต่อเนื่อง
            </p>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-3xl">
                ที่ EZLOTTO เราคือศูนย์รวมข้อมูล **หวยลาวพัฒนา** ที่ครบถ้วนที่สุด คุณสามารถ **ตรวจหวยลาววันนี้** ได้อย่างรวดเร็วแม่นยำ เช็คผลย้อนหลังเพื่อวิเคราะห์ **สถิติหวยลาว** หาเลขเด็ดเลขไหล เพื่อเพิ่มโอกาสในการถูกรางวัล พร้อมคู่มือการแทงหวยออนไลน์ที่ปลอดภัยและมั่นคงที่สุด
            </p>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-8 mb-4 text-ezgold-300 flex items-center justify-center gap-2 w-full">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> กติกาการออกรางวัล หวยลาวพัฒนา (ฉบับอัปเดต)
            </h3>
            <p className="text-sm text-gray-400 mb-4 max-w-3xl">การออกรางวัลหวยลาวพัฒนาจะใช้ระบบวงล้อตัวเลขมาตรฐาน โดยปกติจะออกรางวัลเป็นเลข 6 หลัก แต่สำหรับการแทง **หวยลาวออนไลน์** ในประเทศไทย จะนิยมใช้ตัวเลข 4 หลักสุดท้ายมาเป็นเกณฑ์ตัดสินรางวัล ดังนี้:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm md:text-base w-full max-w-3xl">
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white mb-1">รางวัลเลข 4 ตัวตรง</p>
                    <p className="text-gray-400">ใช้ตัวเลขทั้ง 4 หลักสุดท้าย</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white mb-1">รางวัลเลข 3 ตัวตรง (บน)</p>
                    <p className="text-gray-400">ใช้ตัวเลข 3 หลักสุดท้าย</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white mb-1">รางวัลเลข 2 ตัวตรง (บน)</p>
                    <p className="text-gray-400">ใช้ตัวเลข 2 หลักสุดท้าย</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-white mb-1">รางวัลเลข 2 ตัวล่าง</p>
                    <p className="text-gray-400">ใช้ตัวเลขหลักที่ 1 และ 2 (นับจากซ้ายของเลข 4 ตัว)</p>
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-10 mb-4 text-ezgold-300 flex items-center justify-center gap-2 w-full">
                <Banknote className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> แทงหวยลาวพัฒนาออนไลน์ที่ EZLOTTO จ่ายหนัก บาทละ 90
            </h3>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-3xl">
                **EZLOTTO** มอบประสบการณ์การแทง **หวยลาวพัฒนาออนไลน์** ที่ดีที่สุด ด้วยระบบที่ทันสมัย ใช้งานง่าย และปลอดภัยสูง เราเปิดรับแทงหวยลาวรูปแบบยอดนิยมที่นักเล่นชาวไทยชื่นชอบ คือ **เลข 2 ตัว (บน-ล่าง) และเลขวิ่ง** เพื่อมอบอัตราจ่ายที่สูงที่สุดและเคลียร์บิลรวดเร็ว จุดเด่นของเราคือ **"รับประกันไม่มีเลขอั้น และไม่ลดเปอร์เซ็นต์การจ่าย"** แม้จะเป็นเลขดังระดับประเทศ
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-8 w-full max-w-4xl">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src="/ezlotto-howto.png" alt="วิธีแทงหวยลาวพัฒนาออนไลน์ EZLOTTO" className="w-full h-auto max-w-[350px] md:max-w-[420px] mx-auto rounded-xl border-2 border-ezgold-500/50 shadow-lg object-contain block" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h4 className="font-bold text-white text-base md:text-lg mb-3">💰 อัตราการจ่ายเงิน หวยลาว (EZLOTTO)</h4>
                    <ul className="space-y-3 text-xs md:text-sm w-full max-w-md">
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">หวยลาว 2 ตัวตรง (บน / ล่าง)</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">จ่ายบาทละ 90</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลขวิ่งบน</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">3 ต่อ (รวมทุน)</span>
                        </li>
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลขวิ่งล่าง</span>
                            <span className="text-ezgold-400 font-bold text-base md:text-lg">4 ต่อ (รวมทุน)</span>
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded flex items-start justify-center lg:justify-start gap-2 w-full max-w-md text-left">
                        <AlertTriangle className="w-5 h-5 text-blue-400 shrink-0" />
                        <p className="text-[11px] md:text-xs text-blue-200"><strong>AEO Note:</strong> EZLOTTO เน้นความคุ้มค่าสูงสุด โดยมอบอัตราจ่ายเลข 2 ตัว เต็มบาทละ 90 (รับเฉพาะ 2 ตัวและเลขวิ่ง) มั่นใจได้ว่าคุณจะได้รับเงินรางวัลครบทุกบาท <strong>ไม่มีปิดรับเลขดัง</strong></p>
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-white text-base md:text-lg mb-3 w-full">📱 วิธีการแทงหวยลาวผ่านระบบอัตโนมัติ EZLOTTO</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-4 max-w-3xl">ระบบของเราออกแบบมาให้ใช้งานง่าย รูปแบบการพิมพ์ที่ถูกต้องคือ <code>[เลขที่ต้องการแทง] [รูปแบบ] = [จำนวนเงิน]</code> ดังนี้:</p>
            <div className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 w-full max-w-md mx-auto overflow-hidden text-left">
                <ul className="list-disc list-inside text-gray-300 font-mono text-xs md:text-sm space-y-2">
                    <li><span className="text-white">12บ=100</span> (ซื้อเลข 12 บน 100 บาท)</li>
                    <li><span className="text-white">12ล=100</span> (ซื้อเลข 12 ล่าง 100 บาท)</li>
                    <li><span className="text-white">12บล=100</span> (ซื้อเลข 12 บนและล่าง อย่างละ 100 บาท)</li>
                    <li><span className="text-white">12บก=100</span> (ซื้อเลข 12 และ 21 บน อย่างละ 100 บาท)</li>
                </ul>
            </div>
        </article>

        {/* โปรโมชั่น */}
        <div className="mt-10 flex flex-col items-center justify-center w-full text-center">
            <img src="/ezlotto-promo.gif" loading="lazy" decoding="async" alt="โปรโมชั่นแทงหวยลาวพัฒนา EZLOTTO" className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-xl border-2 border-ezgold-500 shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-6 object-contain block" />
            <Link href="https://ezpok168.com/" target="_blank" className="inline-flex justify-center px-8 py-4 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-lg md:text-xl rounded-full shadow-lg hover:scale-105 transition-transform no-underline">
                เข้ากลุ่มรับเลขเด็ด แทงหวยลาว คลิก!
            </Link>
        </div>

        {/* FAQ */}
        <section className="mt-12 bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6 border-b border-gray-700 pb-4 w-full">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-ezgold-400 shrink-0" />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white text-center">คำถามที่พบบ่อย (FAQ) หวยลาวพัฒนา</h2>
          </div>
          <div className="space-y-4 w-full max-w-3xl mx-auto">
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full text-center md:text-left" open>
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none flex justify-center md:justify-start">หวยลาวพัฒนา ออกรางวัลวันไหนบ้าง และเวลากี่โมง?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">หวยลาวพัฒนา จะทำการออกรางวัลสัปดาห์ละ 3 วัน คือ <strong>ทุกวันจันทร์, วันพุธ และวันศุกร์</strong> โดยจะเริ่มประกาศผลรางวัลตั้งแต่เวลา 20.00 น. และสิ้นสุดเวลาประมาณ 20.30 น. ตามเวลาประเทศไทย</p>
            </details>
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full text-center md:text-left">
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none flex justify-center md:justify-start">แทงหวยลาวพัฒนาออนไลน์กับ EZLOTTO ได้เงินบาทละเท่าไหร่?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">EZLOTTO มอบอัตราจ่ายสูงสุดสำหรับหวยลาวพัฒนา โดยรางวัลเลข <strong>2 ตัวตรง (บนและล่าง) จ่ายหนักถึงบาทละ 90</strong> มั่นใจได้ว่าคุณจะได้รับเงินรางวัลครบถ้วน มั่นคง ปลอดภัย 100%</p>
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