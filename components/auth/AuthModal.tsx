"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"

type Props = {
  open: boolean
  onClose: () => void
}

export default function AuthModal({ open, onClose }: Props) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [onClose])

  const navigateAndClose = (href: string) => {
    onClose()
    requestAnimationFrame(() => router.push(href))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              mass: 0.8,
            }}
            className="relative w-full max-w-md rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 p-8 shadow-2xl shadow-slate-900/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-slate-50/30 pointer-events-none" />
            <motion.button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-slate-100/60 backdrop-blur-sm hover:bg-slate-200/60 flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6.707 6l3.647-3.646a.5.5 0 0 0-.708-.708L6 5.293 2.354 1.646a.5.5 0 0 0-.708.708L5.293 6 1.646 9.646a.5.5 0 0 0 .708.708L6.707 6z" />
              </svg>
            </motion.button>

            {/* Contenido */}
            <div className="relative z-10">
              <motion.h2
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Inicia tu prueba gratis
              </motion.h2>

              <motion.p
                className="text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Crea tu cuenta o entra para continuar.
              </motion.p>

              {/* Formulario */}
              <motion.form
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  onClose()
                }}
              >
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 mb-2 block">Correo electrónico</span>
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    className="w-full rounded-2xl border border-slate-200/40 bg-white/60 backdrop-blur-sm px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-blue-400/60 focus:bg-white/80 focus:ring-4 focus:ring-blue-400/10 focus:shadow-lg focus:shadow-blue-400/5 transition-all"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700 mb-2 block">Contraseña</span>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-200/40 bg-white/60 backdrop-blur-sm px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-blue-400/60 focus:bg-white/80 focus:ring-4 focus:ring-blue-400/10 focus:shadow-lg focus:shadow-blue-400/5 transition-all"
                  />
                </label>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full py-3 text-base font-semibold">
                    Entrar
                  </Button>
                </motion.div>
              </motion.form>

              {/* Enlaces */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <button
                  onClick={() => navigateAndClose("/forgot-password")}
                  className="text-slate-600 hover:text-slate-800 underline decoration-dotted transition-colors bg-transparent"
                >
                  ¿Olvidaste tu contraseña?
                </button>
                <div className="text-slate-500">
                  ¿No tienes cuenta?
                  <button
                    onClick={() => navigateAndClose("/register")}
                    className="text-blue-600 hover:text-blue-700 font-medium underline ml-1 bg-transparent"
                  >
                    Regístrate
                  </button>
                </div>
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
                <span className="text-sm text-slate-500 font-medium">o</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
              </div>

              {/* Botón Google con brillo real */}
              <div className="flex justify-center">
                <motion.button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => alert("Google Sign-In (placeholder)")}
                  className="relative w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow más visible */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{
                      opacity: hovered ? [0.3, 0.6, 0.3] : 0,
                      scale: hovered ? [1, 1.15, 1] : 1,
                    }}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: hovered ? Infinity : 0,
                    }}
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.2))",
                      filter: "blur(6px)",
                    }}
                  />

                  {/* Reflejo deslizante real */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={hovered ? controls.start({ x: ["-100%", "100%"] }) : controls.stop()}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: hovered ? Infinity : 0,
                    }}
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Logo Google */}
                  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" className="relative z-10">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.7 30.37 0 24 0 14.7 0 6.64 5.45 2.71 13.35l7.98 6.2C12.36 13.45 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.15 24.56c0-1.64-.15-3.21-.42-4.74H24v9.48h12.5c-.54 2.94-2.14 5.44-4.53 7.12l7.02 5.46C43.38 37.27 46.15 31.34 46.15 24.56z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.69 28.15a14.5 14.5 0 0 1-.79-4.65c0-1.61.28-3.17.79-4.65l-7.98-6.2A23.93 23.93 0 0 0 0 23.5c0 3.84.92 7.48 2.71 10.85l7.98-6.2z"
                    />
                    <path
                      fill="#4285F4"
                      d="M24 47.5c6.37 0 11.74-2.1 15.65-5.73l-7.02-5.46C30.59 38.07 27.42 39 24 39c-6.26 0-11.64-3.95-13.31-9.69l-7.98 6.2C6.64 42.55 14.7 47.5 24 47.5z"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
