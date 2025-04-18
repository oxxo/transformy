import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value?: number): string {
  if (value === undefined) return "$0.00"
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(value)
}

export function getURL() {
  let url = process?.env?.DOMAIN || process?.env?.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"

  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`

  // Make sure to include trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`

  return url
}
