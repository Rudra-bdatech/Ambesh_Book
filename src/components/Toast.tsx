import React, { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-bounce">
      <div className="bg-slate-900 border border-cyan-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-cyan-950/60 flex items-center gap-3 backdrop-blur-xl max-w-md">
        <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
        <p className="text-xs font-semibold leading-tight">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
