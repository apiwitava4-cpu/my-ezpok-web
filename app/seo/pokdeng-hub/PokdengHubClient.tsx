"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, X, BookOpen, Clock, Star, Target, Banknote,
  PlayCircle, ShieldCheck, Users, Sparkles, BarChart2,
  CheckCircle, Trophy, ArrowRight, HelpCircle, Zap,
  ChevronRight,
} from "lucide-react";

type ArticleMeta = {
  id: number;
  isNew?: boolean;
  badge?: string;
  title: string;
  summary: string;
  readTime: string;
  color: string;
  tags: string[];
};

const articleMeta: ArticleMeta[] = [
  {
    id: 1,
    isNew: true,
    badge: "บทความใหม่ล่าสุด 2026",
    title: "วิธีเล่นป๊อกเด้ง กติกาแบบไทยดั้งเดิมและสากล อัตราจ่ายครบจบ",
    summary:
      "เปรียบเทียบป๊อกเด้งแบบไทยดั้งเดิม (ไพ่ปิด/ผลัดเจ้า) กับสากล 2 ใบเปิด (Open Card) พร้อมตารางอัตราจ่ายครบทุกมือ และข้อได้เปรียบพิเศษ EZPOK168 ที่เล่นได้ทั้งเจ้าและขา",
    readTime: "7 นาที",
    color: "#D4AF37",
    tags: ["กติกา", "อัตราจ่าย", "เจ้าและขา", "Open Card"],
  },
  {
    id: 2,
    title: "ข้อดีของการเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด",
    summary: "4 จุดเด่นสำคัญของ Open Card ที่ทำให้ตัดสินใจได้ดีขึ้น เร็วขึ้น และโปร่งใสขึ้น",
    readTime: "4 นาที",
    color: "#22c55e",
    tags: ["Open Card", "ข้อดี", "2 ใบเปิด"],
  },
  {
    id: 3,
    title: "เปรียบเทียบ บาคาร่าเว็บตรง กับ ป๊อกเด้ง",
    summary: "สองเกมยอดนิยม กติกาต่างกันอย่างไร ไพ่พิเศษ อัตราจ่าย เหมาะกับสไตล์ไหน?",
    readTime: "4 นาที",
    color: "#3b82f6",
    tags: ["บาคาร่า", "เปรียบเทียบ", "เลือกเกม"],
  },
  {
    id: 4,
    title: "วิธีจัดการงบประมาณ ป๊อกเด้งออนไลน์ ให้อยู่หมัด",
    summary: "4 ขั้นตอนจัดการเงินทุนอย่างมีสติ ตั้งวงเงิน แยกบัญชี ไม่แทงทบ ป้องกันความเสี่ยงสะสม",
    readTime: "4 นาที",
    color: "#a855f7",
    tags: ["งบประมาณ", "วินัย", "เล่นอย่างมีสติ"],
  },
];

function Article1Content() {
  return (
    <div className="flex flex-col gap-8 text-gray-300 leading-relaxed">
      <div className="p-5 rounded-2xl flex items-start gap-4"
        style={{ background: "rgba(212,175,55,0.07)", borderLeft: "4px solid #D4AF37", borderRadius: "0 1rem 1rem 0" }}>
        <BookOpen className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
        <p className="text-sm md:text-base">
          <strong style={{ color: "#D4AF37" }}>บทสรุป:</strong>{" "}
          ป๊อกเด้งมี 2 รูปแบบหลัก — แบบไทยดั้งเดิม (ไพ่ปิด ผลัดเจ้า) และแบบสากลออนไลน์ (2 ใบเปิด)
          ทั้งสองใช้ไพ่พิเศษชุดเดียวกัน แต่ประสบการณ์และอัตราเปรียบต่างกันชัดเจน
          EZPOK168 เป็นหนึ่งในไม่กี่แพลตฟอร์มที่ให้เลือกเล่นได้ทั้งสองฝั่ง
        </p>
      </div>

      {/* Thai Traditional */}
      <section>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 pb-2"
          style={{ color: "#D4AF37", borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
          <span className="text-2xl">🃏</span> ป๊อกเด้งแบบไทยดั้งเดิม
        </h3>
        <p className="mb-4">
          ป๊อกเด้งแบบดั้งเดิมเล่นกันในวงเพื่อนหรือชุมชน กติกาเด่นคือ
          <strong className="text-white"> ไพ่ปิด</strong> — ทุกฝ่ายไม่เห็นไพ่ของกันและกันจนกว่าจะเปิด
          และ <strong className="text-white">ผลัดเจ้า</strong> — ผู้เล่นทุกคนสลับกันเป็นเจ้ามือตามลำดับ
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            { title: "ไพ่ปิด", desc: "ไพ่คว่ำ ไม่เปิดเผยระหว่างรอบ ผู้เล่นต้องตัดสินใจโดยไม่เห็นไพ่เจ้ามือ", icon: "🤫" },
            { title: "ผลัดเจ้า", desc: "เมื่อเจ้ามือแพ้ ตำแหน่งเจ้ามือส่งต่อให้คนถัดไป ทุกคนมีโอกาสเป็นเจ้ามือเท่ากัน", icon: "🔄" },
            { title: "แข่งตรง", desc: "ลูกมือแต่ละคนแข่งแต้มกับเจ้ามือโดยตรง ฝ่ายแต้มสูงกว่าชนะ", icon: "⚔️" },
            { title: "ผลัดอำนาจ", desc: "เจ้ามือมีข้อได้เปรียบเมื่อแต้มเสมอ แต่เสี่ยงจ่ายทุกขาหากแพ้", icon: "👑" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl flex items-start gap-3"
              style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Open Card */}
      <section>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 pb-2"
          style={{ color: "#22c55e", borderBottom: "1px solid rgba(34,197,94,0.2)" }}>
          <span className="text-2xl">🌐</span> ป๊อกเด้งสากล 2 ใบเปิด (Open Card)
        </h3>
        <p className="mb-4">
          รูปแบบที่นิยมในคาสิโนออนไลน์ปัจจุบัน ไพ่ 2 ใบแรกของทุกฝ่าย
          <strong className="text-white"> เปิดให้เห็นทันที</strong> ตั้งแต่เริ่มรอบ
          ผู้เล่นจึงเห็นแต้มของเจ้ามือก่อนตัดสินใจขอไพ่ใบที่ 3
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            { title: "เปิด 2 ใบแรก", desc: "ไพ่ทุกใบของทุกฝ่ายเปิดหน้าพร้อมกันตั้งแต่แรก มีข้อมูลก่อนตัดสินใจ", icon: "👀", color: "#22c55e" },
            { title: "ดีลเลอร์ประจำ", desc: "ไม่ผลัดเจ้า มีดีลเลอร์ประจำ ผู้เล่นเลือกเล่นเป็นลูกมือหรือเจ้ามือได้", icon: "🎴", color: "#22c55e" },
            { title: "เล่นหลายขา", desc: "วางเดิมพันได้หลายขาพร้อมกัน กระจายความเสี่ยง หรือเพิ่มโอกาสกำไร", icon: "🎲", color: "#22c55e" },
            { title: "โปร่งใส", desc: "ทุกคนเห็นไพ่พร้อมกัน ลดข้อสงสัย เหมาะสำหรับการเล่นออนไลน์", icon: "✅", color: "#22c55e" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl flex items-start gap-3"
              style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 pb-2"
          style={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <Target className="w-6 h-6 text-blue-400" /> ตารางเปรียบเทียบ ไทยดั้งเดิม vs สากล 2 ใบเปิด
        </h3>
        <div className="overflow-x-auto w-full mb-4">
          <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "rgba(212,175,55,0.1)" }}>
                {["หัวข้อ", "ไทยดั้งเดิม 🃏", "สากล 2 ใบเปิด 🌐"].map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold text-left text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["ไพ่", "ปิด (ไม่เห็น)", "เปิด 2 ใบแรกทุกฝ่าย"],
                ["เจ้ามือ", "ผลัดกัน (ทุกคน)", "ดีลเลอร์ประจำ / เลือกได้"],
                ["ตัดสินใจ", "ไม่มีข้อมูล", "เห็นแต้มทุกฝ่ายก่อนตัดสินใจ"],
                ["เล่นออนไลน์", "ยากกว่า", "ออกแบบมาสำหรับออนไลน์"],
                ["ไพ่พิเศษ", "ป๊อก เด้ง ตอง เรียง", "ป๊อก เด้ง ตอง เรียง (เหมือนกัน)"],
                ["ข้อได้เปรียบเจ้ามือ", "เสมอ = เจ้ามือชนะ", "เสมอ = เจ้ามือชนะ (เหมือนกัน)"],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3" style={{ border: "1px solid rgba(255,255,255,0.05)", color: j === 0 ? "#fff" : "#9ca3af" }}>
                      {j === 0 ? <strong>{cell}</strong> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payout Table */}
      <section>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 pb-2"
          style={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <Trophy className="w-6 h-6 text-yellow-400" /> ตารางอัตราจ่ายครบทุกมือ
        </h3>
        <div className="overflow-x-auto w-full mb-2">
          <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr style={{ background: "rgba(212,175,55,0.1)" }}>
                {["มือ / ไพ่", "คำอธิบาย", "อัตราจ่าย"].map((h, i) => (
                  <th key={i} className="px-4 py-3 font-bold text-left text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["ชนะธรรมดา", "แต้มสูงกว่าเจ้ามือ", "1 : 1", "#9ca3af"],
                ["ป๊อก 8", "2 ใบแรกรวมได้ 8 แต้ม", "1 : 1 (ชนะทันที)", "#ea580c"],
                ["ป๊อก 9", "2 ใบแรกรวมได้ 9 แต้ม (สูงสุด)", "1 : 1 (ชนะทันที)", "#dc2626"],
                ["เด้ง 1 ดอก", "ไพ่ 1 ใบดอกเดียวกัน", "1 : 1", "#0ea5e9"],
                ["เด้ง 2 ดอก", "ไพ่ 2 ใบดอกเดียวกัน", "1 : 2", "#0ea5e9"],
                ["เด้ง 3 ดอก", "ไพ่ 3 ใบดอกเดียวกัน (Flush)", "1 : 3", "#22c55e"],
                ["ไพ่เรียง (Straight)", "3 ใบเรียง เช่น 7-8-9", "1 : 3", "#7c3aed"],
                ["ไพ่ตอง (Triple)", "3 ใบหน้าเดียวกัน เช่น K-K-K", "1 : 5", "#D4AF37"],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)" }}>
                  <td className="px-4 py-3 font-bold text-white" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>{row[0]}</td>
                  <td className="px-4 py-3 text-gray-400" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>{row[1]}</td>
                  <td className="px-4 py-3 font-bold" style={{ border: "1px solid rgba(255,255,255,0.05)", color: row[3] as string }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">* อัตราจ่ายอาจแตกต่างกันตามแต่ละโต๊ะ ควรตรวจสอบกติกาโต๊ะก่อนเล่นทุกครั้ง</p>
      </section>

      {/* EZPOK168 Advantage */}
      <section className="p-6 rounded-2xl"
        style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(0,0,0,0.8))", border: "1px solid rgba(212,175,55,0.35)" }}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3"
          style={{ color: "#D4AF37" }}>
          <Zap className="w-6 h-6" /> ข้อได้เปรียบพิเศษ EZPOK168: เล่นได้ทั้งเจ้าและขา
        </h3>
        <p className="mb-5 text-gray-300">
          ที่ EZPOK168 ผู้เล่นสามารถ<strong className="text-white">เลือกฝั่ง</strong>ได้ตามสถานการณ์ — ซึ่งหาได้ยากในหลายแพลตฟอร์ม:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="p-5 rounded-2xl"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.3)" }}>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-6 h-6 text-red-400" />
              <p className="font-bold text-white">เล่นเป็นเจ้ามือ (Dealer)</p>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>ได้เปรียบทันทีเมื่อแต้มเสมอ</li>
              <li>รับจ่ายเงินทุกขาพร้อมกัน</li>
              <li>หากลูกมือหลายขาแพ้ รับเงินครบทุกขา</li>
              <li>เหมาะกับผู้ที่มีทุนสำรองเพียงพอ</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-6 h-6 text-green-400" />
              <p className="font-bold text-white">เล่นเป็นลูกมือ (Player)</p>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>ยืดหยุ่น เลือกขาเดิมพันได้เอง</li>
              <li>ลงทุนน้อย ควบคุมความเสี่ยงได้</li>
              <li>เล่นหลายขาพร้อมกันเพื่อกระจายความเสี่ยง</li>
              <li>เหมาะกับมือใหม่และผู้เล่นทั่วไป</li>
            </ul>
          </div>
        </div>
        <div className="p-4 rounded-xl text-sm"
          style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <p><strong style={{ color: "#D4AF37" }}>กลยุทธ์:</strong>{" "}
            ผู้เล่นที่เชี่ยวชาญสามารถสลับระหว่างเจ้ามือและลูกมือตามจังหวะของเกม
            เพิ่มความยืดหยุ่นในการจัดการงบประมาณ
            สอบถามเงื่อนไขและวิธีสลับฝั่งได้จากแอดมิน EZPOK168 โดยตรง</p>
        </div>
      </section>

      {/* Responsible Gambling */}
      <div className="p-4 rounded-xl flex items-start gap-3"
        style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.3)" }}>
        <span className="text-yellow-500 text-xl shrink-0">⚠️</span>
        <p className="text-sm text-gray-300">
          <strong className="text-yellow-400">คำเตือน:</strong>{" "}
          การพนันทุกประเภทมีความเสี่ยง กำหนดงบประมาณก่อนเล่นและเล่นเพื่อความบันเทิงเท่านั้น
          สำหรับผู้มีอายุ 20 ปีขึ้นไป
        </p>
      </div>
    </div>
  );
}

function Article2Content() {
  return (
    <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
      <p>
        ทำไมผู้เล่นหลายคนหันมาสนใจ <strong className="text-white">ป๊อกเด้ง 2 ใบเปิด</strong>?
        มี 4 จุดเด่นหลักที่ทำให้รูปแบบนี้แตกต่างและได้รับความนิยมในวงกว้าง:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            icon: <Clock className="w-6 h-6 text-yellow-400" />,
            title: "1. ความรวดเร็วในการจบรอบ",
            desc: "ระบบ 2 ใบเปิดทำให้รอบเล่นกระชับขึ้น ดีลเลอร์แจกไพ่และเปิดผลทันที ผู้เล่นเข้าใจจังหวะของเกมได้ง่ายขึ้น อย่างไรก็ตามจำนวนรอบที่มากขึ้นหมายถึงความเสี่ยงสะสมที่ต้องควบคุมด้วย",
          },
          {
            icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
            title: "2. เห็นข้อมูลก่อนตัดสินใจ",
            desc: "เมื่อไพ่ทุกใบเปิดหน้า ผู้เล่นสามารถเห็นแต้มของเจ้ามือก่อนตัดสินใจขอไพ่ใบที่ 3 ช่วยให้ตัดสินใจได้อย่างมีข้อมูลมากกว่าการเล่นแบบปิดแบบดั้งเดิม",
          },
          {
            icon: <Sparkles className="w-6 h-6 text-purple-400" />,
            title: "3. อัตราจ่ายทวีคูณตามกติกา",
            desc: "จุดเด่นของป๊อกเด้งยังอยู่ที่ไพ่พิเศษ (เด้ง, ไพ่ตอง, ไพ่เรียง) ที่จ่ายทวีคูณ ต้องตรวจสอบกติกาโต๊ะก่อนเล่นทุกครั้งเพราะแต่ละโต๊ะอาจแตกต่างกัน",
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
            title: "4. ความโปร่งใสสูงกว่า",
            desc: "ทุกคนเห็นไพ่ของทุกฝ่ายพร้อมกัน ลดข้อสงสัยเรื่องการโกง เหมาะสำหรับการเล่นออนไลน์ที่ต้องอาศัยความไว้วางใจในแพลตฟอร์ม",
          },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-2xl"
            style={{ background: "linear-gradient(160deg, rgba(40,40,40,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-2 mb-3">{item.icon}
              <h4 className="font-bold text-white">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl text-sm"
        style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}>
        <p><strong style={{ color: "#D4AF37" }}>สรุป:</strong>{" "}
          ป๊อกเด้ง 2 ใบเปิดเหมาะกับผู้ที่ชอบเกมจบรอบเร็ว อยากเห็นข้อมูลก่อนตัดสินใจ
          และรับความผันผวนของอัตราจ่ายทวีคูณได้ ควรตั้งวงเงินก่อนเริ่มทุกครั้ง
        </p>
      </div>
    </div>
  );
}

function Article3Content() {
  return (
    <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
      <p>
        <strong className="text-white">ป๊อกเด้ง</strong> และ <strong className="text-white">บาคาร่า</strong>{" "}
        เป็นสองเกมไพ่ที่ได้รับความนิยมสูงสุดในคาสิโนออนไลน์ไทย แต่กติกาและประสบการณ์แตกต่างกันอย่างมาก:
      </p>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: "rgba(212,175,55,0.1)" }}>
              {["หัวข้อ", "ป๊อกเด้ง 🃏", "บาคาร่า 🎰"].map((h, i) => (
                <th key={i} className="px-4 py-3 font-bold text-left text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["สไตล์การเล่น", "แข่งแต้มกับเจ้ามือโดยตรง", "ทายว่าฝั่งไหนชนะ (Player/Banker)"],
              ["ผู้เล่นมีอิทธิพล", "ใช่ — เลือกขอไพ่ได้", "น้อยมาก — กฎตายตัว"],
              ["ไพ่พิเศษ", "ป๊อก / เด้ง / ตอง / เรียง", "ไม่มี"],
              ["อัตราจ่ายสูงสุด", "5 เท่า (ไพ่ตอง)", "8 เท่า (Tie) — แต่โอกาสต่ำมาก"],
              ["ความเร็วเกม", "เร็วมาก", "เร็ว"],
              ["ข้อได้เปรียบบ้าน (House Edge)", "ต่ำกว่าเมื่อเล่นเป็นเจ้ามือ", "Banker ~1.06%"],
              ["เหมาะกับใคร", "ชอบตัดสินใจ มีกลยุทธ์", "ชอบเกมง่าย รวดเร็ว"],
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)" }}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3" style={{ border: "1px solid rgba(255,255,255,0.05)", color: j === 0 ? "#fff" : "#9ca3af" }}>
                    {j === 0 ? <strong>{cell}</strong> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl"
          style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h4 className="font-bold text-white mb-2">เลือกป๊อกเด้งถ้า...</h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
            <li>ชอบเกมที่มีการตัดสินใจ</li>
            <li>อยากโอกาสได้ไพ่พิเศษ (ตอง เรียง)</li>
            <li>ต้องการเล่นทั้งสองฝั่ง</li>
            <li>ชอบเกมไพ่ไทยแบบดั้งเดิม</li>
          </ul>
        </div>
        <div className="p-5 rounded-2xl"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.25)" }}>
          <h4 className="font-bold text-white mb-2">เลือกบาคาร่าถ้า...</h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
            <li>ชอบเกมง่าย กดแค่ 3 ปุ่ม</li>
            <li>ต้องการ House Edge ต่ำ (Banker)</li>
            <li>ชอบจังหวะเกมที่คาดเดาได้</li>
            <li>เล่นตาม Trend ง่ายกว่า</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Article4Content() {
  return (
    <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
      <div className="p-4 rounded-xl flex items-start gap-3"
        style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.3)" }}>
        <span className="text-yellow-500 text-xl shrink-0">⚠️</span>
        <p className="text-sm"><strong className="text-yellow-400">คำเตือนสำคัญ:</strong>{" "}
          การพนันทุกประเภทมีความเสี่ยง ไม่มีระบบหรือ "สูตร" ใดที่รับประกันกำไร 100%
          ควรกำหนดงบประมาณล่วงหน้าและเล่นเพื่อความบันเทิงเท่านั้น
        </p>
      </div>
      <p>
        ทักษะสำคัญที่สุดในการเล่น <strong className="text-white">ป๊อกเด้งออนไลน์</strong>{" "}
        ไม่ใช่การอ่านไพ่ แต่คือการ<strong className="text-white">จัดการงบประมาณ</strong>:
      </p>
      <div className="flex flex-col gap-4">
        {[
          {
            num: "1", color: "#D4AF37",
            title: "ตั้งวงเงินก่อนเริ่มทุกครั้ง",
            desc: "กำหนดทั้งวงเงินสูงสุดต่อรอบและต่อวันล่วงหน้า เมื่อถึงขีดจำกัดให้หยุดทันที ไม่ว่าจะชนะหรือแพ้ เพราะในเกมที่จบรอบเร็วความผันผวนสะสมได้รวดเร็ว",
          },
          {
            num: "2", color: "#f87171",
            title: "ไม่แทงทบเพื่อตามคืนยอดเสีย",
            desc: "การแทงทบ (Martingale) ต้องการทุนสำรองมหาศาลและโต๊ะมีวงเงินสูงสุดต่อรอบ ทำให้ใช้ได้จริงไม่ได้ในระยะยาว ควรหยุดพักและกลับมาใหม่แทน",
          },
          {
            num: "3", color: "#22c55e",
            title: "แยกเงินเล่นออกจากเงินใช้จ่าย",
            desc: "ใช้ยอดที่โอนเข้าระบบเฉพาะสำหรับการเล่น ไม่ปะปนกับบัญชีส่วนตัว เมื่อหมดยอดในระบบก็หยุด ไม่โอนเพิ่มจนกว่าจะถึงรอบถัดไปที่กำหนดไว้",
          },
          {
            num: "4", color: "#a855f7",
            title: "ตั้งเป้าหมายกำไรและหยุดเมื่อถึง",
            desc: "นอกจากกำหนดวงเงินแพ้สูงสุดแล้ว ควรตั้งเป้าหมายกำไรด้วย เช่น ถ้าได้กำไร 30% ของทุนก็หยุด ป้องกันการเสียคืนซึ่งเกิดขึ้นบ่อยในเกมที่จบรอบเร็ว",
          },
        ].map((s) => (
          <div key={s.num} className="flex items-start gap-4 p-5 rounded-2xl"
            style={{ background: "linear-gradient(160deg, rgba(30,30,30,0.6), #000)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shrink-0 text-black"
              style={{ background: s.color, minWidth: "2.5rem" }}>{s.num}</div>
            <div>
              <p className="font-bold text-white mb-1">{s.title}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleContent({ id }: { id: number }) {
  if (id === 1) return <Article1Content />;
  if (id === 2) return <Article2Content />;
  if (id === 3) return <Article3Content />;
  if (id === 4) return <Article4Content />;
  return null;
}

export default function PokdengHubClient() {
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = openId !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openId]);

  const hero = articleMeta[0];
  const rest = articleMeta.slice(1);
  const openArticle = articleMeta.find((a) => a.id === openId);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden relative text-gray-200 font-sans pb-20"
      style={{ backgroundColor: "#0D0514" }}
    >
      {/* Ambient background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07]"
          style={{ backgroundColor: "#D4AF37" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07]"
          style={{ backgroundColor: "#A855F7" }} />
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-40 shadow-md w-full"
        style={{ backgroundColor: "rgba(13,5,20,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(212,175,55,0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors no-underline shrink-0 group"
            style={{ color: "#D4AF37" }}>
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-xs md:text-sm">กลับหน้าหลัก</span>
          </Link>
          <span className="font-bold text-base md:text-xl tracking-tight text-white shrink-0">
            EZPOK168{" "}
            <span style={{ background: "linear-gradient(135deg, #D4AF37, #FFE566)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KNOWLEDGE
            </span>
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">

        {/* Page Title */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-black font-bold text-xs"
            style={{ background: "linear-gradient(135deg, #FFE566, #D4AF37)" }}>
            <BookOpen className="w-3.5 h-3.5" /> ศูนย์รวมบทความป๊อกเด้ง
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            บทความ{" "}
            <span style={{ background: "linear-gradient(135deg, #D4AF37, #FFE566)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ป๊อกเด้งออนไลน์
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            คู่มือกติกา วิธีเล่น อัตราจ่าย และกลยุทธ์ครบจบ — อัปเดต 2026
          </p>
        </div>

        {/* Hero Article Card */}
        <div
          className="w-full mb-8 rounded-3xl overflow-hidden relative cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(0,0,0,0.95))",
            border: "1px solid rgba(212,175,55,0.4)",
            boxShadow: "0 15px 50px rgba(212,175,55,0.12)",
          }}
          onClick={() => setOpenId(hero.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpenId(hero.id)}
          aria-label={`เปิดบทความ: ${hero.title}`}
        >
          <div className="absolute top-0 left-0 w-full h-1"
            style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-black font-bold text-xs"
                style={{ background: "linear-gradient(135deg, #FFE566, #D4AF37)" }}>
                <Sparkles className="w-3 h-3" /> {hero.badge}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" /> {hero.readTime}
              </span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-white leading-snug group-hover:text-yellow-300 transition-colors">
              {hero.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">{hero.summary}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {hero.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-lg"
                  style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
                  #{tag}
                </span>
              ))}
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4AF37, #FFE566)", color: "#000" }}
            >
              <BookOpen className="w-4 h-4" /> อ่านบทความ <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Title for smaller articles */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">บทความเพิ่มเติม</span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Smaller Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {rest.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl overflow-hidden cursor-pointer group transition-all hover:-translate-y-1"
              style={{
                background: "rgba(17,17,17,0.9)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
              onClick={() => setOpenId(article.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenId(article.id)}
              aria-label={`เปิดบทความ: ${article.title}`}
            >
              <div className="h-1 w-full" style={{ background: article.color }} />
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-500">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-2 leading-snug group-hover:text-yellow-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{article.summary}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md"
                      style={{ background: `${article.color}18`, color: article.color, border: `1px solid ${article.color}30` }}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-xs font-bold transition-all"
                  style={{ color: article.color }}>
                  อ่านเพิ่มเติม <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A0B2E, #000)", border: "1px solid rgba(212,175,55,0.35)", boxShadow: "0 15px 50px rgba(212,175,55,0.12)" }}
        >
          <div className="absolute top-0 left-0 w-full h-1.5"
            style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
          <h3 className="font-extrabold text-3xl md:text-4xl text-white mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h3>
          <p className="text-gray-300 mb-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ติดต่อแอดมินเพื่อสอบถามเงื่อนไขและสมัครใช้งาน{" "}
            <strong style={{ color: "#D4AF37" }}>ป๊อกเด้งออนไลน์</strong>{" "}
            บน EZPOK168 — เล่นได้ทั้งเจ้าและขา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer noopener"
              className="btn-line px-10 py-4 text-base md:text-lg no-underline">
              ติดต่อแอดมิน 24 ชม.
            </a>
            <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
              className="btn-primary px-10 py-4 text-base md:text-lg no-underline pulse-gold">
              <PlayCircle className="w-6 h-6 fill-black" /> สมัครสมาชิก
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-4">⚠️ สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</p>
        </div>

        {/* FAQ Preview */}
        <section className="mt-12 p-6 md:p-10 rounded-3xl"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-4 mb-6 pb-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <HelpCircle className="w-7 h-7 shrink-0" style={{ color: "#D4AF37" }} />
            <h2 className="font-bold text-xl md:text-2xl text-white">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "ป๊อกเด้งแบบไทยดั้งเดิมต่างจากสากลอย่างไร?",
                a: "ไทยดั้งเดิมใช้ไพ่ปิดและผลัดเจ้า ส่วนสากล 2 ใบเปิด (Open Card) ทุกฝ่ายเปิดไพ่ให้เห็นทันทีตั้งแต่แรก มีดีลเลอร์ประจำ เหมาะสำหรับการเล่นออนไลน์มากกว่า",
              },
              {
                q: "อัตราจ่ายป๊อกเด้งมีอะไรบ้าง?",
                a: "ชนะธรรมดา 1:1 | เด้ง 1 ดอก 1:1 | เด้ง 2 ดอก 1:2 | เด้ง 3 ดอก 1:3 | ไพ่เรียง 1:3 | ไพ่ตอง (สูงสุด) 1:5 — ทั้งหมดขึ้นอยู่กับกติกาของแต่ละโต๊ะ",
              },
              {
                q: "เล่นป๊อกเด้งในฐานะเจ้ามือได้หรือไม่?",
                a: "ที่ EZPOK168 ผู้เล่นสามารถเลือกเล่นได้ทั้งเจ้ามือและลูกมือ เจ้ามือได้เปรียบเมื่อแต้มเสมอ และรับจ่ายเงินกับทุกขา ติดต่อแอดมินเพื่อสอบถามรายละเอียด",
              },
              {
                q: "ไพ่ตองในป๊อกเด้งจ่ายเท่าไร?",
                a: "ไพ่ตอง (Triple) คือไพ่ 3 ใบที่มีหน้าเดียวกัน เช่น K-K-K จ่าย 5 เท่าของเดิมพัน ถือเป็นมือพิเศษสูงสุดในป๊อกเด้ง",
              },
              {
                q: "ข้อดีของการเล่นป๊อกเด้งในฐานะเจ้ามือคืออะไร?",
                a: "เจ้ามือชนะเมื่อแต้มเสมอกับลูกมือ รับจ่ายเงินทุกขาพร้อมกัน หากลูกมือหลายขาแพ้พร้อมกันได้รับเงินทุกขา ศักยภาพกำไรสูงกว่าการเล่นเป็นลูกมือแต่ความเสี่ยงก็สูงกว่าด้วย",
              },
              {
                q: "ควรขอไพ่ใบที่ 3 เมื่อไร?",
                a: "แนวทางทั่วไป: 0–4 แต้ม = ควรขอไพ่ | 5 แต้ม = ดูสถานการณ์และแต้มของเจ้ามือ | 6–9 แต้ม = ควรหยุด ในแบบ 2 ใบเปิดผู้เล่นเห็นแต้มเจ้ามือก่อน ช่วยตัดสินใจได้ดีขึ้น",
              },
            ].map((item, i) => (
              <details key={i}
                className="cursor-pointer rounded-2xl overflow-hidden"
                open={i === 0}
                style={{ background: "linear-gradient(160deg, rgba(18,10,35,0.9), rgba(5,3,14,0.95))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <summary className="font-bold text-gray-200 text-sm md:text-base flex justify-between items-center outline-none px-6 py-4 hover:bg-white/[0.02] transition-colors list-none">
                  <span>{item.q}</span>
                  <span className="text-gray-500 shrink-0 ml-4">▾</span>
                </summary>
                <p className="px-6 pb-5 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-10">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" style={{ color: "#D4AF37" }} /> บทความที่เกี่ยวข้อง
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/seo/pokdeng", title: "คู่มือป๊อกเด้งฉบับสมบูรณ์", desc: "กติกา ไพ่พิเศษ เปรียบเทียบครบ", color: "#D4AF37" },
              { href: "/seo/thai-lottery", title: "หวยไทย & ตรวจหวยออนไลน์", desc: "ผลหวยไทยล่าสุด วิธีตรวจและแทงหวย", color: "#22c55e" },
              { href: "/seo/lao-lottery", title: "หวยลาวพัฒนา ผลล่าสุด", desc: "ตรวจผลหวยลาวแม่นยำ แนวทางแทงหวย", color: "#a855f7" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="p-4 rounded-2xl no-underline flex flex-col gap-2 transition-transform hover:-translate-y-1"
                style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="font-bold text-sm" style={{ color: link.color }}>{link.title}</span>
                <span className="text-xs text-gray-500">{link.desc}</span>
                <span className="flex items-center gap-1 text-xs mt-1" style={{ color: link.color }}>
                  อ่านต่อ <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 mt-12 text-center text-xs w-full flex flex-col items-center"
        style={{ background: "#040108", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="font-bold mb-2 text-sm" style={{ color: "#D4AF37" }}>
          สงวนลิขสิทธิ์ &copy; 2026 EZPOK168.NET
        </p>
        <p className="max-w-3xl mx-auto px-4 text-gray-600">
          ศูนย์รวมบทความ <strong>ป๊อกเด้งออนไลน์</strong> กติกา วิธีเล่น อัตราจ่าย<br />
          <strong>สำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</strong>
        </p>
      </footer>

      {/* Modal */}
      {openId !== null && openArticle && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpenId(null); }}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col"
            style={{ background: "linear-gradient(160deg, #12071e, #080410)", border: "1px solid rgba(212,175,55,0.25)", boxShadow: "0 25px 80px rgba(0,0,0,0.9)" }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-2">
                  {openArticle.isNew && (
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold text-black"
                      style={{ background: "linear-gradient(135deg, #FFE566, #D4AF37)" }}>
                      {openArticle.badge}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" /> {openArticle.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-white text-lg md:text-xl leading-snug">{openArticle.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="ปิดหน้าต่างบทความ"
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 md:p-8">
              <ArticleContent id={openId} />

              {/* Modal CTA */}
              <div className="mt-8 p-6 rounded-2xl text-center"
                style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
                <p className="text-gray-300 text-sm mb-4">สนใจเล่นป๊อกเด้งออนไลน์? ติดต่อแอดมินได้เลย</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer noopener"
                    className="btn-line px-8 py-3 text-sm no-underline">
                    ติดต่อแอดมิน LINE
                  </a>
                  <a href="https://ezpok168.com/" target="_blank" rel="noreferrer noopener"
                    className="btn-primary px-8 py-3 text-sm no-underline">
                    <PlayCircle className="w-4 h-4 fill-black" /> สมัครสมาชิก
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
