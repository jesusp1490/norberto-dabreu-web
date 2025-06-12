"use client"

import { type Locale, getTranslations } from "@/lib/i18n"
import LanguageSwitcher from "./language-switcher"

interface NavigationProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  onNavigate: (section: string) => void
}

export default function Navigation({ locale, onLocaleChange, onNavigate }: NavigationProps) {
  const t = getTranslations(locale)

  const navigationItems = [
    { key: "home", label: t.navigation.home },
    { key: "bio", label: t.navigation.bio },
    { key: "exhibitions", label: t.navigation.exhibitions },
    { key: "testimonials", label: t.navigation.testimonials },
    { key: "portraits", label: t.navigation.portraits },
    { key: "worksForSale", label: t.navigation.worksForSale },
    { key: "contacts", label: t.navigation.contacts },
  ]

  return (
    <nav className="flex flex-col space-y-8">
      {/* Language Switcher */}
      <div className="flex justify-end mb-4">
        <LanguageSwitcher currentLocale={locale} onLocaleChange={onLocaleChange} />
      </div>

      {/* Artist Name */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-12 tracking-wider leading-tight">
        {t.artistName}
      </h1>

      {/* Navigation Items */}
      <ul className="space-y-6">
        {navigationItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => onNavigate(item.key)}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 hover:text-gray-900 transition-colors duration-300 tracking-wide text-left w-full"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
