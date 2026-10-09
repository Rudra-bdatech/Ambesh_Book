import React from 'react';
import { Award, Quote, ArrowRight } from 'lucide-react';
import { FOREWORD_TEXT, BOOK_INFO } from '../data/bookData';

export const ForewordSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
      {/* Alternating light-mode grid */}
      <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-edit relative">
        
        <div className="relative rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 sm:p-12 shadow-soft backdrop-blur-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Author Badge & Info */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <Award className="w-3.5 h-3.5" /> Featured Foreword
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink tracking-tight">
                  A Word From William
                </h3>
                <p className="text-accent font-semibold text-sm">
                  {FOREWORD_TEXT.author}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {FOREWORD_TEXT.title}
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <img
                  src="/assets/Screenshot-2023-11-20-at-4.49.23-PM.png"
                  alt={FOREWORD_TEXT.author}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-rule shadow-sm"
                />
              </div>

              <p className="pt-2 text-xs text-ink-soft italic font-serif">
                "Accelerate with AI is more than a book; it's a practical toolkit for executive success."
              </p>
            </div>

            {/* Right Column: Foreword Content */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-rule lg:pl-10 pt-6 lg:pt-0">
              <Quote className="w-10 h-10 text-accent/30 mb-2" />
              
              {FOREWORD_TEXT.content.map((paragraph, index) => (
                <p key={index} className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-rule/50">
                <span className="text-xs font-semibold text-ink-muted font-mono">
                  Foreword to <em className="text-ink font-serif font-bold">Accelerate with AI</em>
                </span>
                <a
                  href={BOOK_INFO.kindleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Order Complete Edition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
