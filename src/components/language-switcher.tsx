"use client"

import { useState } from "react"
import type { Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "es" as Locale, name: "ES", flag: "🇪🇸" },
    { code: "en" as Locale, name: "EN", flag: "🇺🇸" },
    { code: "pt" as Locale, name: "PT", flag: "🇵🇹" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wider transition-colors duration-200 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm"
      >
        <span>{languages.find((lang) => lang.code === currentLocale)?.flag}</span>
        <span>{languages.find((lang) => lang.code === currentLocale)?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg py-2 min-w-[100px] z-50 border border-gray-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLocaleChange(language.code)
                setIsOpen(false)
              }}
              className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLocale === language.code ? "bg-gray-50 font-medium" : ""
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
