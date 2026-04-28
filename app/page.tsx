"use client";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import {
  X, CheckCircle, MessageCircle, ArrowRight, Video, ScrollText,
  Gift, Trophy, Home, UserPlus, PlayCircle, HelpCircle, Menu,
  ArrowUp, Search, ShieldCheck, BookOpen, Gamepad2, AlertTriangle,
  AlertCircle, Info, Gavel, Keyboard, Crown, Star, Users,
  Clock, Coins, Banknote, Zap, ExternalLink, ImageIcon,
} from 'lucide-react';

import LottoChecker from './seo/thai-lottery/LottoChecker';
import LaoLottoChecker from './seo/lao-lottery/LaoLottoChecker';

// SECURITY NOTE: Tracking URL ควรย้ายไป env variable /.env.local
// NEXT_PUBLIC_TRACKING_URL=https://script.google.com/...
// แล้วเรียกใช้ผ่าน process.env.NEXT_PUBLIC_TRACKING_URL
const TRACKING_URL = process.env.NEXT_PUBLIC_TRACKING_URL || null;

// ─── โปรโมชั่นฮอต 4 กล่อง — แก้ img/href/title ได้เลย ───────────────────
const HOT_PROMOS = [
  { img: '/pok9-promo1.webp', href: 'https://lin.ee/kBYIyk1', label: 'Welcome Bonus',  title: 'โปรต้อนรับสมาชิกใหม่', color: '#FFD700' },
  { img: '/por_ezlt.webp',    href: 'https://lin.ee/kBYIyk1', label: 'Lucky Wheel',    title: 'วงล้อนำโชคฟรี',       color: '#FF6B35' },
  { img: '/ezlt_pro.webp',    href: 'https://lin.ee/kBYIyk1', label: 'Top Level VIP',  title: 'TOP VIP รายเดือน',     color: '#C084FC' },
  { img: '/new-mumber.webp', href: 'https://lin.ee/kBYIyk1', label: 'คืนยอดเสีย2%', title: 'Level Up ทุก 10 ด่าน', color: '#34D399' },
];

// ─── แบนเนอร์โฆษณา 4 กรอบ — ใส่ img path + href + alt ─────────────────────
const AD_BANNERS: { img: string; href: string; alt: string }[] = [
  { img: '', href: '#', alt: 'แบนเนอร์ 1' },
  { img: '', href: '#', alt: 'แบนเนอร์ 2' },
  { img: '', href: '#', alt: 'แบนเนอร์ 3' },
  { img: '', href: '#', alt: 'แบนเนอร์ 4' },
];

// ─── TOP VIP Ranking — แก้ข้อมูล rank ได้เลย ─────────────────────────────
const VIP_RANKING = [
  { rank: 1, name: 'Ah Ho0ng.. 🌺🌺 2468 🍓🍒', level: 48, score: '2.5M', prize: '฿2,500' },
  { rank: 2, name: 'แนน\'ซี่',                   level: 34, score: '1.7M', prize: '฿2,000' },
  { rank: 3, name: '💙',                          level: 74, score: '1.3M', prize: '฿1,500' },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [userIP, setUserIP] = useState('Unknown');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePromoTab, setActivePromoTab] = useState('ALL');
  const [lottoTab, setLottoTab] = useState<'THAI' | 'LAO'>('THAI');
  const modalTriggered = useRef(false); // FIX: ป้องกัน modal fire ซ้ำ

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    // IP fetch — ไม่ใช้ผลลัพธ์ใน UI เพื่อ privacy
    fetch('https://api.ipify.org?format=json')
      .then((r) => r.ok ? r.json() : null)
      .then((d) => { if (d?.ip) setUserIP(d.ip); })
      .catch(() => {});

    // ✅ IMPROVED: Modal trigger หลัง scroll 50% + ใช้ sessionStorage ป้องกันแสดงซ้ำ
    const handleScrollModal = () => {
      if (modalTriggered.current) return;
      // ตรวจสอบว่าเคยแสดง modal ใน session นี้หรือยัง
      if (sessionStorage.getItem('promo_modal_shown')) return;
      
      if (window.scrollY > document.body.scrollHeight * 0.5) {
        modalTriggered.current = true;
        sessionStorage.setItem('promo_modal_shown', 'true');
        setIsModalOpen(true);
        window.removeEventListener('scroll', handleScrollModal);
      }
    };

    const handleScroll = () => setShowScrollTop(window.scrollY > 300);

    window.addEventListener('scroll', handleScrollModal, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollModal);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const trackAction = (behavior: string, details: string) => {
    if (!TRACKING_URL) return;
    const formData = new URLSearchParams();
    formData.append('sheetName', 'ezpok168');
    formData.append('action', 'Click');
    formData.append('behavior', behavior);
    formData.append('details', details);
    fetch(TRACKING_URL, { method: 'POST', body: formData, mode: 'no-cors' })
      .catch(() => {});
  };

  const handleModalAccept = () => {
    setIsModalOpen(false);
    trackAction('กดโปรโมชั่น Modal', 'กดรับสิทธิ์ สมัครสมาชิกใหม่');
    window.open('https://ezpok168.com/', '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = () => setIsSidebarOpen(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchQuery.trim() + ' site:ezpok168.net')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-white font-sans pb-20 md:pb-0" style={{ backgroundColor: '#07030F' }} id="home">

      {/* Background */}
      <div id="bg-watermark" />
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-screen blur-[130px] opacity-[0.07]" style={{ backgroundColor: '#D4AF37' }} />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full mix-blend-screen blur-[110px] opacity-[0.06]" style={{ backgroundColor: '#7C3AED' }} />
        <div className="absolute top-[50%] left-[30%] w-[300px] h-[300px] rounded-full mix-blend-screen blur-[100px] opacity-[0.04]" style={{ backgroundColor: '#D4AF37' }} />
      </div>

      {/* ── Sidebar Overlay ── */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ── Sidebar Panel ── */}
      <div
        className={`fixed top-0 left-0 h-full w-[290px] md:w-[320px] z-[80] transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'linear-gradient(180deg, #0E0720 0%, #07030F 100%)', borderRight: '1px solid rgba(212,175,55,0.2)', boxShadow: '12px 0 40px rgba(0,0,0,0.95)' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-[#D4AF37]/15" style={{ background: 'rgba(212,175,55,0.04)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FFE566,#D4AF37)' }}>
              <Menu className="w-4 h-4 text-black" />
            </div>
            <span className="font-black text-base tracking-wide" style={{ color: '#D4AF37' }}>เมนูหลัก</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <Link href="#home" onClick={handleNavClick} className="sidebar-item">
            <Home className="w-4 h-4 text-blue-400 flex-shrink-0" /><span>หน้าหลัก</span>
          </Link>
          <Link href="#hot-promos" onClick={handleNavClick} className="sidebar-item">
            <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" /><span>โปรโมชั่นฮอต</span>
          </Link>
          <Link href="#promotions" onClick={handleNavClick} className="sidebar-item">
            <Gift className="w-4 h-4 text-pink-400 flex-shrink-0" /><span>โปรโมชั่นทั้งหมด</span>
          </Link>
          <Link href="#vip-ranking" onClick={handleNavClick} className="sidebar-item">
            <Crown className="w-4 h-4 text-yellow-300 flex-shrink-0" /><span>อันดับ TOP VIP</span>
          </Link>
          <Link href="#pokdeng-rules" onClick={handleNavClick} className="sidebar-item">
            <Gavel className="w-4 h-4 text-orange-400 flex-shrink-0" /><span>กติกาป๊อกเด้ง 2 ใบเปิด</span>
          </Link>
          <Link href="/seo/pokdeng" onClick={handleNavClick} className="sidebar-item" style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.3)', color: '#c4b5fd' }}>
            <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" /><span>บทความ ป๊อกเด้งออนไลน์</span>
          </Link>
          <Link href="#knowledge-seo" onClick={handleNavClick} className="sidebar-item">
            <HelpCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} /><span>กติกาและวิธีเล่น</span>
          </Link>

          <Link href="#knowledge-seo" onClick={handleNavClick}
            className="btn-primary mt-4 w-full rounded-2xl py-4 text-sm justify-center"
            style={{ borderRadius: '1rem' }}>
            <BookOpen className="w-5 h-5" /> ดูวิธีเล่นและกติกา
          </Link>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" onClick={handleNavClick}
            className="btn-line mt-2 w-full rounded-2xl py-4 text-sm justify-center"
            style={{ borderRadius: '1rem' }}>
            <MessageCircle className="w-5 h-5" /> ติดต่อแอดมิน 24 ชม.
          </a>
        </div>

        {/* Trust footer */}
        <div className="px-5 py-4 border-t border-white/5 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-xs text-gray-500 font-medium">ระบบ SSL · มีแอดมินดูแล 24 ชม.</span>
        </div>
      </div>

      {/* ── Left Floating Menu ── */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed z-[100] py-4 px-2.5 rounded-r-2xl flex flex-col items-center justify-center group transition-all duration-300 hover:pr-4"
        style={{
          top: '40%', left: '0px',
          background: 'linear-gradient(160deg, rgba(212,175,55,0.95), rgba(13,5,20,0.98))',
          border: '1px solid rgba(212,175,55,0.5)',
          borderLeft: 'none',
          boxShadow: '5px 5px 25px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
        }}
        aria-label="เปิดเมนูหลัก"
      >
        <Menu className="w-5 h-5 mb-2 text-white group-hover:scale-110 transition-transform" />
        <span className="text-[11px] font-black text-white tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>เมนู</span>
      </button>

      {/* ── Right LINE Widget ── */}
      <div className="fixed z-[100] flex flex-col items-end group" style={{ top: '45%', right: '0px' }}>
        <div
          className="p-2.5 rounded-l-2xl text-center w-[88px] md:w-[104px] relative overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(160deg, rgba(0,50,0,0.97), rgba(0,15,0,0.99))',
            border: '1px solid rgba(0,200,0,0.35)',
            borderRight: 'none',
            boxShadow: '-5px 5px 25px rgba(0,100,0,0.4)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="text-[10px] text-green-400 font-black mb-2 tracking-wide animate-pulse">แอดมิน 24 ชม.</p>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="block hover:scale-105 transition-transform rounded-xl overflow-hidden border border-green-500/30 bg-white/5 p-1 shadow-[0_0_12px_rgba(0,255,0,0.3)]">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อนแอดมิน" className="w-full h-auto mx-auto rounded-lg" />
          </a>
        </div>
      </div>

      {/* ── Scroll to Top ── */}
      <div className="fixed bottom-24 md:bottom-10 right-4 z-40">
        <button
          onClick={scrollToTop}
          aria-label="กลับด้านบน"
          className={`p-3 md:p-3.5 text-black rounded-full transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
          style={{ background: 'linear-gradient(135deg, #FFE566, #D4AF37)', boxShadow: '0 6px 24px rgba(212,175,55,0.6)', border: '1px solid rgba(255,230,100,0.5)' }}
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-[#D4AF37]/12" style={{ backgroundColor: 'rgba(7,3,15,0.97)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>
        <nav className="max-w-5xl mx-auto px-4 h-16 md:h-[72px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 pl-9 md:pl-0">
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-3xl tracking-tight leading-none">
                <span className="text-white">EZ</span><span style={{ color: '#D4AF37' }}>POK168</span>
              </span>
              <div className="hidden md:flex items-center gap-2 mt-1">
                <span className="trust-badge"><ShieldCheck className="w-2.5 h-2.5" />ระบบ SSL</span>
                <span className="trust-badge">แอดมิน 24 ชม.</span>
              </div>
            </div>
          </div>
          <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="btn-ghost text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5" style={{ borderRadius: '9999px' }}>
            <MessageCircle className="w-4 h-4" /> แอดมิน 24 ชม.
          </a>
        </nav>
      </header>

      {/* ── Search Bar ── */}
      <div className="w-full py-3 md:py-4 px-4 z-30 relative border-b border-white/5" style={{ background: 'rgba(12,6,22,0.9)', backdropFilter: 'blur(12px)' }}>
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative" role="search">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4" style={{ color: 'rgba(212,175,55,0.6)' }} />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-24 py-3 md:py-3.5 rounded-full text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all text-sm"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6)' }}
            placeholder="ค้นหา: กติกาป๊อกเด้ง, ตรวจหวย, วิธีเล่นบาคาร่า..."
            aria-label="ค้นหาข้อมูล"
          />
          <button
            type="submit"
            className="absolute inset-y-1.5 right-1.5 px-5 md:px-6 text-black font-black rounded-full text-xs md:text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #FFE566, #D4AF37)', boxShadow: '0 2px 12px rgba(212,175,55,0.4)' }}
          >
            ค้นหา
          </button>
        </form>
      </div>

      {/* ── Modal ── */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[60] transition-opacity duration-300 p-4 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="p-6 md:p-8 rounded-3xl w-[95%] max-w-sm max-h-[88vh] overflow-y-auto text-center relative"
          style={{ background: 'linear-gradient(145deg, #180830, #07030F)', border: '1px solid rgba(212,175,55,0.35)', boxShadow: '0 0 60px rgba(212,175,55,0.2), 0 40px 80px rgba(0,0,0,0.9)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(220,38,38,0.8)', border: '1px solid rgba(255,100,100,0.3)' }}
            aria-label="ปิด"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 mt-1"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}>
            🎁 โปรต้อนรับสมาชิกใหม่
          </div>
          <h2 className="font-black text-xl md:text-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            💦 โปรใหม่ ต้อนรับสมาชิก 💦
          </h2>
          <div className="w-full rounded-2xl overflow-hidden mb-4 flex justify-center" style={{ border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 12px 30px rgba(0,0,0,0.7)' }}>
            <img src="/new-mumber.webp" alt="โปรโมชั่นสมาชิกใหม่" loading="lazy" decoding="async" className="w-full h-auto max-h-[40vh] object-contain" />
          </div>
          {/* FIX MARKETING: เพิ่ม disclaimer ก่อน CTA */}
          <p className="text-xs text-gray-500 mb-4">*โปรโมชั่นมีเงื่อนไข กรุณาอ่านก่อนสมัคร ติดต่อแอดมินเพื่อดูรายละเอียด</p>
          <button onClick={handleModalAccept} className="btn-primary w-full py-4 text-base md:text-lg pulse-gold rounded-2xl justify-center" style={{ borderRadius: '1rem' }}>
            ดูเงื่อนไขและรับสิทธิ์ <CheckCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ══ MAIN ══ */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-10 relative z-10 overflow-x-hidden">

        {/* Hero Banner */}
        <section className="w-full relative z-30 flex flex-col items-center bg-transparent pt-4 pb-8 mb-6">
          {/* GIF → video: เบากว่า ~70%, ไม่กระพริบตอนโหลด */}
          <video
            autoPlay muted loop playsInline
            className="w-full max-w-3xl h-auto object-contain mb-6 hover:scale-[1.02] transition-transform duration-500"
            style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.35))' }}
            aria-label="EZPOK168 ป๊อกเด้งออนไลน์ บาคาร่าเว็บตรง"
          >
            <source src="/NEWLOGOBANNER.webm" type="video/webm" />
            <source src="/NEWLOGOBANNER.mp4"  type="video/mp4" />
            {/* fallback สำหรับ browser เก่า */}
            <img src="/NEWLOGOBANNER.webp" alt="EZPOK168 ป๊อกเด้งออนไลน์ บาคาร่าเว็บตรง" loading="eager" decoding="async" />
          </video>

          {/* FIX MARKETING: ลด claim แรง ใช้ข้อความที่ตรวจสอบได้ */}
          <h1 className="text-center max-w-4xl px-2 leading-loose font-extrabold"
            style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1rem, 5vw, 1.75rem)' }}>
            <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> เล่นได้ทั้งเจ้าและขา มีแอดมินดูแล 24 ชม.
            <br />
            <strong>บาคาร่าเว็บตรง</strong> ไม่ผ่านเอเย่นต์ ·{' '}
            <span className="font-extrabold underline decoration-red-500/50 underline-offset-4" style={{ color: '#f87171' }}>
              แทงหวยออนไลน์ ไม่มีเลขอั้น
            </span>
          </h1>

          {/* FIX MARKETING: CTA หลักเดียว + รอง */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
            <Link href="#knowledge-seo" className="btn-primary px-10 py-4 text-base md:text-lg no-underline">
              <BookOpen className="w-5 h-5" /> ดูกติกาและวิธีเล่น
            </Link>
            <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="btn-ghost px-10 py-4 text-base md:text-lg no-underline">
              <MessageCircle className="w-5 h-5" /> ติดต่อแอดมิน
            </a>
          </div>
        </section>

        {/* FIX: แทนที่ <marquee> deprecated ด้วย CSS animation */}
        <section className="mb-12 max-w-4xl mx-auto w-full">
          <div className="relative rounded-full p-2 flex items-center overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 24px rgba(0,0,0,0.7)' }}>
            <div className="text-black font-black text-[11px] md:text-sm px-4 py-2 rounded-full whitespace-nowrap z-10 flex items-center gap-2 shadow-md flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #FFE566, #D4AF37)' }}>
              <AlertTriangle className="w-4 h-4" /> ประกาศ
            </div>
            <div className="marquee-wrapper ml-3 flex-1">
              <div className="marquee-track text-xs md:text-sm font-medium tracking-wide" style={{ color: '#E8DFC0' }}>
                <span className="mx-6">🎴 ป๊อกเด้งออนไลน์ 2 ใบเปิด <strong>สับไพ่ Live 24 ชม.</strong></span>
                <span className="mx-4" style={{ color: '#D4AF37' }}>|</span>
                <span className="mx-6">📋 <strong>ศึกษากติกาและเงื่อนไขก่อนเริ่มใช้งาน</strong></span>
                <span className="mx-4" style={{ color: '#D4AF37' }}>|</span>
                <span className="mx-6">💰 <strong>แทงหวยออนไลน์</strong> ตรวจสอบเงื่อนไขที่นี่</span>
                <span className="mx-4" style={{ color: '#D4AF37' }}>|</span>
                {/* ซ้ำ content เพื่อให้ marquee loop ไม่มีช่องว่าง */}
                <span className="mx-6">🎴 ป๊อกเด้งออนไลน์ 2 ใบเปิด <strong>สับไพ่ Live 24 ชม.</strong></span>
                <span className="mx-4" style={{ color: '#D4AF37' }}>|</span>
                <span className="mx-6">📋 <strong>ศึกษากติกาและเงื่อนไขก่อนเริ่มใช้งาน</strong></span>
                <span className="mx-4" style={{ color: '#D4AF37' }}>|</span>
                <span className="mx-6">💰 <strong>แทงหวยออนไลน์</strong> ตรวจสอบเงื่อนไขที่นี่</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12 max-w-[850px] mx-auto w-full" id="live-video">
          <div className="rounded-3xl p-[1.5px] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ background: 'linear-gradient(135deg, #4A00E0, #8E2DE2, #1a0030)' }}>
            <div className="bg-black/95 backdrop-blur-xl rounded-[calc(1.5rem-1.5px)] p-4 md:p-6 border border-white/5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}>
                    <Video className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h2 className="font-extrabold text-lg md:text-2xl text-white tracking-wide">
                    ชมรีวิว <strong className="text-purple-300">ป๊อกเด้ง &amp; บาคาร่า</strong>
                  </h2>
                </div>
                <span className="px-3 py-1.5 text-white text-[10px] md:text-xs font-black rounded-full flex items-center gap-2 animate-pulse"
                  style={{ background: '#dc2626', border: '1px solid rgba(255,100,100,0.3)', boxShadow: '0 0 15px rgba(220,38,38,0.5)' }}>
                  <span className="w-2 h-2 rounded-full bg-white" /> LIVE
                </span>
              </div>
              <div className="w-full aspect-square max-w-[800px] mx-auto bg-[#0a0a0a] rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.06)', boxShadow: 'inset 0 0 30px rgba(0,0,0,1)' }}>
                <video className="w-full h-full object-cover" controls preload="none" poster="/pok9-promo1.webp" playsInline>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* POK9 Hero */}
        <section className="mb-12 rounded-[2rem] overflow-hidden relative"
          style={{ border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 24px 60px rgba(212,175,55,0.12)' }}>
          {/* BG Video แทน GIF — เบากว่า ~75% */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-hidden="true"
          >
            <source src="/pok9-bg.webm" type="video/webm" />
            <source src="/pok9-bg.mp4"  type="video/mp4" />
            <img src="/pok9-bg.webp" alt="" aria-hidden="true" loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.97), rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.3))' }} />
          <div className="relative z-[2] p-10 md:p-16 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-white font-extrabold text-xs md:text-sm"
              style={{ background: 'linear-gradient(135deg, #b91c1c, #ef4444)', boxShadow: '0 6px 20px rgba(220,38,38,0.5)', border: '1px solid rgba(255,100,100,0.4)' }}>
              🔥 แนะนำ 🔥
            </span>
            <h2 className="font-black text-5xl md:text-7xl text-white mb-4 tracking-tight" style={{ textShadow: '0 0 30px rgba(255,255,255,0.15)' }}>
              POK9<span style={{ background: 'linear-gradient(135deg, #D4AF37, #FFE566)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DENG</span>
            </h2>
            {/* FIX MARKETING: ลบ "จ่ายจริง 100%" */}
            <p className="text-xl md:text-3xl font-extrabold mb-6" style={{ color: '#D4AF37', textShadow: '0 2px 12px rgba(212,175,55,0.4)' }}>
              ป๊อกเด้งออนไลน์ 2 ใบเปิด เล่นได้ทั้งเจ้าและขา
            </p>
            <p className="text-sm md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium p-5 rounded-2xl leading-relaxed"
              style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
              สับไพ่ให้ชมสดตลอด 24 ชม. มีแอดมินดูแลทุกการทำรายการ
              <br className="hidden md:block" />
              <strong>ศึกษาเงื่อนไขและกติกาก่อนเริ่มใช้งาน</strong>
            </p>
            {/* FIX MARKETING: CTA เดียว ไม่กระจาย */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="#knowledge-seo" className="btn-primary px-10 py-4 text-lg md:text-xl no-underline">
                <BookOpen className="w-6 h-6" /> ดูกติกาและวิธีเล่น
              </Link>
              <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer" className="btn-ghost px-10 py-4 text-lg md:text-xl no-underline">
                ติดต่อแอดมิน <UserPlus className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Lottery Section */}
        <section className="mb-14 p-8 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden flex flex-col items-center mt-12"
          style={{ background: 'linear-gradient(160deg, #2a0808, #07030F)', border: '1px solid rgba(220,38,38,0.25)', boxShadow: '0 20px 60px rgba(220,38,38,0.1)' }}>
          <div className="absolute top-[-30%] left-[-20%] w-96 h-96 rounded-full mix-blend-screen blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: '#dc2626' }} />

          {/* FIX MARKETING: ลบ animate-pulse ออกจาก claim แรง */}
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-5 text-white font-extrabold text-sm md:text-base"
            style={{ background: 'linear-gradient(135deg, #b91c1c, #ef4444)', boxShadow: '0 0 24px rgba(220,38,38,0.4)', border: '1px solid rgba(255,100,100,0.35)' }}>
            💰 <strong>แทงหวยออนไลน์ ไม่มีเลขอั้น</strong>
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 relative z-10"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: "'B2SIGN', 'Charm', cursive" }}>
            แทงหวยออนไลน์ &amp; ตรวจรางวัล
          </h2>

          <p className="text-gray-300 text-base md:text-xl font-medium mb-8 relative z-10 px-6 py-2.5 rounded-full"
            style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
            ไม่มีเลขอั้น รับทุกตัวเลข จ่ายสูงสุด{' '}
            <strong style={{ color: '#D4AF37' }}>บาทละ 90</strong>
            {' '}· <span className="text-xs text-gray-500">*มีเงื่อนไข</span>
          </p>

          {/* Lotto Tabs */}
          <div className="flex justify-center gap-3 mb-4 relative z-10 w-full max-w-md p-1.5 rounded-2xl"
            style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <button onClick={() => setLottoTab('THAI')}
              className={`flex-1 py-3.5 rounded-xl font-extrabold text-sm md:text-base transition-all ${lottoTab === 'THAI' ? 'tab-pill-active scale-[1.03]' : 'tab-pill-inactive'}`}>
              หวยรัฐบาลไทย
            </button>
            <button onClick={() => setLottoTab('LAO')}
              className={`flex-1 py-3.5 rounded-xl font-extrabold text-sm md:text-base transition-all ${lottoTab === 'LAO'
                ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-[0_4px_16px_rgba(168,85,247,0.5)] scale-[1.03] font-black'
                : 'tab-pill-inactive'}`}>
              หวยลาวพัฒนา
            </button>
          </div>

          <div className="w-full mt-2 relative z-10">
            {lottoTab === 'THAI' ? <LottoChecker /> : <LaoLottoChecker />}
          </div>

          {/* FIX MARKETING: เปลี่ยน CTA เป็น "ดูเงื่อนไข" ก่อน */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10">
            <a href="https://ezpok168.com/" target="_blank" rel="noreferrer" className="btn-danger px-12 py-5 text-xl md:text-2xl no-underline">
              🎫 ซื้อหวยออนไลน์ <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-3 relative z-10">*กรุณาอ่านเงื่อนไขก่อนทำรายการ</p>
        </section>

        {/* Affiliate Banners — GIF → video */}
        <section className="mb-14 w-full flex flex-col items-center gap-5">
          {[
            { href: 'https://lin.ee/8bzIg5hL', webm: '/affiliate-banner1.webm', mp4: '/affiliate-banner1.mp4', poster: '/affiliate-banner1.webp', alt: 'แทงหวยออนไลน์ EZPOK168' },
            { href: 'https://ezpok.com/',        webm: '/affiliate-banner2.webm', mp4: '/affiliate-banner2.mp4', poster: '/affiliate-banner2.webp', alt: 'บาคาร่าเว็บตรง EZPOK168' },
            { href: 'https://ezpok.com/',        webm: '/affiliate-banner3.webm', mp4: '/affiliate-banner3.mp4', poster: '/affiliate-banner3.webp', alt: 'ป๊อกเด้งออนไลน์ EZPOK168' },
          ].map((b, i) => (
            <a key={i} href={b.href} target="_blank" rel="noreferrer"
              className="block w-full max-w-[860px] no-underline hover:scale-[1.01] transition-transform duration-300 rounded-2xl overflow-hidden"
              style={{ aspectRatio: '860/124', boxShadow: '0 10px 30px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <video autoPlay muted loop playsInline poster={b.poster}
                className="w-full h-full object-cover"
                aria-label={b.alt}>
                <source src={b.webm} type="video/webm" />
                <source src={b.mp4}  type="video/mp4" />
                <img src={b.poster} alt={b.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </video>
            </a>
          ))}
        </section>

        {/* ════ โปรโมชั่นฮอต 4 card ════ */}
        <section className="mb-14" id="hot-promos">
          <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>
              <Zap className="w-5 h-5" style={{ color: '#D4AF37' }} />
            </div>
            <div>
              <h2 className="font-extrabold text-2xl md:text-3xl text-white tracking-wide section-title">
                โปรโมชั่นฮอต EZPOK
              </h2>
              <p className="text-xs text-gray-500 mt-1">สิทธิพิเศษสำหรับสมาชิกป๊อกเด้งออนไลน์ (คลิกเพื่อติดต่อรับสิทธิ์)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HOT_PROMOS.map((promo, i) => (
              <a key={i} href={promo.href} target="_blank" rel="noreferrer noopener"
                className="group no-underline flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300"
                style={{ borderRadius: '1.25rem', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.7)', background: 'linear-gradient(180deg,#111 0%,#000 100%)' }}>
                {/* Image area */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#0e0e0e]">
                  {promo.img ? (
                    <img src={promo.img} alt={promo.title} loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <ImageIcon className="w-8 h-8 text-gray-700" />
                      <span className="text-xs text-gray-600">ใส่รูปภาพ</span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Label */}
                <div className="p-3 text-center">
                  <p className="font-black text-sm md:text-base" style={{ color: promo.color }}>{promo.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{promo.title}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-600 text-center mt-3">*โปรโมชั่นทุกรายการมีเงื่อนไข กรุณาติดต่อแอดมินก่อนรับสิทธิ์</p>
        </section>

        {/* ════ กรอบแบนเนอร์โฆษณา 4 กรอบ ════ */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <ExternalLink className="w-5 h-5" style={{ color: '#D4AF37' }} />
            <h2 className="font-bold text-lg text-gray-400 tracking-wide">แบนเนอร์พันธมิตร</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {AD_BANNERS.map((b, i) => (
              <a key={i} href={b.href} target="_blank" rel="noreferrer noopener"
                className="group no-underline block w-full hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                style={{ borderRadius: '1rem', border: '1px dashed rgba(212,175,55,0.3)', minHeight: '100px', background: 'rgba(212,175,55,0.03)', aspectRatio: '3/1' }}>
                {b.img ? (
                  <img src={b.img} alt={b.alt} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 min-h-[100px]">
                    <ImageIcon className="w-6 h-6 text-gray-700" />
                    <span className="text-xs text-gray-600">กรอบแบนเนอร์ {i + 1} — ใส่ img + href</span>
                    <span className="text-[10px] text-gray-700">แนะนำขนาด 860×287px</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* ════ กติกาป๊อกเด้ง 2 ใบเปิด ════ */}
        <section className="mb-14 p-6 md:p-8 rounded-3xl" id="pokdeng-rules"
          style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(212,175,55,0.18)', backdropFilter: 'blur(16px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>
              <ScrollText className="w-5 h-5" style={{ color: '#D4AF37' }} />
            </div>
            <h2 className="font-extrabold text-xl md:text-2xl text-white">กติกาป๊อกเด้ง 2 ใบเปิด</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT: การอ่านแต้ม */}
            <div className="rounded-2xl p-5 transition-colors"
              style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(212,175,55,0.25)' }}>
              <div className="flex items-center gap-2 font-bold text-lg mb-4 pb-2" style={{ color: '#D4AF37', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                <Gavel className="w-5 h-5" /> การอ่านแต้มไพ่ &amp; อัตราจ่าย
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                {[
                  'ป๊อกชนะทุกอย่าง',
                  '1-9, 2-8, 3-7, 4-6 #บอดเด้ง (ดอกเดียวกัน) = 7.5 แต้ม #เด้ง',
                  '5-5, 6-6, 10-10, A-A, K-K, Q-Q, J-J = 7.5 แต้ม #เด้ง',
                  '10+ฝรั่ง 10-K, 10-Q, 10-J = 7.5 แต้ม (ดอกเดียวกัน #เด้ง / คนละดอก #ไม่เด้ง)',
                  'A-K ดอกเดียวกัน = 7.5 #เด้ง / A-K คนละดอก = 1 แต้ม',
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-orange-200 text-xs">แต้มพิเศษ 7.5 หรือ 7.5 เด้ง จะชนะ 7 แต้ม แต่แพ้ป๊อก 8 และป๊อก 9</span>
                </li>
              </ul>
            </div>

            {/* RIGHT: เงื่อนไขและวิธีลงเล่น */}
            <div className="rounded-2xl p-5"
              style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(6,199,85,0.35)', boxShadow: '0 0 20px rgba(6,199,85,0.08)' }}>
              <div className="flex items-center gap-2 font-bold text-lg mb-4 pb-2" style={{ color: '#06C755', borderBottom: '1px solid rgba(6,199,85,0.2)' }}>
                <Info className="w-5 h-5" /> เงื่อนไข &amp; วิธีลงเล่น
              </div>

              {/* 4-stat grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: <Clock className="w-5 h-5 text-[#06C755]" />, label: 'เวลาทำการ', value: 'แอดมินดูแล 24 ชม.' },
                  { icon: <Coins className="w-5 h-5 text-[#06C755]" />, label: 'กติกาป๊อกเด้ง', value: 'เล่นได้ทั้ง 2 ฝั่ง' },
                  { icon: <Banknote className="w-5 h-5 text-[#06C755]" />, label: 'ฝาก-ถอนเงิน', value: 'ไม่มีขั้นต่ำ' },
                  { icon: <Gamepad2 className="w-5 h-5 text-[#06C755]" />, label: 'ลงเล่นขั้นต่ำ', value: '10฿ → 2,500฿' },
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl flex flex-col items-center text-center"
                    style={{ background: 'rgba(6,199,85,0.07)', border: '1px solid rgba(6,199,85,0.25)' }}>
                    <div className="mb-1">{stat.icon}</div>
                    <span className="text-xs text-gray-400">{stat.label}</span>
                    <span className="text-sm font-bold text-white mt-0.5">{stat.value}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>กรณีระบบขัดข้อง / สัญญาณหลุด ไฟดับ, คอล LINE และ TikTok = โมฆะ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#06C755] shrink-0 mt-0.5" />
                  <span>ต้องปฏิบัติตามกติกาและเงื่อนไขของระบบ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* วิธีพิมพ์เล่นในกลุ่ม */}
          <div className="mt-6 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Keyboard className="w-5 h-5" style={{ color: '#D4AF37' }} />
              วิธีพิมพ์เล่นในกลุ่ม (ตัวอย่าง)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ขา */}
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  วิธีการเล่นขา (สายขา)
                </p>
                <div className="font-mono text-gray-300 text-sm pl-3 space-y-1.5" style={{ borderLeft: '2px solid rgba(34,197,94,0.4)' }}>
                  <p className="text-gray-400 text-xs mb-2">💴 เล่นขาให้พิมพ์ ตัวเลข / จำนวนเงิน เช่น</p>
                  {[
                    ['1/10', 'ขา 1 สู้เจ้า / จำนวน 10฿'],
                    ['2/10', 'ขา 2 สู้เจ้า / จำนวน 10฿'],
                    ['3/10', 'ขา 3 สู้เจ้า / จำนวน 10฿'],
                    ['รข/10', 'รูดขา = แทงขาทั้งหมด ขาละ 10฿'],
                  ].map(([cmd, desc], i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong className="text-green-300">{cmd}</strong> <span className="text-gray-400">({desc})</span></span>
                    </div>
                  ))}
                  <p className="text-gray-500 text-xs pt-2">จากนั้น <strong className="text-white">ส่งลงกลุ่มได้เลยค่ะ</strong></p>
                </div>
              </div>

              {/* เจ้า */}
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  วิธีการเล่นเจ้า (สายเจ้า)
                </p>
                <div className="font-mono text-gray-300 text-sm pl-3 space-y-1.5" style={{ borderLeft: '2px solid rgba(239,68,68,0.4)' }}>
                  <p className="text-gray-400 text-xs mb-2">💴 เล่นเจ้าให้พิมพ์ จ + ตัวเลข / จำนวนเงิน เช่น</p>
                  {[
                    ['จ1/10', 'เจ้าสู้ขา 1 / จำนวน 10฿'],
                    ['จ2/10', 'เจ้าสู้ขา 2 / จำนวน 10฿'],
                    ['จ3/10', 'เจ้าสู้ขา 3 / จำนวน 10฿'],
                    ['รจ/10', 'รูดเจ้า = แทงเจ้าสู้ขาทั้งหมด ขาละ 10฿'],
                  ].map(([cmd, desc], i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      <span><strong className="text-red-300">{cmd}</strong> <span className="text-gray-400">({desc})</span></span>
                    </div>
                  ))}
                  <p className="text-gray-500 text-xs pt-2">จากนั้น <strong className="text-white">ส่งลงกลุ่มได้เลยค่ะ</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ TOP 100 LEVEL VIP Ranking ════ */}
        <section className="mb-14 rounded-3xl overflow-hidden" id="vip-ranking"
          style={{ background: 'linear-gradient(160deg, #1a0b2e, #0a0010)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 20px 60px rgba(100,0,150,0.2)' }}>

          {/* Header */}
          <div className="p-6 md:p-8 pb-0">
            <div className="flex items-center gap-3 mb-1">
              <Crown className="w-7 h-7" style={{ color: '#D4AF37' }} />
              <h2 className="font-black text-2xl md:text-3xl text-white tracking-wide">TOP 100 LEVEL VIP</h2>
            </div>
            <p className="text-sm text-gray-500 ml-10">ประจำเดือน มีนาคม 69 · *แสดงยอดรวมสะสมประจำเดือน</p>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* LEFT: Poster image */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 12px 30px rgba(0,0,0,0.7)' }}>
              {/* สามารถเปลี่ยน src เป็น path รูป poster จริง */}
              <div className="aspect-[4/5] bg-gradient-to-b from-purple-900/40 to-black flex flex-col items-center justify-center p-8 text-center relative">
                <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 30%, #7c3aed, transparent 70%)' }} />
                <Trophy className="w-16 h-16 mb-4 relative z-10" style={{ color: '#D4AF37' }} />
                <h3 className="font-black text-2xl md:text-3xl text-white mb-2 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #FFE566, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  TOP-LEVEL-VIP
                </h3>
                <p className="font-extrabold text-xl text-white mb-4 relative z-10">รายเดือน</p>

                {/* Prize table */}
                <div className="w-full grid grid-cols-2 gap-2 text-xs relative z-10 mb-4">
                  {[
                    { rank: 'อันดับ 1', prize: '฿2,500', highlight: true },
                    { rank: 'อันดับ 2', prize: '฿2,000', highlight: false },
                    { rank: 'อันดับ 3', prize: '฿1,500', highlight: false },
                    { rank: 'อันดับ 4', prize: '฿1,000', highlight: false },
                    { rank: 'อันดับ 5', prize: '฿900', highlight: false },
                    { rank: 'อันดับ 6', prize: '฿700', highlight: false },
                    { rank: 'อันดับ 7', prize: '฿600', highlight: false },
                    { rank: 'อันดับ 8', prize: '฿500', highlight: false },
                    { rank: 'อันดับ 9', prize: '฿300', highlight: false },
                    { rank: 'อันดับ 10', prize: '฿200', highlight: false },
                    { rank: 'อันดับ 11-100', prize: '฿100', highlight: false },
                  ].map((p, i) => (
                    <div key={i} className={`flex justify-between px-3 py-1.5 rounded-lg ${p.highlight ? 'font-black' : 'font-medium'}`}
                      style={{
                        background: p.highlight ? 'rgba(212,175,55,0.2)' : 'rgba(0,0,0,0.3)',
                        border: p.highlight ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(255,255,255,0.05)',
                        gridColumn: p.rank === 'อันดับ 11-100' ? 'span 2' : undefined,
                        color: p.highlight ? '#FFE566' : '#d1d5db',
                      }}>
                      <span>{p.rank}</span>
                      <span style={{ color: p.highlight ? '#FFE566' : '#D4AF37' }}>{p.prize}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 relative z-10">ประกาศรางวัลทุกวันที่ 1 ของเดือน</p>
              </div>
            </div>

            {/* RIGHT: Leaderboard */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="font-bold text-white text-lg">รายชื่อสุดยอด TOP VIP</h3>
              </div>

              {/* Top 3 */}
              <div className="space-y-3 mb-4">
                {VIP_RANKING.map((player) => {
                  const rankColors: Record<number, { bg: string; border: string; badge: string }> = {
                    1: { bg: 'rgba(212,175,55,0.12)', border: 'rgba(212,175,55,0.4)', badge: '#D4AF37' },
                    2: { bg: 'rgba(160,160,160,0.1)', border: 'rgba(180,180,180,0.3)', badge: '#aaa' },
                    3: { bg: 'rgba(180,90,30,0.1)', border: 'rgba(180,90,30,0.3)', badge: '#cd7f32' },
                  };
                  const c = rankColors[player.rank];
                  return (
                    <div key={player.rank} className="flex items-center gap-3 p-4 rounded-2xl"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                      {/* Rank badge */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-black text-base shrink-0"
                        style={{ background: c.badge, boxShadow: `0 0 12px ${c.badge}80` }}>
                        {player.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white truncate text-sm">{player.name}</p>
                        <p className="text-xs text-gray-400">Level {player.level} · ยอดเดิมพันสะสม {player.score}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-black text-sm" style={{ color: '#D4AF37' }}>{player.prize}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rank 4-100 collapsed */}
              <div className="p-4 rounded-2xl text-center"
                style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">อันดับ 4–100 · ติดต่อแอดมินเพื่อดูรายชื่อ</span>
                </div>
              </div>

              {/* CTA */}
              <a href="https://lin.ee/8bzIg5hL" target="_blank" rel="noreferrer noopener"
                className="btn-line mt-4 w-full py-3.5 text-sm no-underline">
                <MessageCircle className="w-5 h-5" /> สอบถามสิทธิ์ VIP กับแอดมิน
              </a>
              <p className="text-xs text-gray-600 text-center mt-2">*แสดงยอดรวมสะสมประจำเดือน และรับสิทธิพิเศษมากมาย</p>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section className="mb-14" id="promotions">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <Gift className="w-5 h-5" style={{ color: '#D4AF37' }} />
              </div>
              <h2 className="font-extrabold text-2xl md:text-3xl text-white tracking-wide section-title">โปรโมชันพิเศษ</h2>
            </div>
            <div className="flex gap-1.5 text-xs md:text-sm p-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                { key: 'ALL', label: 'ทั้งหมด', cls: 'tab-pill-active' },
                { key: 'POK9', label: 'POK9', cls: 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-md font-black' },
                { key: 'EZPOK', label: 'EZPOK', cls: 'bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md font-black' },
                { key: 'EZLOTTO', label: 'EZLOTTO', cls: 'tab-pill-active' },
              ].map((tab) => (
                <button key={tab.key} onClick={() => setActivePromoTab(tab.key)}
                  className={`px-4 py-2 rounded-full font-bold transition-all ${activePromoTab === tab.key ? tab.cls : 'tab-pill-inactive'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { key: 'POK9',    label: 'POK9',    src: '/pok9-promo1.webp', color: 'rgba(220,38,38,0.25)', badge: '#dc2626', badgeBorder: 'rgba(255,100,100,0.4)', bg: 'linear-gradient(180deg,#1a0505,#000)' },
              { key: 'EZPOK',   label: 'EZPOK',   src: '/por_ezlt.webp',    color: 'rgba(139,92,246,0.25)', badge: '#7c3aed', badgeBorder: 'rgba(167,139,250,0.4)', bg: 'linear-gradient(180deg,#0e0520,#000)' },
              { key: 'EZLOTTO', label: 'EZLOTTO', src: '/ezlt_pro.webp',    color: 'rgba(212,175,55,0.25)', badge: '#D4AF37', badgeBorder: 'rgba(255,228,77,0.5)',  bg: 'linear-gradient(180deg,#1a1300,#000)', textBlack: true },
            ].map((card) => (
              <a
                key={card.key}
                className={`snap-center shrink-0 w-[280px] md:w-[330px] rounded-3xl overflow-hidden group transition-all no-underline hover:-translate-y-2 ${activePromoTab === 'ALL' || activePromoTab === card.key ? 'block' : 'hidden'}`}
                href="https://lin.ee/kBYIyk1" target="_blank" rel="noreferrer"
                style={{ background: card.bg, border: `1px solid ${card.color}`, boxShadow: '0 12px 30px rgba(0,0,0,0.7)' }}
              >
                <div className="w-full aspect-square bg-[#111] relative overflow-hidden">
                  <span className={`absolute top-3 left-3 z-10 ${card.textBlack ? 'text-black' : 'text-white'} text-xs font-black px-3 py-1 rounded-lg shadow-lg`}
                    style={{ background: card.badge, border: `1px solid ${card.badgeBorder}` }}>
                    {card.label}
                  </span>
                  <img src={card.src} alt={`โปรโมชั่น ${card.label}`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">*โปรโมชั่นทุกรายการมีเงื่อนไข กรุณาติดต่อแอดมินเพื่อตรวจสอบ</p>
        </section>

        {/* Why EZPOK168 */}
        <article className="mb-14 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden glass-card flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 pb-5 w-full leading-snug relative z-10"
            style={{ background: 'linear-gradient(135deg, #FDF5E6, #FFDF00, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            ทำไมต้องเลือก EZPOK168?
          </h2>
          {/* FIX MARKETING: เปลี่ยน tone จาก sell → inform */}
          <p className="text-base md:text-lg text-gray-300 mb-8 relative z-10 font-medium leading-loose">
            EZPOK168 เป็นศูนย์รวมข้อมูล <strong>ป๊อกเด้งออนไลน์ 2 ใบเปิด</strong> กติกา วิธีเล่น และ<strong>บาคาร่าเว็บตรง</strong>
            ไม่ผ่านเอเย่นต์ พร้อมระบบ<strong>ตรวจหวยออนไลน์</strong>ครบวงจร
            มีแอดมินดูแลทุกการทำรายการ กรุณาศึกษาเงื่อนไขก่อนเริ่มใช้งาน
          </p>
          {/* Trust signals */}
          <div className="flex flex-wrap gap-3 relative z-10">
            {['ระบบ SSL', 'แอดมิน 24 ชม.', 'แสดงเงื่อนไขโปรก่อนสมัคร', 'มีระบบฝากถอนออโต้'].map((t) => (
              <span key={t} className="trust-badge"><CheckCircle className="w-3 h-3" />{t}</span>
            ))}
          </div>
        </article>

        {/* Knowledge Section */}
        <section className="mb-14 p-8 md:p-12 rounded-[3rem] mx-auto w-full relative overflow-hidden"
          id="knowledge-seo"
          style={{ background: 'linear-gradient(160deg, #1a0525, #07030F)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 20px 50px rgba(100,30,160,0.1)' }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(168,85,247,0.08)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(212,175,55,0.05)' }} />

          <div className="flex items-center justify-between mb-10 pb-5 relative z-10" style={{ borderBottom: '1px solid rgba(139,92,246,0.25)' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}>
                <ScrollText className="w-5 h-5 text-purple-400" />
              </div>
              {/* FIX MARKETING: เปลี่ยนหัวข้อจาก "สอนเล่น" → "กติกาและวิธีเล่น" */}
              <h2 className="font-extrabold text-2xl md:text-4xl text-white tracking-wide">กติกาและวิธีเล่น คาสิโน &amp; หวย</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="p-8 md:p-10 rounded-[2rem] transition-all duration-300 group flex flex-col hover:-translate-y-2"
              style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(212,175,55,0.15)', boxShadow: '0 12px 36px rgba(0,0,0,0.8)' }}>
              <h3 className="font-extrabold text-2xl md:text-3xl mb-5 flex items-center gap-3" style={{ color: '#D4AF37' }}>
                <Trophy className="w-8 h-8" /> ป๊อกเด้ง &amp; บาคาร่าเว็บตรง
              </h3>
              {/* FIX MARKETING: เปลี่ยนจาก "สูตรทำเงิน" → "กติกาและวิธีเล่น" */}
              <p className="text-sm md:text-base text-gray-400 mb-8 flex-1 leading-relaxed font-medium">
                รวม <strong>กติกาป๊อกเด้ง 2 ใบเปิด</strong> วิธีเล่นเจ้า-ขา ความแตกต่างของแต่ละตำแหน่ง
                พร้อมข้อมูล <strong>บาคาร่าเว็บตรง</strong> เงื่อนไขการใช้งาน และคำศัพท์ที่ควรรู้
              </p>
              <Link href="/seo/pokdeng" className="btn-primary mt-auto w-full sm:w-auto self-start no-underline px-8 py-4 text-base">
                อ่านกติกาและวิธีเล่น <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 md:p-10 rounded-[2rem] transition-all duration-300 group flex flex-col hover:-translate-y-2"
              style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(220,38,38,0.15)', boxShadow: '0 12px 36px rgba(0,0,0,0.8)' }}>
              <h3 className="font-extrabold text-2xl md:text-3xl text-red-400 mb-5 flex items-center gap-3">
                <Gamepad2 className="w-8 h-8" /> แทงหวยออนไลน์
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-8 flex-1 leading-relaxed font-medium">
                ข้อมูลหวยรัฐบาล หวยลาวพัฒนา <strong>ไม่มีเลขอั้น จ่ายสูงสุดบาทละ 90</strong>
                ตรวจสอบเงื่อนไข วิธีแทง และสถิติที่นี่ก่อนตัดสินใจ
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/seo/thai-lottery"
                  className="flex items-center justify-between text-white px-6 py-4 rounded-2xl font-bold text-base transition-all no-underline group/btn hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #991b1b, #dc2626)', border: '1px solid rgba(255,100,100,0.3)', boxShadow: '0 6px 20px rgba(220,38,38,0.2)' }}>
                  <span className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-red-200" /> หวยรัฐบาลไทย</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
                <Link href="/seo/lao-lottery"
                  className="flex items-center justify-between text-white px-6 py-4 rounded-2xl font-bold text-base transition-all no-underline group/btn hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #5b21b6, #7c3aed)', border: '1px solid rgba(167,139,250,0.3)', boxShadow: '0 6px 20px rgba(124,58,237,0.2)' }}>
                  <span className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-purple-200" /> หวยลาวพัฒนา</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 mt-10 p-8 md:p-12 rounded-[3rem] relative z-10 flex flex-col items-center md:items-start"
          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 pb-5 w-full" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}>
              <HelpCircle className="w-5 h-5" style={{ color: '#D4AF37' }} />
            </div>
            <h2 className="font-extrabold text-2xl md:text-3xl text-white tracking-wide text-center md:text-left section-title">คำถามที่พบบ่อย (FAQ)</h2>
          </div>

          <div className="space-y-4 text-sm md:text-base w-full max-w-4xl mx-auto">
            {[
              {
                q: <span><strong>ป๊อกเด้ง 2 ใบเปิด</strong>คืออะไร แตกต่างจากทั่วไปอย่างไร?</span>,
                a: 'ป๊อกเด้ง 2 ใบเปิด คือรูปแบบที่แจกไพ่ให้เปิดเผยพร้อมกันทั้ง 2 ใบ ทำให้ผู้เล่นเห็นไพ่ของฝั่งตรงข้ามและตัดสินใจได้ดีขึ้น มีตำแหน่งเจ้าและขาที่บทบาทต่างกัน',
                open: true,
              },
              {
                q: <span>เล่น <strong>เจ้าและขา</strong> ต่างกันอย่างไร?</span>,
                a: 'เจ้าคือฝ่ายที่รับเงินพนันและรับความเสี่ยงของทุกมือ ขาคือผู้เล่นที่วางเดิมพันกับเจ้า ความรับผิดชอบและขอบเขตการแพ้-ชนะแตกต่างกัน ควรศึกษากติกาละเอียดก่อนเลือกตำแหน่ง',
                open: false,
              },
              {
                q: <span><strong>แทงหวยออนไลน์</strong> มีเงื่อนไขอย่างไร?</span>,
                a: 'การแทงหวยออนไลน์มีเงื่อนไขอัตราการจ่าย ขั้นต่ำในการแทง และข้อจำกัดบางประการ กรุณาติดต่อแอดมินเพื่อรับข้อมูลเงื่อนไขที่ครบถ้วนและถูกต้องก่อนทำรายการ',
                open: false,
              },
              {
                q: <span>ติดต่อ <strong>แอดมิน</strong> ได้ทางไหน?</span>,
                a: 'ติดต่อแอดมินผ่าน LINE Official ได้ตลอด 24 ชม. คลิกที่ปุ่ม "ติดต่อแอดมิน" ในหน้านี้ หรือเพิ่มเพื่อนผ่าน LINE @ezpok168',
                open: false,
              },
            ].map((item, i) => (
              <details key={i} className="cursor-pointer group rounded-2xl overflow-hidden" open={item.open}
                style={{ background: 'linear-gradient(160deg, rgba(18,10,35,0.9), rgba(5,3,14,0.95))', border: '1px solid rgba(255,255,255,0.07)' }}>
                <summary className="font-bold text-gray-200 flex justify-center md:justify-start items-center outline-none text-base md:text-lg px-6 py-5 hover:bg-white/[0.02] transition-colors list-none">
                  {item.q}
                </summary>
                <p className="px-6 pb-5 text-gray-400 leading-relaxed font-medium text-center md:text-left pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FIX MARKETING: Responsible Play Section — เพิ่มใหม่ */}
        <section className="mb-12 p-6 md:p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <h3 className="font-bold text-base text-gray-300">การเล่นอย่างรับผิดชอบ</h3>
          </div>
          <div className="responsible-notice">
            <Info className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
            <p>
              การพนันมีความเสี่ยง โปรดเล่นด้วยงบประมาณที่รับผิดชอบได้เท่านั้น ไม่ควรใช้เงินจำเป็น หรือเงินกู้ยืม
              กำหนดวงเงินและเวลาในการเล่น หากรู้สึกว่าการพนันกระทบชีวิตประจำวัน ควรขอความช่วยเหลือ
              ·{' '}
              <strong>บริการสำหรับผู้มีอายุ 20 ปีขึ้นไปเท่านั้น</strong>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 w-full flex flex-col items-center" style={{ background: '#040108', borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-black mb-3 text-sm md:text-base tracking-widest" style={{ color: '#D4AF37' }}>EZPOK168 &amp; EZLOTTO</p>
          <p className="text-gray-600 text-[10px] md:text-xs leading-loose font-medium">
            &copy; 2026 EZPOK168.NET ศูนย์รวมข้อมูล <strong>ป๊อกเด้งออนไลน์</strong> กติกา วิธีเล่น{' '}
            <strong>บาคาร่าเว็บตรง</strong> และ <strong>ตรวจหวยออนไลน์</strong>
            <br className="hidden md:block" />
            มีแอดมินดูแล 24 ชม. กรุณาศึกษาเงื่อนไขก่อนใช้งาน
          </p>
        </div>
      </footer>
    </div>
  );
}
