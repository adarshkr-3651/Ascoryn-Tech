'use client';

import React, { useState } from 'react';
//
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,

  Sparkles,
  Clock,
  ShieldCheck,
  MessageSquare,
  QrCode,
  Globe,
  Copy,
  Check,
  Download,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TerminalPreviewCard from './terminal-preview-card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI & Automation',
    budget: 'Rs. 10,000 - 25,000',
    message: '',
  });
  const [customBudget, setCustomBudget] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [qrTab, setQrTab] = useState<'website' | 'whatsapp' | 'vcard'>('website');



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.budget === 'Custom Range' && !customBudget.trim()) return;

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

  const qrDetails = {
    website: {
      title: 'Ascoryn Tech Website',
      subtitle: 'Scan to open https://www.ascoryntech.com on your mobile device',
      src: '/website-qr.png',
      svgSrc: '/website-qr.svg',
      actionUrl: 'https://www.ascoryntech.com',
      badge: 'Official Web Portal',
    },
    whatsapp: {
      title: 'Direct WhatsApp Chat',
      subtitle: 'Scan to start an instant WhatsApp chat with +977 9762958887',
      src: '/whatsapp-qr.png',
      svgSrc: '/whatsapp-qr.svg',
      actionUrl: 'https://wa.me/9779762958887?text=Hello%20Ascoryn%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services',
      badge: 'Instant WhatsApp Desk',
    },
    vcard: {
      title: 'Save Business Contact',
      subtitle: 'Scan to add Ascoryn Tech phone & email straight to your contacts',
      src: '/vcard-qr.png',
      svgSrc: '/vcard-qr.svg',
      actionUrl: 'mailto:info@ascoryntech.com',
      badge: 'Digital vCard',
    },
  };

  const activeQr = qrDetails[qrTab];

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
            Ready to elevate your tech stack? Reach out directly via WhatsApp, Phone, Email, or schedule a strategy consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Contact Cards Column */}
          <TerminalPreviewCard />

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
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-slate-500 dark:text-slate-400">Budget:</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      {formData.budget === 'Custom Range' ? customBudget : formData.budget}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: 'AI & Automation',
                          budget: 'Rs. 10,000 - 25,000',
                          message: '',
                        });
                        setCustomBudget('');
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 mt-2"
                    >
                      Send Another Project Inquiry
                    </button>
                  </div>
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
                        placeholder="Niraj Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                        Work Email Address *
                      </label>
                      <input
                        suppressHydrationWarning
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="niraj@ascoryntech.com"
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
                        placeholder="Ascoryn Tech Pvt Ltd"
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
                        <option value="Custom SaaS">Full-Stack</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                          Budget Range
                        </label>
                        {formData.budget === 'Custom Range' && (
                          <span className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">
                            Custom Entry
                          </span>
                        )}
                      </div>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Rs. 10,000 - 25,000">Rs. 10,000 - 25,000</option>
                        <option value="Rs. 25,000 - 35,000">Rs. 25,000 - 35,000</option>
                        <option value="Rs. 35,000 - 50,000">Rs. 35,000 - 50,000</option>
                        <option value="Rs. 50,000 - 1,50,000">Rs. 50,000 - 1,50,000</option>
                        <option value="Rs. 1,50,000 - 5,00,000">Rs. 1,50,000 - 5,00,000</option>
                        <option value="Rs. 5,00,000 - 15,00,000">Rs. 5,00,000 - 15,00,000</option>
                        <option value="Rs. 15,00,000+">Rs. 15,00,000+</option>
                        <option value="Custom Range">Custom Range (Enter below)</option>
                      </select>

                      {formData.budget === 'Custom Range' && (
                        <div className="mt-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
                          <input
                            type="text"
                            required
                            value={customBudget}
                            onChange={(e) => setCustomBudget(e.target.value)}
                            placeholder="Enter custom budget (e.g. Rs. 15,000 - 20,000)"
                            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-cyan-500/60 dark:border-cyan-500/40 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-sm"
                          />
                        </div>
                      )}
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

        {/* QR Code Hub Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left QR Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <QrCode className="w-3.5 h-3.5 text-lime-400" />
                <span>INSTANT MOBILE CONNECT QR HUB</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Scan to Connect with <span className="text-gradient-lime-cyan">Ascoryn Tech Instantly</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Point your smartphone camera at the generated QR code to immediately launch our official web application, start an encrypted WhatsApp consultation, or save our enterprise contact card.
              </p>

              {/* QR Navigation Tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(['website', 'whatsapp', 'vcard'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setQrTab(tab)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      qrTab === tab
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50 scale-105'
                        : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {tab === 'website' && <Globe className="w-4 h-4 text-cyan-400" />}
                    {tab === 'whatsapp' && <MessageSquare className="w-4 h-4 text-emerald-400" />}
                    {tab === 'vcard' && <Phone className="w-4 h-4 text-lime-400" />}
                    <span className="capitalize">{tab === 'vcard' ? 'vCard Contact' : tab} QR</span>
                  </button>
                ))}
              </div>

              {/* QR Quick Details */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">{activeQr.badge}</span>
                  <span className="text-[11px] text-lime-400 font-mono">100% Scannable • High Res</span>
                </div>
                <div className="text-sm font-bold text-white">{activeQr.title}</div>
                <div className="text-xs text-slate-300">{activeQr.subtitle}</div>
              </div>

              {/* Download & Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={activeQr.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Open Direct Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={activeQr.src}
                  download={`ascoryn-${qrTab}-qr.png`}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download PNG</span>
                </a>

                <a
                  href={activeQr.svgSrc}
                  download={`ascoryn-${qrTab}-qr.svg`}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-lime-400" />
                  <span>Download Vector SVG</span>
                </a>
              </div>
            </div>

            {/* Right QR Display Canvas */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative p-6 rounded-3xl bg-white border-4 border-cyan-500/40 shadow-2xl group hover:border-lime-400 transition-colors">
                <div className="relative bg-white p-2 rounded-2xl">
                  <img
                    src={activeQr.src}
                    alt={`${activeQr.title} QR Code`}
                    width={220}
                    height={220}
                    loading="lazy"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl"
                  />
                  {/* Embedded brand pill in center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="p-2 rounded-xl bg-white shadow-md border border-slate-200">
                      <img
                        src="/logo.png"
                        alt="Ascoryn Logo"
                        width={32}
                        height={32}
                        className="w-7 h-7 object-contain rounded"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Scan with Mobile Camera</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-mono truncate max-w-[200px] mx-auto">
                    {qrTab === 'website' ? 'www.ascoryntech.com' : qrTab === 'whatsapp' ? '+977 9762958887' : 'info@ascoryntech.com'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
