import React from 'react';
import { MEDIA_FEATURES } from '../data/bookData';

export const MediaBanner: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm uppercase tracking-widest font-bold text-slate-400 mb-8">
          Author & Book Featured On Global Media & Industry Platforms
        </p>

        {/* Media logos grid with hover glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {MEDIA_FEATURES.map((media, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-3 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 group shadow-sm"
            >
              <img
                src={media.logoUrl}
                alt={media.name}
                className="max-h-12 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
