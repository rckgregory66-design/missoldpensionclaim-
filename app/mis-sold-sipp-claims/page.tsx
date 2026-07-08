import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Mis-Sold SIPP Claims | SIPP Pension Compensation Solicitors',
  description: 'If you were advised to transfer your pension into an unsuitable SIPP or high-risk investment, you may be able to claim compensation. Find out more.',
  alternates: { canonical: '/mis-sold-sipp-claims/' },
}

const faqs = [
  { q: 'What is a SIPP?', a: 'A Self-Invested Personal Pension (SIPP) is a type of personal pension that gives the holder greater flexibility over where their pension money is invested. Unlike standard personal pensions, SIPPs can hold a wider range of investments, including shares, commercial property and alternative assets — some of which carry significant risk.' },
  { q: 'How can a SIPP be mis-sold?', a: 'A SIPP can be mis-sold in a number of ways, including where an adviser recommended a transfer into a SIPP without properly explaining the risks, placed pension funds into unsuitable or high-risk investments within the SIPP, failed to verify that underlying investments were appropriate, or where charges and fees were not clearly disclosed.' },
  { q: 'What is the SIPP operator\'s responsibility?', a: 'SIPP operators have regulatory responsibilities regarding the investments they allow into their schemes. If an operator accepted clearly unsuitable investments, they may also bear some responsibility. The Financial Conduct Authority has issued guidance on SIPP operator due diligence.' },
  { q: 'Can I claim through the FSCS for a SIPP claim?', a: 'If the adviser firm that recommended the SIPP has failed and cannot meet claims against it, you may be able to claim through the Financial Services Compensation Scheme (FSCS). Whether you are eligible depends on several factors including the nature of the advice and the firm\'s regulatory status.' },
  { q: 'What investments are typically considered high risk in a SIPP?', a: 'High-risk investments in SIPPs have included overseas property, storage pod schemes, forestry investments, renewable energy projects, hotel room investments, care home bonds, mini-bonds and various unregulated collective investment schemes. These are considered non-standard assets and carry a significantly higher risk of loss.' },
]

export default function MisSoldSippClaimsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Mis-Sold SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/" />
      <ArticleSchema title="Mis-Sold SIPP Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Mis-Sold SIPP Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'A mis-sold SIPP claim arises when an adviser transferred your pension into a Self-Invested Personal Pension and placed it into unsuitable or high-risk investments without proper explanation.',
              'SIPP mis-selling became one of the largest areas of pension complaints in the UK over the last decade.',
              'If the adviser firm has since failed, the FSCS may be able to compensate you up to the applicable limit.',
              'If the firm is still trading, you should complain to it first and then escalate to the Financial Ombudsman Service.',
              'Time limits apply — seek advice promptly to avoid missing a deadline.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Self-Invested Personal Pension (SIPP) mis-selling became one of the most significant areas of financial mis-selling in recent years. If you were advised to transfer your pension into a SIPP and subsequently lost money or were placed into unsuitable investments, you may have grounds for a claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A mis-sold SIPP claim arises when a financial adviser transferred your pension into a Self-Invested Personal Pension (SIPP) and then invested it in high-risk or unsuitable assets without properly explaining the risks. If the adviser firm has since failed, the FSCS may be able to compensate you. If it is still trading, the Financial Ombudsman Service is typically the first step.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Important:</strong> Whether you have a valid SIPP mis-selling claim depends on your individual circumstances. This page provides general information only. Please contact us for a personal assessment of your case.</p>
            </div>

            <h2>What Is a SIPP?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-4">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> A SIPP is a pension pot where you — or your adviser — choose what to invest in. Unlike a standard workplace pension, a SIPP can hold a wide variety of assets, including shares, property and alternative investments. That flexibility is what makes SIPPs attractive to advisers who want to put pension money into high-risk products.</p>
            </div>
            <p>A Self-Invested Personal Pension (SIPP) is a government-approved pension wrapper that allows a greater range of investment choices than a standard personal pension. While SIPPs can provide legitimate investment flexibility for sophisticated investors, they carry a higher level of complexity and risk than standard pension arrangements.</p>
            <p>SIPPs became widely mis-sold when financial advisers began recommending them to ordinary savers — often retirees or people approaching retirement — as a means of accessing high-return but high-risk investments that turned out to be unsuitable or, in some cases, fraudulent.</p>

            <h2>How Are SIPPs Mis-Sold?</h2>
            <p>SIPP mis-selling typically occurs when:</p>
            <ul>
              <li>An adviser recommends transferring an existing pension into a SIPP without adequate justification</li>
              <li>The SIPP is then used to invest in high-risk, non-standard or unregulated assets</li>
              <li>The risks of those underlying investments are not clearly or honestly explained</li>
              <li>The client's attitude to risk is not properly assessed or is ignored</li>
              <li>The client is not told about the charges involved</li>
              <li>The adviser benefits from commissions or introductions linked to the underlying investment</li>
              <li>The client is led to believe returns are guaranteed or low-risk</li>
            </ul>

            <h2>Unsuitable SIPP Investments</h2>
            <p>A wide range of investments have been recommended within SIPPs that later proved unsuitable or failed entirely. These have included:</p>
            <ul>
              <li>Overseas property developments (particularly in emerging markets)</li>
              <li>Storage pod and container schemes</li>
              <li>Forestry and land investment schemes</li>
              <li>Renewable energy projects and wind farms</li>
              <li>Hotel room investments</li>
              <li>Care home bonds</li>
              <li>Mini-bonds and peer-to-peer lending schemes</li>
              <li>Unregulated Collective Investment Schemes (UCIS)</li>
              <li>Various other speculative or illiquid assets</li>
            </ul>
            <p>These are generally categorised as non-standard assets and are considered unsuitable for most retail investors, particularly those approaching retirement who need to protect their pension fund.</p>

            <h2>The Role of the SIPP Operator</h2>
            <p>In addition to the adviser who recommended the SIPP, the SIPP operator — the company that administers the pension — also has regulatory obligations. The Financial Conduct Authority has issued guidance on the due diligence SIPP operators must conduct before accepting non-standard investments. In some cases, where a SIPP operator failed to carry out adequate checks, they may also bear responsibility for losses.</p>

            <h2>FCA Intervention and Regulatory Context</h2>
            <p>The FCA has taken significant regulatory action on SIPP mis-selling over recent years. Many SIPP operators and advisory firms have faced enforcement action, and the FSCS has paid out substantial amounts in compensation to SIPP victims where adviser firms have failed.</p>

            <h2>Routes for a SIPP Mis-Selling Claim</h2>
            <p>Depending on your circumstances, there may be several routes available:</p>
            <ul>
              <li><strong>Financial Ombudsman Service:</strong> If the adviser firm is still trading and authorised, you may be able to complain to the FOS. <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Learn more</Link>.</li>
              <li><strong>Financial Services Compensation Scheme:</strong> If the adviser firm has failed, the FSCS may be able to compensate you. <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Learn more</Link>.</li>
              <li><strong>Legal Action:</strong> In some cases, where other routes are unavailable or have been exhausted, legal proceedings may be appropriate.</li>
            </ul>

            <h2>Time Limits for SIPP Claims</h2>
            <p>Time limits apply and can vary. For FOS complaints, you typically have six months from the adviser firm's final response. FSCS claims are subject to their own rules. Legal claims may be subject to limitation periods under the Limitation Act. Please seek advice promptly.</p>
            <Link href="/time-limits-mis-sold-pension-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Read about time limits <ArrowRight size={13} />
            </Link>

            <h2 className="mt-8">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">SIPP Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your SIPP and the advice you received. A solicitor will be in touch.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <span className="font-semibold text-amber-800 text-sm">Act Promptly</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">Time limits for SIPP claims vary. We recommend seeking advice as soon as possible to avoid missing any applicable deadlines.</p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
