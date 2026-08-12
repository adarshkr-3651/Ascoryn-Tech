'use client';

import React, { useState, useEffect } from 'react';
import AscorynLogo from './logo';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Sync theme on mount & set default light theme
  useEffect(() => {
    const savedTheme = (localStorage.getItem('ascoryn_theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('ascoryn_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'ROI Estimator', href: '#calculator' },
    { name: 'Vision', href: '#vision' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070D1B]/85 backdrop-blur-xl border-b border-slate-200 dark:border-cyan-500/15 py-3 shadow-lg shadow-slate-900/5 dark:shadow-2xl dark:shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <AscorynLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-colors">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-800/80 rounded-full transition-all duration-200 shadow-2xl"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Theme Toggle Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Functional Theme Button (Default Light) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex items-center justify-center group shadow-sm"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700 group-hover:rotate-12 transition-transform" />
            ) : (
              <Sun className="w-4 h-4 text-lime-400 group-hover:rotate-45 transition-transform" />
            )}
          </button>

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-cyan-500 via-blue-600 to-lime-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#070D1B] text-slate-900 dark:text-white rounded-full group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 group-hover:text-white transition-colors" />
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 text-lime-600 dark:text-lime-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-lime-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070D1B]/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-2xl px-4 pt-4 pb-6 mt-2 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-lime-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-cyan-500/20"
              >
                Book a Free Tech Strategy Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
