import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Trophy, HelpCircle, Star, PlayCircle, Gamepad2 } from "lucide-react";

// 🟢 1. SEO Metadata: เน้นคีย์เวิร์ดหลักให้ Google ดึงไปโชว์
export const metadata: Metadata = {
  title: 'ป๊อกเด้ง คืออะไร? กติกา วิธีเล่นป๊อกเด้งออนไลน์ให้ได้เงิน | EZPOK168',
  description: 'เจาะลึกกติกาไพ่ป๊อกเด้งแบบวิกิพีเดีย พร้อมเทคนิคการเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด บาคาร่า และ แทงหวยออนไลน์ ที่ EZPOK168.COM เว็บตรง จ่ายจริง 100%',
  keywords: 'ป๊อกเด้ง, ป๊อกเด้งออนไลน์, ไพ่ป๊อกเด้ง, ป๊อก 8 ป๊อก 9, บาคาร่า, หวยไทย, หวยลาว, EZPOK168',
};

// 🟢 2. AEO & SEO Schema: สร้างโครงสร้างข้อมูลให้ AI ของ Google อ่าน (Article + FAQ)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "กติกาไพ่ป๊อกเด้ง และเทคนิคเล่นป๊อกเด้งออนไลน์ 2 ใบเปิด",
  "author": { "@type": "Organization", "name": "EZPOK168" },
  "publisher": { "@type": "Organization", "name": "EZPOK168", "logo": { "@type": "ImageObject", "url": "https://ezpok168.net/logo.png" } },
  "datePublished": "2026-04-14",
  "description": "คู่มือฉบับสมบูรณ์ อธิบายกติกาการเล่นป๊อกเด้ง การนับแต้มไพ่พิเศษ และเทคนิคการเล่นคาสิโนออนไลน์..."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ไพ่ป๊อกเด้ง คืออะไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "ป๊อกเด้ง เป็นเกมไพ่ยอดนิยมของไทย ผู้เล่นต้องรวมแต้มไพ่ 2-3 ใบให้ได้ใกล้เคียง 9 แต้มมากที่สุด เพื่อเอาชนะเจ้ามือ" }
    },
    {
      "@type": "Question",
      "name": "ป๊อก 8 ป๊อก 9 คืออะไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "คือการที่ไพ่ 2 ใบแรกบวกกันได้ 8 หรือ 9 แต้ม ถือเป็นแต้มสูงสุดในเกม จะชนะและได้เงินรางวัลทันทีโดยไม่ต้องจั่วไพ่เพิ่ม" }
    },
    {
      "@type": "Question",
      "name": "เว็บเล่นป๊อกเด้งออนไลน์ที่เชื่อถือได้คือเว็บไหน?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZPOK168.COM คือเว็บผู้ให้บริการป๊อกเด้งออนไลน์ 2 ใบเปิด บาคาร่า และหวยออนไลน์ ที่มีระบบฝากถอนออโต้ มั่นคง ปลอดภัยที่สุด" }
    }
  ]
};

export default function PokdengSeoArticle() {
  return (
    <div className="min-h-screen relative bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black" id="top">
      
      {/* ฝังโค้ด Schema สำหรับบอท Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-10" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-10" style={{ backgroundColor: '#A855F7' }}></div>
      </div>

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20" style={{ backgroundColor: 'rgba(13, 5, 20, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-ezgold-400 hover:text-white transition-colors no-underline">
            <ArrowLeft className="w-5 h-5" /> <span className="font-prompt font-bold text-sm md:text-base">กลับหน้าหลัก</span>
          </Link>
          <span className="font-prompt font-bold text-lg md:text-xl tracking-tight text-white">EZPOK168 <span style={{ color: '#D4AF37' }}>KNOWLEDGE</span></span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        
        {/* Banner บทความ */}
        <div className="w-full rounded-2xl overflow-hidden mb-8 border border-ezgold-500/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img src="/pok9-bg.gif" alt="ป๊อกเด้งออนไลน์ EZPOK168" className="w-full h-[200px] md:h-[300px] object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <span className="px-4 py-1.5 bg-ezgold-500 text-black font-bold text-xs md:text-sm rounded-full mb-4">คู่มือการเล่นฉบับสมบูรณ์</span>
                <h1 className="font-prompt font-extrabold text-2xl md:text-5xl text-white drop-shadow-lg leading-tight">
                    เจาะลึกกติกา <span style={{ color: '#D4AF37' }}>ไพ่ป๊อกเด้ง</span> <br className="hidden md:block" />
                    พร้อมสูตรทำเงินออนไลน์ 2026
                </h1>
            </div>
        </div>

        {/* Article Body (Long-form Content เน้นคีย์เวิร์ด) */}
        <article className="bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl leading-loose">
          
          <p className="text-lg text-gray-300 mb-6 font-medium">
             หากพูดถึงเกมไพ่ที่คนไทยคุ้นเคยและชื่นชอบมากที่สุด คงหนีไม่พ้น <strong>"ไพ่ป๊อกเด้ง"</strong> (Pok Deng) เกมเดิมพันสุดคลาสสิกที่มีประวัติศาสตร์ยาวนาน ด้วยกติกาที่เข้าใจง่าย จบเกมไว และมีลุ้นอัตราจ่ายที่ทวีคูณ (เด้ง) ในยุคดิจิทัลนี้ การเล่นป๊อกเด้งได้ถูกยกระดับขึ้นเป็น <strong><span className="text-ezgold-400">ป๊อกเด้งออนไลน์</span></strong> ที่สามารถเข้าเล่นได้ตลอด 24 ชั่วโมง ผ่านเว็บไซต์ชั้นนำอย่าง <strong>WWW.EZPOK168.COM</strong> บทความนี้จะพาทุกท่านไปทำความเข้าใจตั้งแต่กติกาพื้นฐานแบบวิกิพีเดีย ไปจนถึงเทคนิคการทำกำไรขั้นสูง
          </p>

          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-10 mb-5 border-b border-gray-700 pb-3 flex items-center gap-3" style={{ color: '#D4AF37' }}>
            <Trophy className="w-8 h-8" /> ป๊อกเด้ง คืออะไร? ทำความเข้าใจพื้นฐาน
          </h2>
          <p className="mb-4 text-gray-300">
            <strong>ป๊อกเด้ง</strong> เป็นเกมไพ่ที่ใช้ไพ่มาตรฐาน 1 สำรับ (52 ใบ ไม่รวมโจ๊กเกอร์) โดยแบ่งผู้เล่นออกเป็น 2 ฝ่ายหลักๆ คือ <strong>"เจ้ามือ"</strong> (Dealer) และ <strong>"ลูกมือ"</strong> หรือผู้เล่น (Player) วัตถุประสงค์หลักของเกมคือ ลูกมือจะต้องรวมแต้มไพ่ในมือ (2 หรือ 3 ใบ) ให้ได้แต้มรวมใกล้เคียงกับ <strong>9 แต้ม</strong> ให้ได้มากที่สุด เพื่อนำไปวัดผลแพ้ชนะกับแต้มไพ่ของฝั่งเจ้ามือ
          </p>
          <p className="mb-4 text-gray-300">
            จุดเด่นที่ทำให้เกมนี้มีเสน่ห์คือคำว่า <strong>"เด้ง"</strong> ซึ่งหมายถึงอัตราการจ่ายเงินรางวัลที่เพิ่มขึ้นเป็น 2 เท่า หรือ 3 เท่า หากไพ่ในมือมีดอกเดียวกัน (สัญลักษณ์เดียวกัน) หรือเป็นไพ่คู่ 
          </p>

          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-10 mb-5 border-b border-gray-700 pb-3 flex items-center gap-3 text-white">
            <CheckCircle className="w-8 h-8 text-green-500" /> กติกาการนับแต้มไพ่ ป๊อกเด้ง (Card Valuation)
          </h2>
          <p className="mb-4 text-gray-300">การนับแต้มของไพ่ป๊อกเด้งนั้นคล้ายคลึงกับเกม <strong>บาคาร่า</strong> โดยมีหลักการนับแต้มดังต่อไปนี้:</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4 p-4 bg-black/30 rounded-xl border border-gray-800">
            <li><strong>ไพ่ A (Ace):</strong> มีค่าเท่ากับ 1 แต้ม</li>
            <li><strong>ไพ่ตัวเลข 2 ถึง 9:</strong> มีค่าเท่ากับตัวเลขที่ปรากฏบนหน้าไพ่</li>
            <li><strong>ไพ่ 10, J, Q, K:</strong> มีค่าเท่ากับ 0 แต้ม (แต่หากได้ไพ่กลุ่มนี้ผสมกันอาจเป็นไพ่รูปแบบพิเศษได้)</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <em>ตัวอย่างการรวมแต้ม:</em> หากคุณได้ไพ่ 4 และ 5 แต้มรวมคือ 9 (<strong>ป๊อก 9</strong>) / หากคุณได้ไพ่ 8 และ 5 แต้มรวมคือ 13 จะนับเฉพาะหลักหน่วยคือ 3 แต้ม
          </p>

          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-10 mb-5 border-b border-gray-700 pb-3 flex items-center gap-3 text-white">
            <Star className="w-8 h-8 text-purple-500" /> รูปแบบไพ่พิเศษ เรียงลำดับจากใหญ่ไปเล็ก
          </h2>
          <p className="mb-4 text-gray-300">
             การเล่น <strong>ป๊อกเด้งออนไลน์</strong> บน <strong>EZPOK168</strong> สิ่งที่นักเดิมพันทุกคนใฝ่ฝันคือการได้ไพ่รูปแบบพิเศษ เพราะนอกจากจะชนะเจ้ามือได้ง่ายแล้ว ยังได้รับอัตราจ่ายที่สูงมาก เรียงตามความใหญ่ได้ดังนี้:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-xl border border-ezgold-500/30" style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.1), rgba(0,0,0,0.8))' }}>
                <h4 className="font-bold text-lg text-ezgold-400 mb-2">1. ป๊อก 9 และ ป๊อก 8 (แต้มสูงสุด)</h4>
                <p className="text-sm text-gray-300">คือไพ่ 2 ใบแรกที่แจกมาบวกกันได้ 9 หรือ 8 แต้ม ถือว่าใหญ่ที่สุดในเกม หากได้ดอกเดียวกันด้วยจะเรียกว่า <strong>ป๊อก 9 สองเด้ง</strong> (รับเงิน 2 เท่า)</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-black/50">
                <h4 className="font-bold text-lg text-white mb-2">2. ตอง (Three of a Kind)</h4>
                <p className="text-sm text-gray-300">เมื่อจั่วไพ่ใบที่ 3 แล้วได้ไพ่ตัวเลขหรือตัวภาษาอังกฤษเหมือนกันทั้ง 3 ใบ เช่น K-K-K หรือ 5-5-5 ชนะแต้มธรรมดาทุกรูปแบบ อัตราจ่าย <strong>5 เท่า (5 เด้ง)</strong></p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-black/50">
                <h4 className="font-bold text-lg text-white mb-2">3. สเตรทฟลัช (Straight Flush)</h4>
                <p className="text-sm text-gray-300">ไพ่ 3 ใบเรียงลำดับกันและมีดอกเดียวกัน เช่น 4-5-6 โพแดง อัตราจ่าย <strong>5 เท่า (5 เด้ง)</strong></p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-black/50">
                <h4 className="font-bold text-lg text-white mb-2">4. เรียง (Straight)</h4>
                <p className="text-sm text-gray-300">ไพ่ 3 ใบเรียงลำดับกันแต่ดอกไม่เหมือนกัน เช่น 7-8-9 อัตราจ่าย <strong>3 เท่า (3 เด้ง)</strong></p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-black/50">
                <h4 className="font-bold text-lg text-white mb-2">5. สามเหลือง / ขอบ / เซียน</h4>
                <p className="text-sm text-gray-300">ไพ่ 3 ใบเป็นฝรั่งทั้งหมด (J, Q, K รูปแบบใดก็ได้) อัตราจ่าย <strong>3 เท่า (3 เด้ง)</strong></p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-12 mb-5 border-b border-gray-700 pb-3 flex items-center gap-3 text-white">
            <Gamepad2 className="w-8 h-8 text-red-500" /> จากวงไพ่พื้นบ้าน สู่ "ป๊อกเด้งออนไลน์ 2 ใบเปิด"
          </h2>
          <p className="mb-4 text-gray-300">
             ปัจจุบันรูปแบบที่ได้รับความนิยมมากที่สุดในคาสิโนออนไลน์คือ <strong>"ป๊อกเด้ง 2 ใบเปิด"</strong> รูปแบบนี้จะตัดการจั่วไพ่ใบที่ 3 ออกไป วัดผลแพ้ชนะกันด้วยไพ่ 2 ใบแรกเท่านั้น ข้อดีคือเกมมีความรวดเร็ว ทันใจ โปร่งใส 100% เพราะมีการถ่ายทอดสด (Live) สับไพ่ให้ดูแบบเรียลไทม์ ซึ่งเว็บไซต์ <strong>WWW.EZPOK168.COM</strong> เป็นผู้นำด้านระบบนี้ 
          </p>
          <p className="mb-4 text-gray-300">
             นอกจาก <strong>ป๊อกเด้ง</strong> แล้ว ภายในระบบของ EZPOK168 ยังมีบริการเกมไพ่ <strong>บาคาร่าออนไลน์</strong> ที่คอไพ่สามารถใช้สูตรอ่านเค้าไพ่มังกรหรือปิงปองในการทำกำไรได้ รวมถึงสายเสี่ยงโชคตัวเลข ทางเราก็มีบริการ <strong>หวยออนไลน์</strong> ทั้ง <strong>หวยไทย</strong> และ <strong>หวยลาวพัฒนา</strong> ที่ให้อัตราจ่ายสูงถึงบาทละ 90 จ่ายเต็มไม่มีอั้น ทำให้คุณสามารถสนุกได้ครบจบในยูสเซอร์เดียว
          </p>

          <div className="mt-10 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 text-center" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.1), rgba(168,85,247,0.1))' }}>
              <h3 className="font-prompt font-bold text-2xl text-white mb-4">พร้อมที่จะประลองฝีมือแล้วหรือยัง?</h3>
              <p className="text-gray-300 mb-6">สมัครสมาชิกเล่น ป๊อกเด้งออนไลน์ บาคาร่า หวยไทย หวยลาว กับ <strong className="text-ezgold-400">EZPOK168</strong> ฝาก-ถอน ระบบออโต้ ไม่มีขั้นต่ำ 1 บาทก็เล่นได้!</p>
              <Link href="https://ezpok168.com/" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 text-black font-bold text-lg md:text-xl rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform no-underline" style={{ background: 'linear-gradient(to right, #D4AF37, #F3E5AB)' }}>
                  คลิกที่นี่ เพื่อเข้าสู่ระบบ EZPOK168 <PlayCircle className="w-6 h-6" />
              </Link>
          </div>

        </article>

        {/* 🟢 3. ส่วนของ AEO (Answer Engine Optimization) ทำเป็น FAQ ให้ Bot ดึงคำตอบไปได้เลย */}
        <section className="mt-12 bg-black/40 p-6 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-700 pb-4">
            <HelpCircle className="w-8 h-8" style={{ color: '#D4AF37' }} />
            <h2 className="font-prompt font-bold text-2xl md:text-3xl text-white">คำถามที่พบบ่อย (FAQ) ค้นหาจาก Google</h2>
          </div>
          
          <div className="space-y-4">
            <details className="bg-[#111] p-5 rounded-xl border border-gray-800 cursor-pointer group" open>
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-lg flex justify-between items-center outline-none">
                <span>ไพ่ป๊อกเด้ง คืออะไร เล่นยังไง?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                <strong>ป๊อกเด้ง</strong> เป็นเกมไพ่ยอดนิยมของไทย ผู้เล่นต้องรวมแต้มไพ่ 2-3 ใบให้ได้ใกล้เคียง 9 แต้มมากที่สุด เพื่อเอาชนะเจ้ามือ โดยแต้มสูงสุดคือการได้รวม 8 หรือ 9 แต้มจากไพ่ 2 ใบแรก (เรียกว่า ป๊อก 8, ป๊อก 9)
              </p>
            </details>

            <details className="bg-[#111] p-5 rounded-xl border border-gray-800 cursor-pointer group">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-lg flex justify-between items-center outline-none">
                <span>ป๊อกเด้งออนไลน์ 2 ใบเปิด ต่างกับ 3 ใบตรงไหน?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                ระบบ <strong>2 ใบเปิด</strong> จะใช้การตัดสินผลแพ้ชนะจากไพ่ 2 ใบแรกที่แจกเท่านั้น ไม่มีการจั่วไพ่ใบที่ 3 ทำให้เกมจบเร็ว ลุ้นสนุก ไม่ต้องกังวลเรื่องการจั่วไพ่แล้วแต้มลด เป็นระบบที่เซียนพนันชื่นชอบมากที่สุดใน <strong>EZPOK168</strong>
              </p>
            </details>

            <details className="bg-[#111] p-5 rounded-xl border border-gray-800 cursor-pointer group">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-lg flex justify-between items-center outline-none">
                <span>สมัครเล่น บาคาร่า และ ป๊อกเด้ง เว็บไหนดี?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                ขอแนะนำ <strong>WWW.EZPOK168.COM</strong> เว็บตรงคาสิโนออนไลน์ที่รวมเกมไพ่ <strong>ป๊อกเด้งออนไลน์</strong>, <strong>บาคาร่า</strong> และระบบ <strong>หวยออนไลน์ (หวยไทย, หวยลาว)</strong> ไว้ในที่เดียว ฝาก-ถอนออโต้ตลอด 24 ชม. มั่นคงปลอดภัย 100%
              </p>
            </details>
          </div>
        </section>

      </main>

      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-[10px] md:text-xs border-t border-gray-800 leading-loose">
          <p className="font-prompt text-gray-400 font-bold mb-2">สงวนลิขสิทธิ์ &copy; 2026 โดย EZPOK168.NET</p>
          <p className="max-w-2xl mx-auto px-4">
            ศูนย์รวมความรู้เทคนิคการเล่น ป๊อกเด้งออนไลน์ บาคาร่า และ หวยไทย หวยลาว<br/>
            เว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูล (SEO Knowledge Hub) เพื่อเป็นแนวทางในการเล่นคาสิโนออนไลน์อย่างมีสติ
          </p>
      </footer>
    </div>
  );
}