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
  title: 'FSCS Pension Compensation Limit | How Much Can You Claim?',
  description: 'The FSCS compensation limit for pension mis-selling claims is £85,000 per person per firm. Find out how the limit applies, what happens if your loss exceeds it, and what your options are.',
  alternates: { canonical: '/fscs-pension-compensation-limit/' },
}

const faqs = [
  {
    q: 'What is the current FSCS compensation limit for pension advice claims?',
    a: 'The current FSCS compensation limit for protected investment business — which covers regulated pension advice — is £85,000 per person per failed firm. This limit applies to claims arising from poor financial advice, including unsuitable pension transfers and SIPP recommendations. The limit is set by the FCA and is reviewed periodically, so we recommend checking fscs.org.uk for the most up-to-date figure.',
  },
  {
    q: 'Does the £85,000 limit apply per claim or per firm?',
    a: 'The FSCS limit applies per eligible person per failed firm. If you received bad advice from two separate adviser firms that have both failed, you may be able to claim up to £85,000 from each firm, giving a potential total of £170,000. However, each claim is assessed on its own merits and the limit caps the compensation paid, not the loss assessed.',
  },
  {
    q: 'What happens if my pension loss exceeds the FSCS limit?',
    a: 'If your loss exceeds the FSCS limit, the FSCS will only pay up to the applicable cap. For losses above that level you may need to explore other routes — for example, pursuing other parties in the advice chain who may be jointly responsible, or taking legal action. A solicitor can help you assess whether other avenues are open to you.',
  },
  {
    q: 'Can I claim from the FSCS if my adviser firm is still trading?',
    a: 'No. The FSCS only pays compensation where the firm that gave the advice has failed and is unable to meet claims against it. If the firm is still trading, you should complain directly to the firm first and then to the Financial Ombudsman Service (FOS), which has higher compensation limits for pension advice claims.',
  },
  {
    q: 'Do I need a solicitor to make an FSCS claim?',
    a: 'No. You can apply to the FSCS directly and for free at fscs.org.uk. You do not need a solicitor or claims management company. However, if your case is complex, your loss is significant, or a previous claim has been rejected, professional support can be worthwhile. A solicitor can help you identify all the parties you may be able to claim against and present your case effectively.',
  },
  {
    q: 'Is the FSCS limit the same as the Financial Ombudsman Service limit?',
    a: 'No. The FSCS and FOS operate different compensation limits. The FOS limit for complaints about events on or after 1 April 2019 is £415,000, which is significantly higher than the FSCS limit. The FOS applies where the adviser firm is still trading; the FSCS applies where the firm has failed. The two schemes are independent of each other.',
  },
]

export default function FSCSCompensationLimitPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'FSCS Pension Compensation Limit', item: '/fscs-pension-compensation-limit/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="FSCS Pension Compensation Limit" description={metadata.description as string} url="/fscs-pension-compensation-limit/" />
      <ArticleSchema title="FSCS Pension Compensation Limit" description={metadata.description as string} url="/fscs-pension-compensation-limit/" />

      <Breadcrumb crumbs={[{ label: 'FSCS Compensation Limit' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">FSCS Pension Compensation Limit: How Much Can You Claim?</h1>
            <AuthorBox publishedDate="August 2025" reviewedDate="August 2025" />
            <TLDRBox points={[
              'The FSCS compensation limit for pension mis-selling claims is £85,000 per person per failed firm.',
              'The limit applies to claims for regulated investment advice — including pension transfer and SIPP advice.',
              'If two separate firms both failed and both gave you bad advice, you may be able to claim up to £85,000 from each.',
              'If your loss exceeds the limit, a solicitor can help you explore whether other parties in the advice chain are also liable.',
              'The Financial Ombudsman Service has a higher limit (£415,000) but only applies where the adviser firm is still trading.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If your pension was mis-sold by a firm that has since failed, the Financial Services Compensation Scheme (FSCS) may be able to compensate you. But the FSCS applies a cap on how much it will pay. This page explains the current FSCS pension compensation limit, how it works in practice, and what your options are if your loss exceeds it.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The current FSCS limit for pension mis-selling claims is <strong className="text-white">£85,000 per person per failed firm</strong>. If your loss is higher, or if multiple firms were involved, there may be other routes to pursue the full amount. A solicitor can advise on your specific situation.</p>
            </div>

            <h2>What Is the FSCS Compensation Limit for Pension Claims?</h2>
            <p>The FSCS compensation limit for <strong>protected investment business</strong> — the category that covers regulated pension advice — is currently <strong>£85,000 per eligible person per failed firm</strong>. This means that if you suffered a pension loss due to bad advice from a firm that has since failed, the FSCS will pay up to £85,000 to compensate you.</p>
            <p>The limit is set and periodically reviewed by the Financial Conduct Authority (FCA). We recommend checking the <a href="https://www.fscs.org.uk/check-if-you-qualify/limits/" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">FSCS website</a> for the current figure, as it may change. For context, the limit was increased from £50,000 to £85,000 for claims relating to advice given from 1 April 2019.</p>

            <div className="not-prose overflow-x-auto mb-8 mt-2">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold">Scheme</th>
                    <th className="text-left p-3 font-semibold">Current Limit</th>
                    <th className="text-left p-3 font-semibold">Applies When</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['FSCS', '£85,000 per person per firm', 'Adviser firm has failed / insolvent'],
                    ['Financial Ombudsman (FOS)', '£415,000 (post-Apr 2019)', 'Adviser firm is still trading'],
                    ['Court / Legal action', 'No cap — full loss recoverable', 'Any situation — via litigation'],
                  ].map(([scheme, limit, when], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{scheme}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{limit}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How Does the Limit Apply in Practice?</h2>
            <p>The £85,000 cap applies to the <strong>compensation paid</strong>, not to the loss assessed. So if the FSCS assesses your pension loss at £120,000, it will only pay £85,000. The remaining £35,000 would not be covered under the FSCS unless other avenues exist.</p>
            <p>The limit is applied <strong>per firm</strong>. If you received bad <Link href="/bad-pension-advice-claims/" className="text-[#1e3a5f] underline">pension advice</Link> from two separate FCA-authorised firms — for example, an IFA and a SIPP operator — and both have failed, you may be able to make separate claims against each, potentially recovering up to £85,000 from each.</p>

            <h2>What If My Loss Exceeds the FSCS Limit?</h2>
            <p>If your pension loss is greater than the FSCS compensation limit, you have several options to consider:</p>
            <ul>
              <li><strong>Claim against other parties in the advice chain:</strong> In many cases, more than one firm may share responsibility — for example, an introducer, an IFA, and a SIPP operator. If any of those firms are still trading, you may be able to pursue them through the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link>.</li>
              <li><strong>Legal action:</strong> Court proceedings are not subject to the FSCS cap. If another party caused or contributed to your loss and is solvent, legal action may allow you to recover the full amount.</li>
              <li><strong>SIPP operator liability:</strong> In some cases, the SIPP operator may itself be liable for failing in its due diligence obligations. This is an active area of law following FCA guidance and Financial Ombudsman decisions.</li>
            </ul>
            <p>If your loss is substantial, we recommend seeking advice on all available routes before accepting the FSCS payment as your only recourse. <Link href="/contact/" className="text-[#1e3a5f] underline">Contact us</Link> to discuss your situation.</p>

            <h2>FSCS vs Financial Ombudsman: Which Limit Is Higher?</h2>
            <p>The <Link href="/compare/fos-vs-fscs/" className="text-[#1e3a5f] underline">Financial Ombudsman Service (FOS)</Link> has a significantly higher limit than the FSCS. For complaints about events on or after 1 April 2019, the FOS limit is £415,000. However, the FOS only applies where the adviser firm is still trading and able to pay. The two schemes are not alternatives you can choose between freely — the applicable scheme depends on whether the firm has failed.</p>

            <h2>How to Make an FSCS Pension Claim</h2>
            <ol>
              <li><strong>Check the firm has failed:</strong> Confirm through the FCA register or the FSCS website that the adviser firm is no longer authorised or has entered default.</li>
              <li><strong>Assess your loss:</strong> Work out the difference between what your pension is worth now and what it would have been worth had you not transferred — or what guaranteed benefits you gave up.</li>
              <li><strong>Apply to the FSCS:</strong> You can apply directly at <a href="https://www.fscs.org.uk" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">fscs.org.uk</a> at no cost, or seek professional assistance if your case is complex.</li>
              <li><strong>Consider other parties:</strong> Identify all the firms involved and whether any remain solvent. A solicitor can advise on whether parallel claims are available.</li>
            </ol>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Free Claim Assessment</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your pension and the firm that gave you advice. We can help assess whether the FSCS limit applies and whether there are other routes to pursue.</p>
              <ContactForm compact />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} />Apply Directly for Free</h3>
              <p className="text-green-700 text-xs leading-relaxed">You can apply to the FSCS directly at <strong>fscs.org.uk</strong> without using a solicitor. We recommend reviewing all your options, including whether other parties may also be liable.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS vs FSCS Comparison', href: '/compare/fos-vs-fscs/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
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
