"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import { openAuthModal } from "@/lib/authModal"
import { useTranslation } from "@/context/TranslationContext"

const GRADIENT =
  "linear-gradient(90deg, #491f53 0%, #7e00bf 25%, #312783 50%, #006ae9 75%, #6adbff 90%, #3ea3dc 100%)"
const CARD_SPRING = { type: "spring", damping: 22, stiffness: 250, mass: 0.9 }

const cardEnter = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 26,
      stiffness: 220,
      mass: 0.9,
      restDelta: 0.001,
    },
  },
}

const primaryCardVariants = {
  hidden: cardEnter.hidden,
  visible: cardEnter.visible,
  hover: {
    y: -10,
    scale: 1.01,
    boxShadow: "0 45px 90px rgba(0,0,0,0.55)",
    transition: CARD_SPRING,
  },
}

const secondaryCardVariants = {
  hidden: cardEnter.hidden,
  visible: cardEnter.visible,
  hover: {
    y: -8,
    scale: 1.007,
    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
    transition: CARD_SPRING,
  },
}

const briskListStagger = {
  hidden: {},
  visible: { transition: { delayChildren: 0.35, staggerChildren: 0.05 } },
}

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
}

export default function SectionPricing() {
  const { dictionary } = useTranslation()
  const pricing = dictionary.pricing

  return (
    <section id="pricing" className="relative overflow-hidden bg-black py-20 text-slate-100">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold text-white md:text-4xl">
            {pricing.title}
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-slate-300 md:text-lg">
            {pricing.subtitle}
          </p>

          <div className="mx-auto grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            <TiltCard gradient={GRADIENT}>
              <motion.div
                variants={primaryCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4, margin: "-10% 0px" }}
                whileHover="hover"
                className="relative h-full w-full max-w-[420px] mx-auto rounded-3xl p-[2px]"
                style={{ background: GRADIENT }}
              >
                <div
                  className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900/85 p-8 text-slate-100 backdrop-blur-md"
                  role="region"
                  aria-label={pricing.title}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="relative z-10">
                    <div className="text-4xl font-extrabold md:text-5xl">
                      {pricing.priceLabel}
                      <span className="ml-2 text-lg font-semibold text-slate-300">{pricing.priceSuffix}</span>
                    </div>

                    <motion.ul variants={briskListStagger} className="mt-6 space-y-3 text-sm text-slate-300">
                      {pricing.features.map((feature) => (
                        <motion.li key={feature} variants={listItemVariants} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)]">
                            {"\u2713"}
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <button
                    onClick={() => openAuthModal()}
                    className="relative z-10 mt-8 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-lg font-semibold text-white shadow-[0_20px_40px_rgba(37,99,235,0.35)] transition-transform duration-300 hover:scale-[1.02]"
                    aria-label={pricing.cta}
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
                    <span className="relative z-10">{pricing.cta}</span>
                  </button>
                </div>
              </motion.div>
            </TiltCard>

            <TiltCard gradient={GRADIENT}>
              <motion.div
                variants={secondaryCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4, margin: "-10% 0px" }}
                whileHover="hover"
                className="relative h-full w-full max-w-[420px] mx-auto rounded-3xl p-[2px]"
                style={{ background: GRADIENT }}
              >
                <div
                  className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900/80 p-8 text-slate-200 backdrop-blur-md"
                  role="region"
                  aria-label={pricing.compareTitle}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="relative z-10 flex-1">
                    <h3 className="mb-5 text-xl font-semibold text-white">{pricing.compareTitle}</h3>

                    <motion.ul variants={briskListStagger} className="space-y-4 text-sm">
                      {pricing.comparePoints.map((point) => (
                        <motion.li key={point} variants={listItemVariants} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-xs font-bold text-black shadow-[0_12px_28px_rgba(16,185,129,0.35)]">
                            {"\u2713"}
                          </span>
                          <span className="leading-relaxed text-slate-300">{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}

type TiltCardProps = {
  children: React.ReactNode
  gradient?: string
}

function TiltCard({ children }: TiltCardProps) {
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    const cols = 5
    const rows = 5

    const colRaw = Math.floor((x + 0.5) * cols)
    const rowRaw = Math.floor((y + 0.5) * rows)

    const col = Math.max(0, Math.min(cols - 1, colRaw))
    const row = Math.max(0, Math.min(rows - 1, rowRaw))

    const tiltXByRow = [20, 10, 0, -10, -20]
    const tiltYByCol = [-10, -5, 0, 5, 10]

    const rotateX = tiltXByRow[row]
    const rotateY = tiltYByCol[col]

    const scale = 1.02

    target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    target.style.filter = "brightness(1.1)"
  }, [])

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    target.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
    target.style.filter = "brightness(1)"
  }, [])

  return (
    <div style={{ perspective: "800px", height: "100%" }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          height: "100%",
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 125ms ease-in-out, filter 150ms ease-in-out",
        }}
      >
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  )
}
