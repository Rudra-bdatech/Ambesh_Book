import { useState } from "react";

interface Book3DProps {
  progress?: number;
  isMobile?: boolean;
}

export function Book3D({ progress = 0, isMobile = false }: Book3DProps) {
  const [toggled, setToggled] = useState(false);

  // Smooth easing curve
  const eased = progress * progress * (3 - 2 * progress);
  const activeEased = isMobile ? (toggled ? 1 : 0) : Math.max(eased, toggled ? 1 : 0);
  const rotateY = activeEased * -142;

  const shadowBlur = 20 + activeEased * 15;
  const shadowOpacity = 0.25 - activeEased * 0.08;
  const shadowSpread = 2 + activeEased * 6;

  const transitionStyle = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1)";

  return (
    <div
      className="relative mx-auto w-full max-w-[290px] aspect-[2/3] cursor-pointer select-none group"
      onClick={() => setToggled(!toggled)}
      title="Click to open/close book"
    >
      {/* Background soft glow / offset block */}
      <div
        className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-r-md rounded-l bg-accent-soft opacity-60 dark:opacity-30 blur-sm"
        aria-hidden
      />

      {/* Book perspective container */}
      <div className="book-container !w-full !h-full" style={{ perspective: "1200px" }}>
        <div
          className={`book-wrapper w-full h-full${activeEased > 0.05 ? " is-open" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Back Cover with dynamic shadow */}
          <div
            className="book-back-cover"
            style={{
              boxShadow: `${4 + activeEased * 6}px ${6 + activeEased * 8}px ${shadowBlur}px ${shadowSpread}px rgba(0, 0, 0, ${shadowOpacity})`,
              transition: transitionStyle,
            }}
          />

          {/* Page stack (thickness layers) */}
          <div className="book-page-stack" />

          {/* First Page (displayed under the cover leaf) */}
          <div className="book-first-page select-none flex flex-col justify-start overflow-visible p-4">
            <span className="font-serif text-[10px] italic text-ink-soft">Introduction</span>
            <h4 className="mt-1 font-display text-sm font-black tracking-tight text-ink">
              CHAPTER 1
            </h4>
            <p className="mt-2 border-t border-rule pt-2 text-[9px] font-medium leading-[1.45] text-ink-muted">
              <span className="float-left text-2xl font-serif font-black leading-[0.8] mr-1 mt-0.5 text-accent">
                M
              </span>
              ost business builders get trapped in the execution of their own vision. The key is in
              designing operational systems that run better with AI...
            </p>

            {/* Gold foil bookmark ribbon */}
            <div
              className="absolute bottom-[-15px] left-[28px] w-2.5 h-6 bg-gradient-to-b from-[#d4af37] to-[#aa8010] rounded-b z-10"
              style={{
                boxShadow: "0 2px 4px rgba(0,0,0,0.18)",
                transform: `rotateZ(${activeEased * -2}deg)`,
                transition: transitionStyle,
              }}
            />

            <div className="mt-auto pt-3 flex items-center justify-center gap-1.5 w-full">
              <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent text-[8px] font-black text-white">
                A
              </div>
              <span className="font-mono text-[7.5px] font-bold uppercase tracking-wider text-ink-soft">
                Ambesh Tiwari
              </span>
            </div>
          </div>

          {/* Front Cover (swings open to the left) */}
          <div
            className="book-front-cover"
            style={{
              transform: `rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
              transition: transitionStyle,
            }}
          >
            {/* Front Cover Outer Face */}
            <div className="book-cover-side book-cover-front">
              <img
                src="/kindle-cover.jpg"
                alt="Accelerate with AI - book cover by Ambesh Tiwari"
                className="h-full w-full object-fill"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Front Cover Inner Face */}
            <div className="book-cover-side book-cover-back select-none flex flex-col justify-between p-4">
              <div>
                <span className="font-mono text-[7px] uppercase tracking-wider text-ink-muted">
                  Accelerate with AI
                </span>
                <h4 className="mt-2 font-display text-[11px] font-black text-ink">
                  Praise for the Book
                </h4>
                <p className="mt-2 text-[8.5px] font-medium italic leading-[1.4] text-ink-soft">
                  "A masterclass in operational design for the AI era."
                </p>
                <p className="mt-1.5 text-[8.5px] font-medium italic leading-[1.4] text-ink-soft">
                  "Practical, no-hype insights that transform businesses."
                </p>
              </div>

              <div className="mt-auto flex flex-col items-center pt-2 border-t border-rule/30">
                <div className="h-6 w-6 rounded-full border border-accent/20 flex items-center justify-center text-[7.5px] text-accent font-serif">
                  AT
                </div>
                <span className="text-[5.5px] uppercase tracking-[0.15em] text-ink-muted mt-0.5 font-bold">
                  First Edition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Touch/Click helper */}
      <div className="absolute -bottom-6 left-0 right-0 text-center text-[9px] font-bold tracking-wider text-ink-muted uppercase group-hover:text-accent transition-colors">
        {toggled ? "Click to close cover" : "Click to open 3D preview"}
      </div>
    </div>
  );
}
