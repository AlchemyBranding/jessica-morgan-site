import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://jessicamorgan.co.uk/sitemap.xml', // update with final domain
  }
}
