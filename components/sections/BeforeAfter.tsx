"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import { useTranslation } from "@/context/TranslationContext"

export default function SectionBeforeAfter() {
  const [sliderValue, setSliderValue] = useState(50)
  const { t } = useTranslation()

  return (
    <section id="before-after" className="relative overflow-hidden bg-black py-20 text-slate-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container flex flex-col items-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-center text-3xl font-semibold text-white text-balance md:text-4xl"
        >
          {t("beforeAfter.title")}
        </motion.h2>

        <motion.div
          className="group relative w-full max-w-[34rem] overflow-hidden rounded-[32px] border border-white/20 bg-white/5 shadow-[0_35px_90px_rgba(15,23,42,0.45)] backdrop-blur-3xl md:max-w-[40rem]"
          variants={fadeInUp}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 45px 110px rgba(8,15,40,0.65)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/25 via-white/12 to-transparent mix-blend-screen" />
          <div className="pointer-events-none absolute inset-[2px] rounded-[30px] border border-white/10" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-[80px]" aria-hidden />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-blue-400/20 blur-[70px]" aria-hidden />
          <div className="pointer-events-none absolute inset-[-52%] -z-10 bg-gradient-to-br from-blue-500/75 via-purple-500/60 to-cyan-400/75 blur-[320px] opacity-[0.98]" aria-hidden />

          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/3">
            <Image
              src="/before.gif"
              alt={t("beforeAfter.beforeLabel")}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />

            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              animate={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <Image
                src="/after.gif"
                alt={t("beforeAfter.afterLabel")}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute top-0 bottom-0 w-1 bg-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
              style={{ left: `${sliderValue}%` }}
              animate={{ left: `${sliderValue}%` }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/70 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_8px_20px_rgba(59,130,246,0.45)]">
                  <div className="h-4 w-1 rounded-full bg-white/80" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.input
            aria-label={t("beforeAfter.sliderAria")}
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(event) => setSliderValue(Number.parseInt(event.target.value, 10))}
            className="absolute bottom-6 left-6 right-6 h-2 rounded-full bg-white/10 backdrop-blur-sm shadow-[0_18px_35px_rgba(0,0,0,0.45)] appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:bg-gradient-to-r from-blue-500 to-purple-500
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:shadow-[0_10px_25px_rgba(59,130,246,0.45)]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-white/60
              [&::-moz-range-thumb]:appearance-none
              [&::-moz-range-thumb]:w-6
              [&::-moz-range-thumb]:h-6
              [&::-moz-range-thumb]:bg-gradient-to-r from-blue-500 to-purple-500
              [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-white/60
              [&::-moz-range-thumb]:rounded-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          />

          <motion.div
            className="absolute top-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            {t("beforeAfter.beforeLabel")}
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-2 text-xs font-medium text-white shadow-[0_18px_40px_rgba(59,130,246,0.45)]"
            whileHover={{ scale: 1.05 }}
          >
            {t("beforeAfter.afterLabel")}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
