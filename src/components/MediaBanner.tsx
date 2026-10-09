import React from 'react';
import { MEDIA_FEATURES } from '../data/bookData';

export const MediaBanner: React.FC = () => {
  return (
    <section className="relative bg-canvas py-8 border-y border-rule transition-colors">
      <div className="container-edit">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest font-semibold text-ink-muted mb-6">
          Featured on Global Media & Business Publications
        </p>

        {/* Media logos grid with smooth hover effect */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
          {MEDIA_FEATURES.map((media, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-sand/50 dark:bg-sand/20 border border-rule transition-all duration-300 hover:border-accent/40 group"
            >
              <img
                src={media.logoUrl}
                alt={media.name}
                className="max-h-8 sm:max-h-10 w-auto object-contain filter grayscale contrast-125 dark:invert dark:opacity-75 opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
