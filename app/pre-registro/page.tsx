"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, Clock, Star, Users, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PreRegistro() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 45 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Simulación de envío a API
    try {
      // Aquí iría la lógica real para guardar el email
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
    } catch (err) {
      setError("Hubo un problema al registrar tu email. Por favor intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Barra de promoción */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 text-center text-sm z-50 shadow-md">
        <div className="container flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          <span>¡Lanzamiento exclusivo en {timeLeft.days} días! Regístrate para acceso anticipado</span>
        </div>
      </div>

      {/* Navegación simple */}
      <div className="fixed top-10 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-40 py-3 px-4">
        <div className="container max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
            ArtifyMe
          </div>
          <Button
            href="/"
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <a>Volver al inicio</a>
          </Button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container max-w-5xl mx-auto py-8 px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Columna izquierda - Formulario */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="inline-block mb-3 px-4 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium">
                <Sparkles className="inline-block w-4 h-4 mr-1" /> Acceso anticipado
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
                Transforma tus fotos en arte digital
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Sé de los primeros en probar nuestra tecnología de IA para convertir tus fotos en ilustraciones
                profesionales.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Correo electrónico
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg p-3 border-gray-200 focus:border-violet-300 focus:ring-violet-200"
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg px-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {loading ? "Enviando..." : "Registrarme"}
                    </Button>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-gray-600">Acceso anticipado a nuestra plataforma</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-gray-600">50% de descuento en tu primera ilustración</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-gray-600">Notificación inmediata cuando lancemos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <p>Ya se han registrado más de 500 personas</p>
                </div>
              </form>
            ) : (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">¡Gracias por registrarte!</h3>
                <p className="text-center text-gray-600 mb-4">
                  Te hemos enviado un correo de confirmación a <span className="font-medium">{email}</span>
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full border-violet-200 text-violet-700 hover:bg-violet-50"
                  >
                    Registrar otro email
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 (120+ reseñas)</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Lanzamiento en {timeLeft.days} días</span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imágenes */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-violet-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-100 rounded-full filter blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Vista previa del producto</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Foto original</p>
                    <img
                      src="/original-photo.png"
                      alt="Foto original"
                      className="rounded-lg w-full h-40 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Ilustración generada</p>
                    <img
                      src="/anime-transformation.png"
                      alt="Ilustración generada"
                      className="rounded-lg w-full h-40 object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Estilo Anime</p>
                      <p className="text-xs text-gray-500">Generado en 8 minutos</p>
                    </div>
                    <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-gradient-to-br from-amber-400 to-orange-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg rotate-12">
                ¡Pronto disponible!
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-violet-600">3</div>
                <p className="text-xs text-gray-500">Estilos disponibles</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-violet-600">10min</div>
                <p className="text-xs text-gray-500">Tiempo de entrega</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-violet-600">100%</div>
                <p className="text-xs text-gray-500">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>

        {/* Características destacadas */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10">¿Por qué registrarte ahora?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Acceso anticipado</h3>
              <p className="text-gray-600">
                Sé de los primeros en probar nuestra tecnología antes del lanzamiento oficial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Descuentos exclusivos</h3>
              <p className="text-gray-600">Obtén un 50% de descuento en tu primera ilustración al registrarte ahora.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Prioridad de soporte</h3>
              <p className="text-gray-600">Recibe atención prioritaria y personalizada de nuestro equipo de soporte.</p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <Button
            onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            ¡Registrarme ahora! <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Footer simple */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2023 ArtifyMe. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-violet-600">
              Términos y condiciones
            </a>
            <a href="#" className="hover:text-violet-600">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-violet-600">
              Contacto
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
