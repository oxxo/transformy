import { AccessibilityImprovements } from "@/app/components/accessibility-improvements"

export const metadata = {
  title: "Mejoras de Accesibilidad | ArtifyMe",
  description: "Documentación de las mejoras de accesibilidad implementadas en ArtifyMe",
}

export default function AccessibilityImprovementsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <AccessibilityImprovements />
    </div>
  )
}
