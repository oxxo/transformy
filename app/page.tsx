"use client"

import { useRef } from "react"
import { ArrowRight, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainLayout from "./components/main-layout"
import { HomeCheckout } from "@/components/home-checkout"
import { TransformationExamples } from "@/components/transformation-examples"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { TrustBadges } from "@/components/trust-badges"
import { FAQAccordion } from "@/components/faq-accordion"
import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  const stylesRef = useRef<HTMLDivElement>(null)
  const examplesRef = useRef<HTMLDivElement>(null)
  const checkoutRef = useRef<HTMLDivElement>(null)

  // Simulación de estadísticas
  const stats = {
    transformations: "10,000+",
    satisfaction: "99.7%",
    deliveryTime: "10 min",
  }

  const scrollToExamples = () => {
    if (examplesRef.current) {
      examplesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <MainLayout>
      {/* Barra de promoción - Mantenemos solo este banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 text-center text-sm z-50 shadow-md">
        <div className="container flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          <span>¡Oferta por tiempo limitado! 30% de descuento - Termina en </span>
          <CountdownTimer initialHours={2} initialMinutes={45} initialSeconds={30} />
        </div>
      </div>

      <main className="container mx-auto py-10 px-4 mt-16">
        {/* Hero Section - Más corto y directo */}
        <section className="mb-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
              Transforma tus fotos en arte digital
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convierte tus fotografías en hermosas ilustraciones digitales en menos de 10 minutos
            </p>
          </div>
        </section>

        {/* Checkout Section - Ahora es lo primero que se ve */}
        <section id="checkout" ref={checkoutRef} className="mb-16 scroll-mt-32">
          <HomeCheckout />
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Examples Section */}
        <section ref={examplesRef} className="mb-20 scroll-mt-20">
          <TransformationExamples />
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <TestimonialsCarousel />
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Cómo funciona</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Transformar tu foto en arte digital es muy sencillo con nuestro proceso de 3 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sube tu foto</h3>
              <p className="text-gray-600">
                Selecciona cualquier foto clara de tu galería. Funciona mejor con fotos bien iluminadas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Elige un estilo</h3>
              <p className="text-gray-600">
                Selecciona entre nuestros estilos artísticos profesionales creados por expertos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Recibe tu arte</h3>
              <p className="text-gray-600">
                En menos de 10 minutos, recibirás tu ilustración digital lista para descargar.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <FAQAccordion />
        </section>

        {/* CTA final */}
        <section className="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl mb-10 text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            <span className="block">¿Listo para transformar tus fotos?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Aprovecha nuestra oferta de lanzamiento con 30% de descuento. ¡Termina pronto!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CountdownTimer initialHours={2} initialMinutes={45} initialSeconds={30} className="text-white" />
            </div>

            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-violet-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Transformar mi foto ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span>Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span>Entrega rápida</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span>Pago 100% seguro</span>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
