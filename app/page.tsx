import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ServicesSection from '@/components/services';
import CaseStudiesSection from '@/components/case-studies';
import TechStackSection from '@/components/tech-stack';
import CostCalculator from '@/components/cost-calculator';
import AboutVisionSection from '@/components/about-vision';
import TestimonialsSection from '@/components/testimonials';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Circuit Animation & Code Card */}
      <Hero />

      {/* Services & Capabilities Matrix */}
      <ServicesSection />

      {/* Case Studies & Proven Results Showcase */}
      <CaseStudiesSection />

      {/* Filterable Tech Stack Explorer */}
      <TechStackSection />

      {/* Interactive Project Cost & ROI Estimator */}
      <CostCalculator />

      {/* Vision & Core Values */}
      <AboutVisionSection />

      {/* Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* Contact Hub, Inquiry Form & FAQs */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

