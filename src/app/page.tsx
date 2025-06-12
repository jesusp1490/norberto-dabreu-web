"use client"

import { useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import type { Locale } from "@/lib/i18n"

export default function HomePage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("es")
  const [imageError, setImageError] = useState(false)

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`)
    // Here you can add navigation logic or scroll to sections
  }

  const handleHomeClick = () => {
    console.log("Navigating to home")
    // Here you can add home navigation logic
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 relative">
      {/* Top Header - Artist Name and Language Switcher */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6">
        <button
          onClick={handleHomeClick}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wider leading-tight hover:text-gray-600 transition-colors duration-300"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
        >
          NORBERTO D&apos;ABREU
        </button>

        <button
          onClick={() => {
            const newLocale = currentLocale === "es" ? "en" : currentLocale === "en" ? "pt" : "es"
            setCurrentLocale(newLocale)
          }}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wider transition-colors duration-200 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm"
        >
          <span>{currentLocale === "es" ? "🇪🇸" : currentLocale === "en" ? "🇺🇸" : "🇵🇹"}</span>
          <span>{currentLocale.toUpperCase()}</span>
        </button>
      </div>

      {/* Main Content - Image and Navigation */}
      <div className="h-full flex pt-20">
        {/* Left Side - Hero Image */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <div className="relative w-full h-[80vh] max-w-lg">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-white">
              {!imageError ? (
                <Image
                  src="/images/hero.webp"
                  alt="Norberto D'Abreu Artwork"
                  fill
                  className="object-cover"
                  priority
                  onError={() => {
                    console.log("Image failed to load: /images/hero.webp")
                    setImageError(true)
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg font-medium mb-2">Artwork Preview</p>
                    <p className="text-gray-600 text-sm">Place hero.webp in public/images/</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Navigation */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <Navigation locale={currentLocale} onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  )
}
