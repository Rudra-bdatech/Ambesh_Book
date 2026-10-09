import React, { useState } from 'react';
import {
  User,
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  Send,
  Quote,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon } from '../components/SocialIcons';
import { AUTHOR_BIO } from '../data/bookData';

interface AboutAuthorPageProps {
  onShowToast: (msg: string) => void;
  onOpenSampleModal?: () => void;
}

export const AboutAuthorPage: React.FC<AboutAuthorPageProps> = ({ onShowToast, onOpenSampleModal }) => {
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
    <div className="space-y-0 text-ink transition-colors">
      
      {/* SECTION 1: Author Hero Header (Sand / Grid / Vignette) */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background light-mode grid and aurora */}
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
                  <div className="p-4 bg-canvas/90 dark:bg-canvas/80 backdrop-blur-md rounded-xl mt-3 border border-rule space-y-1 shadow-sm">
                    <h3 className="text-ink font-bold text-base">{AUTHOR_BIO.name}</h3>
                    <p className="text-xs text-accent font-semibold">Founder, BDA Technologies & AI Trainer</p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-2xl shadow-lift font-bold text-xs flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-black text-sm leading-tight">13+ Years</p>
                    <p className="text-[10px] uppercase font-mono tracking-wider">Systems & AI Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Executive Bio & Badges */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <User className="w-3.5 h-3.5" /> Author, Consultant & AI Trainer
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.05]">
                Bridging The Gap Between <span className="text-gradient-brand">People, Process & AI</span>
              </h1>

              <div className="space-y-4 text-ink-soft text-base sm:text-lg leading-relaxed">
                <p>
                  Ambesh Tiwari is a business operating systems consultant, corporate AI trainer, and author of the Amazon #1 bestseller <em>Accelerate with AI</em>. He has trained 5,000+ professionals across 11 industries and is founder of BDA Technologies.
                </p>
                <p>
                  He blends engineering know-how with practical operational design. Rather than relying on high-level theoretical decks, Ambesh creates battle-tested workflows, SOPs, and agentic frameworks that turn AI into quantifiable revenue and speed.
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={AUTHOR_BIO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-canvas dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4 text-accent" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-canvas dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <TwitterIcon className="w-4 h-4 text-accent" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-canvas dark:bg-sand/30 border border-rule hover:border-accent text-ink-soft hover:text-accent text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Globe className="w-4 h-4 text-accent" />
                  <span>Official Website</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Editorial Story & Pull Quote (Pure White Canvas) */}
      <section className="py-20 md:py-24 bg-canvas border-y border-rule relative overflow-hidden transition-colors">
        <div className="container-edit">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Pull Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <Quote className="w-3.5 h-3.5" /> Core Operating Principle
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-medium leading-[1.25] text-ink">
                &ldquo;A business that only runs when the founder pushes it, is a <span className="text-gradient-brand">job with extra steps.</span>&rdquo;
              </blockquote>

              <p className="text-sm text-ink-muted font-mono uppercase tracking-widest font-bold">
                — Ambesh Tiwari
              </p>

              {/* Stats Box */}
              <div className="p-6 rounded-3xl bg-sand/40 dark:bg-sand/20 border border-rule space-y-3 mt-8">
                <h4 className="font-display font-bold text-ink text-sm uppercase tracking-wider font-mono">
                  Verified Executive Track Record
                </h4>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {AUTHOR_BIO.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-canvas border border-rule text-center shadow-xs">
                      <div className="font-display font-extrabold text-accent text-lg sm:text-xl">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-ink-muted uppercase font-medium mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-5 text-ink-soft text-base leading-relaxed">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                The Journey From Founder Dependency to Systems
              </h2>

              <p>
                I started my career across business development, marketing, and sales leadership. Over 13+ years of helping companies grow, I discovered a persistent, universal pattern.
              </p>
              
              <p>
                Most business bottlenecks weren't caused by a lack of software tools. Companies were buying dozens of SaaS subscriptions, yet their teams were still bogged down in WhatsApp groups, disconnected spreadsheets, and endless manual follow-ups.
              </p>

              <blockquote className="border-l-2 border-accent pl-4 font-serif text-lg italic text-ink my-4">
                &ldquo;Technology makes clean processes faster, but broken ones fail faster. Real transformation happens when you connect people, clear SOPs, and AI where it actually creates leverage.&rdquo;
              </blockquote>

              <p>
                That realization became the foundation of <strong>Accelerate with AI</strong> and <strong>BDA Technologies</strong>. Today, I work with ambitious founders and enterprise leadership teams to replace friction with scalable operating systems.
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={onOpenSampleModal}
                  className="btn-premium px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Book Frameworks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Ventures & Technology Ecosystem (Sand / Grid / Vignette) */}
      <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
        {/* Alternating light-mode grid */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <Briefcase className="w-3.5 h-3.5" /> Venture & Technology Ecosystem
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Building Products, Systems & <span className="text-gradient-brand">AI Platforms</span>
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Real consulting insights come from building and operating real businesses. Here are the companies and platforms founded by Ambesh Tiwari.
            </p>
          </div>

          {/* 3 Venture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01 / Product',
                title: 'BDA Technologies',
                eyebrow: 'Business Operating Systems & AI',
                desc: 'Helps founder-led businesses design reporting workflows, custom SOP architectures, predictive dashboards, and fractional AI transformation.',
                href: 'https://bdatechnologies.com',
                linkText: 'Visit BDA Technologies',
                highlights: ['SOP Systems', 'Custom RAG Workflows', 'Fractional AI Leadership']
              },
              {
                num: '02 / Product',
                title: 'LinkAssist.ai',
                eyebrow: 'AI Authority & Content Platform',
                desc: 'Assists executives and founders in generating strategic industry ideas, drafting authoritative LinkedIn content, and building personal brand leverage.',
                href: 'https://linkassist.ai',
                linkText: 'Explore LinkAssist',
                highlights: ['Executive Thought Leadership', 'Content Repurposing', 'Engagement AI']
              },
              {
                num: '03 / Platform',
                title: 'Automation School',
                eyebrow: 'Executive & Corporate AI Training',
                desc: 'Specialized enterprise workshops and masterclasses designed for hands-on operational adoption rather than superficial tool demos.',
                href: 'https://automationschool.in',
                linkText: 'Explore Automation School',
                highlights: ['5,000+ Alumni', 'Custom Corporate Sprints', 'Departmental Playbooks']
              },
            ].map((venture, idx) => (
              <div
                key={idx}
                className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                      {venture.num}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                    {venture.title}
                  </h3>

                  <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {venture.eyebrow}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-soft mt-4 leading-relaxed">
                    {venture.desc}
                  </p>

                  <div className="space-y-1.5 pt-4 mt-4 border-t border-rule">
                    {venture.highlights.map((h, hidx) => (
                      <div key={hidx} className="flex items-center gap-2 text-xs text-ink font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-rule">
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:opacity-80 transition-opacity"
                  >
                    <span>{venture.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Speaking & Board Advisory Inquiries (Pure White Canvas) */}
      <section className="py-20 md:py-24 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl">
          <div className="rounded-3xl bg-sand/40 dark:bg-sand/20 border border-rule p-8 sm:p-12 shadow-soft">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-3">
              <span className="eyebrow eyebrow-indigo">Inquire for Events & Advisory</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-ink">
                Invite Ambesh to Speak or Advise Your Board
              </h3>
              <p className="text-ink-soft text-xs sm:text-sm">
                Deliver transformative AI keynotes, private executive briefings, or hands-on corporate bootcamps across India, the UAE, and globally.
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
                    className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent shadow-xs"
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
                    className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent shadow-xs"
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
                    className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent shadow-xs"
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
                    className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent shadow-xs"
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
                  className="w-full rounded-2xl border border-rule bg-canvas px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent resize-none shadow-xs"
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
