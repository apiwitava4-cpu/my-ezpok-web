"use client";
import { useState } from "react";
import { Search, X, CheckCircle, AlertTriangle, Sparkles, Info } from "lucide-react";

// ─── ข้อมูลหวยลาวตัวอย่าง (สำหรับสาธิตการทำงานของระบบ)
// ✅ FIX: เป็น simulated data เท่านั้น ตรวจสอบจากแหล่งทางการก่อนเสมอ
const laoLottoData: Record<string, { prize4: string; prize3: string; top2: string; bot2: string }> = {
  "17042569": { prize4: "5079", prize3: "079", top2: "79", bot2: "50" },
  "13042569": { prize4: "7568", prize3: "568", top2: "68", bot2: "75" },
  "10042569": { prize4: "0389", prize3: "389", top2: "89", bot2: "03" },
};

interface ModalState {
  isOpen: boolean;
  title: string;
  messages: string[];
  isWin: boolean;
}

export default function LaoLottoChecker() {
  const [date, setDate] = useState("17042569");
  const [inputs, setInputs] = useState(["", "", ""]);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false, title: "", messages: [], isWin: false,
  });

  const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const data = laoLottoData[date];
    if (!data) return;

    let isWin = false;
    const resultMessages: string[] = [];
    let hasInput = false;

    inputs.forEach((val, idx) => {
      const num = val.trim().replace(/\D/g, "");
      if (!num) return;
      hasInput = true;

      const won: string[] = [];
      if (num === data.prize4) won.push("4 ตัวตรง");
      if (num.length === 3 && num === data.prize3) won.push("3 ตัวตรง");
      if (num.length === 2 && num === data.top2) won.push("2 ตัวบน");
      if (num.length === 2 && num === data.bot2) won.push("2 ตัวล่าง");

      if (won.length > 0) {
        isWin = true;
        resultMessages.push(`ใบที่ ${idx + 1} (เลข ${num}) : ถูก${won.join(", ")} 🎉`);
      } else {
        resultMessages.push(`ใบที่ ${idx + 1} (เลข ${num}) : ไม่ถูกรางวัล`);
      }
    });

    if (!hasInput) {
      setModal({ isOpen: true, title: "แจ้งเตือน", messages: ["กรุณากรอกเลขอย่างน้อย 1 ช่อง"], isWin: false });
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
    newInputs[idx] = value.replace(/\D/g, "");
    setInputs(newInputs);
  };

  return (
    <>
      {/* ✅ Disclaimer */}
      <div className="w-full max-w-3xl mx-auto mb-3 flex items-start gap-2 px-1">
        <Info className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-500">
          ข้อมูลนี้ใช้เพื่อการสาธิตเท่านั้น กรุณาตรวจสอบผลหวยลาวจากแหล่งทางการก่อนเสมอ
        </p>
      </div>

      <form
        onSubmit={handleCheck}
        className="w-full max-w-3xl mx-auto flex flex-col gap-6 relative z-10 mt-2"
        style={{
          background: "rgba(26,10,22,0.85)",
          padding: "1.5rem 1.5rem 2rem",
          borderRadius: "1.5rem",
          border: "1px solid rgba(139,92,246,0.3)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 animate-pulse text-purple-400" />
          <span className="text-sm md:text-base font-bold tracking-wide text-purple-300">
            ตรวจผลหวยลาวพัฒนา
          </span>
          <Sparkles className="w-5 h-5 animate-pulse text-purple-400" />
        </div>

        {/* Date selector */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full p-4 md:p-5 rounded-2xl"
          style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <label htmlFor="lao_issue_date" className="text-gray-300 font-bold whitespace-nowrap tracking-wide text-sm">
            เลือกรอบ <strong className="text-purple-400">การตรวจหวย</strong>:
          </label>
          <div className="relative w-full">
            <select
              id="lao_issue_date"
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
              <option value="17042569">งวดวันที่ 17 เมษายน 2569 (ตัวอย่าง)</option>
              <option value="13042569">งวดวันที่ 13 เมษายน 2569 (ตัวอย่าง)</option>
              <option value="10042569">งวดวันที่ 10 เมษายน 2569 (ตัวอย่าง)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-400">
              ▼
            </div>
          </div>
        </div>

        {/* Number inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {inputs.map((val, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"
                style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.4), #000)" }} />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={val}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                className="relative w-full px-4 py-4 md:py-5 rounded-xl text-white tracking-[0.3em] md:tracking-[0.4em] text-center text-xl md:text-2xl placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600 transition-all font-bold focus:outline-none"
                style={{
                  background: "linear-gradient(180deg, #111 0%, #0a0a0a 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 3px 6px rgba(0,0,0,0.8)",
                }}
                placeholder="กรอกเลข 4 ตัว"
                autoComplete="off"
                aria-label={`กรอกเลขหวยลาวใบที่ ${idx + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Submit — ✅ FIX: ใช้ inline style แทน ezgold-* class */}
        <button
          type="submit"
          className="mt-4 w-full sm:w-auto mx-auto px-12 py-4 md:py-5 text-white font-black text-lg md:text-2xl rounded-full hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
          style={{
            background: "linear-gradient(135deg, #6d28d9, #7c3aed, #6d28d9)",
            backgroundSize: "200% auto",
            border: "1px solid rgba(167,139,250,0.4)",
            boxShadow: "0 10px 20px rgba(124,58,237,0.4)",
            animation: "shimmer 4s linear infinite",
          }}
        >
          <Search className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
          ตรวจผลหวยลาว
        </button>
      </form>

      {/* Result Modal */}
      {modal.isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="max-w-md w-full text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #1a0a16 0%, #000 100%)",
              border: "1px solid rgba(139,92,246,0.4)",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 0 60px rgba(124,58,237,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-1.5"
              style={{ background: "linear-gradient(90deg, #7c3aed, #D4AF37)" }} />

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="ปิด"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <div className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center ${
              modal.isWin ? "shadow-[0_0_30px_rgba(74,222,128,0.5)]" : "shadow-[0_0_30px_rgba(239,68,68,0.4)]"
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

            <div className="mb-4 space-y-3 text-left"
              style={{ background: "rgba(0,0,0,0.5)", padding: "1.25rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              {modal.messages.map((msg, i) => (
                <p key={i} className={`p-3 rounded-xl text-sm md:text-base border font-medium ${
                  msg.includes("ถูก") ? "border-green-500/30 text-green-300" : "border-gray-800 text-gray-400"
                }`} style={{ background: msg.includes("ถูก") ? "rgba(34,197,94,0.1)" : "rgba(0,0,0,0.4)" }}>
                  {msg}
                </p>
              ))}
            </div>

            <p className="text-xs text-gray-600 mb-4">* ผลนี้เป็นข้อมูลสาธิต กรุณายืนยันจากแหล่งทางการก่อนเสมอ</p>

            <button
              type="button"
              onClick={closeModal}
              className="w-full py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-base"
              style={{ background: "linear-gradient(135deg, #6d28d9, #4c1d95)", border: "1px solid rgba(167,139,250,0.3)" }}
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </>
  );
}
