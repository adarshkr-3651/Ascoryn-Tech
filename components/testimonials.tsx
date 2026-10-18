'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#050B16] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-lime-600 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4 transition-colors">
            <Award className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
            <span>CLIENT SUCCESS & TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Trusted by <span className="text-gradient-lime-cyan">Visionary Tech Leaders</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg transition-colors">
            Read how Ascoryn Tech partnered with global CTOs and enterprise engineering teams to accelerate product delivery and scale infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl relative"
            >
              <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6 transition-colors">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div>
                {/* Impact Badge */}
                <div className="mb-6 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                  <span>{item.results}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <img
                    src={item.avatar}
                    alt={`${item.name} - ${item.company}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border-2 border-cyan-500/40 shrink-0"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </div>
                    {item.role && <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>}
                    <div className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-300">{item.company}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
