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
  title: 'Pension Charges Mis-Selling Claims | Excessive or Hidden Charges',
  description: 'Were you charged excessive or undisclosed fees on your pension? High charges can devastate retirement savings. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/pension-charges-mis-selling/' },
}

const faqs = [
  { q: 'Can I claim if I was charged excessive fees on my pension?', a: 'Possibly. FCA rules require advisers and product providers to disclose charges clearly and ensure total costs are reasonable and in the client\'s best interests. Where charges were not properly disclosed, were disproportionately high, or where the adviser received undisclosed remuneration from product providers (before the Retail Distribution Review in 2012), there may be grounds for a claim.' },
  { q: 'What counts as an excessive pension charge?', a: 'There is no single fixed threshold for "excessive," but charges are assessed in context. A total ongoing annual charge (product charge + adviser charge) above 2–3% per year is generally considered high. Upfront initial charges of 5–7% were common before the RDR but may have been unsuitable depending on the circumstances. The key question is whether charges were proportionate, clearly disclosed, and in the client\'s best interests.' },
  { q: 'What is the Retail Distribution Review (RDR) and why does it matter?', a: 'The Retail Distribution Review, implemented on 31 December 2012, banned commission payments from product providers to advisers. Before the RDR, advisers could receive initial and trail commission — ongoing payments from the pension provider — creating conflicts of interest. If you were advised before 2013 and your adviser received undisclosed or poorly disclosed commission, this may be relevant to a mis-selling claim.' },
  { q: 'What are trail commission and initial commission?', a: 'Initial commission was a one-off payment from the pension provider to the adviser when a pension was set up — typically 3–7% of the investment. Trail commission (or renewal commission) was an ongoing annual payment — typically 0.5–1% per year of the fund value — paid for as long as the client remained in the product. Both reduced the net return on the pension. Before the RDR, these had to be disclosed but were often poorly explained.' },
  { q: 'Can I claim for high charges on a SIPP or SSAS?', a: 'Yes. SIPPs in particular can carry high charges — including SIPP operator charges, investment charges, and adviser charges — that compound over time to significantly erode the pension fund. If SIPP charges were not properly disclosed or were disproportionate, this may be relevant to a mis-selling claim, particularly alongside any wider claim about unsuitable investment advice.' },
  { q: 'What is an annual management charge (AMC) and what is reasonable?', a: 'An annual management charge is the fee charged by a pension or fund provider for managing the investment, typically expressed as a percentage of the fund value per year. For mainstream pension products, AMCs of 0.5–1.0% per year are common. AMCs significantly above this level — particularly when combined with adviser charges and product charges — may indicate that the total cost was disproportionate.' },
  { q: 'Does excessive charging have to be the only problem for me to have a claim?', a: 'No. Excessive or undisclosed charges often sit alongside other grounds for a claim — unsuitable investment advice, an unsuitable DB transfer, or high-risk SIPP investments. We assess the full picture of what was recommended and charged, and identify all available grounds for a claim.' },
]

const chargeTypes = [
  { label: 'Initial/upfront adviser charge', desc: 'A one-off fee — or commission — paid to the adviser when the pension was set up, typically deducted from the fund.' },
  { label: 'Ongoing adviser charge', desc: 'An annual percentage of the fund paid to the adviser each year for ongoing advice — reasonable at 0.5–1%, but sometimes higher.' },
  { label: 'Annual management charge (AMC)', desc: 'Charged by the pension/fund provider for managing the investment. Often 0.5–1% p.a. for mainstream products.' },
  { label: 'SIPP operator charge', desc: 'Charged by the SIPP operator for administering the scheme. Can be a flat fee, a percentage, or both.' },
  { label: 'Fund dealing/transaction charges', desc: 'Charged on each trade within the SIPP — can be significant in actively managed or frequently-traded portfolios.' },
  { label: 'Early exit/surrender charges', desc: 'Penalties for leaving a product before a specified date — often not adequately explained at the point of sale.' },
]

export default function PensionChargesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Charges Mis-Selling Claims', item: '/pension-charges-mis-selling/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Charges Mis-Selling Claims" description={metadata.description as string} url="/pension-charges-mis-selling/" />
      <ArticleSchema title="Pension Charges Mis-Selling Claims" description={metadata.description as string} url="/pension-charges-mis-selling/" />
      <Breadcrumb crumbs={[{ label: 'Pension Charges Mis-Selling' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Charges Mis-Selling — Excessive or Undisclosed Fees on Your Pension</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Excessive or undisclosed pension charges can amount to mis-selling — advisers must clearly disclose all costs and ensure they are proportionate.',
              'Commission (before the 2012 RDR) and ongoing adviser charges that were poorly explained are common grounds for claims.',
              'Total annual charges above 2–3% per year significantly erode pension savings over time.',
              'Charge-related claims often arise alongside other grounds — unsuitable advice, DB transfers, SIPP mis-selling.',
              'We assess the full picture — all charges, all advice — to identify every available ground for a claim.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension charges might seem modest as annual percentages, but compounded over years they can take a devastating toll on retirement savings. Where charges were excessive, poorly disclosed, or involved undisclosed commission, there may be grounds for a mis-selling claim. Often, charge-related problems are part of a wider unsuitable advice picture.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you were charged excessive or undisclosed fees — or if your adviser received commission that was not properly explained — there may be grounds for a claim. Contact us for a free review of your charges and advice.</p>
            </div>
            <h2>Types of Pension Charge That Can Give Rise to a Claim</h2>
            <div className="not-prose space-y-3 mb-8">
              {chargeTypes.map(c => (
                <div key={c.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <AlertTriangle size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{c.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2>The Impact of High Charges Over Time</h2>
            <p>The long-term effect of high charges is often underestimated. A pension fund of £100,000 growing at 5% per year over 20 years:</p>
            <ul>
              <li>With total charges of <strong>1% per year</strong>: grows to approximately £214,000</li>
              <li>With total charges of <strong>3% per year</strong>: grows to approximately £161,000</li>
              <li>The difference — approximately <strong>£53,000</strong> — is the cost of the higher charges.</li>
            </ul>
            <p className="text-xs text-gray-500">Illustrative only — not a guarantee of any specific outcome.</p>
            <h2>Commission Before the RDR (Pre-2013 Advice)</h2>
            <p>Before 31 December 2012, advisers could receive commission from pension providers. This created a conflict of interest: advisers had a financial incentive to recommend products paying higher commission, regardless of whether those products were in the client's best interests. Commission had to be disclosed, but the quality of disclosure varied significantly. If you were advised before 2013 and the commission arrangements were not properly explained, this may support a mis-selling claim.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Charges Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you charged excessive or undisclosed fees on your pension? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'No Win No Fee Pension Claims', href: '/no-win-no-fee-pension-claims/' },
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
