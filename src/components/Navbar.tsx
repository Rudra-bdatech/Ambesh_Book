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

function AmazonIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-label="Amazon" xmlns="http://www.w3.org/2000/svg">
      <path d="M257.2 162.7c-48.7 0-75.9 18.9-92.7 44.2-3.6 5.3-2.4 12.3 2.7 16.3l27.1 20.7c5.1 3.9 12.4 3.1 16.5-1.9 11.4-13.8 24.3-23.7 47.7-23.7 24.3 0 41.7 13.8 41.7 34.2v6.3c-15.6-3-34.8-4.8-56.7-4.8-62.7 0-100.2 29.4-100.2 74.4 0 43.5 33.3 69.3 75.9 69.3 34.2 0 57.6-13.8 71.7-32.1h2.1v24.6c0 6.6 5.4 12 12 12h34.8c6.6 0 12-5.4 12-12V245.4c0-54.6-40.8-82.7-94.9-82.7zm16.5 137.4c0 36.3-24.9 52.8-48.9 52.8-21.3 0-36.9-12.9-36.9-34.2 0-27.6 22.8-39.6 57.6-39.6 9.6 0 19.2 1.2 28.2 3.3v17.7zm158.4 100.5C401.3 432.2 329.8 464 246.3 464c-87.3 0-165.6-34.8-222-92.4-4.8-4.8-1.5-13.2 5.1-10.2 66.9 30.6 142.2 48.6 221.7 48.6 70.8 0 137.4-14.7 186.9-42.3 7.2-4.2 14.1 3.9 8.7 9.6l-14.6 13.3zm21.3-33.3c-5.7-7.2-27.9-3.3-41.1-1.8-3.9.6-5.4-3.6-2.4-6 20.7-16.2 53.4-11.4 58.5-4.8 5.1 6.9-2.1 39-21.3 56.4-3.3 3-7.5.9-5.7-2.7 6.6-12.9 17.7-33.9 12-41.1z"/>
    </svg>
  );
}

export function Navbar({ activePage, setActivePage, onOpenSampleModal: _onOpenSampleModal }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setScrolled(window.scrollY > 40);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setOpen(false);
    window.location.hash = id;
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
          transform: "translateZ(0)",
          backgroundImage: open
            ? "var(--header-bg-open)"
            : scrolled
              ? "var(--header-bg-scrolled)"
              : "var(--header-bg-top)",
          boxShadow: scrolled ? "var(--header-shadow)" : "var(--header-shadow-top)",
        }}
        className={`relative z-10 mx-auto w-full pointer-events-auto border transition-[border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)_saturate(180%)_brightness(1.05)] [backdrop-filter:blur(20px)_saturate(180%)_brightness(1.05)] ${open
            ? "max-w-2xl rounded-[2.25rem] p-5 border-white/40"
            : scrolled
              ? "max-w-5xl rounded-full py-2 px-3.5 min-[400px]:px-4 md:px-6 border-white/40"
              : "max-w-[70rem] rounded-full py-3.5 px-4 min-[400px]:px-6 md:px-8 border-white/25"
          }`}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 28,
          mass: 0.7
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0"
          >
            <img
              src="/atlogo.jpeg"
              alt="Ambesh Tiwari logo"
              className="h-9 w-9 shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
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
                className={`whitespace-nowrap rounded-full border border-transparent px-3 py-1.5 lg:px-3.5 lg:py-2 text-[13px] font-medium transition-colors duration-200 ${
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
              <motion.a
                layout
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Get on Amazon"
                title="Get on Amazon"
                className={`btn-premium group inline-flex items-center justify-center rounded-full font-semibold ${
                  scrolled
                    ? "h-9 w-9 p-0 shadow-sm"
                    : "h-10 px-5 text-xs shadow-md"
                }`}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 28,
                  mass: 0.7
                }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {scrolled ? (
                    <motion.span
                      key="amazon-icon"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="relative z-10 flex items-center justify-center"
                    >
                      <AmazonIcon className="h-5.5 w-5.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="amazon-text"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="relative z-10 flex items-center gap-2 whitespace-nowrap"
                    >
                      <span>Get on Amazon</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
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
                      <span>Get on Amazon</span>
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
