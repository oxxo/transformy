import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16", // Usar la versión más reciente de la API
  appInfo: {
    name: "ArtifyMe",
    version: "1.0.0",
  },
})

// Mantenemos también la exportación por defecto para compatibilidad
export default stripe
