import React from 'react';
import { PillarsSection } from '../components/PillarsSection';
import {
  BookOpen,
  ShoppingBag,
  ArrowRight,
  Layers,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface CurriculumPageProps {
  onOpenSampleModal: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="space-y-0 text-ink transition-colors">
      
      {/* SECTION 1: Page Hero (Sand / Grid / Vignette) */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background light-mode grid and aurora */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <BookOpen className="w-3.5 h-3.5" /> Complete 10-Part Master Curriculum
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
            The Executive AI <span className="text-gradient-brand">Curriculum & Blueprint</span>
          </h1>

          <p className="font-serif text-xl sm:text-2xl italic text-ink-soft max-w-3xl mx-auto">
            A battle-tested strategic roadmap from manual processes to autonomous leverage.
          </p>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Master the entire spectrum of modern AI deployment: from mental models and tool audits to customer support agents, data intelligence, and scalable enterprise operations.
          </p>

          {/* Quick Pillar Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
            {[
              { num: '10', label: 'Strategic Pillars', icon: Layers },
              { num: '50+', label: 'Ready Prompts & SOPs', icon: Zap },
              { num: '3', label: 'Maturity Tiers', icon: TrendingUp },
              { num: '100%', label: 'Practical Execution', icon: Award },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-canvas/70 dark:bg-sand/20 border border-rule shadow-sm text-center backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-1.5 font-display font-black text-lg sm:text-xl text-accent">
                  <stat.icon className="w-4 h-4 text-accent" />
                  <span>{stat.num}</span>
                </div>
                <div className="text-[11px] font-medium text-ink-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenSampleModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule bg-canvas text-ink font-semibold text-xs hover:border-accent hover:text-accent transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Read Chapter 1 Excerpt</span>
            </button>

            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Complete Book on Amazon</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Pillars Component (Pure White Canvas) */}
      <PillarsSection bgVariant="canvas" onOpenSampleModal={onOpenSampleModal} />

      {/* SECTION 3: The 3 Transformation Tiers (Sand / Grid / Vignette) */}
      <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
        {/* Alternating light-mode grid */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <Workflow className="w-3.5 h-3.5" /> Strategic Progression
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              How The 10 Pillars <span className="text-gradient-brand">Compound Together</span>
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Accelerate with AI is structured in three progressive transformation stages so teams build reliable foundations before scaling autonomous systems.
            </p>
          </div>

          {/* 3 Tier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stage: 'Tier 01',
                title: 'Foundations & Readiness',
                pillars: 'Pillars 01 – 03',
                tagline: 'Establish mental models & audited tool stacks',
                desc: 'Demystifies LLMs, eliminates hype, audits tech debt, and equips teams with reproducible prompt frameworks to prevent ad-hoc tool fragmentation.',
                topics: [
                  'Strategic Clarity & Hype Filtering',
                  'Stack Evaluation & Vendor Audits',
                  'Zero-Shot & Few-Shot Prompt Systems'
                ]
              },
              {
                stage: 'Tier 02',
                title: 'Workflow & CX Automation',
                pillars: 'Pillars 04 – 07',
                tagline: 'Connect processes & multiply team capacity',
                desc: 'Transforms isolated human effort into automated workflows. Implements 24/7 intelligent customer response loops and embeds custom RAG retrieval.',
                topics: [
                  'Operations & Repetitive Task Elimination',
                  '24/7 AI Customer Support Triage',
                  'Data-Driven Predictive Forecasting',
                  'Departmental Knowledge Retrieval'
                ]
              },
              {
                stage: 'Tier 03',
                title: 'Autonomous Scale & Leverage',
                pillars: 'Pillars 08 – 10',
                tagline: 'Autonomous multi-agent orchestration',
                desc: 'Builds self-directing agent swarms, institutes enterprise security & compliance safeguards, and shifts organizational DNA toward AI-native leverage.',
                topics: [
                  'Multi-Agent System Architectures',
                  'Governance, Privacy & Red Teaming',
                  'Continuous Organizational AI Adoption'
                ]
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      {tier.stage}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-sand/70 dark:bg-sand/30 border border-rule text-ink-muted">
                      {tier.pillars}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                    {tier.title}
                  </h3>

                  <p className="font-serif italic text-sm text-ink-soft mt-1">
                    {tier.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-soft mt-4 leading-relaxed">
                    {tier.desc}
                  </p>

                  <div className="space-y-2 pt-6 mt-6 border-t border-rule">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink-muted">
                      Key Competencies Built:
                    </p>
                    {tier.topics.map((topic, tidx) => (
                      <div key={tidx} className="flex items-center gap-2 text-xs text-ink font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Final Book CTA & Reader Action (Pure White Canvas) */}
      <section className="py-16 md:py-20 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl">
          <div className="rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 sm:p-12 shadow-soft text-center space-y-6">
            <span className="eyebrow eyebrow-indigo">Ready to Implement?</span>
            
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-ink tracking-tight max-w-2xl mx-auto">
              Get the Complete 10 Pillars Handbook on Amazon
            </h3>

            <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Available instantly on Kindle eBook and worldwide in premium paperback format. Includes free access to downloadable prompt templates.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Read Free Chapter 1 Excerpt</span>
              </button>

              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order on Amazon</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
