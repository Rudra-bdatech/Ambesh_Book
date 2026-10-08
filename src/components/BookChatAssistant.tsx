import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const BookChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: "👋 Hi there! I'm the **Accelerate with AI** AI Assistant. Ask me anything about Ambesh Tiwari's book, the 10 business chapters, expert endorsements, or key AI strategies!",
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
          `Ambesh Tiwari is a seasoned growth consultant, entrepreneur, and AI strategist with over a decade of experience in business transformation. He is the founder of **StartupAccel** and the author of the Amazon #1 Bestseller *Accelerate with AI*.\n\n` +
          `He blends deep engineering acumen with marketing & growth strategies to help businesses of all sizes deploy pragmatic AI tools.`;
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
          className="relative group p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border border-white/20"
          aria-label="Open AI Book Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold leading-tight">Ask Ambesh AI</p>
            <p className="text-[10px] text-cyan-100 font-medium">Book & Strategy Companion</p>
          </div>
        </button>
      ) : (
        <div className="w-[360px] sm:w-[400px] h-[520px] rounded-3xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl shadow-black/80 flex flex-col backdrop-blur-2xl overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Accelerate AI Assistant
                  <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-extrabold">
                    AI
                  </span>
                </h4>
                <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online • Ambesh Tiwari Book Knowledge
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 custom-scrollbar text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[9px] text-slate-400 mt-1 opacity-70 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-800 px-3 py-2 rounded-2xl flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce delay-200" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestions */}
          <div className="px-3 py-2 bg-slate-950 border-t border-slate-800 overflow-x-auto flex gap-1.5 whitespace-nowrap no-scrollbar">
            {suggestedQuestions.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSend(sq)}
                className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-950 hover:border-cyan-500/50 border border-slate-700 text-[10px] text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
              >
                {sq}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about AI strategies, chapters, author..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-cyan-500 disabled:opacity-50 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
