import React from 'react';
import { Terminal, Activity, Zap, Cpu } from 'lucide-react';
import { COMPANY_STATS } from '@/lib/data';

export default function TerminalPreviewCard() {
  return (
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
            <span className="text-purple-400">import</span> &#123; FinTechCore, AICluster &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;@ascoryn/core&apos;</span>;
            <br />
            <span className="text-blue-400">const</span> system = <span className="text-purple-400">new</span> <span className="text-amber-300">FinTechCore</span>(&#123; throughput: <span className="text-cyan-400">&apos;100k req/sec&apos;</span> &#125;);
            <br />
            <span className="text-slate-500">// Initializing Autonomous Ledger</span>
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
                <Zap className="w-3 h-3 text-lime-400" /> System Uptime
              </div>
              <div className="text-lg font-bold text-cyan-400 mt-0.5">99.999%</div>
              <div className="text-[9px] text-slate-400">High-Throughput FinTech Core</div>
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
  );
}
