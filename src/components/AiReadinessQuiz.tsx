import React, { useState } from 'react';
import { RefreshCw, ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS, BOOK_INFO } from '../data/bookData';

interface AiReadinessQuizProps {
  onOpenSampleModal: () => void;
}

export const AiReadinessQuiz: React.FC<AiReadinessQuizProps> = ({ onOpenSampleModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (points: number) => {
    const updated = [...selectedAnswers, points];
    setSelectedAnswers(updated);

    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // Calculate score & profile
  const totalScore = selectedAnswers.reduce((a, b) => a + b, 0);
  
  let scoreTier = {
    title: 'AI Explorer',
    badgeColor: 'text-amber-500 border-amber-500/30 bg-amber-500/10',
    description: 'You are at the threshold of the AI transformation. Your biggest growth unlocked will come from systematizing foundational AI prompt engineering and selecting the right off-the-shelf automation tools.',
    recommendedChapter: 'Chapter 1 & 2: Foundations & Tool Selection',
    roiPotential: '2.5x to 4x productivity boost across team workflows'
  };

  if (totalScore >= 7 && totalScore <= 11) {
    scoreTier = {
      title: 'AI Strategic Builder',
      badgeColor: 'text-accent border-accent/30 bg-accent/10',
      description: 'Your team already understands AI’s potential. Your next imperative is converting ad-hoc usage into formal operational workflows, custom RAG knowledge bases, and customer support agents.',
      recommendedChapter: 'Chapter 3 & 7: Customer Experience & AI Strategy Roadmap',
      roiPotential: '40% cost reduction in customer ops & 3x faster content delivery'
    };
  } else if (totalScore >= 12) {
    scoreTier = {
      title: 'AI-Native Enterprise Contender',
      badgeColor: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10',
      description: 'You are operating with high ambition. You are ready to build proprietary data moats, agent swarms, and scalable AI infrastructure that creates unbeatable competitive advantages.',
      recommendedChapter: 'Chapter 5 & 10: Autonomous Agents & Scalable AI Business',
      roiPotential: 'Exponential scale with 10x leverage per team member'
    };
  }

  return (
    <section id="quiz" className="py-20 md:py-24 relative isolate overflow-hidden bg-premium-side-gradient border-t border-rule transition-colors">
      {/* Alternating light-mode grid */}
      <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-edit relative max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow eyebrow-indigo">
              <Zap className="w-3.5 h-3.5 text-accent" /> Interactive Assessment
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            AI Business Readiness & <span className="text-gradient-brand">ROI Scorecard</span>
          </h2>
          <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Answer 4 quick diagnostic questions to evaluate your company's AI maturity level and receive a customized reading roadmap from Accelerate with AI.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="relative rounded-3xl bg-sand/40 dark:bg-sand/20 border border-rule p-6 sm:p-10 shadow-soft backdrop-blur-xl">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-ink-muted">
                  <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestion) / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
                </div>
                <div className="h-2 w-full bg-sand dark:bg-[#071123] rounded-full overflow-hidden border border-rule/50">
                  <div
                    className="h-full bg-accent transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-accent tracking-wider">
                  Diagnostic Check #{currentQuestion + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink leading-snug">
                  {QUIZ_QUESTIONS[currentQuestion].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {QUIZ_QUESTIONS[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-canvas/80 hover:bg-sand border border-rule hover:border-accent text-ink transition-all duration-200 group flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-sand text-ink-soft group-hover:bg-accent group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors border border-rule/50">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        {opt.text}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8">
              
              <div className="text-center space-y-3 pb-6 border-b border-rule">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold ${scoreTier.badgeColor}`}>
                  <Sparkles className="w-4 h-4" />
                  <span>Your Profile: {scoreTier.title}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                  Total Assessment Score: {totalScore} / 16 Points
                </h3>
                <p className="text-sm sm:text-base text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  {scoreTier.description}
                </p>
              </div>

              {/* Action Plan Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-canvas/70 border border-rule space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-ink-muted">
                    Recommended Reading Focus
                  </span>
                  <h4 className="font-display font-bold text-accent text-base">
                    {scoreTier.recommendedChapter}
                  </h4>
                  <p className="text-xs text-ink-soft">
                    Accelerate your roadmap with targeted insights from Ambesh Tiwari's blueprint.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-canvas/70 border border-rule space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-ink-muted">
                    Projected Operational ROI
                  </span>
                  <h4 className="font-display font-bold text-emerald-600 dark:text-emerald-400 text-base">
                    {scoreTier.roiPotential}
                  </h4>
                  <p className="text-xs text-ink-soft">
                    Estimated compound gains based on actual business case studies.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:bg-sand transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retake Assessment</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onOpenSampleModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-rule bg-canvas text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>Read Free Excerpt</span>
                  </button>

                  <a
                    href={BOOK_INFO.kindleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold"
                  >
                    <span>Get Book on Amazon</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
