'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { bioContent, BioLanguageContent, BioSectionKey } from '@/data/bio';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { OldPhotosCarousel } from '@/components/sections/OldPhotosCarousel';

const sectionKeys: BioSectionKey[] = ['biography', 'statement', 'cv'];

export function BioContent() {
  const locale = useLocale();
  const content = bioContent[locale] ?? bioContent.es;

  const [activeSection, setActiveSection] = useState<BioSectionKey | null>(null);
  const isReadingSection = activeSection !== null;

  return (
    <section className="paper-texture h-screen overflow-hidden text-[#1b1a18]">
      <div className="absolute right-8 top-8 z-30 hidden md:block">
        <LanguageSwitcher />
      </div>

      {/* Desktop */}
      <div
        className={[
          'hidden h-screen min-h-0 items-center justify-center px-8 py-6 lg:grid',
          isReadingSection
            ? 'grid-cols-[320px_minmax(780px,1080px)] gap-10'
            : 'grid-cols-[340px_minmax(760px,980px)] gap-12',
        ].join(' ')}
      >
        <aside className="flex h-[calc(100vh-5rem)] min-h-0 flex-col justify-center">
          <Link
            href="/"
            className={[
              'display-title mb-4 block w-full whitespace-nowrap text-left leading-[0.85] tracking-[-0.045em] text-black',
              isReadingSection ? 'text-[1.95rem]' : 'text-[2.15rem]',
            ].join(' ')}
          >
            Norberto D’Abreu
          </Link>

          <Image
            src="/images/portada/portada-web.jpg"
            alt="Artwork detail by Norberto D’Abreu"
            width={1200}
            height={1600}
            priority
            sizes="340px"
            className={[
              'block h-auto w-full object-contain object-left-top',
              isReadingSection
                ? 'max-h-[calc(100vh-8rem)]'
                : 'max-h-[calc(100vh-7rem)]',
            ].join(' ')}
          />
        </aside>

        <main className="flex h-[calc(100vh-5rem)] min-h-0 flex-col gap-5">
          <p className="sketch-nav text-xl text-[#1f6f8b]">
            {content.pageLabel}
          </p>

          <section className="min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-dashed border-black/25 bg-white/25">
            {activeSection === null ? (
              <div className="flex h-full min-h-0 flex-col">
                <div className="border-b border-dashed border-black/15 px-8 py-5">
                  <Link
                    href="/"
                    className="sketch-nav inline-flex items-center gap-2 text-lg text-black/50 transition hover:text-black"
                  >
                    <ArrowLeft size={19} />
                    {content.backToMainMenu}
                  </Link>
                </div>

                <div className="flex flex-1 items-start p-10">
                  <div className="flex flex-col gap-7 pt-2">
                    {sectionKeys.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveSection(key)}
                        className="sketch-nav text-left text-3xl leading-tight text-black/70 transition hover:translate-x-2 hover:text-black"
                      >
                        • {content.tabs[key]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <article className="flex h-full min-h-0 flex-col">
                <div className="flex items-center justify-between border-b border-dashed border-black/15 px-8 py-5">
                  <button
                    type="button"
                    onClick={() => setActiveSection(null)}
                    className="sketch-nav flex items-center gap-2 text-lg text-black/55 transition hover:text-black"
                  >
                    <ArrowLeft size={20} />
                    {content.backToBioMenu}
                  </button>

                  <p className="sketch-nav text-lg text-black/35">
                    {content.tabs[activeSection]}
                  </p>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-10 pr-12">
                  <BioSectionContent
                    activeSection={activeSection}
                    content={content}
                  />
                </div>
              </article>
            )}
          </section>

          <OldPhotosCarousel
            title={content.oldPhotos.title}
            previousLabel={content.oldPhotos.previousLabel}
            nextLabel={content.oldPhotos.nextLabel}
          />
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

        <main className="py-8">
          <p className="sketch-nav mb-5 text-xl text-[#1f6f8b]">
            {content.pageLabel}
          </p>

          <section className="rounded-[2rem] border border-black/10 bg-white/30 p-6">
            {activeSection === null ? (
              <>
                <Link
                  href="/"
                  className="sketch-nav mb-7 inline-flex items-center gap-2 text-lg text-black/50"
                >
                  <ArrowLeft size={19} />
                  {content.backToMainMenu}
                </Link>

                <div className="flex flex-col gap-4">
                  {sectionKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveSection(key)}
                      className="sketch-nav text-left text-2xl text-black/70"
                    >
                      • {content.tabs[key]}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setActiveSection(null)}
                  className="sketch-nav mb-6 flex items-center gap-2 text-lg text-black/55"
                >
                  <ArrowLeft size={20} />
                  {content.backToBioMenu}
                </button>

                <BioSectionContent
                  activeSection={activeSection}
                  content={content}
                />
              </>
            )}
          </section>

          <div className="mt-6">
            <OldPhotosCarousel
              compact
              title={content.oldPhotos.title}
              previousLabel={content.oldPhotos.previousLabel}
              nextLabel={content.oldPhotos.nextLabel}
            />
          </div>
        </main>
      </div>
    </section>
  );
}

type BioSectionContentProps = {
  activeSection: BioSectionKey;
  content: BioLanguageContent;
};

function BioSectionContent({
  activeSection,
  content,
}: BioSectionContentProps) {
  if (activeSection === 'biography') {
    return (
      <>
        <h1 className="display-title text-5xl leading-none text-black max-lg:text-4xl">
          {content.biography.title}
        </h1>

        <div className="mt-7 space-y-5 text-[1rem] leading-7 text-black/70 max-lg:text-base">
          {content.biography.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </>
    );
  }

  if (activeSection === 'statement') {
    return (
      <>
        <h1 className="display-title text-5xl leading-none text-black max-lg:text-4xl">
          {content.statement.title}
        </h1>

        <div className="mt-7 space-y-5 text-[1rem] leading-7 text-black/70 max-lg:text-base">
          {content.statement.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="display-title text-5xl leading-none text-black max-lg:text-4xl">
        {content.cv.title}
      </h1>

      <div className="mt-7 space-y-7">
        {content.cv.groups.map((group) => (
          <section key={group.title}>
            <h2 className="sketch-nav mb-3 text-2xl text-black">
              {group.title}
            </h2>

            <ul className="space-y-2 text-[0.98rem] leading-6 text-black/70 max-lg:text-base">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}