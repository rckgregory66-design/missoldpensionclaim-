import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'FOS vs Legal Action for Pension Claims | Which Route Is Better?',
  description: 'Comparing FOS pension complaints against legal proceedings. FOS is free and simpler. Legal action has no cap and can be faster for the right case. Solicitor guide.',
  alternates: { canonical: '/compare/fos-vs-legal-action/' },
}

const faqs = [
  { q: 'Should I use the FOS or take legal action for my pension mis-selling claim?', a: 'For most pension mis-selling claims, starting with the FOS complaint route is the right approach: it is free, relatively straightforward, and can result in binding compensation without any legal costs. Legal action tends to be appropriate where the FOS is not available, where the claim is very high value (above the FOS award limit), where the FOS has already rejected the complaint, or where speed and certainty of outcome are important and the case has strong prospects.' },
  { q: 'What is the FOS compensation limit for pension claims?', a: 'The FOS can award up to £430,000 per complaint (for complaints referred from 1 April 2019 onwards). For very large pension claims — particularly defined benefit transfer cases — this limit can be reached, making legal action necessary to recover the full loss.' },
  { q: 'Is the FOS free to use?', a: 'Yes. The FOS service is free for consumers. You do not pay anything to bring a complaint, and firms — not consumers — pay the FOS\'s case fee. If you use a solicitor to help with the FOS process, you may incur legal fees — but many firms offer no win no fee arrangements for FOS-eligible claims.' },
  { q: 'How long does FOS vs court take?', a: 'FOS pension complaints typically take 6–18 months. Court proceedings, particularly if contested, can take 12 months to 3 years or more. However, many court cases settle before trial, and a well-prepared claim with strong prospects can sometimes settle quickly. The FOS route is generally faster for most cases.' },
  { q: 'Can I use both the FOS and legal action?', a: 'You can use the FOS first — and if the outcome is unsatisfactory, pursue legal action (subject to time limits). Once you accept a FOS final decision, you generally cannot then bring a court claim for the same loss. You should not run both routes simultaneously — resolve the FOS route first and then decide whether to litigate.' },
  { q: 'Does a FOS decision help or hinder a later court claim?', a: 'It depends on the decision. A FOS finding in your favour is useful evidence — it is an independent body\'s conclusion that the advice was unsuitable. However, courts are not bound by FOS decisions. A FOS rejection does not prevent a court claim, but the court will see the rejection and the reasoning behind it.' },
  { q: 'What happens if I win at the FOS but the firm goes bust before paying?', a: 'If you have accepted a FOS final decision and the firm subsequently fails before paying, you may be able to make an FSCS claim to recover the awarded sum. The FSCS treats accepted FOS awards as evidence of liability. Contact us if you are in this situation.' },
]

const comparison = [
  { feature: 'Cost to consumer', fos: 'Free', legal: 'Solicitor fees (no win no fee may apply)' },
  { feature: 'Compensation cap', fos: '£430,000 per complaint', legal: 'No cap — full loss recoverable' },
  { feature: 'Typical timescale', fos: '6–18 months', legal: '12 months to 3+ years' },
  { feature: 'Binding on firm', fos: 'Yes (if you accept)', legal: 'Yes (court order or settlement)' },
  { feature: 'Evidence required', fos: 'Lower threshold — informal process', legal: 'Formal disclosure and witness statements' },
  { feature: 'Interest on award', fos: 'Usually 8% pa on upheld amounts', legal: 'Statutory or commercial rate' },
  { feature: 'Applies if firm bust', fos: 'No — firm must be trading', legal: 'No — FSCS route instead' },
  { feature: 'Can appeal outcome', fos: 'Court review only (judicial review)', legal: 'Court of Appeal (on points of law)' },
  { feature: 'Legal representation', fos: 'Not required (solicitor optional)', legal: 'Strongly advisable; often essential' },
]

export default function FOSvsLegalPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Compare', item: '/compare/' },
        { name: 'FOS vs Legal Action', item: '/compare/fos-vs-legal-action/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="FOS vs Legal Action for Pension Claims" description={metadata.description as string} url="/compare/fos-vs-legal-action/" />
      <ArticleSchema title="FOS vs Legal Action for Pension Claims" description={metadata.description as string} url="/compare/fos-vs-legal-action/" />

      <Breadcrumb crumbs={[{ label: 'Compare', href: '/compare/fos-vs-fscs/' }, { label: 'FOS vs Legal Action' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">FOS vs Legal Action for Pension Mis-Selling Claims — Which Route Is Right?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The FOS is the right first step for most pension mis-selling claims — it is free, straightforward, and can produce binding compensation without legal costs.',
              'Legal action has no compensation cap, making it essential for large-value DB transfer claims that exceed the £430,000 FOS limit.',
              'Legal proceedings are typically longer and more expensive than FOS, but may be appropriate after a FOS rejection or for complex/high-value cases.',
              'You can use FOS first and litigate afterwards if the outcome is unsatisfactory — but do not run both simultaneously.',
              'A solicitor can advise on the right route for your specific circumstances.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">For most pension mis-selling claims, the Financial Ombudsman Service is the natural starting point — it is free, accessible, and produces binding outcomes without requiring litigation. But legal action has real advantages in certain cases, and understanding when each route applies is important for getting the best outcome.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Use the FOS first in most cases — it is free and effective. Consider legal action if your claim exceeds the £430,000 FOS cap, if the FOS has rejected your complaint, or if speed and certainty justify litigation costs. A solicitor can advise which is right for you.</p>
            </div>

            <h2>Side-by-Side Comparison</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold w-1/3">Feature</th>
                    <th className="text-left p-3 font-semibold w-1/3">FOS Complaint</th>
                    <th className="text-left p-3 font-semibold w-1/3">Legal Action</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{row.feature}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{row.fos}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{row.legal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When to Use the FOS</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                'The adviser firm is still FCA-authorised and trading',
                'Your claim is within the £430,000 FOS award limit',
                'You want a free, accessible process without needing a solicitor',
                'The claim is relatively straightforward and well-documented',
                'You are prepared to wait 6–18 months for a resolution',
              ].map(p => (
                <div key={p} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{p}</div>
              ))}
            </div>
            <p>The FOS process begins with a formal complaint to the firm itself. If the firm issues a final response that does not resolve the complaint — or if eight weeks pass without a response — you can refer the matter to the FOS.</p>
            <Link href="/financial-ombudsman-pension-complaints/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Full guide to FOS pension complaints <ArrowRight size={12} />
            </Link>

            <h2>When Legal Action May Be Better</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                { text: 'Your claim exceeds £430,000 — the FOS cap means you cannot recover the full loss through FOS alone', warn: false },
                { text: 'The FOS has already rejected your complaint and you disagree with the outcome', warn: false },
                { text: 'You need speed and certainty — a strong case may settle quickly once proceedings are issued', warn: false },
                { text: 'The case involves complex legal points that courts are better placed to determine', warn: false },
                { text: 'Note: court proceedings are significantly more expensive and time-consuming than FOS', warn: true },
              ].map(p => (
                <div key={p.text} className="flex items-start gap-2 text-sm text-gray-700">
                  {p.warn ? <XCircle size={14} className="text-amber-500 shrink-0 mt-0.5" /> : <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />}
                  {p.text}
                </div>
              ))}
            </div>

            <h2>The FOS Award Cap — Why It Matters for DB Transfer Claims</h2>
            <p>The FOS can award up to £430,000 per complaint. For many standard pension mis-selling claims, this is more than sufficient. However, defined benefit pension transfer claims — particularly for claimants who transferred large funds or gave up very valuable scheme benefits — can involve losses that significantly exceed this limit.</p>
            <p>In these cases, a claimant who brings only an FOS complaint risks leaving significant money on the table. A solicitor can advise whether legal proceedings — in addition to or instead of the FOS route — are necessary to recover the full loss.</p>
            <Link href="/how-is-defined-benefit-pension-transfer-redress-calculated/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              How DB transfer redress is calculated <ArrowRight size={12} />
            </Link>

            <h2>Using Both Routes — What You Need to Know</h2>
            <p>You can use the FOS route first and, if the outcome is unsatisfactory, then pursue legal action — subject to time limits. However:</p>
            <ul>
              <li>Once you <strong>accept</strong> a FOS final decision, you generally cannot bring a court claim for the same loss against the same firm.</li>
              <li>Do <strong>not run FOS and court proceedings simultaneously</strong> for the same complaint — courts typically stay proceedings while the FOS considers the same complaint.</li>
              <li><strong>Court time limits run independently</strong> of the FOS process. If you are near the end of the limitation period, you may need to issue proceedings to preserve your position even before the FOS process concludes.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Which Route Is Right for You?</h3>
              <p className="text-gray-300 text-sm mb-5">We can advise on the best route for your claim — FOS, FSCS, or legal action. Free, no-obligation initial review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Compare: FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
                  { label: 'After FOS Rejection', href: '/what-happens-after-fos-rejects-my-pension-claim/' },
                  { label: 'No Win No Fee', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
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
