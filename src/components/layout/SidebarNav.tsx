import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function SidebarNav() {
  const tNav = useTranslations('nav');
  const tSite = useTranslations('site');

  return (
    <aside className="hidden min-h-screen w-[310px] shrink-0 border-r border-white/10 bg-black/20 px-8 py-10 backdrop-blur-xl lg:flex lg:flex-col">
      <Link href="/" className="group">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c4914b]">
          Artist
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-white">
          {tSite('artistName')}
        </h1>

        <p className="mt-4 max-w-[16rem] text-sm leading-6 text-white/55">
          {tSite('tagline')}
        </p>
      </Link>

      <nav className="mt-16 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4 text-lg text-white/65 transition hover:text-white"
          >
            <span className="h-px w-8 bg-white/20 transition group-hover:w-12 group-hover:bg-[#c4914b]" />
            <span>{tNav(item.labelKey)}</span>
            <span className="ml-auto text-xs text-white/25">
              {String(index + 1).padStart(2, '0')}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-12">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}