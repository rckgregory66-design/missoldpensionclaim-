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
  title: 'Financial Ombudsman Pension Complaints | FOS Pension Mis-Selling Guide',
  description: 'Find out how the Financial Ombudsman Service handles pension mis-selling complaints, time limits that apply and how a solicitor can assist with your FOS complaint.',
  alternates: { canonical: '/financial-ombudsman-pension-complaints/' },
}

const faqs = [
  { q: 'What is the Financial Ombudsman Service?', a: 'The Financial Ombudsman Service (FOS) is an independent, free-to-use dispute resolution service for complaints about financial services firms authorised by the Financial Conduct Authority (FCA). It was established under the Financial Services and Markets Act 2000 and considers complaints from consumers and small businesses about FCA-authorised firms.' },
  { q: 'Can I complain to the FOS about mis-sold pension advice?', a: 'Yes. If you received pension advice from an FCA-authorised firm and you believe that advice was unsuitable, you can complain to the FOS after first complaining to the firm itself. The FOS will investigate the complaint and issue a binding decision if it upholds it.' },
  { q: 'What are the time limits for a FOS pension complaint?', a: 'You generally have six months from the date of the firm\'s final response letter to refer the complaint to the FOS. The FOS also applies a rule that complaints must usually be made within six years of the event complained about, or three years from when you knew (or should reasonably have known) that you had cause to complain. Different rules may apply in some circumstances.' },
  { q: 'What is a final response letter?', a: 'A final response letter is a letter from the financial services firm that either resolves your complaint or explains why the firm does not uphold it. Once you receive a final response letter — or if the firm has not responded within eight weeks of your complaint — you have six months to refer the matter to the FOS.' },
  { q: 'Do I need a solicitor to complain to the FOS?', a: 'No. You can complain to the FOS directly and free of charge without using a solicitor or claims management company. The FOS provides guidance on how to submit a complaint on its website (financial-ombudsman.org.uk). However, professional support may be helpful in complex cases, where a complaint has been rejected, or where significant sums are involved.' },
]

export default function FOSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Financial Ombudsman Pension Complaints', item: '/financial-ombudsman-pension-complaints/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Financial Ombudsman Pension Complaints" description={metadata.description as string} url="/financial-ombudsman-pension-complaints/" />
      <ArticleSchema title="Financial Ombudsman Pension Complaints" description={metadata.description as string} url="/financial-ombudsman-pension-complaints/" />

      <Breadcrumb crumbs={[{ label: 'FOS Pension Complaints' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Financial Ombudsman Pension Complaints</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'The FOS is a free, independent service for complaints about FCA-authorised firms that are still trading — if the firm has failed, use the FSCS instead.',
              'You must complain to the firm first. You then have six months from its final response to refer to the FOS.',
              'The FOS can direct a firm to pay compensation — its decisions are binding on the firm if the complainant accepts them.',
              'You can use the FOS directly and free of charge — no solicitor or claims management company is required.',
              'The FOS also has some discretion to consider complaints outside its standard time limits in exceptional circumstances.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you received unsuitable pension advice from an FCA-authorised firm that is still trading, the Financial Ombudsman Service (FOS) may be able to help. This page explains what the FOS is, when it applies to pension mis-selling complaints, what time limits apply, and how the process works.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The Financial Ombudsman Service (FOS) is a free service that can investigate your pension mis-selling complaint and direct the firm to pay compensation if it rules in your favour. You must complain to the firm first, then refer to the FOS within six months of their final response. The FOS only covers firms that are still trading — if the firm has failed, the FSCS is the relevant route.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> The FOS is a free service that can investigate complaints about financial firms. You can use it directly. It considers complaints about authorised firms that are still trading. If the firm has failed, see our page on <Link href="/fscs-pension-claims/" className="underline text-blue-700">FSCS claims</Link> instead.</p>
            </div>

            <h2>What Is the Financial Ombudsman Service?</h2>
            <p>The <a href="https://www.financial-ombudsman.org.uk" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">Financial Ombudsman Service (FOS)</a> is an independent body that resolves disputes between financial services firms and their customers. It is free to use for consumers and most small businesses. Its decisions are binding on financial firms if the complainant accepts them.</p>
            <p>The FOS handles a wide range of complaints including those relating to pension advice, SIPP recommendations, defined benefit transfers and related financial advice.</p>

            <h2>When Can You Complain to the FOS About a Pension?</h2>
            <p>You may be able to complain to the FOS about pension advice where:</p>
            <ul>
              <li>The firm that gave you advice was authorised by the FCA at the time</li>
              <li>The firm is still trading and able to respond to complaints</li>
              <li>You have already complained to the firm directly</li>
              <li>The firm has issued a final response letter, or eight weeks have passed since you complained</li>
              <li>You are within the applicable time limits</li>
            </ul>
            <p>If the firm has failed and can no longer respond to complaints, the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS</Link> may be the more appropriate route.</p>

            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold"></th>
                    <th className="text-left p-3 font-semibold">Financial Ombudsman (FOS)</th>
                    <th className="text-left p-3 font-semibold">FSCS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Use when', 'Adviser firm is still trading', 'Adviser firm has failed / insolvent'],
                    ['Cost to you', 'Free', 'Free'],
                    ['Who pays compensation', 'Firm (directed by FOS)', 'FSCS pays directly'],
                    ['Solicitor needed?', 'No — but can help', 'No — but can help'],
                    ['Binding decision?', 'Yes, on firm if you accept', 'Yes — FSCS pays if claim upheld'],
                    ['Key time limit', '6 months from final response', 'FSCS own rules (varies)'],
                  ].map(([feature, fos, fscs], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{feature}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{fos}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{fscs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>The Complaint Process</h2>
            <ol>
              <li><strong>Complain to the firm first:</strong> Before approaching the FOS, you must complain directly to the firm that gave you the advice. The firm has eight weeks to respond.</li>
              <li><strong>Receive a final response:</strong> The firm will either uphold your complaint, reject it, or issue a final response. They must respond within eight weeks.</li>
              <li><strong>Refer to the FOS:</strong> If you are not satisfied with the firm's response, or if eight weeks have passed without a response, you can refer the complaint to the FOS. You must do this within six months of the final response letter.</li>
              <li><strong>FOS investigation:</strong> The FOS will investigate your complaint, consider evidence from both sides, and issue a decision — either rejecting the complaint or upholding it with a recommended outcome.</li>
              <li><strong>Acceptance or rejection of the decision:</strong> If you accept the FOS decision, it becomes binding on the firm. If you reject it, you retain the right to pursue other routes including legal action.</li>
            </ol>

            <h2>Time Limits for FOS Pension Complaints</h2>
            <p>FOS complaints are subject to time limits. In general:</p>
            <ul>
              <li>You must refer your complaint to the FOS within six months of the firm's final response letter</li>
              <li>The FOS also applies rules related to when the event complained about occurred, and when you knew or should have known you had cause to complain</li>
              <li>In some cases involving older advice, the FOS may apply the three-year knowledge test</li>
            </ul>
            <p>Time limits are complex and depend on the specific facts of your case. Please seek advice promptly and see our full <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">time limits page</Link>.</p>

            <h2>What the FOS Can Award</h2>
            <p>If the FOS upholds your pension complaint, it can direct the firm to pay compensation, usually based on a redress calculation designed to restore you to the position you would have been in had the unsuitable advice not been given. The FOS applies monetary limits to the compensation it can direct firms to pay. Please check the FOS website for current limits.</p>

            <h2>How Legal Support May Help</h2>
            <p>While the FOS route is free and accessible, solicitor support may be valuable where:</p>
            <ul>
              <li>Your case involves complex pension calculations or multiple parties</li>
              <li>The FOS has rejected your complaint and you wish to consider other options</li>
              <li>Your loss exceeds the FOS compensation limit</li>
              <li>You need help organising and presenting evidence</li>
              <li>You wish to take legal action in parallel or instead</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">FOS Complaint Support</h3>
              <p className="text-gray-300 text-sm mb-5">We can help you understand your FOS options and assess the strength of your complaint.</p>
              <ContactForm compact />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-2 text-sm flex items-center gap-2"><CheckCircle size={16} />Free Direct Route</h3>
              <p className="text-green-700 text-xs leading-relaxed">You can complain to the FOS directly for free at <strong>financial-ombudsman.org.uk</strong>. No solicitor is required. We recommend reviewing your options before deciding how to proceed.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'Claim Process', href: '/pension-claim-process/' },
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
