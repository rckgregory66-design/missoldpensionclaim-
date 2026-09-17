import type { MetadataRoute } from 'next'

const BASE_URL = 'https://missoldpensionclaim.co.uk'

const routes = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
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
  // Long-tail informational page (distinct from /fscs-pension-claims/ — targets the compensation limit query)
  { url: '/fscs-pension-compensation-limit/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Dedicated claim landing page
  { url: '/make-a-claim/', priority: 0.9, changeFrequency: 'monthly' as const },
  // High-intent informational pages
  { url: '/can-i-claim-if-adviser-has-gone-bust/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/what-evidence-do-i-need-for-pension-mis-selling-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Batch 1 — eligibility, NHS, process, tax
  { url: '/can-i-claim-if-i-am-already-retired/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/can-i-claim-on-behalf-of-a-deceased-relative/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/how-long-does-a-pension-claim-take/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/nhs-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/is-pension-mis-selling-compensation-taxable/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/what-is-a-suitability-report/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 2 — SIPP sub-pages
  { url: '/mis-sold-sipp-claims/storage-pod-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/overseas-property-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/green-energy-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/hotel-room-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/forestry-land-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Note: /pension-transfer-claim/, /self-invested-personal-pension-claim/, /final-salary-pension-transfer-claim/
  // redirect to the canonical versions above and are excluded from sitemap.
  // Batch 6 — LGPS, mini-bonds, pensions ombudsman, drawdown, no win no fee %
  { url: '/local-government-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/compare/pensions-ombudsman-vs-fos/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/pension-drawdown-mis-selling-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/no-win-no-fee-pension-claims-percentage/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 5 — civil service pension, TVAS, solicitor vs direct, pension reviews, complaint letter
  { url: '/civil-service-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/pension-transfer-value-analysis/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/pension-review-was-it-mis-selling/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-complaint-letter-template/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 4 — teachers pension, FSCS how-to, CETV explainer, pension scams
  { url: '/teachers-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/how-to-make-an-fscs-pension-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/what-is-a-cash-equivalent-transfer-value/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/pension-scam-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Batch 3 — process detail + compare pages
  { url: '/what-happens-after-fos-rejects-my-pension-claim/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/how-is-defined-benefit-pension-transfer-redress-calculated/', priority: 0.8, changeFrequency: 'monthly' as const },
  // Compare pages
  { url: '/compare/fos-vs-fscs/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/fos-vs-legal-action/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/defined-benefit-vs-defined-contribution/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/solicitor-vs-direct-claim/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 10 — what is a personal pension, FCA rules, how much comp, transfer without advice
  { url: '/what-is-a-personal-pension/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/pension-advice-fca-rules/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/how-much-compensation-can-i-get/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-transfer-without-advice/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 9 — cold calling, divorce transfer, SIPP vs PP, FOS process, LBA
  { url: '/pension-cold-calling-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-transfer-after-divorce/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/compare/sipp-vs-personal-pension/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/pension-ombudsman-complaint-process/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-pension-letter-before-action/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 8 — annuity mis-selling, CMC, moved abroad, crypto SIPP, adviser duty of care
  { url: '/pension-annuity-mis-selling-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/what-if-i-already-used-a-claims-management-company/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/can-i-claim-if-i-moved-abroad/', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/financial-adviser-duty-of-care/', priority: 0.7, changeFrequency: 'monthly' as const },
  // Batch 7 — police, armed forces, occupational, pension charges, annuity vs drawdown
  { url: '/police-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/armed-forces-pension-transfer-claims/', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/occupational-pension-transfer-claims/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/pension-charges-mis-selling/', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/compare/annuity-vs-drawdown/', priority: 0.7, changeFrequency: 'monthly' as const },
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
