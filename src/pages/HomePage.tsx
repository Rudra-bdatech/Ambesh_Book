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
      <section className="py-20 bg-canvas border-y border-rule relative overflow-hidden transition-colors">
        <div className="container-edit">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Author Cutout & Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="relative rounded-3xl bg-sand/50 dark:bg-sand/20 border border-rule p-4 shadow-soft overflow-hidden group">
                  <img
                    src="/assets/Ambesh-.png"
                    alt="Ambesh Tiwari"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-canvas/90 backdrop-blur-md border border-rule space-y-1 shadow-sm">
                    <p className="text-ink font-bold text-sm">{AUTHOR_BIO.name}</p>
                    <p className="text-xs text-accent font-medium">Founder, BDA Technologies & AI Trainer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Story Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow eyebrow-indigo">
                  <User className="w-3.5 h-3.5" /> Meet The Author
                </span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                Engineering Know-How Blended with <span className="text-gradient-brand">Strategic Execution</span>
              </h2>

              <p className="text-ink-soft text-base leading-relaxed">
                {AUTHOR_BIO.shortBio}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                {AUTHOR_BIO.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-sand/40 dark:bg-sand/20 border border-rule text-center">
                    <div className="font-display font-black text-xl sm:text-2xl text-accent">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-ink-muted font-medium mt-1">
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
                  className="btn-premium px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <span>Read Ambesh's Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={AUTHOR_BIO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full border border-rule text-ink-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AUTHOR_BIO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="p-2.5 rounded-full border border-rule text-ink-muted hover:border-accent hover:text-accent transition-colors"
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

      {/* Interactive AI Readiness Quiz */}
      <AiReadinessQuiz onOpenSampleModal={onOpenSampleModal} />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              Everything You Need <span className="text-gradient-brand">To Know</span>
            </h2>
            <p className="text-ink-soft text-sm sm:text-base">
              Got questions before getting started? Here are answers to commonly asked questions.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-sand/30 dark:bg-sand/15 border border-rule overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-ink">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-ink-soft leading-relaxed border-t border-rule/40 pt-3">
                      {item.a}
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
