import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm">
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span>UI/UX SaaS Agency</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Design that Converts. Interfaces that Delight.
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl md:text-lg">
          We craft modern SaaS experiences—research to production-ready design systems—so your product ships faster and grows stronger.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#work" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-5 py-3 transition">
            View Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition">
            Get a Proposal
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
    </section>
  );
}
