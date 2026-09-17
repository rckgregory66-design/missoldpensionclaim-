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
  title: 'How Much Pension Mis-Selling Compensation Can I Get?',
  description: 'How is pension mis-selling compensation calculated? What affects the amount? FOS cap, FSCS limit, and how DB and SIPP claims are valued — full guide.',
  alternates: { canonical: '/how-much-compensation-can-i-get/' },
}

const faqs = [
  { q: 'How is pension mis-selling compensation calculated?', a: 'Compensation aims to put you back in the position you would have been in had the mis-selling not occurred. For DB transfer claims, under PS22/13, this means comparing what your pension pot should have been worth (had you not transferred) against its actual current value. For SIPP mis-selling and high-risk investment claims, the starting point is the loss of value — what you invested versus what the investment is now worth, adjusted for what would have happened in a suitable alternative.' },
  { q: 'How is DB pension transfer compensation calculated?', a: 'Under FCA PS22/13 (the redress methodology for DB pension transfers), the firm must: (1) calculate what the pension pot would need to be worth today to purchase the DB benefits given up; (2) compare that against the actual current pot value; (3) if there is a shortfall, offer that shortfall as a lump sum. The calculation uses standardised actuarial assumptions set by the FCA and is updated periodically. This replaced the earlier CETV-based approach and typically produces higher redress figures.' },
  { q: 'What is the FOS compensation cap?', a: 'The Financial Ombudsman Service can award up to £430,000 per complaint for acts or omissions occurring after 1 April 2019. For earlier acts, lower limits apply (£350,000 for acts after 1 April 2014; £150,000 before that). The cap applies per complaint, not per product or firm. If your loss exceeds the relevant cap, the FOS cannot award the full amount — but legal proceedings (court action) are not subject to this cap.' },
  { q: 'What is the FSCS compensation limit for pension claims?', a: 'The FSCS compensates up to £85,000 per failed firm for investment advice losses (including pension mis-selling). If you have claims against multiple failed firms — for example a pension transfer adviser and a SIPP operator both failed — each claim is assessed separately up to £85,000. The FSCS limit is per firm, not per product.' },
  { q: 'What factors affect how much compensation I receive?', a: 'Key factors include: the size of the loss (the gap between what you have and what you should have had); whether the firm is still solvent (FOS awards are only as good as the firm\'s ability to pay; FSCS is available if the firm has failed); the route used (FOS cap vs court proceedings vs FSCS limit); and the quality of the loss calculation and supporting evidence. Early legal advice helps ensure all factors are properly captured.' },
  { q: 'Can I recover consequential losses — for example, if I suffered financial hardship because my pension ran out?', a: 'Potentially. Compensation can include direct losses (the pension shortfall) and consequential losses in some circumstances — for example, if the loss of pension income caused you to incur identifiable additional expense or loss. These are assessed on a case-by-case basis and are more complex to establish. A solicitor can advise on what consequential losses are recoverable in your specific case.' },
  { q: 'Does compensation count as income for tax purposes?', a: 'Generally, no — compensation for loss of a pension is not treated as employment income. However, the tax position depends on how the compensation is paid and what it represents. Compensation paid directly into a pension is usually not taxable; a cash lump sum representing lost pension income may have some tax implications. See our dedicated guide on <a href="/is-pension-mis-selling-compensation-taxable/">whether pension mis-selling compensation is taxable</a>.' },
]

export default function HowMuchCompensationPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How Much Compensation Can I Get?', item: '/how-much-compensation-can-i-get/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="How Much Pension Mis-Selling Compensation Can I Get?" description={metadata.description as string} url="/how-much-compensation-can-i-get/" />
      <ArticleSchema title="How Much Pension Mis-Selling Compensation Can I Get?" description={metadata.description as string} url="/how-much-compensation-can-i-get/" />
      <Breadcrumb crumbs={[{ label: 'How Much Compensation Can I Get?' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How Much Pension Mis-Selling Compensation Can I Get?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Compensation aims to restore you to the position you would have been in — the gap between your actual position and where you should have been.',
              'DB transfer redress under PS22/13 is calculated by comparing the cost of replicating lost DB benefits against the current fund value.',
              'The FOS cap is £430,000 for post-April 2019 acts — claims above this require court proceedings.',
              'The FSCS limit is £85,000 per failed firm — multiple failed firms can each be claimed against separately.',
              'The quality of the loss calculation and supporting evidence significantly affects the final award.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">How much you can recover in a pension mis-selling claim depends on the size of your actual loss, the route you take, and whether the firm is still solvent. Understanding the caps, calculation methods, and what factors affect the amount is essential before starting a claim — and can significantly influence which route you pursue.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Compensation puts you back where you should have been. The specific amount depends on the type of claim, the loss calculation, and the route. Contact us for a free assessment — we quantify losses as part of our initial review.</p>
            </div>
            <h2>Compensation Caps — FOS and FSCS</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Route</th>
                    <th className="text-left p-3 font-semibold">Cap</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { route: 'FOS — post April 2019', cap: '£430,000', note: 'Per complaint; firm must be solvent' },
                    { route: 'FOS — April 2014–March 2019', cap: '£350,000', note: 'Per complaint' },
                    { route: 'FOS — before April 2014', cap: '£150,000', note: 'Per complaint' },
                    { route: 'FSCS — failed firm', cap: '£85,000', note: 'Per failed firm; no cap if firm still solvent and using FOS' },
                    { route: 'Court proceedings', cap: 'No cap', note: 'Full loss recoverable; costs risk applies' },
                  ].map((r, i) => (
                    <tr key={r.route} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.route}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100 font-semibold">{r.cap}</td>
                      <td className="p-3 text-gray-500 text-xs border-b border-gray-100">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>DB Transfer Compensation — The PS22/13 Method</h2>
            <p>Under FCA PS22/13, DB transfer compensation is calculated as follows:</p>
            <ol>
              <li>Calculate the <strong>cost of replacing the DB benefits given up</strong> — using standardised actuarial assumptions to find the fund needed today to buy the equivalent guaranteed income in the open market.</li>
              <li>Compare against the <strong>actual current fund value</strong>.</li>
              <li>The <strong>shortfall</strong> (if any) is the compensation payable, typically as a lump sum into a pension or as a cash payment net of tax relief adjustment.</li>
            </ol>
            <p>Because DB benefits are expensive to replicate commercially, PS22/13 redress figures are often very substantial — particularly for younger claimants or those who transferred large pots. See our <Link href="/how-is-defined-benefit-pension-transfer-redress-calculated/" className="text-[#1e3a5f] underline">detailed PS22/13 redress guide</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Loss Assessment</h3>
              <p className="text-gray-300 text-sm mb-5">We quantify your potential loss as part of our free initial review — contact us to find out what your claim may be worth.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'DB Redress Calculation (PS22/13)', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
                  { label: 'FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'Is Compensation Taxable?', href: '/is-pension-mis-selling-compensation-taxable/' },
                  { label: 'No Win No Fee Percentage', href: '/no-win-no-fee-pension-claims-percentage/' },
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
