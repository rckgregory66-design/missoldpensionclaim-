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
  title: 'Forestry & Land Investment SIPP Claims | Pension Mis-Selling',
  description: 'Was your SIPP invested in forestry, farmland or land banking? These were high-risk unregulated investments. Solicitor-led pension claims — free initial review.',
  alternates: { canonical: '/mis-sold-sipp-claims/forestry-land-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in forestry or land?', a: 'Yes. Forestry investments, farmland schemes, and land banking arrangements placed inside SIPPs were high-risk, illiquid, unregulated assets that were unsuitable for pension investment in the vast majority of cases. If you were advised to transfer your pension into a SIPP and invest in forestry or land, you may have grounds for a claim against the financial adviser and/or the SIPP operator.' },
  { q: 'What types of forestry and land investment were placed in SIPPs?', a: 'Common types included: managed forestry schemes (where investors owned a plot of trees); farmland and agricultural land investments; teak and other tropical hardwood plantation schemes; land banking (purchasing plots of greenfield land on the expectation of planning permission); and conservation land schemes marketed with environmental or tax benefits.' },
  { q: 'Why were forestry and land investments unsuitable as SIPP assets?', a: 'These investments were illiquid — there was no ready market to exit them. They were unregulated — not FCA-authorised products — meaning investors had no FCA recourse. Many were operated by small, often offshore, promoter companies with no track record. Returns depended entirely on the operational success of the promoter and market conditions for the specific asset. Many have since failed entirely.' },
  { q: 'What about land banking schemes in SIPPs?', a: 'Land banking — purchasing plots of greenfield land on the expectation that planning permission would be granted, significantly increasing the land\'s value — was marketed to pension investors as a high-return SIPP investment. In practice, the planning permissions rarely materialised, the plots had little or no genuine market value, and many land banking promoters were subsequently the subject of fraud investigations. If your SIPP held land banking investments, seek advice promptly.' },
  { q: 'Who is responsible for a forestry or land SIPP loss?', a: 'Responsibility may lie with the financial adviser who recommended the SIPP and the investment; the SIPP operator who accepted the unregulated asset into the pension without adequate due diligence; and potentially the FSCS if either has since failed and was FCA-authorised. We assess each case to identify all available routes.' },
  { q: 'Can I claim through the FSCS for a forestry or land SIPP loss?', a: 'If the firm that gave you the advice or the SIPP operator that held the investment has since failed and was FCA-authorised, you may be able to claim through the FSCS. Many of the advisory firms involved in SIPP forestry and land investment mis-selling have since been closed or had their authorisation withdrawn.' },
  { q: 'Is there a time limit for a forestry or land SIPP claim?', a: 'Yes. Time limits apply depending on the route taken. For investments that have been slow to fail or where the loss only became apparent over time, the date of knowledge may be later than the original investment date, which can affect when time limits begin to run. Seek advice promptly.' },
]

export default function ForestryLandPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Forestry & Land SIPP Claims', item: '/mis-sold-sipp-claims/forestry-land-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Forestry & Land Investment SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/forestry-land-pension-investment/" />
      <ArticleSchema title="Forestry & Land Investment SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/forestry-land-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Forestry & Land Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Forestry and Land Investment SIPP Claims</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Forestry, farmland, land banking and plantation investments placed into SIPPs were high-risk, illiquid, unregulated assets — unsuitable for pension investment.',
              'Land banking was particularly problematic: the anticipated planning permissions rarely came, and many schemes were fraudulent.',
              'Claims can be brought against the adviser, the SIPP operator, or both; FSCS claims may be available where those firms have since failed.',
              'Many promoter companies and advisory firms have since collapsed.',
              'Time limits apply — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Forestry investments, farmland schemes, plantation projects, and land banking arrangements were marketed to pension investors as tangible, asset-backed opportunities — a supposedly safe alternative to stocks and shares. In practice, they were illiquid, unregulated assets that were entirely unsuitable for most SIPP investors. Many have since failed, and investors have lost significant pension savings as a result.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your SIPP held forestry, land banking, farmland or plantation investments, you may have a claim against the adviser and/or the SIPP operator. FSCS claims may be available if those firms have since failed. Contact us for a free assessment.</p>
            </div>

            <h2>Common Forestry and Land SIPP Schemes</h2>
            <p>A wide variety of land-backed investments were placed into SIPPs. Common structures included:</p>
            <ul>
              <li><strong>Managed forestry schemes</strong> — investors purchased a plot of forest, managed by a third-party operator, with returns promised from the eventual sale of timber. Many operated in the UK, Eastern Europe, or Central America.</li>
              <li><strong>Teak and tropical hardwood plantations</strong> — investments in teak, mahogany or other slow-growing hardwoods in Africa, Asia or Latin America, with long-term returns promised from timber sales on maturity.</li>
              <li><strong>Agricultural and farmland investments</strong> — fractional interests in farmland, sometimes offshore, marketed as income-producing through rental to farmers.</li>
              <li><strong>Land banking</strong> — purchasing small plots of greenfield land in the expectation that planning permission would be granted. This was among the most controversial SIPP investment types and was the subject of FCA and Serious Fraud Office attention.</li>
              <li><strong>Conservation and rewilding land</strong> — later schemes marketed with environmental credentials, including carbon sequestration benefits.</li>
            </ul>

            <h2>Land Banking — A Particularly High-Risk Category</h2>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-6 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA and SFO Warnings on Land Banking</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA and Serious Fraud Office have repeatedly warned about land banking schemes. Many sites were sold in plots that were never granted planning permission — and never realistically could be. Some promoters were prosecuted for fraud. Investors who were advised to place land banking investments in their SIPPs were in many cases victims of mis-selling and, in some cases, fraud.</p>
              </div>
            </div>

            <h2>SIPP Operator Liability</h2>
            <p>As with other unregulated SIPP investments, SIPP operators who accepted forestry, land or land banking investments into SIPPs without adequate due diligence may be liable. Case law — including the Supreme Court decision in <em>Adams v Options</em> — has established that SIPP operators owe duties to members and can be responsible where they accepted clearly unsuitable non-standard assets.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your SIPP invested in forestry, farmland or land banking? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'UCIS SIPP Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
                  { label: 'Green Energy SIPP Claims', href: '/mis-sold-sipp-claims/green-energy-pension-investment/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
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
