"use client";
import { useState } from "react";
import { Search, X, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

// ฐานข้อมูลหวยลาวจำลอง (อิงตามสถิติ)
const laoLottoData = {
  "17042569": { prize4: "5079", prize3: "079", top2: "79", bot2: "50" },
  "13042569": { prize4: "7568", prize3: "568", top2: "68", bot2: "75" },
  "10042569": { prize4: "0389", prize3: "389", top2: "89", bot2: "03" }
};

export default function LaoLottoChecker() {
  const [date, setDate] = useState("17042569");
  const [inputs, setInputs] = useState(["", "", ""]);
  const [modal, setModal] = useState({ isOpen: false, title: "", messages: [] as string[], isWin: false });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const data = laoLottoData[date as keyof typeof laoLottoData];
    if (!data) return;

    let isWin = false;
    let resultMessages: string[] = [];
    let hasInput = false;

    inputs.forEach((val, idx) => {
      const num = val.trim();
      if (!num) return;
      hasInput = true;

      let won = [];

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
      <form onSubmit={handleCheck} className="w-full max-w-3xl mx-auto flex flex-col gap-6 relative z-10 mt-6 bg-[#1a0a16]/80 p-6 md:p-8 rounded-3xl border border-purple-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md">
        
        <div className="flex items-center justify-center gap-2 mb-2 text-ezgold-400">
            <Sparkles className="w-5 h-5 animate-pulse text-purple-400" />
            <span className="font-prompt text-sm md:text-base font-bold tracking-wide"><strong>หวยลาว lotto อัพเดตผลหวยลาวพัฒนาล่าสุด</strong></span>
            <Sparkles className="w-5 h-5 animate-pulse text-purple-400" />
        </div>

        {/* แถวเลือกวันที่ แบบ 3D */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full bg-black/60 p-4 md:p-5 rounded-2xl border border-gray-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
          <label htmlFor="lao_issue_date" className="text-gray-300 font-bold whitespace-nowrap font-prompt tracking-wide">เลือกรอบ <strong className="text-purple-400">การตรวจหวย</strong>:</label>
          <div className="relative w-full">
              <select 
                id="lao_issue_date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-5 py-3.5 bg-[#0D0514] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-ezgold-300 font-prompt cursor-pointer text-center sm:text-left appearance-none shadow-[0_4px_10px_rgba(0,0,0,0.5)] font-bold text-base transition-all hover:border-gray-500"
              >
                <option value="17042569">งวดวันที่ 17 เมษายน 2569 (ล่าสุด)</option>
                <option value="13042569">งวดวันที่ 13 เมษายน 2569</option>
                <option value="10042569">งวดวันที่ 10 เมษายน 2569</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ezgold-500">
                ▼
              </div>
          </div>
        </div>

        {/* แถวกรอกเลข 3 ใบ (Glassmorphism & Inner Shadow) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {inputs.map((val, idx) => (
            <div key={idx} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-900/50 to-black rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <input 
                type="text" 
                maxLength={4} 
                value={val}
                onChange={(e) => {
                    const newInputs = [...inputs];
                    newInputs[idx] = e.target.value.replace(/\D/g, ''); 
                    setInputs(newInputs);
                }}
                className="relative w-full px-4 py-4 md:py-5 bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-700 rounded-xl focus:border-ezgold-500 focus:ring-2 focus:ring-ezgold-500/50 focus:outline-none text-white font-prompt tracking-[0.3em] md:tracking-[0.4em] text-center text-xl md:text-2xl placeholder:tracking-normal placeholder:text-sm placeholder:text-gray-600 transition-all shadow-[inset_0_3px_6px_rgba(0,0,0,0.8)] font-bold" 
                placeholder={`กรอกเลข 4 ตัว`} 
                autoComplete="off" 
                />
            </div>
          ))}
        </div>

        {/* ปุ่มกดตรวจ (3D Hover Effect) */}
        <button type="submit" className="mt-4 w-full sm:w-auto mx-auto px-12 py-4 md:py-5 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white font-black text-lg md:text-2xl rounded-full hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.6)] flex items-center justify-center gap-3 font-prompt border border-purple-400/50">
          <Search className="w-6 h-6 md:w-7 md:h-7 stroke-[3]" /> ตรวจผลหวยลาว
        </button>
      </form>

      {/* ป๊อปอัปแจ้งผล (Modern Modal 3D) */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-gradient-to-b from-[#1a0a16] to-black border border-purple-500/50 rounded-3xl p-8 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-in fade-in zoom-in duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-ezgold-500"></div>
            
            <button type="button" onClick={() => setModal({...modal, isOpen: false})} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors bg-black/50 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>
            
            <div className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] ${modal.isWin ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-[0_0_30px_rgba(74,222,128,0.5)]' : 'bg-gradient-to-br from-red-500 to-red-700 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)]'}`}>
              {modal.isWin ? <CheckCircle className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
            </div>
            
            <h3 className={`text-2xl md:text-3xl font-extrabold font-prompt mb-6 drop-shadow-md ${modal.isWin ? 'text-green-400' : 'text-red-400'}`}>{modal.title}</h3>
            
            <div className="text-white text-sm md:text-base font-prompt mb-8 space-y-3 text-left bg-black/60 p-5 rounded-2xl border border-gray-800 shadow-inner">
              {modal.messages.map((msg, i) => (
                <p key={i} className={`p-4 rounded-xl border ${msg.includes('ถูก') ? 'bg-green-900/30 text-green-300 border-green-500/40 font-bold shadow-[0_0_15px_rgba(74,222,128,0.1)]' : 'bg-black/50 text-gray-400 border-gray-800'}`}>
                  {msg}
                </p>
              ))}
            </div>
            
            <button type="button" onClick={() => setModal({...modal, isOpen: false})} className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg font-prompt shadow-[0_5px_15px_rgba(168,85,247,0.5)] border border-purple-500/50">
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </>
  );
}