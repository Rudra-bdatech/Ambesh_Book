import React, { useState } from 'react';
import { X, Download, ShoppingBag, Sparkles, Type } from 'lucide-react';
import { SAMPLE_CHAPTER_EXCERPT, BOOK_INFO } from '../data/bookData';

interface SampleChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const SampleChapterModal: React.FC<SampleChapterModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  if (!isOpen) return null;

  const fontClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed sm:text-lg',
    lg: 'text-lg leading-loose sm:text-xl'
  };

  const handleDownloadPdf = () => {
    onShowToast('📥 Downloading Chapter 1 Free Preview...');
    const element = document.createElement('a');
    const file = new Blob([
      `ACCELERATE WITH AI - CHAPTER 1 EXCERPT\nAuthor: Ambesh Tiwari\n\n${SAMPLE_CHAPTER_EXCERPT.chapterTitle}\n${SAMPLE_CHAPTER_EXCERPT.subtitle}\n\n${SAMPLE_CHAPTER_EXCERPT.paragraphs.join('\n\n')}\n\nGet the complete book on Amazon: ${BOOK_INFO.kindleLink}`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Accelerate-with-AI-Chapter1-Excerpt.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-canvas border border-rule shadow-lift flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-rule bg-sand/60 dark:bg-sand/30 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-xs shadow-sm">
              Ch 1
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink truncate max-w-[200px] sm:max-w-md">
                Free Reading Sample: {SAMPLE_CHAPTER_EXCERPT.chapterTitle}
              </h3>
              <p className="text-[11px] text-ink-muted">By Ambesh Tiwari • Accelerate with AI</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Reading font controls */}
            <div className="hidden sm:flex items-center gap-1 bg-canvas px-2 py-1 rounded-full border border-rule text-xs">
              <Type className="w-3.5 h-3.5 text-ink-muted mr-1" />
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 rounded-full ${fontSize === 'sm' ? 'bg-accent text-white font-bold' : 'text-ink-soft'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-1.5 py-0.5 rounded-full ${fontSize === 'md' ? 'bg-accent text-white font-bold' : 'text-ink-soft'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 rounded-full ${fontSize === 'lg' ? 'bg-accent text-white font-bold' : 'text-ink-soft'}`}
              >
                A+
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-sand text-ink-muted hover:text-ink transition-colors"
              aria-label="Close Sample Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-6 bg-canvas text-ink transition-colors duration-300">
          
          <div className="space-y-2 border-b border-rule pb-6">
            <span className="font-mono text-xs uppercase font-bold text-accent tracking-widest">
              Chapter {SAMPLE_CHAPTER_EXCERPT.chapterNumber}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {SAMPLE_CHAPTER_EXCERPT.chapterTitle}
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-ink-soft">
              {SAMPLE_CHAPTER_EXCERPT.subtitle}
            </p>
          </div>

          <div className={`space-y-5 font-serif text-ink-soft ${fontClasses[fontSize]}`}>
            {SAMPLE_CHAPTER_EXCERPT.paragraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* End of preview note */}
          <div className="p-6 rounded-3xl bg-sand/50 dark:bg-sand/20 border border-rule text-center space-y-3 mt-8">
            <Sparkles className="w-6 h-6 text-accent mx-auto" />
            <h4 className="font-display font-bold text-ink text-base sm:text-lg">
              Enjoying Chapter 1? Unlock all 10 Chapters
            </h4>
            <p className="text-xs sm:text-sm text-ink-soft max-w-lg mx-auto">
              Get immediate access to all prompt blueprints, AI vendor matrices, customer workflow automations, and scaling playbooks.
            </p>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-rule bg-sand/60 dark:bg-sand/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadPdf}
            className="w-full sm:w-auto text-xs font-semibold text-ink-soft hover:text-ink flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-rule bg-canvas hover:bg-sand transition-colors"
          >
            <Download className="w-4 h-4 text-accent" />
            <span>Download Excerpt File</span>
          </button>

          <a
            href={BOOK_INFO.kindleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Get Full Book on Amazon</span>
          </a>
        </div>

      </div>
    </div>
  );
};
