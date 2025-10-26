import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import TimelineSection from './components/TimelineSection';
import Work from './components/Work';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
      <Hero />
      <Services />
      <TimelineSection />
      <Work />
      <CTA />
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Flux UI — SaaS UX Agency. All rights reserved.
      </footer>
    </div>
  );
}
