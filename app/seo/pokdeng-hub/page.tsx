"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ChevronRight, Star, TrendingUp, ArrowRight, X, ShieldCheck, Gamepad2, Coins, CheckCircle, Target, BarChart2 } from "lucide-react";

// 🟢 สร้างฐานข้อมูลเนื้อหาบทความ SEO ขนาดยาว (500-1000 คำ)
const articleData = [
  {
    id: 1,
    title: "ข้อดีของการเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด ที่คุณต้องรู้",
    date: "10 เมษายน 2569",
    image: "/pok11.png",
    excerpt: "ทำไมเซียนคาสิโนถึงเปลี่ยนมาเล่น ป๊อกเด้ง 2 ใบเปิด? เจาะลึกข้อดี โอกาสทำกำไร และเทคนิคแทงหลายขา...",
    content: (
      <div className="space-y-6 text-gray-300 leading-loose font-medium pb-8">
        <p className="text-lg text-white">
          ในยุคที่อุตสาหกรรมคาสิโนออนไลน์พัฒนาไปอย่างก้าวกระโดด เกมไพ่ยอดฮิตที่อยู่คู่คนไทยมาอย่างยาวนานอย่าง <strong>"ป๊อกเด้ง"</strong> ก็ได้ถูกยกระดับและปรับปรุงกติกาให้ตอบโจทย์นักเดิมพันยุคใหม่มากขึ้น นั่นคือการกำเนิดของ <strong>"ป๊อกเด้งออนไลน์ 2 ใบเปิด"</strong> บนแพลตฟอร์ม <strong>บาคาร่าเว็บตรง</strong> อย่าง EZPOK168 ซึ่งกำลังได้รับความนิยมอย่างล้นหลามแซงหน้าเกมไพ่ดั้งเดิมหลายๆ เกม วันนี้เราจะมาเจาะลึกกันว่า ทำไมระบบ 2 ใบเปิดถึงเป็นที่ชื่นชอบของเซียนคาสิโน และมันมีข้อดีอย่างไรต่อการทำกำไรของคุณ
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Clock className="w-6 h-6 text-ezgold-400" /> 1. ความรวดเร็วในการจบรอบ (Speed of Profit)
        </h3>
        <p>
          ข้อเสียเปรียบหลักของป๊อกเด้งแบบดั้งเดิม (3 ใบ) คือความล่าช้าในการตัดสินใจจั่วไพ่ของแต่ละขา ทำให้เกมยืดเยื้อและเสียเวลา แต่สำหรับระบบ <strong>ป๊อกเด้ง 2 ใบเปิด</strong> กติกาถูกปรับให้กระชับขึ้นอย่างมาก ดีลเลอร์จะทำการแจกไพ่เพียง 2 ใบให้กับผู้เล่นทุกคน รวมถึงตัวเจ้ามือเองด้วย แล้วทำการหงายไพ่วัดผลแต้มแพ้-ชนะกันทันที ไม่มีใครได้จั่วไพ่ใบที่ 3 
        </p>
        <p>
          ความรวดเร็วนี้ส่งผลดีอย่างมหาศาลต่อการทำรอบเดิมพัน (Turnover) ผู้เล่นสามารถเล่นได้จำนวนตาที่มากขึ้น 2 ถึง 3 เท่าในระยะเวลาเท่าเดิม ซึ่งหมายความว่า หากคุณมี <strong>เทคนิคป๊อกเด้ง</strong> ที่ดี คุณจะสามารถสะสมกำไรได้ไวขึ้นอย่างทวีคูณ
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Target className="w-6 h-6 text-ezgold-400" /> 2. เอื้อต่อเทคนิค "กระจายความเสี่ยง" (แทงหลายขา)
        </h3>
        <p>
          เมื่อกฎการจั่วไพ่ที่ซับซ้อนถูกตัดออกไป ผู้เล่นจึงสามารถโฟกัสไปที่การวางกลยุทธ์เงินเดิมพันได้อย่างเต็มที่ เทคนิคที่เซียนคาสิโนนิยมใช้มากที่สุดในเกมนี้คือการ <strong>"แทงหลายขา"</strong> (เช่น เล่นพร้อมกัน 3 ขา หรือ 5 ขา) บนหน้าจอเดียว
        </p>
        <p>
          การแทงหลายขาช่วยลดความผันผวน (Volatility) ของเกมลงได้อย่างมาก ลองจินตนาการดูว่า หากคุณแทงเพียงขาเดียว แล้วตานั้นคุณจับได้ไพ่บอด (0 แต้ม) คุณจะเสียเงินทันที แต่ถ้าคุณแทง 3 ขา แม้ขาแรกจะบอด แต่ขาที่สองและสามของคุณอาจจะได้ <strong>ป๊อก 8 หรือ ป๊อก 9</strong> ซึ่งจะไปหักลบกลบหนี้กับขาที่เสีย ทำให้ภาพรวมในตานั้นคุณยังคงมีกำไร หรืออย่างน้อยก็ไม่ขาดทุน นี่คือหลักการลงทุนแบบคาสิโนที่แท้จริง
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Coins className="w-6 h-6 text-ezgold-400" /> 3. รักษาอัตราจ่ายทวีคูณ (สเน่ห์ของการ "เด้ง")
        </h3>
        <p>
          แม้กติกาจะถูกตัดทอนให้เหลือ 2 ใบ แต่สเน่ห์อันดับหนึ่งของป๊อกเด้งก็ยังคงอยู่ นั่นคือระบบการจ่ายเงินแบบทวีคูณ หากคุณเล่น <strong>บาคาร่าออนไลน์</strong> ทั่วไป อัตราการจ่ายเมื่อคุณชนะจะอยู่ที่ 1:1 หรือ 0.95:1 เท่านั้น แต่ในป๊อกเด้ง 2 ใบเปิด หากไพ่ 2 ใบในมือของคุณมี <strong>"ดอกเดียวกัน" (เช่น โพดำทั้ง 2 ใบ)</strong> และชนะเจ้ามือ คุณจะได้รับเงินรางวัลเป็น <strong>2 เท่า (2 เด้ง)</strong> ทันที! การลงทุนเพียง 100 บาท อาจเปลี่ยนเป็นกำไร 200 บาทได้ในตาเดียว ซึ่งนี่คือจุดที่บาคาร่าไม่สามารถให้ได้
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <ShieldCheck className="w-6 h-6 text-ezgold-400" /> 4. ความโปร่งใสระดับ บาคาร่าเว็บตรง
        </h3>
        <p>
          การเลือกแพลตฟอร์มในการเล่นมีความสำคัญไม่แพ้เทคนิคการเล่น การเล่นป๊อกเด้งออนไลน์บนเว็บที่ไม่ได้มาตรฐานอาจเสี่ยงต่อการโดนโกงหน้าไพ่ แต่ที่ <strong>EZPOK168</strong> เราใช้ระบบการไลฟ์สดสตรีมมิ่ง (Live Streaming) ที่ส่งสัญญาณตรงจากคาสิโนจริงในต่างประเทศ มีการสับไพ่และแจกไพ่ให้เห็นกันสดๆ แบบเฟรมต่อเฟรม คุณจึงมั่นใจได้ถึงความโปร่งใสแบบ 100% มาตรฐานเดียวกับระบบ <strong>บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์</strong>
        </p>

        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
             <CheckCircle className="text-green-400 w-5 h-5"/> บทสรุปสำหรับนักเดิมพัน
          </h4>
          <p className="text-purple-200">
            <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> เป็นเกมที่ผสมผสานระหว่างความรวดเร็ว โอกาสในการทำกำไรสูง และความตื่นเต้นได้อย่างลงตัว เหมาะทั้งสำหรับมือใหม่ที่เพิ่งหัดเล่นคาสิโน และระดับเซียนที่ต้องการปั้นพอร์ตอย่างเป็นระบบ หากคุณยังไม่เคยลอง นี่คือเวลาที่ดีที่สุดที่จะพิสูจน์ฝีมือของคุณบนเว็บคาสิโนอันดับ 1 อย่าง EZPOK168 ครับ
          </p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "เปรียบเทียบ บาคาร่าเว็บตรง กับ ป๊อกเด้ง เกมไหนทำเงินไวกว่า?",
    date: "5 เมษายน 2569",
    image: "/pok11.png",
    excerpt: "ไขข้อข้องใจ! วิเคราะห์สถิติ อัตราจ่าย และความเสี่ยง ระหว่าง บาคาร่า และ ป๊อกเด้ง ควรเลือกเล่นเกมไหน?",
    content: (
      <div className="space-y-6 text-gray-300 leading-loose font-medium pb-8">
        <p className="text-lg text-white">
          คำถามโลกแตกที่นักเดิมพันมือใหม่มักจะถามอยู่เสมอเมื่อก้าวเข้าสู่วงการคาสิโนออนไลน์คือ <strong>"ควรลงทุนกับเกมอะไรดี?"</strong> ระหว่าง <strong>บาคาร่าเว็บตรง (Baccarat)</strong> ที่ได้รับยกย่องให้เป็นราชาแห่งคาสิโน กับ <strong>ป๊อกเด้งออนไลน์ (Pokdeng)</strong> เกมไพ่พื้นบ้านที่คุ้นเคยกันมาตั้งแต่เด็ก วันนี้ทีมงาน EZPOK168 จะมาชำแหละข้อดี-ข้อเสียของทั้ง 2 เกม ผ่านมุมมองของคณิตศาสตร์ สถิติ และจิตวิทยาการลงทุน เพื่อให้คุณตัดสินใจได้ง่ายขึ้นครับ
        </p>

        <h3 className="text-2xl font-bold text-ezgold-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <ShieldCheck className="w-6 h-6 text-white" /> เจาะลึกจุดเด่น: บาคาร่าเว็บตรง (Baccarat Online)
        </h3>
        <p>
          <strong>บาคาร่าออนไลน์</strong> เป็นเกมไพ่ระดับสากลที่มีกติกาคล้ายคลึงกับป๊อกเด้ง แต่จุดแตกต่างที่สำคัญที่สุดคือ "ผู้เล่น (Player) ไม่ได้ถือไพ่เอง" คุณเป็นเพียงผู้ชมที่ทำหน้าที่ "ทายผล" ว่าแต้มฝั่ง <strong>Player (ผู้เล่น)</strong> หรือ <strong>Banker (เจ้ามือ)</strong> จะเป็นฝ่ายชนะ
        </p>
        <ul className="list-none space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">มี "เค้าไพ่" ให้อ่านชัดเจน:</strong> บาคาร่ามีกระดานแสดงสถิติย้อนหลัง (Roadmap) ที่สมบูรณ์แบบมาก ทำให้ผู้เล่นสามารถใช้เทคนิคคาดเดาความน่าจะเป็น เช่น เค้าไพ่มังกร, เค้าไพ่ปิงปอง ได้อย่างแม่นยำ
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">อัตราการเสียเปรียบเจ้ามือต่ำ (Low House Edge):</strong> บาคาร่าเป็นหนึ่งในเกมที่คาสิโนได้เปรียบผู้เล่นน้อยที่สุด โดยเฉพาะการแทงฝั่ง Banker ที่มีโอกาสชนะสูงถึง 50.68%
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">เดินสูตรการเงินง่าย:</strong> ด้วยอัตราจ่ายที่คงที่ (1:1) ทำให้การใช้สูตรเดินเงินอย่าง <strong>มาร์ติงเกล (Martingale)</strong> หรือการแทงทบเมื่อเสีย ทำได้ง่ายและคำนวณต้นทุนได้แม่นยำ 100%
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Gamepad2 className="w-6 h-6 text-white" /> เจาะลึกจุดเด่น: ป๊อกเด้งออนไลน์ (Pokdeng)
        </h3>
        <p>
          ในขณะที่ <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> คุณจะได้สวมบทบาทเป็นผู้ถือไพ่และต้องแข่งแต้มกับเจ้ามือโดยตรง (Dealer) จุดเด่นของเกมนี้คือความผันผวนที่มีโอกาสสร้างผลกำไรที่สูงลิ่วในระยะเวลาอันสั้น
        </p>
        <ul className="list-none space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
          <li className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">อัตราการจ่ายแบบทวีคูณ (Multiplier):</strong> นี่คือไม้ตายของป๊อกเด้ง หากคุณได้ไพ่ดอกเดียวกัน 2 ใบ (2 เด้ง) คุณจะได้เงิน 2 เท่าของยอดเดิมพัน หากเทียบกับบาคาร่าที่คุณแทง 100 ได้กำไร 100 แต่ป๊อกเด้ง แทง 100 อาจได้กำไร 200 ทันที
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">ให้อิสระในการวางเดิมพันสูง:</strong> คุณสามารถเลือกแทง 1 ขา, 2 ขา หรือ 5 ขาพร้อมกัน เพื่อกระจายความเสี่ยงและดักจับไพ่ป๊อก 8 ป๊อก 9 ได้ตามงบประมาณที่คุณมี
            </div>
          </li>
          <li className="flex items-start gap-3">
            <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white text-gray-400">ข้อควรระวัง:</strong> หากเจ้ามือป๊อก 8 หรือ 9 เจ้ามือจะกินรวบรอบวงทันที ความผันผวนจึงสูงกว่าบาคาร่า ผู้เล่นต้องมีสติในการควบคุมอารมณ์ให้ดี
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <BarChart2 className="w-6 h-6 text-blue-400" /> สรุป: เกมไหนทำเงินไวกว่ากัน?
        </h3>
        <p>
          หากวัดกันที่ <strong>"ความเร็วและขนาดของกำไร"</strong> ในช่วงเวลาสั้นๆ <strong>ป๊อกเด้งออนไลน์ ชนะขาดลอยครับ</strong> เพราะการติด "เด้ง" เพียง 1-2 ตา สามารถกู้คืนทุนที่เสียไปทั้งหมดพร้อมบวกกำไรก้อนโตได้ทันที เหมาะสำหรับคนที่ชอบความตื่นเต้นและมีเป้าหมายกำไรสูง
        </p>
        <p>
          แต่หากคุณเป็นนักลงทุนสายชิล เน้น <strong>"ความมั่นคงและปลอดภัย"</strong> ชอบวิเคราะห์กราฟสถิติเพื่อค่อยๆ ปั้นพอร์ตทีละนิด <strong>บาคาร่าเว็บตรง</strong> คือสมรภูมิที่เหมาะสมกับคุณมากกว่าครับ
        </p>

        <div className="mt-8 bg-gradient-to-r from-ezgold-900/20 to-black p-5 rounded-xl border border-ezgold-500/30 text-center">
          <p className="text-ezgold-200 text-lg font-bold">
            ไม่ว่าคุณจะเลือกเส้นทางไหน ที่ <strong className="text-white">EZPOK168</strong> เรามีค่ายเกมชั้นนำระดับโลกพร้อมรองรับทั้ง บาคาร่า และ ป๊อกเด้ง ด้วยระบบฝาก-ถอนออโต้ที่รวดเร็วที่สุด ให้คุณสนุกได้อย่างไร้ขีดจำกัด!
          </p>
        </div>
      </div>
    )
  }
];

export default function PokdengArticleHubPage() {
  const [activeArticle, setActiveArticle] = useState<typeof articleData[0] | null>(null);

  useEffect(() => {
    if (activeArticle) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [activeArticle]);

  return (
    <div className="min-h-screen w-full bg-[#0D0514] text-gray-200 font-sans pb-20 selection:bg-purple-500 selection:text-white relative">
      <style dangerouslySetInnerHTML={{__html: `@font-face { font-family: 'B2SIGN'; src: url('/B2-SIGN.ttf') format('truetype'); }`}} />

      {/* Header */}
      <header className="sticky top-0 z-40 shadow-[0_5px_20px_rgba(0,0,0,0.6)] border-b border-purple-500/20 w-full" style={{ backgroundColor: 'rgba(13, 5, 20, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-5xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors no-underline shrink-0 group bg-purple-900/20 px-4 py-2 rounded-full border border-purple-500/30">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" /> <span className="font-prompt font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <span className="font-prompt font-black text-lg md:text-2xl tracking-tight text-white shrink-0 drop-shadow-md">
            EZPOK168 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">HUB</span>
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-16 relative z-10">
        
        {/* หัวข้อหน้าเว็บ */}
        <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-purple-900/40 text-purple-300 font-bold text-xs md:text-sm rounded-full mb-6 border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <BookOpen className="w-4 h-4" /> คลังความรู้ & เทคนิค SEO
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-pink-500 drop-shadow-lg" style={{ fontFamily: "'B2SIGN', 'Charm', cursive", lineHeight: '1.4' }}>
                รวมบทความ ป๊อกเด้งออนไลน์
            </h1>
            <p className="text-gray-400 mt-5 max-w-2xl mx-auto font-prompt text-sm md:text-base leading-relaxed bg-black/30 p-3 rounded-xl border border-gray-800">
                เจาะลึกกติกา เทคนิค และสูตรการทำกำไรจาก <strong>ป๊อกเด้ง 2 ใบเปิด</strong> และ <strong>บาคาร่าเว็บตรง</strong> อัปเดตเนื้อหาใหม่ล่าสุด 2026
            </p>
        </div>

        {/* 🟢 บทความใหม่ล่าสุด (Highlight ใหญ่สุด) */}
        <section className="mb-20">
            <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white mb-8 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
                <Star className="text-yellow-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" /> บทความใหม่ล่าสุด (Hot)
            </h2>
            
            <div 
              onClick={() => setActiveArticle(articleData[0])}
              className="group w-full block relative rounded-[2rem] overflow-hidden border border-gray-700 hover:border-purple-400 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] transition-all duration-500 text-left outline-none cursor-pointer"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0525] via-[#1a0525]/80 to-transparent z-10"></div>
                <img src={articleData[0].image} alt="สอนเล่นป๊อกเด้งออนไลน์" className="w-full h-[350px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                    <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg border border-red-400/50">🔥 อัปเดตใหม่</span>
                    <h3 className="font-prompt font-black text-2xl md:text-4xl text-white mb-4 group-hover:text-purple-300 transition-colors drop-shadow-lg leading-snug">
                        {articleData[0].title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-lg max-w-3xl line-clamp-2 mb-6 font-medium">
                        {articleData[0].excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-white bg-purple-600/80 hover:bg-purple-500 px-6 py-3 rounded-full font-bold text-sm w-max transition-colors border border-purple-400/50 backdrop-blur-md">
                        เปิดอ่านบทความ <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>
            </div>
        </section>

        {/* 🟢 บทความย้อนหลัง (แยกเป็นกล่องๆ Grid) */}
        <section>
            <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white mb-8 flex items-center gap-3 border-l-4 border-gray-500 pl-4">
                <Clock className="text-gray-400 w-8 h-8" /> บทความย้อนหลังน่าสนใจ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {articleData.slice(1).map((article) => (
                  <div 
                    key={article.id} 
                    onClick={() => setActiveArticle(article)}
                    className="bg-[#111] rounded-[2rem] border border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300 text-left flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)] relative outline-none hover:-translate-y-2 cursor-pointer"
                  >
                      <div className="h-56 overflow-hidden relative w-full">
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col flex-1 w-full bg-gradient-to-b from-[#151515] to-black">
                          <h4 className="font-prompt font-bold text-lg md:text-xl text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
                              {article.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-3 leading-relaxed font-medium">{article.excerpt}</p>
                          <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-800">
                              <span className="text-xs text-gray-600 font-bold flex items-center gap-1.5"><Clock className="w-3 h-3"/> {article.date}</span>
                              <span className="text-xs text-ezgold-400 font-extrabold flex items-center bg-ezgold-900/20 px-3 py-1.5 rounded-lg border border-ezgold-500/30">
                                อ่านต่อ <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                              </span>
                          </div>
                      </div>
                  </div>
                ))}

                {/* กล่องรออัปเดตแบบ 3D */}
                <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-[2rem] border-2 border-gray-800 overflow-hidden flex flex-col h-full shadow-inner items-center justify-center p-10 opacity-60 border-dashed">
                    <BookOpen className="w-16 h-16 text-gray-700 mb-4 drop-shadow-md" />
                    <p className="font-prompt font-bold text-gray-500 text-lg">รออัปเดตบทความใหม่...</p>
                </div>

            </div>
        </section>

      </main>

      {/* 🟢 Popup Modal สำหรับเปิดอ่านบทความ (บังคับเด้งกลางจอเป๊ะๆ) */}
      {activeArticle && (
        <>
          {/* พื้นหลังดำเบลอๆ เวลาเปิด Popup */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setActiveArticle(null)}
          ></div>
          
          {/* กล่องเนื้อหาบทความ เด้งตรงกลางจอ 100% แน่นอนด้วยการล็อคพิกัด absolute center */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[95%] sm:w-[90%] max-w-4xl max-h-[85vh] bg-[#0D0514] rounded-[2rem] border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.5)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
              
              {/* Header Modal */}
              <div className="p-4 md:p-6 border-b border-gray-800 flex justify-between items-center bg-[#150a1f] shrink-0 shadow-md">
                  <span className="text-purple-400 font-bold text-sm flex items-center gap-2 bg-purple-900/20 px-3 py-1.5 rounded-lg border border-purple-500/30">
                     <Clock className="w-4 h-4" /> อัปเดตล่าสุด: {activeArticle.date}
                  </span>
                  <button onClick={() => setActiveArticle(null)} className="p-2 bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white rounded-full transition-colors shadow-lg border border-gray-700 hover:border-red-500">
                      <X className="w-6 h-6" />
                  </button>
              </div>

              {/* Content Modal (เลื่อนอ่านได้เฉพาะข้างในกล่อง) */}
              <div className="overflow-y-auto p-6 md:p-12 flex-1 scrollbar-hide bg-[url('/noise.png')] mix-blend-screen relative">
                  
                  <h2 className="text-2xl md:text-4xl font-prompt font-extrabold text-white mb-10 leading-snug drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] border-b border-gray-800 pb-6">
                      {activeArticle.title}
                  </h2>
                  
                  {/* ดึงเนื้อหาขนาดยาวมาแสดง */}
                  <div className="font-sans text-sm md:text-base">
                      {activeArticle.content}
                  </div>

                  {/* ปุ่มปิดด้านล่าง */}
                  <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                      <button onClick={() => setActiveArticle(null)} className="px-10 py-4 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white font-extrabold text-lg rounded-full transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(168,85,247,0.4)] border border-purple-400/50">
                          ✖ ปิดหน้าต่างบทความ
                      </button>
                  </div>
              </div>
          </div>
        </>
      )}

      <footer className="bg-[#05010a] py-8 border-t border-gray-800 w-full flex flex-col items-center mt-12 relative z-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
              <p className="font-prompt text-purple-400 font-extrabold mb-3 text-sm md:text-base tracking-widest">EZPOK168 KNOWLEDGE HUB</p>
              <p className="text-gray-500 text-[10px] md:text-xs leading-loose font-medium">
                  &copy; 2026 EZPOK168.NET คลังความรู้ ศูนย์รวม <strong>บทความป๊อกเด้งออนไลน์</strong> <br/>
                  แนะนำเทคนิคและกติกาคาสิโนออนไลน์อย่างมีสติ
              </p>
          </div>
      </footer>
    </div>
  );
}