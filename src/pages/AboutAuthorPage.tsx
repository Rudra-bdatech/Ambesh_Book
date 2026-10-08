import React, { useState } from 'react';
import {
  User,
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  Send,
  Calendar
} from 'lucide-react';
import { LinkedInIcon, TwitterIcon } from '../components/SocialIcons';
import { AUTHOR_BIO } from '../data/bookData';

interface AboutAuthorPageProps {
  onShowToast: (msg: string) => void;
  onOpenSampleModal?: () => void;
}

export const AboutAuthorPage: React.FC<AboutAuthorPageProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Keynote Speech',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('🎉 Thank you! Your speaking / advisory inquiry has been received. Ambesh’s team will respond within 24 hours.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        topic: 'Keynote Speech',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 space-y-24">
      
      {/* Hero / Overview Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Photo & Credentials Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
                
                <div className="rounded-3xl bg-slate-900 border border-slate-800 p-3 shadow-2xl overflow-hidden group">
                  <img
                    src="/assets/Ambesh-Tiwari.jpg"
                    alt="Ambesh Tiwari"
                    className="w-full h-[420px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-slate-950/90 rounded-xl mt-3 border border-slate-800 space-y-1">
                    <h3 className="text-white font-bold text-base">{AUTHOR_BIO.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">Founder, StartupAccel & AI Strategist</p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 p-4 rounded-2xl shadow-xl font-bold text-xs flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-slate-950" />
                  <div>
                    <p className="font-black text-sm leading-tight">10+ Years</p>
                    <p className="text-[10px] uppercase tracking-wider font-semibold">Growth Consulting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Executive Bio */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                Author & Growth Strategist
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Empowering Business Leaders to <span className="text-gradient-cyan">Accelerate with AI</span>
              </h1>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Ambesh Tiwari is deeply passionate about AI and its transformative potential, especially in GenAI applications. With over a decade dedicated to growth consulting, he has been at the forefront of innovation and transformation, guiding and collaborating with businesses across various sectors.
                </p>
                <p>
                  He blends engineering know-how with keen marketing insights. Rather than resting on his achievements, Ambesh continually seeks ways to make AI tools accessible and beneficial for businesses of all sizes. His commitment has been instrumental in helping many organizations enhance their productivity, but for Ambesh, the journey of learning and sharing never stops.
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={AUTHOR_BIO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <TwitterIcon className="w-4 h-4 text-cyan-400" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={AUTHOR_BIO.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Official Website</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* StartupAccel Mission Section */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                Venture & Consulting
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                About StartupAccel
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                StartupAccel exists to propel service businesses into modern, scalable success stories. Offering a range of consulting and digital transformation services, StartupAccel specializes in using AI-driven strategies to optimize traditional processes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <p className="text-white font-bold text-xs">AI Operational Modernization</p>
                  <p className="text-slate-400 text-[11px]">Upgrading legacy service models with autonomous agent workflows.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <p className="text-white font-bold text-xs">Executive Advisory & Coaching</p>
                  <p className="text-slate-400 text-[11px]">Mentoring founders on turning data silos into competitive moats.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-4 shadow-2xl">
                <img
                  src="/assets/Ambesh-Tiwari-Accelereate-with-AI.jpg"
                  alt="Ambesh Tiwari presenting Accelerate with AI"
                  className="w-full h-[280px] object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Speaking Topics & Keynote Booking Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Topics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                Keynote & Masterclasses
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                Invite Ambesh to Speak
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Deliver high-energy, actionable keynotes and executive strategy roundtables for your organization.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'The Generative AI Business Playbook', desc: 'Demystifying LLMs and agentic workflows for non-tech executives.' },
                { title: '10x Leverage: Scaling Service Firms with AI', desc: 'How to expand margins and deliver 3x output without ballooning headcount.' },
                { title: 'Building Responsible AI Governance', desc: 'Safeguarding enterprise IP, compliance, and hallucination controls.' }
              ].map((topic, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{topic.title}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] pl-5">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-4">
              <h4 className="text-lg font-bold text-white">
                Submit Keynote or Advisory Inquiry
              </h4>
              <p className="text-xs text-slate-400">
                Directly connect with Ambesh Tiwari’s engagement team for summits, consulting, or bulk book orders.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Mehta"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. TechCorp Asia"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Engagement Type</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>Keynote Speech</option>
                      <option>Executive AI Masterclass</option>
                      <option>StartupAccel Advisory</option>
                      <option>Bulk Book Orders</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Event Details</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event dates, expected audience size, or consulting objectives..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Inquiry to Engagement Team'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
