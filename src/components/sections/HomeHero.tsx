import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const featureCards = [
  {
    titleKey: 'featuredTitle',
    textKey: 'featuredText',
  },
  {
    titleKey: 'shopTitle',
    textKey: 'shopText',
  },
  {
    titleKey: 'multilanguageTitle',
    textKey: 'multilanguageText',
  },
];

export function HomeHero() {
  const tSite = useTranslations('site');
  const tHome = useTranslations('home');
  const tNav = useTranslations('nav');

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[5%] top-[12%] h-[32rem] w-[32rem] rounded-full bg-[#c4914b]/20 blur-3xl" />
        <div className="absolute bottom-[6%] right-[8%] h-[26rem] w-[26rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-[#c4914b]">
            {tSite('tagline')}
          </p>

          <h2 className="mt-7 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl xl:text-8xl">
            {tSite('artistName')}
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            {tSite('intro')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/obras-en-venta"
              className="rounded-full bg-[#c4914b] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#e0ae68]"
            >
              {tNav('shop')}
            </Link>

            <Link
              href="/bio"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {tNav('bio')}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1a1714] p-5 shadow-2xl">
            <div className="flex h-full items-center justify-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(196,145,75,0.34),transparent_34%),linear-gradient(150deg,#2a2119,#0d0b0a)]">
              <div className="text-center">
                <p className="text-8xl font-semibold text-white/15 sm:text-9xl">
                  ND
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.35em] text-white/35">
                  Hero artwork
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl sm:block">
            <p className="text-sm leading-6 text-white/65">
              Replace this placeholder with the main portrait artwork from the sketches.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-16 sm:px-8 md:grid-cols-3 lg:px-12">
        {featureCards.map((card) => (
          <article
            key={card.titleKey}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">
              {tHome(card.titleKey)}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/55">
              {tHome(card.textKey)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}