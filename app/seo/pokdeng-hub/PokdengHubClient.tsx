"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Star, ArrowRight, X, ShieldCheck, Gamepad2, Coins, CheckCircle, Target, BarChart2 } from "lucide-react";

// 🟢 ฐานข้อมูลเนื้อหาบทความ SEO ขนาดยาว
const articleData = [
  {
    id: 1,
    title: "ข้อดีของการเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด ที่คุณต้องรู้",
    date: "10 เมษายน 2569",
    image: "/pok11.webp",
    excerpt: "ทำไมผู้เล่นหลายคนสนใจป๊อกเด้ง 2 ใบเปิด? เจาะลึกกติกา จุดเด่น ความเสี่ยง และวิธีจัดการงบประมาณ...",
    content: (
      <div className="space-y-6 text-gray-300 leading-loose font-medium pb-8">
        <p className="text-lg text-white">
          ในยุคที่เกมไพ่ออนไลน์เข้าถึงง่ายขึ้น เกมที่คนไทยคุ้นเคยอย่าง <strong>ป๊อกเด้ง</strong> ถูกนำเสนอในรูปแบบ <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> บนแพลตฟอร์ม <strong>บาคาร่าเว็บตรง</strong> อย่าง EZPOK168 บทความนี้สรุปจุดเด่น ข้อควรระวัง และสิ่งที่ควรตรวจสอบก่อนเริ่มใช้งาน
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Clock className="w-6 h-6 text-ezgold-400" /> 1. ความรวดเร็วในการจบรอบ
        </h3>
        <p>
          ป๊อกเด้งแบบดั้งเดิมอาจมีขั้นตอนการจั่วไพ่เพิ่มตามกติกาของวง แต่ระบบ <strong>ป๊อกเด้ง 2 ใบเปิด</strong> ทำให้รอบเล่นกระชับขึ้น ดีลเลอร์แจกไพ่ 2 ใบและเปิดให้ดูผลตามกติกาที่ระบบกำหนด
        </p>
        <p>
          ความเร็วช่วยให้ผู้เล่นเข้าใจกติกาและจังหวะของเกมได้ง่ายขึ้น แต่จำนวนรอบที่มากขึ้นก็หมายถึงความเสี่ยงสะสมที่มากขึ้นเช่นกัน ควรกำหนดวงเงินและเวลาการเล่นไว้ล่วงหน้าเสมอ
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Target className="w-6 h-6 text-ezgold-400" /> 2. เข้าใจการกระจายความเสี่ยง
        </h3>
        <p>
          เมื่อกฎการจั่วไพ่ถูกลดความซับซ้อน ผู้เล่นจะเห็นโครงสร้างการเดิมพันได้ชัดขึ้น เช่น การเล่นหลายขาในหน้าจอเดียว อย่างไรก็ตามการเพิ่มจำนวนขาไม่ใช่วิธีรับประกันผลลัพธ์ และควรสัมพันธ์กับงบประมาณที่ตั้งไว้
        </p>
        <p>
          การเล่นหลายขาอาจช่วยกระจายผลลัพธ์ในบางรอบ แต่ก็เพิ่มยอดเดิมพันรวมในเวลาเดียวกัน ผู้เล่นควรอ่านกติกาและจำกัดวงเงินก่อนเริ่ม ไม่ควรใช้วิธีนี้เพื่อตามคืนยอดเสีย
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Coins className="w-6 h-6 text-ezgold-400" /> 3. อัตราจ่ายทวีคูณตามกติกา
        </h3>
        <p>
          แม้กติกาจะเหลือ 2 ใบ จุดเด่นของป๊อกเด้งยังอยู่ที่การจ่ายตามรูปแบบไพ่ เช่น เด้งหรือไพ่พิเศษ ซึ่งต้องดูจากกติกาโต๊ะและเงื่อนไขของระบบก่อนทุกครั้ง
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <ShieldCheck className="w-6 h-6 text-ezgold-400" /> 4. ความโปร่งใสระดับ บาคาร่าเว็บตรง
        </h3>
        <p>
          การเลือกแพลตฟอร์มควรดูความชัดเจนของกติกา ช่องทางติดต่อ เงื่อนไขโปรโมชัน และความเสถียรของระบบ <strong>EZPOK168</strong> จึงเน้นให้ผู้เล่นอ่านรายละเอียดก่อนเริ่มใช้งาน
        </p>

        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
             <CheckCircle className="text-green-400 w-5 h-5"/> บทสรุปสำหรับนักเดิมพัน
          </h4>
          <p className="text-purple-200">
            <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> เป็นเกมที่เล่นเร็วและเข้าใจกติกาได้ไม่ยาก แต่ยังมีความเสี่ยงจากการเดิมพันเสมอ เหมาะกับผู้ที่อ่านกติกา เข้าใจงบประมาณของตัวเอง และใช้งานอย่างมีสติ
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "วิธีจัดการงบประมาณ ป๊อกเด้งออนไลน์ 2 ใบเปิด ให้อยู่หมัด",
    date: "1 เมษายน 2569",
    image: "/pok11.webp",
    excerpt: "เจาะลึกหลักการจัดการเงินทุนสำหรับป๊อกเด้งออนไลน์ กำหนดวงเงิน ควบคุมอารมณ์ และหยุดตามแผน",
    content: (
      <div className="space-y-6 text-gray-300 leading-loose font-medium pb-8">
        <p className="text-lg text-white">
          หนึ่งในทักษะสำคัญที่สุดของการเล่น <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> ไม่ใช่การอ่านไพ่ แต่คือการ <strong>จัดการงบประมาณ</strong> ให้ถูกต้อง บทความนี้สรุปหลักการที่ใช้ได้จริงเพื่อให้เล่นได้อย่างมีสติและควบคุมความเสี่ยงได้
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Banknote className="w-6 h-6" /> 1. ตั้งวงเงินก่อนเริ่มทุกครั้ง
        </h3>
        <p>
          ก่อนเข้าโต๊ะ ป๊อกเด้ง ควรกำหนดตัวเลข 2 อย่างให้ชัดเจน: <strong>วงเงินสูงสุดต่อรอบ</strong> และ <strong>วงเงินสูงสุดต่อวัน</strong> เมื่อถึงขีดจำกัดใดขีดหนึ่งให้หยุดทันที ไม่ว่าจะอยู่ในช่วงชนะหรือแพ้
        </p>
        <p>
          วิธีนี้ช่วยป้องกันไม่ให้อารมณ์ขณะเล่นมาบิดเบือนการตัดสินใจ เพราะในเกมที่จบรอบเร็วอย่าง <strong>ป๊อกเด้ง 2 ใบเปิด</strong> ความผันผวนสามารถสะสมได้รวดเร็วมาก
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Target className="w-6 h-6" /> 2. ไม่แทงทบเพื่อตามคืนยอดเสีย
        </h3>
        <p>
          การแทงทบ (Martingale) คือการเพิ่มเดิมพันหลังแพ้เพื่อหวังคืนทุน วิธีนี้ดูสมเหตุสมผลในทางคณิตศาสตร์ แต่ในทางปฏิบัติมีความเสี่ยงสูงมาก เพราะ:
        </p>
        <ul className="list-none space-y-3 my-4 bg-black/40 p-5 rounded-2xl border border-gray-800">
          <li className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
            <span>ต้องการทุนสำรองมหาศาลเมื่อแพ้ติดต่อกันหลายรอบ</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
            <span>โต๊ะมีวงเงินสูงสุดต่อรอบ ทำให้วิธีนี้ไม่สามารถทำได้จริงในระยะยาว</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
            <span>ทำให้อารมณ์ขึ้นสูงและตัดสินใจผิดพลาดได้ง่าย</span>
          </li>
        </ul>
        <p>แทนที่จะตามคืน ให้หยุดพักและกลับมาใหม่ในรอบถัดไปพร้อมวงเงินที่ตั้งใหม่</p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <ShieldCheck className="w-6 h-6" /> 3. แยกเงินเล่นออกจากเงินใช้จ่าย
        </h3>
        <p>
          วิธีที่ง่ายที่สุดคือใช้ยอดที่โอนเข้าระบบเฉพาะสำหรับ <strong>บาคาร่าเว็บตรง</strong> โดยไม่ปะปนกับบัญชีส่วนตัว เมื่อหมดยอดในระบบก็หยุด ไม่โอนเพิ่ม จนกว่าจะถึงรอบถัดไปที่กำหนดไว้
        </p>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> 4. ตั้งเป้าหมายกำไรและหยุดเมื่อถึง
        </h3>
        <p>
          นอกจากกำหนดวงเงินแพ้สูงสุดแล้ว ควรตั้ง <strong>เป้าหมายกำไร</strong> ด้วย เช่น ถ้าได้กำไร 30% ของทุนก็หยุด การหยุดเมื่อชนะช่วยรักษากำไรและป้องกันการเสียคืนในรอบหลังซึ่งเกิดขึ้นบ่อยมากในเกมที่จบรอบเร็ว
        </p>

        <div className="mt-10 bg-gradient-to-r from-purple-900/30 to-black p-6 rounded-2xl border border-purple-500/50">
          <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="text-green-400 w-5 h-5" /> สรุปหลักการจัดการงบประมาณ
          </h4>
          <ul className="space-y-2 text-purple-200 text-sm">
            <li>✅ กำหนดวงเงินก่อนเริ่มและหยุดเมื่อถึงขีดจำกัด</li>
            <li>✅ ไม่แทงทบหรือเพิ่มเดิมพันเพื่อตามคืนยอดเสีย</li>
            <li>✅ แยกเงินเล่นออกจากค่าใช้จ่ายจำเป็น</li>
            <li>✅ ตั้งเป้าหมายกำไรและหยุดเมื่อบรรลุเป้า</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "เปรียบเทียบ บาคาร่าเว็บตรง กับ ป๊อกเด้ง เกมไหนเหมาะกับสไตล์คุณ?",
    date: "5 เมษายน 2569",
    image: "/pok11.webp",
    excerpt: "วิเคราะห์กติกา อัตราจ่าย ความผันผวน และความเสี่ยงระหว่างบาคาร่าและป๊อกเด้ง เพื่อเลือกเกมให้เหมาะกับงบประมาณ",
    content: (
      <div className="space-y-6 text-gray-300 leading-loose font-medium pb-8">
        <p className="text-lg text-white">
          คำถามที่ผู้เล่นมือใหม่มักสงสัยคือควรเลือกเกมแบบไหนระหว่าง <strong>บาคาร่าเว็บตรง</strong> กับ <strong>ป๊อกเด้งออนไลน์</strong> บทความนี้สรุปข้อดี ข้อควรระวัง และความแตกต่างของทั้งสองเกม เพื่อให้ตัดสินใจจากกติกาและความเสี่ยงได้ชัดขึ้น
        </p>

        <h3 className="text-2xl font-bold text-ezgold-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <ShieldCheck className="w-6 h-6 text-white" /> เจาะลึกจุดเด่น: บาคาร่าเว็บตรง (Baccarat Online)
        </h3>
        <p>
          <strong>บาคาร่าออนไลน์</strong> เป็นเกมไพ่ระดับสากลที่มีกติกาคล้ายคลึงกับป๊อกเด้ง แต่ผู้เล่นไม่ได้ถือไพ่เอง ทำหน้าที่เลือกผลลัพธ์ของฝั่ง <strong>Player</strong> หรือ <strong>Banker</strong> ตามกติกาโต๊ะ
        </p>
        <ul className="list-none space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">มีเค้าไพ่ให้อ่านชัดเจน:</strong> บาคาร่ามีกระดานแสดงสถิติย้อนหลังให้ศึกษา แต่ไม่สามารถรับประกันผลลัพธ์ในรอบถัดไปได้
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">อัตราเสียเปรียบแตกต่างตามฝั่งที่เลือก:</strong> ควรศึกษากติกาและอัตราจ่ายของโต๊ะก่อนวางเดิมพัน โดยเฉพาะค่าคอมมิชชันของฝั่ง Banker
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">จัดการเงินได้ง่ายกว่า:</strong> ด้วยอัตราจ่ายที่ค่อนข้างคงที่ จึงวางงบประมาณต่อรอบได้ง่าย แต่ไม่ควรใช้การแทงทบเพื่อไล่คืนยอดเสีย
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-purple-400 mt-10 flex items-center gap-3 border-b border-gray-700 pb-2">
          <Gamepad2 className="w-6 h-6 text-white" /> เจาะลึกจุดเด่น: ป๊อกเด้งออนไลน์ (Pokdeng)
        </h3>
        <p>
          ในขณะที่ <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> ผู้เล่นแข่งแต้มกับเจ้ามือโดยตรง จุดเด่นคือรอบเล่นเร็วและมีการจ่ายตามไพ่พิเศษ แต่ความผันผวนก็สูงขึ้นตามยอดเดิมพัน
        </p>
        <ul className="list-none space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
          <li className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">อัตราการจ่ายแบบทวีคูณ:</strong> ป๊อกเด้งมีการจ่ายตามไพ่พิเศษ เช่น เด้งหรือไพ่รูปแบบพิเศษ โดยต้องตรวจสอบกติกาโต๊ะก่อนเล่นทุกครั้ง
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" /> 
            <div>
              <strong className="text-white">เลือกรูปแบบเดิมพันได้หลายแบบ:</strong> ผู้เล่นสามารถเลือกจำนวนขาตามงบประมาณ แต่จำนวนขาที่มากขึ้นทำให้ยอดเดิมพันรวมสูงขึ้นด้วย
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
          <BarChart2 className="w-6 h-6 text-blue-400" /> สรุป: เกมไหนเหมาะกับคุณ?
        </h3>
        <p>
          หากคุณชอบเกมที่จบรอบเร็วและต้องอ่านกติกาไพ่พิเศษ <strong>ป๊อกเด้งออนไลน์</strong> อาจเหมาะกว่า แต่ต้องยอมรับความผันผวนและตั้งวงเงินให้ชัดเจน
        </p>
        <p>
          หากคุณต้องการเกมที่กติกาเลือกฝั่งค่อนข้างตรงไปตรงมาและอ่านสถิติย้อนหลังประกอบได้ <strong>บาคาร่าเว็บตรง</strong> อาจเข้าใจง่ายกว่า แต่ผลลัพธ์ยังมีความเสี่ยงเสมอ
        </p>

        <div className="mt-8 bg-gradient-to-r from-ezgold-900/20 to-black p-5 rounded-xl border border-ezgold-500/30 text-center">
          <p className="text-ezgold-200 text-lg font-bold">
            ไม่ว่าคุณจะสนใจเกมแบบไหน ที่ <strong className="text-white">EZPOK168</strong> ควรเริ่มจากการอ่านกติกา เงื่อนไข และกำหนดงบประมาณก่อนใช้งานทุกครั้ง
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
                เจาะลึกกติกา วิธีเล่น ความเสี่ยง และการจัดการงบประมาณของ <strong>ป๊อกเด้ง 2 ใบเปิด</strong> และ <strong>บาคาร่าเว็บตรง</strong> อัปเดตเนื้อหา 2026
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
                <Image src={articleData[0].image} alt="สอนเล่นป๊อกเด้งออนไลน์" width={960} height={540} className="w-full h-[350px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                
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
                          <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                  <button type="button" aria-label="ปิดหน้าต่างบทความ" onClick={() => setActiveArticle(null)} className="p-2 bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white rounded-full transition-colors shadow-lg border border-gray-700 hover:border-red-500">
                      <X className="w-6 h-6" aria-hidden="true" />
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
                      <button type="button" onClick={() => setActiveArticle(null)} className="px-10 py-4 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white font-extrabold text-lg rounded-full transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(168,85,247,0.4)] border border-purple-400/50">
                          ✖ ปิดหน้าต่างบทความ
                      </button>
                  </div>
              </div>
          </div>
        </>
      )}

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 mt-20 mb-4">
        <div className="bg-black/50 p-6 md:p-10 rounded-3xl border border-white/[0.07]">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/[0.07]">
            <BookOpen className="w-8 h-8 shrink-0 text-yellow-400" />
            <h2 className="font-extrabold text-2xl md:text-3xl text-white">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          <div className="space-y-4 w-full">
            {[
              { q: 'ป๊อกเด้ง 2 ใบเปิด ข้อดีเหนือบาคาร่าคืออะไร?', a: 'ป๊อกเด้ง 2 ใบเปิดจบรอบเร็วกว่าและมีระบบจ่ายทวีคูณเมื่อได้ไพ่พิเศษ เช่น เด้ง ไพ่เรียง หรือไพ่ตอง ในขณะที่บาคาร่าอัตราจ่ายคงที่และผู้เล่นไม่ได้ถือไพ่โดยตรง', open: true },
              { q: 'ป๊อกเด้งออนไลน์ 2 ใบเปิด เหมาะกับผู้เล่นแบบไหน?', a: 'เหมาะกับผู้ที่ชอบเกมจบรอบเร็ว อยากเข้าใจกติกาง่ายๆ และรับความผันผวนของอัตราจ่ายทวีคูณได้ ผู้เล่นควรตั้งวงเงินก่อนเริ่มทุกครั้ง' },
              { q: 'ความแตกต่างหลักระหว่างป๊อกเด้งกับบาคาร่าคืออะไร?', a: 'ป๊อกเด้งผู้เล่นแข่งแต้มกับเจ้ามือโดยตรงและมีการจ่ายทวีคูณ บาคาร่าผู้เล่นทายผลระหว่างฝั่ง Player กับ Banker โดยไม่ถือไพ่ อัตราจ่ายในบาคาร่าคงที่กว่า' },
              { q: 'การจัดการงบประมาณในป๊อกเด้งออนไลน์ ควรทำอย่างไร?', a: 'ควรกำหนดวงเงินต่อรอบและต่อวันล่วงหน้า หยุดเมื่อถึงขีดจำกัด ไม่ว่าจะแพ้หรือชนะ ไม่ใช้วิธีแทงทบเพื่อตามคืนยอดเสีย เพราะเพิ่มความเสี่ยงสะสม' },
              { q: 'ป๊อกเด้งออนไลน์ที่ EZPOK168 สมัครอย่างไร?', a: 'ติดต่อแอดมินผ่าน LINE ได้ตลอด 24 ชม. แอดมินจะแนะนำขั้นตอน เงื่อนไข และโปรโมชันที่มีอยู่ก่อนเริ่มใช้งานจริง' },
              { q: 'เล่นหลายขาในป๊อกเด้ง 2 ใบเปิด ช่วยลดความเสี่ยงได้จริงหรือไม่?', a: 'การเล่นหลายขาอาจกระจายผลลัพธ์ในบางรอบ แต่ก็เพิ่มยอดเดิมพันรวมในเวลาเดียวกัน ไม่ใช่วิธีรับประกันผลลัพธ์ ควรใช้ร่วมกับการตั้งวงเงินเท่านั้น' },
            ].map((item, i) => (
              <details key={i} open={item.open} className="cursor-pointer rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <summary className="font-bold text-gray-200 text-base md:text-lg outline-none flex justify-between items-center px-6 py-5 hover:bg-white/[0.02] transition-colors list-none">
                  {item.q}
                </summary>
                <p className="px-6 pb-5 pt-4 text-gray-400 text-sm md:text-base leading-relaxed"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-5xl mx-auto px-4 mt-12 mb-4">
        <h2 className="font-extrabold text-xl md:text-2xl text-white mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
          <ArrowRight className="w-6 h-6 text-purple-400" /> บทความที่เกี่ยวข้อง
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: '/seo/pokdeng', title: '🃏 สอนเล่นป๊อกเด้ง', desc: 'กติกา วิธีเล่น การนับแต้ม ไพ่พิเศษ ฉบับสมบูรณ์', color: '#D4AF37' },
            { href: '/seo/thai-lottery', title: '🏅 ตรวจหวยไทย', desc: 'ผลสลากกินแบ่งรัฐบาลไทยล่าสุด พร้อมระบบตรวจหวยออนไลน์', color: '#f59e0b' },
            { href: '/seo/lao-lottery', title: '💎 หวยลาว lotto', desc: 'อัพเดตผลหวยลาวพัฒนาล่าสุด แทงหวยออนไลน์ ไม่มีเลขอั้น', color: '#A855F7' },
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
      </section>

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
