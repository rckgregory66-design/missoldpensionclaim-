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
  title: 'How Long Does a Pension Mis-Selling Claim Take? | Realistic Timescales',
  description: 'FOS pension complaints typically take 6–18 months. FSCS claims 6–12 months. Legal proceedings longer. Honest guide to pension claim timescales — Edward & Amaury Solicitors.',
  alternates: { canonical: '/how-long-does-a-pension-claim-take/' },
}

const faqs = [
  { q: 'How long does a pension mis-selling claim take?', a: 'It depends on the route. FOS pension complaints typically take between six months and two years — complex cases can take longer. FSCS claims for straightforward cases typically take six to twelve months, but complex multi-party cases can take longer. Legal proceedings are generally the longest route, sometimes taking one to three years or more. We will give you a realistic estimate once we understand the facts of your case.' },
  { q: 'How long does an FOS pension complaint take?', a: 'FOS pension complaints typically take between six and eighteen months from the point of referral, though some complex cases take longer. The FOS has published its aim to resolve complaints as quickly as possible, but high volumes of pension mis-selling cases — particularly defined benefit transfer complaints — have caused backlogs in recent years. You should expect the process to take at least six months.' },
  { q: 'How long does an FSCS pension claim take?', a: 'FSCS claims for straightforward pension mis-selling cases typically take between six and twelve months from submission to a decision. Complex cases, or those involving a large number of claims against a failed firm, can take longer. The FSCS will keep you informed of the status of your claim during the process.' },
  { q: 'What slows down a pension mis-selling claim?', a: 'Common causes of delay include: difficulty obtaining relevant documents from the adviser firm or pension scheme; complexity in calculating the loss, particularly for defined benefit transfer claims; high volumes of claims against a particular adviser or firm; the need for actuarial analysis in DB cases; and delays in the FOS or FSCS investigation process. We will work to minimise avoidable delays on our side of the process.' },
  { q: 'Can I speed up my FOS complaint?', a: 'In limited circumstances. The FOS can prioritise complaints where there is genuine financial hardship or where the complainant is elderly or has poor health. If you believe you meet one of these criteria, this should be flagged to the FOS at the outset. Otherwise, the standard process applies and queue positions cannot generally be changed.' },
  { q: 'Does the claim take longer if the adviser has gone bust?', a: 'Not necessarily. The FSCS is set up to handle claims against failed firms efficiently, and for clear-cut cases the timescales can be comparable to FOS complaints. However, where there are large numbers of claims against a particular failed firm, the FSCS may take longer to work through them. We will advise on realistic timescales for your specific situation.' },
  { q: 'When do I receive compensation once a decision is made?', a: 'Once a positive decision is made, payment usually follows within a specified period — typically four to six weeks for FOS awards and a similar timescale for FSCS payments, once the necessary paperwork is completed. Legal claim payments depend on the terms of any settlement or court order.' },
]

const timescales = [
  { route: 'FOS Complaint', typical: '6–18 months', complex: 'Up to 2+ years', notes: 'Depends on complexity, evidence, and FOS caseload. DB transfer cases can take longer.' },
  { route: 'FSCS Claim', typical: '6–12 months', complex: '12–24 months', notes: 'Varies by firm and claim volume. Multi-claimant situations may extend timescales.' },
  { route: 'Legal Proceedings', typical: '12–24 months', complex: '2–4 years', notes: 'Depends on complexity, whether liability is disputed, and whether the case settles or goes to trial.' },
]

export default function HowLongPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How Long Does a Pension Claim Take?', item: '/how-long-does-a-pension-claim-take/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="How Long Does a Pension Mis-Selling Claim Take?" description={metadata.description as string} url="/how-long-does-a-pension-claim-take/" />
      <ArticleSchema title="How Long Does a Pension Mis-Selling Claim Take?" description={metadata.description as string} url="/how-long-does-a-pension-claim-take/" />

      <Breadcrumb crumbs={[{ label: 'How Long Does a Claim Take?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How Long Does a Mis-Sold Pension Claim Take?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'FOS pension complaints typically take 6–18 months; complex defined benefit transfer cases can take longer.',
              'FSCS claims for straightforward cases typically take 6–12 months from submission to decision.',
              'Legal proceedings are the longest route — typically 12 months to 3+ years, depending on complexity.',
              'Common causes of delay include evidence gathering, complexity of loss calculation, and claim volumes at the FOS or FSCS.',
              'Once a positive decision is made, payment usually follows within 4–6 weeks.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">One of the questions we are asked most often is how long a pension mis-selling claim will take. There is no single answer — it depends on the route, the complexity of your case, and the volume of work at the FOS or FSCS at the time. This page gives honest, realistic timescales for each main route.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">FOS complaints: typically 6–18 months. FSCS claims: typically 6–12 months for straightforward cases. Legal proceedings: 12 months to 3+ years. The process is rarely quick, but we will keep you informed at every stage.</p>
            </div>

            <h2>Timescales by Route</h2>

            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold">Route</th>
                    <th className="text-left p-3 font-semibold">Typical Timescale</th>
                    <th className="text-left p-3 font-semibold">Complex Cases</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {timescales.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-t border-gray-100">{row.route}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{row.typical}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{row.complex}</td>
                      <td className="p-3 text-gray-500 text-xs border-t border-gray-100">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">All timescales are approximate and based on typical case experience. Individual cases vary.</p>
            </div>

            <h2>Financial Ombudsman Service (FOS)</h2>
            <p>The FOS process begins with a complaint to the firm itself. The firm has up to eight weeks to issue a final response. If you are unhappy with the response — or if the firm does not respond within eight weeks — you can refer the matter to the FOS.</p>
            <p>Once referred, an FOS investigator will be assigned to your case. For pension mis-selling cases — particularly defined benefit transfer complaints — the investigator will typically request a significant volume of documents from both you and the firm before reaching a preliminary view. This alone can take several months.</p>
            <p>If you accept the investigator's view and the firm accepts it too, the case can resolve at that stage. If either side disagrees, the case is referred to an ombudsman for a final decision. The total process from referral to final decision typically takes between six and eighteen months. High caseloads at the FOS, especially for DB transfer complaints, have led to longer waits in recent years.</p>
            <Link href="/financial-ombudsman-pension-complaints/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Full guide to FOS pension complaints <ArrowRight size={12} />
            </Link>

            <h2>Financial Services Compensation Scheme (FSCS)</h2>
            <p>FSCS pension claims are typically resolved faster than FOS complaints where the evidence is clear and the claim is straightforward. For cases against firms already declared in default by the FSCS, the claim assessment process typically takes between six and twelve months from submission of a complete claim.</p>
            <p>Where there are large volumes of claims against a single firm, or where the calculation of loss is complex (particularly for DB transfers), timescales can extend. The FSCS will provide updates on the status of your claim during the process.</p>
            <Link href="/fscs-pension-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Full guide to FSCS pension claims <ArrowRight size={12} />
            </Link>

            <h2>Legal Proceedings</h2>
            <p>Legal action is typically the longest route and is used where FOS or FSCS routes are unavailable, have been exhausted, or have produced an outcome that does not adequately compensate for the loss. Cases that settle by agreement can conclude more quickly; cases that proceed to trial take longer.</p>
            <p>As a realistic guide, legal proceedings in pension mis-selling cases typically take between one and three years from the issue of proceedings to resolution, though complex cases can take longer. We will advise on whether legal proceedings are appropriate in your situation.</p>

            <h2>What Affects How Long Your Claim Takes</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { title: 'Availability of documents', desc: 'Cases where documents are easily available — suitability reports, transfer value analyses, pension correspondence — typically progress faster. Where documents need to be obtained through data subject access requests or third parties, there may be delays.' },
                { title: 'Complexity of the loss calculation', desc: 'Defined benefit transfer claims require actuarial analysis comparing the guaranteed benefits given up with the current value of the transferred fund. This takes time and specialist input.' },
                { title: 'Caseload at the FOS or FSCS', desc: 'Both the FOS and FSCS have experienced high volumes of pension mis-selling claims in recent years. Waiting times can vary depending on current demand.' },
                { title: 'Whether liability is disputed', desc: 'If the firm or the FOS investigator quickly accepts that the advice was unsuitable, the case can resolve faster. If liability is contested, more stages are required.' },
              ].map(item => (
                <div key={item.title} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <Clock size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Start Your Claim</h3>
              <p className="text-gray-300 text-sm mb-5">The sooner you start, the sooner your claim progresses. Contact us for a free initial review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'The Claim Process', href: '/pension-claim-process/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'No Win No Fee', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
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
