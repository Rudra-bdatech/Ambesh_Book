import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ShoppingBag, Menu, X, ShieldCheck, Heart, User, Award, ArrowUpRight, Star } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenSampleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenSampleModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Sparkles },
    { id: 'pillars', label: '10 Pillars', icon: BookOpen },
    { id: 'about', label: 'Author', icon: User },
    { id: 'wall-of-love', label: 'Wall of Love', icon: Heart },
    { id: 'quiz', label: 'AI Scorecard', icon: Award },
    { id: 'copyright', label: 'Copyright', icon: ShieldCheck },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6'
              : 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 py-3 px-4 sm:px-6'
          } flex items-center justify-between gap-4`}
        >
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
          >
            {/* Crisp 3D Book Icon Thumbnail */}
            <div className="relative w-8 h-10 rounded-lg overflow-hidden shadow-md shadow-cyan-500/20 border border-cyan-400/40 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/assets/Kindle-cover-1600-x-2500-px-1.jpg"
                alt="Accelerate with AI Book"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                  Accelerate with AI
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  <Star className="w-2.5 h-2.5 fill-amber-400" />
                  Bestseller
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                By Ambesh Tiwari
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 p-1 rounded-xl border border-slate-800/80">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSampleModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Read Excerpt</span>
            </button>

            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
              <span>Get on Amazon</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg shadow flex items-center gap-1 whitespace-nowrap"
            >
              <ShoppingBag className="w-3 h-3" />
              Buy
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-3">
            <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider px-3 mb-2">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-900/60 border border-slate-800 text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-xs text-slate-500">→</span>
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-sm bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Read Free Sample Chapter
            </button>
            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-xl flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Get Copy on Amazon
            </a>
          </div>
        </div>
      )}
    </>
  );
};
