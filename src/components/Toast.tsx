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
    <div className="fixed top-20 right-6 z-50 animate-slide-up">
      <div className="bg-canvas border border-rule text-ink px-4 py-3 rounded-2xl shadow-lift flex items-center gap-3 backdrop-blur-xl max-w-md">
        <Sparkles className="w-4 h-4 text-accent shrink-0" />
        <p className="text-xs font-semibold leading-tight">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-sand text-ink-muted hover:text-ink transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
