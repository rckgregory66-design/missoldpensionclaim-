import type { MetadataRoute } from 'next'

const BASE_URL = 'https://missoldpensionclaim.co.uk'

const routes = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/make-a-claim/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/contact/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-pension-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-pension-compensation-calculator/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-claim-process/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/no-win-no-fee-pension-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/defined-benefit-pension-transfer-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/final-salary-pension-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-transfer-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/bad-pension-advice-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/high-risk-pension-investment-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/fscs-pension-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/financial-ombudsman-pension-complaints/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/time-limits-mis-sold-pension-claims/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/how-do-i-know-if-my-pension-was-mis-sold/', priority: 0.7, changeFrequency: 'monthly' as const },
  // New long-tail pages
  { url: '/fscs-pension-compensation-limit/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-transfer-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/self-invested-personal-pension-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/final-salary-pension-transfer-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Compare pages
  { url: '/compare/fos-vs-fscs/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/defined-benefit-vs-defined-contribution/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/solicitor-vs-direct-claim/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Information pages
  { url: '/about/', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/faqs/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/cookie-policy/', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/terms/', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/complaints-procedure/', priority: 0.4, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
