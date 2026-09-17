import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'How Is DB Pension Transfer Redress Calculated? | Compensation Guide',
  description: 'Defined benefit pension transfer redress is calculated by comparing what you gave up with what you now have. Solicitor guide to FCA redress methodology for DB transfers.',
  alternates: { canonical: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
}

const faqs = [
  { q: 'How is compensation for a defined benefit pension transfer calculated?', a: 'Compensation for a defined benefit (DB) transfer follows the FCA\'s redress methodology set out in PS22/13 and related guidance. The calculation compares the value of the guaranteed benefits you gave up in the DB scheme — modelled as a cost to replace those benefits in the open market — against the value of the fund you transferred into. The difference is the "loss" that redress aims to make good.' },
  { q: 'What is the FCA redress methodology for DB transfers?', a: 'The FCA published a redress methodology for defined benefit pension transfer cases in Policy Statement PS22/13 (July 2022), building on earlier guidance. It sets out how firms should calculate the cost of putting a consumer back in the position they would have been in had unsuitable advice not been given. The methodology involves comparing the transfer value equivalent of the DB benefits given up against the actual pension fund value, using prescribed assumptions and discount rates.' },
  { q: 'What is a comparator value in a DB pension claim?', a: 'The comparator value — sometimes called the "reference value" — is the calculated cost of replicating the DB scheme benefits in the open market. It represents what an annuity or equivalent arrangement would cost to provide the same guaranteed income as the DB scheme would have provided. This is compared against the current value of the actual pension fund to determine the redress amount.' },
  { q: 'Why are DB transfer compensation amounts often very large?', a: 'DB pension benefits are very expensive to replicate. A guaranteed, inflation-linked income payable for life, with a spouse\'s pension, is significantly more valuable than an equivalent fund value in a SIPP or personal pension. The cost of buying an equivalent income in today\'s annuity market — particularly in a low-interest-rate environment — is typically much higher than the transfer value originally paid. This gap drives the large compensation figures often seen in DB transfer cases.' },
  { q: 'Does compensation include interest?', a: 'Yes, in most cases. Where redress is calculated for a loss that has persisted over time, interest is usually added to reflect the time value of money — the fact that you have been deprived of the benefit of the pension for a period. The FOS and FSCS both apply interest to compensation awards. The rate applied varies; the FOS typically applies 8% per year on upheld complaints.' },
  { q: 'What happens if my pension fund has increased in value since the transfer?', a: 'The calculation takes account of the actual current value of your fund. If your fund has grown since the transfer, the gap between the comparator value and your fund value will be smaller. In some cases — particularly if the transfer happened very recently and markets have performed well — the fund value may exceed the comparator, resulting in no loss at that point in time. However, the comparison is ongoing: if markets fall, the gap can reopen.' },
  { q: 'Who calculates DB transfer redress — do I need an actuary?', a: 'For straightforward cases, redress can be calculated by a financial expert or specialist solicitor applying the FCA methodology. For complex cases — particularly those involving very large transfer values, unusual scheme benefits, or disputed facts — actuarial input may be needed. We work with appropriate experts to ensure redress is correctly and fully calculated.' },
]

export default function DBRedressPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How Is DB Pension Transfer Redress Calculated?', item: '/how-is-defined-benefit-pension-transfer-redress-calculated/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="How Is Defined Benefit Pension Transfer Redress Calculated?" description={metadata.description as string} url="/how-is-defined-benefit-pension-transfer-redress-calculated/" />
      <ArticleSchema title="How Is Defined Benefit Pension Transfer Redress Calculated?" description={metadata.description as string} url="/how-is-defined-benefit-pension-transfer-redress-calculated/" />

      <Breadcrumb crumbs={[{ label: 'DB Transfer Redress Calculation' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How Is Defined Benefit Pension Transfer Redress Calculated?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'DB transfer redress compares the cost of replacing your lost guaranteed benefits against the current value of your actual pension fund.',
              'The FCA published a formal redress methodology in PS22/13 (2022) that advisers and firms are required to follow.',
              'Because DB benefits are very expensive to replicate, the gap — and therefore the compensation — can be very large.',
              'Interest is added to reflect the time value of money for the period since the loss.',
              'Actuarial input may be needed for complex cases with large transfer values or unusual scheme benefits.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">One of the most common questions in defined benefit pension transfer claims is how compensation is calculated — and why the amounts are often substantial. The answer lies in the extraordinary value of the guaranteed benefits that were given up, and the gap between that value and what the transferred fund is now worth.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">DB transfer redress = the cost of replacing the guaranteed benefits you gave up (the comparator value) minus the current value of your actual pension fund. The difference is what the firm must pay. Interest is added for the period of loss. Because guaranteed income is expensive to replicate, this gap is often very large.</p>
            </div>

            <h2>The Core Principle: Restoration</h2>
            <p>Compensation in mis-selling cases is aimed at restoration — putting you back in the financial position you would have been in had the unsuitable advice not been given. For a DB pension transfer claim, this means:</p>
            <ul>
              <li>Calculating the value of the pension you would have had, had you stayed in the DB scheme, and</li>
              <li>Comparing that against the value of the pension fund you actually have.</li>
            </ul>
            <p>The difference — the shortfall — is the redress that the firm or FSCS must provide.</p>

            <h2>The FCA Redress Methodology (PS22/13)</h2>
            <p>In July 2022, the FCA published Policy Statement PS22/13, which established a standardised redress methodology for defined benefit pension transfer claims. This gave firms and advisers a prescribed framework for calculating loss, using consistent assumptions and discount rates.</p>
            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-2">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">PS22/13 — What It Means in Practice</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">PS22/13 requires firms to calculate redress by comparing:</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>The cost of purchasing an annuity (or equivalent) that would replicate the DB scheme benefits — the <strong>comparator value</strong></li>
                <li>Against the current value of the consumer's actual pension fund</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">Where the comparator value exceeds the fund value, the difference is the redress amount. The firm must pay this as a lump sum or as a contribution to a replacement pension arrangement.</p>
            </div>

            <h2>Why DB Benefits Are Expensive to Replace</h2>
            <p>A defined benefit pension provides a guaranteed, inflation-linked income for life, together with a spouse's pension and other ancillary benefits. To replicate this in the open market — by purchasing an annuity offering equivalent terms — costs significantly more than the transfer value that was paid at the time of the transfer.</p>
            <p>Several factors drive this gap:</p>
            <ul>
              <li><strong>Longevity:</strong> an income payable for life, with no investment risk, is inherently expensive to provide. Annuity pricing reflects the cost of funding potentially decades of payments.</li>
              <li><strong>Inflation linkage:</strong> a pension that increases with CPI or RPI costs more to replicate than a level income.</li>
              <li><strong>Spouse's pension:</strong> benefits payable to a surviving spouse add further cost to the comparator.</li>
              <li><strong>Discount rates:</strong> in a low-interest-rate environment, the cost of replicating income-stream liabilities increases. When gilt yields are low, annuity prices are high.</li>
            </ul>

            <h2>A Simplified Example</h2>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold">Item</th>
                    <th className="text-left p-3 font-semibold">Value</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'Transfer value paid (CETV)', value: '£120,000', notes: 'The cash sum the member received from the DB scheme at transfer.' },
                    { item: 'Current pension fund value', value: '£95,000', notes: 'What the transferred fund is now worth, after charges and investment performance.' },
                    { item: 'Comparator value (cost to replicate DB benefits)', value: '£210,000', notes: 'Estimated cost of purchasing an equivalent annuity today.' },
                    { item: 'Redress before interest', value: '£115,000', notes: 'Comparator value minus current fund value.' },
                    { item: 'Interest on loss', value: '£28,750', notes: 'Approximate 8% pa FOS rate over 3 years on core loss.' },
                    { item: 'Total redress (indicative)', value: '£143,750', notes: 'Illustrative only. Actual figures depend on individual case.' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{row.item}</td>
                      <td className="p-3 font-semibold text-[#0f2035] border-t border-gray-100">{row.value}</td>
                      <td className="p-3 text-gray-500 text-xs border-t border-gray-100">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">This is a simplified illustrative example only. Actual calculations depend on the specific scheme benefits, assumptions, discount rates, and individual circumstances. It does not represent any specific case or guaranteed outcome.</p>
            </div>

            <h2>How Redress Is Paid</h2>
            <p>Where a firm is required to pay redress, it can be structured in different ways:</p>
            <ul>
              <li>A <strong>cash lump sum</strong> paid directly to you.</li>
              <li>A <strong>pension credit</strong> — a contribution to a pension arrangement to restore the pension value (with potential annual allowance implications — see our <Link href="/is-pension-mis-selling-compensation-taxable/" className="text-[#1e3a5f] underline">tax guide</Link>).</li>
              <li>An <strong>enhanced annuity purchase</strong> in some cases.</li>
            </ul>
            <p>The structure of payment can have tax implications. Seek independent financial and tax advice before agreeing to a specific payment structure.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Transferred out of a DB scheme? We can assess whether you have a claim and estimate the potential redress. Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'Is Compensation Taxable?', href: '/is-pension-mis-selling-compensation-taxable/' },
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
