import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimalista Diseño Digital",
  description: "Transforma tus fotos en ilustraciones digitales minimalistas",
  metadataBase: new URL("https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app"),
  openGraph: {
    title: "Minimalista Diseño Digital",
    description: "Transforma tus fotos en ilustraciones digitales minimalistas",
    url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app",
    siteName: "Minimalista Diseño Digital",
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <CookieConsent />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
