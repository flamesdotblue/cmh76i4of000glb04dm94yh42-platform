import React from 'react';

const items = [
  {
    year: '2024',
    images: [
      'https://images.unsplash.com/photo-1653971857873-d5e3f0b8a868?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559136655-8d9c8f5f9c3f?q=80&w=1200&auto=format&fit=crop'
    ],
    text: 'Launched multiple SaaS templates and component kits.'
  },
  {
    year: 'Early 2023',
    images: [
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526483360412-f4dbaf036963?q=80&w=1200&auto=format&fit=crop'
    ],
    text: 'Scaled design system workstreams and shipped pro sections.'
  },
  {
    year: 'Changelog',
    images: [
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd6632?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545665277-5937489579d6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop'
    ],
    text: 'Deployed new components and landing flows.'
  }
];

export default function Work() {
  return (
    <section id="work" className="bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Recent work</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">Selected highlights showing product depth and visual quality.</p>

        <div className="mt-10 grid gap-8">
          {items.map((item) => (
            <div key={item.year} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{item.year}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.text}</p>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.images.map((src, i) => (
                  <img key={i} src={src} alt="Case study" className="w-full h-32 md:h-48 lg:h-60 object-cover rounded-lg shadow" loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
