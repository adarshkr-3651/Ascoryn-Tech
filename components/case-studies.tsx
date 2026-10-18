'use client';

import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '@/lib/data';
import { ExternalLink, Award, Layers, X, Zap } from 'lucide-react';

export default function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Enterprise Cloud', 'AI Automation', 'Custom SaaS', 'FinTech & Security'];

  const filteredStudies = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-slate-50 dark:bg-[#050B16] relative overflow-hidden transition-colors duration-300">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-lime-600 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
              <Award className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span>PROVEN ENTERPRISE IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
              Featured <span className="text-gradient-lime-cyan">Case Studies</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-slate-200 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-cyan-500/50 shadow-sm'
                    : 'bg-white dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className={`rounded-2xl bg-gradient-to-br ${study.imageBg} border border-slate-800/80 p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl relative overflow-hidden text-white`}
            >
              <div className="relative z-10">
                {/* Industry & Client Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-950/90 text-cyan-300 border border-cyan-500/30">
                    {study.industry}
                  </span>
                  <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-lime-400" /> {study.client}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Performance Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-extrabold text-lime-400">{metric.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Full Breakdown Button */}
              <button
                onClick={() => setSelectedCaseStudy(study)}
                className="w-full py-3 rounded-xl bg-slate-950/90 border border-slate-800 group-hover:border-cyan-500/40 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all relative z-10"
              >
                <span>Read Full Architectural Blueprint & Results</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Detail View */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-300">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                  {selectedCaseStudy.category} • {selectedCaseStudy.industry}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
                <div className="text-xs text-slate-400 mt-1">Client: {selectedCaseStudy.client}</div>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              
              {/* Challenge & Solution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-5 rounded-xl border border-red-500/20">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">The Challenge</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>
                <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/20">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Ascoryn Tech Solution</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Measured Business Impact */}
              <div className="bg-slate-950 p-5 rounded-xl border border-lime-500/30">
                <div className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-lime-400" /> Measured Business Impact
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">{selectedCaseStudy.impact}</p>
              </div>

              {/* Metrics Summary */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Metrics Achieved</h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCaseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-lg text-center border border-slate-800">
                      <div className="text-base font-extrabold text-lime-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Call */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Want similar results for your tech stack?</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold"
                >
                  Schedule Solution Architecture Call
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
