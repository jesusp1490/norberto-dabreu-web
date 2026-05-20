'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

type InternalPageShellProps = {
  children: ReactNode;
  sideImageSrc?: string;
  sideImageAlt?: string;
  sideImagePosition?: string;
};

export function InternalPageShell({
  children,
  sideImageSrc = '/images/portada/portada-web.jpg',
  sideImageAlt = 'Artwork detail by Norberto D’Abreu',
  sideImagePosition = 'center center',
}: InternalPageShellProps) {
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
            text-[clamp(2rem,3vw,4rem)]
            leading-none
            tracking-[-0.045em]
            text-black
          "
        >
          Norberto D’Abreu
        </Link>

        <LanguageSwitcher />
      </header>

      {/* Desktop */}
      <div
        className="
          hidden
          min-h-0
          flex-1
          lg:grid
          [--internal-artwork-width:clamp(380px,32vw,700px)]
          grid-cols-[var(--internal-artwork-width)_minmax(0,1fr)]
        "
      >
        <aside className="relative h-full min-h-0 overflow-hidden border-r border-black/10 bg-black/5">
          <Image
            src={sideImageSrc}
            alt={sideImageAlt}
            fill
            priority
            sizes="(min-width: 1536px) 700px, (min-width: 1024px) 32vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: sideImagePosition,
            }}
          />
        </aside>

        <main className="min-h-0 overflow-hidden px-[clamp(1.5rem,3vw,4rem)] py-[clamp(1.25rem,2.5vh,2.5rem)]">
          {children}
        </main>
      </div>

      {/* Mobile / tablet */}
      <div className="min-h-0 flex-1 overflow-y-auto lg:hidden">
        <div className="relative h-[38vh] min-h-[280px] overflow-hidden border-b border-black/10 bg-black/5">
          <Image
            src={sideImageSrc}
            alt={sideImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: sideImagePosition,
            }}
          />
        </div>

        <main className="px-5 py-6">{children}</main>
      </div>
    </section>
  );
}