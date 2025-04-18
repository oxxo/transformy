"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-12 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 z-40 shadow-md"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Tag className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm sm:text-base">¡Oferta especial de lanzamiento!</p>
            <p className="text-xs sm:text-sm">30% de descuento en todas las transformaciones</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm whitespace-nowrap">Termina en:</p>
          <CountdownTimer />
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-white text-violet-700 hover:bg-white/90 whitespace-nowrap"
            onClick={() => {
              document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Aprovechar ahora <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
            aria-label="Cerrar banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
