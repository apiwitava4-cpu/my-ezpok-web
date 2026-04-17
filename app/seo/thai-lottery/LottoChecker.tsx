"use client";
import { useState } from "react";
import { Search, X, CheckCircle, AlertTriangle } from "lucide-react";

// ฐานข้อมูลหวยจำลอง (อิงตามตารางสถิติ)
const lottoData = {
  "16042569": {
    prize1: "309612",
    front3: ["868", "424"],
    back3: ["355", "108"],
    back2: "77"
  },
  "01042569": {
    prize1: "292514",
    front3: ["406", "113"],
    back3: ["851", "098"],
    back2: "47"
  },
  "16032569": {
    prize1: "833009",
    front3: ["510", "983"],
    back3: ["439", "954"],
    back2: "64"
  }
};

export default function LottoChecker() {
  const [date, setDate] = useState("16042569");
  const [inputs, setInputs] = useState(["", "", ""]);
  const [modal, setModal] = useState({ isOpen: false, title: "", messages: [] as string[], isWin: false });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันการเด้งไปหน้าอื่น
    const data = lottoData[date as keyof typeof lottoData];
    if (!data) return;

    let isWin = false;
    let resultMessages: string[] = [];
    let hasInput = false;

    inputs.forEach((val, idx) => {
      const num = val.trim();
      if (!num) return;
      hasInput = true;

      let won = [];
      const top3 = data.prize1.slice(-3); // ดึง 3 ตัวท้ายของรางวัลที่ 1
      const top2 = data.prize1.slice(-2); // ดึง 2 ตัวท้ายของรางวัลที่ 1

      // เงื่อนไขเช็ครางวัล
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
      title: isWin ? "ยินดีด้วย! คุณถูกรางวัล" : "เสียใจด้วย คุณไม่ถูกรางวัล", 
      messages: resultMessages,
      isWin
    });
  };

  return (
    <>
      <form onSubmit={handleCheck} className="w-full max-w-2xl mx-auto flex flex-col gap-5 relative z-10 mt-6">
        {/* แถวเลือกวันที่ */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full bg-black/40 p-4 rounded-xl border border-gray-800">
          <label htmlFor="issue_date" className="text-ezgold-400 font-bold whitespace-nowrap font-prompt">เลือกงวดวันที่:</label>
          <select 
            id="issue_date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-lg focus:border-ezgold-500 focus:outline-none text-white font-prompt cursor-pointer text-center sm:text-left"
          >
            <option value="16042569">16 เมษายน 2569</option>
            <option value="01042569">1 เมษายน 2569</option>
            <option value="16032569">16 มีนาคม 2569</option>
          </select>
        </div>

        {/* แถวกรอกเลข 3 ใบ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          {inputs.map((val, idx) => (
            <input 
              key={idx}
              type="text" 
              maxLength={6} 
              value={val}
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[idx] = e.target.value.replace(/\D/g, ''); // บังคับกรอกได้แค่ตัวเลข
                setInputs(newInputs);
              }}
              className="w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:border-ezgold-500 focus:ring-1 focus:ring-ezgold-500 focus:outline-none text-white font-prompt tracking-widest text-center text-lg placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600 transition-all" 
              placeholder={`กรอกเลขสลาก ใบที่ ${idx + 1}`} 
              autoComplete="off" 
            />
          ))}
        </div>

        {/* ปุ่มกดตรวจ */}
        <button type="submit" className="mt-3 w-full sm:w-auto mx-auto px-10 py-4 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-extrabold text-lg md:text-xl rounded-xl hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 font-prompt">
          <Search className="w-6 h-6" /> ตรวจสลากฯ ของคุณ
        </button>
      </form>

      {/* ป๊อปอัปแจ้งผล (Modal) */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#111] border border-ezgold-500 rounded-2xl p-6 md:p-8 max-w-md w-full text-center relative shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-in fade-in zoom-in duration-300">
            <button type="button" onClick={() => setModal({...modal, isOpen: false})} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${modal.isWin ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
              {modal.isWin ? <CheckCircle className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
            </div>
            
            <h3 className={`text-2xl font-bold font-prompt mb-4 ${modal.isWin ? 'text-green-400' : 'text-red-400'}`}>{modal.title}</h3>
            
            <div className="text-white text-sm md:text-base font-prompt mb-8 space-y-3 text-left bg-black/50 p-4 rounded-xl border border-gray-800">
              {modal.messages.map((msg, i) => (
                <p key={i} className={`p-3 rounded-lg ${msg.includes('ถูก') ? 'bg-green-900/30 text-green-300 border border-green-500/30 font-bold' : 'bg-red-900/10 text-gray-400'}`}>
                  {msg}
                </p>
              ))}
            </div>
            
            <button type="button" onClick={() => setModal({...modal, isOpen: false})} className="w-full px-6 py-3 bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black font-bold rounded-xl hover:scale-105 transition-transform text-lg font-prompt">
              ตกลง
            </button>
          </div>
        </div>
      )}
    </>
  );
}