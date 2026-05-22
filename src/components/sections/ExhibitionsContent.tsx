'use client';

import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { InternalPageShell } from '@/components/layout/InternalPageShell';
import {
  ExhibitionItem,
  ExhibitionLocaleContent,
  ExhibitionsLanguageContent,
  exhibitions,
  exhibitionsContent,
  getExhibitionGalleryImages,
  getLocalizedExhibition,
} from '@/data/exhibitions';

export function ExhibitionsContent() {
  const locale = useLocale();
  const content = exhibitionsContent[locale] ?? exhibitionsContent.es;

  const [selectedExhibition, setSelectedExhibition] =
    useState<ExhibitionItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function openExhibition(exhibition: ExhibitionItem) {
    setSelectedExhibition(exhibition);
    setActiveImageIndex(0);
    setIsLightboxOpen(false);
  }

  function closeExhibition() {
    setSelectedExhibition(null);
    setActiveImageIndex(0);
    setIsLightboxOpen(false);
  }

  if (selectedExhibition) {
    return (
      <FullExhibitionDetail
        locale={locale}
        content={content}
        exhibition={selectedExhibition}
        activeImageIndex={activeImageIndex}
        isLightboxOpen={isLightboxOpen}
        onBack={closeExhibition}
        onPreviousImage={() =>
          setActiveImageIndex((current) => {
            const images = getExhibitionGalleryImages(selectedExhibition);
            return current === 0 ? images.length - 1 : current - 1;
          })
        }
        onNextImage={() =>
          setActiveImageIndex((current) => {
            const images = getExhibitionGalleryImages(selectedExhibition);
            return current === images.length - 1 ? 0 : current + 1;
          })
        }
        onOpenLightbox={() => setIsLightboxOpen(true)}
        onCloseLightbox={() => setIsLightboxOpen(false)}
        onSelectImage={setActiveImageIndex}
      />
    );
  }

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
          <ExhibitionsList
            locale={locale}
            content={content}
            onSelectExhibition={openExhibition}
          />
        </section>
      </div>
    </InternalPageShell>
  );
}

type ExhibitionsListProps = {
  locale: string;
  content: ExhibitionsLanguageContent;
  onSelectExhibition: (exhibition: ExhibitionItem) => void;
};

function ExhibitionsList({
  locale,
  content,
  onSelectExhibition,
}: ExhibitionsListProps) {
  return (
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

      <div className="min-h-0 flex-1 overflow-y-auto p-8 pr-10 max-lg:overflow-visible max-lg:p-6">
        <div className="mb-8">
          <h1 className="display-title text-5xl leading-none text-black max-lg:text-4xl">
            {content.listTitle}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">
            {content.listSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {exhibitions.map((exhibition, index) => {
            const localized = getLocalizedExhibition(exhibition, locale);

            return (
              <button
                key={exhibition.slug}
                type="button"
                onClick={() => onSelectExhibition(exhibition)}
                className="
                  group
                  grid
                  w-full
                  grid-cols-[5.5rem_5rem_1fr_3rem]
                  items-center
                  gap-5
                  rounded-[1.6rem]
                  border
                  border-black/10
                  bg-white/20
                  px-4
                  py-3
                  text-left
                  transition
                  hover:border-black/25
                  hover:bg-white/45
                  max-md:grid-cols-[4.5rem_1fr]
                  max-md:gap-4
                "
              >
                <div className="relative h-24 w-20 overflow-hidden rounded-xl border border-black/10 bg-black/5 max-md:h-20 max-md:w-16">
                  {exhibition.catalogImage ? (
                    <Image
                      src={exhibition.catalogImage.src}
                      alt={exhibition.catalogImage.alt}
                      fill
                      sizes="96px"
                      className="object-contain p-1"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center px-2 text-center">
                      <span className="sketch-nav text-[0.7rem] uppercase tracking-[0.12em] text-black/35">
                        {content.miscellaneousLabel}
                      </span>
                    </div>
                  )}
                </div>

                <span className="sketch-nav text-xl text-black/45 transition group-hover:text-black max-md:hidden">
                  {exhibition.year}
                </span>

                <span className="min-w-0">
                  <span className="sketch-nav block text-2xl leading-none text-black/75 transition group-hover:text-black max-md:text-xl">
                    {localized.title}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-black/45">
                    {localized.location ?? localized.description}
                  </span>
                </span>

                <span className="sketch-nav justify-self-end text-sm text-black/25 transition group-hover:text-black/60 max-md:hidden">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type FullExhibitionDetailProps = {
  locale: string;
  content: ExhibitionsLanguageContent;
  exhibition: ExhibitionItem;
  activeImageIndex: number;
  isLightboxOpen: boolean;
  onBack: () => void;
  onPreviousImage: () => void;
  onNextImage: () => void;
  onOpenLightbox: () => void;
  onCloseLightbox: () => void;
  onSelectImage: (index: number) => void;
};

function FullExhibitionDetail({
  locale,
  content,
  exhibition,
  activeImageIndex,
  isLightboxOpen,
  onBack,
  onPreviousImage,
  onNextImage,
  onOpenLightbox,
  onCloseLightbox,
  onSelectImage,
}: FullExhibitionDetailProps) {
  const localized = getLocalizedExhibition(exhibition, locale);
  const galleryImages = getExhibitionGalleryImages(exhibition);
  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0];
  const hasImages = galleryImages.length > 0;

  return (
    <section className="paper-texture flex h-screen flex-col overflow-hidden text-[#1b1a18]">
      <header
        className="
          relative
          z-30
          flex
          h-[clamp(4.5rem,7vh,6rem)]
          shrink-0
          items-center
          justify-between
          border-b
          border-black/10
          px-[clamp(1.25rem,4vw,5rem)]
        "
      >
        <Link
          href="/"
          className="
            display-title
            whitespace-nowrap
            text-[clamp(2rem,2.8vw,3.85rem)]
            leading-none
            tracking-[-0.045em]
            text-black
            [@media_(max-height:1100px)]:text-[clamp(2rem,2.5vw,3.25rem)]
          "
        >
          Norberto D’Abreu
        </Link>

        <LanguageSwitcher />
      </header>

      <main className="min-h-0 flex-1 overflow-hidden px-[clamp(1rem,4vw,5rem)] py-[clamp(1rem,2.5vh,2rem)]">
        <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] border border-dashed border-black/25 bg-white/25">
          <div className="flex shrink-0 items-center justify-between border-b border-dashed border-black/15 px-8 py-5 max-lg:px-6">
            <button
              type="button"
              onClick={onBack}
              className="sketch-nav flex items-center gap-2 text-lg text-black/55 transition hover:text-black"
            >
              <ArrowLeft size={20} />
              {content.backToExhibitionsMenu}
            </button>

            <p className="sketch-nav text-lg text-[#1f6f8b]">
              {content.pageLabel}
            </p>
          </div>

          <div
            className="
              grid
              min-h-0
              flex-1
              grid-cols-[minmax(260px,340px)_minmax(0,1fr)]
              gap-[clamp(1rem,2vw,2rem)]
              overflow-hidden
              p-[clamp(0.9rem,2vh,1.5rem)]
              max-xl:grid-cols-1
              max-xl:overflow-y-auto
            "
          >
            <ExhibitionDetailInfo
              content={content}
              exhibition={exhibition}
              localized={localized}
              galleryCount={galleryImages.length}
            />

            <section className="flex h-full min-h-0 flex-col max-xl:h-auto">
              {hasImages && activeImage ? (
                <>
                  <div
                    className="
                      relative
                      min-h-[420px]
                      flex-1
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-black/10
                      bg-black/5
                      max-xl:h-[min(72vh,760px)]
                      max-xl:min-h-[460px]
                      max-xl:flex-none
                      max-md:h-[68vh]
                      max-md:min-h-[360px]
                      [@media_(max-height:900px)]:min-h-[340px]
                    "
                  >
                    <button
                      type="button"
                      onClick={onOpenLightbox}
                      className="group relative block h-full w-full overflow-hidden"
                      aria-label={content.openGalleryLabel}
                    >
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        fill
                        sizes="(min-width: 1280px) 65vw, 100vw"
                        className="object-contain p-3 transition duration-700 group-hover:scale-[1.01] max-md:p-2"
                        priority
                      />

                      <div className="absolute bottom-5 left-6 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/65 backdrop-blur-sm">
                        {content.openGalleryLabel}
                      </div>
                    </button>

                    {galleryImages.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={onPreviousImage}
                          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black transition hover:bg-white"
                          aria-label={content.previousLabel}
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <button
                          type="button"
                          onClick={onNextImage}
                          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black transition hover:bg-white"
                          aria-label={content.nextLabel}
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div className="mt-4 shrink-0">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <p className="sketch-nav text-sm uppercase tracking-[0.24em] text-black/35">
                        {localized.title}
                      </p>

                      <p className="text-sm text-black/35">
                        {activeImageIndex + 1} / {galleryImages.length}
                      </p>
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {galleryImages.map((image, index) => (
                        <button
                          key={`${image.src}-${index}`}
                          type="button"
                          onClick={() => onSelectImage(index)}
                          className={[
                            'relative h-24 w-20 shrink-0 overflow-hidden rounded-xl border bg-black/5 transition [@media_(max-height:900px)]:h-20 [@media_(max-height:900px)]:w-16',
                            activeImageIndex === index
                              ? 'border-black opacity-100'
                              : 'border-black/10 opacity-55 hover:opacity-100',
                          ].join(' ')}
                          aria-label={`${localized.title} ${index + 1}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="96px"
                            className="object-contain p-1"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex h-full min-h-[360px] items-center justify-center rounded-[2rem] border border-dashed border-black/20 bg-white/20 p-10 text-center">
                  <div>
                    <h2 className="sketch-nav text-3xl text-black/65">
                      {content.emptyGalleryTitle}
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-base leading-7 text-black/45">
                      {content.emptyGalleryText}
                    </p>
                  </div>
                </div>
              )}
            </section>
          </div>
        </article>
      </main>

      {isLightboxOpen && activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={onCloseLightbox}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
            aria-label={content.closeGalleryLabel}
          >
            <X size={22} />
          </button>

          {galleryImages.length > 1 ? (
            <button
              type="button"
              onClick={onPreviousImage}
              className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white max-md:left-3"
              aria-label={content.previousLabel}
            >
              <ChevronLeft size={26} />
            </button>
          ) : null}

          <div className="relative h-[92vh] w-[94vw]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="94vw"
              className="object-contain"
              priority
            />
          </div>

          {galleryImages.length > 1 ? (
            <button
              type="button"
              onClick={onNextImage}
              className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white max-md:right-3"
              aria-label={content.nextLabel}
            >
              <ChevronRight size={26} />
            </button>
          ) : null}

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm text-black">
            {activeImageIndex + 1} / {galleryImages.length}
          </p>
        </div>
      ) : null}
    </section>
  );
}

type ExhibitionDetailInfoProps = {
  content: ExhibitionsLanguageContent;
  exhibition: ExhibitionItem;
  localized: ExhibitionLocaleContent;
  galleryCount: number;
};

function ExhibitionDetailInfo({
  content,
  exhibition,
  localized,
  galleryCount,
}: ExhibitionDetailInfoProps) {
  return (
    <aside className="min-h-0 overflow-y-auto pr-2 max-xl:overflow-visible">
      <p className="sketch-nav text-xl text-[#1f6f8b]">{exhibition.year}</p>

      <h1
        className="
          display-title
          mt-3
          text-[clamp(2.35rem,3.2vw,4.2rem)]
          leading-[0.92]
          text-black
          [@media_(max-height:900px)]:text-[clamp(2rem,2.5vw,3rem)]
        "
      >
        {localized.title}
      </h1>

      {localized.location ? (
        <p className="mt-4 text-sm leading-6 text-black/50 [@media_(max-height:900px)]:mt-3 [@media_(max-height:900px)]:leading-5">
          {localized.location}
        </p>
      ) : null}

      <p className="mt-7 text-base leading-7 text-black/65 [@media_(max-height:900px)]:mt-5 [@media_(max-height:900px)]:text-sm [@media_(max-height:900px)]:leading-6">
        {localized.description}
      </p>

      <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white/25 p-5 [@media_(max-height:900px)]:mt-5 [@media_(max-height:900px)]:p-4">
        <p className="sketch-nav text-sm uppercase tracking-[0.24em] text-black/35">
          {content.catalogueLabel}
        </p>

        {exhibition.catalogImage ? (
          <div className="relative mt-4 aspect-[3/4] w-full overflow-hidden rounded-[1.1rem] border border-black/10 bg-black/5">
            <Image
              src={exhibition.catalogImage.src}
              alt={exhibition.catalogImage.alt}
              fill
              sizes="340px"
              className="object-contain p-2"
            />
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-black/55">
            {galleryCount} imágenes disponibles en la galería.
          </p>
        )}
      </div>
    </aside>
  );
}