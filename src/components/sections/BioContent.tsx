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
          items-center
          justify-center
          px-[clamp(2rem,4vw,5rem)]
          py-[clamp(1.5rem,3vh,3rem)]
          lg:grid
          [--bio-artwork-width:clamp(340px,24vw,520px)]
          [--bio-panel-width:clamp(760px,56vw,1280px)]
          grid-cols-[var(--bio-artwork-width)_var(--bio-panel-width)]
          gap-[clamp(2rem,4vw,5rem)]
        "
      >
        <aside className="flex h-[calc(100vh-5rem)] min-h-0 w-[var(--bio-artwork-width)] flex-col justify-center">
          <Link
            href="/"
            className="
              display-title
              mb-4
              block
              w-full
              whitespace-nowrap
              text-left
              text-[clamp(2.15rem,2.6vw,3.25rem)]
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
            sizes="(min-width: 1536px) 520px, (min-width: 1024px) 24vw, 100vw"
            className="
              block
              h-auto
              max-h-[calc(100vh-7rem)]
              w-full
              object-contain
              object-left-top
            "
          />
        </aside>

        <main className="flex h-[calc(100vh-4.5rem)] min-h-0 flex-col gap-4">
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
                        className="
                          sketch-nav
                          text-left
                          text-3xl
                          leading-tight
                          text-black/70
                          transition
                          hover:translate-x-2
                          hover:text-black
                        "
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
                    className="
                      sketch-nav
                      flex
                      items-center
                      gap-2
                      text-lg
                      text-black/55
                      transition
                      hover:text-black
                    "
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

  return <CvTimeline content={content} />;
}

type CvTimelineProps = {
  content: BioLanguageContent;
};

function CvTimeline({ content }: CvTimelineProps) {
  return (
    <>
      <h1 className="display-title text-5xl leading-none text-black max-lg:text-4xl">
        {content.cv.title}
      </h1>

      <div className="mt-9 space-y-11">
        {content.cv.groups.map((group) => (
          <section key={group.title} className="relative">
            <h2 className="sketch-nav mb-6 text-2xl text-black">
              {group.title}
            </h2>

            <div className="relative space-y-5 border-l border-black/15 pl-7">
              {group.items.map((item) => {
                const year = getTimelineYear(item);
                const text = getTimelineText(item);

                return (
                  <article
                    key={item}
                    className="
                      group
                      relative
                      rounded-2xl
                      border
                      border-black/10
                      bg-white/25
                      px-5
                      py-4
                      transition
                      hover:border-black/25
                      hover:bg-white/45
                    "
                  >
                    <span
                      className="
                        absolute
                        -left-[2.1rem]
                        top-5
                        h-3
                        w-3
                        rounded-full
                        border
                        border-black/30
                        bg-[#efeee8]
                        transition
                        group-hover:bg-black
                      "
                    />

                    <div className="grid gap-3 sm:grid-cols-[8rem_1fr]">
                      <div>
                        {year ? (
                          <p className="sketch-nav text-lg leading-none text-black">
                            {year}
                          </p>
                        ) : (
                          <p className="sketch-nav text-sm uppercase tracking-[0.22em] text-black/35">
                            —
                          </p>
                        )}
                      </div>

                      <p className="text-[0.98rem] leading-7 text-black/68">
                        {text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function getTimelineYear(item: string) {
  const separator = item.includes('·') ? '·' : null;

  if (!separator) {
    return null;
  }

  return item.split(separator)[0]?.trim() ?? null;
}

function getTimelineText(item: string) {
  const separator = item.includes('·') ? '·' : null;

  if (!separator) {
    return item;
  }

  return item.split(separator).slice(1).join(separator).trim();
}