'use client';

import React from 'react';
import { CORE_VALUES } from '@/lib/data';
import { Sparkles, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const valueIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
  Zap: <Zap className="w-6 h-6 text-lime-600 dark:text-lime-400" />,
  Shield: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
};

export default function AboutVisionSection() {
  return (
    <section id="vision" className="py-24 bg-white dark:bg-[#070D1B] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span>THE ASCORYN VISION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
              Empowering Enterprise Growth Through <span className="text-gradient-primary">Architectural Velocity</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 transition-colors">
              At Ascoryn Tech, we believe that software should be an unstoppable engine for market dominance. We bridge the gap between high-level executive vision and rock-solid, production-grade technical execution.
            </p>
            <div className="space-y-3">
              {[
                'Full-Stack velocity with Next.js 15, React 19 & high-throughput APIs',
                'Autonomous AI agents, enterprise RAG & intelligent workflow automation',
                'Institutional FinTech security, real-time ledgers & compliance',
                'Multi-cloud Kubernetes DevOps & 24/7 SRE reliability engineering',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors">
                  <CheckCircle className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 border border-cyan-500/30 shadow-2xl overflow-hidden text-white">
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">OUR MANIFESTO</div>
              <h3 className="text-2xl font-bold text-white mb-4">&quot;Innovating for Tomorrow&quot;</h3>
              <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                &quot;Technology is evolving faster than ever. Incremental gains are no longer enough. We build resilient, self-healing, and scalable digital ecosystems designed to withstand the tests of time and market disruption.&quot;
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-lime-400">99.4%</div>
                  <div className="text-xs text-slate-400 mt-0.5">On-Time Delivery Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-cyan-400">Zero</div>
                  <div className="text-xs text-slate-400 mt-0.5">Critical Vulnerability Breaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 w-fit mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  {valueIcons[val.icon] || <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
                </div>
                <div className="text-[11px] font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider mb-1">{val.subtitle}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed transition-colors">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
