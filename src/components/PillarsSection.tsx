import React, { useState } from 'react';
import {
  TrendingUp,
  Cpu,
  Users,
  ShieldAlert,
  Sparkles,
  Briefcase,
  Compass,
  BarChart3,
  ShieldCheck,
  Rocket,
  ChevronRight,
  CheckCircle,
  Copy,
  Check,
  BookOpen
} from 'lucide-react';
import { BOOK_PILLARS, BOOK_INFO } from '../data/bookData';

interface PillarsSectionProps {
  onOpenSampleModal: () => void;
  bgVariant?: 'grid' | 'canvas';
  hideHeading?: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  Cpu,
  Users,
  ShieldAlert,
  Sparkles,
  Briefcase,
  Compass,
  BarChart3,
  ShieldCheck,
  Rocket
};

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onOpenSampleModal,
  bgVariant = 'grid',
  hideHeading = false,
}) => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Foundations', 'Tooling', 'Operations', 'Strategy', 'Analytics', 'Governance', 'Scale'];

  const filteredPillars = activeCategory === 'All'
    ? BOOK_PILLARS
    : BOOK_PILLARS.filter(p => p.category === activeCategory);

  const selectedPillar = BOOK_PILLARS[selectedPillarIndex] || BOOK_PILLARS[0];
  const CurrentIcon = ICON_MAP[selectedPillar.iconName] || BookOpen;

  const handleCopyFramework = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const isGrid = bgVariant === 'grid';

  return (
    <section
      id="pillars"
      className={`py-20 md:py-24 relative isolate overflow-hidden transition-colors ${
        isGrid
          ? 'bg-canvas bg-premium-side-gradient'
          : 'bg-canvas border-y border-rule'
      }`}
    >
      {/* Alternating light-mode grid */}
      {isGrid && (
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
      )}

      <div className="container-edit relative">
        
        {/* Section Heading */}
        {!hideHeading && (
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <Sparkles className="w-3.5 h-3.5" /> 10 Core Pillars & Blueprint
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            What You'll <span className="text-gradient-brand">Master in This Book</span>
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
            From foundational AI mental models to advanced workflow automation, explore the complete 10-part executive blueprint designed for exponential business scale.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white font-bold shadow-soft'
                    : 'bg-sand/60 dark:bg-sand/30 text-ink-muted border border-rule hover:text-ink hover:border-accent/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        )}

        {/* Dual Column Interactive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Pillars List */}
          <div className="lg:col-span-5 space-y-3 max-h-[660px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredPillars.map((pillar) => {
              const isSelected = selectedPillar.number === pillar.number;

              return (
                <button
                  key={pillar.number}
                  onClick={() => setSelectedPillarIndex(pillar.number - 1)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-3.5 group border ${
                    isSelected
                      ? 'bg-sand/70 dark:bg-sand/40 border-accent shadow-soft'
                      : 'bg-sand/30 dark:bg-sand/15 border-rule hover:bg-sand/60 hover:border-rule/80'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isSelected
                        ? 'bg-accent text-white font-black shadow-sm'
                        : 'bg-sand dark:bg-sand/60 text-ink-muted group-hover:text-ink'
                    }`}
                  >
                    {pillar.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4
                        className={`text-sm font-bold truncate transition-colors ${
                          isSelected ? 'text-accent' : 'text-ink group-hover:text-accent'
                        }`}
                      >
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-mono font-semibold text-ink-muted uppercase px-2 py-0.5 rounded bg-sand border border-rule/50 shrink-0 ml-2">
                        {pillar.category}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-accent translate-x-1' : 'text-ink-muted group-hover:text-ink'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Pillar Deep-Dive Detail */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-6 sm:p-8 shadow-soft backdrop-blur-xl relative overflow-hidden">
              
              {/* Header inside card */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-rule">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shadow-md">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Pillar #{selectedPillar.number} • {selectedPillar.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink">
                      {selectedPillar.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Strategic Pillar</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                  {selectedPillar.fullDesc}
                </p>

                {/* Key Takeaways Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-ink-muted">
                    Key Executive Takeaways:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPillar.keyTakeaways.map((takeaway, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-sand/60 dark:bg-sand/30 border border-rule/70 text-xs text-ink"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Framework Prompt Box */}
                {selectedPillar.samplePromptOrFramework && (
                  <div className="pt-3">
                    <div className="rounded-2xl bg-sand/80 dark:bg-[#071123]/80 border border-rule p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-accent">
                          ⚡ Ready-to-Use Implementation Framework:
                        </span>
                        <button
                          onClick={() => handleCopyFramework(selectedPillar.samplePromptOrFramework || '')}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted hover:text-ink transition-colors px-2 py-1 rounded-lg border border-rule bg-canvas"
                        >
                          {copiedPrompt ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-emerald-500 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Framework</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-mono text-xs text-ink-soft bg-canvas/60 p-3 rounded-xl border border-rule/50 leading-relaxed overflow-x-auto">
                        {selectedPillar.samplePromptOrFramework}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions inside detail card */}
              <div className="pt-4 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={onOpenSampleModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Read Free Sample Chapter</span>
                </button>

                <a
                  href={BOOK_INFO.kindleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
                >
                  <span>Get Full Book on Amazon</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
