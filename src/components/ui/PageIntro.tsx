import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  const tNav = useTranslations('nav');

  return (
    <section className="paper-texture min-h-screen px-5 py-6 text-[#1b1a18] sm:px-8 lg:px-14">
      <header className="flex items-start justify-between gap-6">
        <Link
          href="/"
          className="display-title max-w-[22rem] text-4xl leading-[0.9] text-black sm:text-5xl"
        >
          Norberto D’Abreu
        </Link>

        <LanguageSwitcher />
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-[280px_1fr] lg:py-24">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sketch-nav text-2xl leading-none text-black/65 transition hover:translate-x-1 hover:text-black"
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>

        <main>
          {eyebrow ? (
            <p className="sketch-nav mb-5 text-xl text-black/45">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="display-title max-w-4xl text-6xl leading-[0.88] text-black sm:text-7xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
            {description}
          </p>

          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white/35 p-8">
            <p className="sketch-nav text-xl text-black/35">
              Contenido en preparación
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}