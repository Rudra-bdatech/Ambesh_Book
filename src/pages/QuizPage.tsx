import React from 'react';
import { AiReadinessQuiz } from '../components/AiReadinessQuiz';

interface QuizPageProps {
  onOpenSampleModal: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-28 pb-20 bg-canvas text-ink transition-colors">
      <AiReadinessQuiz onOpenSampleModal={onOpenSampleModal} />
    </div>
  );
};
