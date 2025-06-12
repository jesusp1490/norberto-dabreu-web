export const locales = ["es", "en", "pt"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  es: {
    artistName: "NORBERTO D'ABREU",
    navigation: {
      home: "INICIO",
      bio: "BIO",
      exhibitions: "EXHIBICIONES",
      testimonials: "TESTIMONIALES",
      portraits: "RETRATOS",
      worksForSale: "OBRAS EN VENTA",
      contacts: "CONTACTOS",
    },
  },
  en: {
    artistName: "NORBERTO D'ABREU",
    navigation: {
      home: "HOME",
      bio: "BIO",
      exhibitions: "EXHIBITIONS",
      testimonials: "TESTIMONIALS",
      portraits: "PORTRAITS",
      worksForSale: "WORKS FOR SALE",
      contacts: "CONTACTS",
    },
  },
  pt: {
    artistName: "NORBERTO D'ABREU",
    navigation: {
      home: "INÍCIO",
      bio: "BIO",
      exhibitions: "EXPOSIÇÕES",
      testimonials: "DEPOIMENTOS",
      portraits: "RETRATOS",
      worksForSale: "OBRAS À VENDA",
      contacts: "CONTATOS",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es
}
