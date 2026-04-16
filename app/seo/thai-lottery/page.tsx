import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, Trophy, Calendar, CheckCircle, HelpCircle, AlertTriangle, LineChart, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: 'ตรวจหวยรัฐบาลไทย สถิติย้อนหลัง กติกาแทงหวยออนไลน์ จ่าย 90 | EZLOTTO',
  description: 'ตรวจผลสลากกินแบ่งรัฐบาลล่าสุด สถิติหวยย้อนหลัง พร้อมคู่มือการแทงหวยออนไลน์ หวยใต้ดิน กติกาจ่ายสูงสุดบาทละ 90 ที่ EZLOTTO เว็บตรง ไม่ผ่านเอเย่นต์',
  keywords: 'หวยรัฐบาลไทย, ตรวจหวย, สลากกินแบ่งรัฐบาล, หวยออนไลน์, แทงหวย, เลขเด็ด, หวยใต้ดิน, EZLOTTO, EZPOK168',
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "คู่มือแทงหวยรัฐบาลไทย ตรวจผลสลากกินแบ่ง และกติกาการจ่ายเงิน EZLOTTO",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-15",
  "description": "เจาะลึกวิธีการเล่นหวยรัฐบาลไทย สถิติหวยย้อนหลัง และกติกาการแทงหวยออนไลน์ จ่ายสูงสุดบาทละ 90..."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "แทงหวยออนไลน์ EZLOTTO จ่ายบาทละเท่าไหร่?",
      "acceptedAnswer": { "@type": "Answer", "text": "ที่ EZLOTTO ให้อัตราจ่ายหวยรัฐบาลไทยสูงสุดถึง บาทละ 90 สำหรับเลข 2 ตัว (บน-ล่าง) จ่ายเต็ม ไม่มีเลขอั้น และไม่ลดเปอร์เซ็นต์" }
    },
    {
      "@type": "Question",
      "name": "หวยรัฐบาลไทย ออกรางวัลวันไหนบ้าง?",
      "acceptedAnswer": { "@type": "Answer", "text": "สลากกินแบ่งรัฐบาล จะออกรางวัลทุกวันที่ 1 และ 16 ของทุกเดือน (ยกเว้นเดือนพฤษภาคม และธันวาคม ที่มีการเลื่อนวันออกรางวัลตามประกาศของกองสลาก)" }
    }
  ]
};

export default function ThaiLotterySeoPage() {
  return (
    <div className="min-h-screen bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 bg-[#0D0514]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* ปรับลดขนาดปุ่มกลับหน้าหลักตรงนี้ครับ */}
          <Link href="/" className="flex items-center gap-1.5 text-ezgold-400 hover:text-white transition-colors no-underline opacity-90 hover:opacity-100">
            <ArrowLeft className="w-4 h-4 md:w-4 md:h-4" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          
          <img src="/ezlotto-logo.gif" alt="EZ LOTTO Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full overflow-hidden">
        
        {/* ตรวจหวย Section */}
        <section className="bg-black/60 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center mb-10 w-full">
            <h1 className="font-prompt font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-ezgold-600 mb-2">ตรวจผล สลากกินแบ่งรัฐบาล</h1>
            <p className="text-gray-400 text-sm mb-6">อัปเดตผลรวดเร็วทันใจ ส่งตรงจากกองสลากฯ (อ้างอิงข้อมูลจาก Sanook Lotto)</p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 relative justify-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none hidden sm:flex">
                    <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input type="text" placeholder="กรอกเลขสลาก 6 หลัก..." className="w-full sm:pl-12 px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:border-ezgold-500 focus:outline-none text-white font-prompt text-lg tracking-widest text-center" maxLength={6} />
                <button className="px-6 py-3 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-bold rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto whitespace-nowrap">ตรวจผล</button>
            </div>
        </section>

        {/* ตารางสถิติย้อนหลัง */}
        <section className="mb-8 w-full">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-2">
                <Calendar className="w-6 h-6 text-ezgold-400" />
                <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">สถิติผลหวยรัฐบาล ย้อนหลัง 3 งวดล่าสุด</h2>
            </div>
            <div className="overflow-x-auto w-full rounded-xl border border-gray-800">
                <table className="w-full text-center border-collapse min-w-[600px]">
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
                            <td className="py-4 font-bold text-white">1 เมษายน 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">803481</td>
                            <td className="py-4">122 , 809</td>
                            <td className="py-4">559 , 947</td>
                            <td className="py-4 text-lg font-bold text-red-400">90</td>
                        </tr>
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors bg-black/20">
                            <td className="py-4 font-bold text-white">16 มีนาคม 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">997626</td>
                            <td className="py-4">571 , 509</td>
                            <td className="py-4">794 , 329</td>
                            <td className="py-4 text-lg font-bold text-red-400">78</td>
                        </tr>
                        <tr className="hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">1 มีนาคม 2569</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">253603</td>
                            <td className="py-4">975 , 900</td>
                            <td className="py-4">382 , 703</td>
                            <td className="py-4 text-lg font-bold text-red-400">79</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* แบนเนอร์โปรโมชั่น 2 รูป จัดให้อยู่กึ่งกลางเสมอ */}
        <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
            <img 
                src="/lotto-banner-1.png" 
                alt="อาจารย์ธงให้เลข หวยรัฐบาล หวยลาว" 
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
            <img 
                src="/lotto-banner-2.gif" 
                alt="แนะนำเพื่อนรับ 10% EZLOTTO" 
                className="w-full h-auto max-w-3xl mx-auto rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-contain block" 
            />
        </section>
		
        {/* บทความ SEO */}
        <article className="bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl leading-loose w-full">
            <h2 className="text-2xl md:text-3xl font-prompt font-bold mb-5 border-b border-gray-700 pb-3 text-white text-center md:text-left">
                คู่มือการเล่น <strong className="text-ezgold-400">หวยรัฐบาลไทย</strong> และ <strong className="text-ezgold-400">หวยออนไลน์</strong>
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-300 text-center md:text-left">
                <strong>หวยรัฐบาลไทย</strong> หรือที่รู้จักกันอย่างเป็นทางการว่า <strong>"สลากกินแบ่งรัฐบาล"</strong> เป็นรูปแบบการเสี่ยงโชคที่อยู่คู่กับคนไทยมาอย่างยาวนาน โดยมีการออกรางวัลทุกๆ วันที่ 1 และ 16 ของทุกเดือน การซื้อลอตเตอรี่แบบใบนั้น ผู้ซื้อจะมีโอกาสลุ้นรางวัลใหญ่สูงสุดถึง 6 ล้านบาท (รางวัลที่ 1) แต่ในปัจจุบัน ด้วยข้อจำกัดเรื่องการหาเลขเด็ด เลขดัง ที่มักจะขาดตลาด หรือมีการโก่งราคา ทำให้การเล่น <strong>แทงหวยออนไลน์</strong> หรือ <strong>หวยใต้ดิน</strong> ได้รับความนิยมพุ่งสูงขึ้นอย่างก้าวกระโดด
            </p>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-8 mb-4 text-ezgold-300 flex items-center justify-center md:justify-start gap-2">
                <Trophy className="w-5 h-5 md:w-6 md:h-6" /> กติกาและมูลค่าเงินรางวัลสลากกินแบ่งรัฐบาล
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 text-center md:text-left">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลที่ 1 (ตรงกัน 6 หลัก)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">6,000,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 text-center md:text-left">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขหน้า 3 ตัว (มี 2 รางวัล)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 text-center md:text-left">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 3 ตัว (มี 2 รางวัล)</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">4,000 บาท / ใบ</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700 text-center md:text-left">
                    <p className="font-bold text-white text-sm md:text-base">รางวัลเลขท้าย 2 ตัว</p>
                    <p className="text-ezgold-400 text-lg md:text-xl font-bold">2,000 บาท / ใบ</p>
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-10 mb-4 text-ezgold-300 flex items-center justify-center md:justify-start gap-2">
                <Banknote className="w-5 h-5 md:w-6 md:h-6" /> กติกาการเล่นหวยออนไลน์ จ่ายหนัก จ่ายเต็ม ที่ EZLOTTO
            </h3>
            <p className="mb-6 text-sm md:text-base text-gray-300 text-center md:text-left">
                สำหรับผู้ที่ชื่นชอบการเก็งกำไรตัวเลขผ่านระบบ <strong>หวยออนไลน์</strong> เว็บไซต์ <strong>EZLOTTO</strong> (ในเครือ EZPOK168) ได้เปิดให้บริการรับแทงหวยรัฐบาลในรูปแบบที่เข้าใจง่าย โดยอิงผลรางวัลจากกองสลากฯ โดยตรง จุดเด่นที่ทำให้เราเป็นอันดับ 1 คือ <strong>"ไม่มีเลขอั้น และ ไม่ลดเปอร์เซ็นต์การจ่าย"</strong>
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-8">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src="/ezlotto-howto.png" alt="วิธีแทงหวยออนไลน์ EZLOTTO" className="w-full h-auto max-w-[350px] md:max-w-[420px] rounded-xl border-2 border-ezgold-500/50 shadow-lg object-contain block mx-auto" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h4 className="font-bold text-white text-base md:text-lg mb-3 text-center lg:text-left">💰 อัตราการจ่าย (รับเฉพาะ 2 ตัว และเลขวิ่ง)</h4>
                    <ul className="space-y-3 text-xs md:text-sm w-full">
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">เลข 2 ตัว (บน / ล่าง)</span>
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
                    <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded flex items-start justify-center lg:justify-start gap-2 w-full">
                        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                        <p className="text-[11px] md:text-xs text-red-200">ทางเว็บเน้นการให้บริการแทงหวย 2 ตัว และเลขวิ่งเป็นหลัก เพื่อความรวดเร็วในการเคลียร์บิล และรับประกันการ <strong>ไม่ปิดรับเลขดัง</strong></p>
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-white text-base md:text-lg mb-3 text-center md:text-left">📱 วิธีการพิมพ์แทงหวยในระบบ EZLOTTO</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-4 text-center md:text-left">ระบบของเราออกแบบมาให้ใช้งานง่ายผ่านแชท หรือระบบออโต้ รูปแบบการพิมพ์ที่ถูกต้องคือ <code>[เลขที่ต้องการแทง] [รูปแบบ] = [จำนวนเงิน]</code> เช่น:</p>
            <ul className="list-disc list-inside text-gray-300 bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 font-mono text-xs md:text-sm space-y-2 overflow-x-auto w-full mx-auto">
                <li><span className="text-white">12บ=100</span> (ซื้อเลข 12 บน จำนวน 100 บาท)</li>
                <li><span className="text-white">12ล=100</span> (ซื้อเลข 12 ล่าง จำนวน 100 บาท)</li>
                <li><span className="text-white">12บล=100</span> (ซื้อเลข 12 บนและล่าง อย่างละ 100 บาท)</li>
                <li><span className="text-white">12บก=100</span> (ซื้อเลข 12 และ 21 บน อย่างละ 100 บาท)</li>
                <li><span className="text-white">1วบ=100</span> (ซื้อเลขวิ่ง 1 บน จำนวน 100 บาท)</li>
            </ul>

        </article>

        {/* โปรโมชั่น */}
        <div className="mt-10 flex flex-col items-center justify-center w-full text-center">
            <img src="/ezlotto-promo.gif" alt="โปรโมชั่น EZLOTTO" className="w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto rounded-xl border-2 border-ezgold-500 shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-6 object-contain block" />
            <Link href="https://ezpok168.com/" target="_blank" className="inline-block px-8 py-4 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-lg md:text-xl rounded-full shadow-lg hover:scale-105 transition-transform no-underline">
                สมัครแทงหวย EZLOTTO วันนี้!
            </Link>
        </div>

        {/* FAQ */}
        <section className="mt-12 bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 w-full flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4 w-full justify-center md:justify-start">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-ezgold-400" />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          <div className="space-y-4 w-full">
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full" open>
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none">แทงหวยออนไลน์ EZLOTTO จ่ายบาทละเท่าไหร่?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">ที่ EZLOTTO ให้อัตราจ่ายหวยรัฐบาลไทยสูงสุดถึง <strong>บาทละ 90</strong> สำหรับเลข 2 ตัว (บน-ล่าง) จ่ายเต็ม ไม่มีเลขอั้น และไม่ลดเปอร์เซ็นต์ใดๆ ทั้งสิ้น</p>
            </details>
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer w-full">
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none">หวยรัฐบาลไทย ออกรางวัลวันไหนบ้าง?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">สลากกินแบ่งรัฐบาล จะออกรางวัลทุกวันที่ <strong>1 และ 16 ของทุกเดือน</strong> (ยกเว้นเดือนพฤษภาคม และธันวาคม ที่มีการเลื่อนวันออกรางวัลเล็กน้อยตามประกาศของกองสลาก)</p>
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