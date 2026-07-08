import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'FSCS Pension Claims | Financial Services Compensation Scheme Solicitors',
  description: 'If your pension adviser or SIPP operator has failed, the FSCS may be able to compensate you. Find out how FSCS pension claims work and how we can help.',
  alternates: { canonical: '/fscs-pension-claims/' },
}

const faqs = [
  { q: 'What is the Financial Services Compensation Scheme?', a: 'The Financial Services Compensation Scheme (FSCS) is the UK\'s statutory compensation fund of last resort for customers of authorised financial services firms. It was established under the Financial Services and Markets Act 2000. If an authorised firm is unable to meet claims against it — for example because it has failed or become insolvent — the FSCS may be able to pay compensation to eligible claimants.' },
  { q: 'How do I know if the FSCS applies to my pension claim?', a: 'The FSCS may apply where an FCA-authorised firm gave you bad pension advice and has since failed and cannot pay claims against it. The FSCS covers claims relating to regulated financial advice, including pension transfer advice and SIPP recommendations. If the adviser firm is still trading, you should first complain to the firm and then to the Financial Ombudsman Service.' },
  { q: 'How much can the FSCS pay?', a: 'The FSCS applies compensation limits which are set by the FCA and can change over time. Current limits are published on the FSCS website (fscs.org.uk). We recommend checking the FSCS website directly for the most up-to-date figures, as they can be revised.' },
  { q: 'Can I make an FSCS claim myself?', a: 'Yes. You can apply to the FSCS directly at no cost. You do not need to use a solicitor or claims management company to apply to the FSCS. However, if your case is complex, if your claim has been rejected, or if multiple parties are involved, professional support may be helpful.' },
  { q: 'How long does an FSCS pension claim take?', a: 'Processing times vary depending on the nature and complexity of the claim, and the volume of claims the FSCS is handling at the time. The FSCS aims to deal with straightforward claims as quickly as possible but complex claims may take considerably longer. The FSCS will keep you informed of progress.' },
]

export default function FSCSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'FSCS Pension Claims', item: '/fscs-pension-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="FSCS Pension Claims" description={metadata.description as string} url="/fscs-pension-claims/" />
      <ArticleSchema title="FSCS Pension Claims" description={metadata.description as string} url="/fscs-pension-claims/" />

      <Breadcrumb crumbs={[{ label: 'FSCS Pension Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">FSCS Pension Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'The FSCS is the UK\'s compensation fund for customers of FCA-authorised firms that have since failed and cannot pay claims against them.',
              'If your pension adviser firm is still trading, you should use the Financial Ombudsman Service — not the FSCS.',
              'The FSCS applies compensation limits set by the FCA. Check the FSCS website (fscs.org.uk) for current figures.',
              'You can apply to the FSCS directly for free — you do not need a solicitor, though professional help can be useful for complex or rejected claims.',
              'Both the adviser and, in some cases, the SIPP operator may be claimable against through the FSCS.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If the financial adviser or firm that gave you pension advice has failed and is unable to meet claims against it, you may be able to seek compensation through the Financial Services Compensation Scheme (FSCS). This page explains what the FSCS is, when it may apply to pension claims, and how the process works.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The FSCS compensates people who received bad pension advice from a firm that has since failed and can no longer pay. If your adviser firm is still trading, you should use the Financial Ombudsman Service instead. Both routes are free and do not require a solicitor, though professional help can be useful for complex or high-value cases.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> The FSCS is a safety net for customers whose FCA-authorised firm has collapsed. If you received bad pension advice from a firm that has since failed, the FSCS may be able to compensate you even though the firm can no longer pay.</p>
            </div>

            <h2>What Is the FSCS?</h2>
            <p>The Financial Services Compensation Scheme (FSCS) is an independent body established to provide compensation to customers who have suffered losses as a result of failed or insolvent FCA-authorised firms. It is funded by a levy on authorised financial services firms. The FSCS is separate from both the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link> and the courts.</p>
            <p>The FSCS covers a range of financial services sectors, including regulated financial advice, investment products, banking and insurance. For pension claims, the FSCS is most commonly relevant where the adviser or firm that gave <Link href="/bad-pension-advice-claims/" className="text-[#1e3a5f] underline">bad pension advice</Link> has since failed and is unable to pay compensation. This is particularly common in <Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">SIPP mis-selling cases</Link> and <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit transfer cases</Link> where adviser firms have since been wound up.</p>

            <div className="not-prose overflow-x-auto mb-8 mt-2">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold"></th>
                    <th className="text-left p-3 font-semibold">FSCS</th>
                    <th className="text-left p-3 font-semibold">Financial Ombudsman (FOS)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Use when', 'Adviser firm has failed / insolvent', 'Adviser firm is still trading'],
                    ['Cost', 'Free — apply directly', 'Free — apply directly'],
                    ['Decision', 'FSCS pays compensation directly', 'FOS directs firm to pay'],
                    ['Compensation limit', 'Set limit per eligible person/firm', 'Higher limits — check FOS website'],
                    ['Solicitor needed?', 'No — but can help with complex cases', 'No — but can help with complex cases'],
                    ['Can reject a decision?', 'Yes — refer to FOS in some cases', 'Yes — retain right to legal action'],
                  ].map(([feature, fscs, fos], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{feature}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{fscs}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{fos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When Might the FSCS Apply to a Pension Claim?</h2>
            <p>The FSCS may be able to help where:</p>
            <ul>
              <li>You received regulated pension advice from an FCA-authorised firm</li>
              <li>That advice was unsuitable or negligent</li>
              <li>The firm has since failed, become insolvent, or is otherwise unable to meet claims</li>
              <li>You suffered a financial loss or gave up valuable benefits as a result of the advice</li>
            </ul>
            <p>The FSCS may also be relevant in some SIPP cases where the SIPP operator itself has failed, depending on the circumstances.</p>

            <h2>Can You Apply to the FSCS Directly?</h2>
            <p>Yes. You can apply to the FSCS directly and without charge via the <a href="https://www.fscs.org.uk" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">FSCS website at fscs.org.uk</a>. You do not need to use a solicitor or claims management company to make an FSCS claim. Both options are available to you, and it is your choice which route to take.</p>
            <p>If you choose to use professional support, any fees or charges will be explained clearly before you agree to proceed.</p>

            <h2>Compensation Limits</h2>
            <p>The FSCS pays compensation up to set limits per eligible person, per firm. These limits are established by the FCA and are subject to change. We do not reproduce specific figures here because they may be updated. Please visit the <a href="https://www.fscs.org.uk/check-if-you-qualify/" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">FSCS website</a> for the most current information on applicable limits for pension advice claims.</p>

            <h2>How the FSCS Process Works</h2>
            <ol>
              <li><strong>Check eligibility:</strong> Confirm that your adviser or firm was FCA-authorised and has since failed.</li>
              <li><strong>Gather documents:</strong> Collect any paperwork relating to the advice and pension transfer.</li>
              <li><strong>Submit a claim:</strong> Apply to the FSCS directly online, or seek professional assistance.</li>
              <li><strong>FSCS assessment:</strong> The FSCS will investigate the claim and assess whether the advice was unsuitable and what loss has resulted.</li>
              <li><strong>Compensation decision:</strong> The FSCS will issue a decision and, if the claim succeeds, arrange payment of compensation up to the applicable limit.</li>
            </ol>

            <h2>How a Solicitor Can Help With FSCS Claims</h2>
            <p>While you can apply to the FSCS directly, solicitor support may be helpful where:</p>
            <ul>
              <li>Your case is complex, involving multiple parties or large sums</li>
              <li>Your FSCS claim has been rejected and you wish to appeal</li>
              <li>You need help gathering and presenting evidence</li>
              <li>The FSCS limit does not cover your full loss and you wish to explore other routes</li>
              <li>Multiple firms were involved in the advice chain</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">FSCS Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your pension and the adviser firm involved. We can help assess your options.</p>
              <ContactForm compact />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} />Direct FSCS Route</h3>
              <p className="text-green-700 text-xs leading-relaxed">You can apply to the FSCS directly at no cost via <strong>fscs.org.uk</strong>. You are not required to use a solicitor. We recommend reviewing both options before deciding how to proceed.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'Claim Process', href: '/pension-claim-process/' },
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
