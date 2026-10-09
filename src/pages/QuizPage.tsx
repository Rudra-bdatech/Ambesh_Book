import React from 'react';
import { AiReadinessQuiz } from '../components/AiReadinessQuiz';
import { Zap, BookOpen, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface QuizPageProps {
  onOpenSampleModal: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="space-y-0 text-ink transition-colors">
      
      {/* SECTION 1: Assessment Hero (Sand / Grid / Vignette) */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background light-mode grid and aurora */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <Zap className="w-3.5 h-3.5 text-accent" /> Executive Diagnostic
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
            AI Business Readiness & <span className="text-gradient-brand">ROI Scorecard</span>
          </h1>

          <p className="font-serif text-xl sm:text-2xl italic text-ink-soft max-w-2xl mx-auto">
            Benchmark your operational maturity and uncover hidden automation leverage.
          </p>

          <p className="text-ink-soft text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Answer 4 strategic questions to receive your personalized organizational score, immediate ROI roadmap, and tailored book chapter recommendations.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-ink-muted font-mono uppercase tracking-wider">
            <div className="flex items-center gap-1.5 bg-canvas/80 dark:bg-sand/30 border border-rule px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Instant Diagnostic</span>
            </div>
            <div className="flex items-center gap-1.5 bg-canvas/80 dark:bg-sand/30 border border-rule px-3.5 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Personalized Roadmap</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Diagnostic Assessment Tool (Pure White Canvas) */}
      <AiReadinessQuiz
        bgVariant="canvas"
        hideHeading={true}
        onOpenSampleModal={onOpenSampleModal}
      />

      {/* SECTION 3: Why Readiness Benchmarking Matters (Sand / Grid / Vignette) */}
      <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
        {/* Alternating light-mode grid */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="eyebrow eyebrow-indigo">Assessment Framework</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              The Three AI Maturity Profiles
            </h2>
            <p className="text-ink-soft text-base sm:text-lg">
              Every organization moves through distinct adoption phases. Identifying your current stage prevents costly premature automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: 'Level 01',
                title: 'AI Explorer',
                range: 'Score: 4 – 6 Points',
                desc: 'Ad-hoc individual experimentation. Primary objective is establishing verified prompt frameworks and standardizing tool licenses.',
                focus: 'Chapters 1 & 2'
              },
              {
                tier: 'Level 02',
                title: 'Strategic Builder',
                range: 'Score: 7 – 11 Points',
                desc: 'Departmental AI adoption. Primary objective is automating cross-team workflows, CX support triage, and custom RAG retrieval.',
                focus: 'Chapters 3 & 7'
              },
              {
                tier: 'Level 03',
                title: 'Autonomous Scale',
                range: 'Score: 12 – 16 Points',
                desc: 'Enterprise leverage. Primary objective is deploying multi-agent swarms, custom fine-tuning, and robust security governance.',
                focus: 'Chapters 5 & 10'
              }
            ].map((profile, idx) => (
              <div
                key={idx}
                className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      {profile.tier}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-sand/70 dark:bg-sand/30 border border-rule text-ink-muted">
                      {profile.range}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-ink">
                    {profile.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-soft mt-3 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-rule flex items-center justify-between">
                  <span className="text-[11px] text-ink-muted font-medium">Recommended Focus:</span>
                  <span className="text-xs font-bold text-accent">{profile.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Book CTA Bar (Pure White Canvas) */}
      <section className="py-16 md:py-20 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl text-center space-y-6">
          <div className="rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 sm:p-12 shadow-soft space-y-4">
            <span className="eyebrow eyebrow-indigo">Take Action Today</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Accelerate Your Team's AI Maturity
            </h3>
            <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto">
              Get the complete playbook with 10 strategic pillars, 50+ implementation frameworks, and real-world case studies.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-all shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Read Chapter 1</span>
              </button>
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy Complete Book</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
