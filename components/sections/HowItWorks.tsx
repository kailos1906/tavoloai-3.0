// @ts-nocheck
"use client"

import dynamic from "next/dynamic"
import type { TimelineEvent } from "@/components/lightswind/scroll-timeline"
import { useTranslation } from "@/context/TranslationContext"

const ScrollTimeline = dynamic(
  () => import("@/components/lightswind/scroll-timeline").then((mod) => mod.ScrollTimeline),
  { ssr: false },
)

export default function SectionHowItWorks() {
  const { dictionary, t } = useTranslation()
  const steps = dictionary.howItWorks.steps

  const events: TimelineEvent[] = steps.map((step, index) => ({
    id: `step-${index + 1}`,
    year: String(index + 1),
    title: step.title,
    description: step.description,
  }))

  return (
    <section id="how-it-works" className="relative bg-black text-slate-100">
      <ScrollTimeline
        events={events}
        title={t("howItWorks.title")}
        cardAlignment="alternating"
        cardVariant="elevated"
        cardEffect="shadow"
        parallaxIntensity={0.2}
        progressIndicator
        className="py-20"
      />
    </section>
  )
}
