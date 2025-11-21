// @ts-nocheck
"use client"

import { motion } from "framer-motion"

export default function DashboardNavbar() {
  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="h-16 bg-white/40 backdrop-blur-xl border-b border-white/20 px-4 md:px-6 flex items-center justify-between shadow-sm"
    >
      <div className="font-semibold text-slate-800">
        Panel de Restaurante
      </div>

      <div className="text-sm text-slate-500 font-medium">
        Sesión: demo@tavoloai.com
      </div>
    </motion.header>
  )
}
