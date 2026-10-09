import React, { useState } from 'react';
import {
  User,
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  Send
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon } from '../components/SocialIcons';
import { AUTHOR_BIO } from '../data/bookData';

interface AboutAuthorPageProps {
  onShowToast: (msg: string) => void;
  onOpenSampleModal?: () => void;
}

export const AboutAuthorPage: React.FC<AboutAuthorPageProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Keynote Speech',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('🎉 Thank you! Your speaking / advisory inquiry has been received. Ambesh’s team will respond within 24 hours.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        topic: 'Keynote Speech',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 space-y-20 bg-canvas text-ink transition-colors">
      
      {/* Hero / Overview Header */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pb-12">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Photo & Credentials Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="rounded-3xl bg-sand/40 dark:bg-sand/20 border border-rule p-3 shadow-soft overflow-hidden group">
                  <img
                    src="/assets/Ambesh-Tiwari.jpg"
                    alt="Ambesh Tiwari"
                    className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-canvas rounded-xl mt-3 border border-rule space-y-1 shadow-sm">
                    <h3 className="text-ink font-bold text-base">{AUTHOR_BIO.name}</h3>
                    <p className="text-xs text-accent font-semibold">Founder, BDA Technologies & AI Trainer</p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-2xl shadow-lift font-bold text-xs flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-black text-sm leading-tight">10+ Years</p>
                    <p className="text-[10px] uppercase font-mono tracking-wider">Growth Consulting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Executive Bio */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <User className="w-3.5 h-3.5" /> Author & AI Trainer
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
                Empowering Business Leaders to <span className="text-gradient-brand">Accelerate with AI</span>
              </h1>

              <div className="space-y-4 text-ink-soft text-sm sm:text-base leading-relaxed">
                <p>
                  Ambesh Tiwari is one of India's leading AI trainers, business consultants, and author of <em>Accelerate with AI</em>. He has trained 5,000+ professionals across 50+ organisations in 11 industries and is founder of BDA Technologies.
                </p>
                <p>
                  He blends engineering know-how with keen operational systems. Rather than resting on high-level theory, Ambesh continually creates battle-tested workflows, SOPs, and agentic frameworks that make AI tools accessible and profitable for businesses of all sizes.
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={AUTHOR_BIO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-sand/60 dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-accent" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-sand/60 dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <TwitterIcon className="w-4 h-4 text-accent" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-sand/60 dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Globe className="w-4 h-4 text-accent" />
                  <span>Official Website</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* StartupAccel / BDA Ecosystem Section */}
      <section className="py-16 bg-sand/30 dark:bg-sand/15 border-y border-rule relative">
        <div className="container-edit">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <Briefcase className="w-3.5 h-3.5" /> Venture & Consulting
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                About StartupAccel & BDA Technologies
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                Founded by Ambesh Tiwari, StartupAccel and BDA Technologies serve as innovation advisory firms that empower entrepreneurs, mid-market enterprises, and corporate leaders to unlock scalable growth through AI-native systems, workflow automation, and fractional AI officer advisory.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Enterprise GenAI Strategy & Audits',
                  'Agentic Workflow Automation',
                  'Custom RAG & Knowledge Bases',
                  'Executive Leadership Masterclasses'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-ink font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-canvas border border-rule shadow-soft space-y-4">
                <h4 className="font-display font-bold text-ink text-base">Key Leadership Stats</h4>
                <div className="space-y-3">
                  {AUTHOR_BIO.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-sand/40 dark:bg-sand/20 border border-rule">
                      <span className="text-xs text-ink-muted">{stat.label}</span>
                      <span className="font-display font-bold text-accent text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Speaking & Advisory Contact Section */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-16 border-t border-rule">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative max-w-4xl">
        <div className="rounded-3xl bg-sand/40 dark:bg-sand/20 border border-rule p-8 sm:p-12 shadow-soft">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-3">
            <span className="eyebrow eyebrow-indigo">Inquire for Events</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Invite Ambesh to Speak or Advise Your Board
            </h3>
            <p className="text-ink-soft text-xs sm:text-sm">
              Deliver transformative AI keynotes, private executive briefings, or hands-on corporate bootcamps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Acme Enterprises"
                  className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                >
                  <option value="Keynote Speech">Keynote Speech / Conference</option>
                  <option value="Corporate Workshop">Executive AI Workshop</option>
                  <option value="Board Advisory">Fractional AI / Board Advisory</option>
                  <option value="Bulk Book Orders">Bulk Book Purchases for Teams</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink-muted uppercase tracking-wider mb-1.5">
                Message / Event Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="Share dates, attendee count, or primary goals..."
                className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium w-full py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Transmitting Request...' : 'Send Inquiry to Ambesh’s Team'}</span>
            </button>
          </form>
        </div>
        </div>
      </section>

    </div>
  );
};
