'use client';

import React, { useState } from 'react';
import { TECH_STACK } from '@/lib/data';
import { Code, Terminal, Cpu, Globe, Server, Database, Brain, Layers, Box, Shield, GitBranch, Sparkles } from 'lucide-react';

const techIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Atom: <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />,
  Code: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Palette: <Sparkles className="w-5 h-5 text-lime-600 dark:text-lime-400" />,
  Server: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Terminal: <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Cloud: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-500" />,
  Brain: <Brain className="w-5 h-5 text-lime-600 dark:text-lime-400" />,
  Database: <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Layers: <Layers className="w-5 h-5 text-teal-600 dark:text-teal-300" />,
  Box: <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-lime-600 dark:text-lime-500" />,
  Shield: <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Cloud', 'AI & Data', 'DevOps & Cyber'];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 bg-white dark:bg-[#070D1B] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
            <span>MODERN STACK & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Engineered with <span className="text-gradient-primary">Battle-Tested Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg transition-colors">
            We leverage state-of-the-art frameworks, high-throughput cloud infrastructure, and predictive AI tooling to build resilient enterprise and FinTech platforms.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform shadow-sm">
                  {techIconMap[tech.icon] || <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{tech.category}</span>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                  <span>Architecture Mastery</span>
                  <span className="text-lime-600 dark:text-lime-400 font-bold">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-300 dark:border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-400 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-300 transition-colors">
                <span className="text-slate-500 dark:text-slate-400">Best For: </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{tech.popularFor}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
