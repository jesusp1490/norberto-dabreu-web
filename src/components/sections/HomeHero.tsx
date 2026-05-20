'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

type LocaleCopy = {
  portfolioLabel: string;
  statement: string;
  meta: string;
  menuDescriptions: Record<string, string>;
};

const homeCopy: Record<string, LocaleCopy> = {
  es: {
    portfolioLabel: 'Portfolio oficial',
    statement: 'La figura humana como raíz de una historia por descubrir.',
    meta: 'Portfolio oficial · Arte figurativo · Color, memoria y materia',
    menuDescriptions: {
      '/bio': 'Biografía, declaración artística, CV y archivo fotográfico.',
      '/exhibiciones': 'Series, muestras, retrospectivas y obras expuestas.',
      '/testimoniales': 'Críticas, entrevistas, prensa y material documental.',
      '/retratos': 'Retratos, encargos y obra personalizada.',
      '/obras-en-venta': 'Catálogo de obras disponibles y futuras compras online.',
      '/contacto': 'Información de contacto, redes sociales y consultas.',
    },
  },
  en: {
    portfolioLabel: 'Official portfolio',
    statement: 'The human figure as the root of a story waiting to be discovered.',
    meta: 'Official portfolio · Figurative art · Color, memory and matter',
    menuDescriptions: {
      '/bio': 'Biography, artistic statement, CV and photographic archive.',
      '/exhibiciones': 'Series, exhibitions, retrospectives and displayed works.',
      '/testimoniales': 'Reviews, interviews, press and documentary material.',
      '/retratos': 'Portraits, commissions and personalized artwork.',
      '/obras-en-venta': 'Available artworks catalogue and future online store.',
      '/contacto': 'Contact details, social media and enquiries.',
    },
  },
  pt: {
    portfolioLabel: 'Portfólio oficial',
    statement: 'A figura humana como raiz de uma história por descobrir.',
    meta: 'Portfólio oficial · Arte figurativa · Cor, memória e matéria',
    menuDescriptions: {
      '/bio': 'Biografia, declaração artística, CV e arquivo fotográfico.',
      '/exhibiciones': 'Séries, exposições, retrospectivas e obras expostas.',
      '/testimoniales': 'Críticas, entrevistas, imprensa e material documental.',
      '/retratos': 'Retratos, encomendas e obra personalizada.',
      '/obras-en-venta': 'Catálogo de obras disponíveis e futura loja online.',
      '/contacto': 'Informação de contacto, redes sociais e consultas.',
    },
  },
};

export function HomeHero() {
  const locale = useLocale();
  const tNav = useTranslations('nav');

  const copy = homeCopy[locale] ?? homeCopy.es;
  const menuItems = navItems.filter((item) => item.href !== '/');

  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const activeDescription =
    hoveredHref !== null ? copy.menuDescriptions[hoveredHref] : '';

  return (
    <section
      className="
        paper-texture
        flex
        h-screen
        flex-col
        overflow-hidden
        text-[#1b1a18]
        [--home-artwork-width:clamp(380px,32vw,700px)]
      "
    >
      <header
        className="
          relative
          z-30
          hidden
          h-[clamp(4.5rem,7vh,6rem)]
          shrink-0
          grid-cols-[var(--home-artwork-width)_minmax(0,1fr)]
          items-center
          border-b
          border-black/10
          lg:grid
        "
      >
        <Link
          href="/"
          className="
            display-title
            block
            w-full
            whitespace-nowrap
            text-center
            text-[clamp(2rem,2.8vw,3.85rem)]
            leading-none
            tracking-[-0.045em]
            text-black
            [@media_(max-height:1100px)]:text-[clamp(2rem,2.5vw,3.25rem)]
          "
        >
          Norberto D’Abreu
        </Link>

        <div className="flex justify-end pr-[clamp(1.25rem,4vw,5rem)]">
          <LanguageSwitcher />
        </div>
      </header>

      {/* Mobile / tablet header */}
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
          px-5
          lg:hidden
        "
      >
        <Link
          href="/"
          className="
            display-title
            whitespace-nowrap
            text-3xl
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
          grid-cols-[var(--home-artwork-width)_minmax(0,1fr)]
          lg:grid
        "
      >
        <aside className="relative h-full min-h-0 overflow-hidden border-r border-black/10 bg-black/5">
          <Image
            src="/images/portada/portada-web.jpg"
            alt="Artwork detail by Norberto D’Abreu"
            fill
            priority
            sizes="(min-width: 1536px) 700px, (min-width: 1024px) 32vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: 'center center',
            }}
          />
        </aside>

        <main
          className="
            flex
            min-h-0
            flex-1
            items-center
            px-[clamp(2rem,5vw,7rem)]
            py-[clamp(1.5rem,3.5vh,4rem)]
          "
        >
          <div
            className="
              grid
              w-full
              max-w-[58rem]
              grid-cols-[1px_1fr]
              gap-[clamp(1.6rem,3vw,4rem)]
            "
          >
            <div className="h-full w-px bg-black/12" />

            <div className="min-w-0">
              <p
                className="
                  sketch-nav
                  mb-[clamp(1rem,2.4vh,2rem)]
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-black/35
                  [@media_(max-height:900px)]:hidden
                "
              >
                {copy.portfolioLabel}
              </p>

              <nav
                onMouseLeave={() => setHoveredHref(null)}
                className="
                  flex
                  flex-col
                  gap-[clamp(0.55rem,1.25vh,1.05rem)]
                  [@media_(max-height:1100px)]:gap-[clamp(0.35rem,0.9vh,0.7rem)]
                "
              >
                {menuItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onFocus={() => setHoveredHref(item.href)}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    className="
                      group
                      grid
                      grid-cols-[3rem_1fr]
                      items-start
                      gap-4
                      transition
                      duration-300
                      hover:translate-x-2
                      [@media_(max-height:1100px)]:grid-cols-[2.6rem_1fr]
                    "
                  >
                    <span
                      className="
                        sketch-nav
                        pt-[0.35em]
                        text-sm
                        text-black/30
                        transition
                        group-hover:text-black/55
                        [@media_(max-height:1100px)]:text-xs
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className="
                        sketch-nav
                        block
                        whitespace-nowrap
                        text-[clamp(1.85rem,2.85vw,4rem)]
                        leading-none
                        text-black/85
                        transition
                        group-hover:text-black
                        [@media_(max-height:1100px)]:text-[clamp(1.55rem,2.35vw,3.05rem)]
                      "
                    >
                      {tNav(item.labelKey)}
                    </span>
                  </Link>
                ))}
              </nav>

              <div
                className="
                  mt-[clamp(1.4rem,3vh,2.6rem)]
                  min-h-[4.5rem]
                  max-w-xl
                  border-t
                  border-black/10
                  pt-[clamp(1rem,2vh,1.5rem)]
                  [@media_(max-height:900px)]:min-h-[3.5rem]
                  [@media_(max-height:900px)]:pt-3
                "
              >
                <p
                  className={[
                    'text-sm leading-6 text-black/50 transition duration-300 [@media_(max-height:900px)]:line-clamp-2',
                    activeDescription ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                >
                  {activeDescription || ' '}
                </p>
              </div>

              <div
                className="
                  mt-[clamp(1rem,3vh,2.5rem)]
                  max-w-xl
                  [@media_(max-height:1100px)]:mt-5
                "
              >
                <p
                  className="
                    display-title
                    text-[clamp(1.45rem,2vw,2.7rem)]
                    leading-[0.95]
                    tracking-[-0.035em]
                    text-black/80
                    [@media_(max-height:1100px)]:text-[clamp(1.15rem,1.45vw,1.75rem)]
                  "
                >
                  {copy.statement}
                </p>

                <p
                  className="
                    sketch-nav
                    mt-5
                    text-sm
                    uppercase
                    tracking-[0.24em]
                    text-black/35
                    [@media_(max-height:1100px)]:mt-3
                    [@media_(max-height:1100px)]:text-xs
                    [@media_(max-height:900px)]:text-[0.65rem]
                  "
                >
                  {copy.meta}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile / tablet */}
      <div className="min-h-0 flex-1 overflow-y-auto lg:hidden">
        <div className="relative h-[42vh] min-h-[300px] overflow-hidden border-b border-black/10 bg-black/5">
          <Image
            src="/images/portada/portada-web.jpg"
            alt="Artwork detail by Norberto D’Abreu"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: 'center center',
            }}
          />
        </div>

        <main className="px-6 py-8">
          <p className="sketch-nav mb-7 text-xs uppercase tracking-[0.32em] text-black/35">
            {copy.portfolioLabel}
          </p>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  grid
                  grid-cols-[2.4rem_1fr]
                  gap-3
                  border-b
                  border-black/10
                  pb-4
                "
              >
                <span className="sketch-nav pt-[0.35em] text-xs text-black/35">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>
                  <span className="sketch-nav block text-3xl leading-none text-black/85">
                    {tNav(item.labelKey)}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-black/45">
                    {copy.menuDescriptions[item.href]}
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <p className="display-title text-4xl leading-[0.95] tracking-[-0.035em] text-black/80">
              {copy.statement}
            </p>

            <p className="sketch-nav mt-5 text-xs uppercase tracking-[0.22em] text-black/35">
              {copy.meta}
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}