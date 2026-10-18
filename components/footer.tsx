'use client';

import React from 'react';
import AscorynLogo from './logo';
import { ArrowUp, Send, ShieldCheck, Phone, Mail, Globe, MessageSquare, QrCode } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#050B16] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <AscorynLogo size="lg" />
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed mt-3 transition-colors">
              Ascoryn Tech delivers high-velocity enterprise software development, autonomous AI agent pipelines, multi-cloud architecture, and advanced FinTech solutions.
            </p>

            {/* Direct Contact Summary */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                <span className="text-slate-800 dark:text-slate-200 font-semibold">+977 9762958887 / 9745653468</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <a href="mailto:info@ascoryntech.com" className="text-slate-800 dark:text-slate-200 font-medium hover:text-cyan-500 transition-colors">
                  info@ascoryntech.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <a href="https://www.ascoryntech.com" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 font-medium hover:text-cyan-500 transition-colors">
                  www.ascoryntech.com
                </a>
              </div>
            </div>

            {/* Social Media & Direct Chat SVG Icons */}
            <div className="flex items-center gap-2.5 pt-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9779762958887?text=Hello%20Ascoryn%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 hover:border-emerald-500 transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Email Direct */}
              <a
                href="mailto:info@ascoryntech.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-600 hover:border-cyan-500 transition-all shadow-sm"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X / Twitter"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Capabilities Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AI & LLM Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cloud Architecture</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Custom Next.js Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">FinTech Core Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Real-Time Data BI</a></li>
            </ul>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#case-studies" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Featured Case Studies</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Modern Tech Stack</a></li>
              <li><a href="#calculator" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">ROI Cost Estimator</a></li>
              <li><a href="#vision" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Our Vision & Values</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          {/* QR Code & Mobile Connect Box (Spans 4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-cyan-500" />
                <span>Mobile QR Quick Scan</span>
              </h4>
              <span className="text-[10px] font-bold text-lime-600 dark:text-lime-400 bg-lime-500/15 px-2 py-0.5 rounded-full border border-lime-500/30">
                Official Web & Chat
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm shrink-0">
                <img
                  src="/website-qr.png"
                  alt="Ascoryn Tech Website QR Code"
                  width={84}
                  height={84}
                  loading="lazy"
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </div>
              <div className="text-xs space-y-1.5">
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-tight">
                  Scan with any phone camera to visit <strong className="text-cyan-600 dark:text-cyan-400">www.ascoryntech.com</strong> instantly.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-lime-600 dark:text-lime-400 hover:underline"
                >
                  <span>Explore WhatsApp & vCard QR Hub →</span>
                </a>
              </div>
            </div>

            {/* Newsletter form */}
            <form onSubmit={(e) => e.preventDefault()} className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="relative">
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="Subscribe for tech briefs..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-900 dark:text-white">Ascoryn Tech</strong>. All rights reserved. &quot;Innovating for Tomorrow&quot;.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span>SOC2 & ISO Ready</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 shadow-sm"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
