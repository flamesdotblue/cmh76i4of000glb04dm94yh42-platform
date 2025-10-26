import React from 'react';
import { LayoutDashboard, Palette, Component, MousePointerClick } from 'lucide-react';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Product UX Strategy',
    desc: 'User research, journey mapping, and measurable UX roadmaps for SaaS.'
  },
  {
    icon: Palette,
    title: 'Design Systems',
    desc: 'Token-driven UI kits, shadcn + Tailwind foundations, and Figma libraries.'
  },
  {
    icon: Component,
    title: 'Component Libraries',
    desc: 'Accessible, reusable React components tuned for velocity and quality.'
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Design',
    desc: 'Landing pages and onboarding flows that increase activation and ARR.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">What we do</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Senior-level UX and UI for SaaS teams. Plug into our process or let us own the full journey.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-emerald-100/60 dark:bg-emerald-500/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
