import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/mis-sold-pension-claims/', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/mis-sold-sipp-claims/', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/defined-benefit-pension-transfer-claims/', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/final-salary-pension-claims/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/bad-pension-advice-claims/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/pension-transfer-claims/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/high-risk-pension-investment-claims/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/how-do-i-know-if-my-pension-was-mis-sold/', priority: 0.85, changeFrequency: 'monthly' },
  { url: '/mis-sold-pension-compensation-calculator/', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/fscs-pension-claims/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/financial-ombudsman-pension-complaints/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/time-limits-mis-sold-pension-claims/', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/pension-claim-process/', priority: 0.75, changeFrequency: 'monthly' },
  { url: '/compare/', priority: 0.75, changeFrequency: 'monthly' },
  { url: '/compare/fos-vs-fscs/', priority: 0.75, changeFrequency: 'monthly' },
  { url: '/compare/defined-benefit-vs-defined-contribution/', priority: 0.75, changeFrequency: 'monthly' },
  { url: '/compare/solicitor-vs-direct-claim/', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/faqs/', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/about/', priority: 0.6, changeFrequency: 'monthly' },
  { url: '/contact/', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/complaints-procedure/', priority: 0.5, changeFrequency: 'yearly' },
  { url: '/privacy-policy/', priority: 0.4, changeFrequency: 'yearly' },
  { url: '/terms/', priority: 0.4, changeFrequency: 'yearly' },
  { url: '/cookie-policy/', priority: 0.4, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(p => ({
    url: `${siteConfig.url}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: p.priority,
  }))
}
