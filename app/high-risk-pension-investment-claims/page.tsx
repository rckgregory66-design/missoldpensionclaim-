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
  title: 'High-Risk Pension Investment Claims | Unregulated Investment Solicitors',
  description: 'If your pension was invested in high-risk, unregulated or speculative assets, you may be able to claim compensation for unsuitable pension investment advice.',
  alternates: { canonical: '/high-risk-pension-investment-claims/' },
}

const faqs = [
  { q: 'What are high-risk pension investments?', a: 'High-risk pension investments include products that fall outside mainstream regulated investments. They are often illiquid, speculative, and sometimes completely unregulated. Examples include overseas property developments, storage pod schemes, forestry investments, hotel room investments, care home bonds and various mini-bond products. Many of these have proved unsuitable for ordinary pension savers.' },
  { q: 'Are these types of investments illegal?', a: 'Not all high-risk investments are illegal. Some are promoted and offered legally. However, they may be unsuitable for ordinary retail investors, particularly those saving for retirement. In many cases, advisers who recommended these investments failed to properly assess whether they were appropriate for each individual client.' },
  { q: 'Can I claim if the investment company has collapsed?', a: 'If the investment company or the adviser firm has collapsed, you may still have options. If the adviser firm was FCA-authorised and has since failed, the Financial Services Compensation Scheme (FSCS) may be able to compensate you for the bad advice. The FSCS has paid out substantial sums in connection with unsuitable high-risk pension investment advice.' },
  { q: 'What is a UCIS?', a: 'A UCIS (Unregulated Collective Investment Scheme) is an investment scheme that is not authorised by the Financial Conduct Authority. The FCA has significant restrictions on who can be offered UCIS investments. Recommending a UCIS to ordinary retail investors is generally prohibited and may give rise to a compensation claim.' },
]

const investmentTypes = [
  'Overseas property development schemes',
  'Storage pod and container investments',
  'Forestry and timber investments',
  'Renewable energy and solar farm investments',
  'Hotel room and serviced apartment schemes',
  'Care home and nursing home bonds',
  'Mini-bonds and debentures',
  'Peer-to-peer lending via pension wrappers',
  'Unregulated Collective Investment Schemes (UCIS)',
  'Agricultural land investments',
  'Film financing schemes',
  'Alternative energy projects',
]

export default function HighRiskInvestmentPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'High-Risk Pension Investment Claims', item: '/high-risk-pension-investment-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="High-Risk Pension Investment Claims" description={metadata.description as string} url="/high-risk-pension-investment-claims/" />
      <ArticleSchema title="High-Risk Pension Investment Claims" description={metadata.description as string} url="/high-risk-pension-investment-claims/" />

      <Breadcrumb crumbs={[{ label: 'High-Risk Pension Investment Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">High-Risk Pension Investment Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'High-risk pension investment claims arise when a financial adviser placed pension funds into speculative or unregulated assets — such as overseas property, storage pods, care home bonds or mini-bonds.',
              'These products are generally categorised as non-standard assets and are considered unsuitable for ordinary pension savers, particularly those approaching retirement.',
              'Both the adviser who recommended the SIPP and the SIPP operator who accepted the investments may bear responsibility.',
              'If the adviser firm has since collapsed, the FSCS may be able to compensate you. If it is still trading, the FOS is the usual first step.',
              'Time limits apply — if you have only recently discovered losses, do not assume you are out of time before seeking advice.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If your pension was transferred into a SIPP and then invested in high-risk, alternative or unregulated assets, you may have grounds for a compensation claim. Many people were advised to move their pension savings into products that were wholly unsuitable for their circumstances.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A high-risk pension investment claim arises when a financial adviser placed your pension savings into speculative or unregulated assets — such as overseas property, storage pods, care home bonds or mini-bonds — that were wholly unsuitable for an ordinary pension saver. If the adviser firm has since collapsed, the FSCS may be able to compensate you. If it is still trading, the Financial Ombudsman Service is the usual first step.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-6">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> Pension savings are supposed to be invested prudently for your retirement. High-risk and unregulated investments — things like overseas property schemes, forestry or mini-bonds — carry a serious risk of total loss and are not appropriate for most people saving for retirement. Advisers who put ordinary savers into these products often failed their regulatory duty.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 leading-relaxed">Many high-risk pension investments have resulted in significant and sometimes total losses. If your pension was invested in any of the types listed below, it is worth seeking professional advice about whether you may have a claim.</p>
            </div>

            <h2>Types of High-Risk Pension Investments</h2>
            <p>Over the past decade, pension savings have been invested in a wide range of non-standard and high-risk assets, often within SIPPs. Some of the most common types include:</p>
            <div className="grid sm:grid-cols-2 gap-3 not-prose mb-6">
              {investmentTypes.map(item => (
                <div key={item} className="flex items-start gap-2 bg-[#f0f4f8] rounded-lg p-3">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p>This list is not exhaustive. If your pension was invested in an asset that you did not fully understand or that seemed unusual, it is worth seeking advice.</p>

            <h2>Why These Investments Were Often Unsuitable</h2>
            <p>Ordinary pension savers saving for retirement typically need their funds to be invested in a way that balances growth with an appropriate level of risk, reflecting their age, income needs and financial circumstances. High-risk and unregulated investments fail this test for most people because:</p>
            <ul>
              <li>They carry a high risk of partial or total loss of capital</li>
              <li>They are often illiquid — meaning money cannot easily be accessed when needed</li>
              <li>They may be unregulated, meaning there is limited regulatory protection</li>
              <li>Performance is often highly speculative</li>
              <li>Many have been associated with fraud or collapse</li>
              <li>They are often completely unsuitable for cautious or moderate-risk investors</li>
            </ul>

            <h2>Adviser and SIPP Operator Responsibilities</h2>
            <p>Both the financial adviser who recommended the investment and, in some cases, the SIPP operator have regulatory responsibilities:</p>
            <ul>
              <li><strong>Financial adviser:</strong> Must ensure any investment recommendation is suitable for the individual client, explain all risks clearly, and have regard to the client's circumstances and attitude to risk.</li>
              <li><strong>SIPP operator:</strong> Has due diligence obligations regarding non-standard investments. An operator who accepted clearly unsuitable investments may also bear some responsibility for losses.</li>
            </ul>

            <h2>Your Options If You Have Lost Money</h2>
            <p>If your pension has been invested in a high-risk scheme that has failed or significantly lost value:</p>
            <ul>
              <li>If the adviser firm is still authorised, you may be able to complain to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link></li>
              <li>If the adviser firm has failed, you may be able to apply to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Financial Services Compensation Scheme</Link></li>
              <li>Where other routes are unavailable, legal action against surviving parties may be an option</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">High-Risk Investment Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about the investments your pension was placed into. We can assess your options.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
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
