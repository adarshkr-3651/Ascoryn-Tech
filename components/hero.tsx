'use client';

import React from 'react';
import CircuitCanvas from './circuit-canvas';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Terminal, Activity, Zap, Cpu } from 'lucide-react';
import { COMPANY_STATS } from '@/lib/data';
import DirectAccessCard from './direct-access-card';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-0 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#070D1B] transition-colors duration-300">
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
              <span className="text-slate-700 dark:text-slate-300">Enterprise AI, Full-Stack, Cloud & DevOps</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors">
              Engineering the <br className="hidden sm:block" />
              <span className="text-gradient-primary">Next Digital Horizon</span> for Growing Enterprises
            </h1>

            {/* Body Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 transition-colors">
              Ascoryn Tech delivers high-velocity custom software, autonomous AI systems, scalable multi-cloud infrastructure, and advanced FinTech solutions engineered for market leaders.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white font-bold text-base hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 text-center group"
              >
                <span>Book a Tech Consult Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-7 py-4 rounded-xl bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <span>Explore Core Services</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full transition-colors">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0" />
                <span>Enterprise-Grade Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>99.99% SLA Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Live Tech Preview Interactive Card */}
          <DirectAccessCard />

        </div>
      </div>
    </section>
  );
}
