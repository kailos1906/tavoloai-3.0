import type { ReactNode } from "react"
import dynamic from "next/dynamic"

const Sidebar = dynamic(() => import("./Sidebar"))
const DashboardNavbar = dynamic(() => import("./DashboardNavbar"))

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 text-slate-700 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <DashboardNavbar />
                <main className="flex-1 overflow-auto p-6 bg-white/20 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    )
}
