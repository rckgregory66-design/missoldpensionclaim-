import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'No Win No Fee Pension Claims: What Percentage Do Solicitors Charge?',
  description: 'How much do no win no fee solicitors charge for pension mis-selling claims? What is a reasonable percentage? What to look out for in a CFA. Clear guide.',
  alternates: { canonical: '/no-win-no-fee-pension-claims-percentage/' },
}

const faqs = [
  { q: 'What percentage do no win no fee solicitors charge for pension claims?', a: 'Solicitors handling pension mis-selling claims on a no win no fee (conditional fee agreement) basis typically charge a success fee of between 15% and 35% of the compensation recovered, plus VAT in some cases. The specific percentage varies by firm and by the complexity of the case. You should always confirm the exact percentage and whether it is subject to VAT before signing a CFA.' },
  { q: 'What is a conditional fee agreement (CFA)?', a: 'A conditional fee agreement (CFA) — commonly called a no win no fee agreement — is a contract between you and your solicitor under which the solicitor\'s fee is contingent on the outcome of the claim. If the claim is unsuccessful, the solicitor receives nothing (or a reduced fee, depending on the terms). If the claim succeeds, the solicitor receives their agreed percentage of the compensation.' },
  { q: 'Are there any costs if the claim is unsuccessful?', a: 'Under a properly structured CFA, you pay nothing to the solicitor if the claim is unsuccessful. However, you should check the terms carefully — some agreements may include disbursements (e.g. expert reports, court fees) that are payable regardless of outcome. Make sure you understand exactly what you would owe if the claim did not succeed before signing anything.' },
  { q: 'Is a 30–35% no win no fee fee reasonable for a pension claim?', a: 'Fees at the higher end of the range — 30–35% — are common for complex pension mis-selling cases, particularly DB transfer claims, where significant work is required to calculate and evidence the loss. Where the claim is more straightforward or the compensation is very large, a lower percentage may be negotiable. What matters most is not the percentage in isolation, but the net amount you receive after the fee is deducted.' },
  { q: 'What is the difference between no win no fee and a claims management company?', a: 'A solicitor operating under a no win no fee CFA is regulated by the Solicitors Regulation Authority (SRA) and owes you professional and fiduciary duties. A claims management company (CMC) is regulated by the FCA but operates differently — they may charge higher fees, pass your case to another firm, or have less expertise in complex pension claims. For pension mis-selling claims, a solicitor is generally preferable to a CMC.' },
  { q: 'Do I need to pay any money upfront for a no win no fee pension claim?', a: 'Under a genuine no win no fee CFA for a pension mis-selling claim, you should not need to pay anything upfront. The solicitor\'s fee is taken from the compensation if the claim succeeds. If a firm asks for upfront payment before work begins, check whether they are operating on a true CFA basis or a different fee arrangement.' },
  { q: 'Can I negotiate the no win no fee percentage?', a: 'In some cases, particularly where the potential compensation is large, there may be scope to negotiate the percentage. It is always worth asking. What you should also consider is the experience and track record of the solicitor in pension mis-selling claims — a lower fee from a less experienced firm may not produce the best outcome overall.' },
]

export default function NoWinNoFeePercentagePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'No Win No Fee Pension Claims Percentage', item: '/no-win-no-fee-pension-claims-percentage/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="No Win No Fee Pension Claims: What Percentage?" description={metadata.description as string} url="/no-win-no-fee-pension-claims-percentage/" />
      <ArticleSchema title="No Win No Fee Pension Claims: What Percentage?" description={metadata.description as string} url="/no-win-no-fee-pension-claims-percentage/" />

      <Breadcrumb crumbs={[{ label: 'No Win No Fee Percentage' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">No Win No Fee Pension Claims — What Percentage Do Solicitors Charge?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'No win no fee solicitors for pension claims typically charge 15–35% of the compensation recovered, plus VAT in some cases.',
              'If the claim fails, you pay nothing to the solicitor under a properly structured CFA.',
              'Fees at the higher end are common for complex DB transfer claims requiring significant evidencing work.',
              'A solicitor regulated by the SRA offers stronger protections than a claims management company (FCA-regulated).',
              'Always confirm the exact percentage, VAT treatment, and what (if anything) you owe if the claim fails before signing.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Most pension mis-selling solicitors offer no win no fee arrangements — meaning you pay nothing if the claim fails, and a percentage of the compensation if it succeeds. Understanding what a reasonable fee looks like, and what to check before signing, helps you make an informed choice.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">No win no fee solicitors for pension mis-selling claims typically charge 15–35% of the compensation recovered. Complex DB transfer claims tend to sit towards the upper end. If the claim fails, you pay nothing. Confirm the exact terms before signing any agreement.</p>
            </div>

            <h2>What Is a Conditional Fee Agreement (CFA)?</h2>
            <p>A conditional fee agreement is the formal name for a no win no fee arrangement. Under a CFA:</p>
            <ul>
              <li>The solicitor agrees to take on your case with their fee <strong>conditional</strong> on success.</li>
              <li>If the claim <strong>fails</strong>, the solicitor receives nothing (or, in some cases, a reduced base fee — check the terms).</li>
              <li>If the claim <strong>succeeds</strong>, the solicitor charges a success fee — a percentage of the compensation recovered.</li>
              <li>The success fee is deducted from the compensation paid to you.</li>
            </ul>

            <h2>Typical No Win No Fee Percentages for Pension Claims</h2>
            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-3">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">Typical Range</p>
              </div>
              <div className="space-y-2">
                {[
                  { range: '15–20%', desc: 'More straightforward claims — clear liability, straightforward loss calculation' },
                  { range: '25–30%', desc: 'Mid-complexity — SIPP mis-selling with some evidencing work required' },
                  { range: '30–35%', desc: 'Complex claims — DB transfers, multi-party SIPP cases, large losses requiring detailed PS22/13 calculations' },
                ].map(r => (
                  <div key={r.range} className="flex gap-3 text-sm">
                    <span className="font-bold text-[#0f2035] w-20 shrink-0">{r.range}</span>
                    <span className="text-gray-700">{r.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">These are indicative ranges only. Actual fees vary by firm, case complexity and jurisdiction. Always confirm the exact percentage with your solicitor before signing.</p>
            </div>

            <h2>What to Check Before Signing a No Win No Fee Agreement</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                'The exact success fee percentage — and whether it is inclusive or exclusive of VAT',
                'What you owe if the claim fails — is it genuinely zero, or are there disbursements?',
                'How disbursements (e.g. expert reports, court fees) are handled — who bears them if the claim fails?',
                'Whether the solicitor is SRA-regulated (solicitor) or FCA-regulated (claims management company)',
                'Whether there is any minimum fee clause',
                'Whether the agreement can be terminated — and on what terms',
                'What happens if compensation is recovered in stages — when is the fee calculated and deducted?',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <p>See our full guide to <Link href="/no-win-no-fee-pension-claims/" className="text-[#1e3a5f] underline">no win no fee pension claims</Link> for more on how these arrangements work.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Discuss Our Fee Arrangement</h3>
              <p className="text-gray-300 text-sm mb-5">We offer no win no fee pension claims. Contact us to discuss our fees and assess your case — free, no-obligation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'No Win No Fee Pension Claims', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'Solicitor vs Direct Claim', href: '/compare/solicitor-vs-direct-claim/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
                  { label: 'Pension Claim Process', href: '/pension-claim-process/' },
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
