import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Heart, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, BOOK_INFO } from '../data/bookData';

export const ExpertEndorsements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mit-academic' | 'executive' | 'industry-expert'>('all');

  const filteredTestimonials = activeFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeFilter);

  return (
    <section id="wall-of-love" className="py-20 md:py-24 relative isolate overflow-hidden bg-premium-side-gradient border-t border-rule transition-colors">
      {/* Alternating light-mode grid */}
      <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-edit relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <Heart className="w-3.5 h-3.5 text-accent" /> Wall of Love & Endorsements
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            What Global Experts <span className="text-gradient-brand">Are Saying</span>
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
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
                    ? 'bg-accent text-white font-bold shadow-soft'
                    : 'bg-sand/60 dark:bg-sand/30 text-ink-muted border border-rule hover:text-ink hover:border-accent/40'
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
              className="relative rounded-3xl bg-sand/40 dark:bg-sand/20 p-6 sm:p-7 border border-rule hover:border-accent/50 transition-all duration-300 shadow-soft hover:shadow-lift flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-ink-muted/40 group-hover:text-accent transition-colors" />
                </div>

                {/* Highlight text if present */}
                {testimonial.highlight && (
                  <p className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl">
                    "{testimonial.highlight}"
                  </p>
                )}

                {/* Full Quote */}
                <p className="text-ink-soft text-sm leading-relaxed font-serif italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-6 mt-6 border-t border-rule flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-rule shadow-sm group-hover:border-accent transition-colors"
                  />
                  {testimonial.verifiedBuyer && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm" title="Verified Endorsement">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-ink text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-ink-soft truncate">
                    {testimonial.title}
                  </p>
                  <p className="text-[11px] text-accent font-semibold truncate">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Rating Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-sand/50 dark:bg-sand/20 border border-rule max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-ink text-base">
                Amazon Verified Reviews: 4.9 out of 5.0 Stars
              </h4>
              <p className="text-xs text-ink-muted">
                Join thousands of business leaders already transforming their operations with Accelerate with AI.
              </p>
            </div>
          </div>

          <a
            href={BOOK_INFO.kindleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-6 py-3 rounded-full text-xs font-semibold shrink-0 inline-flex items-center gap-2"
          >
            <span>Read All Amazon Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
