import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import FAQAccordion from '@/components/FAQAccordion'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'FOS vs FSCS: Which Route for a Mis-Sold Pension Claim? | Comparison',
  description: 'Compare the Financial Ombudsman Service (FOS) and the Financial Services Compensation Scheme (FSCS) to find out which route applies to your pension mis-selling claim.',
  alternates: { canonical: '/compare/fos-vs-fscs/' },
}

const faqs = [
  { q: 'Can I use both the FOS and the FSCS?', a: 'Generally no — the routes are mutually exclusive depending on whether the adviser firm is still trading. If the firm is still trading, use the FOS. If it has failed, use the FSCS. In some cases where multiple parties are involved, different routes may apply to different respondents, but a solicitor can advise on this.' },
  { q: 'What if I am not sure whether the firm is still trading?', a: 'You can check the FCA Register at register.fca.org.uk to see the status of any authorised firm. If the firm is listed as cancelled, failed or in default, the FSCS may be the applicable route. If you are unsure, contact us for guidance.' },
  { q: 'Do I need a solicitor to use the FOS or FSCS?', a: 'No. Both the FOS and the FSCS are free to use and do not require a solicitor or claims management company. However, professional support can be useful in complex cases, where an initial complaint or application has been rejected, or where significant sums are involved.' },
  { q: 'What if the FOS rejects my complaint?', a: 'If the FOS rejects your complaint or you disagree with its decision, you may have other options. If you reject a FOS decision, it is not binding on you and you may still be able to pursue legal action. A solicitor can advise on your options if a FOS complaint does not result in a satisfactory outcome.' },
]

const rows = [
  { feature: 'Who it covers', fos: 'FCA-authorised firms that are still trading', fscs: 'FCA-authorised firms that have failed and cannot pay' },
  { feature: 'How to start', fos: 'Complain to the firm first, then refer to FOS within 6 months of final response', fscs: 'Apply directly to FSCS — no need to complain to firm first' },
  { feature: 'Cost to claimant', fos: 'Free', fscs: 'Free' },
  { feature: 'Solicitor required?', fos: 'No', fscs: 'No' },
  { feature: 'Compensation limit', fos: 'Up to the current FOS monetary limit per complaint (check FOS website)', fscs: 'Up to the current FSCS limit per person, per firm (check FSCS website)' },
  { feature: 'Binding on firm?', fos: 'Yes — if claimant accepts the decision', fscs: 'Yes — subject to FSCS eligibility rules' },
  { feature: 'Typical timescale', fos: 'Several months or longer depending on complexity and caseload', fscs: 'Varies — check FSCS for current processing information' },
  { feature: 'What if rejected?', fos: 'Can still pursue legal action if FOS decision is rejected', fscs: 'Can request review; may have further legal options' },
]

export default function FosVsFscsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Comparisons', item: '/compare/' }, { name: 'FOS vs FSCS', item: '/compare/fos-vs-fscs/' }]} />
      <WebPageSchema title="FOS vs FSCS: Which Route for a Mis-Sold Pension Claim?" description={metadata.description as string} url="/compare/fos-vs-fscs/" />
      <ArticleSchema title="FOS vs FSCS: Which Route for a Mis-Sold Pension Claim?" description={metadata.description as string} url="/compare/fos-vs-fscs/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Comparisons', href: '/compare/' }, { label: 'FOS vs FSCS' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">FOS vs FSCS: Which Route Applies to Your Pension Claim?</h1>
          <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />

          <TLDRBox points={[
            'FOS handles complaints against firms that are still trading; FSCS handles claims where the firm has failed',
            'Both routes are free — you do not need a solicitor or claims management company to use them',
            'Start with FOS only after you have complained to the firm first; FSCS can be approached directly',
            'Compensation limits differ — check the FOS and FSCS websites for current figures',
            'If unsure which route applies, check the FCA Register or speak to a solicitor',
          ]} />

          <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Financial Ombudsman Service (FOS) and the Financial Services Compensation Scheme (FSCS) are both free ways to seek compensation for a mis-sold pension — but they cover different situations. The key question is whether the financial adviser firm is still trading.</p>

          <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
            <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-white text-sm leading-relaxed">Use the <strong className="text-[#c9a84c]">FOS</strong> if the adviser firm that gave you bad pension advice is <strong className="text-[#c9a84c]">still trading</strong> and FCA-authorised. Use the <strong className="text-[#c9a84c]">FSCS</strong> if the firm has <strong className="text-[#c9a84c]">failed</strong> and cannot pay claims against it. You can check a firm's status on the FCA Register at register.fca.org.uk.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4">Side-by-Side Comparison</h2>

          <div className="not-prose overflow-x-auto mb-10 rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f2035] text-white">
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Feature</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Financial Ombudsman (FOS)</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">FSCS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}>
                    <td className="px-5 py-3 font-medium text-[#0f2035]">{r.feature}</td>
                    <td className="px-5 py-3 text-gray-600">{r.fos}</td>
                    <td className="px-5 py-3 text-gray-600">{r.fscs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3">When to Use the FOS</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">The FOS is the right route when the firm that gave you unsuitable advice is still FCA-authorised and trading. Before referring to the FOS, you must first complain directly to the firm and give it eight weeks to respond. If the firm rejects your complaint or does not respond within eight weeks, you can refer to the FOS. You have six months from the firm's final response to do so.</p>
          <ul className="space-y-2 mb-6">
            {['Firm is still trading and FCA-regulated', 'You have already complained to the firm (or the firm has not responded within 8 weeks)', 'You are within six months of the firm\'s final response letter', 'The complaint concerns regulated financial advice (not execution-only)'].map(p => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
            ))}
          </ul>
          <Link href="/financial-ombudsman-pension-complaints/" className="inline-flex items-center gap-1 text-[#1e3a5f] text-sm font-semibold underline mb-8">
            Full guide to FOS pension complaints <ArrowRight size={13} />
          </Link>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3 mt-8">When to Use the FSCS</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">The FSCS is the right route when the firm that gave you bad advice has failed and is in default — meaning it cannot pay claims against it. Unlike the FOS, you do not need to complain to the firm first. You apply directly to the FSCS. The FSCS applies compensation limits set by the FCA.</p>
          <ul className="space-y-2 mb-6">
            {['Firm has failed or been declared in default by the FSCS', 'Firm is no longer FCA-authorised or has been wound up', 'You cannot recover compensation from the firm itself', 'The advice concerned regulated financial products (including pension advice)'].map(p => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
            ))}
          </ul>
          <Link href="/fscs-pension-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] text-sm font-semibold underline mb-8">
            Full guide to FSCS pension claims <ArrowRight size={13} />
          </Link>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3 mt-8">What If Neither Route Applies?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">In some cases, neither the FOS nor the FSCS may be available — for example, where the firm was never FCA-authorised, where time limits have passed, or where the FSCS has declined to accept a claim. In these situations, legal proceedings may be the appropriate route, though eligibility depends on individual circumstances.</p>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4 mt-10">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
