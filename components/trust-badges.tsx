import { Shield, Clock, Award, RefreshCw } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="h-6 w-6 text-violet-600" />,
      title: "100% Seguro",
      description: "Pago seguro con Stripe",
    },
    {
      icon: <Clock className="h-6 w-6 text-violet-600" />,
      title: "Entrega Rápida",
      description: "En menos de 24 horas",
    },
    {
      icon: <Award className="h-6 w-6 text-violet-600" />,
      title: "Calidad Garantizada",
      description: "Resultados profesionales",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-violet-600" />,
      title: "Garantía de Devolución",
      description: "30 días de garantía",
    },
  ]

  return (
    <div className="bg-white py-8 border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-violet-100 p-3 rounded-full mb-3">{badge.icon}</div>
              <h3 className="font-medium">{badge.title}</h3>
              <p className="text-sm text-gray-500">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
