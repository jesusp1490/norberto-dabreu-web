"use client"

import { type Locale, getTranslations } from "@/lib/i18n"

interface NavigationProps {
  locale: Locale
  onNavigate: (section: string) => void
}

export default function Navigation({ locale, onNavigate }: NavigationProps) {
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
      {/* Navigation Items */}
      <ul className="space-y-6">
        {navigationItems.map((item, index) => (
          <li key={item.key}>
            <button
              onClick={() => onNavigate(item.key)}
              className="group text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 hover:text-gray-900 transition-all duration-300 tracking-wide text-left w-full artistic-text relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg -mx-4 -my-2"></div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
