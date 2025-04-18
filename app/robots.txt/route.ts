import type { MetadataRoute } from "next"

export function GET(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/sitemap.xml",
  }
}
