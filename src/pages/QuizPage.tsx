import React from 'react';
import { AiReadinessQuiz } from '../components/AiReadinessQuiz';

interface QuizPageProps {
  onOpenSampleModal: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-24 pb-20">
      <AiReadinessQuiz onOpenSampleModal={onOpenSampleModal} />
    </div>
  );
};
