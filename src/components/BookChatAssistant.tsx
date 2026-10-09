import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const BookChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: "👋 Hi there! I'm the **Accelerate with AI** Assistant. Ask me anything about Ambesh Tiwari's book, the 10 business chapters, expert endorsements, or key AI strategies!",
      time: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What are the 10 book pillars?",
    "Which chapter is best for customer service?",
    "Tell me about Ambesh Tiwari",
    "What does Dr. Madhu (MIT) say?",
    "Where can I buy the book?"
  ];

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || inputMessage).trim();
    if (!q) return;

    const userMsg = {
      sender: 'user' as const,
      text: q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = q.toLowerCase();

      if (lower.includes('10') || lower.includes('pillar') || lower.includes('chapter') || lower.includes('content') || lower.includes('topics')) {
        reply = `**The 10 Core Pillars of Accelerate with AI:**\n\n` +
          `1. **AI's Business Impact** (Economic & competitive shifts)\n` +
          `2. **Navigating AI Tools** (Selection & evaluation matrix)\n` +
          `3. **AI for Customer Experiences** (24/7 intelligent agents)\n` +
          `4. **Overcoming AI Challenges** (Change management & risk)\n` +
          `5. **Future Trends & Autonomous Agents** (Swarm intelligence)\n` +
          `6. **Practical Applications** (Real-world SME case studies)\n` +
          `7. **Developing AI Strategy** (90-day roadmap)\n` +
          `8. **Data-Driven Decision Making** (Knowledge graphs & NL-to-SQL)\n` +
          `9. **Ethical Considerations & Governance** (IP & compliance)\n` +
          `10. **Building a Scalable AI Business** (Exponential leverage moats)\n\n` +
          `You can read Chapter 1 free right now on the site or grab your copy on Amazon!`;
      } else if (lower.includes('ambesh') || lower.includes('author') || lower.includes('startupaccel') || lower.includes('who')) {
        reply = `**About Ambesh Tiwari:**\n\n` +
          `Ambesh Tiwari is one of India's leading AI trainers, growth consultants, and author of *Accelerate with AI*. He has trained 5,000+ professionals across 50+ organisations in 11 industries and is founder of BDA Technologies.\n\n` +
          `He blends deep engineering acumen with operational systems to help businesses deploy pragmatic AI.`;
      } else if (lower.includes('buy') || lower.includes('amazon') || lower.includes('price') || lower.includes('kindle') || lower.includes('paperback') || lower.includes('copy') || lower.includes('order')) {
        reply = `You can get *Accelerate with AI* immediately on **Amazon** in both Kindle eBook and Paperback editions:\n\n` +
          `🛒 [Get Your Copy on Amazon](${BOOK_INFO.kindleLink})\n\n` +
          `It is an Amazon #1 Bestseller in Business & AI!`;
      } else if (lower.includes('mit') || lower.includes('madhu') || lower.includes('review') || lower.includes('expert') || lower.includes('endorse')) {
        reply = `**What Experts Are Saying:**\n\n` +
          `🎓 **Dr. Madhu C Dutta-Koehler (PhD, MIT):**\n` +
          `*"If businesses want to leverage AI to get ahead, Ambesh Tiwari's insights and takeaways are certainly a fundamental stepping stone in this field."*\n\n` +
          `🏢 **Aditya Lohia (Lohia Industries):**\n` +
          `*"Ambesh has done an excellent job making everyone aware that AI is not for corporate houses only, but for every businessperson."*`;
      } else if (lower.includes('customer') || lower.includes('support') || lower.includes('service')) {
        reply = `For customer operations, check out **Pillar 3: AI for Enhanced Customer Experiences**!\n\n` +
          `It teaches how to construct 24/7 intelligent agentic concierges, dynamic customer segmentation, and predictive churn alerts using contextual AI memory.`;
      } else if (lower.includes('copyright') || lower.includes('legal') || lower.includes('govt') || lower.includes('india')) {
        reply = `*Accelerate with AI* is officially registered with the **Copyright Office, Government of India**:\n\n` +
          `• **ROC No:** ${BOOK_INFO.copyrightNumber}\n` +
          `• **Diary No:** ${BOOK_INFO.diaryNumber}\n\n` +
          `You can verify it directly on the government portal via our Copyright page!`;
      } else {
        reply = `*Accelerate with AI* by Ambesh Tiwari gives you the definitive blueprint to apply Generative AI to scale your business.\n\n` +
          `Would you like to explore the **10 Book Pillars**, take the **AI Readiness Scorecard**, or read a **Free Sample Excerpt**?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-premium p-3.5 sm:px-4 sm:py-3.5 rounded-full flex items-center gap-3 shadow-lift transition-all hover:scale-105"
          aria-label="Open AI Book Assistant"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold leading-tight">Ask Ambesh AI</p>
            <p className="text-[10px] opacity-85">Book Companion</p>
          </div>
        </button>
      ) : (
        <div
          data-lenis-prevent
          className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl bg-canvas border border-rule shadow-lift flex flex-col backdrop-blur-2xl overflow-hidden animate-fadeIn"
        >
          
          {/* Header */}
          <div className="p-4 bg-sand/60 dark:bg-sand/30 border-b border-rule flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink flex items-center gap-1.5">
                  Accelerate AI Assistant
                  <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] font-mono font-bold">
                    AI
                  </span>
                </h4>
                <p className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Online • Ambesh Tiwari Book Knowledge
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-sand text-ink-muted hover:text-ink transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div
            data-lenis-prevent
            className="flex-1 p-4 overflow-y-auto space-y-3.5 custom-scrollbar text-xs overscroll-contain"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg bg-accent text-white flex items-center justify-center shrink-0 text-[10px]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-accent text-white rounded-br-none shadow-sm'
                      : 'bg-sand/70 dark:bg-sand/40 text-ink border border-rule rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-white/70' : 'text-ink-muted'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-ink-muted text-xs">
                <Bot className="w-4 h-4 text-accent" />
                <span className="animate-pulse">Analyzing book insights...</span>
              </div>
            )}
          </div>

          {/* Suggested Quick Prompts */}
          <div
            data-lenis-prevent
            className="px-3 py-2 bg-sand/30 dark:bg-sand/15 border-t border-rule flex items-center gap-1.5 overflow-x-auto custom-scrollbar overscroll-contain"
          >
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-canvas border border-rule text-[10px] text-ink-soft hover:text-accent hover:border-accent transition-all shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-canvas border-t border-rule flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about the book..."
              className="flex-1 bg-sand/50 dark:bg-sand/20 border border-rule rounded-full px-4 py-2 text-xs text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-full bg-accent text-white hover:opacity-90 disabled:opacity-40 transition-all shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
