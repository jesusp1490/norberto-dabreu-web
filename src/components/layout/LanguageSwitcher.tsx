'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const languages = [
  { locale: 'es', label: 'ES' },
  { locale: 'en', label: 'EN' },
  { locale: 'pt', label: 'PT' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/50 p-1 backdrop-blur-sm">
      {languages.map((language) => {
        const isActive = locale === language.locale;

        return (
          <button
            key={language.locale}
            type="button"
            onClick={() => router.replace(pathname, { locale: language.locale })}
            className={[
              'rounded-full px-3 py-1 text-xs font-medium transition',
              isActive
                ? 'bg-black text-white'
                : 'text-black/55 hover:bg-black/10 hover:text-black',
            ].join(' ')}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}