"use client"

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
            <motion.div
              variants={primaryCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: "-10% 0px" }}
              whileHover="hover"
              className="relative rounded-3xl p-[1px]"
              style={{ background: GRADIENT }}
            >
              <div
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900/85 p-8 text-slate-100 backdrop-blur-md"
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

            <motion.div
              variants={secondaryCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: "-10% 0px" }}
              whileHover="hover"
              className="relative rounded-3xl p-[1px]"
              style={{ background: GRADIENT }}
            >
              <div
                className="relative h-full overflow-hidden rounded-3xl bg-neutral-900/80 p-8 text-slate-200 backdrop-blur-md"
                role="region"
                aria-label={pricing.compareTitle}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <h3 className="relative z-10 mb-5 text-xl font-semibold text-white">{pricing.compareTitle}</h3>

                <motion.ul variants={briskListStagger} className="relative z-10 space-y-4 text-sm">
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
