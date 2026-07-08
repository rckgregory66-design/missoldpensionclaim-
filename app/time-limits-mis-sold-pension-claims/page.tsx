import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Time Limits For Mis-Sold Pension Claims | Act Before It Is Too Late',
  description: 'Time limits apply to mis-sold pension claims. Find out about FOS complaint deadlines, FSCS timescales and legal limitation periods. Seek advice promptly.',
  alternates: { canonical: '/time-limits-mis-sold-pension-claims/' },
}

const faqs = [
  { q: 'Is there a time limit for making a mis-sold pension claim?', a: 'Yes. Time limits apply and they vary depending on the route available to you. For Financial Ombudsman complaints, you generally have six months from the firm\'s final response letter. FSCS claims are subject to their own rules. Legal claims may be subject to limitation periods under the Limitation Act 1980. It is important to seek advice as soon as possible.' },
  { q: 'What is the date of knowledge for pension claims?', a: 'The "date of knowledge" refers to the date when you knew — or should reasonably have known — that you had suffered a loss or had cause to complain. For some pension claims, the date of knowledge may be later than the date the advice was given, particularly where losses only became apparent some time after the advice. This is a complex legal area and should be assessed individually.' },
  { q: 'What if the time limit has passed?', a: 'If you believe a time limit may have passed, please contact us before assuming you cannot claim. Time limits are complex and there are exceptions. In some cases, the clock starts running later than people expect. Do not simply assume a claim is time-barred without seeking advice.' },
  { q: 'Can I extend the time limit?', a: 'Time limits are strict in most cases, but there are some exceptions. For example, where fraud is involved, limitation periods may be extended. The FOS also has discretion to consider complaints outside its standard time limits in exceptional circumstances. These situations are assessed on a case-by-case basis.' },
]

export default function TimeLimitsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Time Limits For Mis-Sold Pension Claims', item: '/time-limits-mis-sold-pension-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Time Limits For Mis-Sold Pension Claims" description={metadata.description as string} url="/time-limits-mis-sold-pension-claims/" />
      <ArticleSchema title="Time Limits For Mis-Sold Pension Claims" description={metadata.description as string} url="/time-limits-mis-sold-pension-claims/" />

      <Breadcrumb crumbs={[{ label: 'Time Limits' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Time Limits For Mis-Sold Pension Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'For FOS complaints, you generally have six months from the firm\'s final response letter to refer to the Financial Ombudsman.',
              'For legal claims, the usual limitation period is six years from the loss — or three years from when you first knew about it.',
              'For FSCS applications, the FSCS applies its own rules — check the FSCS website for current guidance.',
              'Critically, the clock for older cases may start later than you think: from when you discovered the problem, not when the advice was given.',
              'Do not assume you are out of time without seeking advice — there are exceptions and the starting point varies by route.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Time limits are one of the most important practical considerations in any mis-sold pension claim. Missing a deadline can prevent you from pursuing compensation even if you have a strong case. This page explains the main time limits that may apply, depending on the route available to you.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For <a href="/financial-ombudsman-pension-complaints/" className="text-[#c9a84c] underline">FOS complaints</a>, you generally have six months from the firm's final response letter. For legal claims, the usual period is six years from the loss, or three years from when you knew about it. FSCS has its own rules. Critically, the clock for older cases may start later than you think — do not assume you are out of time without seeking advice first.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-6">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> Every route for claiming has a deadline. Miss it and you may lose the right to claim regardless of how strong your case is. The deadlines are different for FOS complaints, FSCS applications and legal proceedings — and for older cases, the clock may start from when you discovered the problem, not when the original advice was given.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Act Promptly</p>
                <p className="text-sm text-red-700 leading-relaxed">We strongly recommend seeking advice as soon as possible. Delaying may result in losing the right to claim. If you are unsure whether a time limit has passed, contact us for a free assessment before assuming it is too late.</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-sm text-gray-700"><strong>Important disclaimer:</strong> Time limit rules are complex and depend on the specific facts of each case. This page provides general guidance only. Please seek legal advice for a personal assessment of your situation. Do not rely on this page alone to determine whether you can still claim.</p>
            </div>

            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold">Route</th>
                    <th className="text-left p-3 font-semibold">Key Time Limit</th>
                    <th className="text-left p-3 font-semibold">When Clock Starts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Financial Ombudsman (FOS)', '6 months from final response letter', 'Date of firm\'s final response (or 8 weeks after complaining)'],
                    ['FOS — secondary rule', '6 years or 3 years from knowledge', 'Date of advice or date you knew of problem — whichever is later'],
                    ['FSCS', 'FSCS own rules (varies)', 'Date firm failed / date of knowledge'],
                    ['Legal claim (negligence)', '6 years from loss; 3 years from knowledge', 'Date loss suffered or date of knowledge (s.14A Limitation Act)'],
                    ['Absolute legal longstop', '15 years maximum', 'Date of the negligent act, regardless of knowledge'],
                  ].map(([route, limit, start], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{route}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{limit}</td>
                      <td className="p-3 text-gray-500 text-xs border-t border-gray-100">{start}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">General guidance only — specific facts of your case may affect these periods. Seek advice promptly.</p>
            </div>

            <h2>Financial Ombudsman Service — Time Limits</h2>
            <p>If you plan to complain to the Financial Ombudsman Service about unsuitable pension advice:</p>
            <ul>
              <li>You must first complain to the firm itself and allow it up to eight weeks to respond</li>
              <li>Once you receive a final response letter from the firm, you generally have <strong>six months</strong> to refer the complaint to the FOS</li>
              <li>The FOS also applies rules relating to when the original event occurred and when you knew (or should have known) about the problem</li>
              <li>Generally, complaints must be made within <strong>six years</strong> of the relevant event, or <strong>three years</strong> from when you knew or reasonably should have known you had cause to complain — whichever is later</li>
            </ul>
            <p>If you have already received a final response letter but have not yet referred the matter to the FOS, please check whether the six-month deadline has been exceeded and seek advice promptly.</p>

            <h2>Financial Services Compensation Scheme — Time Limits</h2>
            <p>FSCS claims are also subject to time limits, though these differ from FOS rules. The FSCS operates its own assessment of whether claims are made within an appropriate timeframe. These rules can be complex and depend on when the firm failed and when the loss became apparent.</p>
            <p>Do not assume that because a firm failed some time ago you cannot still make an FSCS claim — please seek advice to confirm your position.</p>

            <h2>Legal Claims — Limitation Periods</h2>
            <p>Legal claims for professional negligence relating to financial advice are subject to the Limitation Act 1980. In general:</p>
            <ul>
              <li>A claim for negligence must usually be brought within <strong>six years</strong> from the date the loss was suffered</li>
              <li>Where the loss was not discovered immediately, the three-year "date of knowledge" limitation period under section 14A of the Limitation Act may apply</li>
              <li>Claims must be brought within an absolute longstop period of <strong>fifteen years</strong> from the negligent act, regardless of when the loss was discovered</li>
            </ul>
            <p>These limitation periods are subject to important exceptions and their application depends on the specific facts of each case.</p>

            <h2>The Date of Knowledge</h2>
            <p>For pension mis-selling claims, the date you knew — or should reasonably have known — that you had suffered a loss is often important. Many people did not realise their pension had been mis-sold until pension statements showed significant losses, or until they sought advice about their retirement planning. In some cases, this means the clock for time limit purposes starts running later than the date of the original advice.</p>
            <p>The date of knowledge is a complex legal question and should be assessed by a solicitor in your individual case.</p>

            <h2>Practical Guidance</h2>
            <p>Given the complexity of time limit rules, we recommend:</p>
            <ul>
              <li>Seeking advice as soon as possible if you are concerned about a mis-sold pension</li>
              <li>Not waiting to gather all of your documents before making an initial enquiry — you can provide documents later</li>
              <li>Contacting us even if you think a time limit may have passed — there may still be options available</li>
              <li>Not assuming that because some time has passed since the advice was given, you cannot claim</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><Clock size={18} className="text-[#c9a84c]" /> Act Promptly</h3>
              <p className="text-gray-300 text-sm mb-5">Time limits can affect your ability to claim. Contact us today for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Claim Process', href: '/pension-claim-process/' },
                  { label: 'FAQs', href: '/faqs/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA title="Time Limits May Apply — Act Now" body="Contact us today for a free, no-obligation initial assessment. Do not risk losing the right to claim by delaying." /></div>
      </div>
    </>
  )
}
