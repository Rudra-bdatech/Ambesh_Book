import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ShoppingBag, Award, ArrowRight, User, Heart, ShieldCheck } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:px-8 md:py-4 pointer-events-none">
      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 -z-10 bg-black/30 dark:bg-black/60 backdrop-blur-[8px] pointer-events-auto cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div
        style={{
          backgroundImage: mobileMenuOpen
            ? "var(--header-bg-open)"
            : isScrolled
              ? "var(--header-bg-scrolled)"
              : "var(--header-bg-top)",
          boxShadow: isScrolled ? "var(--header-shadow)" : "var(--header-shadow-top)",
        }}
        className={`relative z-10 mx-auto w-full pointer-events-auto border transition-all duration-300 backdrop-blur-[28px] [-webkit-backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] [backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] ${
          mobileMenuOpen
            ? "max-w-2xl rounded-[2rem] p-5 border-rule/60 dark:border-white/20"
            : isScrolled
              ? "max-w-6xl rounded-full py-2 px-3 min-[400px]:px-4 md:px-6 border-rule/50 dark:border-white/15"
              : "max-w-7xl rounded-full py-3 px-4 min-[400px]:px-6 md:px-8 border-rule/40 dark:border-white/10"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
          >
            <img
              src="/atlogo.jpeg"
              alt="Ambesh Tiwari logo"
              className={`h-9 w-9 shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105 shadow-sm ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm md:text-base font-bold tracking-tight text-ink">
                  Accelerate with AI
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 rounded-full border border-rule px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent/10">
                  Bestseller
                </span>
              </div>
              <span className="text-[11px] text-ink-muted hidden sm:inline-block">
                By Ambesh Tiwari
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-lift"
                      : "text-ink-soft hover:text-ink hover:bg-accent/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Excerpt CTA */}
            <button
              onClick={onOpenSampleModal}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-rule bg-canvas/80 px-3.5 py-1.5 text-xs font-semibold text-ink-soft transition-all hover:border-ink/40 hover:text-ink dark:border-white/15 dark:text-[#bbe0fa] dark:hover:border-accent"
            >
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span>Read Excerpt</span>
            </button>

            {/* Amazon CTA Button */}
            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-all"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span className="hidden min-[480px]:inline">Get on</span> Amazon
              <ArrowRight className="h-3 w-3" />
            </a>

            {/* Theme Switcher Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule text-ink hover:bg-accent/10 lg:hidden dark:border-white/15"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="18" height="18" viewBox="0 0 23 23">
                <motion.path
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  animate={mobileMenuOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  d="M 2 9.423 L 20 9.423"
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  animate={mobileMenuOpen ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 20 16.346" }}
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden pt-4 mt-4 border-t border-rule/40 dark:border-white/10"
            >
              <div className="grid grid-cols-2 gap-2 pb-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-2 rounded-xl p-2.5 text-xs font-semibold text-left transition-all ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-ink-soft hover:text-ink hover:bg-accent/10"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-t border-rule/30 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSampleModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-rule text-xs font-semibold text-ink hover:bg-accent/10"
                >
                  <BookOpen className="h-4 w-4 text-accent" />
                  Read Free Chapter
                </button>
                <a
                  href={BOOK_INFO.kindleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Order on Amazon
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
