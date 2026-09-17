import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Overseas Property SIPP Investment Claims | Pension Mis-Selling',
  description: 'Was your SIPP invested in overseas property? Off-plan or foreign property in a pension was high-risk and often mis-sold. Free solicitor review — claim today.',
  alternates: { canonical: '/mis-sold-sipp-claims/overseas-property-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in overseas or foreign property?', a: 'Yes. Overseas property — particularly off-plan developments in countries such as Cape Verde, Turkey, Brazil, Bulgaria or the UAE — was widely sold as a SIPP investment in the 2000s and 2010s. These investments were high-risk, illiquid, and often unsuitable for the investors who received them. If you were advised to transfer your pension into a SIPP and invest in overseas property, you may have grounds for a claim.' },
  { q: 'What was wrong with overseas property inside a SIPP?', a: 'Overseas property investments placed in SIPPs had multiple characteristics that made them unsuitable for pension investment: they were illiquid (impossible to sell quickly), subject to foreign market risk, often off-plan (meaning the development may not be completed), lacked the protections of UK-regulated investments, and were frequently associated with high charges. The anticipated rental income and capital growth rarely materialised.' },
  { q: 'Who is responsible for an overseas property SIPP claim?', a: 'Responsibility can lie with the financial adviser who recommended the SIPP transfer and the overseas property investment; the SIPP operator who accepted the unregulated overseas asset into the pension; and potentially the property promoter. We assess each case individually to identify which parties had regulatory obligations and where those were breached.' },
  { q: 'My SIPP operator accepted the overseas property — are they liable?', a: 'Potentially yes. A number of FOS decisions and court cases have found SIPP operators liable where they accepted unregulated overseas property investments without conducting adequate due diligence or without properly assessing whether the investment was suitable for their clients. The SIPP operator owed you duties as the holder of your pension.' },
  { q: 'What if the development was never completed or the company collapsed?', a: 'Many overseas property schemes sold into SIPPs either failed to complete construction or the promoter company failed. In these cases, the asset in your SIPP may have little or no value. Compensation claims focus on restoring your pension to the position it would have been in under a suitable investment — not on recovering money from the failed property developer.' },
  { q: 'Can I claim through the FSCS for an overseas property SIPP loss?', a: 'If the firm that advised you or the SIPP operator that held the investment has since failed and was FCA-authorised, you may be able to claim through the FSCS. Many of the firms involved in SIPP overseas property mis-selling have since been closed down or had their authorisation withdrawn. See our guide to FSCS pension claims.' },
  { q: 'Is there a time limit for making an overseas property SIPP claim?', a: 'Yes. Time limits apply depending on the route taken. For many investors, the date of knowledge — when you first knew or reasonably should have known about the loss — may be later than the original investment date, particularly where a development was slow to fail. Do not assume you are out of time without obtaining specific legal advice.' },
]

export default function OverseasPropertyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Overseas Property SIPP Claims', item: '/mis-sold-sipp-claims/overseas-property-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Overseas Property SIPP Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/overseas-property-pension-investment/" />
      <ArticleSchema title="Overseas Property SIPP Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/overseas-property-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Overseas Property Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Overseas Property SIPP Investment Claims</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Overseas and off-plan property was widely placed into SIPPs in the 2000s and 2010s — these were high-risk, illiquid, unregulated assets unsuitable for pension investment.',
              'Claims can be brought against the adviser who recommended the transfer, the SIPP operator who accepted the investment, or both.',
              'Many overseas property schemes have failed; compensation focuses on restoring your pension — not on the failed development.',
              'FSCS claims may be available if the adviser or SIPP operator has since failed.',
              'Time limits apply — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">During the 2000s and early 2010s, thousands of people were advised to transfer their pensions into SIPPs and invest in overseas property — off-plan developments in countries including Cape Verde, Turkey, Brazil, Bulgaria, and the UAE. These investments were high-risk, illiquid, and in most cases wholly unsuitable as pension assets. Many of the developments failed to complete, and investors were left with worthless or near-worthless SIPPs.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your SIPP held overseas property investments — whether or not the development completed — you may have a claim against the financial adviser and/or SIPP operator. FSCS claims may be available if those firms have failed. Contact us for a free, no-obligation assessment.</p>
            </div>

            <h2>Why Overseas Property Was Unsuitable as a SIPP Investment</h2>
            <p>Pension investments should be appropriate for the investor's circumstances — typically requiring some degree of liquidity, regulation, and transparent valuation. Overseas property typically had none of these characteristics:</p>
            <ul>
              <li><strong>Illiquid:</strong> there was no ready market to sell an interest in an overseas property development. Pension funds became locked up with no exit route.</li>
              <li><strong>Unregulated:</strong> overseas property investments were not regulated financial instruments. Investors had no FCA protection over the underlying asset.</li>
              <li><strong>Subject to foreign risk:</strong> currency fluctuation, local legal complexity, and overseas planning and construction risk all added to the investment risk.</li>
              <li><strong>Off-plan risk:</strong> many schemes were sold before construction began or was complete. Numerous developments stalled or were never built.</li>
              <li><strong>Opaque charges:</strong> multiple layers of fees — to the property promoter, the SIPP operator, and the introducing adviser — were often not clearly disclosed.</li>
            </ul>

            <h2>SIPP Operator Liability</h2>
            <p>One of the important developments in SIPP mis-selling law is the recognition that SIPP operators — the firms that administer SIPPs — owe duties to their clients. Where a SIPP operator accepted an unregulated, high-risk overseas property investment without adequately assessing whether it was appropriate, that operator may be liable.</p>
            <p>A series of FOS decisions and court judgments — including the Supreme Court decision in <em>Adams v Options UK Personal Pensions LLP</em> [2021] — have established that SIPP operators can be liable in certain circumstances. Whether this applies to your case depends on the specific facts. We will assess this as part of your initial review.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your SIPP invested in overseas property? Contact us for a free, no-obligation assessment of your claim.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not assume you are out of time. The date of knowledge may be later than the investment date. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
