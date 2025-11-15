"use client"
import { motion } from "framer-motion"

interface StatsCardProps {
  title: string
  value: number
  trend: string
}

export default function StatsCard({ title, value, trend }: StatsCardProps) {
  const isPositive = trend.includes("+")
  const isNeutral = trend === "="

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg will-change-transform group"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{title}</h3>
          <div
            className={`w-3 h-3 rounded-full ${
              isPositive ? "bg-emerald-400/60" : isNeutral ? "bg-slate-300/60" : "bg-red-400/60"
            } shadow-sm`}
          />
        </div>

        <div className="space-y-2">
          <p className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
            {value.toLocaleString()}
          </p>
          <p
            className={`text-sm font-medium ${
              isPositive ? "text-emerald-600" : isNeutral ? "text-slate-500" : "text-red-500"
            }`}
          >
            {trend}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/20 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
    </motion.div>
  )
}
