'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, Mail, Clock, Globe, ExternalLink, MapPin, ShieldCheck } from 'lucide-react';

export default function DirectAccessCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="lg:col-span-5 space-y-3.5">
      <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 lg:p-5 space-y-3.5 shadow-md dark:shadow-xl transition-colors">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Get Direct Access</h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-500/15 text-lime-600 dark:text-lime-400 border border-lime-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
            Available 24/7
          </span>
        </div>
        
        {/* Phone & WhatsApp Card */}
        <div className="flex items-start gap-3 group">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-lime-600 dark:text-lime-400 shadow-sm shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Phone / WhatsApp Hotlines
            </div>
            
            {/* Number 1 */}
            <div className="flex items-center justify-between gap-2 mt-0.5">
              <a
                href="tel:+9779762958887"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate"
              >
                +977 9762958887
              </a>
              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href="https://wa.me/9779762958887?text=Hello%20Ascoryn%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white text-[10px] font-bold transition-all flex items-center gap-1 border border-emerald-500/30"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-2.5 h-2.5" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => copyToClipboard('9762958887', 'phone1')}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy Number"
                >
                  {copiedKey === 'phone1' ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Number 2 */}
            <div className="flex items-center justify-between gap-2 mt-1">
              <a
                href="tel:+9779745653468"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate"
              >
                +977 9745653468
              </a>
              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href="https://wa.me/9779745653468?text=Hello%20Ascoryn%20Tech%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white text-[10px] font-bold transition-all flex items-center gap-1 border border-emerald-500/30"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-2.5 h-2.5" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => copyToClipboard('9745653468', 'phone2')}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy Number"
                >
                  {copiedKey === 'phone2' ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-start gap-3">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Inquiries</div>
            <div className="flex items-center justify-between gap-2 mt-0.5">
              <a
                href="mailto:info@ascoryntech.com"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate"
              >
                info@ascoryntech.com
              </a>
              <button
                onClick={() => copyToClipboard('info@ascoryntech.com', 'email')}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
            <div className="text-[10px] text-lime-600 dark:text-lime-400 font-medium mt-0.5 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" /> Average response: &lt; 2 Hours
            </div>
          </div>
        </div>

        {/* Website Card */}
        <div className="flex items-start gap-3">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 shadow-sm shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Official Website</div>
            <div className="flex items-center justify-between gap-2 mt-0.5">
              <a
                href="https://www.ascoryntech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate flex items-center gap-1.5"
              >
                <span>www.ascoryntech.com</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <button
                onClick={() => copyToClipboard('https://www.ascoryntech.com', 'website')}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
                title="Copy URL"
              >
                {copiedKey === 'website' ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">High-speed global cloud deployment</div>
          </div>
        </div>

        {/* Location Card */}
        <div className="flex items-start gap-3">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400 shadow-sm shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Office Location</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Ascoryn Tech Inc.</div>
            <div className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-medium">Sankhamul-31, Kathmandu, 44600</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Bagmati Province, Nepal</div>
          </div>
        </div>
      </div>

      {/* SLA Promise Box */}
      <div className="bg-gradient-to-r from-slate-900 to-cyan-950 p-3.5 sm:p-4 rounded-xl border border-cyan-500/30 flex items-center gap-3.5 text-white shadow-xl">
        <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400 shrink-0" />
        <div className="text-[11px] text-slate-300 leading-tight">
          <strong className="text-white block text-xs sm:text-sm font-bold mb-0.5">100% NDA Protected & Confidential</strong>
          We respect your IP. All strategy discussions and system code audits are covered under mutual non-disclosure.
        </div>
      </div>
    </div>
  );
}
