"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consentGiven)
        setPreferences(savedPreferences)
      } catch (e) {
        // If parsing fails, show the banner again
        setShowConsent(true)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setShowConsent(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    setShowConsent(false)
  }

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies are always enabled
      analytics: false,
      marketing: false,
    }
    setPreferences(allRejected)
    localStorage.setItem("cookieConsent", JSON.stringify(allRejected))
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/20 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto">
        <Tabs defaultValue="simple">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simple">Básico</TabsTrigger>
            <TabsTrigger value="advanced">Avanzado</TabsTrigger>
          </TabsList>
          <TabsContent value="simple">
            <CardHeader>
              <CardTitle>Política de Cookies</CardTitle>
              <CardDescription>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos
                de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <Button variant="outline" onClick={handleRejectAll}>
                Rechazar todo
              </Button>
              <Button onClick={handleAcceptAll}>Aceptar todo</Button>
            </CardFooter>
          </TabsContent>
          <TabsContent value="advanced">
            <CardHeader>
              <CardTitle>Configuración de Cookies</CardTitle>
              <CardDescription>
                Personaliza tus preferencias de cookies. Las cookies necesarias siempre están activas ya que son
                esenciales para el funcionamiento del sitio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="necessary" className="font-medium">
                    Cookies Necesarias
                  </Label>
                  <p className="text-sm text-gray-500">
                    Esenciales para el funcionamiento del sitio web. No pueden ser desactivadas.
                  </p>
                </div>
                <Switch id="necessary" checked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="font-medium">
                    Cookies Analíticas
                  </Label>
                  <p className="text-sm text-gray-500">
                    Nos ayudan a entender cómo interactúas con el sitio web para mejorarlo.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing" className="font-medium">
                    Cookies de Marketing
                  </Label>
                  <p className="text-sm text-gray-500">
                    Utilizadas para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios
                    relevantes.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleRejectAll}>
                Rechazar todo
              </Button>
              <Button onClick={handleSavePreferences}>Guardar preferencias</Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
