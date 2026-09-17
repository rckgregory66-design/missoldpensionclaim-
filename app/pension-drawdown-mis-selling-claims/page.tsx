import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Pension Drawdown Mis-Selling Claims | Unsuitable Drawdown Advice',
  description: 'Were you advised to go into drawdown when an annuity or staying in your DB scheme would have been more suitable? You may have a claim. Solicitor-led — free review.',
  alternates: { canonical: '/pension-drawdown-mis-selling-claims/' },
}

const faqs = [
  { q: 'Can pension drawdown be mis-sold?', a: 'Yes. While pension drawdown can be an appropriate retirement income strategy for some people, it involves leaving your pension fund invested and drawing income from it — exposing you to investment risk, sequencing risk, and the possibility of running out of money. If a financial adviser recommended drawdown when an annuity or another arrangement would have been more suitable for your circumstances, that may constitute unsuitable advice and give rise to a claim for compensation.' },
  { q: 'What makes drawdown advice unsuitable?', a: 'Drawdown advice is typically unsuitable where: the adviser recommended drawdown without properly assessing your attitude to risk; your income needs were certain and regular (suggesting an annuity or guaranteed income product would have been more appropriate); you were close to or in retirement with little capacity to absorb investment losses; the drawdown fund was invested in high-risk or illiquid assets; the charges on the drawdown arrangement were excessive and not clearly explained; or you were transferred from a defined benefit pension into a drawdown arrangement without adequate justification.' },
  { q: 'What is the difference between flexi-access drawdown and capped drawdown?', a: 'Capped drawdown — available before April 2015 — limited the income you could draw each year to 150% of an equivalent annuity rate. Flexi-access drawdown, introduced by the pension freedoms reforms in April 2015, allows unlimited income withdrawals. Both can be mis-sold if the recommendation was unsuitable for the individual\'s circumstances at the time.' },
  { q: 'Was I mis-sold drawdown just because my pension has fallen in value?', a: 'Not necessarily. Pension drawdown involves investment risk, and falls in fund value can occur without the advice being unsuitable. What matters is whether the advice was appropriate for your circumstances at the time it was given — your risk appetite, income needs, financial resilience, and overall situation. A fall in value is not itself evidence of mis-selling, but it can prompt a review of whether the advice was sound.' },
  { q: 'Can I claim if I was advised to move from an annuity into drawdown?', a: 'The decision to switch from an annuity into drawdown — particularly where the annuity was already providing a guaranteed income — requires very careful consideration. If you were advised to give up a guaranteed annuity income in favour of drawdown, and that advice was not in your best interests, you may have a claim. The loss of guaranteed income is very difficult to reverse.' },
  { q: 'What about drawdown following a DB pension transfer?', a: 'Many DB pension transfers were followed by a recommendation to invest the transferred fund in drawdown within a SIPP. In these cases, the claim may encompass both the unsuitability of the DB transfer advice and the unsuitability of the subsequent drawdown arrangement and its investments. We assess the full picture of what was recommended.' },
  { q: 'Is there a time limit for a pension drawdown mis-selling claim?', a: 'Yes. Time limits apply depending on the route. The time limit may run from when you knew or should have known the advice was unsuitable. For drawdown arrangements that have underperformed over many years, the relevant date is not always the date the arrangement was set up. Seek legal advice to understand the specific time limit that applies to your circumstances.' },
]

const unsuitabilityFactors = [
  'Your risk appetite was low or cautious — you could not afford to lose capital',
  'You had fixed, regular income needs that a guaranteed product would have better served',
  'You were near or in retirement with little time to recover investment losses',
  'Your capacity for loss was low — the drawdown fund was a significant part of your overall wealth',
  'The drawdown fund was invested in high-risk, illiquid or unregulated assets',
  'Charges on the arrangement were high and not clearly explained before you agreed',
  'You were not shown an annuity comparison — or the annuity option was not properly explained',
]

export default function DrawdownMisSellingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Drawdown Mis-Selling Claims', item: '/pension-drawdown-mis-selling-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Drawdown Mis-Selling Claims" description={metadata.description as string} url="/pension-drawdown-mis-selling-claims/" />
      <ArticleSchema title="Pension Drawdown Mis-Selling Claims" description={metadata.description as string} url="/pension-drawdown-mis-selling-claims/" />

      <Breadcrumb crumbs={[{ label: 'Pension Drawdown Mis-Selling Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Drawdown Mis-Selling Claims — Unsuitable Drawdown Advice</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension drawdown can be mis-sold if the advice was unsuitable for your circumstances — particularly where a guaranteed income product would have been more appropriate.',
              'Key red flags: low risk tolerance, fixed income needs, near-retirement, high charges, illiquid investments, or a DB transfer leading directly into drawdown.',
              'A fall in drawdown fund value is not itself evidence of mis-selling — what matters is whether the advice was suitable at the time.',
              'Claims arising from DB transfers followed by drawdown may cover both the transfer advice and the drawdown arrangement.',
              'Time limits apply — the clock may run from when you knew or should have known the advice was unsuitable.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension drawdown gives retirees flexibility over how and when they take their pension income. But that flexibility comes with investment risk — and for many people, drawdown is not the right choice. If you were advised to go into drawdown and your circumstances at the time meant a different arrangement would have been more suitable, you may have grounds for a compensation claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Pension drawdown can be mis-sold where the advice did not properly account for your risk appetite, income needs, or capacity for loss — or where a guaranteed income product would have been more appropriate. Contact us for a free review of your situation.</p>
            </div>

            <h2>Factors That Can Make Drawdown Advice Unsuitable</h2>
            <div className="not-prose space-y-2 mb-8">
              {unsuitabilityFactors.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>Drawdown After a DB Pension Transfer</h2>
            <p>Many mis-selling cases involve a two-stage problem: an unsuitable recommendation to transfer out of a defined benefit pension, followed by an unsuitable recommendation to invest the transfer value in a drawdown arrangement. In these cases, the claim may encompass:</p>
            <ul>
              <li>The unsuitability of the DB transfer advice itself</li>
              <li>The unsuitability of the drawdown arrangement — its investment strategy, risk level, or charges</li>
              <li>Any high-risk or unregulated investments held within the SIPP drawdown fund</li>
            </ul>
            <p>We assess the full picture of what was recommended — including any DB transfer that preceded the drawdown arrangement. See our guides on <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit transfer claims</Link> and <Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">mis-sold SIPP claims</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to go into drawdown and suffered losses? Contact us for a free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
