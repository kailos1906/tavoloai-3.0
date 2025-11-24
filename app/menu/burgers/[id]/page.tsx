// app/menu/burgers/[id]/page.tsx
// ⛔️ AQUÍ NO VA "use client"

import BurgerDetailClient from "./BurgerDetailClient"

interface BurgerDetailPageProps {
  params: { id: string }
}

export default function BurgerDetailPage({ params }: BurgerDetailPageProps) {
  // En el App Router, params.id ya viene como string
  return <BurgerDetailClient burgerId={params.id} />
}
