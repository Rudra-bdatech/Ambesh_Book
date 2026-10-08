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

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenSampleModal }) => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Foundations', 'Tooling', 'Operations', 'Strategy', 'Analytics', 'Governance', 'Scale'];

  const filteredPillars = activeCategory === 'All'
    ? BOOK_PILLARS
    : BOOK_PILLARS.filter(p => p.category === activeCategory);

  const selectedPillar = BOOK_PILLARS[selectedPillarIndex];
  const CurrentIcon = ICON_MAP[selectedPillar.iconName] || BookOpen;

  const handleCopyFramework = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-600/10 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Curriculum & Strategic Roadmap
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            10 Things This Book <span className="text-gradient-cyan">Will Teach You</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From foundational AI mental models to advanced agent orchestration, explore the complete 10-part executive toolkit designed for exponential business scale.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dual Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Pillars List */}
          <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredPillars.map((pillar) => {
              const isSelected = selectedPillar.number === pillar.number;

              return (
                <button
                  key={pillar.number}
                  onClick={() => setSelectedPillarIndex(pillar.number - 1)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-3.5 group border ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/40'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                    }`}
                  >
                    {pillar.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4
                        className={`text-sm font-bold truncate transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-white group-hover:text-slate-100'
                        }`}
                      >
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-800/60 shrink-0 ml-2">
                        {pillar.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Pillar Focus Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl space-y-6">
              
              {/* Header inside Card */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Chapter {selectedPillar.number} Breakdown
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {selectedPillar.title}
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                  {selectedPillar.category}
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Executive Overview
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {selectedPillar.fullDesc}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Core Implementation Takeaways
                </h4>
                <div className="space-y-2.5">
                  {selectedPillar.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                        {takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Prompt or Framework Box */}
              {selectedPillar.samplePromptOrFramework && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Executive Tool & Template
                    </span>
                    <button
                      onClick={() => handleCopyFramework(selectedPillar.samplePromptOrFramework!)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      {copiedPrompt ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300 border border-slate-800 overflow-x-auto">
                    {selectedPillar.samplePromptOrFramework}
                  </div>
                </div>
              )}

              {/* Card Footer Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <button
                  onClick={onOpenSampleModal}
                  className="w-full sm:w-auto text-xs font-semibold text-cyan-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Free Chapter Excerpt
                </button>

                <a
                  href={BOOK_INFO.kindleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Unlock Full Chapter on Amazon</span>
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
