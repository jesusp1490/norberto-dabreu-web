'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { oldBioPhotos } from '@/data/bioPhotos';

type OldPhotosCarouselProps = {
  compact?: boolean;
  title: string;
  previousLabel: string;
  nextLabel: string;
};

export function OldPhotosCarousel({
  compact = false,
  title,
  previousLabel,
  nextLabel,
}: OldPhotosCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePhoto = oldBioPhotos[activeIndex] ?? oldBioPhotos[0];

  if (!activePhoto) {
    return null;
  }

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? oldBioPhotos.length - 1 : current - 1,
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === oldBioPhotos.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section
      className={[
        'overflow-hidden rounded-[2rem] border border-black/15 bg-white/25',
        compact ? 'p-4' : 'h-[24vh] min-h-[150px] p-4',
      ].join(' ')}
    >
      <div className="grid h-full grid-cols-[44px_1fr_44px] items-center gap-3">
        <button
          type="button"
          onClick={goPrevious}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/35 text-black/55 transition hover:bg-black hover:text-white"
          aria-label={previousLabel}
        >
          <ChevronLeft size={22} />
        </button>

        <div className="grid h-full min-h-0 grid-cols-[1fr_140px] gap-4 max-sm:grid-cols-1">
          <div className="relative min-h-[130px] overflow-hidden rounded-[1.4rem] bg-black/5">
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-contain"
            />
          </div>

          <div className="flex min-h-0 flex-col justify-center max-sm:hidden">
            <h2 className="sketch-nav text-2xl leading-none text-black/70">
              {title}
            </h2>

            <p className="mt-2 text-xs leading-5 text-black/45">
              {activeIndex + 1} / {oldBioPhotos.length}
            </p>

            <div className="mt-4 grid grid-cols-4 gap-1.5">
              {oldBioPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    'relative aspect-square overflow-hidden rounded-md border transition',
                    activeIndex === index
                      ? 'border-black opacity-100'
                      : 'border-black/10 opacity-55 hover:opacity-100',
                  ].join(' ')}
                  aria-label={`${title} ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/35 text-black/55 transition hover:bg-black hover:text-white"
          aria-label={nextLabel}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}