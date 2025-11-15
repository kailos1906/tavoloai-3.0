"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import { useTranslation } from "@/context/TranslationContext"

const GRADIENT =
  "linear-gradient(90deg, #491f53 0%, #7e00bf 25%, #312783 50%, #006ae9 75%, #6adbff 90%, #3ea3dc 100%)"

const IOS_SPRING = { type: "spring", stiffness: 92, damping: 18, mass: 0.7 }
const cardVariants = {
  hidden: { ...fadeInUp.hidden },
  visible: { ...fadeInUp.visible },
  hover: {
    y: -8,
    scale: 1.02,
    transition: IOS_SPRING,
  },
}

export default function SectionHowItWorks() {
  const { dictionary, t } = useTranslation()
  const steps = dictionary.howItWorks.steps

  return (
    <section id="how-it-works" className="relative flex flex-col items-center overflow-hidden bg-black py-20 text-slate-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl px-6"
      >
        <motion.h2 variants={fadeInUp} className="mb-14 text-center text-3xl font-semibold text-white text-balance md:text-4xl">
          {t("howItWorks.title")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 md:justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative w-full max-w-[340px] rounded-3xl p-[1px]"
              style={{ background: GRADIENT }}
            >
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-900/80 p-8 text-center backdrop-blur-md"
                role="article"
                aria-label={`${index + 1}: ${step.title}`}
                style={{
                  boxShadow: "0 35px 70px rgba(0,0,0,0.45)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="relative z-10 space-y-3">
                  <div className="mb-1 text-6xl font-black bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-white transition-transform duration-200 group-hover:scale-[1.02]">
                    {step.title}
                  </h3>

                  <p className="text-pretty leading-relaxed text-slate-300 transition-transform duration-200 group-hover:scale-[1.01]">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="z-20 hidden h-px w-8 bg-gradient-to-r from-blue-400 to-transparent md:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.45 + index * 0.18, duration: 0.7 }}
                    aria-hidden
                  />
                )}

                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: "linear-gradient(180deg, rgba(96,165,250,0.12), rgba(139,92,246,0.12))" }}
                  aria-hidden
                />
              </article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
