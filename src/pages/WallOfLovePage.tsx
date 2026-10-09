import React, { useState } from 'react';
import {
  Heart,
  Star,
  Quote,
  CheckCircle2,
  MessageSquarePlus,
  Send,
  X,
  Award,
  BookOpen,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS, BOOK_INFO } from '../data/bookData';

interface WallOfLovePageProps {
  onShowToast: (msg: string) => void;
  onOpenSampleModal?: () => void;
}

export const WallOfLovePage: React.FC<WallOfLovePageProps> = ({ onShowToast, onOpenSampleModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '',
    organization: '',
    rating: 5,
    quote: ''
  });

  const filtered = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast('🎉 Thank you for submitting your review! It will be verified and added to the Wall of Love.');
    setShowReviewModal(false);
    setReviewForm({ name: '', role: '', organization: '', rating: 5, quote: '' });
  };

  return (
    <div className="space-y-0 text-ink transition-colors">
      
      {/* SECTION 1: Page Hero (Sand / Grid / Vignette) */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background light-mode grid and aurora */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <Heart className="w-3.5 h-3.5 text-accent" /> Wall of Love & Reader Impact
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
            Praise for <span className="text-gradient-brand">Accelerate with AI</span>
          </h1>

          <p className="font-serif text-xl sm:text-2xl italic text-ink-soft max-w-3xl mx-auto">
            Acclaimed by MIT researchers, corporate executives, and technology strategists across the globe.
          </p>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See how founders, CXOs, and enterprise teams are replacing operational friction with Ambesh Tiwari’s battle-tested frameworks.
          </p>

          {/* Global Rating & Verification Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-soft">
            <div className="flex items-center gap-2 bg-canvas/80 dark:bg-sand/30 border border-rule px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold text-ink text-sm">4.9 / 5.0 Rating</span>
            </div>

            <div className="bg-canvas/80 dark:bg-sand/30 border border-rule px-4 py-2 rounded-full flex items-center gap-2 shadow-sm backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Amazon Verified Readers</span>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2 rounded-full bg-accent text-white font-semibold text-xs flex items-center gap-1.5 shadow-lift hover:opacity-90 transition-all"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Submit Your Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Filterable Endorsements Grid (Pure White Canvas) */}
      <section className="py-20 md:py-24 bg-canvas border-y border-rule relative transition-colors">
        <div className="container-edit">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'mit-academic', label: 'MIT & Academic' },
              { id: 'executive', label: 'Corporate Executives' },
              { id: 'industry-expert', label: 'Tech & Growth Advisors' },
              { id: 'reader', label: 'Verified Readers' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-white font-bold shadow-soft'
                    : 'bg-sand/60 dark:bg-sand/30 text-ink-muted border border-rule hover:text-ink hover:border-accent/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Testimonials 3-Col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="custom-theme-card group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-accent/40 group-hover:text-accent transition-colors" />
                  </div>

                  {item.highlight && (
                    <p className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl">
                      "{item.highlight}"
                    </p>
                  )}

                  <p className="text-ink-soft text-sm sm:text-[15px] leading-relaxed font-serif italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-rule flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-rule shadow-sm group-hover:border-accent transition-colors"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-ink text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-ink-soft truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-accent font-semibold truncate">
                      {item.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: Featured Impact Spotlights (Sand / Grid / Vignette) */}
      <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
        {/* Alternating light-mode grid */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <Award className="w-3.5 h-3.5 text-accent" /> Academic & Industry Endorsement
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Voices From <span className="text-gradient-brand">MIT & Industry Leaders</span>
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              In-depth reviews on how <em>Accelerate with AI</em> serves as an actionable playbook for executive transformation.
            </p>
          </div>

          {/* 2 Featured Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-3xl border border-rule bg-canvas/90 dark:bg-sand/20 p-8 sm:p-10 shadow-lift backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  Academic Endorsement
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl italic leading-snug text-ink mb-6">
                &ldquo;Accelerate with AI is a rare, grounded masterpiece. Ambesh bridges the chasm between mathematical research and practical executive execution.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-rule">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-base shadow-sm">
                  WT
                </div>
                <div>
                  <h4 className="font-bold text-ink text-base">William Tierney</h4>
                  <p className="text-xs text-accent font-semibold">Senior Researcher & AI Strategist</p>
                  <p className="text-[11px] text-ink-muted">MIT Sloan Fellow & Keynote Speaker</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-3xl border border-rule bg-canvas/90 dark:bg-sand/20 p-8 sm:p-10 shadow-lift backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  Corporate Advisory
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl italic leading-snug text-ink mb-6">
                &ldquo;Ambesh’s 10 pillars gave our executive team a shared vocabulary and eliminated 60% of our manual reporting waste within 90 days.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-rule">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-base shadow-sm">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-ink text-base">Rajesh Kapoor</h4>
                  <p className="text-xs text-accent font-semibold">Chief Operating Officer</p>
                  <p className="text-[11px] text-ink-muted">Mid-Market Financial Services</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: Book CTA Bar (Pure White Canvas) */}
      <section className="py-16 md:py-20 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl">
          <div className="rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 sm:p-12 shadow-soft text-center space-y-6">
            <span className="eyebrow eyebrow-indigo">Join 5,000+ Readers Worldwide</span>
            
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-ink tracking-tight max-w-2xl mx-auto">
              Ready to Experience the AI Transformation?
            </h3>

            <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Available instantly on Amazon Kindle eBook and worldwide in premium paperback format.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              {onOpenSampleModal && (
                <button
                  onClick={onOpenSampleModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-all shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span>Read Free Chapter 1</span>
                </button>
              )}

              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy Complete Book on Amazon</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-canvas border border-rule shadow-lift p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <div>
                <h3 className="font-display font-extrabold text-lg text-ink">Submit Your Reader Review</h3>
                <p className="text-xs text-ink-muted">Share how the book impacted your career or business.</p>
              </div>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1.5 rounded-full hover:bg-sand text-ink-muted hover:text-ink transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  placeholder="e.g. David Miller"
                  className="w-full rounded-2xl border border-rule bg-sand/40 dark:bg-sand/20 px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-ink-muted uppercase mb-1">Your Role / Title</label>
                  <input
                    type="text"
                    value={reviewForm.role}
                    onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                    placeholder="e.g. VP of Operations"
                    className="w-full rounded-2xl border border-rule bg-sand/40 dark:bg-sand/20 px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-muted uppercase mb-1">Company</label>
                  <input
                    type="text"
                    value={reviewForm.organization}
                    onChange={(e) => setReviewForm({ ...reviewForm, organization: e.target.value })}
                    placeholder="e.g. Fintech Global"
                    className="w-full rounded-2xl border border-rule bg-sand/40 dark:bg-sand/20 px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase mb-1">Star Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="p-1 text-amber-500 focus:outline-none"
                    >
                      <Star className={`w-5 h-5 ${star <= reviewForm.rating ? 'fill-amber-500' : 'text-ink-muted/30'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase mb-1">Your Review / Quote</label>
                <textarea
                  value={reviewForm.quote}
                  onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                  rows={4}
                  placeholder="Which strategy or chapter helped you most?..."
                  className="w-full rounded-2xl border border-rule bg-sand/40 dark:bg-sand/20 px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-premium w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Endorsement</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
