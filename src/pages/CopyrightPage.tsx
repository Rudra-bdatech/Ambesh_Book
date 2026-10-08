import React from 'react';
import { ShieldCheck, ExternalLink, FileCheck, Lock } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const CopyrightPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-16">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Intellectual Property & Legal Protection
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Copyrighted by <span className="text-gradient-cyan">Govt of India</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          "Accelerate with AI" is an officially registered and protected literary work under the Copyright Office, Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.
        </p>
      </section>

      {/* Main Registration Card & Certificate */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl shadow-emerald-950/20 space-y-8 backdrop-blur-xl">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">ROC Number</span>
              <p className="text-lg font-mono font-bold text-emerald-400">{BOOK_INFO.copyrightNumber}</p>
              <p className="text-[11px] text-slate-500">Registration of Copyright Certificate</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Diary Number</span>
              <p className="text-lg font-mono font-bold text-cyan-400">{BOOK_INFO.diaryNumber}</p>
              <p className="text-[11px] text-slate-500">Govt of India Diary Filing ID</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Author & Owner</span>
              <p className="text-lg font-bold text-white">{BOOK_INFO.author}</p>
              <p className="text-[11px] text-slate-500">Sole Copyright Holder</p>
            </div>
          </div>

          {/* Certificate Image Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-slate-300 tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                Government of India ROC Record Screenshot
              </span>
              <a
                href={BOOK_INFO.copyrightGovUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
              >
                <span>Check Live on Copyright Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl bg-slate-950 p-2 sm:p-4 border border-slate-800 overflow-hidden group">
              <img
                src="/assets/Screenshot-2024-01-02-at-1.34.45-PM.png"
                alt="Government of India Copyright Certificate Details"
                className="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto border border-slate-800"
              />
            </div>
          </div>

          {/* Verification CTA button */}
          <div className="text-center pt-2">
            <a
              href={BOOK_INFO.copyrightGovUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Verify Registration on Government Copyright Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Rights Terms */}
          <div className="pt-6 border-t border-slate-800 space-y-4 text-xs text-slate-400 leading-relaxed">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-400" />
              Intellectual Property Rights & Fair Usage Notice
            </h4>
            <p>
              All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
            </p>
            <p>
              For permission requests or academic citations, contact Ambesh Tiwari via <a href="https://www.ambesh.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ambesh.in</a> or through the Contact section of this website.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
