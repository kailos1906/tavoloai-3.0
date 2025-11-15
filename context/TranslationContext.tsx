"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type LanguageCode = "es" | "en" | "it"

type TranslationValue = string | number | TranslationValue[] | { [key: string]: TranslationValue }

type TranslationDictionary = {
  header: {
    languageButton: string
    login: string
    signup: string
    nav: {
      features: string
      demo: string
      howItWorks: string
      pricing: string
      cases: string
      faq: string
    }
    languages: Record<LanguageCode, string>
  }
  floatingCta: {
    label: string
  }
  hero: {
    tagline: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    trial: string
    liveBadge: string
  }
  features: {
    title: string
    items: Array<{
      title: string
      badge: string
      description: string
    }>
    prevLabel: string
    nextLabel: string
    dotAria: string
  }
  howItWorks: {
    title: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  beforeAfter: {
    title: string
    beforeLabel: string
    afterLabel: string
    sliderAria: string
  }
  cases: {
    title: string
    carouselRole: string
    cards: Array<{
      name: string
      result: string
      quote: string
    }>
  }
  pricing: {
    title: string
    subtitle: string
    priceLabel: string
    priceSuffix: string
    features: string[]
    cta: string
    compareTitle: string
    comparePoints: string[]
  }
  demo: {
    title: string
    description: string
    tasks: Array<{ id: string; label: string }>
    glutenButton: string
    dishHighlight: string
    shareButton: string
    simulationBadge: string
    qrAlt: string
    progressLabel: string
  }
  faq: {
    title: string
    items: Array<{ question: string; answer: string }>
  }
  finalCta: {
    title: string
    description: string
    cta: string
    badge: string
  }
  sectionActions: {
    infoLabel: string
    hideLabel: string
    primaryCta: string
  }
}

const dictionaries: Record<LanguageCode, TranslationDictionary> = {
  es: {
    header: {
      languageButton: "Idioma",
      login: "Iniciar sesión",
      signup: "Registrarse",
      nav: {
        features: "Funciones",
        demo: "Demo",
        howItWorks: "Pasos",
        pricing: "Plan",
        cases: "Casos",
        faq: "Ayuda",
      },
      languages: {
        es: "Español",
        en: "Inglés",
        it: "Italiano",
      },
    },
    floatingCta: {
      label: "Prueba gratis",
    },
    hero: {
      tagline: "Demo en vivo",
      title: "Tu menú, más inteligente que nunca.",
      description: "Edita en segundos, mejora fotos y comparte promociones con IA.",
      primaryCta: "Empezar gratis",
      secondaryCta: "Ver cómo funciona",
      trial: "7 días gratis · sin tarjeta · cancela cuando quieras.",
      liveBadge: "Demo en vivo",
    },
    features: {
      title: "Lo que solo TavoloAI puede hacer",
      items: [
        {
          title: "Fotos con IA",
          badge: "Más ventas",
          description:
            "Sube fotos desde tu celular y haz que luzcan profesionales usando la Inteligencia Artificial con un solo clic.",
        },
        {
          title: "Edición instantánea",
          badge: "Ahorra tiempo",
          description: "Edita fácilmente el menú del día: cambia precios, orden y fotos en segundos.",
        },
        {
          title: "Promoción en redes",
          badge: "Listo en 5 s",
          description: "Crea publicidad para tu restaurante y compártela en redes sociales con un toque de IA.",
        },
        {
          title: "Ocultar platos al instante",
          badge: "Evita errores",
          description: "Actualiza la disponibilidad de platos en tiempo real, sin complicaciones.",
        },
        {
          title: "Filtros inteligentes",
          badge: "Mejor experiencia",
          description: "Opciones sin gluten, veganas y más con filtros automáticos inteligentes.",
        },
        {
          title: "Multi-idioma automático",
          badge: "Sin fricción",
          description: "Traduce tu menú al instante en español, inglés o italiano.",
        },
      ],
      prevLabel: "Anterior",
      nextLabel: "Siguiente",
      dotAria: "Ir a la diapositiva {{index}}",
    },
    howItWorks: {
      title: "De fotos a ventas en 3 pasos",
      steps: [
        {
          title: "Crea tu menú",
          description: "Sube fotos y precios.",
        },
        {
          title: "Mejora con IA",
          description: "Imágenes y textos optimizados automáticamente.",
        },
        {
          title: "Comparte y mide",
          description: "QR en mesa, banners listos y estadísticas en vivo.",
        },
      ],
    },
    beforeAfter: {
      title: "El poder de la IA en tu menú",
      beforeLabel: "Antes",
      afterLabel: "Después · +23% clics",
      sliderAria: "Comparar antes y después",
    },
    cases: {
      title: "Restaurantes que ya venden más",
      carouselRole: "carrusel de casos de éxito",
      cards: [
        {
          name: "Trattoria Roma",
          result: "+18% ventas del plato destacado (2 semanas)",
          quote: "Ahora destacamos el plato del día y vuela.",
        },
        {
          name: "Bar Costa",
          result: "+40% interacciones en eventos de fin de semana",
          quote: "Los banners para WhatsApp nos salvaron los viernes.",
        },
        {
          name: "La Esquina",
          result: "+22% en pedidos por mesa (1 mes)",
          quote: "La carta actualizada impulsó nuestras reservas.",
        },
        {
          name: "Bistro Luna",
          result: "+12% upsell en postres",
          quote: "Los clientes piden más postres ahora.",
        },
        {
          name: "Cafe Verde",
          result: "+9% repetición semanal",
          quote: "Los clientes vuelven por la nueva carta.",
        },
      ],
    },
    pricing: {
      title: "Un solo plan, todo incluido.",
      subtitle: "Con un solo plato extra vendido al día, el plan se paga solo.",
      priceLabel: "49 €",
      priceSuffix: "/mes",
      features: [
        "Menús ilimitados",
        "IA para fotos y textos",
        "Analíticas en tiempo real",
        "Banners y eventos",
        "Multi-idioma automático",
        "Filtros y PDF imprimible",
        "1 mes gratis",
      ],
      cta: "Empieza gratis",
      compareTitle: "TavoloAI vs alternativas",
      comparePoints: [
        "Más ventas vs papel o PDF estático",
        "Edición en segundos vs diseñadores externos",
        "Eventos y banners listos para WhatsApp/Instagram",
        "Estadísticas y control en tiempo real",
      ],
    },
    demo: {
      title: "Vívelo como cliente",
      description: "Escanea el QR o usa la simulación para probar las acciones clave.",
      tasks: [
        { id: "lang", label: "Cambiar idioma" },
        { id: "gluten", label: "Activar filtro sin gluten" },
        { id: "dish", label: "Destacar plato del día" },
        { id: "share", label: "Compartir evento en WhatsApp" },
      ],
      glutenButton: "Sin gluten",
      dishHighlight: "🔥 Plato del día: Ravioli al Limone",
      shareButton: "📣 Compartir evento en WhatsApp",
      simulationBadge: "Simulación interactiva",
      qrAlt: "QR para demo interactiva",
      progressLabel: "{{value}}% completado",
    },
    faq: {
      title: "Respuestas rápidas",
      items: [
        { question: "¿Necesito app?", answer: "No, funciona como web-app QR sin descargas." },
        { question: "¿Funciona sin internet?", answer: "Sí, incluye versión PDF imprimible." },
        { question: "¿Puedo cancelar?", answer: "Sí, en un clic desde tu panel." },
        { question: "¿Cumple GDPR?", answer: "Sí, los datos están protegidos y alojados en la UE." },
        { question: "¿Necesito fotógrafo?", answer: "No, la IA genera imágenes por ti." },
        { question: "¿Puedo personalizar diseño?", answer: "Sí, puedes cambiar colores, logo y tipografía." },
      ],
    },
    finalCta: {
      title: "Empieza gratis hoy",
      description: "30 días gratis. Sube tu menú en 2 minutos y pruébalo sin tarjeta.",
      cta: "Probar gratis",
      badge: "Promoción disponible solo este mes",
    },
    sectionActions: {
      infoLabel: "Más info",
      hideLabel: "Ocultar info",
      primaryCta: "Prueba gratis",
    },
  },
  en: {
    header: {
      languageButton: "Language",
      login: "Log in",
      signup: "Sign up",
      nav: {
        features: "Features",
        demo: "Demo",
        howItWorks: "How-to",
        pricing: "Pricing",
        cases: "Cases",
        faq: "FAQ",
      },
      languages: {
        es: "Spanish",
        en: "English",
        it: "Italian",
      },
    },
    floatingCta: {
      label: "Start free",
    },
    hero: {
      tagline: "Live demo",
      title: "Make your menu smarter than ever.",
      description: "Edit in seconds, enhance photos, and share promotions with AI.",
      primaryCta: "Start for free",
      secondaryCta: "See how it works",
      trial: "7-day free trial · no card · cancel anytime.",
      liveBadge: "Live demo",
    },
    features: {
      title: "What only TavoloAI can do",
      items: [
        {
          title: "AI-powered photos",
          badge: "More sales",
          description: "Upload photos from your phone and make them look professional with AI in one click.",
        },
        {
          title: "Instant editing",
          badge: "Save time",
          description: "Update the daily menu in seconds: change prices, order, and images effortlessly.",
        },
        {
          title: "Social promotion",
          badge: "Ready in 5 s",
          description: "Create ads for your restaurant and share them on social media with AI flair.",
        },
        {
          title: "Hide dishes instantly",
          badge: "Avoid mistakes",
          description: "Update dish availability in real time with zero hassle.",
        },
        {
          title: "Smart filters",
          badge: "Better experience",
          description: "Highlight gluten-free, vegan, and more with intelligent auto filters.",
        },
        {
          title: "Automatic multi-language",
          badge: "Frictionless",
          description: "Translate your menu instantly into Spanish, English, or Italian.",
        },
      ],
      prevLabel: "Previous",
      nextLabel: "Next",
      dotAria: "Go to slide {{index}}",
    },
    howItWorks: {
      title: "From photos to sales in 3 steps",
      steps: [
        {
          title: "Build your menu",
          description: "Upload photos and prices.",
        },
        {
          title: "Improve with AI",
          description: "Automatically optimized images and copy.",
        },
        {
          title: "Share and track",
          description: "Table QR, ready-to-use banners, and live analytics.",
        },
      ],
    },
    beforeAfter: {
      title: "AI power for your menu",
      beforeLabel: "Before",
      afterLabel: "After · +23% clicks",
      sliderAria: "Compare before and after",
    },
    cases: {
      title: "Restaurants already selling more",
      carouselRole: "success stories carousel",
      cards: [
        {
          name: "Trattoria Roma",
          result: "+18% featured dish sales (2 weeks)",
          quote: "We highlight the dish of the day and it flies.",
        },
        {
          name: "Bar Costa",
          result: "+40% weekend event interactions",
          quote: "The WhatsApp banners saved our Fridays.",
        },
        {
          name: "La Esquina",
          result: "+22% table orders (1 month)",
          quote: "The updated menu boosted our reservations.",
        },
        {
          name: "Bistro Luna",
          result: "+12% dessert upsell",
          quote: "Guests are ordering more desserts now.",
        },
        {
          name: "Cafe Verde",
          result: "+9% weekly repeat visits",
          quote: "Customers come back for the refreshed menu.",
        },
      ],
    },
    pricing: {
      title: "One plan, everything included.",
      subtitle: "Sell just one extra dish per day and the plan pays for itself.",
      priceLabel: "49 €",
      priceSuffix: "/month",
      features: [
        "Unlimited menus",
        "AI for photos and copy",
        "Real-time analytics",
        "Banners and events",
        "Automatic multi-language",
        "Filters and printable PDF",
        "1 month free",
      ],
      cta: "Start for free",
      compareTitle: "TavoloAI vs alternatives",
      comparePoints: [
        "More sales vs paper or static PDF",
        "Editing in seconds vs external designers",
        "Ready-made banners for WhatsApp/Instagram",
        "Analytics and control in real time",
      ],
    },
    demo: {
      title: "Experience it like a guest",
      description: "Scan the QR or use the simulation to try the key actions.",
      tasks: [
        { id: "lang", label: "Switch language" },
        { id: "gluten", label: "Enable gluten-free filter" },
        { id: "dish", label: "Highlight dish of the day" },
        { id: "share", label: "Share event on WhatsApp" },
      ],
      glutenButton: "Gluten free",
      dishHighlight: "🔥 Dish of the day: Lemon Ravioli",
      shareButton: "📣 Share event on WhatsApp",
      simulationBadge: "Interactive simulation",
      qrAlt: "QR for interactive demo",
      progressLabel: "{{value}}% completed",
    },
    faq: {
      title: "Quick answers",
      items: [
        { question: "Do I need an app?", answer: "No, it works as a QR web app with no downloads." },
        { question: "Does it work offline?", answer: "Yes, it includes a printable PDF version." },
        { question: "Can I cancel?", answer: "Yes, with one click from your dashboard." },
        { question: "Is it GDPR compliant?", answer: "Yes, data is protected and hosted in the EU." },
        { question: "Do I need a photographer?", answer: "No, AI creates images for you." },
        { question: "Can I customize the design?", answer: "Yes, change colors, logo, and typography." },
      ],
    },
    finalCta: {
      title: "Start for free today",
      description: "30-day free trial. Upload your menu in 2 minutes and try it without a card.",
      cta: "Try for free",
      badge: "Promotion available this month only",
    },
    sectionActions: {
      infoLabel: "More info",
      hideLabel: "Hide info",
      primaryCta: "Start free",
    },
  },
  it: {
    header: {
      languageButton: "Lingua",
      login: "Accedi",
      signup: "Registrati",
      nav: {
        features: "Funzioni",
        demo: "Demo",
        howItWorks: "Passi",
        pricing: "Prezzi",
        cases: "Casi",
        faq: "FAQ",
      },
      languages: {
        es: "Spagnolo",
        en: "Inglese",
        it: "Italiano",
      },
    },
    floatingCta: {
      label: "Prova gratis",
    },
    hero: {
      tagline: "Demo dal vivo",
      title: "Il tuo menù, più intelligente che mai.",
      description: "Modifica in pochi secondi, migliora le foto e condividi promozioni con l'IA.",
      primaryCta: "Inizia gratis",
      secondaryCta: "Guarda come funziona",
      trial: "7 giorni gratis · senza carta · annulla quando vuoi.",
      liveBadge: "Demo dal vivo",
    },
    features: {
      title: "Quello che solo TavoloAI può fare",
      items: [
        {
          title: "Foto con IA",
          badge: "Più vendite",
          description: "Carica foto dal tuo telefono e falle sembrare professionali con un clic grazie all'IA.",
        },
        {
          title: "Modifica istantanea",
          badge: "Risparmia tempo",
          description: "Aggiorna il menù del giorno in pochi secondi: prezzi, ordine e immagini.",
        },
        {
          title: "Promozione sui social",
          badge: "Pronto in 5 s",
          description: "Crea pubblicità per il tuo locale e condividila sui social con un tocco di IA.",
        },
        {
          title: "Nascondi piatti subito",
          badge: "Zero errori",
          description: "Aggiorna la disponibilità dei piatti in tempo reale, senza complicazioni.",
        },
        {
          title: "Filtri intelligenti",
          badge: "Migliore esperienza",
          description: "Opzioni senza glutine, vegane e altro con filtri automatici intelligenti.",
        },
        {
          title: "Multilingua automatico",
          badge: "Senza attriti",
          description: "Traduce il tuo menù all'istante in spagnolo, inglese o italiano.",
        },
      ],
      prevLabel: "Precedente",
      nextLabel: "Successivo",
      dotAria: "Vai alla diapositiva {{index}}",
    },
    howItWorks: {
      title: "Dalle foto alle vendite in 3 passaggi",
      steps: [
        {
          title: "Crea il tuo menù",
          description: "Carica foto e prezzi.",
        },
        {
          title: "Migliora con l'IA",
          description: "Immagini e testi ottimizzati automaticamente.",
        },
        {
          title: "Condividi e misura",
          description: "QR sul tavolo, banner pronti e statistiche in tempo reale.",
        },
      ],
    },
    beforeAfter: {
      title: "La potenza dell'IA nel tuo menù",
      beforeLabel: "Prima",
      afterLabel: "Dopo · +23% clic",
      sliderAria: "Confronta prima e dopo",
    },
    cases: {
      title: "Ristoranti che vendono già di più",
      carouselRole: "carosello di casi di successo",
      cards: [
        {
          name: "Trattoria Roma",
          result: "+18% vendite del piatto di punta (2 settimane)",
          quote: "Ora mettiamo in risalto il piatto del giorno e va a ruba.",
        },
        {
          name: "Bar Costa",
          result: "+40% interazioni agli eventi del weekend",
          quote: "I banner per WhatsApp ci hanno salvato il venerdì.",
        },
        {
          name: "La Esquina",
          result: "+22% ordini al tavolo (1 mese)",
          quote: "Il menù aggiornato ha fatto crescere le prenotazioni.",
        },
        {
          name: "Bistro Luna",
          result: "+12% di upsell sui dessert",
          quote: "I clienti ora ordinano più dessert.",
        },
        {
          name: "Cafe Verde",
          result: "+9% di visite settimanali ripetute",
          quote: "I clienti tornano per il nuovo menù.",
        },
      ],
    },
    pricing: {
      title: "Un solo piano, tutto incluso.",
      subtitle: "Basta un piatto extra venduto al giorno e il piano si ripaga.",
      priceLabel: "49 €",
      priceSuffix: "/mese",
      features: [
        "Menù illimitati",
        "IA per foto e testi",
        "Analitiche in tempo reale",
        "Banner ed eventi",
        "Multilingua automatico",
        "Filtri e PDF stampabile",
        "1 mese gratis",
      ],
      cta: "Inizia gratis",
      compareTitle: "TavoloAI vs alternative",
      comparePoints: [
        "Più vendite rispetto a carta o PDF statico",
        "Modifiche in pochi secondi vs grafici esterni",
        "Banner pronti per WhatsApp/Instagram",
        "Statistiche e controllo in tempo reale",
      ],
    },
    demo: {
      title: "Vivilo come cliente",
      description: "Scansiona il QR o usa la simulazione per provare le azioni principali.",
      tasks: [
        { id: "lang", label: "Cambiare lingua" },
        { id: "gluten", label: "Attivare filtro senza glutine" },
        { id: "dish", label: "Evidenziare piatto del giorno" },
        { id: "share", label: "Condividere evento su WhatsApp" },
      ],
      glutenButton: "Senza glutine",
      dishHighlight: "🔥 Piatto del giorno: Ravioli al Limone",
      shareButton: "📣 Condividi evento su WhatsApp",
      simulationBadge: "Simulazione interattiva",
      qrAlt: "QR per demo interattiva",
      progressLabel: "{{value}}% completato",
    },
    faq: {
      title: "Risposte rapide",
      items: [
        { question: "Serve un'app?", answer: "No, funziona come web-app QR senza download." },
        { question: "Funziona senza internet?", answer: "Sì, include una versione PDF stampabile." },
        { question: "Posso annullare?", answer: "Sì, con un clic dal tuo pannello." },
        { question: "È conforme al GDPR?", answer: "Sì, i dati sono protetti e ospitati nell'UE." },
        { question: "Serve un fotografo?", answer: "No, l'IA genera le immagini per te." },
        { question: "Posso personalizzare il design?", answer: "Sì, puoi modificare colori, logo e tipografia." },
      ],
    },
    finalCta: {
      title: "Inizia gratis oggi",
      description: "30 giorni gratis. Carica il tuo menù in 2 minuti e provalo senza carta.",
      cta: "Prova gratis",
      badge: "Promozione disponibile solo questo mese",
    },
    sectionActions: {
      infoLabel: "Più info",
      hideLabel: "Nascondi info",
      primaryCta: "Prova gratis",
    },
  },
}

type TranslationContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  t: (key: string, options?: Record<string, string | number>) => string
  dictionary: TranslationDictionary
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined)

export function TranslationProvider({
  initialLanguage = "es",
  children,
}: {
  initialLanguage?: LanguageCode
  children: ReactNode
}) {
  const [language, setLanguage] = useState<LanguageCode>(initialLanguage)

  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguage(initialLanguage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language])

  const value = useMemo<TranslationContextValue>(() => {
    const dictionary = dictionaries[language]

    const resolvePath = (obj: TranslationValue, path: string[]): TranslationValue | undefined => {
      return path.reduce<TranslationValue | undefined>((acc, key) => {
        if (acc && typeof acc === "object" && !Array.isArray(acc)) {
          return (acc as Record<string, TranslationValue>)[key]
        }
        return undefined
      }, obj)
    }

    const interpolate = (template: string, options?: Record<string, string | number>) => {
      if (!options) return template
      return template.replace(/{{(.*?)}}/g, (_, key) => String(options[key.trim()] ?? ""))
    }

    const t = (key: string, options?: Record<string, string | number>) => {
      const value = resolvePath(dictionary as TranslationValue, key.split("."))
      if (typeof value === "string") {
        return interpolate(value, options)
      }
      return key
    }

    return {
      language,
      setLanguage,
      t,
      dictionary,
    }
  }, [language])

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

export const SUPPORTED_LANGUAGES: Array<{ code: LanguageCode; label: string }> = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
]
