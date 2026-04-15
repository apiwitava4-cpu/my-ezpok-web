import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, Trophy, Calendar, HelpCircle, AlertTriangle, LineChart, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: 'สถิติหวยลาว ตรวจหวยลาวพัฒนาวันนี้ กติกาแทงหวยลาวออนไลน์ | EZLOTTO',
  description: 'ตรวจผลหวยลาวพัฒนาวันนี้ ดูสถิติหวยลาวย้อนหลัง พร้อมคู่มือแทงหวยลาวออนไลน์ กติกาการเล่น จ่ายสูงสุดบาทละ 90 ที่ EZLOTTO เว็บตรง มั่นคง 100%',
  keywords: 'หวยลาว, หวยลาวพัฒนา, ตรวจหวยลาว, สถิติหวยลาว, แทงหวยออนไลน์, แทงหวยลาว, หวยลาววันนี้, EZLOTTO, EZPOK168',
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ตรวจผลหวยลาว สถิติย้อนหลัง และกติกาแทงหวยลาวพัฒนาออนไลน์ EZLOTTO",
  "author": { "@type": "Organization", "name": "EZLOTTO" },
  "datePublished": "2026-04-15",
  "description": "เจาะลึกสถิติหวยลาว วิเคราะห์ผลการออกรางวัล หวยลาวพัฒนา และกติกาการแทงหวยออนไลน์ จ่ายสูงสุดบาทละ 90..."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "หวยลาวพัฒนา ออกวันไหนบ้าง กี่โมง?",
      "acceptedAnswer": { "@type": "Answer", "text": "หวยลาวพัฒนา จะทำการออกรางวัลสัปดาห์ละ 3 วัน คือ ทุกวันจันทร์ พุธ และศุกร์ เวลาประมาณ 20.30 น. (ตามเวลาประเทศไทย)" }
    },
    {
      "@type": "Question",
      "name": "แทงหวยลาว 2 ตัว ได้เงินเท่าไหร่?",
      "acceptedAnswer": { "@type": "Answer", "text": "หากแทงหวยลาวออนไลน์กับ EZLOTTO จะได้รับอัตราจ่ายสูงสุดถึง บาทละ 90 สำหรับรางวัลเลข 2 ตัว (บนและล่าง) ไม่มีเลขอั้น" }
    }
  ]
};

export default function LaoLotterySeoPage() {
  return (
    <div className="min-h-screen bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 bg-[#0D0514]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-ezgold-400 hover:text-white transition-colors no-underline">
            <ArrowLeft className="w-5 h-5" /> <span className="font-prompt font-bold">กลับหน้าหลัก</span>
          </Link>
          <img src="/ezlotto-logo.gif" alt="EZ LOTTO Logo" className="h-10 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full overflow-hidden">
        
        {/* ตรวจหวยลาว Section */}
        <section className="bg-black/60 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center mb-10 w-full">
            <h1 className="font-prompt font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-ezgold-600 mb-2">ตรวจผล หวยลาวพัฒนา</h1>
            <p className="text-gray-400 text-sm mb-6">อัปเดตผลหวยลาวล่าสุด ส่งตรงจาก สปป.ลาว (อ้างอิงข้อมูลจาก Sanook News)</p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none hidden sm:flex">
                    <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input type="text" placeholder="กรอกเลขสลาก 4-6 หลัก..." className="w-full sm:pl-12 px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:border-ezgold-500 focus:outline-none text-white font-prompt text-lg tracking-widest text-center" maxLength={6} />
                <button className="px-6 py-3 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-bold rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto whitespace-nowrap">ตรวจผล</button>
            </div>
        </section>

        {/* ตารางสถิติหวยลาว */}
        <section className="mb-8 w-full">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-2">
                <LineChart className="w-6 h-6 text-ezgold-400" />
                <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">สถิติผลหวยลาว ย้อนหลัง 3 งวดล่าสุด</h2>
            </div>
            <div className="overflow-x-auto w-full rounded-xl border border-gray-800">
                <table className="w-full text-center border-collapse min-w-[600px]">
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
                            <td className="py-4 font-bold text-white">วันศุกร์ที่ 10 เมษายน</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">4329</td>
                            <td className="py-4">329</td>
                            <td className="py-4 text-lg font-bold text-red-400">29 / 43</td>
                        </tr>
                        <tr className="border-b border-gray-800 hover:bg-black/40 transition-colors bg-black/20">
                            <td className="py-4 font-bold text-white">วันพุธที่ 8 เมษายน</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">7704</td>
                            <td className="py-4">704</td>
                            <td className="py-4 text-lg font-bold text-red-400">04 / 77</td>
                        </tr>
                        <tr className="hover:bg-black/40 transition-colors">
                            <td className="py-4 font-bold text-white">วันจันทร์ที่ 6 เมษายน</td>
                            <td className="py-4 text-lg md:text-xl tracking-widest text-ezgold-300">1952</td>
                            <td className="py-4">952</td>
                            <td className="py-4 text-lg font-bold text-red-400">52 / 19</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* แบนเนอร์โปรโมชั่น 2 รูป รองรับมือถือและคอมพิวเตอร์ */}
        <section className="w-full flex flex-col items-center gap-5 mb-12">
            <img 
                src="/lotto-banner-1.jpg" 
                alt="อาจารย์ธงให้เลข หวยรัฐบาล หวยลาว" 
                className="w-full h-auto max-w-4xl rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-cover" 
            />
            <img 
                src="/lotto-banner-2.gif" 
                alt="แนะนำเพื่อนรับ 10% EZLOTTO" 
                className="w-full h-auto max-w-4xl rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] border border-ezgold-500/30 object-cover" 
            />
        </section>

        {/* บทความ SEO หวยลาว */}
        <article className="bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl leading-loose w-full">
            <h2 className="text-2xl md:text-3xl font-prompt font-bold mb-5 border-b border-gray-700 pb-3 text-white">
                ทำความรู้จัก <strong className="text-ezgold-400">หวยลาวพัฒนา</strong> ทำไมคนไทยถึงฮิต?
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-300">
                <strong>หวยลาว</strong> หรือชื่ออย่างเป็นทางการคือ <strong>"สลากพัฒนา"</strong> (หวยลาวพัฒนา) เป็นสลากกินแบ่งรัฐบาลที่ดำเนินการโดยรัฐวิสาหกิจกระทรวงการเงินแห่ง สปป.ลาว จุดเด่นสำคัญที่ทำให้ <strong>หวยลาวออนไลน์</strong> ได้รับความนิยมอย่างถล่มทลายในหมู่นักเสี่ยงโชคชาวไทย คือการออกรางวัลที่บ่อยมากถึง <strong>สัปดาห์ละ 3 วัน (จันทร์, พุธ, ศุกร์)</strong> ซึ่งตอบโจทย์ผู้ที่ไม่อยากรอคอยนานถึง 15 วันเหมือนหวยไทย
            </p>
            <p className="mb-6 text-sm md:text-base text-gray-300">
                การวิเคราะห์ <strong>สถิติหวยลาว</strong> จึงเป็นที่นิยมอย่างมาก เนื่องจากมีการออกรางวัลบ่อย ทำให้เซียนหวยสามารถจับทาง <em>เลขเด็ด เลขไหล</em> นำมาคำนวณเป็นสูตรในการแทงหวยงวดถัดไปได้อย่างแม่นยำ (อ้างอิงข้อมูลสถิติจากศูนย์รวมข่าว Sanook)
            </p>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-8 mb-4 text-ezgold-300 flex items-center gap-2">
                <Trophy className="w-5 h-5 md:w-6 md:h-6" /> กติกาการออกรางวัลของ สลากพัฒนา (สปป.ลาว)
            </h3>
            <p className="text-sm text-gray-400 mb-4">โดยปกติแล้วหวยลาวจะออกรางวัลเป็นเลข 6 หลัก แต่สำหรับในประเทศไทย การ <strong>แทงหวยลาวออนไลน์</strong> จะนิยมใช้เลข 4 หลักสุดท้ายมาเป็นเกณฑ์การออกรางวัล ดังนี้:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm md:text-base">
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
                    <p className="font-bold text-white mb-1">รางวัลเลข 4 ตัว</p>
                    <p className="text-gray-400">ใช้ตัวเลขทั้ง 4 หลัก</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
                    <p className="font-bold text-white mb-1">รางวัลเลข 3 ตัว (บน)</p>
                    <p className="text-gray-400">ใช้ตัวเลข 3 หลักสุดท้าย</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
                    <p className="font-bold text-white mb-1">รางวัลเลข 2 ตัว (บน)</p>
                    <p className="text-gray-400">ใช้ตัวเลข 2 หลักสุดท้าย</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
                    <p className="font-bold text-white mb-1">รางวัลเลข 2 ตัว (ล่าง)</p>
                    <p className="text-gray-400">ใช้ตัวเลขหลักที่ 1 และ 2 (นับจากซ้ายของเลข 4 ตัว)</p>
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-prompt font-bold mt-10 mb-4 text-ezgold-300 flex items-center gap-2">
                <Banknote className="w-5 h-5 md:w-6 md:h-6" /> อัตราการจ่าย หวยลาว ที่ EZLOTTO
            </h3>
            <p className="mb-6 text-sm md:text-base text-gray-300">
                <strong>EZLOTTO</strong> คือศูนย์รวม <strong>หวยออนไลน์</strong> ชั้นนำ เปิดรับแทงหวยลาวโดยเน้นความโปร่งใส จ่ายหนัก จ่ายจริง โดยทางเว็บไซต์ได้ปรับกติกาให้สอดคล้องกับความต้องการของนักเล่นชาวไทย โดยเปิดรับเฉพาะการแทง <strong>เลข 2 ตัว และเลขวิ่ง</strong> เพื่อให้อัตราจ่ายสูงที่สุดและไม่จำกัดเลขอั้น
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="w-full">
                    <img src="/ezlotto-howto.gif" alt="กติกาแทงหวยลาว EZLOTTO" className="w-full max-w-[400px] mx-auto rounded-xl border-2 border-ezgold-500/50 shadow-lg" />
                </div>
                <div className="w-full">
                    <h4 className="font-bold text-white text-base md:text-lg mb-3">💰 อัตราการจ่ายเงิน</h4>
                    <ul className="space-y-3 text-xs md:text-sm">
                        <li className="flex justify-between items-center bg-black/40 p-3 rounded border border-gray-700">
                            <span className="text-gray-300">หวยลาว 2 ตัว (บน / ล่าง)</span>
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
                    <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-blue-400 shrink-0" />
                        <p className="text-[11px] md:text-xs text-blue-200"><strong>จุดเด่น EZLOTTO:</strong> เราไม่รับแทง 3 ตัว เพื่อมอบอัตราจ่ายสูงสุดให้กับเลข 2 ตัว (บาทละ 90 ทั้ง 2 ค่าย) <strong>ซื้ออั้นเลข ไม่ลดเปอร์เซ็นต์</strong></p>
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-white text-base md:text-lg mb-3">📱 วิธีการแทงหวยลาวผ่านแชท</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-4">เพียงพิมพ์ข้อความตามรูปแบบด้านล่าง (รูปแบบเดียวกับหวยไทย):</p>
            <ul className="list-disc list-inside text-gray-300 bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 font-mono text-xs md:text-sm space-y-2 overflow-x-auto">
                <li><span className="text-white">12บ=100</span> (ซื้อเลข 12 บน จำนวน 100 บาท)</li>
                <li><span className="text-white">12ล=100</span> (ซื้อเลข 12 ล่าง จำนวน 100 บาท)</li>
                <li><span className="text-white">12บล=100</span> (ซื้อเลข 12 บนและล่าง อย่างละ 100 บาท)</li>
                <li><span className="text-white">12บก=100</span> (ซื้อเลข 12 และ 21 บน อย่างละ 100 บาท)</li>
            </ul>
        </article>

        {/* โปรโมชั่น */}
        <div className="mt-10 text-center w-full">
            <img src="/ezlotto-promo.gif" alt="โปรโมชั่นหวยลาว EZLOTTO" className="max-w-[250px] md:max-w-[300px] w-full mx-auto rounded-xl border-2 border-ezgold-500 shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-6" />
            <Link href="https://ezpok168.com/" target="_blank" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-lg md:text-xl rounded-full shadow-lg hover:scale-105 transition-transform no-underline">
                เข้ากลุ่มรับเลขเด็ด แทงหวยลาว คลิก!
            </Link>
        </div>

        {/* FAQ */}
        <section className="mt-12 bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 w-full">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-ezgold-400" />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">คำถามที่พบบ่อย (FAQ) หวยลาว</h2>
          </div>
          <div className="space-y-4">
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer" open>
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none">หวยลาวพัฒนา ออกวันไหนบ้าง กี่โมง?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">หวยลาวพัฒนา จะทำการออกรางวัลสัปดาห์ละ 3 วัน คือ <strong>ทุกวันจันทร์, วันพุธ และวันศุกร์</strong> เวลาประมาณ 20.30 น. (ตามเวลาประเทศไทย)</p>
            </details>
            <details className="bg-[#111] p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer">
              <summary className="font-prompt font-bold text-gray-200 text-base md:text-lg outline-none">แทงหวยลาว 2 ตัว ได้เงินเท่าไหร่?</summary>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-800 pt-4">หากแทงหวยลาวออนไลน์กับ EZLOTTO จะได้รับอัตราจ่ายสูงสุดถึง <strong>บาทละ 90</strong> สำหรับรางวัลเลข 2 ตัว (ทั้งบนและล่าง) รับประกันความคุ้มค่า ซื้อง่าย จ่ายจริง</p>
            </details>
          </div>
        </section>

      </main>
      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-xs border-t border-gray-800">
          <p className="font-bold mb-2">สงวนลิขสิทธิ์ &copy; 2026 โดย EZLOTTO & EZPOK168.NET</p>
      </footer>
    </div>
  );
}