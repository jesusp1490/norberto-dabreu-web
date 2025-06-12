import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { inter, cormorant } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Norberto D'Abreu - Pintor",
  description: "Portfolio oficial del pintor Norberto D'Abreu",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
