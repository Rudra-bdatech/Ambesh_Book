import React from 'react';
import { ShoppingBag, BookOpen, Star, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';
import { Book3D } from './Book3D';

interface HeroSectionProps {
  onOpenSampleModal: () => void;
  onNavigateToQuiz: () => void;
  onNavigateToPillars?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSampleModal,
  onNavigateToQuiz
}) => {
  return (
    <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background light-mode grid and aurora */}
      <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-edit relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="eyebrow eyebrow-indigo">
                <BookOpen className="h-3.5 w-3.5" /> Amazon #1 Bestseller in AI & Business
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
              Accelerate <span className="text-gradient-brand">With AI.</span>
            </h1>

            {/* Subheading in Fraunces serif */}
            <p className="mt-5 font-serif text-2xl sm:text-3xl italic leading-snug text-ink-soft">
              A simple book for a complicated world.
            </p>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-soft max-w-xl mx-auto lg:mx-0">
              A strategically focused, battle-tested handbook by <strong className="text-ink font-semibold">Ambesh Tiwari</strong> for founders, executives, and leaders to turn artificial intelligence into quantifiable revenue, speed, and automated efficiency.
            </p>

            {/* Badge pill */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <span
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-rule px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10"
              >
                <Award className="h-3.5 w-3.5" /> #1 Amazon Bestseller
              </span>
              <span className="text-xs text-ink-muted">
                Available in Paperback & Kindle Worldwide
              </span>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 text-sm sm:text-base font-semibold transition-all shadow-lift"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Get on Amazon</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenSampleModal}
                className="inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-rule bg-canvas/90 px-6 text-sm sm:text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:bg-sand/60"
              >
                <BookOpen className="h-4 w-4 text-accent" />
                <span>Read Chapter 1 Free</span>
              </button>
            </div>

            {/* Interactive quiz prompt */}
            <div className="mt-5">
              <button
                onClick={onNavigateToQuiz}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-accent transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Take the 60-Second AI Business Readiness Scorecard</span>
                <span className="group-hover:translate-x-1 transition-transform text-accent">→</span>
              </button>
            </div>

            {/* Metrics & Social Proof */}
            <div className="mt-8 pt-6 border-t border-rule flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-ink-muted text-xs">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-ink text-sm">4.9 / 5.0</span>
                <span>(Reader Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-ink font-semibold">15,000+</span> Professionals Trained
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Govt of India Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Book Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <Book3D />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
