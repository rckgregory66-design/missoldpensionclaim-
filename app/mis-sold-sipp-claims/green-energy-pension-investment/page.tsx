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
  title: 'Green Energy Pension Investment Claims | SIPP Mis-Selling Solicitors',
  description: 'Was your SIPP invested in green energy, solar panels, biofuel or carbon credits? These were high-risk unregulated assets. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/mis-sold-sipp-claims/green-energy-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in green energy or solar panels?', a: 'Yes. Green energy investments — including solar panel schemes, biofuel plantations, carbon credit funds, and wind energy developments — were marketed to SIPP investors as ethical, income-generating assets. In practice, they were high-risk, illiquid, and unregulated assets that were wholly unsuitable for pension investment in most cases. If you were advised to transfer your pension into a SIPP holding these investments, you may have grounds for a claim.' },
  { q: 'What types of green energy investment were placed in SIPPs?', a: 'Common green energy SIPP investments included: solar panel lease schemes (where you "owned" panels on a farm or rooftop); biofuel plantation investments (jatropha, eucalyptus); carbon credit trading schemes; wind energy participation schemes; and environmental bonds secured on green infrastructure. Many were offshore or based in developing countries.' },
  { q: 'Were carbon credits legal SIPP investments?', a: 'Holding carbon credits in a SIPP was not necessarily illegal, but recommending them to retail investors was almost always unsuitable and, in many cases, involved breaches of FCA rules. Carbon credit investments were largely unregulated, extremely speculative, and targeted at investors who lacked the knowledge and risk tolerance to hold them. Many carbon credit schemes were also fraudulent.' },
  { q: 'Who was responsible for recommending green energy SIPP investments?', a: 'Typically, an FCA-regulated financial adviser recommended the SIPP and the green energy investment. In many cases, the adviser received commission or introductory fees from the investment promoter — a conflict of interest that should have been disclosed. The SIPP operator may also have been responsible if they accepted the unregulated investment without adequate due diligence.' },
  { q: 'What if the green energy company has since closed down?', a: 'Many green energy investment companies that operated SIPP schemes have since failed or been wound up. If the company itself has collapsed, compensation from the investment company may not be possible. However, claims against the financial adviser and/or SIPP operator — and through the FSCS if either has also failed — remain a route to recovery.' },
  { q: 'Can I claim through the FSCS for a green energy SIPP loss?', a: 'If the firm that advised you was FCA-authorised and has since failed, you may be able to claim through the FSCS for the advice loss. The FSCS has paid out significant compensation in relation to unsuitable SIPP investments in unregulated assets. Many advisory firms involved in green energy SIPP schemes have since been closed or had their authorisation withdrawn.' },
  { q: 'Is there a time limit for a green energy SIPP claim?', a: 'Yes. Time limits apply, but the starting point (the date of knowledge) may be later than the date of the original investment — particularly for schemes that have been slow to fail or where the loss only became apparent over time. Seek advice without delay.' },
]

export default function GreenEnergyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Green Energy SIPP Claims', item: '/mis-sold-sipp-claims/green-energy-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Green Energy Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/green-energy-pension-investment/" />
      <ArticleSchema title="Green Energy Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/green-energy-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Green Energy SIPP Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Green Energy SIPP Investment Claims — Solar Panels, Carbon Credits and Biofuel Pensions</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Green energy investments — solar panels, biofuel, carbon credits — were widely placed into SIPPs and were almost always high-risk, illiquid, and unsuitable for pension investors.',
              'These investments were often sold with an ethical or environmental appeal that obscured their fundamental unsuitability.',
              'Claims can be brought against the adviser, the SIPP operator, or both; FSCS claims may be available where those firms have since failed.',
              'Many green energy investment companies have collapsed; compensation focuses on the bad advice, not recovering money from the failed company.',
              'Time limits apply — seek advice without delay.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Green energy investments — solar panel leasing schemes, biofuel plantations, carbon credit funds, and wind energy projects — were sold to pension investors with an appeal that combined environmental virtue with promised returns. In reality, most were high-risk, illiquid assets that were wholly unsuitable for placement in a SIPP. Thousands of investors lost significant pension savings as a result.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your pension was moved into a SIPP and invested in solar panels, carbon credits, biofuel or other green energy assets, you may have a substantial claim. Many of the firms involved have since failed. Contact us for a free initial review — the FSCS may be able to compensate eligible claimants.</p>
            </div>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Ethical Appeal Was Used to Conceal Risk</p>
                <p className="text-sm text-gray-700 leading-relaxed">A common feature of green energy SIPP schemes was the use of environmental or ethical framing to make investments appear safe or responsible. Investors were told they were contributing to renewable energy while generating reliable pension income. The underlying risk — that these were unregulated, illiquid, speculative assets — was routinely understated or concealed.</p>
              </div>
            </div>

            <h2>Common Green Energy SIPP Schemes</h2>
            <p>A wide variety of green and environmental investments were placed into SIPPs. Common examples include:</p>
            <ul>
              <li><strong>Solar panel leasing schemes</strong> — investors purchased solar panels installed on farm or commercial sites, with income from Feed-In Tariff payments. Many failed when the underlying operator company collapsed.</li>
              <li><strong>Biofuel plantation investments</strong> — investments in jatropha, eucalyptus, or other fuel crops in Africa, Asia, or Latin America. Most failed due to operational and market difficulties.</li>
              <li><strong>Carbon credit funds</strong> — investments in voluntary carbon offset credits, many of which became worthless as the market collapsed and fraud was widespread in the sector.</li>
              <li><strong>Environmental bond schemes</strong> — bonds issued by companies claiming to operate green energy projects, often secured on speculative or overvalued assets.</li>
            </ul>

            <h2>Why These Investments Were Unsuitable</h2>
            <p>FCA rules require that investments recommended to retail investors are suitable for their circumstances. Green energy SIPP investments typically failed this test because they were:</p>
            <ul>
              <li>Unregulated — not FCA-authorised products, with no product standards or consumer protections</li>
              <li>Illiquid — impossible to sell, leaving pension funds locked up</li>
              <li>Speculative — dependent on the operational success of small, often overseas companies</li>
              <li>Not transparent — charges and conflicts of interest were often poorly disclosed</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your pension invested in solar, carbon credits or green energy? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'UCIS Pension Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
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
