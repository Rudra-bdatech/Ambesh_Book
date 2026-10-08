import React from 'react';
import { PillarsSection } from '../components/PillarsSection';
import { BookOpen, ShoppingBag } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface CurriculumPageProps {
  onOpenSampleModal: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Intro Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Complete 10-Part Master Curriculum
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          The Executive AI <span className="text-gradient-cyan">Curriculum & Blueprint</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Master the entire spectrum of modern AI deployment: from mental models and tool selection to customer support agents, data intelligence, and scalable enterprise leverage.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={onOpenSampleModal}
            className="px-5 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Chapter 1 Excerpt</span>
          </button>

          <a
            href={BOOK_INFO.kindleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>Buy Complete Book on Amazon</span>
          </a>
        </div>
      </section>

      {/* Main Interactive Pillars Component */}
      <PillarsSection onOpenSampleModal={onOpenSampleModal} />
    </div>
  );
};
