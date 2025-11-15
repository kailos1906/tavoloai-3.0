"use client"

import { usePathname, useSearchParams } from "next/navigation"
import type { ReactNode } from "react"
import Header from "@/components/layout/Header"
import FloatingCTA from "@/components/ui/FloatingCTA"
import { TranslationProvider, type LanguageCode } from "@/context/TranslationContext"

const FALLBACK_LANGUAGE: LanguageCode = "es"
const LANGUAGE_SET = new Set<LanguageCode>(["es", "en", "it"])

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const langParam = (searchParams?.get("lang") ?? FALLBACK_LANGUAGE) as LanguageCode
    const initialLanguage = LANGUAGE_SET.has(langParam) ? langParam : FALLBACK_LANGUAGE

    const isDashboard = pathname?.startsWith("/dashboard")
    const isHome = pathname === "/"

    return (
        <TranslationProvider initialLanguage={initialLanguage}>
            <div className="min-h-screen relative flex flex-col">
                <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-slate-50/20" />
                </div>

                {/* Header solo en la home; CTA fuera del dashboard */}
                {isHome && <Header />}
                <main className="relative z-10 flex-1">{children}</main>
                {!isDashboard && <FloatingCTA sectionSelector="section" />}
            </div>
        </TranslationProvider>
    )
}
