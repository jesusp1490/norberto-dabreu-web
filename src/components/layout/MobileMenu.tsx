'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/data/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const tNav = useTranslations('nav');
  const tSite = useTranslations('site');

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0d0b]/85 px-5 py-4 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-white">
          {tSite('artistName')}
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white"
          aria-label="Open menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="mt-5 border-t border-white/10 pt-5">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl text-white/75"
              >
                {tNav(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}