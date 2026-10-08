import React, { useState } from 'react';
import { Heart, Star, Quote, CheckCircle2, MessageSquarePlus, Send } from 'lucide-react';
import { TESTIMONIALS } from '../data/bookData';

interface WallOfLovePageProps {
  onShowToast: (msg: string) => void;
}

export const WallOfLovePage: React.FC<WallOfLovePageProps> = ({ onShowToast }) => {
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
    <div className="pt-32 pb-24 space-y-16">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          Wall of Love & Reader Impact
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Praise for <span className="text-gradient-cyan">Accelerate with AI</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          See how researchers, corporate leaders, and entrepreneurs are using Ambesh Tiwari’s frameworks to transform their businesses.
        </p>

        {/* Global Rating Card */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-black text-white text-sm">4.9 / 5.0 Rating</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Amazon Verified Readers</span>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-4 py-2 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Submit Your Story</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
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
                  ? 'bg-pink-600 text-white font-bold shadow-lg shadow-pink-600/30 scale-105'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-pink-500/50 transition-colors" />
                </div>

                {item.highlight && (
                  <p className="text-xs font-bold text-pink-300 bg-pink-950/40 border border-pink-500/20 px-3 py-1.5 rounded-xl">
                    "{item.highlight}"
                  </p>
                )}

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-2xl object-cover border border-pink-500/30 shadow-md"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-sm truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-pink-400 font-medium truncate">
                    {item.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-pink-500/40 p-6 sm:p-8 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                Share Your Book Review
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  placeholder="e.g. Dr. Ananya Sen"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.role}
                    onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                    placeholder="e.g. VP of Product"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Organization</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.organization}
                    onChange={(e) => setReviewForm({ ...reviewForm, organization: e.target.value })}
                    placeholder="e.g. Global Logistics Corp"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review & Takeaways</label>
                <textarea
                  rows={4}
                  required
                  value={reviewForm.quote}
                  onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                  placeholder="How did Accelerate with AI help your team or workflow? What was your favorite chapter?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-lg shadow-pink-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Endorsement
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
