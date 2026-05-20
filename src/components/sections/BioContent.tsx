'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { bioContent, BioSectionKey } from '@/data/bio';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

const sectionKeys: BioSectionKey[] = ['biography', 'statement', 'cv'];

export function BioContent() {
  const locale = useLocale();
  const tNav = useTranslations('nav');
  const content = bioContent[locale] ?? bioContent.es;
  const [activeSection, setActiveSection] = useState<BioSectionKey>('biography');

  return (
    <section className="paper-texture h-screen overflow-hidden text-[#1b1a18]">
      <div className="absolute right-8 top-8 z-30 hidden md:block">
        <LanguageSwitcher />
      </div>

      {/* Desktop */}
      <div
        className="
          hidden
          h-screen
          min-h-0
          grid-cols-[360px_230px_minmax(520px,720px)]
          items-center
          justify-center
          gap-8
          px-8
          py-6
          lg:grid
        "
      >
        <aside className="flex h-full min-h-0 flex-col justify-center">
          <Link
            href="/"
            className="
              display-title
              mb-4
              block
              w-full
              whitespace-nowrap
              text-center
              text-[2.25rem]
              leading-[0.85]
              tracking-[-0.045em]
              text-black
            "
          >
            Norberto D’Abreu
          </Link>

          <Image
            src="/images/portada/portada-web.jpg"
            alt="Artwork detail by Norberto D’Abreu"
            width={1200}
            height={1600}
            priority
            sizes="360px"
            className="block h-auto max-h-[calc(100vh-7rem)] w-full object-contain"
          />
        </aside>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                sketch-nav
                whitespace-nowrap
                text-[1.65rem]
                leading-none
                text-black/75
                transition
                duration-300
                hover:translate-x-2
                hover:text-black
              "
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>

        <main className="flex h-[calc(100vh-5rem)] min-h-0 flex-col gap-5">
          <p className="sketch-nav text-xl text-[#1f6f8b]">
            {content.pageLabel}
          </p>

          <section className="grid min-h-0 flex-1 grid-cols-[220px_1fr] overflow-hidden rounded-[2rem] border border-dashed border-black/25 bg-white/25">
            <div className="border-r border-dashed border-black/20 p-6">
              <div className="flex flex-col gap-5">
                {sectionKeys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveSection(key)}
                    className={[
                      'sketch-nav text-left text-xl leading-tight transition',
                      activeSection === key
                        ? 'text-black'
                        : 'text-black/45 hover:text-black/75',
                    ].join(' ')}
                  >
                    • {content.tabs[key]}
                  </button>
                ))}
              </div>
            </div>

            <article className="min-h-0 overflow-y-auto p-7 pr-9">
              {activeSection === 'biography' ? (
                <>
                  <h1 className="display-title text-5xl leading-none text-black">
                    {content.biography.title}
                  </h1>

                  <div className="mt-7 space-y-5 text-[1rem] leading-7 text-black/70">
                    {content.biography.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </>
              ) : null}

              {activeSection === 'statement' ? (
                <>
                  <h1 className="display-title text-5xl leading-none text-black">
                    {content.statement.title}
                  </h1>

                  <div className="mt-7 space-y-5 text-[1rem] leading-7 text-black/70">
                    {content.statement.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </>
              ) : null}

              {activeSection === 'cv' ? (
                <>
                  <h1 className="display-title text-5xl leading-none text-black">
                    {content.cv.title}
                  </h1>

                  <div className="mt-7 space-y-7">
                    {content.cv.groups.map((group) => (
                      <section key={group.title}>
                        <h2 className="sketch-nav mb-3 text-2xl text-black">
                          {group.title}
                        </h2>

                        <ul className="space-y-2 text-[0.98rem] leading-6 text-black/70">
                          {group.items.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </>
              ) : null}
            </article>
          </section>

          <section className="h-[24vh] min-h-[150px] rounded-[2rem] border border-black/15 bg-white/25 p-6">
            <div className="flex h-full items-center justify-between gap-6">
              <button
                type="button"
                className="sketch-nav text-4xl text-black/45 transition hover:text-black"
                aria-label="Previous old photo"
              >
                ‹
              </button>

              <div className="text-center">
                <h2 className="sketch-nav text-4xl text-black/65">
                  {content.oldPhotos.title}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-black/45">
                  {content.oldPhotos.subtitle}
                </p>
              </div>

              <button
                type="button"
                className="sketch-nav text-4xl text-black/45 transition hover:text-black"
                aria-label="Next old photo"
              >
                ›
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile / tablet */}
      <div className="min-h-screen overflow-y-auto px-5 py-5 lg:hidden">
        <header className="flex items-start justify-between gap-4">
          <Link
            href="/"
            className="display-title max-w-[13rem] text-3xl leading-[0.9] text-black"
          >
            Norberto D’Abreu
          </Link>

          <LanguageSwitcher />
        </header>

        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-y border-black/10 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sketch-nav text-lg text-black/70"
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>

        <main className="py-8">
          <p className="sketch-nav mb-5 text-xl text-[#1f6f8b]">
            {content.pageLabel}
          </p>

          <div className="flex flex-wrap gap-3">
            {sectionKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveSection(key)}
                className={[
                  'rounded-full border px-4 py-2 text-sm transition',
                  activeSection === key
                    ? 'border-black bg-black text-white'
                    : 'border-black/15 bg-white/40 text-black/65',
                ].join(' ')}
              >
                {content.tabs[key]}
              </button>
            ))}
          </div>

          <section className="mt-6 rounded-[2rem] border border-black/10 bg-white/30 p-6">
            {activeSection === 'biography' ? (
              <>
                <h1 className="display-title text-4xl leading-none text-black">
                  {content.biography.title}
                </h1>

                <div className="mt-6 space-y-5 text-base leading-7 text-black/70">
                  {content.biography.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </>
            ) : null}

            {activeSection === 'statement' ? (
              <>
                <h1 className="display-title text-4xl leading-none text-black">
                  {content.statement.title}
                </h1>

                <div className="mt-6 space-y-5 text-base leading-7 text-black/70">
                  {content.statement.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </>
            ) : null}

            {activeSection === 'cv' ? (
              <>
                <h1 className="display-title text-4xl leading-none text-black">
                  {content.cv.title}
                </h1>

                <div className="mt-6 space-y-7">
                  {content.cv.groups.map((group) => (
                    <section key={group.title}>
                      <h2 className="sketch-nav mb-3 text-2xl text-black">
                        {group.title}
                      </h2>

                      <ul className="space-y-2 text-base leading-6 text-black/70">
                        {group.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </>
            ) : null}
          </section>

          <section className="mt-6 rounded-[2rem] border border-black/10 bg-white/30 p-6 text-center">
            <h2 className="sketch-nav text-3xl text-black/65">
              {content.oldPhotos.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-black/45">
              {content.oldPhotos.subtitle}
            </p>
          </section>
        </main>
      </div>
    </section>
  );
}