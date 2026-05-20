'use client';

import { ArrowLeft } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { bioContent, BioLanguageContent, BioSectionKey } from '@/data/bio';
import { InternalPageShell } from '@/components/layout/InternalPageShell';
import { OldPhotosCarousel } from '@/components/sections/OldPhotosCarousel';

const sectionKeys: BioSectionKey[] = ['biography', 'statement', 'cv'];

export function BioContent() {
  const locale = useLocale();
  const content = bioContent[locale] ?? bioContent.es;

  const [activeSection, setActiveSection] = useState<BioSectionKey | null>(null);

  return (
    <InternalPageShell
      sideImageSrc="/images/portada/portada-web.jpg"
      sideImageAlt="Artwork detail by Norberto D’Abreu"
      sideImagePosition="center center"
    >
      <div className="flex h-full min-h-0 flex-col gap-4 max-lg:h-auto">
        <section
          className="
            min-h-0
            flex-1
            overflow-hidden
            rounded-[2rem]
            border
            border-dashed
            border-black/25
            bg-white/25
            max-lg:flex-none
            max-lg:overflow-visible
          "
        >
          {activeSection === null ? (
            <div className="flex h-full min-h-0 flex-col max-lg:h-auto">
              <div className="flex items-center justify-between border-b border-dashed border-black/15 px-8 py-5 max-lg:px-6">
                <Link
                  href="/"
                  className="sketch-nav inline-flex items-center gap-2 text-lg text-black/50 transition hover:text-black"
                >
                  <ArrowLeft size={19} />
                  {content.backToMainMenu}
                </Link>

                <p className="sketch-nav text-lg text-[#1f6f8b]">
                  {content.pageLabel}
                </p>
              </div>

              <div className="flex flex-1 items-start p-10 max-lg:p-6">
                <div className="flex flex-col gap-7 pt-2 max-lg:gap-4">
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
                        max-lg:text-2xl
                      "
                    >
                      • {content.tabs[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <article className="flex h-full min-h-0 flex-col max-lg:h-auto">
              <div className="flex items-center justify-between border-b border-dashed border-black/15 px-8 py-5 max-lg:px-6">
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

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  p-10
                  pr-12
                  max-lg:overflow-visible
                  max-lg:p-6
                "
              >
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
      </div>
    </InternalPageShell>
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