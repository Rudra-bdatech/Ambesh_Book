import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Heart, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, BOOK_INFO } from '../data/bookData';

export const ExpertEndorsements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mit-academic' | 'executive' | 'industry-expert'>('all');

  const filteredTestimonials = activeFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeFilter);

  return (
    <section id="wall-of-love" className="py-24 bg-slate-950/80 border-t border-slate-900 relative overflow-hidden">
      
      {/* Background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-indigo-900/10 blur-[140px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            Wall of Love & Endorsements
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            What Global Experts <span className="text-gradient-cyan">Are Saying</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Acclaimed by MIT researchers, corporate executives, bestselling authors, and technology strategists across the globe.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Endorsements' },
              { id: 'mit-academic', label: 'MIT & Academic Researchers' },
              { id: 'executive', label: 'Corporate Executives' },
              { id: 'industry-expert', label: 'Tech & Growth Experts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-cyan-500/50 transition-colors" />
                </div>

                {/* Highlight text if present */}
                {testimonial.highlight && (
                  <p className="text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-xl">
                    "{testimonial.highlight}"
                  </p>
                )}

                {/* Full Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-cyan-500/30 shadow-md group-hover:border-cyan-400 transition-colors"
                  />
                  {testimonial.verifiedBuyer && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 rounded-full p-0.5" title="Verified Endorsement">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-white text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {testimonial.title}
                  </p>
                  <p className="text-[11px] text-cyan-400 font-medium truncate">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Rating Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                Amazon Verified Reviews: 4.9 out of 5.0 Stars
              </h4>
              <p className="text-xs text-slate-400">
                Join thousands of business leaders already transforming their operations with Accelerate with AI.
              </p>
            </div>
          </div>

          <a
            href={BOOK_INFO.kindleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform shrink-0 flex items-center gap-1.5"
          >
            <span>Read All Amazon Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
