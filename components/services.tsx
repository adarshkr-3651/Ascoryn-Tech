'use client';

import React, { useState } from 'react';
import { SERVICES, Service } from '@/lib/data';
import { Cpu, CloudLightning, Code2, Landmark, Wallet, Layout, ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />,
  CloudLightning: <CloudLightning className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
  Code2: <Code2 className="w-7 h-7 text-lime-600 dark:text-lime-400" />,
  Landmark: <Landmark className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
  Wallet: <Wallet className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
  Layout: <Layout className="w-7 h-7 text-cyan-600 dark:text-cyan-300" />,
};

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);
  const categories = ['All', 'AI & Data', 'Cloud & Engineering', 'FinTech Solutions'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#070D1B] relative overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
            <span>OUR CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Architected for <span className="text-gradient-primary">Unrivaled Performance</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg transition-colors">
            Ascoryn Tech delivers end-to-end technical mastery across enterprise software, autonomous AI models, cloud infrastructure, and advanced fintech solutions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-xl"
            >
              {/* Top Row: Icon + Metric Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 group-hover:scale-110 transition-transform shadow-sm">
                    {iconMap[service.iconName] || <Cpu className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-950 text-lime-700 dark:text-lime-400 border border-lime-500/30">
                    ⚡ {service.metrics}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 transition-colors">
                  {service.shortDesc}
                </p>

                {/* Feature Bullet Highlights */}
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <button
                onClick={() => setActiveModalService(service)}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/40 text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>View Full Architecture & Specs</span>
                <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  {iconMap[activeModalService.iconName]}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {activeModalService.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeModalService.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-slate-700 dark:text-slate-300">
              <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">{activeModalService.fullDesc}</p>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Key Technical Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Proven ROI Impact Benchmark</div>
                  <div className="text-lg font-bold text-lime-600 dark:text-lime-400">{activeModalService.metrics}</div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg"
                >
                  Request Customized Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
