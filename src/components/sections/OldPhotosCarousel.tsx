'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activePhoto = oldBioPhotos[activeIndex] ?? oldBioPhotos[0];

  useEffect(() => {
    if (isPaused || isLightboxOpen || oldBioPhotos.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === oldBioPhotos.length - 1 ? 0 : current + 1,
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isPaused, isLightboxOpen]);

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
    <>
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={[
          'relative overflow-hidden rounded-[2rem] border border-black/15 bg-black/5',
          compact ? 'h-[360px]' : 'h-[32vh] min-h-[250px]',
        ].join(' ')}
      >
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="group relative block h-full w-full overflow-hidden"
          aria-label={activePhoto.alt}
        >
          <Image
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-6">
            <div className="text-left">
              <h2 className="sketch-nav text-3xl leading-none text-white drop-shadow">
                {title}
              </h2>

              <p className="mt-2 text-sm text-white/75">
                {activeIndex + 1} / {oldBioPhotos.length}
              </p>
            </div>

            <p className="hidden rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/65 backdrop-blur-sm sm:block">
              Ampliar
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={goPrevious}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black transition hover:bg-white"
          aria-label={previousLabel}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black transition hover:bg-white"
          aria-label={nextLabel}
        >
          <ChevronRight size={22} />
        </button>

        <button
          type="button"
          onClick={() => setIsPaused((value) => !value)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black transition hover:bg-white"
          aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
        >
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </button>
      </section>

      {isLightboxOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={goPrevious}
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
            aria-label={previousLabel}
          >
            <ChevronLeft size={26} />
          </button>

          <div className="relative h-[88vh] w-[86vw]">
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="86vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
            aria-label={nextLabel}
          >
            <ChevronRight size={26} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm text-black">
            {activeIndex + 1} / {oldBioPhotos.length}
          </p>
        </div>
      ) : null}
    </>
  );
}