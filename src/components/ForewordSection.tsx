import React from 'react';
import { Award, Quote } from 'lucide-react';
import { FOREWORD_TEXT, BOOK_INFO } from '../data/bookData';

export const ForewordSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-950/70 border border-indigo-500/30 p-8 sm:p-12 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl overflow-hidden">
          
          {/* Ambient corner light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Author Badge & Info */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Featured Foreword
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  A Word From William
                </h3>
                <p className="text-cyan-400 font-semibold text-sm">
                  {FOREWORD_TEXT.author}
                </p>
                <p className="text-xs text-slate-400">
                  {FOREWORD_TEXT.title}
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <img
                  src="/assets/Screenshot-2023-11-20-at-4.49.23-PM.png"
                  alt={FOREWORD_TEXT.author}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-xl"
                />
              </div>

              <div className="pt-2 text-xs text-slate-400 italic">
                "Accelerate with AI is more than a book; it's a toolkit for success."
              </div>
            </div>

            {/* Right Column: Full Foreword Content */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-8 pt-6 lg:pt-0">
              <Quote className="w-10 h-10 text-indigo-400/40 mb-2" />
              
              {FOREWORD_TEXT.content.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  Foreword to <em className="text-white font-serif">Accelerate with AI</em>
                </span>
                <a
                  href={BOOK_INFO.kindleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>Order Complete Book</span>
                  <span>→</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
