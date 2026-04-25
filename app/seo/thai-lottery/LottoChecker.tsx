"use client";
import { useState } from "react";
import { Search, X, CheckCircle, AlertTriangle, Sparkles, Info } from "lucide-react";

// ─── ข้อมูลหวยตัวอย่าง (สำหรับสาธิตการทำงานของระบบ)
// ✅ FIX: เพิ่ม comment ชัดเจนว่าเป็น simulated data
// ในการ deploy จริง ให้ดึงจาก API จริงเท่านั้น เช่น api.lottery.go.th
const lottoData: Record<string, { prize1: string; front3: string[]; back3: string[]; back2: string }> = {
  "16042569": { prize1: "309612", front3: ["868", "424"], back3: ["355", "108"], back2: "77" },
  "01042569": { prize1: "292514", front3: ["406", "113"], back3: ["851", "098"], back2: "47" },
  "16032569": { prize1: "833009", front3: ["510", "983"], back3: ["439", "954"], back2: "64" },
};

interface ModalState {
  isOpen: boolean;
  title: string;
  messages: string[];
  isWin: boolean;
}

export default function LottoChecker() {
  const [date, setDate] = useState("16042569");
  const [inputs, setInputs] = useState(["", "", ""]);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false, title: "", messages: [], isWin: false,
  });

  const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const data = lottoData[date];
    if (!data) return;

    let isWin = false;
    const resultMessages: string[] = [];
    let hasInput = false;

    inputs.forEach((val, idx) => {
      // ✅ FIX: trim + sanitize ก่อนใช้
      const num = val.trim().replace(/\D/g, "");
      if (!num) return;
      hasInput = true;

      const won: string[] = [];
      const top3 = data.prize1.slice(-3);
      const top2 = data.prize1.slice(-2);

      if (num === data.prize1) won.push("รางวัลที่ 1");
      if (num.length === 3 && num === top3) won.push("3 ตัวบน");
      if (num.length === 2 && num === top2) won.push("2 ตัวบน");
      if (num.length === 2 && num === data.back2) won.push("2 ตัวล่าง");
      if (num.length === 3 && data.front3.includes(num)) won.push("3 ตัวหน้า");
      if (num.length === 3 && data.back3.includes(num)) won.push("3 ตัวท้าย");

      if (won.length > 0) {
        isWin = true;
        resultMessages.push(`ใบที่ ${idx + 1} (เลข ${num}) : ถูก${won.join(", ")} 🎉`);
      } else {
        resultMessages.push(`ใบที่ ${idx + 1} (เลข ${num}) : ไม่ถูกรางวัล`);
      }
    });

    if (!hasInput) {
      setModal({ isOpen: true, title: "แจ้งเตือน", messages: ["กรุณากรอกเลขที่ต้องการตรวจอย่างน้อย 1 ช่อง"], isWin: false });
      return;
    }

    setModal({
      isOpen: true,
      title: isWin ? "ยินดีด้วย! ตรงกับผลรางวัล" : "ไม่ตรงกับผลรางวัล",
      messages: resultMessages,
      isWin,
    });
  };

  const handleInputChange = (idx: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[idx] = value.replace(/\D/g, ""); // ตัวเลขเท่านั้น
    setInputs(newInputs);
  };

  return (
    <>
      {/* ✅ เพิ่ม Disclaimer ชัดเจน */}
      <div className="w-full max-w-3xl mx-auto mb-3 flex items-start gap-2 px-1">
        <Info className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-500">
          ข้อมูลนี้ใช้เพื่อการสาธิตเท่านั้น กรุณาตรวจสอบผลรางวัลจริงจาก{" "}
          <a href="https://lin.ee/QxlA2wI" target="_blank" rel="noreferrer noopener"
            className="text-yellow-500 underline">
            @EZPOK
          </a>
        </p>
      </div>

      <form
        onSubmit={handleCheck}
        className="w-full max-w-3xl mx-auto flex flex-col gap-6 relative z-10 mt-2"
        style={{
          background: "rgba(26,10,22,0.85)",
          padding: "1.5rem 1.5rem 2rem",
          borderRadius: "1.5rem",
          border: "1px solid rgba(220,38,38,0.3)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-2" style={{ color: "#D4AF37" }}>
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm md:text-base font-bold tracking-wide">
            ตรวจสลากหวยรัฐบาลไทย
          </span>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Date selector */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full p-4 md:p-5 rounded-2xl"
          style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <label htmlFor="issue_date" className="text-gray-300 font-bold whitespace-nowrap tracking-wide text-sm">
            เลือกรอบ <strong className="text-red-400">การตรวจหวย</strong>:
          </label>
          <div className="relative w-full">
            <select
              id="issue_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl cursor-pointer appearance-none font-bold text-base transition-all focus:outline-none"
              style={{
                background: "#0D0514",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#D4AF37",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <option value="16042569">งวดวันที่ 16 เมษายน 2569 (ตัวอย่าง)</option>
              <option value="01042569">งวดวันที่ 1 เมษายน 2569 (ตัวอย่าง)</option>
              <option value="16032569">งวดวันที่ 16 มีนาคม 2569 (ตัวอย่าง)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4" style={{ color: "#D4AF37" }}>
              ▼
            </div>
          </div>
        </div>

        {/* Number inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {inputs.map((val, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"
                style={{ background: "linear-gradient(180deg, #555, #000)" }} />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={val}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                className="relative w-full px-4 py-4 md:py-5 rounded-xl text-white tracking-[0.2em] md:tracking-[0.3em] text-center text-xl md:text-2xl placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600 transition-all font-bold focus:outline-none"
                style={{
                  background: "linear-gradient(180deg, #111 0%, #0a0a0a 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 3px 6px rgba(0,0,0,0.8)",
                }}
                placeholder={`ใบที่ ${idx + 1}`}
                autoComplete="off"
                aria-label={`กรอกเลขสลากใบที่ ${idx + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-primary mt-4 w-full sm:w-auto mx-auto px-12 py-4 md:py-5 text-lg md:text-2xl"
          style={{ borderRadius: "9999px" }}
        >
          <Search className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
          ตรวจสลากฯ
        </button>
      </form>

      {/* Result Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="ผลการตรวจสลาก"
          onClick={closeModal}
        >
          <div
            className="max-w-md w-full text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #1a0a16 0%, #000 100%)",
              border: "1px solid rgba(220,38,38,0.4)",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 0 60px rgba(220,38,38,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: "linear-gradient(90deg, #dc2626, #D4AF37)" }} />

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="ปิด"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <div className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center ${
              modal.isWin
                ? "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
                : "shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            }`} style={{
              background: modal.isWin
                ? "linear-gradient(135deg, #22c55e, #16a34a)"
                : "linear-gradient(135deg, #ef4444, #991b1b)",
            }}>
              {modal.isWin
                ? <CheckCircle className="w-10 h-10 text-white" />
                : <AlertTriangle className="w-10 h-10 text-white" />}
            </div>

            <h3 className={`text-2xl md:text-3xl font-extrabold mb-6 ${
              modal.isWin ? "text-green-400" : "text-red-400"
            }`}>
              {modal.title}
            </h3>

            <div className="mb-8 space-y-3 text-left"
              style={{ background: "rgba(0,0,0,0.5)", padding: "1.25rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              {modal.messages.map((msg, i) => (
                <p key={i} className={`p-3 rounded-xl text-sm md:text-base border font-medium ${
                  msg.includes("ถูก")
                    ? "border-green-500/30 text-green-300"
                    : "border-gray-800 text-gray-400"
                }`} style={{ background: msg.includes("ถูก") ? "rgba(34,197,94,0.1)" : "rgba(0,0,0,0.4)" }}>
                  {msg}
                </p>
              ))}
            </div>

            {/* ✅ เพิ่ม disclaimer ใน modal */}
            <p className="text-xs text-gray-600 mb-4">
              * ผลนี้เป็นข้อมูลสาธิต กรุณายืนยันกับ{" "}
              <a href="https://lin.ee/QxlA2wI" target="_blank" rel="noreferrer"
                className="text-yellow-600 underline">@EZPOK</a>
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="w-full py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-base"
              style={{ background: "linear-gradient(135deg, #dc2626, #991b1b)", border: "1px solid rgba(255,100,100,0.3)" }}
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </>
  );
}
