import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import FAQAccordion from '@/components/FAQAccordion'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Solicitor vs Direct Claim: Which Is Right for Your Pension Claim?',
  description: 'Compare making a direct FOS or FSCS complaint yourself versus using a solicitor for your mis-sold pension claim. Understand the trade-offs and when professional help adds value.',
  alternates: { canonical: '/compare/solicitor-vs-direct-claim/' },
}

const faqs = [
  { q: 'Can I complain to the FOS or FSCS myself for free?', a: 'Yes. Both the Financial Ombudsman Service and the Financial Services Compensation Scheme provide free, consumer-facing routes that you can use directly without a solicitor or claims management company. They provide guidance on their websites on how to make a complaint or application. You are never required to use professional help to access these routes.' },
  { q: 'Will a solicitor take a percentage of my compensation?', a: 'This depends on how the work is arranged. Some solicitors work on a fixed fee or hourly rate. Others may offer a conditional fee arrangement (no win, no fee). Fee arrangements vary and must be explained to you clearly before any chargeable work begins. Always ensure you understand the fee structure before proceeding.' },
  { q: 'What if my FOS complaint is rejected — can a solicitor still help?', a: 'Yes. If you reject a FOS decision, it is not binding on you and you may still be able to pursue legal action in court. A solicitor can review whether there are grounds to challenge the outcome through other means. Similarly, if an FSCS application is rejected, a solicitor may be able to advise on whether there are grounds for review or alternative routes.' },
  { q: 'Is a solicitor the same as a claims management company?', a: 'No. Solicitors are regulated by the Solicitors Regulation Authority (SRA) and owe legal duties to their clients. Claims management companies (CMCs) are regulated by the FCA but are not solicitors. Edward & Amaury Solicitors is a law firm authorised and regulated by the SRA (SRA No. 800525), not a CMC.' },
]

const rows = [
  { feature: 'Cost', direct: 'Free — no charge to use FOS or FSCS', solicitor: 'Fees apply (fixed, hourly or conditional) — must be explained upfront' },
  { feature: 'Who handles the claim', direct: 'You — you write the complaint, submit evidence and correspond', solicitor: 'Solicitor — manages communications, evidence and process on your behalf' },
  { feature: 'Legal expertise', direct: 'None — FOS and FSCS do not require legal argument', solicitor: 'Full legal analysis of the advice, regulatory standards and losses' },
  { feature: 'Best for', direct: 'Straightforward cases where the firm and advice issue are clear', solicitor: 'Complex cases, high-value claims, rejected complaints, or multiple parties' },
  { feature: 'Time required from you', direct: 'Higher — you must manage submissions and responses yourself', solicitor: 'Lower — most work is handled by the solicitor' },
  { feature: 'Advice on which route to use', direct: 'None — you must identify the correct route yourself', solicitor: 'Provided — solicitor identifies the correct route for your circumstances' },
  { feature: 'If complaint is rejected', direct: 'You must decide next steps yourself', solicitor: 'Solicitor can advise on alternatives including legal action' },
  { feature: 'Regulated by', direct: 'N/A', solicitor: 'Solicitors Regulation Authority (SRA)' },
]

export default function SolicitorVsDirectPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Comparisons', item: '/compare/' }, { name: 'Solicitor vs Direct Claim', item: '/compare/solicitor-vs-direct-claim/' }]} />
      <WebPageSchema title="Solicitor vs Direct Claim: Which Is Right for Your Pension Claim?" description={metadata.description as string} url="/compare/solicitor-vs-direct-claim/" />
      <ArticleSchema title="Solicitor vs Direct Claim: Which Is Right for Your Pension Claim?" description={metadata.description as string} url="/compare/solicitor-vs-direct-claim/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Comparisons', href: '/compare/' }, { label: 'Solicitor vs Direct Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Solicitor-Led Claim vs Direct Complaint: What Are the Differences?</h1>
          <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />

          <TLDRBox points={[
            'You are never required to use a solicitor — FOS and FSCS are both free and accessible directly',
            'A solicitor can add value in complex cases, rejected complaints, or where large sums are involved',
            'Going direct is faster and costs nothing; a solicitor-led claim takes longer but provides expert advocacy',
            'SRA-regulated solicitors must explain fees clearly before starting work — there should be no surprises',
            'A free initial consultation from a regulated firm costs you nothing and helps you understand your options',
          ]} />

          <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">You are never required to use a solicitor to pursue a mis-sold pension claim. Both the Financial Ombudsman Service and the FSCS are free and accessible directly. But professional support can make a significant difference in complex cases. This page sets out the trade-offs honestly.</p>

          <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
            <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-white text-sm leading-relaxed">For straightforward cases, you can complain to the FOS or apply to the FSCS directly — free of charge, without a solicitor. Solicitor support adds most value in <strong className="text-[#c9a84c]">complex cases</strong>, where the advice failing is disputed, where a complaint has already been rejected, or where the claim value is high enough to justify the cost of professional help.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4">Side-by-Side Comparison</h2>

          <div className="not-prose overflow-x-auto mb-10 rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f2035] text-white">
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Feature</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Direct Complaint (FOS / FSCS)</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Solicitor-Led Claim</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}>
                    <td className="px-5 py-3 font-medium text-[#0f2035]">{r.feature}</td>
                    <td className="px-5 py-3 text-gray-600">{r.direct}</td>
                    <td className="px-5 py-3 text-gray-600">{r.solicitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3">When Going Direct May Be Appropriate</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">Making a direct complaint to the FOS or an application to the FSCS may be right for you if:</p>
          <ul className="space-y-2 mb-6">
            {[
              'The facts are clear and well-documented — you have a suitability letter, pension statements and correspondence',
              'The advice failure is straightforward — for example, you were placed into investments you clearly told the adviser you did not want',
              'The case is relatively lower value and the cost of solicitor support is disproportionate',
              'You have time to manage the process and are comfortable dealing with the relevant body directly',
            ].map(p => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3">When a Solicitor May Add Most Value</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">Solicitor support is likely to add most value when:</p>
          <ul className="space-y-2 mb-6">
            {[
              'The case is complex — for example, involving multiple parties, a failed firm, or disputed suitability',
              'The claim involves significant sums — a large DB transfer or significant investment losses',
              'A complaint to the firm has already been rejected and you are unsure how to proceed',
              'You are unsure which route applies or whether you are eligible to claim',
              'You do not have time to manage the process yourself or find it daunting',
              'You may need to consider legal proceedings if the FOS or FSCS route is unavailable or unsuccessful',
            ].map(p => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
            ))}
          </ul>

          <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed"><strong>We will always be transparent.</strong> At Edward &amp; Amaury Solicitors, we will tell you honestly whether we think your case merits professional support — and if you can proceed directly, we will tell you that too. A free initial review carries no obligation.</p>
          </div>

          <Link href="/pension-claim-process/" className="inline-flex items-center gap-2 bg-[#0f2035] hover:bg-[#162d4a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors mb-10">
            Learn how our process works <ArrowRight size={14} />
          </Link>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4 mt-4">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
