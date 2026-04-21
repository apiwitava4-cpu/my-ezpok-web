"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { 
  X, CheckCircle, MessageCircle, ArrowRight, Video, ScrollText, 
  Gavel, Info, Clock, Coins, Banknote, Gamepad2, AlertTriangle, 
  Keyboard, BarChart2, ExternalLink, Gift, Trophy, 
  Star, Crown, User, Users, Home, UserPlus, Play, Wallet, PlayCircle, HelpCircle, Menu, ArrowUp, Search, ShieldCheck
} from 'lucide-react';

// 🟢 ดึงระบบตรวจหวยทั้ง 2 ตัวเข้ามาใช้ในหน้าหลัก
import LottoChecker from './seo/thai-lottery/LottoChecker'; 
import LaoLottoChecker from './seo/lao-lottery/LaoLottoChecker'; 

const Marquee = 'marquee' as any;

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [userIP, setUserIP] = useState('Unknown');
  const [activePromoTab, setActivePromoTab] = useState('ALL');
  
  const [lottoTab, setLottoTab] = useState<'THAI' | 'LAO'>('THAI');

  useEffect(() => {
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
      document.documentElement.style.scrollBehavior = 'auto'; 
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

  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  // 🟢 AEO Schema เน้น High Value & Quick Win
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EZPOK168",
    "url": "https://ezpok168.net/",
    "description": "EZPOK168 แหล่งรวม บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์, ศูนย์รวมเทคนิค สอนเล่น ป๊อกเด้งออนไลน์ และ แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม 90 ฝาก-ถอนออโต้",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ezpok168.net/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "บาคาร่าเว็บตรง แตกต่างจากเว็บทั่วไปอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "บาคาร่าเว็บตรง อย่าง EZPOK168 มีความมั่นคงทางการเงินระดับโลก ถอนเงินหลักล้านได้จริง ไม่ผ่านคนกลาง ปลอดภัยจากการล็อคยูสเซอร์ 100%"
        }
      },
      {
        "@type": "Question",
        "name": "แทงหวยออนไลน์เว็บไหน จ่ายเต็ม ไม่มีเลขอั้น?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EZLOTTO รับแทงหวยออนไลน์ ทุกตัวเลข ไม่มีเลขอั้น ให้อัตราจ่ายสูงสุดถึงบาทละ 90 ทั้งหวยรัฐบาลไทยและหวยลาวพัฒนา"
        }
      },
      {
        "@type": "Question",
        "name": "มีวิธีสอนเล่น หรือ เทคนิคป๊อกเด้งออนไลน์ ไหม?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เรามีบทความ สอนเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด พร้อมแจก เทคนิคป๊อกเด้ง ระดับเซียน เพื่อช่วยให้คุณทำกำไรได้ง่ายขึ้น"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-white font-sans pb-16 md:pb-0" style={{ backgroundColor: '#0D0514' }} id="home">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'B2SIGN';
          src: url('/B2-SIGN.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}} />

      <div id="bg-watermark"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[120px] opacity-10" style={{ backgroundColor: '#D4AF37' }}></div>
      </div>

      {/* Sidebar & Nav */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`fixed top-0 left-0 h-full w-[280px] md:w-[320px] bg-gradient-to-b from-[#1a0a16] to-black border-r border-ezgold-500/30 text-white z-[80] transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-[10px_0_30px_rgba(0,0,0,0.8)]`}>
        <div className="flex justify-between items-center p-5 bg-black/40 shadow-md z-10 border-b border-gray-800">
           <span className="font-prompt font-extrabold text-xl text-ezgold-400 flex items-center gap-2 drop-shadow-md"><Menu className="w-6 h-6 text-white" /> เมนูหลัก</span>
           <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-800 rounded-full transition-colors"><X className="text-gray-400 hover:text-white w-6 h-6" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
           <a href="#home" onClick={handleNavClick} className="flex items-center gap-3 p-4 bg-gray-900/50 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-ezgold-500/50 shadow-sm font-bold transition-all no-underline text-gray-200 hover:text-white"><Home className="w-5 h-5 text-blue-400" /> หน้าหลัก</a>
           <a href="#promotions" onClick={handleNavClick} className="flex items-center gap-3 p-4 bg-gray-900/50 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-ezgold-500/50 shadow-sm font-bold transition-all no-underline text-gray-200 hover:text-white"><Gift className="w-5 h-5 text-pink-400" /> โปรโมชั่น</a>
           <a href="#knowledge-seo" onClick={handleNavClick} className="flex items-center gap-3 p-4 bg-gray-900/50 hover:bg-gray-800 rounded-2xl border border-gray-800 hover:border-ezgold-500/50 shadow-sm font-bold transition-all no-underline text-gray-200 hover:text-white"><HelpCircle className="w-5 h-5 text-yellow-400" /> สอนเล่น & เทคนิค</a>
           <a href="https://pok9deng-pokerthai.org/" target="_blank" rel="noreferrer" onClick={handleNavClick} className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.4)] text-white font-extrabold transition-all no-underline transform hover:scale-[1.02] border border-red-400 mt-2"><Gamepad2 className="w-6 h-6" /> ทางเข้าเล่นเกมส์</a>
           <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" onClick={handleNavClick} className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-[#00B900] to-[#009900] rounded-2xl shadow-[0_0_15px_rgba(0,185,0,0.4)] text-white font-extrabold transition-all no-underline transform hover:scale-[1.02] border border-[#00FF00]/50 mt-4"><MessageCircle className="w-6 h-6" /> ติดต่อแอดมิน</a>
        </div>
      </div>

      {/* 🟡 1. อัปเกรดปุ่มเมนูลอยซ้าย (สวยงาม มีมิติ) */}
      <button onClick={() => setIsSidebarOpen(true)} className="fixed top-[40%] left-0 z-[100] py-3.5 px-2 rounded-r-2xl shadow-[4px_4px_15px_rgba(0,0,0,0.6)] border border-l-0 border-ezgold-500/50 backdrop-blur-md flex flex-col items-center justify-center hover:pr-4 hover:shadow-[6px_6px_20px_rgba(212,175,55,0.4)] transition-all duration-300 group" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.9), rgba(13,5,20,0.95))' }}>
        <Menu className="w-6 h-6 mb-1 text-ezgold-300 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
        <span className="text-[12px] font-extrabold font-prompt text-ezgold-300 tracking-widest drop-shadow-md" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>เมนู</span>
      </button>

      {/* 🟡 2. อัปเกรดปุ่มแอดมินลอยขวา (ย้ายมาขอบจอขวา 100%) */}
      <div className="fixed top-[45%] right-0 z-[100] flex flex-col items-end hover:pr-2 transition-all duration-300 group">
        <div className="p-2 md:p-3 rounded-l-2xl shadow-[-4px_4px_20px_rgba(0,185,0,0.5)] text-center w-[90px] md:w-[110px] border border-r-0 border-[#00B900]/70 backdrop-blur-md bg-black/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#00B900]/20 group-hover:opacity-100 opacity-50 transition-opacity"></div>
          <p className="text-[10px] md:text-[12px] text-[#00FF00] font-black mb-1.5 font-prompt tracking-wide drop-shadow-[0_0_5px_rgba(0,255,0,0.8)] animate-pulse relative z-10">แอดมิน 24 ชม.</p>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="block hover:scale-105 transition-transform rounded-lg shadow-[0_0_10px_rgba(0,255,0,0.5)] overflow-hidden relative z-10">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อนแอดมิน 24 ชม." className="w-full h-auto mx-auto" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-24 md:bottom-10 left-4 z-40">
        <button onClick={scrollToTop} className={`p-3 md:p-4 text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform border-2 border-white/20 hover:scale-110 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`} style={{ background: 'linear-gradient(135deg, #FFDF00, #D4AF37)' }}>
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 font-bold" />
        </button>
      </div>

      <header className="sticky top-0 z-40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] border-b border-ezgold-500/20" style={{ backgroundColor: 'rgba(10, 3, 15, 0.95)', backdropFilter: 'blur(12px)' }}>
        <nav className="max-w-5xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 pl-8 md:pl-0">
            <span className="font-prompt font-black text-xl md:text-3xl tracking-tight drop-shadow-md"><span className="text-white">EZ</span><span style={{ color: '#D4AF37' }}>POK168</span></span>
          </div>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 transition-all no-underline hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#FDF5E6', border: '1px solid rgba(212, 175, 55, 0.6)' }}>
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-ezgold-400" /> แอดมิน 24 ชม.
          </a>
        </nav>
      </header>

      {/* Search Bar 3D */}
      <div className="w-full py-4 md:py-5 px-4 z-30 relative bg-gradient-to-b from-[#13071A] to-black border-b border-gray-800">
        <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-ezgold-400 group-focus-within:text-ezgold-300 transition-colors" />
            </div>
            <input 
                type="text" 
                className="block w-full pl-12 pr-24 py-3 md:py-4 rounded-full leading-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ezgold-500/50 transition-all text-sm md:text-base font-prompt shadow-[inset_0_3px_8px_rgba(0,0,0,0.8)] bg-gray-900 border border-gray-700 hover:border-gray-500" 
                placeholder="ค้นหา: บาคาร่าเว็บตรง, แทงหวยออนไลน์, สอนเล่นป๊อกเด้ง..." 
            />
            <button className="absolute inset-y-1.5 right-1.5 px-5 md:px-6 text-black font-black rounded-full text-xs md:text-sm transition-all hover:scale-105 shadow-md bg-gradient-to-r from-ezgold-500 to-yellow-300">
                ค้นหา
            </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[60] transition-opacity duration-300 p-4 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsModalOpen(false)}>
        <div className="p-6 md:p-8 rounded-3xl w-[95%] max-w-sm max-h-[85vh] overflow-y-auto text-center shadow-[0_0_50px_rgba(212,175,55,0.4)] relative scrollbar-hide border border-ezgold-500/40" style={{ background: 'linear-gradient(135deg, #2E0249, #0D0514)' }} onClick={e => e.stopPropagation()}>
          <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white bg-red-600/80 hover:bg-red-500 rounded-full transition-colors p-2 z-10 shadow-lg backdrop-blur-md"><X className="w-5 h-5" /></button>
          <h2 className="font-prompt font-extrabold text-xl md:text-2xl text-transparent bg-clip-text mb-4 mt-2" style={{ backgroundImage: 'linear-gradient(to right, #FDF5E6, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>💦 โปรใหม่ ต้อนรับสมาชิก 💦</h2>
          <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex justify-center border border-gray-700">
            <img src="/new-mumber.jpg" alt="โปรโมชั่น บาคาร่าเว็บตรง แทงหวย" loading="lazy" className="w-full h-auto max-h-[40vh] object-contain" />
          </div>
          <button onClick={handleModalAccept} className="w-full py-3.5 md:py-4 text-black font-black text-base md:text-lg rounded-xl shadow-[0_5px_15px_rgba(212,175,55,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2 pulse-gold border border-yellow-200" style={{ background: 'linear-gradient(to right, #FFDF00, #D4AF37)' }}>
            รับโปรโมชันนี้ <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-10 relative z-10 overflow-x-hidden">

        {/* 🟢 Hero Section: เน้นคีย์เวิร์ด */}
        <section className="w-full relative z-30 flex flex-col items-center bg-transparent pt-4 pb-8 mb-6">
            <img 
                src="/NEWLOGOBANNER.gif" 
                alt="บาคาร่าเว็บตรง สอนเล่นป๊อกเด้ง แทงหวยออนไลน์ ไม่มีเลขอั้น" 
                className="w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] mb-6 hover:scale-[1.02] transition-transform duration-500" 
            />
            <h1 className="text-gray-300 text-base md:text-xl font-prompt text-center max-w-4xl px-2 leading-loose drop-shadow-md">
                <strong>บาคาร่าเว็บตรง</strong> ไม่ผ่านเอเย่นต์ มั่นคง ปลอดภัย 100% <span className="text-ezgold-400 font-bold hidden sm:inline">|</span><br className="sm:hidden" />
                ศูนย์รวม <strong>เทคนิค ป๊อกเด้งออนไลน์</strong> และ <strong>แทงหวยออนไลน์</strong> <span className="text-red-400 font-extrabold underline decoration-red-500/50 underline-offset-4">ไม่มีเลขอั้น จ่ายเต็ม 90</span>
            </h1>
        </section>

        {/* Marquee 3D */}
        <section className="mb-12 max-w-4xl mx-auto w-full">
            <div className="relative rounded-full p-2 flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-800">
                <div className="text-black font-black text-[11px] md:text-sm px-4 py-2 rounded-full whitespace-nowrap z-10 flex items-center gap-2 shadow-md relative bg-gradient-to-r from-ezgold-500 to-yellow-300">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" /> ประกาศ
                </div>
                <div className="flex-1 overflow-hidden ml-3 flex items-center relative z-10">
                    <Marquee className="text-xs md:text-base font-medium tracking-wide" scrollamount="5" style={{ color: '#FDF5E6' }}>
                        <span className="mx-6">🔥 BACCARAT VIP <strong>บาคาร่าเว็บตรง</strong> ถอนไม่อั้น ไม่ล็อคยูส!</span><span className="text-ezgold-500 mx-4">|</span>
                        <span className="mx-6">🔥 <strong>สอนเล่น ป๊อกเด้งออนไลน์</strong> ทำกำไรด้วยสูตรเซียน ฟรี!</span><span className="text-ezgold-500 mx-4">|</span>
                        <span className="mx-6">💰 <strong>แทงหวยออนไลน์</strong> วันนี้ <strong>ไม่มีเลขอั้น จ่ายเต็ม 90</strong> แทงเลย!</span>
                    </Marquee>
                </div>
            </div>
        </section>

		<section className="mb-12 max-w-[850px] mx-auto w-full" id="live-video">
            <div className="rounded-3xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group" style={{ background: 'linear-gradient(to bottom right, #4A00E0, #8E2DE2, #000000)' }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/10 relative z-10">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                                <Video className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h2 className="font-prompt font-extrabold text-lg md:text-2xl text-white tracking-wide drop-shadow-md">ชมรีวิว <strong className="text-purple-300">บาคาร่าเว็บตรง / ป๊อกเด้ง</strong></h2>
                        </div>
                        <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] md:text-xs font-black rounded-full flex items-center gap-2 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                            <span className="w-2.5 h-2.5 rounded-full bg-white"></span> LIVE
                        </span>
                    </div>
                    <div className="w-full aspect-square max-w-[800px] mx-auto bg-[#0a0a0a] rounded-xl overflow-hidden relative flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,1)] border border-gray-800">
                         <video className="w-full h-full object-cover" controls preload="none" poster="/pok9-promo1.jpg" playsInline>
                             <source src="/video.mp4" type="video/mp4" />
                              เบราว์เซอร์ของคุณไม่รองรับวิดีโอ
                         </video>
                     </div>
                </div>
            </div>
        </section>

        {/* แนะนำบ้านหลัก POK9DENG */}
        <section className="mb-12 bg-cover bg-center rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.25)] relative group border border-ezgold-500/30" style={{ backgroundImage: `url('/pok9-bg.gif')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-0"></div>
            
            <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
                <span className="px-5 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white font-extrabold text-xs md:text-sm rounded-full mb-6 shadow-[0_5px_15px_rgba(220,38,38,0.5)] border border-red-400">🔥 แนะนำบ้านหลัก 🔥</span>
                
                <h2 className="font-prompt font-black text-5xl md:text-7xl text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] tracking-tight">
                    POK9<span className="text-transparent bg-clip-text bg-gradient-to-r from-ezgold-400 to-yellow-200">DENG</span>
                </h2>
                <p className="text-xl md:text-3xl font-extrabold mb-6 text-ezgold-300 drop-shadow-lg">อันดับ 1 ในไทย เล่นง่าย จ่ายจริง 100%</p>
                
                <p className="text-sm md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-medium bg-black/60 p-5 rounded-2xl backdrop-blur-md leading-relaxed border border-gray-700 shadow-inner">
                    สุดยอด <strong>บาคาร่าเว็บตรง</strong> และ <strong>ป๊อกเด้งออนไลน์</strong> สับไพ่สด 24 ชม. <br className="hidden md:block" /> ฝาก-ถอน ออโต้ ไม่มีขั้นต่ำ
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
                    <a href="https://pok9deng-pokerthai.org/" target="_blank" rel="noreferrer" className="px-10 py-4 text-black font-black text-lg md:text-xl rounded-full shadow-[0_10px_25px_rgba(212,175,55,0.5)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(212,175,55,0.7)] transition-all flex items-center justify-center gap-3 no-underline border border-yellow-200" style={{ background: 'linear-gradient(to right, #FFDF00, #D4AF37)' }}>
                        สมัครสมาชิก <PlayCircle className="w-6 h-6 fill-black text-ezgold-400" />
                    </a>
                    <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="px-10 py-4 bg-gray-900/80 backdrop-blur-md font-bold text-lg md:text-xl rounded-full transition-all flex items-center justify-center gap-3 no-underline hover:bg-gray-800 hover:scale-105 border border-ezgold-500/50 shadow-lg text-ezgold-400">
                        ติดต่อแอดมิน <UserPlus className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>

        {/* 🟢 ส่วนเปลี่ยน Conversion: แทงหวยออนไลน์ (3D Glassmorphism) */}
        <section className="mb-14 bg-gradient-to-b from-[#2a0808] to-black p-8 md:p-12 rounded-[2.5rem] border border-red-500/40 shadow-[0_20px_60px_rgba(220,38,38,0.2)] text-center relative overflow-hidden flex flex-col items-center mt-12">
            <div className="absolute top-[-30%] left-[-20%] w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 bg-red-600 pointer-events-none"></div>
            
            <span className="px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white font-extrabold text-sm md:text-base rounded-full mb-5 shadow-[0_0_20px_rgba(220,38,38,0.6)] animate-pulse border border-red-300">
                🔥 <strong>แทงหวยออนไลน์ ไม่มีเลขอั้น</strong> 🔥
            </span>
            <h2 
              className="text-4xl md:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] relative z-10 mb-4 drop-shadow-xl"
              style={{ fontFamily: "'B2SIGN', 'Charm', cursive" }}
            >
              แทงหวยออนไลน์ & ตรวจรางวัล
            </h2>
            <p className="text-gray-300 text-base md:text-xl font-medium mb-8 relative z-10 bg-black/40 px-6 py-2 rounded-full border border-gray-800 backdrop-blur-sm shadow-inner">
              <strong className="text-red-400">ไม่มีเลขอั้น</strong> รับทุกตัวเลข จ่ายเต็มสูงสุด <strong className="text-ezgold-400 text-xl ml-1">บาทละ 90</strong>
            </p>

            <div className="flex justify-center gap-3 md:gap-5 mb-4 relative z-10 w-full max-w-lg bg-black/50 p-2 rounded-2xl border border-gray-800">
                <button onClick={() => setLottoTab('THAI')} className={`flex-1 py-3.5 rounded-xl font-extrabold text-sm md:text-lg transition-all ${lottoTab === 'THAI' ? 'bg-gradient-to-r from-ezgold-600 to-yellow-400 text-black shadow-[0_5px_15px_rgba(212,175,55,0.5)] scale-105' : 'bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white'}`}>หวยรัฐบาลไทย</button>
                <button onClick={() => setLottoTab('LAO')} className={`flex-1 py-3.5 rounded-xl font-extrabold text-sm md:text-lg transition-all ${lottoTab === 'LAO' ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-[0_5px_15px_rgba(168,85,247,0.5)] scale-105' : 'bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white'}`}>หวยลาวพัฒนา</button>
            </div>

            <div className="w-full mt-2 animate-in fade-in zoom-in duration-500 relative z-10">
                {lottoTab === 'THAI' ? <LottoChecker /> : <LaoLottoChecker />}
            </div>
            
            <Link href="https://ezpok168.com/" target="_blank" className="mt-10 px-12 py-5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white font-black text-xl md:text-2xl rounded-full shadow-[0_15px_30px_rgba(220,38,38,0.5)] hover:scale-105 transition-transform no-underline border border-red-300 flex items-center gap-3 group relative z-10">
                🔥 ซื้อหวยออนไลน์ คลิกที่นี่! <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
        </section>

        {/* Affiliate Banners */}
        <section className="mb-14 w-full flex flex-col items-center justify-center gap-6">
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline hover:scale-[1.01] transition-transform">
            <img src="/affiliate-banner1.gif" alt="แทงหวยออนไลน์ ไม่มีเลขอั้น" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] border border-gray-700" />
          </a>
          <a href="https://ezpok.com/" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline hover:scale-[1.01] transition-transform">
            <img src="/affiliate-banner2.gif" alt="บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] border border-gray-700" />
          </a>
          <a href="https://ezpok.com/" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline hover:scale-[1.01] transition-transform">
            <img src="/affiliate-banner3.gif" alt="สอนเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] border border-gray-700" />
          </a>
        </section>

        <section className="mb-14" id="promotions">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <Gift className="w-7 h-7 text-ezgold-400 drop-shadow-md" />
                    <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white tracking-wide">โปรโมชันพิเศษ <span className="text-sm font-medium text-gray-400 ml-2">(เลื่อนเพื่อดู)</span></h2>
                </div>
                <div className="flex gap-2 text-xs md:text-sm bg-black/50 p-1.5 rounded-full border border-gray-800">
                    <button onClick={() => setActivePromoTab('ALL')} className={`px-5 py-2 rounded-full font-bold transition-all ${activePromoTab === 'ALL' ? 'bg-gradient-to-r from-ezgold-500 to-yellow-300 text-black shadow-md' : 'text-gray-400 hover:text-white'}`}>ทั้งหมด</button>
                    <button onClick={() => setActivePromoTab('POK9')} className={`px-5 py-2 rounded-full font-bold transition-all ${activePromoTab === 'POK9' ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>POK9</button>
                    <button onClick={() => setActivePromoTab('EZPOK')} className={`px-5 py-2 rounded-full font-bold transition-all ${activePromoTab === 'EZPOK' ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EZPOK</button>
                    <button onClick={() => setActivePromoTab('EZLOTTO')} className={`px-5 py-2 rounded-full font-bold transition-all ${activePromoTab === 'EZLOTTO' ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EZLOTTO</button>
                </div>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                <a className={`snap-center shrink-0 w-[280px] md:w-[340px] bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden group transition-all no-underline border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:border-red-500/50 ${activePromoTab === 'ALL' || activePromoTab === 'POK9' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow-lg border border-red-400/50">POK9</span>
                        <img loading="lazy" src="/pok9-promo1.jpg" alt="โปรโมชั่น POK9" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5 text-center">
                        <p className="text-base font-extrabold text-red-400 font-prompt truncate">สมาชิกใหม่รับโบนัส 100%</p>
                    </div>
                </a>

                <a className={`snap-center shrink-0 w-[280px] md:w-[340px] bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden group transition-all no-underline border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.3)] hover:border-purple-500/50 ${activePromoTab === 'ALL' || activePromoTab === 'EZPOK' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-3 left-3 z-10 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow-lg border border-purple-400/50">EZPOK</span>
                        <img loading="lazy" src="/por_ezlt.png" alt="โปรโมชั่น บาคาร่าเว็บตรง EZPOK" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5 text-center">
                        <p className="text-base font-extrabold text-purple-400 font-prompt truncate">เล่นบาคาร่า/ป๊อกเด้ง คืนยอดเสีย 5%</p>
                    </div>
                </a>

                <a className={`snap-center shrink-0 w-[280px] md:w-[340px] bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden group transition-all no-underline border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:border-yellow-500/50 ${activePromoTab === 'ALL' || activePromoTab === 'EZLOTTO' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-3 left-3 z-10 bg-yellow-600 text-black text-xs font-black px-3 py-1 rounded-lg shadow-lg border border-yellow-300">EZLOTTO</span>
                        <img loading="lazy" src="/ezlt_pro.jpg" alt="โปรโมชั่น แทงหวยออนไลน์ ไม่มีเลขอั้น" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5 text-center">
                        <p className="text-base font-extrabold font-prompt truncate text-ezgold-400">แทงหวยออนไลน์ บาทละ 90</p>
                    </div>
                </a>
            </div>
        </section>

        {/* 🟢 1. บทความขนาดยาว (Long-form Content SEO) แบบ 3D Card */}
        <article className="mb-14 bg-black/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md leading-loose w-full flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-ezgold-900/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-prompt font-extrabold mb-8 pb-5 border-b border-gray-700 w-full text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] leading-snug relative z-10">
                ทำไมต้องเลือก EZPOK168? ศูนย์รวม บาคาร่าเว็บตรง ป๊อกเด้ง และ แทงหวยออนไลน์ ที่ดีที่สุดแห่งปี 2026
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 relative z-10 font-medium">
                ยินดีต้อนรับสู่ <strong>EZPOK168</strong> อาณาจักรคาสิโนออนไลน์ที่ครบวงจรที่สุดในไทย เราคือ <strong>บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์</strong> ที่ได้รับการยอมรับเรื่องความมั่นคง ฝาก-ถอนออโต้ไวที่สุด ไม่ว่าคุณจะชอบ <strong>แทงหวยออนไลน์ ไม่มีเลขอั้น</strong> หรือต้องการศึกษา <strong>สอนเล่น ป๊อกเด้งออนไลน์</strong> ทุกความต้องการรวมจบในที่เดียว
            </p>

            <h3 className="text-xl md:text-2xl font-prompt font-extrabold mt-8 mb-4 flex items-center justify-center md:justify-start gap-3 w-full text-white relative z-10">
                <ShieldCheck className="w-8 h-8 text-ezgold-400 shrink-0 drop-shadow-md" /> บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์ (VIP Baccarat)
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-8 relative z-10 leading-relaxed pl-0 md:pl-11">
                สำหรับผู้เล่นระดับ VIP สิ่งที่สำคัญที่สุดคือ "ความชัวร์" การเล่น <strong>บาคาร่าเว็บตรง</strong> กับเรารับประกันไม่โดนล็อคยูส ถอนหลักล้านได้จริง พร้อมห้องสตรีมมิ่ง 4K ให้คุณงัด <strong>เทคนิคบาคาร่า</strong> มาทำกำไรได้อย่างมั่นใจ
            </p>

            <h3 className="text-xl md:text-2xl font-prompt font-extrabold mt-8 mb-4 flex items-center justify-center md:justify-start gap-3 w-full text-white relative z-10">
                <Gamepad2 className="w-8 h-8 text-purple-400 shrink-0 drop-shadow-md" /> สอนเล่น ป๊อกเด้งออนไลน์ พร้อมเทคนิคทำกำไร
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-5 relative z-10 leading-relaxed pl-0 md:pl-11">
                <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> คือเกมไพ่ที่ทำกำไรไวที่สุด เน้นลุ้น <strong>ป๊อก 8 ป๊อก 9</strong> หากคุณเป็นมือใหม่ เรามีคลาส <strong>สอนเล่นป๊อกเด้ง</strong> พร้อม <strong>เทคนิคป๊อกเด้ง</strong> ฉบับเซียน:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-8 text-sm md:text-base text-gray-300 w-full mx-auto md:mx-0 px-4 md:pl-11 relative z-10">
                <li><strong className="text-white">เทคนิคกระจายความเสี่ยง:</strong> ลงเดิมพัน 2-3 ขา เพื่อดึงทุนคืนหากขาหลักบอด</li>
                <li><strong className="text-white">สูตรเดินเงินทบ:</strong> ตาแรกเสีย 100 ตาถัดไปทบเป็น 200 ชนะได้ทุน+กำไรคืน</li>
                <li><strong className="text-white">อ่านสถิติเจ้ามือ:</strong> หากเจ้ามือป๊อกติดกัน 3 ตา ตาถัดไปมักจะแต้มต่ำ ให้อัดเดิมพันได้เลย</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-prompt font-extrabold mt-8 mb-4 flex items-center justify-center md:justify-start gap-3 w-full text-white relative z-10">
                <Banknote className="w-8 h-8 text-red-400 shrink-0 drop-shadow-md" /> แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม 90
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-8 relative z-10 leading-relaxed pl-0 md:pl-11">
                บอกลาการโดนอั้นเลข! ที่ <strong>EZLOTTO</strong> เราเปิดรับ <strong>แทงหวยออนไลน์ ไม่มีเลขอั้น</strong> ทั้งหวยไทยและหวยลาว ให้อัตราคุ้มค่าที่สุดคือ <strong>จ่ายเต็มบาทละ 90</strong> สำหรับเลข 2 ตัว พร้อมระบบตรวจหวยที่แม่นยำ
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/30 rounded-2xl flex items-start gap-4 w-full text-left shadow-[inset_0_2px_15px_rgba(59,130,246,0.2)] relative z-10">
                <Info className="w-7 h-7 text-blue-400 shrink-0 mt-1" />
                <p className="text-sm md:text-base text-blue-200 leading-relaxed font-medium">
                    <strong>คำแนะนำจากทีมงาน:</strong> การเล่นคาสิโนหรือ <strong>แทงหวยออนไลน์</strong> ควรมีการวางแผนการเงิน (Bankroll) ที่ชัดเจน <strong>EZPOK168</strong> พร้อมบริการดูแลคุณ 24 ชม. หากมีข้อสงสัยเกี่ยวกับ <strong>บาคาร่าเว็บตรง</strong> หรือ <strong>เทคนิคป๊อกเด้ง</strong> ทักแอดมินได้ทันที
                </p>
            </div>
        </article>

        {/* 🟢 2. ศูนย์รวมความรู้ SEO Cards (ปุ่ม CTA มีมิติ) */}
        <section className="mb-14 p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(168,85,247,0.2)] mx-auto w-full relative overflow-hidden border border-gray-800" style={{ background: 'linear-gradient(to bottom, #1a0525, #000000)' }} id="knowledge-seo">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)' }}></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}></div>
          
          <div className="flex items-center justify-between mb-10 pb-5 relative z-10 border-b border-purple-500/40">
            <div className="flex items-center gap-4">
                <ScrollText className="w-8 h-8 md:w-10 md:h-10 text-purple-400 drop-shadow-md" />
                <h2 className="font-prompt font-extrabold text-2xl md:text-4xl text-white tracking-wide">คู่มือสอนเล่น คาสิโน & หวย</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Card 1: ป๊อกเด้ง / บาคาร่า */}
              <div className="bg-black/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] transition-all duration-300 group flex flex-col border border-gray-700 hover:border-ezgold-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2">
                  <h3 className="font-prompt font-extrabold text-2xl md:text-3xl mb-5 flex items-center gap-3" style={{ color: '#D4AF37' }}>
                      <Trophy className="w-8 h-8 drop-shadow-md" /> ป๊อกเด้ง & บาคาร่าเว็บตรง
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-8 flex-1 leading-relaxed font-medium">
                      รวม <strong>เทคนิคป๊อกเด้ง</strong> 2 ใบเปิด สูตรทำเงินให้ได้กำไร 100% พร้อมวิธีอ่านเค้าไพ่ <strong>บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์</strong> ฉบับเซียนคาสิโน
                  </p>
                  
                  <a href="/seo/pokdeng" className="mt-auto inline-flex items-center justify-center gap-3 font-black text-base text-black px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.7)] hover:scale-105 transition-all no-underline w-full sm:w-auto self-start border border-yellow-200" style={{ background: 'linear-gradient(135deg, #FFDF00, #D4AF37)' }}>
                      อ่านบทความสอนเล่น <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </a>
              </div>

              {/* Card 2: หวยออนไลน์ */}
              <div className="bg-black/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] transition-all duration-300 group flex flex-col border border-gray-700 hover:border-red-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.2)] hover:-translate-y-2">
                  <h3 className="font-prompt font-extrabold text-2xl md:text-3xl text-red-400 mb-5 flex items-center gap-3 drop-shadow-md">
                      <Gamepad2 className="w-8 h-8" /> แทงหวยออนไลน์ ไม่มีเลขอั้น
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-8 flex-1 leading-relaxed font-medium">
                      เจาะลึกสถิติหวยรัฐบาล หวยลาว <strong>จ่ายเต็มบาทละ 90</strong> แทงหวยเว็บไหนดี? รวมเคล็ดลับหาเลขเด็ดเข้าทุกงวดที่นี่
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <a href="/seo/thai-lottery" className="flex items-center justify-between text-white bg-gradient-to-r from-red-800 to-red-600 px-6 py-4 rounded-2xl border border-red-400/50 font-bold text-base hover:from-red-700 hover:to-red-500 hover:shadow-[0_10px_25px_rgba(220,38,38,0.5)] hover:scale-[1.02] transition-all no-underline group/btn">
                        <span className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-red-200" /> แทงหวยรัฐบาลไทย <span className="text-xs font-normal text-red-200 ml-1 bg-black/30 px-2 py-1 rounded-md hidden md:inline">ไม่มีเลขอั้น</span></span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                    <a href="/seo/lao-lottery" className="flex items-center justify-between text-white bg-gradient-to-r from-purple-800 to-purple-600 px-6 py-4 rounded-2xl border border-purple-400/50 font-bold text-base hover:from-purple-700 hover:to-purple-500 hover:shadow-[0_10px_25px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all no-underline group/btn">
                        <span className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-purple-200" /> แทงหวยลาวพัฒนา <span className="text-xs font-normal text-purple-200 ml-1 bg-black/30 px-2 py-1 rounded-md hidden md:inline">จ่ายเต็ม 90</span></span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  </div>
              </div>
          </div>
        </section>

        {/* 🟢 3. FAQ Section AEO (Glassmorphism 3D) */}
        <section className="mb-12 mt-10 bg-black/60 p-8 md:p-12 rounded-[3rem] border border-gray-800 shadow-2xl relative z-10 flex flex-col items-center md:items-start backdrop-blur-xl">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 border-b border-gray-700 pb-5 w-full">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-ezgold-400 drop-shadow-md" />
            <h2 className="font-prompt font-extrabold text-2xl md:text-3xl text-white text-center md:text-left tracking-wide">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          
          <div className="space-y-5 text-sm md:text-base w-full max-w-4xl mx-auto">
            <details className="bg-gradient-to-b from-[#151515] to-black p-5 md:p-6 rounded-2xl border border-gray-700 cursor-pointer group shadow-lg hover:border-gray-500 transition-colors" open>
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start items-center outline-none text-base md:text-lg">
                <span>เล่น <strong>บาคาร่าเว็บตรง</strong> กับ EZPOK168 ดีอย่างไร?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-center md:text-left font-medium pl-0 md:pl-4">
                EZPOK168 เป็น <strong>บาคาร่าเว็บตรง ไม่ผ่านเอเย่นต์</strong> ที่มีความมั่นคงทางการเงินระดับประเทศ ถอนเงินหลักล้านได้ไม่อั้นต่อวัน ปลอดภัย 100% หมดปัญหาโดนล็อคยูสเซอร์ เหมาะสำหรับผู้เล่น VIP
              </p>
            </details>
            
            <details className="bg-gradient-to-b from-[#151515] to-black p-5 md:p-6 rounded-2xl border border-gray-700 cursor-pointer group shadow-lg hover:border-gray-500 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start items-center outline-none text-base md:text-lg">
                <span><strong>แทงหวยออนไลน์</strong> เว็บไหน จ่ายเต็ม ไม่มีเลขอั้น?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-center md:text-left font-medium pl-0 md:pl-4">
                ที่ EZLOTTO เปิดรับ <strong>แทงหวยออนไลน์</strong> ทั้งหวยไทยและหวยลาว จ่ายสูงสุด <strong>บาทละ 90</strong> รับประกัน <strong>ไม่มีเลขอั้น</strong> ไม่ลดเปอร์เซ็นต์การจ่ายแม้เป็นเลขดัง
              </p>
            </details>
            
            <details className="bg-gradient-to-b from-[#151515] to-black p-5 md:p-6 rounded-2xl border border-gray-700 cursor-pointer group shadow-lg hover:border-gray-500 transition-colors">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start items-center outline-none text-base md:text-lg">
                <span>มีวิธี <strong>สอนเล่น</strong> หรือ <strong>เทคนิคป๊อกเด้ง</strong> ไหม?</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed border-t border-gray-800 pt-4 text-center md:text-left font-medium pl-0 md:pl-4">
                เรามีบทความ <strong>สอนเล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> แบบละเอียด พร้อมแจก <strong>เทคนิคป๊อกเด้ง</strong> ระดับเซียนคาสิโนฟรีในเว็บไซต์ ช่วยให้คุณทำกำไรได้ง่ายขึ้น
              </p>
            </details>
          </div>
        </section>

      </main>

      <footer className="bg-[#05010a] py-8 border-t border-gray-800 w-full flex flex-col items-center">
          <div className="max-w-5xl mx-auto px-4 text-center">
              <p className="font-prompt text-ezgold-400 font-extrabold mb-3 text-sm md:text-base tracking-widest">EZPOK168 & EZLOTTO</p>
              <p className="text-gray-500 text-[10px] md:text-xs leading-loose font-medium">
                  &copy; 2026 EZPOK168.NET ศูนย์รวม <strong>บาคาร่าเว็บตรง</strong> ไม่ผ่านเอเย่นต์ <strong>สอนเล่นป๊อกเด้งออนไลน์</strong> <br className="hidden md:block"/>
                  และ <strong>แทงหวยออนไลน์ ไม่มีเลขอั้น จ่ายเต็ม 90</strong> มั่นคง ปลอดภัย ฝากถอนออโต้ 100%
              </p>
          </div>
      </footer>
    </div>
  );
}