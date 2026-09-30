// Topical clusters used to render contextual "Related guides" links on every content page.
// The first entry of each cluster is its pillar page and is always linked first.
export const pageLabels: Record<string, string> = {
  '/mis-sold-pension-claims/': 'Mis-sold pension claims: how they work',
  '/carlisle-pension-mis-selling-claims/': 'Carlisle pension mis-selling claims',
  '/make-a-claim/': 'Start a mis-sold pension claim',
  '/pension-claim-process/': 'The pension claim process, step by step',
  '/how-do-i-know-if-my-pension-was-mis-sold/': 'How to tell if your pension was mis-sold',
  '/what-evidence-do-i-need-for-pension-mis-selling-claim/': 'What evidence you need for a claim',
  '/how-long-does-a-pension-claim-take/': 'How long a pension claim takes',
  '/time-limits-mis-sold-pension-claims/': 'Time limits for pension claims',
  '/can-i-claim-if-i-am-already-retired/': 'Claiming if you are already retired',
  '/can-i-claim-on-behalf-of-a-deceased-relative/': 'Claiming for a deceased relative',
  '/can-i-claim-if-i-moved-abroad/': 'Claiming if you have moved abroad',
  '/what-if-i-already-used-a-claims-management-company/': 'If you already used a claims management company',
  '/no-win-no-fee-pension-claims/': 'No win no fee pension claims',
  '/no-win-no-fee-pension-claims-percentage/': 'What percentage no win no fee solicitors charge',
  '/compare/solicitor-vs-direct-claim/': 'Solicitor vs direct claim',
  '/mis-sold-pension-compensation-calculator/': 'How much compensation you could claim',
  '/how-much-compensation-can-i-get/': 'How much compensation you can get',
  '/is-pension-mis-selling-compensation-taxable/': 'Whether compensation is taxable',
  '/defined-benefit-pension-transfer-claims/': 'Defined benefit pension transfer claims',
  '/final-salary-pension-claims/': 'Final salary pension transfer claims',
  '/pension-transfer-claims/': 'Pension transfer claims',
  '/nhs-pension-transfer-claims/': 'NHS pension transfer claims',
  '/teachers-pension-transfer-claims/': 'Teachers’ pension transfer claims',
  '/civil-service-pension-transfer-claims/': 'Civil Service pension transfer claims',
  '/local-government-pension-transfer-claims/': 'Local Government Pension Scheme transfer claims',
  '/police-pension-transfer-claims/': 'Police pension transfer claims',
  '/armed-forces-pension-transfer-claims/': 'Armed Forces pension transfer claims',
  '/occupational-pension-transfer-claims/': 'Occupational pension transfer claims',
  '/how-is-defined-benefit-pension-transfer-redress-calculated/': 'How DB transfer redress is calculated',
  '/what-is-a-cash-equivalent-transfer-value/': 'What a cash equivalent transfer value (CETV) is',
  '/pension-transfer-value-analysis/': 'What a transfer value analysis (TVAS) is',
  '/compare/defined-benefit-vs-defined-contribution/': 'Defined benefit vs defined contribution pensions',
  '/pension-transfer-after-divorce/': 'Pension transfers after divorce',
  '/pension-transfer-without-advice/': 'Pension transfers without advice',
  '/mis-sold-sipp-claims/': 'Mis-sold SIPP claims',
  '/mis-sold-sipp-claims/storage-pod-pension-investment/': 'Storage pod pension investment claims',
  '/mis-sold-sipp-claims/overseas-property-pension-investment/': 'Overseas property SIPP claims',
  '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/': 'UCIS pension claims',
  '/mis-sold-sipp-claims/green-energy-pension-investment/': 'Green energy pension investment claims',
  '/mis-sold-sipp-claims/hotel-room-pension-investment/': 'Hotel room pension investment claims',
  '/mis-sold-sipp-claims/forestry-land-pension-investment/': 'Forestry and land SIPP claims',
  '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/': 'Mini-bond and care home SIPP claims',
  '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/': 'Cryptocurrency SIPP claims',
  '/high-risk-pension-investment-claims/': 'High-risk pension investment claims',
  '/compare/sipp-vs-personal-pension/': 'SIPP vs personal pension',
  '/what-is-a-personal-pension/': 'What a personal pension is',
  '/pension-scam-claims/': 'Pension scam claims',
  '/pension-cold-calling-claims/': 'Pension cold calling claims',
  '/financial-ombudsman-pension-complaints/': 'Financial Ombudsman pension complaints',
  '/fscs-pension-claims/': 'FSCS pension claims',
  '/fscs-pension-compensation-limit/': 'The FSCS compensation limit',
  '/how-to-make-an-fscs-pension-claim/': 'How to make an FSCS pension claim',
  '/can-i-claim-if-adviser-has-gone-bust/': 'Claiming if your adviser has gone bust',
  '/compare/fos-vs-fscs/': 'FOS vs FSCS',
  '/compare/fos-vs-legal-action/': 'FOS vs legal action',
  '/compare/pensions-ombudsman-vs-fos/': 'Pensions Ombudsman vs FOS',
  '/pension-ombudsman-complaint-process/': 'The Ombudsman complaint process',
  '/what-happens-after-fos-rejects-my-pension-claim/': 'What happens if the FOS rejects your claim',
  '/pension-complaint-letter-template/': 'How to write a pension complaint letter',
  '/mis-sold-pension-letter-before-action/': 'Letter before action for pension claims',
  '/bad-pension-advice-claims/': 'Bad pension advice claims',
  '/what-is-a-suitability-report/': 'What a suitability report is',
  '/pension-advice-fca-rules/': 'FCA rules on pension advice',
  '/financial-adviser-duty-of-care/': 'A financial adviser’s duty of care',
  '/pension-charges-mis-selling/': 'Pension charges mis-selling',
  '/pension-annuity-mis-selling-claims/': 'Pension annuity mis-selling claims',
  '/pension-drawdown-mis-selling-claims/': 'Pension drawdown mis-selling claims',
  '/compare/annuity-vs-drawdown/': 'Annuity vs drawdown',
  '/pension-review-was-it-mis-selling/': 'Whether your pension review was mis-selling',
}

const clusters: string[][] = [
  ['/mis-sold-pension-claims/', '/how-do-i-know-if-my-pension-was-mis-sold/', '/pension-claim-process/', '/what-evidence-do-i-need-for-pension-mis-selling-claim/', '/how-long-does-a-pension-claim-take/', '/time-limits-mis-sold-pension-claims/', '/can-i-claim-if-i-am-already-retired/', '/can-i-claim-on-behalf-of-a-deceased-relative/', '/can-i-claim-if-i-moved-abroad/', '/what-if-i-already-used-a-claims-management-company/', '/make-a-claim/', '/carlisle-pension-mis-selling-claims/'],
  ['/no-win-no-fee-pension-claims/', '/no-win-no-fee-pension-claims-percentage/', '/compare/solicitor-vs-direct-claim/', '/mis-sold-pension-compensation-calculator/', '/how-much-compensation-can-i-get/', '/is-pension-mis-selling-compensation-taxable/'],
  ['/defined-benefit-pension-transfer-claims/', '/final-salary-pension-claims/', '/pension-transfer-claims/', '/how-is-defined-benefit-pension-transfer-redress-calculated/', '/what-is-a-cash-equivalent-transfer-value/', '/pension-transfer-value-analysis/', '/compare/defined-benefit-vs-defined-contribution/', '/pension-transfer-without-advice/', '/pension-transfer-after-divorce/'],
  ['/defined-benefit-pension-transfer-claims/', '/nhs-pension-transfer-claims/', '/teachers-pension-transfer-claims/', '/civil-service-pension-transfer-claims/', '/local-government-pension-transfer-claims/', '/police-pension-transfer-claims/', '/armed-forces-pension-transfer-claims/', '/occupational-pension-transfer-claims/'],
  ['/mis-sold-sipp-claims/', '/mis-sold-sipp-claims/storage-pod-pension-investment/', '/mis-sold-sipp-claims/overseas-property-pension-investment/', '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/', '/mis-sold-sipp-claims/green-energy-pension-investment/', '/mis-sold-sipp-claims/hotel-room-pension-investment/', '/mis-sold-sipp-claims/forestry-land-pension-investment/', '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/', '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/'],
  ['/high-risk-pension-investment-claims/', '/mis-sold-sipp-claims/', '/compare/sipp-vs-personal-pension/', '/what-is-a-personal-pension/', '/pension-scam-claims/', '/pension-cold-calling-claims/'],
  ['/financial-ombudsman-pension-complaints/', '/fscs-pension-claims/', '/compare/fos-vs-fscs/', '/compare/fos-vs-legal-action/', '/compare/pensions-ombudsman-vs-fos/', '/pension-ombudsman-complaint-process/', '/what-happens-after-fos-rejects-my-pension-claim/', '/pension-complaint-letter-template/', '/mis-sold-pension-letter-before-action/'],
  ['/fscs-pension-claims/', '/fscs-pension-compensation-limit/', '/how-to-make-an-fscs-pension-claim/', '/can-i-claim-if-adviser-has-gone-bust/'],
  ['/bad-pension-advice-claims/', '/what-is-a-suitability-report/', '/pension-advice-fca-rules/', '/financial-adviser-duty-of-care/', '/pension-charges-mis-selling/', '/pension-review-was-it-mis-selling/', '/pension-annuity-mis-selling-claims/', '/pension-drawdown-mis-selling-claims/', '/compare/annuity-vs-drawdown/'],
]

export function relatedFor(href: string, max = 5): { href: string; label: string }[] {
  const out: string[] = []
  const add = (h: string) => { if (h !== href && !out.includes(h) && out.length < max) out.push(h) }
  for (const c of clusters) {
    const i = c.indexOf(href)
    if (i === -1) continue
    add(c[0])
    // next siblings in circular order, so inbound links spread evenly across the cluster
    for (let k = 1; k < c.length && out.length < max; k++) add(c[(i + k) % c.length])
  }
  return out.map(h => ({ href: h, label: pageLabels[h] }))
}
