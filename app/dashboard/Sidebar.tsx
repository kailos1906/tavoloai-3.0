// @ts-nocheck
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Menu, Users, Settings, BarChart3, LogOut, ChefHat } from "lucide-react"
import { useState } from "react"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Menu, label: "Menús", href: "/dashboard/menus" },
  { icon: Users, label: "Clientes", href: "/dashboard/customers" },
  { icon: BarChart3, label: "Reportes", href: "/dashboard/reports" },
  { icon: Settings, label: "Configuración", href: "/dashboard/settings" },
]

const MotionLink = motion(Link)

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname?.startsWith(href)
  }

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white/40 backdrop-blur-md border-r border-slate-200/50 flex flex-col transition-all duration-300 shadow-lg`}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-200/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <ChefHat className="w-5 h-5 text-slate-600" />
          </div>
          {!isCollapsed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <h2 className="font-bold text-slate-800 text-lg">TavoloAI</h2>
              <p className="text-xs text-slate-500 font-medium">Restaurante</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const active = isActive(item.href)
          return (
            <MotionLink
              key={item.href}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                active
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-800 shadow-sm border border-white/30"
                  : "text-slate-600 hover:bg-white/50 hover:text-slate-800"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
              {active && !isCollapsed && (
                <motion.div layoutId="activeIndicator" className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </MotionLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200/30">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-slate-600 hover:bg-red-50/50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium text-sm">Cerrar Sesión</span>}
        </motion.button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <Menu className="w-4 h-4 text-slate-600" />
        </motion.div>
      </button>
    </motion.aside>
  )
}
