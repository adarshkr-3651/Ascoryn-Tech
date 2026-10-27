'use client';

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function CostCalculator() {
  const [goal, setGoal] = useState<'app' | 'ai' | 'fintech' | 'cloud'>('app');
  const [tier, setTier] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [speed, setSpeed] = useState<'standard' | 'accelerated' | 'blitz'>('accelerated');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['sre', 'soc2']);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Base Calculation Logic (in NPR / Rs.)
  const goalRates = {
    app: { base: 150000, label: 'Full-Stack Enterprise Software', roi: '3x Speed to Market' },
    ai: { base: 140000, label: 'AI & Intelligent Automations', roi: '350% Efficiency Increase' },
    fintech: { base: 180000, label: 'FinTech Core & Asset Engine', roi: 'Sub-Second Settlement' },
    cloud: { base: 160000, label: 'Cloud DevOps Architecture & SRE', roi: '45% Infra Cost Cut' },
  };

  const tierMultipliers = {
    mvp: { mult: 0.8, timeline: '3 - 5 Weeks', label: 'Startup MVP' },
    growth: { mult: 1.5, timeline: '6 - 8 Weeks', label: 'Growth Enterprise' },
    enterprise: { mult: 2.8, timeline: '10 - 14 Weeks', label: 'Global Scale' },
  };

  const speedMultipliers = {
    standard: { mult: 1.0, label: 'Standard Delivery' },
    accelerated: { mult: 1.25, label: 'Accelerated Sprint (+25%)' },
    blitz: { mult: 1.6, label: 'Blitzkrieg Priority (+60%)' },
  };

  const addonPrices: Record<string, { label: string; price: number }> = {
    sre: { label: '24/7 SRE Monitoring & SLA', price: 25000 },
    soc2: { label: 'SOC2 / ISO 27001 Audit Prep', price: 35000 },
    rag: { label: 'Custom Fine-Tuned Vector RAG', price: 40000 },
    dr: { label: 'Multi-Cloud Disaster Recovery', price: 30000 },
  };

  const basePrice = goalRates[goal].base * tierMultipliers[tier].mult * speedMultipliers[speed].mult;
  const addonsTotal = selectedAddons.reduce((sum, key) => sum + (addonPrices[key]?.price || 0), 0);
  const estimatedCostMin = Math.round((basePrice + addonsTotal) * 0.9);
  const estimatedCostMax = Math.round((basePrice + addonsTotal) * 1.15);


  return (
    <section id="calculator" className="py-24 bg-slate-50 dark:bg-[#050B16] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-lime-600 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
            <Calculator className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Estimate Your <span className="text-gradient-lime-cyan">Project Scope & ROI</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg transition-colors">
            Configure your technical needs below to receive instant pricing estimates, projected delivery timelines, and expected ROI impact.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl dark:shadow-2xl transition-colors">
            
            {/* Step 1: Goal Selection */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Core Primary Goal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['app', 'ai', 'fintech', 'cloud'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setGoal(key)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      goal === key
                        ? 'bg-slate-100 dark:bg-slate-800 border-cyan-500 text-slate-900 dark:text-white shadow-md shadow-cyan-500/20'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{goalRates[key].label}</div>
                    <div className="text-[11px] text-lime-600 dark:text-lime-400">{goalRates[key].roi}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale Tier */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                2. Project Scope & Architecture Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {(['mvp', 'growth', 'enterprise'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      tier === t
                        ? 'bg-slate-100 dark:bg-slate-800 border-lime-500 text-lime-600 dark:text-lime-400 shadow-md shadow-lime-500/20'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 dark:text-white text-xs">{tierMultipliers[t].label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{tierMultipliers[t].timeline}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Speed / Priority */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                3. Delivery Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {(['standard', 'accelerated', 'blitz'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      speed === s
                        ? 'bg-slate-100 dark:bg-slate-800 border-cyan-500 text-cyan-600 dark:text-cyan-300 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {speedMultipliers[s].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Addon Services */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                4. Value Add-On Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(addonPrices).map(([key, data]) => {
                  const isChecked = selectedAddons.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-slate-100 dark:bg-slate-800 border-lime-500/60 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>{data.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-lime-500 border-lime-400 text-slate-950' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Column (Stays sleek dark proposal card in both modes for maximum impact!) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calculator className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">PROJECTED ESTIMATE</span>
                <h3 className="text-2xl font-bold text-white mt-1">Ascoryn Proposal Summary</h3>
              </div>

              {/* Cost Range */}
              <div className="bg-slate-950/90 p-5 rounded-xl border border-cyan-500/30">
                <div className="text-xs text-slate-400 mb-1">Estimated Budget Range</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-lime-400">
                  Rs. {estimatedCostMin.toLocaleString()} - Rs. {estimatedCostMax.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Includes full design, code, cloud setup & QA</div>
              </div>


              {/* Highlights */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">Selected Goal:</span>
                  <span className="font-bold text-white">{goalRates[goal].label}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">Estimated Timeline:</span>
                  <span className="font-bold text-cyan-400">{tierMultipliers[tier].timeline}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">Target ROI Gain:</span>
                  <span className="font-bold text-lime-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-lime-400" />
                    {goalRates[goal].roi}
                  </span>
                </div>
              </div>

              {/* Lock-In Action CTA */}
              <a
                href="#contact"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Estimate & Book Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>No commitment required. 100% confidential consultation.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
