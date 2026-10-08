import React, { useState } from 'react';
import { ShoppingBag, BookOpen, Star, Sparkles, Flame, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface HeroSectionProps {
  onOpenSampleModal: () => void;
  onNavigateToQuiz: () => void;
  onNavigateToPillars?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSampleModal,
  onNavigateToQuiz
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Bestseller Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-lg shadow-amber-950/40 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Amazon #1 Bestseller in AI & Business</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Scale Your Business With the Exponential Power of{' '}
                <span className="text-gradient-cyan">Generative AI</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A strategically focused, battle-tested handbook by{' '}
                <strong className="text-white font-semibold">Ambesh Tiwari</strong>{' '}
                for founders, executives, and leaders to turn artificial intelligence into quantifiable revenue and automated efficiency.
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2 bg-slate-900/50 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">10 Strategic AI Frameworks</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/50 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Zero Technical Jargon</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/50 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Govt IP Registered</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" />
                <span>Get on Amazon Kindle & Paperback</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold text-sm sm:text-base shadow-lg shadow-cyan-950/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read Chapter 1 Free</span>
              </button>
            </div>

            {/* Interactive assessment callout pill */}
            <div className="pt-2">
              <button
                onClick={onNavigateToQuiz}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Take the 60-Second AI Business Readiness Scorecard</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">4.9 / 5.0</span>
                <span className="text-slate-500">(Amazon Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-semibold">15,000+</span> Leaders Impacted
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Govt of India Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Book Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative book-container max-w-sm sm:max-w-md w-full">
              
              {/* Glow background around book */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/25 to-purple-500/20 rounded-3xl blur-2xl -z-10 transform -rotate-3 scale-105" />

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -right-2 z-20 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-xl shadow-amber-500/30 flex items-center gap-1 border border-white/20 animate-bounce">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                <span>#1 BESTSELLER</span>
              </div>

              {/* 3D Book Visual Card */}
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-cyan-500/30 group ${
                  isHovered ? 'scale-105 shadow-cyan-500/30' : 'shadow-black/70'
                }`}
              >
                {/* Book Cover Image */}
                <div className="relative bg-slate-900 aspect-[1/1.5] w-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/assets/Kindle-cover-1600-x-2500-px-1.jpg"
                    alt="Accelerate with AI Book Cover by Ambesh Tiwari"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Light Reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />

                  {/* Book spine simulated shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Interactive Card Footer inside Book preview */}
                <div className="bg-slate-950/90 backdrop-blur-md p-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">Accelerate with AI</p>
                    <p className="text-[11px] text-cyan-400">By Ambesh Tiwari</p>
                  </div>
                  <button
                    onClick={onOpenSampleModal}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/40 transition-colors flex items-center gap-1"
                  >
                    <BookOpen className="w-3 h-3" />
                    Preview
                  </button>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 z-20 max-w-[280px] bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 p-3.5 rounded-2xl shadow-xl shadow-black/60 hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <img
                    src="/assets/Madhu-Datta.jpeg"
                    alt="Madhu C Dutta-Koehler"
                    className="w-7 h-7 rounded-full object-cover border border-cyan-400/50"
                  />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">Dr. Madhu Dutta-Koehler</p>
                    <p className="text-[9px] text-cyan-300 font-medium">PhD, MIT</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 italic line-clamp-2 leading-tight">
                  "Ambesh Tiwari’s takeaways are a fundamental stepping stone in this field."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
