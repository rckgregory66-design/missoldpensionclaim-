import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Bad Pension Advice Claims | Negligent Pension Advice Solicitors',
  description: 'If you received negligent or unsuitable pension advice from a financial adviser, you may be able to claim compensation. Find out what bad pension advice looks like.',
  alternates: { canonical: '/bad-pension-advice-claims/' },
}

const faqs = [
  { q: 'What is classed as bad pension advice?', a: 'Bad or unsuitable pension advice is advice that fails to meet the regulatory standards required of financial advisers. This includes advice that did not reflect the client\'s circumstances, failed to explain the risks, did not compare suitable alternatives, or resulted in the client being placed into an unsuitable product or investment.' },
  { q: 'What is a suitability report?', a: 'A suitability report is a document that a financial adviser must provide when making a personal recommendation regarding a pension. It must explain why the recommendation is suitable for you, the risks involved and the costs and charges. An inadequate or misleading suitability report may itself be evidence of mis-selling.' },
  { q: 'Can I claim if my adviser is no longer practising?', a: 'If your adviser or their firm is no longer authorised or has failed, you may be able to apply to the Financial Services Compensation Scheme (FSCS) for compensation. In some cases, claims may also be possible against successor firms or through other legal routes. A solicitor can help you identify your options.' },
  { q: 'What if I signed documents agreeing to the advice?', a: 'The fact that you signed documents does not prevent you from making a claim if the advice was unsuitable. You are entitled to rely on the professional expertise of a regulated adviser. A failure to give suitable advice remains actionable even where the client agreed to proceed at the time.' },
]

export default function BadPensionAdvicePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Bad Pension Advice Claims', item: '/bad-pension-advice-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Bad Pension Advice Claims" description={metadata.description as string} url="/bad-pension-advice-claims/" />
      <ArticleSchema title="Bad Pension Advice Claims" description={metadata.description as string} url="/bad-pension-advice-claims/" />

      <Breadcrumb crumbs={[{ label: 'Bad Pension Advice Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Bad Pension Advice Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'Financial advisers are required by FCA rules to give you advice that is genuinely suitable for your individual circumstances — not just advice that benefits them.',
              'Bad pension advice includes recommending an unsuitable product, failing to explain risks, not comparing alternatives, or having an undisclosed conflict of interest.',
              'The fact that you signed paperwork agreeing to the advice does not prevent you from making a claim.',
              'Claims can be pursued through the FOS (firm still trading), the FSCS (firm failed), or legal proceedings.',
              'An inadequate suitability report is itself evidence that advice standards may not have been met.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you received advice about your pension from a regulated financial adviser and that advice turned out to be negligent, unsuitable or incomplete, you may have grounds for a claim. This page explains what bad pension advice looks like, what duties advisers owe, and how a claim may be pursued.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Bad pension advice is regulated financial advice that failed to meet FCA standards — for example, recommending a product that was not suitable for your circumstances, failing to explain the risks, or failing to compare what you would give up. You can claim regardless of whether you signed paperwork agreeing to the advice at the time.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> Financial advisers are professionals regulated by the FCA. When they recommend a pension transfer or investment, they must put your interests first and ensure the recommendation is genuinely right for you. If they cut corners, ignored your circumstances, or had a financial interest in the outcome, the advice may be classed as unsuitable — and you may be able to claim.</p>
            </div>

            <h2>What Duties Do Financial Advisers Owe?</h2>
            <p>Financial advisers who provide regulated pension advice are subject to rules set by the Financial Conduct Authority (FCA). These rules require advisers to:</p>
            <ul>
              <li>Obtain sufficient information about the client's personal and financial circumstances</li>
              <li>Accurately assess the client's attitude to investment risk and capacity for loss</li>
              <li>Ensure any recommendation is suitable for the individual client</li>
              <li>Explain all significant risks clearly and in a way the client can understand</li>
              <li>Provide a written suitability report setting out the basis of the recommendation</li>
              <li>Disclose all charges, commissions and fees</li>
              <li>Consider whether the client's existing pension arrangements may be more appropriate</li>
              <li>Explain the consequences of any proposed transfer or switch</li>
            </ul>
            <p>A failure to meet these obligations may constitute unsuitable advice and give rise to a potential claim.</p>

            <h2>Common Examples of Bad Pension Advice</h2>
            <p>Bad pension advice can take many forms. Common examples include:</p>

            <h3>Inadequate Suitability Assessment</h3>
            <p>The adviser failed to gather sufficient information about your circumstances before making a recommendation, or the recommendation was not genuinely based on your personal situation.</p>

            <h3>Incorrect Risk Profiling</h3>
            <p>Your attitude to risk was assessed incorrectly, not assessed at all, or the investment recommended was inconsistent with the risk level that was assessed. For example, advising a cautious investor to invest in high-risk assets.</p>

            <h3>Failure to Explain Charges</h3>
            <p>The charges, ongoing fees and product costs involved in the recommended pension were not clearly explained. Charges can significantly erode pension fund value over time and are a material consideration in any recommendation.</p>

            <h3>Failure to Compare Existing Benefits</h3>
            <p>The adviser did not adequately compare the benefits of the existing pension arrangement with the proposed new arrangement, particularly where a transfer from a defined benefit scheme was involved.</p>

            <h3>Failure to Explain Loss of Guarantees</h3>
            <p>You were not clearly told what guaranteed benefits you would be giving up by making a transfer — for example, a guaranteed annuity rate, a final salary income, or death in service benefits.</p>

            <h3>Unsuitable Investment Recommendations</h3>
            <p>Your pension was invested in products that were not appropriate for your circumstances, age, income needs or attitude to risk.</p>

            <h3>Conflicts of Interest</h3>
            <p>The adviser had a financial interest in recommending a particular pension or investment, which was not disclosed or which influenced the advice given.</p>

            <h2>The Role of the Suitability Report</h2>
            <p>A financial adviser making a pension recommendation must provide a written suitability report. This document should explain why the recommendation is suitable for you, the risks involved, and the charges that will apply. If you have a suitability report, it is an important piece of evidence in any mis-selling claim. An inadequate, inaccurate or misleading suitability report may itself indicate that the advice process was flawed.</p>

            <h2>How a Claim May Be Pursued</h2>
            <p>Claims for bad pension advice may be pursued through:</p>
            <ul>
              <li>A complaint to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link> (where the firm is still authorised)</li>
              <li>An application to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Financial Services Compensation Scheme</Link> (where the firm has failed)</li>
              <li>Legal proceedings where other routes are unavailable or insufficient</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Free Claim Review</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about the pension advice you received. A solicitor will assess your case.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
                  { label: 'How Do I Know If I Was Mis-Sold?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
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
