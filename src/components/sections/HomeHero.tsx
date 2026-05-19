import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

export function HomeHero() {
  const tSite = useTranslations('site');
  const tNav = useTranslations('nav');

  return (
    <section className="paper-texture h-screen overflow-hidden text-[#1b1a18]">
      {/* Desktop */}
      <div className="relative hidden h-screen overflow-hidden px-8 py-5 md:flex md:items-center md:justify-center">
        <div className="absolute right-8 top-8 z-20">
          <LanguageSwitcher />
        </div>

        <div
          className="
            grid
            w-fit
            items-center
            gap-[clamp(1.5rem,2.8vw,3rem)]
            [--artwork-width:clamp(460px,29vw,540px)]
            [--menu-width:clamp(390px,25vw,500px)]
            grid-cols-[var(--artwork-width)_var(--menu-width)]
          "
        >
          <div className="w-[var(--artwork-width)]">
            <Link
              href="/"
              className="
                display-title
                mb-4
                block
                w-full
                whitespace-nowrap
                text-center
                text-[clamp(2.55rem,3.1vw,3.55rem)]
                leading-[0.82]
                tracking-[-0.045em]
                text-black
              "
            >
              {tSite('artistName')}
            </Link>

            <Image
              src="/images/portada/portada-web.jpg"
              alt="Artwork detail by Norberto D’Abreu"
              width={1200}
              height={1600}
              priority
              sizes="(min-width: 768px) 540px, 100vw"
              className="block h-auto max-h-[calc(100vh-7.2rem)] w-full object-contain"
            />
          </div>

          <nav
            className="
              flex
              w-[var(--menu-width)]
              flex-col
              justify-center
              gap-[clamp(0.65rem,1.55vh,1.1rem)]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  sketch-nav
                  whitespace-nowrap
                  text-[clamp(1.75rem,2.35vw,3rem)]
                  leading-none
                  text-black/85
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
        </div>
      </div>

      {/* Mobile */}
      <div className="min-h-screen md:hidden">
        <header className="flex items-start justify-between gap-4 px-5 py-5">
          <Link
            href="/"
            className="display-title max-w-[13rem] text-3xl leading-[0.9] text-black"
          >
            {tSite('artistName')}
          </Link>

          <LanguageSwitcher />
        </header>

        <div className="flex justify-center border-y border-black/10 px-4 py-4">
          <Image
            src="/images/portada/portada-web.jpg"
            alt="Artwork detail by Norberto D’Abreu"
            width={1200}
            height={1600}
            priority
            sizes="100vw"
            className="h-auto max-h-[58vh] w-auto max-w-full object-contain"
          />
        </div>

        <nav className="flex flex-col gap-3 px-6 py-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sketch-nav border-b border-black/10 pb-3 text-2xl leading-none text-black/85"
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}