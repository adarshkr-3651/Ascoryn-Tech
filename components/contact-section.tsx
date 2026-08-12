'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI & Automation',
    budget: '$15k - $30k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#1D4ED8', '#84CC16'],
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#070D1B] relative overflow-hidden transition-colors duration-300">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
            <span>START YOUR TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Let&apos;s Build <span className="text-gradient-primary">Something Extraordinary</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg transition-colors">
            Ready to elevate your tech stack? Schedule a strategy call with our principal system architects today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-xl transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Get Direct Access</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Email Inquiries</div>
                  <a href="mailto:ascoryntech@gmail.com" className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    ascoryntech@gmail.com
                  </a>
                  <div className="text-[11px] text-lime-600 dark:text-lime-400 font-medium mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Average response: &lt; 2 Hours
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-lime-600 dark:text-lime-400 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Direct Strategy Hotline</div>
                  <a href="tel:+9779827349751" className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    +977 9827349751 / 9745653468
                  </a>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Available 24/7 for Client Support</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Global Headquarters</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Ascoryn Tech Inc.</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">100 Innovation Plaza, Suite 800</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Tech Hub Center</div>
                </div>
              </div>
            </div>

            {/* SLA Promise Box */}
            <div className="bg-gradient-to-r from-slate-900 to-cyan-950 p-6 rounded-2xl border border-cyan-500/30 flex items-center gap-4 text-white">
              <ShieldCheck className="w-10 h-10 text-lime-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block text-sm">100% NDA Protected & Confidential</strong>
                We respect your IP. All strategy discussions and system code audits are covered under mutual non-disclosure.
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-lime-500/20 border border-lime-500 text-lime-600 dark:text-lime-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Strategy Request Received!</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-600 dark:text-cyan-400">{formData.name}</strong>. A Senior Solutions Architect from Ascoryn Tech will review your project details and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 mt-4"
                  >
                    Send Another Project Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="AI & Automation">AI & LLM Automation</option>
                        <option value="Cloud Architecture">Cloud & DevOps</option>
                        <option value="Custom SaaS">Full-Stack Next.js SaaS</option>
                        <option value="Cybersecurity">Zero-Trust Security</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                      Project Goals & Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current technical challenge, timeline goals, or target architecture..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
