import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon, YouTubeIcon, InstagramIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { BOOK_INFO } from '../data/bookData';

interface FooterProps {
  setActivePage: (page: string) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('🎉 Thank you! AI Toolkit will be sent to your inbox.');
    setEmail('');
  };

  const socials = [
    { Icon: LinkedInIcon, href: "https://linkedin.com/in/ambeshtiwari", label: "LinkedIn" },
    { Icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
    { Icon: InstagramIcon, href: "https://instagram.com/iambeshtiwari", label: "Instagram" },
    { Icon: TwitterIcon, href: "https://twitter.com/iambeshtiwari", label: "X" },
    { Icon: FacebookIcon, href: "https://facebook.com/ambeshtiwari", label: "Facebook" },
  ];

  const pages = [
    { id: 'home', label: 'Book Overview' },
    { id: 'pillars', label: '10 Core Pillars' },
    { id: 'about', label: 'About the Author' },
    { id: 'wall-of-love', label: 'Reader Reviews & Praise' },
    { id: 'quiz', label: 'AI Readiness Scorecard' },
    { id: 'copyright', label: 'Copyright & License' },
  ];

  const brands = [
    { label: "BDA Technologies", href: "https://bdatechnologies.com" },
    { label: "Accelerate with AI", href: "https://acceleratewithai.in" },
    { label: "Automation School", href: "https://automationschool.in" },
    { label: "LinkAssist.ai", href: "https://linkassist.ai" },
    { label: "HireAssist.org", href: "https://hireassist.org" },
  ];

  return (
    <footer className="border-t border-rule bg-canvas relative overflow-hidden transition-colors duration-300">
      <div className="container-edit pt-16 pb-12">
        {/* Top: Newsletter / Toolkit CTA Bar */}
        <div className="mb-14 rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow eyebrow-indigo">Free Companion Resource</span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
                Get the Official 50+ AI Prompts & SOP Toolkit
              </h3>
              <p className="mt-2 text-sm md:text-base text-ink-soft max-w-xl">
                Every reader gets instant access to Ambesh Tiwari's actionable frameworks, workflow templates, and executive prompt library.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Check your inbox! Toolkit sent successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className="w-full rounded-full border border-rule bg-canvas pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-premium rounded-full px-6 py-3 text-sm font-semibold shrink-0"
                  >
                    Get Free Toolkit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle: Brand + Nav Columns */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Author / Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/atlogo.jpeg"
                alt="Ambesh Tiwari"
                className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-sm border border-rule"
              />
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-ink block">
                  Accelerate with AI
                </span>
                <span className="text-xs text-ink-muted">By Ambesh Tiwari</span>
              </div>
            </div>
            
            <p className="mt-5 text-sm leading-relaxed text-ink-soft max-w-md">
              A definitive guide for founders, CEOs, and ambitious professionals to harness Artificial Intelligence, eliminate operational bottlenecks, and scale sustainably.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink-muted transition-all hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Amazon Bestseller</span>
              </a>
              <span className="text-xs font-mono text-ink-muted">ISBN: 979-8867389147</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-7">
            {/* Navigation Pages */}
            <div className="md:col-span-4">
              <div className="mb-4">
                <span className="eyebrow eyebrow-indigo">Navigation</span>
              </div>
              <ul className="space-y-3 text-sm">
                {pages.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        setActivePage(p.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-ink-soft transition-colors hover:text-accent text-left inline-flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 opacity-40" />
                      <span>{p.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ecosystem Brands */}
            <div className="md:col-span-3">
              <div className="mb-4">
                <span className="eyebrow eyebrow-indigo">Ecosystem</span>
              </div>
              <ul className="space-y-3 text-sm">
                {brands.map((b) => (
                  <li key={b.label}>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
                    >
                      <span>{b.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-40" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Ambesh Tiwari & BDA Technologies. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <button
              onClick={() => {
                setActivePage('copyright');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Copyright Notice & Terms</span>
            </button>
            <a
              href="mailto:ambesh@bdatechnologies.com"
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>Contact Author</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
