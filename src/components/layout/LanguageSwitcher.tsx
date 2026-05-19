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
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
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
                ? 'bg-[#c4914b] text-black'
                : 'text-white/65 hover:bg-white/10 hover:text-white',
            ].join(' ')}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}