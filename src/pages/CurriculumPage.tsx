import React from 'react';
import { PillarsSection } from '../components/PillarsSection';
import { BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface CurriculumPageProps {
  onOpenSampleModal: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-32 pb-20 space-y-12 bg-canvas text-ink transition-colors">
      {/* Intro Hero */}
      <section className="container-edit max-w-5xl text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2">
          <span className="eyebrow eyebrow-indigo">
            <BookOpen className="w-3.5 h-3.5" /> Complete 10-Part Master Curriculum
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
          The Executive AI <span className="text-gradient-brand">Curriculum & Blueprint</span>
        </h1>

        <p className="text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Master the entire spectrum of modern AI deployment: from mental models and tool selection to customer support agents, data intelligence, and scalable enterprise leverage.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenSampleModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule bg-canvas text-ink font-semibold text-xs hover:border-accent hover:text-accent transition-colors"
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
      </section>

      {/* Main Interactive Pillars Component */}
      <PillarsSection onOpenSampleModal={onOpenSampleModal} />
    </div>
  );
};
