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
    { code: "es" as Locale, name: "ES" },
    { code: "en" as Locale, name: "EN" },
    { code: "pt" as Locale, name: "PT" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wider"
      >
        {languages.find((lang) => lang.code === currentLocale)?.name}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[60px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLocaleChange(language.code)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLocale === language.code ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
