"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import placeholderImage from "@/public/placeholder.jpg"
import { useTranslation } from "@/context/TranslationContext"

type CaseImageKey = "Trattoria Roma" | "Bar Costa" | "La Esquina" | "Bistro Luna" | "Cafe Verde"

const CASE_IMAGE_MAP: Record<CaseImageKey, string> = {
  "Trattoria Roma": placeholderImage.src,
  "Bar Costa": placeholderImage.src,
  "La Esquina": placeholderImage.src,
  "Bistro Luna": placeholderImage.src,
  "Cafe Verde": placeholderImage.src,
}

const GRADIENT = "linear-gradient(135deg, rgba(8,8,10,0.96), rgba(4,4,6,0.96), rgba(0,0,0,0.96))"

const CARD_WIDTH = 360
const CARD_HEIGHT = 360
const IMAGE_HEIGHT = 210

export default function SectionCases() {
  const { dictionary, t } = useTranslation()
  const cases = dictionary.cases.cards

  return (
    <section id="cases" className="relative overflow-hidden bg-black py-20 text-slate-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex w-full flex-col items-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-8 text-center text-3xl font-semibold text-white text-balance md:text-4xl"
        >
          {t("cases.title")}
        </motion.h2>

        <div className="w-full max-w-[1200px] px-6">
          <div className="relative overflow-hidden" aria-roledescription={dictionary.cases.carouselRole}>
            <div className="carousel-track">
              {[...cases, ...cases].map((caseItem, index) => {
                const imageSrc =
                  CASE_IMAGE_MAP[caseItem.name as CaseImageKey] ?? placeholderImage.src
                const key = `${caseItem.name}-${index}`

                return (
                  <article
                    key={key}
                    className="carousel-card-wrapper"
                    role="group"
                    aria-label={`${caseItem.name}: ${caseItem.result}`}
                    style={{
                      width: `${CARD_WIDTH}px`,
                      minWidth: `${CARD_WIDTH}px`,
                      height: `${CARD_HEIGHT}px`,
                      marginRight: 20,
                      borderRadius: 16,
                      padding: 1,
                      background: GRADIENT,
                      boxSizing: "content-box",
                    }}
                  >
                    <div
                      className="card-inner"
                      style={{
                        borderRadius: 14,
                        overflow: "hidden",
                        background: "rgba(10,10,12,0.92)",
                        backdropFilter: "blur(12px)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 40px 90px rgba(0,0,0,0.65)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(20,20,20,0.6) 55%, transparent 90%)",
                          pointerEvents: "none",
                          zIndex: 0,
                        }}
                      />
                      <div style={{ height: IMAGE_HEIGHT + "px", position: "relative", flexShrink: 0, zIndex: 1 }}>
                        <Image
                          src={imageSrc}
                          alt={caseItem.name}
                          fill
                          sizes={`${CARD_WIDTH}px`}
                          className="object-cover"
                          style={{ display: "block" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
                            pointerEvents: "none",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          padding: 18,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          flex: 1,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <div>
                          <h3 style={{ margin: 0, fontWeight: 600, color: "#F8FAFC", fontSize: 18 }}>
                            {caseItem.name}
                          </h3>

                          <div style={{ marginTop: 12 }}>
                            <span
                              style={{
                                display: "inline-block",
                                background: "rgba(20,20,20,0.8)",
                                color: "#F8FAFC",
                                padding: "6px 12px",
                                borderRadius: 999,
                                fontSize: 13,
                                fontWeight: 600,
                                boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
                              }}
                            >
                              {caseItem.result}
                            </span>
                          </div>

                          <blockquote
                            style={{
                              marginTop: 14,
                              color: "#CBD5F5",
                              fontStyle: "italic",
                              borderLeft: "3px solid rgba(148,163,184,0.3)",
                              paddingLeft: 12,
                            }}
                          >
                            "{caseItem.quote}"
                          </blockquote>
                        </div>

                        <div style={{ textAlign: "right", marginTop: 6 }} />
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        :root { --scroll-duration: 36s; }
        .carousel-track {
          display: flex;
          align-items: center;
          gap: 20px;
          animation: scroll var(--scroll-duration) linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .carousel-track { animation: none !important; }
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          .carousel-track { gap: 16px; }
        }
        @media (max-width: 768px) {
          .carousel-card-wrapper { min-width: 260px !important; width: 260px !important; height: 320px !important; }
        }
        .carousel-card-wrapper .card-inner img,
        .carousel-card-wrapper .card-inner .object-cover { display: block; }
        .carousel-card-wrapper:hover .card-inner {
          transform: translateY(-8px);
          transition: transform 400ms cubic-bezier(.22,1,.36,1);
          box-shadow: 0 36px 80px rgba(0,0,0,0.55);
        }
        .carousel-card-wrapper .card-inner { transition: transform 420ms cubic-bezier(.22,1,.36,1); }
      `}</style>
    </section>
  )
}
