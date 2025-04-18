import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getURL() {
  // Usar NEXT_PUBLIC_VERCEL_URL como fallback si DOMAIN no está definido
  let url =
    process?.env?.DOMAIN || process?.env?.NEXT_PUBLIC_VERCEL_URL || process?.env?.VERCEL_URL || "http://localhost:3000"

  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`

  // Make sure to include trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`

  return url
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100)
}
