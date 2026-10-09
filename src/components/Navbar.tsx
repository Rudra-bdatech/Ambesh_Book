import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

const nav = [
  { id: 'home', label: 'Overview', sub: 'Book summary' },
  { id: 'pillars', label: '10 Pillars', sub: 'Curriculum' },
  { id: 'about', label: 'About', sub: 'Who I am' },
  { id: 'wall-of-love', label: 'Wall of Love', sub: 'Reviews & Praise' },
  { id: 'quiz', label: 'AI Scorecard', sub: '60s test' },
  { id: 'copyright', label: 'Copyright', sub: 'Govt IP registered' },
] as const;

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenSampleModal: () => void;
}

export function Navbar({ activePage, setActivePage, onOpenSampleModal: _onOpenSampleModal }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setOpen(false);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:px-10 md:py-4 pointer-events-none">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-black/20 dark:bg-black/45 backdrop-blur-[8px] pointer-events-auto cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <motion.div
        layout
        style={{
          willChange: "width, max-width, padding",
          backgroundImage: open
            ? "var(--header-bg-open)"
            : scrolled
              ? "var(--header-bg-scrolled)"
              : "var(--header-bg-top)",
          boxShadow: scrolled ? "var(--header-shadow)" : "var(--header-shadow-top)",
        }}
        className={`relative z-10 mx-auto w-full pointer-events-auto border transition-[border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-[28px] [-webkit-backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] [backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] ${open
            ? "max-w-2xl rounded-[2.25rem] p-5 border-white/40"
            : scrolled
              ? "max-w-4xl rounded-full py-2 px-3 min-[400px]:px-4 md:px-6 border-white/40"
              : "max-w-[70rem] rounded-full py-3.5 px-4 min-[400px]:px-6 md:px-8 border-white/25"
          }`}
        transition={{
          duration: 0.32,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <img
              src="/atlogo.jpeg"
              alt="Ambesh Tiwari logo"
              className={`h-9 w-9 shrink-0 rounded-lg object-contain transition-transform duration-500 group-hover:scale-105 ${scrolled ? "scale-85" : "scale-100"
                }`}
            />
            <span className="font-display text-sm font-bold tracking-tight text-ink md:text-base whitespace-nowrap">
              Ambesh Tiwari
            </span>
          </button>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap rounded-full border border-transparent px-3 py-1.5 lg:px-3.5 lg:py-2 text-[13px] font-medium transition-all duration-300 ${
                  activePage === item.id
                    ? "bg-accent text-accent-foreground shadow-lift font-semibold"
                    : "text-ink-soft hover:text-ink hover:bg-accent/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <div className="hidden lg:block">
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noreferrer"
                className="btn-premium group inline-flex h-10 px-5 text-xs items-center gap-2 rounded-full font-semibold transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get on Amazon
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
            <motion.button
              type="button"
              onClick={() => {
                setOpen((v) => !v);
                if (typeof navigator !== "undefined" && navigator.vibrate) {
                  navigator.vibrate(6);
                }
              }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="rounded-full p-1.5 text-ink transition-colors hover:bg-sand/60 lg:hidden flex items-center justify-center w-8 h-8"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 23 23" className="overflow-visible">
                <motion.path
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                  }}
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M 2 9.423 L 20 9.423"
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  fill="transparent"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                  }}
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden max-h-[calc(100dvh-120px)]"
            >
              <div className="pt-6">
                <motion.nav
                  initial="closed"
                  animate={open ? "open" : "closed"}
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.045, delayChildren: 0.06 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.02, staggerDirection: -1 }
                    }
                  }}
                  className="grid grid-cols-2 gap-3 py-1.5 [perspective:800px]"
                >
                  {nav.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          rotateX: 0,
                          scale: 1,
                          transition: { type: "spring", stiffness: 350, damping: 25, mass: 0.9 }
                        },
                        closed: {
                          y: -20,
                          opacity: 0,
                          rotateX: -15,
                          scale: 0.95,
                          transition: { duration: 0.15, ease: "easeIn" }
                        }
                      }}
                      className="origin-top"
                      whileTap={{ scale: 0.95 }}
                      onAnimationStart={(definition) => {
                        if (definition === "open" && typeof navigator !== "undefined" && navigator.vibrate) {
                          const duration = Math.max(3, 18 - index * 2.5);
                          navigator.vibrate(duration);
                        }
                      }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`rounded-3xl border p-3.5 flex flex-col items-start justify-center gap-0.5 transition-colors text-left w-full ${
                          activePage === item.id
                            ? "bg-accent text-accent-foreground border-accent shadow-lift font-semibold"
                            : "text-ink bg-black/[0.024] dark:bg-white/[0.03] border-rule/70 dark:border-white/[0.06] hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
                        }`}
                      >
                        <span className="text-[14px] font-bold tracking-tight">
                          {item.label}
                        </span>
                        <span className="text-[11px] opacity-60 font-normal">
                          {item.sub}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 350, damping: 25, mass: 0.9 }
                      },
                      closed: {
                        y: -20,
                        opacity: 0,
                        rotateX: -15,
                        scale: 0.95,
                        transition: { duration: 0.15, ease: "easeIn" }
                      }
                    }}
                    className="col-span-2 mt-2 flex justify-center origin-top"
                    whileTap={{ scale: 0.97 }}
                    onAnimationStart={(definition) => {
                      if (definition === "open" && typeof navigator !== "undefined" && navigator.vibrate) {
                        navigator.vibrate(3);
                      }
                    }}
                  >
                    <a
                      href={BOOK_INFO.kindleLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="btn-premium w-full justify-center py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                    >
                      Get on Amazon
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
