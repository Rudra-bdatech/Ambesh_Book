import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { MediaBanner } from '../components/MediaBanner';
import { PillarsSection } from '../components/PillarsSection';
import { ExpertEndorsements } from '../components/ExpertEndorsements';
import { ForewordSection } from '../components/ForewordSection';
import { AiReadinessQuiz } from '../components/AiReadinessQuiz';
import {
  ChevronDown,
  ArrowRight,
  User,
  HelpCircle
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon } from '../components/SocialIcons';
import { AUTHOR_BIO, FAQ_ITEMS } from '../data/bookData';

interface HomePageProps {
  onOpenSampleModal: () => void;
  setActivePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSampleModal, setActivePage }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onOpenSampleModal={onOpenSampleModal}
        onNavigateToQuiz={() => {
          const el = document.getElementById('quiz');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else setActivePage('quiz');
        }}
        onNavigateToPillars={() => {
          const el = document.getElementById('pillars');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Featured On Media Outlets Banner */}
      <MediaBanner />

      {/* 10 Book Pillars Section */}
      <PillarsSection onOpenSampleModal={onOpenSampleModal} />

      {/* Author Spotlight Teaser */}
      <section className="py-20 bg-slate-950/70 border-y border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Author Cutout & Image Collage */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 scale-95" />
                
                <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-4 shadow-2xl overflow-hidden group">
                  <img
                    src="/assets/Ambesh-.png"
                    alt="Ambesh Tiwari"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 space-y-1">
                    <p className="text-white font-bold text-sm">{AUTHOR_BIO.name}</p>
                    <p className="text-xs text-cyan-400 font-medium">Founder, StartupAccel & AI Strategist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Story Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                Meet The Author
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                Engineering Know-How Blended with <span className="text-gradient-cyan">Marketing Mastery</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {AUTHOR_BIO.shortBio}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                {AUTHOR_BIO.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="font-display font-black text-xl text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Author Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
                >
                  <span>Read Ambesh's Full Story & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={AUTHOR_BIO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AUTHOR_BIO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Foreword Spotlight */}
      <ForewordSection />

      {/* Expert Endorsements & Wall of Love */}
      <ExpertEndorsements />

      {/* Interactive AI Readiness Quiz Scorecard */}
      <AiReadinessQuiz onOpenSampleModal={onOpenSampleModal} />

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              Got Questions?
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Frequently Asked <span className="text-gradient-cyan">Questions</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Everything you need to know about Accelerate with AI, formats, and corporate engagements.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/40 animate-fadeIn">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
