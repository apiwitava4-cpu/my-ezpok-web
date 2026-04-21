import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Trophy, HelpCircle, Star, PlayCircle, Gamepad2, BookOpen, AlertTriangle, Info, Target, TrendingUp, LineChart, ShieldCheck, Sparkles, Users, Banknote } from "lucide-react";

// 🔵 1. อัปเดต SEO Metadata เน้น Quick Win (สอนเล่น/เทคนิค) และ High Value (บาคาร่าเว็บตรง)
export const metadata: Metadata = {
  title: 'สอนเล่น ป๊อกเด้งออนไลน์ เทคนิค 2 ใบเปิด สูตรทำเงิน บาคาร่าเว็บตรง | EZPOK168',
  description: 'คู่มือ สอนเล่นป๊อกเด้งออนไลน์ อัปเดต 2026 แจกฟรี เทคนิคป๊อกเด้ง กติกาการนับแต้ม ป๊อก 8 ป๊อก 9 พร้อมสูตรเล่น บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์ ทำกำไรได้จริง',
  keywords: 'สอนเล่นป๊อกเด้ง, ป๊อกเด้งออนไลน์, เทคนิคป๊อกเด้ง, สูตรป๊อกเด้ง, กติกาป๊อกเด้ง, บาคาร่าเว็บตรง, เว็บตรงไม่ผ่านเอเย่นต์, คาสิโนออนไลน์, เกมไพ่, EZPOK168',
};

// 🔵 2. อัปเดต AEO & SEO Schema (Answer Engine Optimization)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "สอนเล่นป๊อกเด้งออนไลน์ และเทคนิคเซียนทำกำไร 2 ใบเปิด บาคาร่าเว็บตรง",
  "author": { "@type": "Organization", "name": "EZPOK168" },
  "publisher": { "@type": "Organization", "name": "EZPOK168", "logo": { "@type": "ImageObject", "url": "https://ezpok168.net/logo.png" } },
  "datePublished": "2026-04-18", 
  "description": "เจาะลึกเทคนิคและวิธี สอนเล่นไพ่ป๊อกเด้งออนไลน์ กติกาการนับแต้มไพ่ตอง ไพ่เรียง พร้อมสูตรเดินเงิน บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์ ให้ได้เงินจริง"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "เทคนิคป๊อกเด้งออนไลน์ ที่ดีที่สุดในการทำกำไรคืออะไร?",
      "acceptedAnswer": { "@type": "Answer", "text": "เทคนิคป๊อกเด้ง ที่ดีที่สุดคือการ กระจายความเสี่ยง (แทงหลายขา) และการใช้สูตรเดินเงินทบ ควบคู่กับการอ่านสถิติเจ้ามือ ซึ่งเป็นเทคนิคเดียวกับเซียน บาคาร่าเว็บตรง ใช้" }
    },
    {
      "@type": "Question",
      "name": "เล่น บาคาร่าเว็บตรง และ ป๊อกเด้งออนไลน์ เว็บไหนดี?",
      "acceptedAnswer": { "@type": "Answer", "text": "EZPOK168.COM คือ บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์ ที่รวมเกมไพ่ ป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่ไลฟ์สด มั่นคงทางการเงิน ถอนได้ไม่อั้น 100%" }
    }
  ]
};

export default function PokdengSeoArticle() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-ezgold-500 selection:text-black" id="top">
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

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-10" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-10" style={{ backgroundColor: '#A855F7' }}></div>
      </div>

      <header className="sticky top-0 z-40 shadow-md border-b border-ezgold-500/20 w-full" style={{ backgroundColor: 'rgba(13, 5, 20, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-ezgold-400 hover:text-white transition-colors no-underline shrink-0 group">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <span className="font-prompt font-bold text-base md:text-xl tracking-tight text-white shrink-0">EZPOK168 <span className="text-transparent bg-clip-text bg-gradient-to-r from-ezgold-400 to-yellow-200">KNOWLEDGE</span></span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10 flex flex-col items-center">
        
        {/* 🟢 Hero Banner (3D Effect) */}
        <div className="w-full rounded-3xl overflow-hidden mb-10 border border-ezgold-500/40 shadow-[0_10px_40px_rgba(212,175,55,0.2)] relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            <img src="/pok9-bg.gif" alt="สอนเล่นป๊อกเด้งออนไลน์ บาคาร่าเว็บตรง EZPOK168" className="w-full h-[280px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center p-8 text-center w-full">
                <span className="px-5 py-2 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-xs md:text-sm rounded-full mb-4 shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-pulse flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> คลาสเรียนเซียนไพ่ VIP 2026
                </span>
                
                <h1 
                  className="text-3xl md:text-6xl mb-4 font-bold drop-shadow-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37]" 
                  style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4' }}
                >
                  สอนเล่น ป๊อกเด้งออนไลน์ <br className="hidden md:block" />
                  เจาะลึกเทคนิค & สูตรทำเงิน
                </h1>
                <p className="text-gray-300 text-sm md:text-lg font-prompt font-medium max-w-2xl drop-shadow-lg hidden md:block bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-700">
                  คู่มือฉบับสมบูรณ์! เรียนรู้กติกา พร้อมสูตรลับฉบับเซียน <strong>บาคาร่าเว็บตรง</strong>
                </p>
            </div>
        </div>

        {/* 🟢 LONG-FORM SEO ARTICLE: ยำคีย์เวิร์ด สอนเล่น & เทคนิค & บาคาร่าเว็บตรง */}
        <article className="bg-[#111]/80 p-6 md:p-10 rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="flex items-center gap-4 mb-8 p-5 bg-gradient-to-r from-ezgold-900/40 to-black border-l-4 border-ezgold-500 rounded-r-2xl w-full max-w-4xl mx-auto md:mx-0 text-left shadow-inner">
              <BookOpen className="w-8 h-8 text-ezgold-400 shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <p className="text-sm md:text-base text-gray-300 font-medium">
                  <strong>บทสรุปผู้บริหาร:</strong> สำหรับใครที่กำลังมองหาบทความ <strong>"สอนเล่นป๊อกเด้ง"</strong> แบบจับมือทำ ที่นี่คือคู่มือที่ดีที่สุด เราสอนตั้งแต่กติกาพื้นฐาน การนับแต้ม ไปจนถึง <strong>เทคนิคป๊อกเด้ง</strong> ที่เซียน <strong>บาคาร่าเว็บตรง</strong> นำมาประยุกต์ใช้เพื่อทำกำไรบน <strong>EZPOK168</strong> แบบยั่งยืน
              </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-10 font-medium max-w-4xl mx-auto md:mx-0 leading-relaxed">
             หากพูดถึงเกมไพ่ที่อยู่คู่กับคนไทย คงไม่มีใครไม่รู้จัก <strong>"ไพ่ป๊อกเด้ง"</strong> เกมที่อาศัยทั้งดวงและทักษะการคำนวณ ด้วยกติกาที่จบเกมไว และมีลุ้นเงินทวีคูณ (เด้ง) ปัจจุบันเกมนี้ได้ถูกยกระดับขึ้นเป็น <strong><span className="text-ezgold-400 font-bold">ป๊อกเด้งออนไลน์</span></strong> ที่คุณสามารถเข้าทำกำไรได้ตลอด 24 ชม. ด้วยมาตรฐานเดียวกับ <strong><span className="text-red-400 font-bold">บาคาร่าเว็บตรง</span></strong>
          </p>

          {/* Section 1: กติกาพื้นฐาน */}
          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-8 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 w-full border-b border-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-yellow-500">
            <Gamepad2 className="w-8 h-8 shrink-0 text-ezgold-400" /> 1. สอนเล่น ป๊อกเด้งออนไลน์ คืออะไร?
          </h2>
          <p className="mb-4 text-gray-300 max-w-4xl mx-auto md:mx-0">
            <strong>สอนเล่นป๊อกเด้ง</strong> เริ่มต้นง่ายๆ เกมนี้ใช้อุปกรณ์คือ ไพ่มาตรฐาน 1 สำรับ (52 ใบ ไม่รวมโจ๊กเกอร์) โครงสร้างของผู้เล่นจะแบ่งเป็น 2 ฝ่ายอย่างชัดเจน เพื่อทำแต้มแข่งกัน:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-black p-5 rounded-2xl border border-gray-700 shadow-md flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                      <p className="font-bold text-white mb-1">เจ้ามือ (Dealer)</p>
                      <p className="text-sm text-gray-400">ผู้แจกไพ่และเป็นศูนย์กลางรับจ่ายเงินเดิมพัน</p>
                  </div>
              </div>
              <div className="bg-gradient-to-b from-gray-800/50 to-black p-5 rounded-2xl border border-gray-700 shadow-md flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <Users className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                      <p className="font-bold text-white mb-1">ลูกมือ / ขา (Player)</p>
                      <p className="text-sm text-gray-400">ผู้เล่นที่วางเงินเดิมพัน (สามารถแทงหลายขาพร้อมกันได้)</p>
                  </div>
              </div>
          </div>

          {/* Section 2: การนับแต้ม (3D Cards) */}
          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-8 mb-6 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full border-b border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-500 shrink-0 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" /> 2. กติกาการนับแต้มไพ่
          </h2>
          <p className="mb-6 text-gray-300 max-w-4xl mx-auto md:mx-0">การนับแต้มของไพ่ป๊อกเด้งนั้นมีหลักการที่คล้ายคลึงกับการเล่น <strong>บาคาร่าออนไลน์</strong> โดยจะประเมินค่าของหน้าไพ่ดังต่อไปนี้:</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl mx-auto">
              <div className="flex-1 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-white mb-2 drop-shadow-md">A</span>
                  <p className="text-ezgold-400 font-bold text-lg">มีค่า = 1 แต้ม</p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-white mb-2 drop-shadow-md">2-9</span>
                  <p className="text-ezgold-400 font-bold text-lg">มีค่าตามตัวเลข</p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-red-950/40 to-black p-6 rounded-2xl border border-red-900/50 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-white mb-2 drop-shadow-md flex gap-2"><span>10</span><span>J</span><span>Q</span><span>K</span></span>
                  <p className="text-red-400 font-bold text-lg">มีค่า = 0 แต้ม</p>
              </div>
          </div>
          <p className="mb-4 text-gray-300 max-w-4xl mx-auto md:mx-0 text-left px-4 md:px-0 bg-black/50 p-4 rounded-xl border border-gray-800">
            <strong className="text-ezgold-400">💡 วิธีคิดผลรวมแต้ม:</strong> นำแต้มไพ่ทุกใบมาบวกกัน หากเกิน 9 แต้ม ให้ยึด <strong>หลักหน่วย</strong> เป็นหลัก เช่น ได้ไพ่ 8 และ 7 รวมคือ 15 จะนับเฉพาะหลักหน่วยคือ <strong>5 แต้ม</strong>
          </p>

          {/* Section 3: ไพ่พิเศษ (Neon Borders) */}
          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-12 mb-6 border-b border-gray-700 pb-3 flex items-center justify-center md:justify-start gap-3 text-white w-full">
            <Star className="w-8 h-8 text-purple-500 shrink-0 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> 3. ไพ่พิเศษ และ อัตราการจ่าย (การเด้ง)
          </h2>
          <p className="mb-6 text-gray-300 max-w-4xl mx-auto md:mx-0">
             เหตุผลที่ทำให้ <strong>ป๊อกเด้ง</strong> ครองใจนักเดิมพันมากกว่าเกมอื่นๆ คือระบบ <strong>"เด้ง"</strong> หากไพ่ในมือคุณมีดอกเดียวกัน คุณจะได้รางวัลทวีคูณ และยังมีไพ่พิเศษที่ให้อัตราจ่ายสูงลิ่ว ดังนี้:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-red-500/50 relative overflow-hidden text-left shadow-[0_5px_15px_rgba(239,68,68,0.15)] bg-gradient-to-br from-red-950/30 to-black hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-md">แต้มสูงสุด</div>
                <h4 className="font-bold text-xl text-red-400 mb-2 flex items-center gap-2"><Trophy className="w-5 h-5"/> 1. ป๊อก 9 และ ป๊อก 8</h4>
                <p className="text-sm text-gray-300 mb-4">ไพ่ 2 ใบแรกบวกกันได้ 9 หรือ 8 แต้มพอดี เกมหยุดทันทีและชนะไพ่ธรรมดาทั้งหมด</p>
                <div className="text-sm bg-black/80 p-3 rounded-xl border border-red-900 inline-block text-white">
                    อัตราจ่าย: <strong className="text-ezgold-400">1-2 เท่า</strong> (หากไพ่เด้ง)
                </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-ezgold-500/50 relative overflow-hidden text-left shadow-[0_5px_15px_rgba(212,175,55,0.15)] bg-gradient-to-br from-yellow-950/30 to-black hover:-translate-y-1 transition-transform">
                <h4 className="font-bold text-xl text-ezgold-400 mb-2">2. ตอง (Three of a Kind)</h4>
                <p className="text-sm text-gray-300 mb-4">ไพ่ทั้ง 3 ใบมีตัวเลขหรืออักษร <strong>เหมือนกันทั้งหมด</strong> (เช่น K-K-K, 5-5-5)</p>
                <div className="text-sm bg-black/80 p-3 rounded-xl border border-ezgold-900 inline-block text-white">
                    อัตราจ่าย: <strong className="text-ezgold-400">5 เท่า (5 เด้ง)</strong>
                </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-purple-500/50 relative overflow-hidden text-left shadow-[0_5px_15px_rgba(168,85,247,0.15)] bg-gradient-to-br from-purple-950/30 to-black hover:-translate-y-1 transition-transform">
                <h4 className="font-bold text-xl text-purple-400 mb-2">3. สเตรทฟลัช (Straight Flush)</h4>
                <p className="text-sm text-gray-300 mb-4">ไพ่ 3 ใบที่มี <strong>ดอกเดียวกันทั้งหมด</strong> และ <strong>แต้มเรียงลำดับกัน</strong></p>
                <div className="text-sm bg-black/80 p-3 rounded-xl border border-purple-900 inline-block text-white">
                    อัตราจ่าย: <strong className="text-ezgold-400">5 เท่า (5 เด้ง)</strong>
                </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl border border-blue-500/50 relative overflow-hidden text-left shadow-[0_5px_15px_rgba(59,130,246,0.15)] bg-gradient-to-br from-blue-950/30 to-black hover:-translate-y-1 transition-transform">
                <h4 className="font-bold text-xl text-blue-400 mb-2">4. เซียน / สามเหลือง</h4>
                <p className="text-sm text-gray-300 mb-4">ไพ่ 3 ใบประกอบไปด้วย <strong>ไพ่หน้าคน (J, Q, K) ทั้งหมด</strong> (เช่น J-K-Q)</p>
                <div className="text-sm bg-black/80 p-3 rounded-xl border border-blue-900 inline-block text-white">
                    อัตราจ่าย: <strong className="text-ezgold-400">3 เท่า (3 เด้ง)</strong>
                </div>
            </div>
          </div>

          {/* Section 4: เทคนิคเซียน (SEO Keyword stuffing) */}
          <h2 className="text-2xl md:text-3xl font-prompt font-bold mt-12 mb-6 border-b border-gray-700 pb-3 flex items-center justify-center md:justify-start gap-3 w-full" style={{ color: '#D4AF37' }}>
            <Target className="w-8 h-8 shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" /> 4. เจาะลึกสูตรลับ: เทคนิคป๊อกเด้ง ทำกำไรจริง
          </h2>
          <p className="mb-6 text-gray-300 max-w-4xl mx-auto md:mx-0">
             ในวงการคาสิโนออนไลน์ที่มีการแข่งขันสูง ผู้เล่นกระเป๋าหนักที่เล่น <strong>บาคาร่าเว็บตรง</strong> มักจะมี <strong>"เทคนิคป๊อกเด้ง"</strong> เพื่อใช้จัดการความเสี่ยงและทำกำไรอย่างยั่งยืน ดังนี้:
          </p>
          
          <div className="space-y-5 w-full max-w-4xl mx-auto md:mx-0 text-left">
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-gray-700 shadow-md">
                <h4 className="font-bold text-white text-lg md:text-xl mb-3 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400"/> เทคนิคที่ 1: กระจายความเสี่ยง (แทงหลายขา)
                </h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed pl-8">
                    อย่าทุ่มเงินทั้งหมดไปที่ขาเดียว การ <strong>สอนเล่นป๊อกเด้ง</strong> ฉบับเซียนแนะนำให้คุณเล่น 2-3 ขาพร้อมกันบนเว็บ EZPOK168 เพื่อให้มีโอกาสดึงทุนคืน หากขาใดขาหนึ่งโชคร้ายได้แต้มบอด
                </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-gray-700 shadow-md">
                <h4 className="font-bold text-white text-lg md:text-xl mb-3 flex items-center gap-2">
                    <Banknote className="w-6 h-6 text-ezgold-400"/> เทคนิคที่ 2: สูตรเดินเงินทบ (Martingale)
                </h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed pl-8">
                    นี่คือ <strong>สูตรบาคาร่า</strong> ระดับโลกที่นำมาใช้กับป๊อกเด้งได้ผลดีเยี่ยม หากตาแรกคุณแพ้ 100 บาท ตาถัดไปให้เพิ่มเดิมพันเป็น 200 บาท เมื่อชนะคุณจะได้เงินทุนคืนทั้งหมดพร้อมกำไรทันที
                </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-gray-700 shadow-md">
                <h4 className="font-bold text-white text-lg md:text-xl mb-3 flex items-center gap-2">
                    <LineChart className="w-6 h-6 text-purple-400"/> เทคนิคที่ 3: วิเคราะห์สถิติเจ้ามือ (Dealer Pattern)
                </h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed pl-8">
                    เจ้ามือไม่ใช่โปรแกรมที่ไร้จุดอ่อน สังเกตให้ดี หากเจ้ามือป๊อกกินเรียบมา 3-4 ตาติดกัน ตามสถิติแล้วตาถัดไปไพ่เจ้ามือมักจะ "แต้มต่ำหรือบอด" ให้รอจังหวะนั้นแล้วอัดเดิมพันฝั่งคุณ
                </p>
            </div>
          </div>

          {/* CTA Box (3D & Glowing) */}
          <div className="mt-14 p-8 md:p-12 rounded-3xl border border-ezgold-500/50 text-center shadow-[0_15px_50px_rgba(212,175,55,0.2)] relative overflow-hidden w-full max-w-4xl mx-auto group" style={{ background: 'linear-gradient(135deg, #1A0B2E, #000000)' }}>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-ezgold-400 to-transparent opacity-70"></div>
              
              <h3 className="font-prompt font-extrabold text-3xl md:text-5xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">พร้อมลุยทำกำไรแล้วหรือยัง?</h3>
              <p className="text-gray-300 mb-10 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                  นำ <strong>เทคนิคป๊อกเด้ง</strong> ไปใช้จริงกับ <strong className="text-ezgold-400">บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์</strong> <br className="hidden md:block"/>
                  ที่ EZPOK168 ระบบมั่นคง ปลอดภัย ถอนเงินได้ไม่อั้น 100%
              </p>
              
              <Link href="https://ezpok168.com/" target="_blank" className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-ezgold-600 via-[#FFDF00] to-ezgold-500 text-black font-black text-xl md:text-2xl rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.5)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.8)] hover:-translate-y-1 transition-all duration-300 no-underline pulse-gold border border-yellow-200">
                  <PlayCircle className="w-7 h-7 md:w-8 md:h-8 fill-black text-ezgold-400" /> สมัครสมาชิกฟรี คลิกเลย!
              </Link>
          </div>
        </article>

        {/* 🟢 FAQ Section (AEO Schema Support) - Glassmorphism */}
        <section className="mt-16 bg-black/50 p-6 md:p-12 rounded-3xl border border-gray-800 shadow-2xl w-full flex flex-col items-center md:items-start backdrop-blur-sm">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 border-b border-gray-700 pb-4 w-full">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 shrink-0 text-ezgold-400 drop-shadow-md" />
            <h2 className="font-prompt font-bold text-2xl md:text-3xl text-white text-center md:text-left">คำถามที่พบบ่อย (FAQ) - สอนเล่นป๊อกเด้ง & คาสิโน</h2>
          </div>
          
          <div className="space-y-5 w-full max-w-4xl mx-auto">
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full shadow-md hover:border-gray-600 transition-colors" open>
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg flex justify-between items-center outline-none">
                <span>ไพ่ป๊อกเด้ง แตกต่างจาก บาคาร่า อย่างไร?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-sm md:text-base font-medium">
                <strong>ป๊อกเด้ง</strong> ผู้เล่นต้องแข่งแต้มกับเจ้ามือโดยตรง มีจุดเด่นคือการได้เงินทวีคูณ (เด้ง) หากได้ไพ่พิเศษ ส่วน <strong>บาคาร่าออนไลน์</strong> ผู้เล่นเป็นเพียงผู้ชมที่ทายผลว่าฝั่ง Player หรือ Banker จะมีแต้มสูงกว่ากัน
              </p>
            </details>
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full shadow-md hover:border-gray-600 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg flex justify-between items-center outline-none">
                <span><strong>เทคนิคป๊อกเด้งออนไลน์</strong> ที่ดีที่สุดคืออะไร?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-sm md:text-base font-medium">
                เทคนิคที่ดีที่สุดคือการ <strong>กระจายความเสี่ยง (แทงหลายขา)</strong> เพื่อดึงทุนคืนในกรณีที่ขาหลักบอด และ <strong>การอ่านสถิติเจ้ามือ (Dealer Pattern)</strong> สังเกตรอบไพ่ตกของเจ้ามือเพื่อหาจังหวะทำกำไร
              </p>
            </details>
            <details className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-gray-800 cursor-pointer group w-full shadow-md hover:border-gray-600 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 text-base md:text-lg flex justify-between items-center outline-none">
                <span>สมัครเล่น ป๊อกเด้งออนไลน์ <strong>บาคาร่าเว็บตรง</strong> ที่ไหนดี?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-sm md:text-base font-medium">
                ขอแนะนำ <strong>EZPOK168.COM</strong> คาสิโนเว็บตรงไม่ผ่านเอเย่นต์ มีครบทั้งป๊อกเด้ง 2 ใบเปิด บาคาร่า และแทงหวยออนไลน์ ระบบฝาก-ถอนออโต้ ไม่มีขั้นต่ำ ปลอดภัย 100%
              </p>
            </details>
          </div>
        </section>

      </main>

      <footer className="bg-black py-8 mt-12 text-center text-gray-500 text-xs border-t border-gray-800 leading-loose w-full flex flex-col items-center">
          <p className="font-prompt text-gray-400 font-bold mb-2 text-sm">สงวนลิขสิทธิ์ &copy; 2026 โดย EZPOK168.NET</p>
          <p className="max-w-3xl mx-auto px-4">
            ศูนย์รวมความรู้ <strong>เทคนิคป๊อกเด้งออนไลน์</strong> <strong>บาคาร่าเว็บตรง</strong> และ แทงหวยออนไลน์<br/>
            (SEO & AEO Knowledge Hub) มุ่งเน้นเผยแพร่กติกาและ <strong>สอนเล่น</strong> คาสิโนออนไลน์อย่างถูกวิธี
          </p>
      </footer>
    </div>
  );
}