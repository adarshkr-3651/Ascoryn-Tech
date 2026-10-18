import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ServicesSection from '@/components/services';
import TechStackSection from '@/components/tech-stack';
import CostCalculator from '@/components/cost-calculator';
import AboutVisionSection from '@/components/about-vision';
import TestimonialsSection from '@/components/testimonials';
import ContactSection from '@/components/contact-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Circuit Animation & Code Card */}
      <Hero />

      {/* Contact Hub, Inquiry Form & FAQs */}
      <ContactSection />

      {/* Filterable Tech Stack Explorer */}
      <TechStackSection />

      {/* Services & Capabilities Matrix */}
      <ServicesSection />

      {/* Interactive Project Cost & ROI Estimator */}
      <CostCalculator />

      {/* Vision & Core Values */}
      <AboutVisionSection />

      {/* Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

