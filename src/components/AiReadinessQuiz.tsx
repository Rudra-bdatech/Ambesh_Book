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
        // ignore if canvas not supported
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
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    description: 'You are at the threshold of the AI transformation. Your biggest growth unlocked will come from systematizing foundational AI prompt engineering and selecting the right off-the-shelf automation tools.',
    recommendedChapter: 'Chapter 1 & 2: Foundations & Tool Selection',
    roiPotential: '2.5x to 4x productivity boost across team workflows'
  };

  if (totalScore >= 7 && totalScore <= 11) {
    scoreTier = {
      title: 'AI Strategic Builder',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      description: 'Your team already understands AI’s potential. Your next imperative is converting ad-hoc usage into formal operational workflows, custom RAG knowledge bases, and customer support agents.',
      recommendedChapter: 'Chapter 3 & 7: Customer Experience & AI Strategy Roadmap',
      roiPotential: '40% cost reduction in customer ops & 3x faster content delivery'
    };
  } else if (totalScore >= 12) {
    scoreTier = {
      title: 'AI-Native Enterprise Contender',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      description: 'You are operating with high ambition. You are ready to build proprietary data moats, agent swarms, and scalable AI infrastructure that creates unbeatable competitive advantages.',
      recommendedChapter: 'Chapter 5 & 10: Autonomous Agents & Scalable AI Business',
      roiPotential: 'Exponential scale with 10x leverage per team member'
    };
  }

  return (
    <section id="quiz" className="py-24 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[130px] -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Interactive Assessment
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            AI Business Readiness & <span className="text-gradient-cyan">ROI Scorecard</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Answer 4 quick questions to diagnose your company's AI maturity level and receive a customized reading roadmap from Accelerate with AI.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 to-slate-950 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestion) / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                  Diagnostic Check #{currentQuestion + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {QUIZ_QUESTIONS[currentQuestion].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {QUIZ_QUESTIONS[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all duration-200 group flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        {opt.text}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 animate-fadeIn">
              
              <div className="text-center space-y-3 pb-6 border-b border-slate-800">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold ${scoreTier.badgeColor}`}>
                  <Sparkles className="w-4 h-4" />
                  <span>Your Profile: {scoreTier.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Score: {totalScore} / 16 Points
                </h3>

                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  {scoreTier.description}
                </p>
              </div>

              {/* Action Plan Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    Recommended Reading
                  </div>
                  <p className="text-white font-bold text-base">
                    {scoreTier.recommendedChapter}
                  </p>
                  <p className="text-xs text-slate-400">
                    Provides the exact tools & frameworks tailored for your team's current maturity stage.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    Estimated ROI Potential
                  </div>
                  <p className="text-white font-bold text-base">
                    {scoreTier.roiPotential}
                  </p>
                  <p className="text-xs text-slate-400">
                    Calculated based on average efficiency yield from Ambesh Tiwari’s consulting frameworks.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Retake Diagnostic
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onOpenSampleModal}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4" />
                    Preview Excerpt
                  </button>

                  <a
                    href={BOOK_INFO.kindleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5"
                  >
                    <span>Get Accelerate with AI on Amazon</span>
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
