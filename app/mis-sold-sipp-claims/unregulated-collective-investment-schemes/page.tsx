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
  title: 'UCIS Pension Claims | Unregulated Collective Investment Scheme SIPP',
  description: 'Was your SIPP invested in a UCIS? Unregulated collective investment schemes in pensions were almost always mis-sold. Solicitor-led UCIS pension claims — free review.',
  alternates: { canonical: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
}

const faqs = [
  { q: 'What is an unregulated collective investment scheme (UCIS)?', a: 'A UCIS is a collective investment scheme — a fund pooling money from multiple investors — that is not authorised or recognised by the FCA. Unlike regulated funds, UCIS do not have to meet FCA product standards, do not have to appoint an authorised manager, and carry no mandatory FCA protections for investors. Promoting a UCIS to retail investors is heavily restricted under FCA rules precisely because of the risks involved.' },
  { q: 'Can I claim if my SIPP was invested in a UCIS?', a: 'Yes. Placing pension funds into a UCIS was almost always unsuitable for retail investors. If you were advised to transfer into a SIPP and invest in a UCIS — whether a hedge fund, an offshore fund, a property fund, or another structure — you may have grounds for a substantial claim against the adviser and/or the SIPP operator.' },
  { q: 'Was it legal to put a UCIS in a SIPP?', a: 'Holding a UCIS inside a SIPP was not necessarily illegal, but recommending it to most retail investors was. FCA rules restricted the promotion of UCIS to sophisticated or high-net-worth investors only. Advisers who recommended UCIS investments to ordinary retail investors — and SIPP operators who accepted them — breached FCA rules and their duties to clients in most cases.' },
  { q: 'Who can I claim against for a UCIS SIPP loss?', a: 'You may have claims against: the financial adviser who recommended the SIPP and UCIS investment; the SIPP operator who accepted the UCIS into your pension; and, if either has since failed, the FSCS. The involvement of each party and the extent of their liability depends on the facts of your case.' },
  { q: 'What types of UCIS were placed in SIPPs?', a: 'A wide variety of UCIS structures were placed in SIPPs, including: offshore hedge funds; property development funds; film investment schemes; carbon credits funds; biofuel and agricultural funds; fractional property funds; and many others. The common features were: unregulated status, high risk, illiquidity, and high charges.' },
  { q: 'Does the FSCS cover UCIS SIPP losses?', a: 'The FSCS can cover losses arising from bad advice to invest in a UCIS, where the firm that gave the advice was FCA-authorised and has since failed. The FSCS covers eligible claims for bad investment advice up to its compensation limit. Many of the advisory firms involved in UCIS mis-selling have since been closed down or had their authorisation withdrawn.' },
  { q: 'Is there a time limit for a UCIS pension claim?', a: 'Yes. Time limits apply to FOS, FSCS, and legal routes. In many UCIS cases, the investment is structured so that the loss only becomes apparent over time — which may affect when your date of knowledge (the starting point for time limits) begins to run. Seek advice promptly.' },
]

export default function UCISPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'UCIS SIPP Claims', item: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="UCIS Pension Claims — Unregulated Collective Investment Schemes" description={metadata.description as string} url="/mis-sold-sipp-claims/unregulated-collective-investment-schemes/" />
      <ArticleSchema title="UCIS Pension Claims — Unregulated Collective Investment Schemes" description={metadata.description as string} url="/mis-sold-sipp-claims/unregulated-collective-investment-schemes/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'UCIS Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">UCIS Pension Claims — Unregulated Collective Investment Schemes in SIPPs</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A UCIS (unregulated collective investment scheme) is a fund that is not authorised by the FCA and does not carry FCA investor protections.',
              'Recommending a UCIS to a retail investor was almost always a breach of FCA rules — and putting one in a SIPP made the loss potentially catastrophic.',
              'Claims can be brought against the adviser and/or the SIPP operator; FSCS claims may be available if those firms have since failed.',
              'UCIS structures in SIPPs included offshore funds, property funds, carbon credits, biofuel funds, film schemes, and many others.',
              'Time limits apply — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Thousands of people lost their pension savings when they were advised to transfer into SIPPs that were then invested in unregulated collective investment schemes (UCIS). These were funds that fell outside FCA regulation — meaning there was no requirement to meet product standards, no mandatory oversight, and no FCA protection for investors. Advising retail investors to hold UCIS in their pensions was, in most cases, a serious regulatory breach.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your SIPP held a UCIS investment, you almost certainly have grounds for a claim. Recommending a UCIS to a retail investor was a breach of FCA rules in the vast majority of cases. Contact us for a free initial review — FSCS claims may be available if the adviser or SIPP operator has since failed.</p>
            </div>

            <h2>What Made UCIS Unsuitable for Pension Investment</h2>
            <p>The FCA's rules on UCIS reflect the fundamental problem with these investments for retail investors. UCIS were restricted from promotion to retail investors precisely because they:</p>
            <ul>
              <li>Were not subject to FCA product standards or oversight</li>
              <li>Carried no mandatory liquidity or redemption rights</li>
              <li>Were often based in offshore jurisdictions with limited legal recourse</li>
              <li>Frequently involved opaque fee structures and conflicts of interest</li>
              <li>Were illiquid — meaning investors could not easily exit</li>
              <li>Depended entirely on the skill and integrity of the fund manager, with no regulatory backstop</li>
            </ul>
            <p>When placed inside a SIPP — the vehicle holding someone's pension savings — the consequences of these failures were amplified. Pensioners lost years of savings they had no opportunity to rebuild.</p>

            <h2>Common Types of UCIS in SIPPs</h2>
            <p>The variety of UCIS structures placed into SIPPs was wide. Common examples include:</p>
            <ul>
              <li>Offshore hedge funds and absolute return funds</li>
              <li>Property development and fractional property funds</li>
              <li>Carbon credit and emissions trading funds</li>
              <li>Biofuel and agricultural land investment funds</li>
              <li>Film production and EIS-adjacent schemes</li>
              <li>Loan note and bond funds secured on speculative assets</li>
            </ul>
            <p>If your SIPP held any investment you did not fully understand, or that was not a mainstream regulated fund, it may have been a UCIS or similarly unregulated asset.</p>

            <h2>SIPP Operator Liability</h2>
            <p>Alongside claims against the financial adviser, SIPP operators may be liable where they accepted UCIS investments into SIPPs without adequate due diligence. Case law — including the Supreme Court's decision in <em>Adams v Options UK Personal Pensions</em> — has confirmed that SIPP operators owe duties to their clients and can be held responsible where they accepted clearly unsuitable non-standard investments.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your SIPP invested in a UCIS or unregulated fund? Contact us for a free assessment.</p>
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
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
