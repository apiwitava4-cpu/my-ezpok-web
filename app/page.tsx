"use client";
import { useState, useEffect } from 'react';
import { 
  X, CheckCircle, MessageCircle, ArrowRight, Video, ScrollText, 
  Gavel, Info, Clock, Coins, Banknote, Gamepad2, AlertTriangle, 
  Keyboard, BarChart2, ExternalLink, ArrowUpRight, Gift, Trophy, 
  Star, Crown, User, Users, Home, UserPlus, Play, Wallet, PlayCircle, HelpCircle, ArrowDownRight, Menu, ArrowUp, Search
} from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [userIP, setUserIP] = useState('Unknown');

  // เพิ่ม State สำหรับจัดการแท็บโปรโมชั่น
  const [activePromoTab, setActivePromoTab] = useState('ALL');

  useEffect(() => {
    // กำหนดให้เลื่อนแบบ Smooth ทั้งหน้าเว็บ
    document.documentElement.style.scrollBehavior = 'smooth';

    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
          const data = await response.json();
          setUserIP(data.ip);
        }
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    fetchIP();

    const timer = setTimeout(() => setIsModalOpen(true), 1500);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto'; // คืนค่าตอนออก
    };
  }, []);

  const trackAction = (behavior: string, details: string) => {
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxSvyBTc7Bi6WXtMvVqDkPGXKksKVr0VG7WkRiGuyN8FnsBIiNDETPAptsaRwVq0BPA/exec';
    if (!WEB_APP_URL || WEB_APP_URL.includes('ใส่_URL')) return;
    
    const formData = new URLSearchParams();
    formData.append('sheetName', 'ezpok168'); 
    formData.append('action', 'Click'); 
    formData.append('behavior', behavior); 
    formData.append('details', details);
    formData.append('ip', userIP); 

    fetch(WEB_APP_URL, { method: 'POST', body: formData, mode: 'no-cors' })
      .catch(err => console.error('Tracking Error:', err));
  };

  const handleLinkClick = (behavior: string, url: string) => {
    trackAction(behavior, url);
  };

  const handleModalAccept = () => {
    setIsModalOpen(false);
    trackAction('กดโปรโมชั่น Modal', 'กดรับสิทธิ์ สมัครสมาชิกใหม่');
    window.open('https://ezpok168.com/', '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ฟังก์ชันปิดเมนูเมื่อกดเลือกลิงก์
  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0D0514] text-white font-sans pb-16 md:pb-0" id="home">
      {/* Background Effect */}
      <div id="bg-watermark"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-ezgold-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      </div>

      {/* --- Sidebar Menu Overlay --- */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[70] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* --- Sidebar Menu Drawer --- */}
      <div className={`fixed top-0 left-0 h-full w-[260px] md:w-[300px] bg-[#fdfdfd] text-[#333] z-[80] transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
           <span className="font-prompt font-bold text-lg text-black">เมนูหลัก</span>
           <button onClick={() => setIsSidebarOpen(false)} className="p-1 hover:bg-gray-200 rounded-md transition-colors"><X className="text-gray-600 w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* ลิงก์เมนูผูกกับ id ในหน้าเว็บ */}
          <ul className="flex flex-col text-[13px] md:text-sm font-prompt font-medium">
             <li className="border-b border-gray-100"><a href="#home" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">หน้าหลัก</a></li>
             <li className="border-b border-gray-100"><a href="#promotions" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">โปรโมชั่น</a></li>
             <li className="border-b border-gray-100"><a href="#info-rules" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">ฝาก-ถอน / กติกา</a></li>
             <li className="border-b border-gray-100"><a href="https://ezpok168.com/" target="_blank" rel="noreferrer" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors text-red-600 font-bold">ทางเข้าเล่นเกมส์</a></li>
             <li className="border-b border-gray-100"><a href="#live-video" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">ชมรีวิวไพ่ป๊อกเด้ง/หรือชมไลฟ์สด</a></li>
             <li className="border-b border-gray-100"><a href="#knowledge-seo" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">บทความ ความรู้</a></li>
             <li className="border-b border-gray-100"><a href="#" className="block p-4 hover:bg-gray-100 transition-colors text-blue-600">เข้ากลุ่ม Telegram</a></li>
             <li className="border-b border-gray-100"><a href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer" onClick={handleNavClick} className="block p-4 hover:bg-gray-100 transition-colors">ติดต่อเรา</a></li>
          </ul>
          <div className="p-5">
             <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-2.5 md:py-3 rounded-full border-2 border-gray-400 text-gray-700 font-bold hover:bg-gray-200 transition-colors">สมัครสมาชิก</a>
          </div>
        </div>
      </div>

      {/* Header (แถบเมนูหลัก + ปุ่ม Hamburger ลอยติดด้านบน) */}
      <header className="bg-ezdark/95 backdrop-blur-md sticky top-0 z-40 border-b border-ezgold-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <nav className="max-w-5xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="p-1.5 hover:bg-white/10 rounded-md transition-colors mr-1">
               <Menu className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <span className="font-prompt font-bold text-lg md:text-2xl tracking-tight"><span className="text-white">วง</span><span className="text-ezgold-400">ป๊อกเด้งไทย</span></span>
          </div>
          <a href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer" className="text-[11px] md:text-sm font-medium bg-ezgold-500/10 text-ezgold-400 border border-ezgold-500/50 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-ezgold-500 hover:text-black transition-all">
            <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> แอดมิน 24 ชม.
          </a>
        </nav>
      </header>

      {/* --- ส่วนค้นหาขนาดใหญ่ --- */}
      <div className="w-full bg-[#13071A] border-b border-gray-800 py-3 md:py-4 px-4 z-30 relative shadow-inner">
        <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-ezgold-500" />
            </div>
            <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2.5 md:py-3 border border-ezgold-500/40 rounded-full leading-5 bg-black/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ezgold-500/50 focus:border-ezgold-500 transition-all text-sm md:text-base font-prompt" 
                placeholder="ค้นหา: ป๊อกเด้งออนไลน์, บาคาร่า, เกมไพ่ยอดนิยม..." 
            />
            <button className="absolute inset-y-1 right-1 px-4 bg-ezgold-500 hover:bg-ezgold-400 text-black font-bold rounded-full text-xs md:text-sm transition-colors">
                ค้นหา
            </button>
        </div>
      </div>

      {/* --- ชุดปุ่มลอยขวาล่าง --- */}
      <div className="fixed bottom-24 md:bottom-10 right-2 md:right-4 z-50 flex flex-col items-end gap-3">
        <button
          onClick={scrollToTop}
          className={`p-2.5 md:p-3 bg-ezgold-500 hover:bg-ezgold-400 text-black rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          aria-label="เลื่อนขึ้นบนสุด"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="bg-[#0D0514]/95 backdrop-blur-sm border border-white/50 p-2 md:p-2.5 rounded shadow-[0_0_15px_rgba(0,0,0,0.8)] text-center transform transition-all hover:scale-105 w-[90px] md:w-[110px]">
          <p className="text-[10px] md:text-xs text-white font-bold mb-1.5 font-prompt tracking-wide">ติดต่อแอดมิน 24 ชม.</p>
          <a href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer" onClick={(e) => handleLinkClick('กดเพิ่มเพื่อนไลน์ (ขวาล่าง)', e.currentTarget.href)} className="block hover:opacity-90 transition-opacity bg-[#00B900] rounded p-1">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อนแอดมิน 24 ชม." className="w-full h-auto mx-auto" loading="lazy" />
          </a>
        </div>
      </div>

      {/* Modal Popup รับโปรโมชั่น */}
      <div className={`fixed inset-0 bg-black/85 flex items-center justify-center z-[60] transition-opacity duration-300 p-4 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsModalOpen(false)}>
        <div className="bg-gradient-to-b from-ezpurple-900 to-ezdark border-2 border-ezgold-500 p-4 rounded-2xl w-[95%] max-w-sm max-h-[85vh] overflow-y-auto text-center shadow-[0_0_40px_rgba(212,175,55,0.4)] relative scrollbar-hide" onClick={e => e.stopPropagation()}>
          <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 md:-top-3 md:-right-3 text-white bg-red-600 hover:bg-red-500 border-2 border-white rounded-full transition-colors p-1.5 z-10 shadow-lg" aria-label="Close">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h2 className="font-prompt font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-ezgold-500 mb-3 mt-2 md:mt-0">💦 โปรใหม่ ต้อนรับสมาชิก 💦</h2>
          <div className="w-full rounded-xl overflow-hidden mb-4 border border-ezgold-500/30 shadow-lg flex justify-center bg-black/50">
            <img src="/new-mumber.jpg" alt="โปรโมชั่นสมัครใหม่" className="w-full h-auto max-h-[40vh] object-contain" />
          </div>
          <button onClick={handleModalAccept} className="w-full py-2.5 md:py-3 bg-gradient-to-r from-ezgold-500 to-ezgold-400 text-black font-bold text-sm md:text-lg rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 pulse-gold">
            รับโปรโมชันนี้ <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 md:py-8 relative z-10">

        {/* 1. วงป๊อกเด้ง (Header โลโก้โล่งๆ) */}
        <section className="w-full relative z-30 flex flex-col items-center bg-black/40 rounded-2xl p-6 md:p-10 mb-8 border border-ezgold-500/20 shadow-lg">
            <img 
                src="/NEWLOGOBANNER.gif" 
                alt="วงป๊อกเด้งออนไลน์ 2 ใบเปิด สับไพ่เรียลไทม์ 24 ชม." 
                className="w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4" 
                onError={(e) => {
                e.currentTarget.style.display='none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full max-w-3xl h-[150px] flex items-center justify-center bg-gray-900 text-ezgold-400 border border-dashed border-ezgold-500/40 rounded-xl mb-4 text-sm p-4">ใส่ไฟล์ NEWLOGOBANNER.gif ในโฟลเดอร์ public</div>';
                }}
            />
            <p className="text-gray-300 text-sm md:text-lg font-prompt text-center max-w-2xl px-2 leading-relaxed">
                ศูนย์รวมป๊อกเด้งออนไลน์ 2 ใบเปิด <br className="md:hidden" />สับไพ่ไลฟ์สดเรียลไทม์ มั่นคง ปลอดภัย 100%
            </p>
        </section>

        {/* --- แถบตัวหนังสือเลื่อนผ่าน (Marquee) เป็นพื้นหลัง GIF --- */}
        <section className="mb-10 max-w-4xl mx-auto w-full">
            <div className="relative border border-ezgold-500/40 rounded-full p-1.5 md:p-2 flex items-center shadow-[0_0_15px_rgba(212,175,55,0.2)] overflow-hidden bg-[url('/marquee-bg.gif')] bg-cover bg-center">
                {/* Overlay สีดำจางๆ เพื่อให้อ่านออก */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="bg-ezgold-500 text-black font-bold text-[10px] md:text-sm px-3 md:px-4 py-1.5 rounded-full whitespace-nowrap z-10 flex items-center gap-1.5 shadow-md relative">
                    <AlertTriangle className="w-3.5 h-3.5 md:w-4 md:h-4" /> ประกาศ
                </div>
                
                <div className="flex-1 overflow-hidden ml-2 flex items-center relative z-10">
                    <marquee className="text-[11px] md:text-sm text-ezgold-300 font-medium tracking-wide mt-1" scrollamount="4">
                        <span className="mx-4">🔥 ID254_รูดเจ้า เจ้าป๊อกเก้าเด้ง ยินดีด้วยค่ะคุณชนะรอบวง</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">💰 ID224 ถอน 15,052 บาท</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">🃏 รอบที่ 25 เจ้าบอด ขาชนะทั้งกระดาน!</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">🎉 ยินดีต้อนรับสมาชิกใหม่ทุกท่าน ฝาก-ถอน ออโต้ 24 ชม.</span>
                    </marquee>
                </div>
            </div>
        </section>

        {/* --- Video Section (ย้ายมาแทนที่กล่องเกม 3 กล่อง) ขยับเป็น 800x800 --- */}
		<section className="mb-10 max-w-[800px] mx-auto w-full" id="live-video">
            <div className="bg-gradient-to-br from-[#2E0249] to-black rounded-2xl p-1 shadow-[0_0_25px_rgba(168,85,247,0.2)] border border-purple-500/30">
                <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 md:p-5">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Video className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
                            <h2 className="font-prompt font-bold text-lg md:text-xl text-white">ชมรีวิวไพ่ป๊อกเด้ง / ไลฟ์สด</h2>
                        </div>
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-[10px] md:text-xs font-bold rounded-full border border-red-500/40 flex items-center gap-1.5 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> LIVE
                        </span>
                    </div>
                    {/* วิดีโอขนาด 800x800 (1:1 จัตุรัส) */}
                    <div className="w-full aspect-square max-w-[800px] mx-auto bg-black rounded-lg border border-purple-500/20 overflow-hidden relative flex items-center justify-center">
                         <video className="w-full h-full object-cover" controls autoPlay loop muted playsInline>
                             <source src="/video.mp4" type="video/mp4" />
                              เบราว์เซอร์ของคุณไม่รองรับวิดีโอ
                         </video>
                     </div>
                </div>
            </div>
        </section>

        {/* --- Banner 1: POK9DENG บ้านหลัก (พื้นหลัง GIF) --- */}
        {/* ใส่ไฟล์ pok9-bg.gif ใน public folder */}
        <section className="mb-8 bg-[url('/pok9-bg.gif')] bg-cover bg-center rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] border border-ezgold-500/40 relative group">
            {/* Overlay เพื่อให้ตัวหนังสือชัดเจน */}
            <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ezgold-500 to-transparent opacity-50 z-10"></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <span className="px-4 py-1.5 bg-red-600 text-white font-bold text-xs md:text-sm rounded-full mb-5 shadow-lg animate-pulse">🔥 แนะนำบ้านหลัก 🔥</span>
                
                <h2 className="font-prompt font-extrabold text-4xl md:text-6xl text-white mb-3 drop-shadow-lg tracking-tight">
                    POK9<span className="text-ezgold-400">DENG</span>
                </h2>
                <p className="text-xl md:text-2xl text-ezgold-300 font-bold mb-5 drop-shadow-md">อันดับ 1 ในไทย เล่นง่าย จ่ายจริง 100%</p>
                
                <p className="text-sm md:text-base text-gray-200 mb-8 max-w-lg mx-auto font-medium bg-black/50 p-3.5 rounded-xl border border-gray-700/50 backdrop-blur-sm leading-relaxed">
                    สุดยอดเว็บป๊อกเด้งออนไลน์ สับไพ่สด 24 ชม. <br className="hidden md:block" /> ฝาก-ถอน ออโต้ ไม่มีขั้นต่ำ
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" onClick={(e) => handleLinkClick('Click POK9DENG เล่นเลย', e.currentTarget.href)} className="px-8 py-3.5 bg-gradient-to-r from-ezgold-500 to-ezgold-300 text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        เล่นเลย <PlayCircle className="w-5 h-5" />
                    </a>
                    <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" onClick={(e) => handleLinkClick('Click POK9DENG สมัครสมาชิก', e.currentTarget.href)} className="px-8 py-3.5 bg-black/60 backdrop-blur-sm border-2 border-ezgold-500 text-ezgold-400 font-bold text-lg rounded-xl hover:bg-ezgold-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                        สมัครสมาชิก <UserPlus className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>

        {/* --- Banner 2: EZPOK บ้านในเครือ (พื้นหลัง GIF) --- */}
        {/* ใส่ไฟล์ ezpok-bg.gif ใน public folder */}
        <section className="mb-10 bg-[url('/ezpok-bg.gif')] bg-cover bg-center rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-purple-500/40 relative group">
            {/* Overlay เพื่อให้ตัวหนังสือชัดเจน */}
            <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 z-10"></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <span className="px-4 py-1.5 bg-purple-600 text-white font-bold text-xs md:text-sm rounded-full mb-5 shadow-lg animate-pulse">💎 แนะนำบ้านในเครือ 💎</span>
                
                <h2 className="font-prompt font-extrabold text-4xl md:text-6xl text-white mb-3 drop-shadow-lg tracking-tight">
                    EZ<span className="text-purple-400">POK</span>
                </h2>
                <p className="text-xl md:text-2xl text-purple-300 font-bold mb-5 drop-shadow-md">ป๊อกเด้งออนไลน์ 2 ใบเปิด ระบบบอท 2026</p>
                
                <p className="text-sm md:text-base text-gray-200 mb-8 max-w-lg mx-auto font-medium bg-black/50 p-3.5 rounded-xl border border-gray-700/50 backdrop-blur-sm leading-relaxed">
                    มีทั้งหวยไทยหวยลาว <br className="hidden md:block" /> ครบจบที่เดียว
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" onClick={(e) => handleLinkClick('Click EZPOK เล่นเลย', e.currentTarget.href)} className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-purple-300 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        เล่นเลย <PlayCircle className="w-5 h-5" />
                    </a>
                    <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" onClick={(e) => handleLinkClick('Click EZPOK สมัครสมาชิก', e.currentTarget.href)} className="px-8 py-3.5 bg-black/60 backdrop-blur-sm border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-xl hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                        สมัครสมาชิก <UserPlus className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>

        {/* แบนเนอร์พันธมิตร 3 ช่อง (ขนาด 860x124) เรียงต่อกัน */}
        <section className="mb-12 w-full flex flex-col items-center justify-center gap-5">
          <a href="ใส่ลิ้งพันธมิตร_1_ตรงนี้" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group">
            <img 
              src="/affiliate-banner1.gif" 
              alt="แบนเนอร์พันธมิตร วงป๊อกเด้ง 1" 
              className="w-full h-auto aspect-[860/124] object-cover rounded-xl border border-gray-700 group-hover:border-ezgold-400 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.5)]" 
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full aspect-[860/124] flex items-center justify-center bg-gray-800/80 text-gray-400 border border-dashed border-gray-500 rounded-xl text-xs md:text-sm">พื้นที่แบนเนอร์พันธมิตร 1 (860 x 124 px)</div>'; }}
            />
          </a>
          <a href="ใส่ลิ้งพันธมิตร_2_ตรงนี้" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group">
            <img 
              src="/affiliate-banner2.gif" 
              alt="แบนเนอร์พันธมิตร หวยออนไลน์ 2" 
              className="w-full h-auto aspect-[860/124] object-cover rounded-xl border border-gray-700 group-hover:border-ezgold-400 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.5)]" 
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full aspect-[860/124] flex items-center justify-center bg-gray-800/80 text-gray-400 border border-dashed border-gray-500 rounded-xl text-xs md:text-sm">พื้นที่แบนเนอร์พันธมิตร 2 (860 x 124 px)</div>'; }}
            />
          </a>
          {/* ช่องที่ 3 เพิ่มใหม่ */}
          <a href="ใส่ลิ้งพันธมิตร_3_ตรงนี้" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group">
            <img 
              src="/affiliate-banner3.gif" 
              alt="แบนเนอร์พันธมิตร หวยออนไลน์ 3" 
              className="w-full h-auto aspect-[860/124] object-cover rounded-xl border border-gray-700 group-hover:border-ezgold-400 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.5)]" 
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full aspect-[860/124] flex items-center justify-center bg-gray-800/80 text-gray-400 border border-dashed border-gray-500 rounded-xl text-xs md:text-sm">พื้นที่แบนเนอร์พันธมิตร 3 (860 x 124 px)</div>'; }}
            />
          </a>
        </section>


        {/* --- โปรโมชั่น (Horizontal Scroll แถบเลื่อนซ้ายขวา) สัดส่วน 500x500 จัตุรัส --- */}
        <section className="mb-12" id="promotions">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-ezgold-400" />
                    <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">โปรโมชันพิเศษ (เลื่อนเพื่อดู)</h2>
                </div>
                {/* เมนูแท็บเพื่อกรองโปรโมชั่น (POK9, EZPOK, EZLOTTO) */}
                <div className="flex gap-2 text-xs md:text-sm">
                    <button onClick={() => setActivePromoTab('ALL')} className={`px-4 py-1.5 rounded-full font-bold transition-colors border ${activePromoTab === 'ALL' ? 'bg-ezgold-500 text-black border-ezgold-500' : 'bg-transparent text-gray-400 border-gray-700 hover:border-ezgold-400 hover:text-white'}`}>ทั้งหมด</button>
                    <button onClick={() => setActivePromoTab('POK9')} className={`px-4 py-1.5 rounded-full font-bold transition-colors border ${activePromoTab === 'POK9' ? 'bg-red-600 text-white border-red-600' : 'bg-transparent text-gray-400 border-gray-700 hover:border-red-500 hover:text-white'}`}>POK9</button>
                    <button onClick={() => setActivePromoTab('EZPOK')} className={`px-4 py-1.5 rounded-full font-bold transition-colors border ${activePromoTab === 'EZPOK' ? 'bg-purple-600 text-white border-purple-600' : 'bg-transparent text-gray-400 border-gray-700 hover:border-purple-500 hover:text-white'}`}>EZPOK</button>
                </div>
            </div>
            
            {/* กล่องเลื่อนซ้ายขวา (Carousel) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                
                {/* ตัวอย่างที่ 1: POK9 (จัตุรัส 500x500) */}
                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black border border-gray-700 hover:border-red-500 rounded-xl overflow-hidden group transition-all ${activePromoTab === 'ALL' || activePromoTab === 'POK9' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">POK9</span>
                        <img loading="lazy" src="/pok9-promo1.jpg" alt="โปรโมชั่น POK9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML += `<span class="text-gray-500 text-sm">รูปโปร POK9 (500x500)</span>`; }} />
                    </div>
                    <div className="p-3 text-center border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-red-400 font-prompt truncate">สมาชิกใหม่รับโบนัส 100%</p>
                    </div>
                </a>

                {/* ตัวอย่างที่ 2: EZPOK (จัตุรัส 500x500) */}
                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black border border-gray-700 hover:border-purple-500 rounded-xl overflow-hidden group transition-all ${activePromoTab === 'ALL' || activePromoTab === 'EZPOK' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">EZPOK</span>
                        <img loading="lazy" src="/por_ezlt.gif" alt="โปรโมชั่น EZPOK" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML += `<span class="text-gray-500 text-sm">รูปโปร EZPOK (500x500)</span>`; }} />
                    </div>
                    <div className="p-3 text-center border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-purple-400 font-prompt truncate">เล่นป๊อกเด้ง คืนยอดเสีย 5%</p>
                    </div>
                </a>

                {/* ตัวอย่างที่ 3: EZLOTTO (จัตุรัส 500x500) */}
                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black border border-gray-700 hover:border-ezgold-400 rounded-xl overflow-hidden group transition-all ${activePromoTab === 'ALL' || activePromoTab === 'EZLOTTO' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-ezgold-600 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">EZLOTTO</span>
                        <img loading="lazy" src="/ezlt_pro.jpg" alt="โปรโมชั่น EZLOTTO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML += `<span class="text-gray-500 text-sm">รูปโปร EZLOTTO (500x500)</span>`; }} />
                    </div>
                    <div className="p-3 text-center border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-ezgold-400 font-prompt truncate">หวยบาทละ 90 จ่ายเต็ม</p>
                    </div>
                </a>

                {/* ตัวอย่างที่ 4: VIP (รวม) */}
                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black border border-gray-700 hover:border-ezgold-400 rounded-xl overflow-hidden group transition-all ${activePromoTab === 'ALL' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">รวมทุกเครือ</span>
                        <img loading="lazy" src="/top-level-vip-320.webp" alt="โปรโมชั่น VIP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML += `<span class="text-gray-500 text-sm">รูปโปร VIP (500x500)</span>`; }} />
                    </div>
                    <div className="p-3 text-center border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-gray-300 font-prompt truncate">สะสมแต้ม VIP แลกของรางวัล</p>
                    </div>
                </a>
            </div>
        </section>

        {/* กติกาการเล่น & ฝาก-ถอน (เชื่อมกับเมนู Sidebar) */}
        <section className="mb-12 bg-black/40 p-4 md:p-6 rounded-2xl border border-ezgold-500/20 shadow-lg" id="info-rules">
            <div className="flex items-center gap-2 mb-4 md:mb-5 border-b border-gray-800 pb-2">
                <ScrollText className="text-ezgold-400 w-5 h-5 md:w-6 md:h-6" />
                <h2 className="font-prompt font-bold text-lg md:text-xl text-white">กติกา วงป๊อกเด้ง 2 ใบเปิด</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-5">
                <div className="bg-ezpurple-950/50 rounded-xl p-4 border border-ezgold-500/30">
                    <div className="flex items-center gap-1.5 text-ezgold-400 font-bold mb-3 text-sm md:text-base font-prompt">
                        <Gavel className="w-4 h-4 md:w-5 md:h-5" /> การอ่านแต้มไพ่ & อัตราจ่าย
                    </div>
                    <ul className="space-y-2 text-gray-300 text-[11px] md:text-[13px] leading-relaxed">
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>ป๊อกชนะทุกอย่าง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>1-9, 2-8, 3-7, 4-6 #บอดเด้ง(ดอกเดียวกัน) = 7.5แต้ม #เด้ง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>5-5, 6-6, 10-10, A-A, K-K, Q-Q, J-J = 7.5แต้ม #เด้ง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>10+ฝรั่ง 10-K,10-Q,10-J = 7.5แต้ม (ดอกเดียวกัน#เด้ง / คนละดอก#ไม่เด้ง)</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>A-K ดอกเดียวกัน =7.5 #เด้ง, A-K คนละดอก = 1 แต้ม</span></li>
					</ul>
                    <div className="mt-3 p-2.5 bg-red-900/20 border border-red-500/30 rounded text-[10px] md:text-xs text-red-200 flex gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-orange-400" /> 
                        <p>แต้มพิเศษ 7.5 หรือ 7.5 เด้ง จะชนะ 7 แต้ม แต่แพ้ป๊อก8 และป๊อก9 ในกติกา วงป๊อกเด้ง</p>
                    </div>
                </div>

                <div className="bg-black/60 rounded-xl p-4 border border-[#06C755]/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#06C755]/10 rounded-full blur-xl"></div>
                    <div className="flex items-center gap-1.5 text-[#06C755] font-bold mb-3 text-sm md:text-base font-prompt">
                        <Info className="w-4 h-4 md:w-5 md:h-5" /> เงื่อนไขและข้อมูลบริการ
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-[#06C755]/10 p-2 rounded border border-[#06C755]/30 text-center flex flex-col items-center justify-center">
                            <Clock className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">เวลาทำการ</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">แอดมินดูแล 24 ชม.</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded border border-[#06C755]/30 text-center flex flex-col items-center justify-center">
                            <Coins className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">ระบบการเล่น</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">ลงเล่นได้ทั้ง 2 ฝั่ง</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded border border-[#06C755]/30 text-center flex flex-col items-center justify-center">
                            <Banknote className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">ธุรกรรมการเงิน</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">ฝาก-ถอนไม่มีขั้นต่ำ</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded border border-[#06C755]/30 text-center flex flex-col items-center justify-center">
                            <Gamepad2 className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">ยอดเดิมพัน</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">10฿ ถึง 2,500฿</span>
                        </div>
                    </div>
                    <ul className="text-[10px] md:text-[11px] text-gray-400 space-y-1">
                        <li>* กรณีระบบขัดข้อง/สัญญาณหลุด ไฟดับ, คลอไลน์และ TIKTOK = โมฆะ ในกติกา วงป๊อกเด้ง</li>
                        <li>* ผู้เล่นต้องปฏิบัติตามกติกาและเงื่อนไขของระบบอย่างเคร่งครัด</li>
                    </ul>
                </div>
            </div>

            {/* วิธีพิมพ์ในกลุ่ม */}
            <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-sm md:text-lg mb-3 font-prompt">
                    <Keyboard className="w-4 h-4 md:w-5 md:h-5 text-ezgold-400" /> ตัวอย่างวิธีพิมพ์เล่น วงป๊อกเด้ง ในกลุ่ม
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gray-900/60 p-3.5 rounded-lg border border-green-500/30">
                        <p className="font-prompt text-green-400 font-bold text-xs md:text-sm mb-2">🟢 วิธีการเล่นขา (สายขา)</p>
                        <p className="text-[11px] md:text-xs text-gray-300 mb-2">&#x1F4B4; รูปแบบ: <span className="text-white font-mono bg-black px-1 rounded">ตัวเลข / จำนวนเงิน</span></p>
                        <ul className="space-y-1 text-[11px] md:text-xs text-gray-300 font-mono ml-4 list-disc marker:text-green-500">
                            <li><span className="text-white">1/10</span> (ขา1สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">2/10</span> (ขา2สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">3/10</span> (ขา3สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">รข/10</span> (รูดขา: แทงขาทั้งหมดสู้เจ้า ขาละ 10฿)</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/60 p-3.5 rounded-lg border border-red-500/30">
                        <p className="font-prompt text-red-400 font-bold text-xs md:text-sm mb-2">🔴 วิธีการเล่นเจ้า (สายเจ้า)</p>
                        <p className="text-[11px] md:text-xs text-gray-300 mb-2">&#x1F4B4; รูปแบบ: <span className="text-white font-mono bg-black px-1 rounded">จ ตัวเลข / จำนวนเงิน</span></p>
                        <ul className="space-y-1 text-[11px] md:text-xs text-gray-300 font-mono ml-4 list-disc marker:text-red-500">
                            <li><span className="text-white">จ1/10</span> (ขาเจ้าสู้ขา1 จำนวน 10฿)</li>
                            <li><span className="text-white">จ2/10</span> (ขาเจ้าสู้ขา2 จำนวน 10฿)</li>
                            <li><span className="text-white">จ3/10</span> (ขาเจ้าสู้ขา3 จำนวน 10฿)</li>
                            <li><span className="text-white">รจ/10</span> (รูดเจ้า: แทงเจ้าสู้ขาทั้งหมด ขาละ 10฿)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* กระดานผลรางวัลล่าสุด */}
        <div className="mb-12">
            <div className="flex items-center justify-between gap-2 mb-4 border-b border-gray-800 pb-2">
                <div className="flex items-center gap-1.5 md:gap-2">
                    <BarChart2 className="w-5 h-5 md:w-6 md:h-6 text-ezgold-400" />
                    <h2 className="font-prompt font-bold text-lg md:text-xl text-white">กระดานผลรางวัลล่าสุด</h2>
                </div>
                <a href="https://result.ez-huay.com/" target="_blank" rel="noreferrer" className="text-[10px] md:text-sm text-ezgold-400 hover:text-white flex items-center gap-1">
                    ดูทั้งหมด <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="result-card rounded-xl p-4 relative">
                    <h3 className="font-prompt font-bold text-sm md:text-base text-white flex items-center justify-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> ผลสลากกินแบ่งรัฐบาลไทย
                    </h3>
                    <div className="text-center mb-4">
                        <p className="text-[11px] md:text-sm text-gray-300">รางวัลที่ 1</p>
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-ezgold-500 tracking-[0.1em] my-1">833009</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 text-center">
                        <div className="bg-black/50 border border-ezgold-500/10 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขหน้า 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest leading-tight mt-1">510 <br/> 983</div>
                        </div>
                        <div className="bg-black/50 border border-ezgold-500/10 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest leading-tight mt-1">439 <br/> 954</div>
                        </div>
                        <div className="bg-[#190028] border border-ezgold-500/40 rounded-md p-2 flex flex-col justify-center">
                            <p className="text-[9px] text-ezgold-400 font-bold">เลขท้าย 2 ตัว</p>
                            <div className="text-xl md:text-2xl font-bold text-ezgold-400 tracking-widest mt-0.5">64</div>
                        </div>
                    </div>
                </div>

                <div className="result-card rounded-xl p-4 relative">
                    <h3 className="font-prompt font-bold text-sm md:text-base text-white flex items-center justify-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-ezgold-400 animate-pulse"></span> ตรวจหวยลาวพัฒนา
                    </h3>
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 text-center mb-3">
                        <div className="bg-black/50 border border-ezgold-500/10 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 4 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest mt-1">4329</div>
                        </div>
                        <div className="bg-black/50 border border-ezgold-500/10 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest mt-1">329</div>
                        </div>
                        <div className="bg-[#190028] border border-ezgold-500/40 rounded-md p-2">
                            <p className="text-[9px] text-ezgold-400 font-bold">เลขท้าย 2 ตัว</p>
                            <div className="text-lg md:text-xl font-bold text-ezgold-400 tracking-widest mt-0.5">29</div>
                        </div>
                    </div>
                    <div className="bg-black/40 border border-gray-800 rounded-md p-2 text-center">
                        <p className="text-[10px] text-gray-400 mb-1">หวยลาว (ชุด 5 ตัว)</p>
                        <div className="flex justify-center gap-2 text-base font-bold text-ezgold-400">
                            <span>42</span><span>40</span><span>26</span><span>14</span><span>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* TOP 100 LEVEL VIP */}
        <section className="mb-16 bg-gradient-to-br from-ezpurple-950 via-ezdark to-black p-5 md:p-6 rounded-2xl border border-ezgold-500/40 text-center relative mx-auto w-full">
            <h2 className="font-prompt font-bold text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ezgold-300 to-ezgold-600 mb-1 leading-tight">TOP 100 LEVEL VIP</h2>
            <p className="font-prompt text-[11px] md:text-sm font-medium text-gray-400 mb-5">ประจำเดือน มีนาคม 69 - วงป๊อกเด้ง & หวย</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center w-full">
                 <div className="flex justify-center items-center w-full">
                    <img loading="lazy" src="/top100.jpg" alt="ทำเนียบ TOP 100 VIP วงป๊อกเด้ง" className="w-full h-auto max-w-[280px] md:max-w-[350px] object-contain rounded-xl border border-ezgold-500/50 shadow-lg" onError={(e) => e.currentTarget.style.display='none'} />
                </div>

                <div className="text-left bg-black/60 p-4 md:p-5 rounded-xl border border-gray-700 w-full">
                    <h3 className="font-prompt text-sm font-bold text-ezgold-300 mb-3 flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-ezgold-400" /> ทำเนียบ TOP VIP 
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-ezgold-900/40 to-transparent p-2 rounded border border-ezgold-500/30">
                            <span className="font-black text-lg md:text-xl text-ezgold-400 w-5 md:w-6 text-center">1</span>
                            <Crown className="w-4 h-4 md:w-5 md:h-5 text-ezgold-400 shrink-0" />
                            <div className="overflow-hidden flex-1">
                                <p className="text-white font-bold text-[11px] md:text-xs truncate">Ah Ho0ng,,🍁🍁2468🧉🧉</p>
                                <p className="text-[9px] md:text-[10px] text-ezgold-300">Level 48 - ยอด 2.5M</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 bg-black/40 p-2 rounded border border-gray-800">
                            <span className="font-black text-sm text-gray-400 w-5 md:w-6 text-center">2</span>
                            <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 shrink-0" />
                            <div className="overflow-hidden flex-1">
                                <p className="text-white text-[11px] md:text-xs truncate">แนน’ซี่</p>
                                <p className="text-[9px] md:text-[10px] text-gray-500">Level 34 - ยอด 1.7M</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 bg-black/40 p-2 rounded border border-gray-800">
                            <span className="font-black text-sm text-gray-500 w-5 md:w-6 text-center">3</span>
                            <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500 shrink-0" />
                            <div className="overflow-hidden flex-1">
                               <p className="text-white text-[11px] md:text-xs truncate">💙</p>
                                <p className="text-[9px] md:text-[10px] text-gray-500">Level 74 - ยอด 1.3M</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* --- 4. ศูนย์รวมความรู้ SEO & AEO (Knowledge Center & FAQ) (เชื่อมกับเมนู Sidebar) --- */}
        <section className="mb-8 bg-gradient-to-b from-[#190028] to-black p-5 md:p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] mx-auto w-full relative overflow-hidden" id="knowledge-seo">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-6 border-b border-purple-500/30 pb-3 relative z-10">
            <ScrollText className="w-6 h-6 text-purple-400" />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">ศูนย์รวมความรู้ (Knowledge Center) & FAQ</h2>
          </div>

          <article className="prose prose-sm prose-invert max-w-none text-gray-300 leading-relaxed relative z-10">
            <p className="text-sm mb-6">
              ยินดีต้อนรับสู่ <strong>ศูนย์รวมความรู้ วงป๊อกเด้งไทย</strong> แหล่งรวบรวมเทคนิค วิธีเล่น และข้อมูลเชิงลึกสำหรับเกมไพ่ยอดนิยม ไม่ว่าจะเป็น <strong className="text-ezgold-400">ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong>, บาคาร่า หรือหวยออนไลน์ เรามีข้อมูลให้คุณศึกษาเพื่อเพิ่มโอกาสทำกำไรสูงสุด
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* บทความ SEO 1: เทคนิคป๊อกเด้ง */}
                <div className="bg-black/50 p-5 rounded-xl border border-gray-800 hover:border-ezgold-500/50 transition-colors">
                    <h3 className="font-prompt font-bold text-lg text-ezgold-400 mb-3 flex items-center gap-2">
                        <Trophy className="w-5 h-5" /> เทคนิคการเล่นป๊อกเด้งให้ได้กำไร
                    </h3>
                    <p className="text-[13px] text-gray-400 mb-3">การเล่นป๊อกเด้งให้ได้เงินจริง ไม่ใช่แค่พึ่งพาดวง แต่ต้องอาศัยเทคนิคการอ่านเค้าไพ่และการเดินเงิน:</p>
                    <ul className="list-disc list-inside text-[12px] space-y-1.5 text-gray-300 ml-1">
                        <li><strong>วิเคราะห์เจ้ามือ:</strong> สังเกตสถิติการออกไพ่ของเจ้ามือ หากเจ้ามือดวงกำลังขึ้น ให้ลดเบทลง</li>
                        <li><strong>การเดินเงินแบบทบ (Martingale):</strong> เมื่อเสียให้ทบเงินในตาถัดไป เพื่อเรียกทุนคืนพร้อมกำไร</li>
                        <li><strong>เล่นหลายขา (กระจายความเสี่ยง):</strong> ใน <strong>วงป๊อกเด้งไทย</strong> สามารถแทงได้หลายขาพร้อมกันเพื่อเพิ่มโอกาสชนะ</li>
                    </ul>
                </div>

                {/* บทความ SEO 2: คู่มือบาคาร่า */}
                <div className="bg-black/50 p-5 rounded-xl border border-gray-800 hover:border-ezgold-500/50 transition-colors">
                    <h3 className="font-prompt font-bold text-lg text-ezgold-400 mb-3 flex items-center gap-2">
                        <Gamepad2 className="w-5 h-5" /> คู่มือบาคาร่าเบื้องต้น สำหรับมือใหม่
                    </h3>
                    <p className="text-[13px] text-gray-400 mb-3">บาคาร่าคือ <strong>เกมไพ่ยอดนิยม</strong> ระดับโลก มีวิธีการเล่นคล้ายป๊อกเด้ง แต่เลือกแทงฝั่ง Player หรือ Banker:</p>
                    <ul className="list-disc list-inside text-[12px] space-y-1.5 text-gray-300 ml-1">
                        <li><strong>แทงฝั่ง Banker (เจ้ามือ):</strong> มีโอกาสชนะสูงกว่าเล็กน้อย แต่จะโดนหักคอมมิชชั่น 5%</li>
                        <li><strong>อ่านเค้าไพ่ (มังกร/ปิงปอง):</strong> สังเกตตารางสถิติ หากออกฝั่งเดิมซ้ำๆ (มังกร) ให้ตามไปเรื่อยๆ</li>
                        <li><strong>ตั้งเป้าหมายกำไร-ขาดทุน:</strong> สิ่งสำคัญที่สุดในการเล่นคาสิโนออนไลน์คือวินัยทางการเงิน</li>
                    </ul>
                </div>
            </div>

            {/* AEO FAQ Section */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <div className="flex items-center gap-2 mb-5">
                <HelpCircle className="w-5 h-5 text-ezgold-400" />
                <h3 className="font-prompt font-bold text-lg md:text-xl text-white">คำถามที่พบบ่อย (FAQ) - วงป๊อกเด้ง & บาคาร่า</h3>
              </div>
              
              <div className="space-y-3 text-[13px] text-gray-300">
                <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group" open>
                  <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex items-center justify-between">
                    <span>1. วงป๊อกเด้งไทย คืออะไร และเล่นอย่างไร?</span>
                    <ArrowDownRight className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
                    <strong>วงป๊อกเด้งไทย</strong> คือระบบการเล่นป๊อกเด้งออนไลน์รูปแบบใหม่ ที่ให้บริการผ่านกลุ่มไลน์ โดยมีแอดมินสับไพ่และไลฟ์สดแบบเรียลไทม์ ผู้เล่นสามารถเลือกแทงฝั่ง "เจ้ามือ" หรือ "ลูกมือ (ขา)" ได้อย่างอิสระ 
                  </p>
                </details>
                
                <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group">
                  <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex items-center justify-between">
                    <span>2. ป๊อกเด้งออนไลน์ 2 ใบเปิด ต่างกับ 3 ใบอย่างไร?</span>
                    <ArrowDownRight className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
                    ระบบ <strong>2 ใบเปิด</strong> จะวัดแต้มกันที่ไพ่สองใบแรกที่แจกให้เท่านั้น โดยไม่มีการจั่วไพ่ใบที่สามเพิ่ม การเล่นแบบนี้ทำให้เกมรวดเร็ว กระชับ และเน้นลุ้นป๊อก 8 ป๊อก 9 เป็นหลัก ซึ่งเป็นที่นิยมมากในปัจจุบัน
                  </p>
                </details>

                <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group">
                  <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex items-center justify-between">
                    <span>3. ป๊อกเด้ง กับ บาคาร่า เกมไพ่ไหนเล่นง่ายกว่ากัน?</span>
                    <ArrowDownRight className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
                    ทั้งสองเป็น <strong>เกมไพ่ยอดนิยม</strong> ที่มีการนับแต้มคล้ายกัน (สูงสุด 9 แต้ม) แต่ <strong>ป๊อกเด้ง</strong> จะมีความหลากหลายในการได้รางวัลมากกว่า (เช่น 2 เด้ง, ตอง, เซียน) ทำให้สนุกและลุ้นเงินคูณได้เยอะกว่า ส่วน <strong>บาคาร่า</strong> จะเน้นแทงฝั่ง Player หรือ Banker ทายผลว่าฝั่งไหนจะชนะ เหมาะกับคนที่ชอบเกมเร็วและอ่านเค้าไพ่
                  </p>
                </details>
                
                <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group">
                  <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex items-center justify-between">
                    <span>4. สมัครเล่น วงป๊อกเด้งไทย ปลอดภัยแค่ไหน? ฝาก-ถอน ขั่นต่ำเท่าไหร่?</span>
                    <ArrowDownRight className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
                    เราคือเว็บอันดับ 1 ในไทย ให้บริการด้วยความโปร่งใส 100% มีแอดมินสับไพ่สดๆ ให้ดูผ่านวิดีโอเรียลไทม์ <strong>ฝาก-ถอนระบบออโต้ ไม่มีขั้นต่ำ</strong> 1 บาทก็ฝากได้ พร้อมทีมงานบริการ 24 ชั่วโมง
                  </p>
                </details>
              </div>
            </div>
          </article>
        </section>

      </main>

      {/* เมนูติดขอบจอด้านล่าง (Mobile Footer Nav) */}
      <nav className="footer-nav md:hidden">
        <a href="#home" className="nav-item active" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <Home className="w-5 h-5" />หน้าแรก
        </a>
        <a href="https://ezpok168.com/" className="nav-item" target="_blank" rel="noreferrer">
            <UserPlus className="w-5 h-5" />สมัคร
        </a>
        <a href="https://ezpok168.com/" className="center-btn" target="_blank" rel="noreferrer">
            <Play className="w-6 h-6 text-black fill-current ml-0.5" />
        </a>
        <a href="https://lin.ee/QxlA2wI" className="nav-item" target="_blank" rel="noreferrer">
            <Wallet className="w-5 h-5" />ติดต่อ
        </a>
        <a href="https://lin.ee/QxlA2wI" className="nav-item" target="_blank" rel="noreferrer">
            <User className="w-5 h-5" />แอดมิน
        </a>
      </nav>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-[10px] md:text-xs border-t border-gray-800 pb-20 md:pb-6 leading-loose">
          <p className="font-prompt text-gray-400 font-bold mb-1">วงป๊อกเด้งไทย อันดับ 1</p>
          <p>&copy; 2026 วงป๊อกเด้งไทย. ศูนย์รวมเกมไพ่ ป๊อกเด้งออนไลน์ 2 ใบเปิด บาคาร่า สับไพ่สด 24 ชม. &amp; หวย EZLOTTO มั่นคง โปร่งใส 100%</p>
      </footer>
    </div>
  ); 
}