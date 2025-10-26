import React from 'react';
import { Timeline } from './ui/timeline';

export default function TimelineSection() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched SaaS UI kits and pro libraries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop" alt="dashboard" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="cards" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="charts" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="code" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded design system coverage and component density.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Introduced templates for hero, features, and bento-style grids.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" alt="team" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" alt="workflow" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop" alt="bento" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop" alt="cards" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
          </div>
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            New components and templates deployed.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Card grid component</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Startup landing template</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ File uploader module</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Billing UI patterns</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Onboarding flows</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" alt="hero" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1527118732049-3d07ee61a2b3?q=80&w=1200&auto=format&fit=crop" alt="features" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop" alt="bento" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="cards" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-950">
      <Timeline data={data} />
    </section>
  );
}
