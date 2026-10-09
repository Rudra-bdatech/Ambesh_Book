import React from 'react';
import { MEDIA_FEATURES } from '../data/bookData';
import { Marquee } from './Marquee';

export const MediaBanner: React.FC = () => {
  return (
    <section className="relative bg-canvas py-6 featured-bar border-y border-rule transition-colors">
      <div className="container-edit">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest font-semibold text-ink-muted">
          Featured on Global Media & Business Publications
        </p>
        <div className="mt-4">
          <Marquee
            fade={36}
            speed={45}
            fadeColor="var(--canvas)"
            items={MEDIA_FEATURES.map((media, index) => (
              <img
                key={index}
                src={media.logoUrl}
                alt={media.name}
                title={media.name}
                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 dark:brightness-110"
                loading="lazy"
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
};

