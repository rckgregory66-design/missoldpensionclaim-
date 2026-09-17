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
  title: 'Storage Pod Pension Investment Claims | SIPP Mis-Selling Solicitors',
  description: 'Were you advised to invest your SIPP in storage pods? This was a high-risk unregulated investment. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/mis-sold-sipp-claims/storage-pod-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in storage pods?', a: 'Yes. Storage pod investments were high-risk, illiquid, unregulated assets that were wholly unsuitable for the vast majority of SIPP investors. If you were advised to transfer into a SIPP and invest in storage pods — or if a SIPP provider accepted your funds and placed them into storage pod assets without adequate assessment — you may have grounds for a significant claim.' },
  { q: 'Who is responsible for a storage pod SIPP claim?', a: 'Potentially multiple parties: the financial adviser who recommended the SIPP transfer; the SIPP operator who accepted and held the non-standard investment; and, depending on the structure, the storage pod promoter. We assess each case to identify which parties had obligations to you and where those obligations were breached.' },
  { q: 'Are storage pod companies still trading?', a: 'Many of the storage pod investment companies that were used as SIPP assets have since failed or are no longer trading. This means recovery from the company itself may not be possible. However, claims against the SIPP operator and the financial adviser — and potentially the FSCS if those firms have also failed — may still be available.' },
  { q: 'What compensation can I claim for a storage pod SIPP loss?', a: 'Compensation is aimed at putting you back in the position you would have been in had the unsuitable advice not been given — typically the difference between the value of your SIPP as it now stands (having been invested in storage pods) and the value it would have had under a suitable investment. No specific figure can be given without reviewing the facts of your individual case.' },
  { q: 'What if the SIPP operator has also failed?', a: 'If the SIPP operator has failed and was FCA-authorised, you may be able to claim through the Financial Services Compensation Scheme (FSCS). The FSCS has paid out significant sums in relation to unsuitable SIPP investments in unregulated assets, including storage pods. See our guide to FSCS pension claims.' },
  { q: 'Is there a time limit for a storage pod SIPP claim?', a: 'Yes. Time limits apply to all routes — FOS, FSCS, and legal proceedings. The date from which time runs may be the date you first knew or should have known about the loss, which in some cases is later than the date of the original investment. Do not assume you are out of time without seeking specific legal advice.' },
]

export default function StoragePodPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Storage Pod SIPP Claims', item: '/mis-sold-sipp-claims/storage-pod-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Storage Pod Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/storage-pod-pension-investment/" />
      <ArticleSchema title="Storage Pod Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/storage-pod-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Storage Pod Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Storage Pod Pension Investment Claims — SIPP Mis-Selling</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Storage pod investments were high-risk, illiquid, unregulated assets placed into SIPPs — unsuitable for the vast majority of investors.',
              'Claims can be brought against the financial adviser who recommended the SIPP transfer, the SIPP operator who accepted the investment, or both.',
              'Many storage pod companies have failed — but claims against advisers and SIPP operators (and the FSCS if they have also failed) may still be viable.',
              'Compensation aims to restore your SIPP to the value it would have had under a suitable investment.',
              'Contact us for a free initial review — time limits may apply.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Storage pods were marketed to pension investors in the 2000s and 2010s as supposedly stable, income-generating assets that could be held inside a Self-Invested Personal Pension (SIPP). In reality, they were high-risk, illiquid, unregulated investments — and the advice to transfer pensions into SIPPs to hold them was, in most cases, wholly unsuitable.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your pension was moved into a SIPP and invested in storage pods, you may have a claim against the financial adviser and/or the SIPP operator. Many of the firms involved have since failed, but FSCS claims may still be available. Contact us for a free assessment.</p>
            </div>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA and FOS Position</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA and FOS have consistently held that placing pension funds into unregulated, illiquid, high-risk assets like storage pods through a SIPP was unsuitable for most retail investors. SIPP operators who accepted such investments without adequate due diligence have also been found liable. These cases have a well-established track record at the FOS and FSCS.</p>
              </div>
            </div>

            <h2>Why Storage Pod SIPP Investments Were Unsuitable</h2>
            <p>Storage pod schemes typically involved purchasing a unit in a storage facility, which was supposed to generate rental income. They were packaged as SIPP-eligible assets. In practice, they had characteristics that made them wholly unsuitable for pension investment:</p>
            <div className="not-prose space-y-2 mb-6">
              {[
                { label: 'Unregulated', desc: 'Storage pod investments were not regulated financial products. Investors had no FCA protection over the underlying asset.' },
                { label: 'Illiquid', desc: 'There was no ready market to sell storage pod investments. Investors who needed to access their pension found it impossible to liquidate the asset.' },
                { label: 'High risk', desc: 'Returns depended on the operational success of the storage facility and the promoter company. When these failed, the investment became worthless.' },
                { label: 'Opaque charging', desc: 'Storage pod schemes often involved multiple layers of fees — to the promoter, the SIPP operator, and the adviser — eroding any return.' },
              ].map(item => (
                <div key={item.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{item.label}</p><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>

            <h2>Who You Can Claim Against</h2>
            <p>Storage pod SIPP claims typically involve one or more of the following:</p>
            <ul>
              <li><strong>The financial adviser</strong> — who recommended you transfer your existing pension into a SIPP and invest in storage pods. If the advice was unsuitable given your circumstances, the adviser may be liable.</li>
              <li><strong>The SIPP operator</strong> — who accepted the unregulated storage pod investment into your pension. FOS decisions and court cases have found SIPP operators liable where they failed to conduct adequate due diligence on non-standard assets and accepted investments that were clearly unsuitable for their clients.</li>
              <li><strong>The FSCS</strong> — if either the adviser or the SIPP operator has failed and was FCA-authorised, the FSCS may be able to compensate eligible claimants.</li>
            </ul>

            <h2>How Compensation Is Calculated</h2>
            <p>Compensation for storage pod SIPP claims typically seeks to restore your pension to the position it would have been in had the unsuitable advice not been given. This is calculated by comparing:</p>
            <ul>
              <li>The current value of your SIPP, having been invested in storage pods (which may be zero or near-zero if the scheme has failed), against</li>
              <li>The value your pension would have been worth had it remained in, or been moved into, a suitable investment.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Did your SIPP hold storage pod investments? Contact us for a free initial review of your case.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
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
