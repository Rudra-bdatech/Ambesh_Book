import type { BookInfo, Testimonial, BookPillar, MediaFeature, QuizQuestion } from '../types';

export const BOOK_INFO: BookInfo = {
  title: 'Accelerate with AI',
  subtitle: 'How to use AI for Business Growth',
  author: 'Ambesh Tiwari',
  tagline: 'This book is a must-read for those who not only want to understand AI but also apply it to scale their Business.',
  rating: 4.9,
  ratingCount: 1280,
  bestsellerCategory: '#1 Amazon Bestseller in Business & Artificial Intelligence',
  kindleLink: 'https://amzn.eu/d/9P7V6Rf',
  paperbackLink: 'https://amzn.eu/d/9P7V6Rf',
  copyrightNumber: 'L-139707/2023',
  diaryNumber: '29283/2023-CO/L',
  copyrightGovUrl: 'https://www.copyright.gov.in/CopyrightROC_Details.aspx?DiaryNo=29283/2023-CO/L&RocNo=L-139707/2023'
};

export const MEDIA_FEATURES: MediaFeature[] = [
  { name: 'Media Partner 1', logoUrl: '/assets/1-1.png' },
  { name: 'Media Partner 2', logoUrl: '/assets/2-1.png' },
  { name: 'Media Partner 3', logoUrl: '/assets/3.png' },
  { name: 'Media Partner 4', logoUrl: '/assets/4-1.png' },
  { name: 'Media Partner 5', logoUrl: '/assets/5.png' },
  { name: 'Media Partner 6', logoUrl: '/assets/6.png' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'madhu-koehler',
    name: 'Madhu C Dutta-Koehler, PhD, MIT',
    title: 'Founder and President',
    organization: 'The Greener Health Corp.',
    avatar: '/assets/Madhu-Datta.jpeg',
    quote: "If businesses want to leverage AI to get ahead, Ambesh Tiwari's insights and takeaways are certainly a fundamental stepping stone in this field. His book bridges the gap between academic innovation and corporate implementation.",
    rating: 5,
    highlight: 'A fundamental stepping stone for businesses looking to leverage AI.',
    category: 'mit-academic',
    verifiedBuyer: true
  },
  {
    id: 'prabhat-sinha',
    name: 'Prabhat Sinha',
    title: 'IT Expert & Best-Selling Author',
    organization: 'Global Tech Advisory',
    avatar: '/assets/Prabhat-Sinha-IT-Expert.webp',
    quote: 'In the book "Accelerate with AI", Ambesh has tried to accumulate some highly effective AI tools, tips & tricks at one place for business owners. A masterclass in practical application.',
    rating: 5,
    highlight: 'Accumulates highly effective AI tools, tips & tricks in one place.',
    category: 'industry-expert',
    verifiedBuyer: true
  },
  {
    id: 'aditya-lohia',
    name: 'Aditya Lohia',
    title: 'Executive Director & Speaker',
    organization: 'Lohia Industries (P) Ltd.',
    avatar: '/assets/Screenshot-2023-11-20-at-5.15.56-PM.png',
    quote: 'Ambesh has done an excellent job in making everyone aware of the fact that AI is not for the corporate houses only but of every businessperson. Demystifies technology for everyday growth.',
    rating: 5,
    highlight: 'Proves that AI is not just for corporate giants, but for every businessperson.',
    category: 'executive',
    verifiedBuyer: true
  },
  {
    id: 'shyam-sunder',
    name: 'Shyam Sunder',
    title: 'AI Researcher',
    organization: 'CSIR-CEERI, Pilani',
    avatar: '/assets/Screenshot-2023-11-20-at-5.19.20-PM.png',
    quote: "The academic world often dwells on theory, but Ambesh's book is a refreshing pivot to action. It translates high-level concepts into actionable strategies that can be implemented from day one.",
    rating: 5,
    highlight: 'A refreshing pivot to action with day-one actionable strategies.',
    category: 'mit-academic',
    verifiedBuyer: true
  },
  {
    id: 'william-koehler',
    name: 'Dr. William Koehler, Ph.D.',
    title: 'Growth Strategist & Academic Advisor',
    organization: 'International Business Consultant',
    avatar: '/assets/Screenshot-2023-11-20-at-4.49.23-PM.png',
    quote: 'In his timely new book, growth consultant and entrepreneur Ambesh Tiwari has provided something the business world sorely needs: a strategically focused, practical, and accessible guide to harness artificial intelligence.',
    rating: 5,
    highlight: 'Something the business world sorely needs: a strategically focused guide.',
    category: 'industry-expert',
    verifiedBuyer: true
  },
  {
    id: 'vikram-sharma',
    name: 'Vikram Sharma',
    title: 'CEO & Founder',
    organization: 'OmniGrowth SaaS',
    avatar: '/assets/Screenshot-2023-11-14-at-7.04.02-PM.png',
    quote: 'After reading Chapter 3 on customer experience automation, we deployed custom LLM agents that reduced our ticket resolution time by 72% and doubled lead qualification velocity.',
    rating: 5,
    highlight: 'Reduced ticket resolution by 72% within 3 weeks of implementation.',
    category: 'reader',
    verifiedBuyer: true
  }
];

export const BOOK_PILLARS: BookPillar[] = [
  {
    number: 1,
    title: "Understanding AI's Business Impact",
    shortDesc: 'Learn how AI is transforming various industries and what this means for small and medium-sized businesses.',
    fullDesc: 'Deconstruct the economic landscape of the AI revolution. Understand how generative intelligence shifts unit economics, collapses marginal costs of content and analysis, and creates unfair competitive advantages for agile businesses.',
    iconName: 'TrendingUp',
    category: 'Foundations',
    keyTakeaways: [
      'The shifting ROI curves in traditional vs AI-augmented enterprises',
      'Why speed of adoption beats scale of legacy infrastructure',
      'Identifying high-impact vs low-yield AI investment zones in your company'
    ],
    samplePromptOrFramework: 'Framework: The 3-Tier Enterprise AI Maturity Matrix (Efficiency -> Intelligence -> Autonomy)'
  },
  {
    number: 2,
    title: 'Navigating AI Tools and Technologies',
    shortDesc: 'Gain knowledge about the different AI tools available and how to choose the right ones for your business needs.',
    fullDesc: 'Cut through vendor noise and hype. Evaluate foundation models (LLMs, Diffusion, Multimodal, Vector Databases) and understand the trade-offs between proprietary APIs vs open-weight models tailored for domain-specific tasks.',
    iconName: 'Cpu',
    category: 'Tooling',
    keyTakeaways: [
      'Comprehensive audit checklist for evaluating AI software vendors',
      'Cost vs performance analysis: API tokens vs fine-tuned on-premise engines',
      'Designing interoperable toolchains across CRM, ERP, and marketing stacks'
    ],
    samplePromptOrFramework: 'Tool Evaluation Matrix: Security, Latency, Cost Per Token, and Context Window'
  },
  {
    number: 3,
    title: 'AI for Enhanced Customer Experiences',
    shortDesc: 'Learn how AI can be used to personalize customer experiences, streamline onboarding, and improve service.',
    fullDesc: 'Transform customer touchpoints from static support tickets into proactive, hyper-personalized conversational journeys powered by contextual memory and real-time synthesis.',
    iconName: 'Users',
    category: 'Operations',
    keyTakeaways: [
      'Building 24/7 intelligent agentic concierge systems with zero robotic feel',
      'Dynamic segmentation and predictive churn alerting using behavioral embeddings',
      'Creating hyper-personalized email & messaging sequences at million-scale'
    ],
    samplePromptOrFramework: 'System Prompt Architecture for Context-Aware Customer Resolution Agents'
  },
  {
    number: 4,
    title: 'Overcoming AI Adoption Challenges',
    shortDesc: 'Get actionable insights into common organizational friction in AI adoption and how to overcome them.',
    fullDesc: 'Address employee apprehension, hallucination risks, data privacy compliance, and executive inertia with proven change-management playbooks.',
    iconName: 'ShieldAlert',
    category: 'Strategy',
    keyTakeaways: [
      'Upskilling existing talent: The 30-day internal AI literacy curriculum',
      'Mitigating hallucination risk with Retrieval-Augmented Generation (RAG)',
      'Data governance guidelines to prevent proprietary leakages'
    ],
    samplePromptOrFramework: 'The 4-Pillar AI Change Management Playbook for Executives'
  },
  {
    number: 5,
    title: 'Future Trends in AI & Autonomous Agents',
    shortDesc: 'Stay ahead of the curve by learning about emerging AI agentic workflows and their long-term industry impact.',
    fullDesc: 'Explore the frontier of multi-agent collaboration, embodied AI, small language models on-device, and autonomous execution pipelines that perform complex multi-step knowledge work.',
    iconName: 'Sparkles',
    category: 'Vision',
    keyTakeaways: [
      'From prompt engineering to autonomous agent swarm orchestration',
      'Local SLMs running on edge devices for zero cloud latency and total privacy',
      'How to future-proof your product architecture for the next decade of AI'
    ],
    samplePromptOrFramework: 'Agentic Workflow Graph: Planner -> Executor -> Critic -> Verifier'
  },
  {
    number: 6,
    title: 'Practical AI Applications & Case Studies',
    shortDesc: 'Discover real-world applications of AI in business, from workflow automation to predictive customer insights.',
    fullDesc: 'In-depth case studies across manufacturing, e-commerce, professional consulting, healthcare, and education demonstrating quantifiable double-digit margin expansion.',
    iconName: 'Briefcase',
    category: 'Case Studies',
    keyTakeaways: [
      'SME Case Study: 400% outbound sales pipeline growth with automated enrichment',
      'Service Firm: Reducing research synthesis time from 14 hours to 8 minutes',
      'Retail Case Study: Dynamic inventory forecasting using vision + time-series AI'
    ],
    samplePromptOrFramework: 'The 5-Step AI Implementation Template for Service Businesses'
  },
  {
    number: 7,
    title: 'Developing an AI Strategy & Roadmap',
    shortDesc: 'Understand the exact steps involved in creating an effective AI strategy that aligns with your bottom line.',
    fullDesc: 'Craft an end-to-end strategic roadmap with 30-60-90 day milestone gates, KPI benchmarks, and capital allocation frameworks.',
    iconName: 'Compass',
    category: 'Strategy',
    keyTakeaways: [
      'The 90-day AI sprint roadmap from pilot experiment to production rollout',
      'Establishing cross-functional AI steering committees',
      'Calculating true Total Cost of Ownership (TCO) vs expected productivity yield'
    ],
    samplePromptOrFramework: 'The Ambesh Tiwari AI Opportunity Prioritization Matrix (Value vs Feasibility)'
  },
  {
    number: 8,
    title: 'Data-Driven Decision Making & Analytics',
    shortDesc: 'Understand how to leverage AI for automated data analysis, unstructured synthesis, and informed decision-making.',
    fullDesc: 'Convert messy internal data silos, PDFs, meeting transcripts, and spreadsheet archives into conversational executive knowledge graphs that answer any strategic question instantly.',
    iconName: 'BarChart3',
    category: 'Analytics',
    keyTakeaways: [
      'Natural Language to SQL queries for instant executive business intelligence',
      'Automated competitor monitoring and semantic market sentiment analysis',
      'Synthesizing multi-thousand page documents into bulleted decision memos'
    ],
    samplePromptOrFramework: 'Prompt Template: The Executive Decision Synthesizer'
  },
  {
    number: 9,
    title: 'Ethical Considerations & AI Governance',
    shortDesc: 'Safeguard your company with ethical AI deployment, bias detection, and responsible governance standards.',
    fullDesc: 'Establish robust guardrails for intellectual property, copyright compliance, model transparency, and fair algorithms that protect company reputation and customer trust.',
    iconName: 'ShieldCheck',
    category: 'Governance',
    keyTakeaways: [
      'Copyright safeguards when generating marketing copy, designs, and code',
      'Building human-in-the-loop validation checkpoints for high-stakes decisions',
      'Compliance with international regulatory acts (EU AI Act, DPDP Act India)'
    ],
    samplePromptOrFramework: 'The Responsible AI Deployment Checklist for Founders'
  },
  {
    number: 10,
    title: 'Building a Scalable AI-Driven Business',
    shortDesc: 'Learn battle-tested strategies for scaling your business using AI, ensuring long-term exponential growth.',
    fullDesc: 'Design an AI-native organization where teams operate with 10x leverage, continuous learning loops, and compounding product advantages that build an insurmountable competitive moat.',
    iconName: 'Rocket',
    category: 'Scale',
    keyTakeaways: [
      'Transitioning from linear headcount scaling to exponential intelligence leverage',
      'Creating proprietary fine-tuning datasets that become your company moat',
      'Building internal custom GPTs and fine-tuned copilots for every department'
    ],
    samplePromptOrFramework: 'The 10x AI-Native Enterprise Blueprint'
  }
];

export const AUTHOR_BIO = {
  name: 'Ambesh Tiwari',
  title: 'Founder of StartupAccel, AI Strategist, Bestselling Author & Keynote Speaker',
  shortBio: 'Ambesh Tiwari is deeply passionate about AI and its transformative potential, especially in GenAI applications. With over a decade dedicated to growth consulting, he has been at the forefront of innovation and business transformation.',
  fullBio: `Ambesh Tiwari is deeply passionate about AI and its transformative potential, especially in Generative AI applications. With over a decade dedicated to growth consulting, he has been at the forefront of innovation and transformation, guiding and collaborating with businesses across various sectors.

He blends engineering know-how with keen marketing insights. Rather than resting on his achievements, Ambesh continually seeks ways to make AI tools accessible and beneficial for businesses of all sizes. His commitment has been instrumental in helping many organizations enhance their productivity and revenue, but for Ambesh, the journey of learning and sharing never stops.

As the founder of StartupAccel, he propels service businesses into modern, scalable success stories by integrating AI-driven systems into traditional operational frameworks.`,
  company: 'StartupAccel',
  companyDesc: 'StartupAccel exists to propel service businesses into modern, scalable success stories. Offering a range of consulting and digital transformation services, StartupAccel specializes in using AI-driven strategies to optimize traditional processes.',
  stats: [
    { label: 'Years Growth Consulting', value: '10+' },
    { label: 'Business Leaders Mentored', value: '15,000+' },
    { label: 'Amazon Bestseller Rank', value: '#1' },
    { label: 'Client Productivity Boost', value: '3.4x' }
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/ambeshtiwari',
    instagram: 'https://www.instagram.com/iambeshtiwari',
    twitter: 'https://www.twitter.com/iambeshtiwari',
    facebook: 'https://www.facebook.com/ambeshtiwariofficial',
    youtube: 'https://www.youtube.com/ambeshtiwariofficial',
    website: 'https://www.ambesh.in'
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How is your team currently utilizing Artificial Intelligence in day-to-day work?',
    options: [
      { text: 'Not using AI yet or only occasional random ChatGPT questions', points: 1, tip: 'Chapter 1 & 2 will give your team the foundational starter toolkit.' },
      { text: 'Individual team members use AI for drafting emails and basic brainstorming', points: 2, tip: 'Chapter 3 & 4 will help you systemize team-wide adoption.' },
      { text: 'We have automated several workflows and use customized prompts/APIs', points: 3, tip: 'Chapter 7 & 8 will help you unlock deep data analytics & custom agents.' },
      { text: 'We build proprietary AI pipelines, custom fine-tuning, or autonomous agents', points: 4, tip: 'Chapter 5 & 10 will help you scale enterprise AI moats.' }
    ]
  },
  {
    id: 2,
    question: 'What is your primary strategic business bottleneck right now?',
    options: [
      { text: 'Customer support volume & lead response speed', points: 2, tip: 'Focus on Pillar 3: AI for Enhanced Customer Experiences.' },
      { text: 'Manual content creation, marketing, and sales outreach', points: 1, tip: 'Focus on Pillar 6: Practical AI Applications for Growth.' },
      { text: 'Siloed data and slow strategic decision-making', points: 3, tip: 'Focus on Pillar 8: Data-Driven Decision Making & Analytics.' },
      { text: 'Scaling operations without exponentially hiring more headcount', points: 4, tip: 'Focus on Pillar 10: Building a Scalable AI-Driven Business.' }
    ]
  },
  {
    id: 3,
    question: 'What is your team’s biggest hesitation regarding AI adoption?',
    options: [
      { text: 'Lack of practical know-how or fear that it is too technical', points: 1, tip: 'The book is written specifically for non-technical business leaders.' },
      { text: 'Concerns about data privacy, hallucination, and copyright issues', points: 3, tip: 'Chapter 9 provides the complete Legal & Governance framework.' },
      { text: 'Employee resistance or lack of structured internal training', points: 2, tip: 'Chapter 4 gives you the 30-day internal change management playbook.' },
      { text: 'Selecting the wrong tools from thousands of competing AI apps', points: 2, tip: 'Chapter 2 includes the definitive AI Tool Selection Matrix.' }
    ]
  },
  {
    id: 4,
    question: 'What is the scale of your current organization?',
    options: [
      { text: 'Solopreneur / Early-stage Startup (1-5 members)', points: 1, tip: 'Learn how to operate with the leverage of a 20-person agency.' },
      { text: 'Growing SME / Service Agency (6-50 members)', points: 2, tip: 'Standardize standard operating procedures with custom AI copilots.' },
      { text: 'Mid-Market Enterprise (51-250 members)', points: 3, tip: 'Implement department-wide AI steering and data governance.' },
      { text: 'Large Corporate / Enterprise (250+ members)', points: 4, tip: 'Architect enterprise-wide agent swarms and proprietary fine-tuned systems.' }
    ]
  }
];

export const FOREWORD_TEXT = {
  author: 'Dr. William Koehler, Ph.D.',
  title: 'Distinguished Academic & Business Growth Consultant',
  content: [
    "In his timely new book, Accelerate with AI, growth consultant and entrepreneur Ambesh Tiwari has provided something the business world sorely needs: a strategically focused, practical, and accessible guide to the myriad ways in which firms of all sizes can harness artificial intelligence to be more efficient and effective.",
    "Tiwari’s work offers real-world examples, drawn from his consulting practice, to illustrate not only the palpable benefits, but at the same time, the steps needed for implementation of generative AI tools across industries and functional areas.",
    "Tiwari displays a remarkable grasp both of the potential of artificial intelligence and of the challenges facing business leaders in managing the difficult and time-consuming, yet essential processes in customer relations, operations, HR, new product development, and finance. I heartily recommend Accelerate with AI to current and future executives, in any industry or market, who seek to access the profound competitive advantages of the AI revolution."
  ]
};

export const SAMPLE_CHAPTER_EXCERPT = {
  chapterNumber: 1,
  chapterTitle: "The Great AI Paradigm Shift: From Automation to Intelligence",
  subtitle: "Why the next 3 years will redefine every industry and how business owners can capitalize",
  paragraphs: [
    "In November 2022, the world witnessed an inflection point that occurs perhaps once every three to four decades. When Generative AI burst onto the global stage, it was not merely an upgrade to software algorithms—it was a collapse in the marginal cost of intelligence.",
    "For the past thirty years, software existed to digitize records and automate deterministic rules. If you clicked a button, a database recorded a transaction. But generative intelligence introduces something fundamentally distinct: reasoning, synthesis, and creative generation at near-instantaneous speed.",
    "Throughout my decade in growth consulting and leading digital transformations at StartupAccel, I have observed a recurring pattern among leaders who fall behind. They make the fatal mistake of categorizing AI as an 'IT department initiative.'",
    "Let me state this unequivocally: AI is not an IT project. AI is a core business strategy. It alters how you acquire customers, how you deliver services, how you price contracts, and how you structure human talent.",
    "A business owner who leverages custom AI workflows does not work 10 times harder; they operate with 10 times the leverage. While their competitor spends 4 days drafting market proposals and financial models, an AI-augmented entrepreneur synthesizes the same output in 15 minutes, with higher precision and customized personalization.",
    "In the chapters that follow, you will not find dry mathematical formulas or speculative science fiction. You will find concrete blueprints, tested prompting frameworks, tool matrices, and implementation roadmaps that you can deploy in your business before you finish reading this book.",
    "Welcome to the era of exponential leverage. Let us accelerate."
  ]
};

export const FAQ_ITEMS = [
  {
    q: "Is this book suitable for non-technical business owners and entrepreneurs?",
    a: "Absolutely! 'Accelerate with AI' is written specifically for founders, executives, freelancers, and business managers without any coding background. It focuses on strategic implementation, tool selection, ROI, and operational leverage rather than complex programming."
  },
  {
    q: "How quickly can I apply the takeaways to my business?",
    a: "From Chapter 1 onward, every section contains actionable checklists, prompt blueprints, and tool evaluation matrices. Most readers implement their first AI workflow automation within 48 hours of starting the book."
  },
  {
    q: "Where can I buy the book in India and internationally?",
    a: "The book is available globally on Amazon in both Kindle eBook and Physical Paperback editions. You can access instant Kindle reading on iOS, Android, Kindle devices, and Web."
  },
  {
    q: "Can I invite Ambesh Tiwari to speak at my corporate summit or conduct an AI workshop?",
    a: "Yes! Ambesh regularly delivers keynote addresses and executive masterclasses for industry associations, corporate leadership teams, and university summits. You can submit an inquiry directly through the 'About Author' or 'Book Keynote' section on this site."
  },
  {
    q: "Is the book legally registered with Government intellectual property authorities?",
    a: "Yes. 'Accelerate with AI' is registered and protected under the Copyright Act, Government of India (ROC No: L-139707/2023, Diary No: 29283/2023-CO/L). You can view the official registration details on our Copyright page."
  }
];
