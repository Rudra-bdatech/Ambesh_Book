import React, { useState } from 'react';
import {
  Globe,
  ShieldCheck,
  Send,
  Check,
  Sparkles,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from './SocialIcons';
import { AUTHOR_BIO, BOOK_INFO } from '../data/bookData';

interface FooterProps {
  setActivePage: (page: string) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onShowToast('🎉 Thank you for subscribing to Ambesh Tiwari’s Weekly AI Strategy Dispatch!');
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900/40 to-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-purple-950/60 border border-cyan-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              "Accelerate with AI" is more than a book; it's a toolkit for success.
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              Get Your Copy of <span className="text-gradient-cyan">Accelerate with AI</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              This book will empower you to harness the power of AI, innovate your business, and make big strides towards your exponential goals.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BOOK_INFO.kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>Get Your Copy on Amazon</span>
              </a>

              <button
                onClick={() => handleNav('quiz')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-colors"
              >
                Calculate My AI Readiness Score
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Author */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/Accelerate-with-AI-3.png"
                alt="Accelerate with AI Logo"
                className="w-8 h-8 rounded-lg object-contain bg-slate-900 p-1 border border-slate-800"
              />
              <span className="font-display font-black text-lg text-white">
                Accelerate with AI
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              {AUTHOR_BIO.shortBio}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={AUTHOR_BIO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_BIO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_BIO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_BIO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_BIO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_BIO.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="Ambesh Tiwari Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Explore Book
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pillars')} className="hover:text-cyan-400 transition-colors">
                  10 Book Pillars
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-400 transition-colors">
                  About Ambesh Tiwari
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wall-of-love')} className="hover:text-cyan-400 transition-colors">
                  Wall of Love & Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('quiz')} className="hover:text-cyan-400 transition-colors">
                  AI Business Scorecard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & IP Registration */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Legal & Verification
            </h4>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                Govt of India Copyright Protected
              </div>
              <p className="text-[11px] text-slate-400">
                ROC No: <span className="text-slate-200 font-mono">{BOOK_INFO.copyrightNumber}</span>
              </p>
              <p className="text-[11px] text-slate-400">
                Diary No: <span className="text-slate-200 font-mono">{BOOK_INFO.diaryNumber}</span>
              </p>
              <button
                onClick={() => handleNav('copyright')}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 pt-1"
              >
                <span>View Registration Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Weekly AI Strategy Dispatch
            </h4>
            <p className="text-slate-400 text-xs">
              Get Ambesh’s private field notes on practical generative AI workflows and growth hacks directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-slate-950" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>Subscribe to AI Dispatch</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            Copyright © {new Date().getFullYear()} <strong className="text-slate-400 font-semibold">Accelerate with AI</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>A book by <strong className="text-slate-300 font-semibold">Ambesh Tiwari</strong></span>
            <span>•</span>
            <span>Founder of <strong className="text-slate-300 font-semibold">StartupAccel</strong></span>
            <span>•</span>
            <span className="text-slate-400">Powered by BrandingChef</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
