import type { MetadataRoute } from "next"

export function GET(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/wizard",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/examples",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://v0-minimalista-diseno-digital-azg2yir2q.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
