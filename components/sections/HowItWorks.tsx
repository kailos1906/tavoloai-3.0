"use client"

import { ScrollTimeline, type TimelineEvent } from "@/components/lightswind/scroll-timeline"
import { useTranslation } from "@/context/TranslationContext"

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
