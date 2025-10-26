import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Ready to accelerate your SaaS?</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Tell us about your product and goals. We’ll propose a pragmatic engagement that ships value in weeks, not months.
        </p>
        <form className="mt-8 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <input type="text" name="name" placeholder="Name" className="col-span-1 md:col-span-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="email" name="email" placeholder="Email" className="col-span-1 md:col-span-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <button type="submit" className="col-span-1 md:col-span-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-4 py-3 transition">Request Proposal</button>
        </form>
      </div>
    </section>
  );
}
