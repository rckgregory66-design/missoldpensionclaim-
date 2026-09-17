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
  title: 'Mini-Bond & Care Home SIPP Claims | Pension Mis-Selling Solicitors',
  description: 'Was your SIPP invested in mini-bonds, care home bonds or hotel bonds? These were high-risk unregulated investments. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in mini-bonds or care home bonds?', a: 'Yes. Mini-bonds, care home bonds, hotel bonds and similar fixed-income instruments placed into SIPPs were high-risk, illiquid, unregulated investments that were unsuitable for pension savings in the vast majority of cases. If you were advised to transfer your pension into a SIPP and invest in these products, you may have a significant claim against the financial adviser and/or the SIPP operator.' },
  { q: 'What is a mini-bond?', a: 'A mini-bond is a fixed-term, fixed-rate loan made directly to a company — typically offering higher interest rates than bank savings in exchange for higher risk. Unlike bank deposits, mini-bonds are not protected by the FSCS. They are not listed on a regulated exchange and there is typically no secondary market — meaning investors cannot exit before the maturity date. If the issuing company fails, investors may lose all or most of their money.' },
  { q: 'What are care home bonds and hotel bonds?', a: 'Care home bonds and hotel bonds were fixed-return debt instruments issued by care home operators or hotel developers, promising investors an annual income (often 7–12%) over a fixed term. In many cases, these were placed into SIPPs as pension investments. Like mini-bonds, they were unregulated, illiquid, and carried a high risk of total loss if the operator failed.' },
  { q: 'Why were mini-bonds and care home bonds unsuitable as SIPP investments?', a: 'These investments were illiquid — no ready exit before maturity. They were unregulated — not FCA-authorised products, meaning investors had no regulatory protection. They depended entirely on the financial health of the issuing company, which in many cases was a small, highly leveraged operator. Many have since failed entirely. These characteristics made them clearly unsuitable for pension investors, particularly those approaching retirement.' },
  { q: 'Who is responsible for a mini-bond or care home bond SIPP loss?', a: 'Responsibility may lie with the financial adviser who recommended the SIPP and the investment; the SIPP operator who accepted the unregulated asset into the pension without adequate due diligence; and potentially the FSCS if either has since failed and was FCA-authorised. The Supreme Court decision in Adams v Options established that SIPP operators owe duties to members where they accept unsuitable non-standard assets.' },
  { q: 'Can I claim through the FSCS?', a: 'If the firm that gave you the advice or the SIPP operator has since failed and was FCA-authorised, you may be able to claim through the FSCS up to £85,000. Many advisory firms involved in mini-bond and care home bond SIPP mis-selling have since been closed. We can check the status of the relevant firms as part of assessing your case.' },
  { q: 'Is there a time limit for a mini-bond or care home bond SIPP claim?', a: 'Yes. Time limits apply depending on the route. For investments that failed recently, the loss may only have become apparent recently — and the date of knowledge test means the clock may not have started running until you knew or should have known about the loss. Seek advice promptly and do not assume you are out of time.' },
]

export default function MiniBondCareHomePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Mini-Bond & Care Home SIPP Claims', item: '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Mini-Bond & Care Home SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/" />
      <ArticleSchema title="Mini-Bond & Care Home SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Mini-Bond & Care Home Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Mini-Bond and Care Home Bond SIPP Claims</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Mini-bonds, care home bonds and hotel bonds placed into SIPPs were high-risk, illiquid, unregulated instruments — unsuitable for pension investment.',
              'Many promised annual returns of 7–12% but carried the full risk of loss if the issuer failed — which many did.',
              'Claims can be brought against the adviser, the SIPP operator, or both; FSCS claims may be available where those firms have since failed.',
              'The Adams v Options Supreme Court decision confirmed SIPP operators\' duties where they accepted unsuitable non-standard assets.',
              'Time limits apply — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Mini-bonds and care home bonds were marketed to pension investors as high-yield, asset-backed alternatives to mainstream investments. In practice, they were unregulated, illiquid instruments carrying a high risk of total loss — entirely unsuitable for pension savings. Thousands of SIPP investors suffered significant losses when these schemes failed. If your SIPP was invested in these products, you may be able to claim compensation.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your SIPP held mini-bonds, care home bonds or hotel bonds, you may have a claim against the adviser and/or the SIPP operator. FSCS claims may be available if those firms have since failed. Contact us for a free assessment.</p>
            </div>

            <h2>What Made These Investments Unsuitable for SIPPs</h2>
            <p>Mini-bonds, care home bonds and similar fixed-return instruments shared several characteristics that made them clearly unsuitable as pension investments:</p>
            <ul>
              <li><strong>Illiquidity</strong> — no secondary market, no early exit. Investors were locked in for the full term, typically 3–5 years. For pension investors approaching retirement, this was a fundamental problem.</li>
              <li><strong>Unregulated</strong> — not FCA-authorised investments, meaning no regulatory protection if things went wrong.</li>
              <li><strong>Concentration risk</strong> — a single bond investment meant the entire pension fund was dependent on the fortunes of one company.</li>
              <li><strong>Issuer credit risk</strong> — many issuers were small, highly leveraged operators with limited track records and no credit rating.</li>
              <li><strong>No capital protection</strong> — unlike bank deposits, these were not FSCS-protected. A company failure meant total or near-total loss.</li>
            </ul>

            <h2>The FCA's Response to Mini-Bonds</h2>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-6 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Action on Mini-Bonds</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA has taken enforcement action against firms involved in the promotion of mini-bonds to retail investors. It introduced temporary marketing restrictions on mini-bonds in 2020 and has subsequently made restrictions permanent. The FCA's actions confirm its view that these products were generally unsuitable for retail investors — including pension investors.</p>
              </div>
            </div>

            <h2>SIPP Operator Liability</h2>
            <p>As with other unregulated SIPP investments, SIPP operators who accepted mini-bonds and care home bonds into SIPPs without adequate due diligence may bear liability. Case law — including the Supreme Court decision in <em>Adams v Options UK Personal Pensions LLP [2021]</em> — confirmed that SIPP operators owe duties to members and can be responsible where they accepted clearly unsuitable non-standard assets.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your SIPP invested in mini-bonds or care home bonds? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'UCIS SIPP Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
                  { label: 'Hotel Room SIPP Claims', href: '/mis-sold-sipp-claims/hotel-room-pension-investment/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
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
