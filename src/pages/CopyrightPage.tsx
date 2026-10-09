import React from 'react';
import { ShieldCheck, ExternalLink, FileCheck, Lock, Award, Scale, FileText } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const CopyrightPage: React.FC = () => {
  return (
    <div className="space-y-0 text-ink transition-colors">
      
      {/* SECTION 1: Page Hero (Sand / Grid / Vignette) */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background light-mode grid and aurora */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Intellectual Property & Legal Protection
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
            Copyrighted by <span className="text-gradient-brand">Govt of India</span>
          </h1>

          <p className="font-serif text-xl sm:text-2xl italic text-ink-soft max-w-2xl mx-auto">
            Official statutory protection under the Copyright Office of India.
          </p>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            "Accelerate with AI" is an officially registered and protected literary work under the Copyright Office, Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.
          </p>

          {/* Quick Registration Metadata Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2">
            <div className="p-4 rounded-2xl bg-canvas/80 dark:bg-sand/30 border border-rule text-center shadow-xs backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-muted tracking-wider block">ROC Number</span>
              <p className="text-base font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{BOOK_INFO.copyrightNumber}</p>
              <p className="text-[10px] text-ink-muted">Registered Certificate</p>
            </div>

            <div className="p-4 rounded-2xl bg-canvas/80 dark:bg-sand/30 border border-rule text-center shadow-xs backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-muted tracking-wider block">Diary Number</span>
              <p className="text-base font-mono font-bold text-accent mt-0.5">{BOOK_INFO.diaryNumber}</p>
              <p className="text-[10px] text-ink-muted">DPIIT Filing Record</p>
            </div>

            <div className="p-4 rounded-2xl bg-canvas/80 dark:bg-sand/30 border border-rule text-center shadow-xs backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-muted tracking-wider block">Author & Owner</span>
              <p className="text-base font-bold text-ink mt-0.5">{BOOK_INFO.author}</p>
              <p className="text-[10px] text-ink-muted">Sole Rights Holder</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Official Certificate Verification & DPIIT Records (Pure White Canvas) */}
      <section className="py-20 md:py-24 bg-canvas border-y border-rule relative transition-colors">
        <div className="container-edit max-w-5xl space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <FileCheck className="w-3.5 h-3.5 text-emerald-500" /> Official Filing Document
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-ink tracking-tight">
              Government of India ROC Certificate
            </h2>
            <p className="text-ink-soft text-sm sm:text-base">
              View the official Registration of Copyright (ROC) extract issued by the Registrar of Copyrights.
            </p>
          </div>

          {/* Certificate Image Preview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs uppercase font-mono font-bold text-ink tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                Certificate Extract Preview
              </span>
              <a
                href={BOOK_INFO.copyrightGovUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline font-semibold flex items-center gap-1"
              >
                <span>Check Live on Copyright Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-3xl bg-sand/40 dark:bg-sand/20 p-4 sm:p-6 border border-rule shadow-soft overflow-hidden">
              <img
                src="/assets/Screenshot-2024-01-02-at-1.34.45-PM.png"
                alt="Government of India Copyright Certificate Details"
                className="w-full h-auto rounded-2xl object-contain max-h-[560px] mx-auto border border-rule/60 shadow-sm"
              />
            </div>
          </div>

          {/* Verification CTA button */}
          <div className="text-center pt-2">
            <a
              href={BOOK_INFO.copyrightGovUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-lift"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Registration on Government Copyright Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3: Intellectual Property Guidelines & Terms (Sand / Grid / Vignette) */}
      <section className="py-20 md:py-24 relative isolate overflow-hidden bg-canvas bg-premium-side-gradient transition-colors">
        {/* Alternating light-mode grid */}
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="container-edit relative max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow eyebrow-indigo">
                <Scale className="w-3.5 h-3.5 text-accent" /> Statutory Terms
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Intellectual Property & <span className="text-gradient-brand">Usage Rights</span>
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Clear guidelines for readers, reviewers, corporate training departments, and academic researchers.
            </p>
          </div>

          {/* 3 Guidelines Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 shadow-sm">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-ink">
                  Commercial Rights
                </h3>
                <p className="text-xs sm:text-sm text-ink-soft mt-3 leading-relaxed">
                  All rights reserved. No part of this publication may be reproduced, sold, or distributed in any form or by any means without the prior written consent of the author.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-rule text-[11px] font-mono font-semibold text-accent uppercase">
                Section 14 — Copyright Act
              </div>
            </div>

            <div className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-ink">
                  Fair Use & Reviews
                </h3>
                <p className="text-xs sm:text-sm text-ink-soft mt-3 leading-relaxed">
                  Brief excerpts and quotations are permitted in critical articles, reviews, podcasts, and academic research with clear attribution to <em>Accelerate with AI by Ambesh Tiwari</em>.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-rule text-[11px] font-mono font-semibold text-accent uppercase">
                Fair Dealing Exemption
              </div>
            </div>

            <div className="custom-theme-card group relative flex flex-col justify-between rounded-3xl p-7 md:p-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-ink">
                  Corporate Licensing
                </h3>
                <p className="text-xs sm:text-sm text-ink-soft mt-3 leading-relaxed">
                  For bulk enterprise copies, departmental workshop licenses, or bespoke internal training playbooks, please contact Ambesh Tiwari's executive advisory team.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-rule text-[11px] font-mono font-semibold text-accent uppercase">
                Enterprise Permissions
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Legal Action & Rights Inquiries (Pure White Canvas) */}
      <section className="py-16 md:py-20 bg-canvas border-t border-rule relative overflow-hidden transition-colors">
        <div className="container-edit max-w-4xl text-center space-y-6">
          <div className="rounded-3xl border border-rule bg-sand/40 dark:bg-sand/20 p-8 sm:p-12 shadow-soft space-y-4">
            <span className="eyebrow eyebrow-indigo">Rights & Permissions</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Questions Regarding Licensing or Translation Rights?
            </h3>
            <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto">
              Inquiries regarding international rights, foreign language translations, or institutional permissions should be directed to the author's legal representation.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:legal@ambeshtiwari.com"
                className="btn-premium inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                <span>Contact Rights & Permissions Team</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
