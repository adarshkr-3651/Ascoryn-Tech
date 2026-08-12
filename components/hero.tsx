'use client';

import React from 'react';
import CircuitCanvas from './circuit-canvas';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Terminal, Activity, Zap, Cpu } from 'lucide-react';
import { COMPANY_STATS } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#070D1B] bg-dark-grid transition-colors duration-300">
      {/* Interactive Floating Circuit Canvas Background */}
      <CircuitCanvas />

      {/* Radial Glow Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-lime-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide shadow-md dark:shadow-lg dark:shadow-cyan-950/40 mb-6 backdrop-blur-md transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span>INNOVATING FOR TOMORROW</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-slate-700 dark:text-slate-300">Enterprise AI & Cloud Architectures</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors">
              Engineering the <br className="hidden sm:block" />
              <span className="text-gradient-primary">Next Digital Horizon</span> for Growing Enterprises
            </h1>

            {/* Body Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 transition-colors">
              Ascoryn Tech delivers high-velocity custom software, autonomous AI systems, scalable multi-cloud infrastructure, and zero-trust cybersecurity engineered for market leaders.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white font-bold text-base hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 text-center group"
              >
                <span>Book a Tech Strategy Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#case-studies"
                className="px-7 py-4 rounded-xl bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <span>View Proven Case Studies</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full transition-colors">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0" />
                <span>SOC2 & ISO Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Zero-Trust Security</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>99.99% SLA Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Live Tech Preview Interactive Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-900/95 dark:bg-slate-900/90 border border-slate-800 dark:border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-500">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md text-[11px] font-mono text-cyan-400 border border-cyan-500/20">
                  <Activity className="w-3 h-3 text-lime-400 animate-pulse" />
                  <span>ASCORYN_CORE_V4.2 :: ACTIVE</span>
                </div>
              </div>

              {/* Console / Terminal Highlights */}
              <div className="bg-[#050B16] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-3 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5 text-lime-400 font-semibold">
                    <Terminal className="w-3.5 h-3.5" /> ascoryn-engine.ts
                  </span>
                  <span>Node: Cloud-West-01</span>
                </div>
                
                <div className="text-slate-400 leading-relaxed text-[11.5px]">
                  <span className="text-purple-400">import</span> &#123; AICluster, SecurityVault &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;@ascoryn/core&apos;</span>;
                  <br />
                  <span className="text-blue-400">const</span> system = <span className="text-purple-400">new</span> <span className="text-amber-300">AICluster</span>(&#123; throughput: <span className="text-cyan-400">&apos;100k req/sec&apos;</span> &#125;);
                  <br />
                  <span className="text-slate-500">// Deploying Zero-Trust Cloud Mesh</span>
                  <br />
                  system.<span className="text-cyan-300">deployAutoScaling</span>(&#123; region: <span className="text-emerald-400">&apos;global&apos;</span> &#125;);
                </div>

                {/* Micro Metrics Dashboard inside Code Preview */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/20">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-cyan-400" /> Latency Speed
                    </div>
                    <div className="text-lg font-bold text-lime-400 mt-0.5">&lt; 14ms</div>
                    <div className="text-[9px] text-slate-400">Global CDN Accelerated</div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-lime-500/20">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3 h-3 text-lime-400" /> Automated Security
                    </div>
                    <div className="text-lg font-bold text-cyan-400 mt-0.5">100% Active</div>
                    <div className="text-[9px] text-slate-400">Continuous Penetration Shield</div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Stats Bar */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2">
                {COMPANY_STATS.map((stat, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <div className="text-base font-extrabold text-white">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
