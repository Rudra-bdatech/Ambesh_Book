import React from 'react';
import { ShieldCheck, ExternalLink, FileCheck, Lock } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const CopyrightPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-14 bg-canvas text-ink transition-colors">
      
      {/* Header */}
      <section className="container-edit max-w-4xl text-center space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="eyebrow eyebrow-indigo">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Intellectual Property & Legal Protection
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
          Copyrighted by <span className="text-gradient-brand">Govt of India</span>
        </h1>

        <p className="text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          "Accelerate with AI" is an officially registered and protected literary work under the Copyright Office, Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.
        </p>
      </section>

      {/* Main Registration Content */}
      <section className="container-edit max-w-5xl space-y-10">
        
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-sand border border-rule space-y-1 shadow-soft">
            <span className="font-mono text-xs uppercase font-bold text-ink-muted tracking-wider">ROC Number</span>
            <p className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">{BOOK_INFO.copyrightNumber}</p>
            <p className="text-[11px] text-ink-muted">Registration of Copyright Certificate</p>
          </div>

          <div className="p-5 rounded-2xl bg-sand border border-rule space-y-1 shadow-soft">
            <span className="font-mono text-xs uppercase font-bold text-ink-muted tracking-wider">Diary Number</span>
            <p className="text-lg font-mono font-bold text-accent">{BOOK_INFO.diaryNumber}</p>
            <p className="text-[11px] text-ink-muted">Govt of India Diary Filing ID</p>
          </div>

          <div className="p-5 rounded-2xl bg-sand border border-rule space-y-1 shadow-soft">
            <span className="font-mono text-xs uppercase font-bold text-ink-muted tracking-wider">Author & Owner</span>
            <p className="text-lg font-bold text-ink">{BOOK_INFO.author}</p>
            <p className="text-[11px] text-ink-muted">Sole Copyright Holder</p>
          </div>
        </div>

        {/* Certificate Image Preview */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase font-mono font-bold text-ink tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-500" />
              Government of India ROC Record
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

          <div className="rounded-3xl bg-sand p-3 sm:p-5 border border-rule shadow-soft overflow-hidden">
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

        {/* Legal Rights Terms */}
        <div className="rounded-2xl border border-rule bg-sand p-6 space-y-3 text-xs text-ink-soft leading-relaxed shadow-soft">
          <h4 className="font-display font-bold text-ink text-sm flex items-center gap-2">
            <Lock className="w-4 h-4 text-ink-muted" />
            Intellectual Property Rights & Fair Usage Notice
          </h4>
          <p>
            All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
          </p>
          <p>
            For permission requests or corporate licensing, contact Ambesh Tiwari via <a href="mailto:ambesh@bdatechnologies.com" className="text-accent underline">ambesh@bdatechnologies.com</a>.
          </p>
        </div>

      </section>

    </div>
  );
};
