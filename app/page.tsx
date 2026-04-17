"use client";
import { useState, useEffect } from 'react';
import { 
  X, CheckCircle, MessageCircle, ArrowRight, Video, ScrollText, 
  Gavel, Info, Clock, Coins, Banknote, Gamepad2, AlertTriangle, 
  Keyboard, BarChart2, ExternalLink, Gift, Trophy, 
  Star, Crown, User, Users, Home, UserPlus, Play, Wallet, PlayCircle, HelpCircle, Menu, ArrowUp, Search
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
  
  // 🟢 State สำหรับสลับ Tab ตรวจหวย
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

  // 🟢 AEO Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EZPOK168",
    "url": "https://ezpok168.net/",
    "description": "ศูนย์รวมป๊อกเด้งออนไลน์ 2 ใบเปิด บาคาร่า และหวยออนไลน์ ที่ดีที่สุดในไทย ฝาก-ถอน ออโต้ 24 ชม.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ezpok168.net/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "วงป๊อกเด้งไทย EZPOK168",
    "url": "https://ezpok168.net/",
    "logo": "https://ezpok168.net/NEWLOGOBANNER.gif",
    "sameAs": [
      "https://lin.ee/8bzIg5hL"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "วงป๊อกเด้งไทย คืออะไร และเล่นอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "วงป๊อกเด้งไทย คือระบบการเล่นป๊อกเด้งออนไลน์รูปแบบใหม่ ที่ให้บริการผ่านกลุ่มไลน์ และเว็บไซต์ EZPOK168 โดยมีแอดมินสับไพ่และไลฟ์สดแบบเรียลไทม์ ผู้เล่นสามารถเลือกแทงฝั่ง เจ้ามือ หรือ ลูกมือ (ขา) ได้อย่างอิสระ"
        }
      },
      {
        "@type": "Question",
        "name": "ป๊อกเด้งออนไลน์ 2 ใบเปิด ต่างกับ 3 ใบอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ระบบ 2 ใบเปิด จะวัดแต้มกันที่ไพ่สองใบแรกที่แจกให้เท่านั้น โดยไม่มีการจั่วไพ่ใบที่สามเพิ่ม การเล่นแบบนี้ทำให้เกมรวดเร็ว กระชับ และเน้นลุ้นป๊อก 8 ป๊อก 9 เป็นหลัก ซึ่งสามารถทำกำไรได้ไวกว่า"
        }
      },
      {
        "@type": "Question",
        "name": "เล่น บาคาร่า หรือ ป๊อกเด้ง เกมไพ่ไหนได้เงินดีกว่ากัน?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ป๊อกเด้งจะมีความหลากหลายในการได้รางวัลมากกว่า (เช่น 2 เด้ง, ตอง, เซียน) ทำให้มีโอกาสรับเงินคูณทวีคูณ ส่วนบาคาร่าจะเน้นแทงฝั่ง Player หรือ Banker เหมาะกับคนที่ชอบเกมเร็วและใช้สูตรอ่านเค้าไพ่"
        }
      },
      {
        "@type": "Question",
        "name": "สมัครเล่น ป๊อกเด้งออนไลน์ EZPOK168 ฝาก-ถอน ขั้นต่ำเท่าไหร่?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EZPOK168 คือเว็บตรงอันดับ 1 ในไทย ให้บริการด้วยความโปร่งใส 100% มีระบบฝาก-ถอนออโต้ ไม่มีขั้นต่ำ 1 บาทก็ฝากได้ พร้อมทีมงานบริการ 24 ชั่วโมง"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-white font-sans pb-16 md:pb-0" style={{ backgroundColor: '#0D0514' }} id="home">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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

      <div className={`fixed inset-0 bg-black/60 z-[70] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSidebarOpen(false)}></div>

      <div className={`fixed top-0 left-0 h-full w-[260px] md:w-[320px] bg-[#fdfdfd] text-[#333] z-[80] transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl`}>
        <div className="flex justify-between items-center p-4 bg-white shadow-sm z-10 border-b border-gray-100">
           <span className="font-prompt font-bold text-lg text-black flex items-center gap-2">
             <Menu className="w-5 h-5 text-ezgold-500" /> เมนูหลัก
           </span>
           <button onClick={() => setIsSidebarOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"><X className="text-gray-600 w-5 h-5" /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
           <a href="#home" onClick={handleNavClick} className="flex items-center gap-3 p-3.5 bg-white hover:bg-gray-100 rounded-xl shadow-sm text-gray-800 font-bold transition-all no-underline">
             <Home className="w-5 h-5 text-blue-500" /> หน้าหลัก
           </a>
           <a href="#promotions" onClick={handleNavClick} className="flex items-center gap-3 p-3.5 bg-white hover:bg-gray-100 rounded-xl shadow-sm text-gray-800 font-bold transition-all no-underline">
             <Gift className="w-5 h-5 text-pink-500" /> โปรโมชั่น
           </a>
           <a href="#info-rules" onClick={handleNavClick} className="flex items-center gap-3 p-3.5 bg-white hover:bg-gray-100 rounded-xl shadow-sm text-gray-800 font-bold transition-all no-underline">
             <ScrollText className="w-5 h-5 text-orange-500" /> ฝาก-ถอน / กติกา
           </a>
           <a href="https://pok9deng-pokerthai.org/" target="_blank" rel="noreferrer" onClick={handleNavClick} className="flex items-center justify-center gap-2 p-3.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-xl shadow-md text-white font-bold transition-all no-underline transform hover:scale-[1.02]">
             <Gamepad2 className="w-5 h-5" /> ทางเข้าเล่นเกมส์
           </a>
           <a href="#live-video" onClick={handleNavClick} className="flex items-center gap-3 p-3.5 bg-white hover:bg-gray-100 rounded-xl shadow-sm text-gray-800 font-bold transition-all no-underline">
             <Video className="w-5 h-5 text-purple-500" /> ชมรีวิวไพ่ป๊อกเด้ง/ไลฟ์สด
           </a>
           <a href="#knowledge-seo" onClick={handleNavClick} className="flex items-center gap-3 p-3.5 bg-white hover:bg-gray-100 rounded-xl shadow-sm text-gray-800 font-bold transition-all no-underline">
             <HelpCircle className="w-5 h-5 text-yellow-500" /> บทความ ความรู้
           </a>
           <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" onClick={handleNavClick} className="flex items-center justify-center gap-2 p-3.5 bg-[#00B900] hover:bg-[#00A000] rounded-xl shadow-md text-white font-bold transition-all no-underline transform hover:scale-[1.02] mt-4">
             <MessageCircle className="w-5 h-5" /> ติดต่อเรา
           </a>
        </div>
      </div>

      <button onClick={() => setIsSidebarOpen(true)} className="fixed top-[40%] left-0 z-[100] text-black py-4 px-2.5 rounded-r-xl shadow-[4px_0_20px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center hover:px-4 transition-all duration-300" style={{ background: 'linear-gradient(to right, #D4AF37, #F3E5AB)' }}>
        <Menu className="w-5 h-5 md:w-6 md:h-6 mb-1 animate-pulse" />
        <span className="text-[12px] md:text-sm font-bold font-prompt" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>เมนู</span>
      </button>

      <div className="fixed top-[40%] z-[100] flex flex-col items-end hover:pr-1 transition-all duration-300" style={{ right: 0 }}>
        <div className="p-2 md:p-2.5 rounded-l-xl shadow-[-4px_0_20px_rgba(0,185,0,0.4)] text-center w-[85px] md:w-[100px] border border-r-0 border-[#00B900]/50" style={{ backgroundColor: 'rgba(13, 5, 20, 0.95)', backdropFilter: 'blur(8px)' }}>
          <p className="text-[9px] md:text-[11px] text-white font-bold mb-1.5 font-prompt tracking-wide">แอดมิน 24 ชม.</p>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="block hover:opacity-90 transition-opacity rounded p-1 shadow-inner no-underline" style={{ backgroundColor: '#00B900' }}>
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อนแอดมิน 24 ชม." className="w-full h-auto mx-auto" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-24 md:bottom-10 right-4 z-40">
        <button onClick={scrollToTop} className={`p-2.5 md:p-3 text-black rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`} style={{ backgroundColor: '#D4AF37' }}>
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <header className="sticky top-0 z-40 shadow-md" style={{ backgroundColor: 'rgba(13, 5, 20, 0.95)', backdropFilter: 'blur(10px)' }}>
        <nav className="max-w-5xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 pl-8 md:pl-0">
            <span className="font-prompt font-bold text-lg md:text-2xl tracking-tight"><span className="text-white">วง</span><span style={{ color: '#D4AF37' }}>ป๊อกเด้งไทย</span></span>
          </div>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="text-[11px] md:text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all no-underline" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', border: '1px solid rgba(212, 175, 55, 0.5)' }}>
            <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> แอดมิน 24 ชม.
          </a>
        </nav>
      </header>

      <div className="w-full py-3 md:py-4 px-4 z-30 relative" style={{ backgroundColor: '#13071A' }}>
        <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5" style={{ color: '#D4AF37' }} />
            </div>
            <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2.5 md:py-3 rounded-full leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all text-sm md:text-base font-prompt" 
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(212, 175, 55, 0.4)' }}
                placeholder="ค้นหา: ป๊อกเด้งออนไลน์, บาคาร่า, เกมไพ่ยอดนิยม..." 
            />
            <button className="absolute inset-y-1 right-1 px-4 text-black font-bold rounded-full text-xs md:text-sm transition-colors hover:opacity-90" style={{ backgroundColor: '#D4AF37' }}>
                ค้นหา
            </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/85 flex items-center justify-center z-[60] transition-opacity duration-300 p-4 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsModalOpen(false)}>
        <div className="p-4 rounded-2xl w-[95%] max-w-sm max-h-[85vh] overflow-y-auto text-center shadow-[0_0_40px_rgba(212,175,55,0.4)] relative scrollbar-hide" style={{ background: 'linear-gradient(to bottom, #2E0249, #0D0514)' }} onClick={e => e.stopPropagation()}>
          <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 md:-top-3 md:-right-3 text-white bg-red-600 hover:bg-red-500 rounded-full transition-colors p-1.5 z-10 shadow-lg" aria-label="Close">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h2 className="font-prompt font-bold text-lg md:text-xl text-transparent bg-clip-text mb-3 mt-2 md:mt-0" style={{ backgroundImage: 'linear-gradient(to right, #FDF5E6, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>💦 โปรใหม่ ต้อนรับสมาชิก 💦</h2>
          <div className="w-full rounded-xl overflow-hidden mb-4 shadow-lg flex justify-center bg-black/50">
            <img src="/new-mumber.jpg" alt="โปรโมชั่นสมัครใหม่" loading="lazy" className="w-full h-auto max-h-[40vh] object-contain" />
          </div>
          <button onClick={handleModalAccept} className="w-full py-2.5 md:py-3 text-black font-bold text-sm md:text-lg rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 pulse-gold" style={{ background: 'linear-gradient(to right, #D4AF37, #F3E5AB)' }}>
            รับโปรโมชันนี้ <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 md:py-8 relative z-10 overflow-x-hidden">

        <section className="w-full relative z-30 flex flex-col items-center bg-transparent pt-4 pb-6 mb-4">
            <img 
                src="/NEWLOGOBANNER.gif" 
                alt="ป๊อกเด้งออนไลน์ บาคาร่า หวยไทย" 
                className="w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4" 
            />
            <h1 className="text-gray-300 text-sm md:text-lg font-prompt text-center max-w-2xl px-2 leading-relaxed">
                ศูนย์รวม <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> <strong>บาคาร่า</strong> และ <strong>หวยออนไลน์</strong> <br className="md:hidden" />
                สับไพ่ไลฟ์สดเรียลไทม์ มั่นคง ปลอดภัย จ่ายจริง 100%
            </h1>
        </section>

        <section className="mb-10 max-w-4xl mx-auto w-full">
            <div className="relative rounded-full p-1.5 md:p-2 flex items-center shadow-lg overflow-hidden bg-[url('/marquee-bg.gif')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="text-black font-bold text-[10px] md:text-sm px-3 md:px-4 py-1.5 rounded-full whitespace-nowrap z-10 flex items-center gap-1.5 shadow-md relative" style={{ backgroundColor: '#D4AF37' }}>
                    <AlertTriangle className="w-3.5 h-3.5 md:w-4 md:h-4" /> ประกาศ
                </div>
                <div className="flex-1 overflow-hidden ml-2 flex items-center relative z-10">
                    <Marquee className="text-[11px] md:text-sm font-medium tracking-wide mt-1" scrollamount="4" style={{ color: '#FDF5E6' }}>
                        <span className="mx-4">🔥 ID254_รูดเจ้า เจ้าป๊อกเก้าเด้ง ยินดีด้วยค่ะคุณชนะรอบวง</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">💰 ID224 ถอน 15,052 บาท</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">🃏 รอบที่ 25 เจ้าบอด ขาชนะทั้งกระดาน!</span>
                        <span className="text-white mx-4">|</span>
                        <span className="mx-4">🎉 ยินดีต้อนรับสมาชิกใหม่ทุกท่าน ฝาก-ถอน ออโต้ 24 ชม.</span>
                    </Marquee>
                </div>
            </div>
        </section>

		<section className="mb-10 max-w-[800px] mx-auto w-full" id="live-video">
            <div className="rounded-2xl p-1 shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #2E0249, #000000)' }}>
                <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 md:p-5">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Video className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
                            <h2 className="font-prompt font-bold text-lg md:text-xl text-white">ชมรีวิวไพ่ป๊อกเด้ง / ไลฟ์สด</h2>
                        </div>
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1.5 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> LIVE
                        </span>
                    </div>
                    <div className="w-full aspect-square max-w-[800px] mx-auto bg-black rounded-lg overflow-hidden relative flex items-center justify-center shadow-inner">
                         <video className="w-full h-full object-cover" controls preload="none" poster="/pok9-promo1.jpg" playsInline>
                             <source src="/video.mp4" type="video/mp4" />
                              เบราว์เซอร์ของคุณไม่รองรับวิดีโอ
                         </video>
                     </div>
                </div>
            </div>
        </section>

        <section className="mb-10 bg-cover bg-center rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] relative group" style={{ backgroundImage: `url('/pok9-bg.gif')` }}>
            <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 opacity-50 z-10" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <span className="px-4 py-1.5 bg-red-600 text-white font-bold text-xs md:text-sm rounded-full mb-5 shadow-lg animate-pulse">🔥 แนะนำบ้านหลัก 🔥</span>
                
                <h2 className="font-prompt font-extrabold text-4xl md:text-6xl text-white mb-3 drop-shadow-lg tracking-tight">
                    POK9<span style={{ color: '#D4AF37' }}>DENG</span>
                </h2>
                <p className="text-xl md:text-2xl font-bold mb-5 drop-shadow-md" style={{ color: '#FDF5E6' }}>อันดับ 1 ในไทย เล่นง่าย จ่ายจริง 100%</p>
                
                <p className="text-sm md:text-base text-gray-200 mb-8 max-w-lg mx-auto font-medium bg-black/50 p-3.5 rounded-xl backdrop-blur-sm leading-relaxed">
                    สุดยอดเว็บ <strong>ป๊อกเด้งออนไลน์</strong> สับไพ่สด 24 ชม. <br className="hidden md:block" /> ฝาก-ถอน ออโต้ ไม่มีขั้นต่ำ
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <a href="https://pok9deng-pokerthai.org/" target="_blank" rel="noreferrer" className="px-8 py-3.5 text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2 no-underline" style={{ background: 'linear-gradient(to right, #D4AF37, #F3E5AB)' }}>
                       สมัครสมาชิก <PlayCircle className="w-5 h-5" />
                    </a>
                    <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-black/60 backdrop-blur-sm font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2 no-underline hover:opacity-90" style={{ color: '#D4AF37' }}>
                        ติดต่อแอดมิน<UserPlus className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>

        <section className="mb-10 bg-cover bg-center rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] relative group" style={{ backgroundImage: `url('/ezpok-bg.gif')` }}>
            <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 opacity-50 z-10" style={{ background: 'linear-gradient(to right, transparent, #A855F7, transparent)' }}></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                <span className="px-4 py-1.5 bg-purple-600 text-white font-bold text-xs md:text-sm rounded-full mb-5 shadow-lg animate-pulse">💎 แนะนำบ้านในเครือ 💎</span>
                
                <h2 className="font-prompt font-extrabold text-4xl md:text-6xl text-white mb-3 drop-shadow-lg tracking-tight">
                    EZ<span className="text-purple-400">POK</span>
                </h2>
                <p className="text-xl md:text-2xl text-purple-300 font-bold mb-5 drop-shadow-md">ป๊อกเด้งออนไลน์ 2 ใบเปิด ระบบบอท 2026</p>
                
                <p className="text-sm md:text-base text-gray-200 mb-8 max-w-lg mx-auto font-medium bg-black/50 p-3.5 rounded-xl backdrop-blur-sm leading-relaxed">
                    มีทั้ง <strong>หวยไทย</strong> และ <strong>หวยลาว</strong> <br className="hidden md:block" /> ครบจบที่เดียว
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-purple-300 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2 no-underline">
                        เล่นเลย <PlayCircle className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>

        <section className="mb-12 w-full flex flex-col items-center justify-center gap-5">
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline">
            <img src="/affiliate-banner1.gif" alt="แบนเนอร์พันธมิตร 1" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)]" />
          </a>
          <a href="https://ezpok.com/" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline">
            <img src="/affiliate-banner2.gif" alt="แบนเนอร์พันธมิตร 2" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)]" />
          </a>
          <a href="https://ezpok.com/" target="_blank" rel="noreferrer" className="block w-full max-w-[860px] group no-underline">
            <img src="/affiliate-banner3.gif" alt="แบนเนอร์พันธมิตร 3" loading="lazy" className="w-full h-auto aspect-[860/124] object-cover rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)]" />
          </a>
        </section>

        <section className="mb-12" id="promotions">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-3">
                <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6" style={{ color: '#D4AF37' }} />
                    <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">โปรโมชันพิเศษ (เลื่อนเพื่อดู)</h2>
                </div>
                <div className="flex gap-2 text-xs md:text-sm">
                    <button onClick={() => setActivePromoTab('ALL')} className={`px-4 py-1.5 rounded-full font-bold transition-colors ${activePromoTab === 'ALL' ? 'text-black' : 'bg-transparent text-gray-400 hover:text-white'}`} style={activePromoTab === 'ALL' ? { backgroundColor: '#D4AF37' } : {}}>ทั้งหมด</button>
                    <button onClick={() => setActivePromoTab('POK9')} className={`px-4 py-1.5 rounded-full font-bold transition-colors ${activePromoTab === 'POK9' ? 'bg-red-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'}`}>POK9</button>
                    <button onClick={() => setActivePromoTab('EZPOK')} className={`px-4 py-1.5 rounded-full font-bold transition-colors ${activePromoTab === 'EZPOK' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'}`}>EZPOK</button>
                    <button onClick={() => setActivePromoTab('EZLOTTO')} className={`px-4 py-1.5 rounded-full font-bold transition-colors ${activePromoTab === 'EZLOTTO' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'}`}>EZLOTTO</button>
                </div>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black rounded-xl overflow-hidden group transition-all no-underline ${activePromoTab === 'ALL' || activePromoTab === 'POK9' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">POK9</span>
                        <img loading="lazy" src="/pok9-promo1.jpg" alt="โปรโมชั่น POK9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 text-center bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-red-400 font-prompt truncate">สมาชิกใหม่รับโบนัส 100%</p>
                    </div>
                </a>

                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black rounded-xl overflow-hidden group transition-all no-underline ${activePromoTab === 'ALL' || activePromoTab === 'EZPOK' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">EZPOK</span>
                        <img loading="lazy" src="/por_ezlt.png" alt="โปรโมชั่น EZPOK" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 text-center bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-purple-400 font-prompt truncate">เล่นป๊อกเด้ง คืนยอดเสีย 5%</p>
                    </div>
                </a>

                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black rounded-xl overflow-hidden group transition-all no-underline ${activePromoTab === 'ALL' || activePromoTab === 'EZLOTTO' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-yellow-600 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">EZLOTTO</span>
                        <img loading="lazy" src="/ezlt_pro.jpg" alt="โปรโมชั่น EZLOTTO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 text-center bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold font-prompt truncate" style={{ color: '#D4AF37' }}>หวยบาทละ 90 จ่ายเต็ม</p>
                    </div>
                </a>

                <a className={`snap-center shrink-0 w-[260px] md:w-[320px] bg-black rounded-xl overflow-hidden group transition-all no-underline ${activePromoTab === 'ALL' ? 'block' : 'hidden'}`} href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer">
                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute top-2 left-2 z-10 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">รวมทุกเครือ</span>
                        <img loading="lazy" src="/top-level-vip-320.png" alt="โปรโมชั่น VIP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 text-center bg-gradient-to-b from-gray-900 to-black">
                        <p className="text-sm font-bold text-gray-300 font-prompt truncate">สะสมแต้ม VIP แลกของรางวัล</p>
                    </div>
                </a>
            </div>
        </section>

        <section className="mb-12 bg-black/40 p-4 md:p-6 rounded-2xl shadow-lg" id="info-rules">
            <div className="flex items-center gap-2 mb-4 md:mb-5 pb-2">
                <ScrollText className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#D4AF37' }} />
                <h2 className="font-prompt font-bold text-lg md:text-xl text-white">กติกา วงป๊อกเด้ง 2 ใบเปิด</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-5">
                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(46, 2, 73, 0.5)' }}>
                    <div className="flex items-center gap-1.5 font-bold mb-3 text-sm md:text-base font-prompt" style={{ color: '#D4AF37' }}>
                        <Gavel className="w-4 h-4 md:w-5 md:h-5" /> การอ่านแต้มไพ่ & อัตราจ่าย
                    </div>
                    <ul className="space-y-2 text-gray-300 text-[11px] md:text-[13px] leading-relaxed">
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>ป๊อกชนะทุกอย่าง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>1-9, 2-8, 3-7, 4-6 #บอดเด้ง(ดอกเดียวกัน) = 7.5แต้ม #เด้ง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>5-5, 6-6, 10-10, A-A, K-K, Q-Q, J-J = 7.5แต้ม #เด้ง</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>10+ฝรั่ง 10-K,10-Q,10-J = 7.5แต้ม (ดอกเดียวกัน#เด้ง / คนละดอก#ไม่เด้ง)</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" /> <span>A-K ดอกเดียวกัน =7.5 #เด้ง, A-K คนละดอก = 1 แต้ม</span></li>
                    </ul>
                    <div className="mt-3 p-2.5 bg-red-900/20 rounded text-[10px] md:text-xs text-red-200 flex gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-orange-400" /> 
                        <p>แต้มพิเศษ 7.5 หรือ 7.5 เด้ง จะชนะ 7 แต้ม แต่แพ้ป๊อก8 และป๊อก9 ในกติกา วงป๊อกเด้ง</p>
                    </div>
                </div>

                <div className="bg-black/60 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#06C755]/10 rounded-full blur-xl"></div>
                    <div className="flex items-center gap-1.5 text-[#06C755] font-bold mb-3 text-sm md:text-base font-prompt">
                        <Info className="w-4 h-4 md:w-5 md:h-5" /> เงื่อนไขและข้อมูลบริการ
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-[#06C755]/10 p-2 rounded text-center flex flex-col items-center justify-center">
                            <Clock className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">เวลาทำการ</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">แอดมินดูแล 24 ชม.</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded text-center flex flex-col items-center justify-center">
                            <Coins className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">ระบบการเล่น</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">ลงเล่นได้ทั้ง 2 ฝั่ง</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded text-center flex flex-col items-center justify-center">
                            <Banknote className="w-3.5 h-3.5 text-[#06C755] mb-1" />
                            <span className="text-[9px] text-gray-400">ธุรกรรมการเงิน</span>
                            <span className="text-[10px] md:text-xs font-bold text-white">ฝาก-ถอนไม่มีขั้นต่ำ</span>
                        </div>
                        <div className="bg-[#06C755]/10 p-2 rounded text-center flex flex-col items-center justify-center">
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

            <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-sm md:text-lg mb-3 font-prompt">
                    <Keyboard className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#D4AF37' }} /> ตัวอย่างวิธีพิมพ์เล่น <strong>ป๊อกเด้งออนไลน์</strong> ในกลุ่ม
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gray-900/60 p-3.5 rounded-lg">
                        <p className="font-prompt text-green-400 font-bold text-xs md:text-sm mb-2">🟢 วิธีการเล่นขา (สายขา)</p>
                        <p className="text-[11px] md:text-xs text-gray-300 mb-2">&#x1F4B4; รูปแบบ: <span className="text-white font-mono bg-black px-1 rounded">ตัวเลข / จำนวนเงิน</span></p>
                        <ul className="space-y-1 text-[11px] md:text-xs text-gray-300 font-mono ml-4 list-disc marker:text-green-500">
                            <li><span className="text-white">1/10</span> (ขา1สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">2/10</span> (ขา2สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">3/10</span> (ขา3สู้ขาเจ้า จำนวน 10฿)</li>
                            <li><span className="text-white">รข/10</span> (รูดขา: แทงขาทั้งหมดสู้เจ้า ขาละ 10฿)</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/60 p-3.5 rounded-lg">
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

        {/* 🟢 ส่วนตรวจหวยหน้าหลัก (เพิ่มปุ่มกดสลับ หวยไทย-หวยลาว) */}
        <section className="mb-12 bg-black/60 p-6 md:p-8 rounded-2xl border border-ezgold-500/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full mix-blend-screen filter blur-[80px] opacity-20 bg-ezgold-500 pointer-events-none"></div>
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FDF5E6] via-[#FFDF00] to-[#D4AF37] relative z-10 mb-6"
              style={{ fontFamily: "'B2SIGN', 'Charm', cursive" }}
            >
              ตรวจผลรางวัล
            </h2>

            {/* ปุ่มกดสลับหวย */}
            <div className="flex justify-center gap-2 md:gap-4 mb-2 relative z-10 w-full max-w-md">
                <button 
                  onClick={() => setLottoTab('THAI')} 
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${lottoTab === 'THAI' ? 'bg-gradient-to-r from-ezgold-600 to-ezgold-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  หวยรัฐบาลไทย
                </button>
                <button 
                  onClick={() => setLottoTab('LAO')} 
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${lottoTab === 'LAO' ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  หวยลาวพัฒนา
                </button>
            </div>

            {/* แสดงฟอร์มตามที่เลือก */}
            <div className="w-full mt-4 animate-in fade-in zoom-in duration-300">
                {lottoTab === 'THAI' ? <LottoChecker /> : <LaoLottoChecker />}
            </div>
        </section>

        <div className="mb-12">
            <div className="flex items-center justify-between gap-2 mb-4 pb-2">
                <div className="flex items-center gap-1.5 md:gap-2">
                    <BarChart2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#D4AF37' }} />
                    <h2 className="font-prompt font-bold text-lg md:text-xl text-white">กระดานผลรางวัลล่าสุด</h2>
                </div>
                <a href="https://result.ez-huay.com/" target="_blank" rel="noreferrer" className="text-[10px] md:text-sm hover:text-white flex items-center gap-1 no-underline" style={{ color: '#D4AF37' }}>
                    ดูทั้งหมด <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 relative" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h3 className="font-prompt font-bold text-sm md:text-base text-white flex items-center justify-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> ผลสลากกินแบ่งรัฐบาลไทย
                    </h3>
                    <div className="text-center mb-4">
                        <p className="text-[11px] md:text-sm text-gray-300">รางวัลที่ 1</p>
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text tracking-[0.1em] my-1" style={{ backgroundImage: 'linear-gradient(to right, #FDF5E6, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>309612</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 text-center">
                        <div className="bg-black/50 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขหน้า 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest leading-tight mt-1">868 <br/> 424</div>
                        </div>
                        <div className="bg-black/50 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest leading-tight mt-1">355 <br/> 108</div>
                        </div>
                        <div className="bg-[#190028] rounded-md p-2 flex flex-col justify-center">
                            <p className="text-[9px] font-bold" style={{ color: '#D4AF37' }}>เลขท้าย 2 ตัว</p>
                            <div className="text-xl md:text-2xl font-bold tracking-widest mt-0.5" style={{ color: '#D4AF37' }}>77</div>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl p-4 relative" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h3 className="font-prompt font-bold text-sm md:text-base text-white flex items-center justify-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }}></span> ผล หวยลาวพัฒนา
                    </h3>
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 text-center mb-3">
                        <div className="bg-black/50 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 4 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest mt-1">4329</div>
                        </div>
                        <div className="bg-black/50 rounded-md p-2">
                            <p className="text-[9px] text-gray-400">เลขท้าย 3 ตัว</p>
                            <div className="text-sm md:text-base font-bold text-white tracking-widest mt-1">329</div>
                        </div>
                        <div className="bg-[#190028] rounded-md p-2">
                            <p className="text-[9px] font-bold" style={{ color: '#D4AF37' }}>เลขท้าย 2 ตัว</p>
                            <div className="text-lg md:text-xl font-bold tracking-widest mt-0.5" style={{ color: '#D4AF37' }}>29</div>
                        </div>
                    </div>
                    <div className="bg-black/40 rounded-md p-2 text-center">
                        <p className="text-[10px] text-gray-400 mb-1">หวยลาว (ชุด 5 ตัว)</p>
                        <div className="flex justify-center gap-2 text-base font-bold" style={{ color: '#D4AF37' }}>
                            <span>42</span><span>40</span><span>26</span><span>14</span><span>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="mb-16 rounded-2xl text-center relative mx-auto w-full p-5 md:p-6" style={{ background: 'linear-gradient(to bottom right, #2E0249, #0D0514, #000000)' }}>
            <h2 className="font-prompt font-bold text-xl md:text-2xl font-extrabold text-transparent bg-clip-text mb-1 leading-tight" style={{ backgroundImage: 'linear-gradient(to right, #FDF5E6, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TOP 100 LEVEL VIP</h2>
            <p className="font-prompt text-[11px] md:text-sm font-medium text-gray-400 mb-5">ประจำเดือน มีนาคม 69 - วงป๊อกเด้ง & หวย</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center w-full">
                 <div className="flex justify-center items-center w-full">
                    <img loading="lazy" src="/top100.gif" alt="ทำเนียบ TOP 100 VIP วงป๊อกเด้ง" className="w-full h-auto max-w-[280px] md:max-w-[350px] object-contain rounded-xl shadow-lg" />
                </div>

                <div className="text-left bg-black/60 p-4 md:p-5 rounded-xl w-full">
                    <h3 className="font-prompt text-sm font-bold mb-3 flex items-center gap-1.5" style={{ color: '#FDF5E6' }}>
                        <Star className="w-4 h-4" style={{ color: '#D4AF37' }} /> ทำเนียบ TOP VIP 
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2 md:gap-3 p-2 rounded" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.2), transparent)' }}>
                            <span className="font-black text-lg md:text-xl w-5 md:w-6 text-center" style={{ color: '#D4AF37' }}>1</span>
                            <Crown className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: '#D4AF37' }} />
                            <div className="overflow-hidden flex-1">
                                <p className="text-white font-bold text-[11px] md:text-xs truncate">Ah Ho0ng,,🍁🍁2468🧉🧉</p>
                                <p className="text-[9px] md:text-[10px]" style={{ color: '#FDF5E6' }}>Level 48 - ยอด 2.5M</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 bg-black/40 p-2 rounded">
                            <span className="font-black text-sm text-gray-400 w-5 md:w-6 text-center">2</span>
                            <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 shrink-0" />
                            <div className="overflow-hidden flex-1">
                                <p className="text-white text-[11px] md:text-xs truncate">แนน’ซี่</p>
                                <p className="text-[9px] md:text-[10px] text-gray-500">Level 34 - ยอด 1.7M</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 bg-black/40 p-2 rounded">
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

        {/* --- ส่วนศูนย์รวมความรู้ ในหน้า page.tsx --- */}
        <section className="mb-8 p-5 md:p-8 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.15)] mx-auto w-full relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #190028, #000000)' }} id="knowledge-seo">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }}></div>
          
          <div className="flex items-center justify-between mb-6 pb-3 relative z-10">
            <div className="flex items-center gap-2">
                <ScrollText className="w-6 h-6 text-purple-400" />
                <h2 className="font-prompt font-bold text-xl md:text-2xl text-white">ศูนย์รวมความรู้ SEO & เคล็ดลับ</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-black/50 p-6 rounded-xl transition-all group flex flex-col border border-gray-800">
                  <h3 className="font-prompt font-bold text-xl mb-3 flex items-center gap-2" style={{ color: '#D4AF37' }}>
                      <Trophy className="w-6 h-6" /> เทคนิคเซียนป๊อกเด้ง 2 ใบเปิด
                  </h3>
                  <p className="text-[13px] text-gray-400 mb-4 flex-1">เจาะลึก 1000+ คำ! เรียนรู้วิธีอ่านเค้าไพ่ การเดินเงินแบบทบ (Martingale) และเคล็ดลับการกระจายความเสี่ยงแทงหลายขา เพื่อทำกำไรหลักพันต่อวัน</p>
                  <a href="/seo/pokdeng" className="inline-flex items-center gap-2 font-bold text-sm hover:text-white transition-colors no-underline" style={{ color: '#D4AF37' }}>
                      อ่านบทความฉบับเต็ม <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
              </div>

              <div className="bg-black/50 p-6 rounded-xl transition-all group flex flex-col border border-gray-800">
                  <h3 className="font-prompt font-bold text-xl text-purple-400 mb-3 flex items-center gap-2">
                      <Gamepad2 className="w-6 h-6" /> คู่มือแทงหวย EZLOTTO
                  </h3>
                  <p className="text-[13px] text-gray-400 mb-4 flex-1">สถิติหวยย้อนหลัง พร้อมแนะนำกติกาการแทงหวยรัฐบาลไทย-ลาวพัฒนา EZLOTTO บาทละ 90 จ่ายเต็มไม่มีอั้น ครบจบในที่เดียว</p>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="/seo/thai-lottery" className="inline-flex items-center gap-2 text-white bg-blue-600/30 px-3 py-2 rounded border border-blue-500/50 font-bold text-sm hover:bg-blue-600/50 transition-colors no-underline">
                        คู่มือหวยรัฐบาลไทย <ArrowRight className="w-4 h-4 ml-auto" />
                    </a>
                    <a href="/seo/lao-lottery" className="inline-flex items-center gap-2 text-white bg-purple-600/30 px-3 py-2 rounded border border-purple-500/50 font-bold text-sm hover:bg-purple-600/50 transition-colors no-underline">
                        คู่มือหวยลาวพัฒนา <ArrowRight className="w-4 h-4 ml-auto" />
                    </a>
                  </div>
              </div>
          </div>
        </section>

        <section className="mb-12 mt-8 bg-black/40 p-5 md:p-8 rounded-2xl border border-gray-800 shadow-xl relative z-10 flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6 border-b border-gray-700 pb-3 w-full">
            <HelpCircle className="w-6 h-6" style={{ color: '#D4AF37' }} />
            <h2 className="font-prompt font-bold text-xl md:text-2xl text-white text-center md:text-left">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          
          <div className="space-y-4 text-[13px] md:text-sm w-full max-w-3xl mx-auto">
            <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group" open>
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start outline-none">
                <span>วงป๊อกเด้งไทย คืออะไร และเล่นอย่างไร?</span>
              </summary>
              <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3 text-center md:text-left">
                วงป๊อกเด้งไทย คือระบบการเล่น <strong>ป๊อกเด้งออนไลน์</strong> รูปแบบใหม่ ที่ให้บริการผ่านกลุ่มไลน์ และเว็บไซต์ <strong>EZPOK168</strong> โดยมีแอดมินสับไพ่และไลฟ์สดแบบเรียลไทม์ ผู้เล่นสามารถเลือกแทงฝั่ง เจ้ามือ หรือ ลูกมือ (ขา) ได้อย่างอิสระ
              </p>
            </details>

            <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start outline-none">
                <span>เล่น ป๊อกเด้งออนไลน์ 2 ใบเปิด ต่างกับ 3 ใบอย่างไร?</span>
              </summary>
              <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3 text-center md:text-left">
                ระบบ <strong>2 ใบเปิด</strong> จะวัดแต้มกันที่ไพ่สองใบแรกที่แจกให้เท่านั้น โดยไม่มีการจั่วไพ่ใบที่สามเพิ่ม การเล่นแบบนี้ทำให้เกมรวดเร็ว กระชับ และเน้นลุ้น <strong>ป๊อก 8 ป๊อก 9</strong> เป็นหลัก ซึ่งสามารถทำกำไรได้ไวกว่า
              </p>
            </details>

            <details className="bg-[#111] p-4 rounded-xl border border-gray-800 cursor-pointer group">
              <summary className="font-prompt font-bold text-gray-200 group-open:text-ezgold-400 flex justify-center md:justify-start outline-none">
                <span>สมัครเล่น ป๊อกเด้งออนไลน์ EZPOK168 ฝาก-ถอน ขั้นต่ำเท่าไหร่?</span>
              </summary>
              <p className="mt-3 text-gray-400 leading-relaxed border-t border-gray-800 pt-3 text-center md:text-left">
                <strong>EZPOK168</strong> คือเว็บตรงอันดับ 1 ในไทย ให้บริการด้วยความโปร่งใส 100% มีระบบฝาก-ถอนออโต้ <strong>ไม่มีขั้นต่ำ 1 บาทก็ฝากได้</strong> พร้อมทีมงานบริการ 24 ชั่วโมง
              </p>
            </details>
          </div>
        </section>

      </main>

      <nav className="footer-nav md:hidden">
        <a href="#home" className="nav-item active no-underline" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <Home className="w-5 h-5" />หน้าแรก
        </a>
        <a href="https://ezpok168.com/" className="nav-item no-underline" target="_blank" rel="noreferrer">
            <UserPlus className="w-5 h-5" />สมัคร
        </a>
        <a href="https://ezpok168.com/" className="center-btn no-underline" target="_blank" rel="noreferrer">
            <Play className="w-6 h-6 text-black fill-current ml-0.5" />
        </a>
        <a href="https://lin.ee/QxlA2wI" className="nav-item no-underline" target="_blank" rel="noreferrer">
            <Wallet className="w-5 h-5" />ติดต่อ
        </a>
        <a href="https://lin.ee/QxlA2wI" className="nav-item no-underline" target="_blank" rel="noreferrer">
            <User className="w-5 h-5" />แอดมิน
        </a>
      </nav>

      <footer className="bg-black py-6 text-center text-gray-500 text-[10px] md:text-xs pb-20 md:pb-6 leading-loose w-full flex flex-col items-center">
          <p className="font-prompt text-gray-400 font-bold mb-1">วงป๊อกเด้งไทย อันดับ 1</p>
          <p>&copy; 2026 วงป๊อกเด้งไทย. ศูนย์รวมเกมไพ่ ป๊อกเด้งออนไลน์ 2 ใบเปิด บาคาร่า สับไพ่สด 24 ชม. &amp; หวย EZLOTTO มั่นคง โปร่งใส 100%</p>
      </footer>
    </div>
  );
}