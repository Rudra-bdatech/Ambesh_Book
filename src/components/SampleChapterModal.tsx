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
  const [readingTheme] = useState<'dark' | 'sepia' | 'midnight'>('dark');

  if (!isOpen) return null;

  const fontClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed sm:text-lg',
    lg: 'text-lg leading-loose sm:text-xl'
  };

  const themeClasses = {
    dark: 'bg-slate-950 text-slate-200 border-slate-800',
    sepia: 'bg-[#1c1815] text-[#d6c7b2] border-[#382f27]',
    midnight: 'bg-[#0b1120] text-cyan-100 border-cyan-900/50'
  };

  const handleDownloadPdf = () => {
    onShowToast('📥 Downloading Chapter 1 Free Preview PDF...');
    // Create a mock download blob
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
              Ch 1
            </div>
            <div>
              <h3 className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                Free Reading Sample: {SAMPLE_CHAPTER_EXCERPT.chapterTitle}
              </h3>
              <p className="text-[11px] text-slate-400">By Ambesh Tiwari • Accelerate with AI</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Reading controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 text-xs">
              <Type className="w-3.5 h-3.5 text-slate-400 mr-1" />
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'md' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A+
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Sample Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Reader Content */}
        <div className={`p-6 sm:p-10 overflow-y-auto flex-1 space-y-6 ${themeClasses[readingTheme]} transition-colors duration-300`}>
          
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest">
              Chapter {SAMPLE_CHAPTER_EXCERPT.chapterNumber}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              {SAMPLE_CHAPTER_EXCERPT.chapterTitle}
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-slate-300">
              {SAMPLE_CHAPTER_EXCERPT.subtitle}
            </p>
          </div>

          <div className={`space-y-5 font-serif ${fontClasses[fontSize]}`}>
            {SAMPLE_CHAPTER_EXCERPT.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>

          {/* End of preview note */}
          <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center space-y-3 mt-8">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-white text-base sm:text-lg">
              Enjoying Chapter 1? Unlock all 10 Chapters
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Get immediate access to all prompt blueprints, AI vendor matrices, customer workflow automations, and scaling playbooks.
            </p>
          </div>

        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadPdf}
            className="w-full sm:w-auto text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Excerpt File</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={BOOK_INFO.kindleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Get Full Book on Amazon</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
