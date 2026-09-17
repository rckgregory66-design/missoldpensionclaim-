import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Pension Transfer After Divorce | Mis-Sold Pension Following a Pension Sharing Order',
  description: 'Were you advised to transfer a pension share received in divorce into an unsuitable product? Pension mis-selling claims following divorce pension orders — free review.',
  alternates: { canonical: '/pension-transfer-after-divorce/' },
}

const faqs = [
  { q: 'Can I claim if I was mis-sold a pension following my divorce?', a: 'Yes. Where a pension sharing order (or pension earmarking order) was made as part of divorce proceedings, the recipient spouse received pension credits or a pension share — and many were then approached by financial advisers to transfer or invest those pension rights. If the advice to transfer or invest was unsuitable, the same rules apply as for any other pension mis-selling claim.' },
  { q: 'What is a pension sharing order?', a: 'A pension sharing order is a court order made on divorce (or dissolution of a civil partnership) that transfers a percentage of one spouse\'s pension rights to the other. The transferee becomes entitled to a pension credit — a share of the pension fund — which they can either leave in the original scheme (as a deferred member) or transfer to a new pension arrangement. The decision about what to do with the pension credit is itself an area where unsuitable advice frequently occurred.' },
  { q: 'Was I mis-sold if I was advised to transfer my pension credit into a SIPP?', a: 'Possibly. For many recipients of pension credits — particularly those derived from DB or final salary schemes — advice to transfer the credit into a SIPP rather than leaving it in the original scheme or a like-for-like arrangement involved giving up guaranteed benefits. The suitability of that advice depends on individual circumstances, but for a large number of people it was unsuitable.' },
  { q: 'Can I claim if I transferred a pension credit from my former spouse\'s defined benefit scheme?', a: 'Yes — this is one of the most common scenarios. Where a pension sharing order gave you a credit within a final salary or defined benefit occupational scheme, you may have had the option to remain in that scheme as a deferred member, receiving guaranteed benefits. If you were advised to transfer out of that guaranteed position into a SIPP or personal pension, and the advice was unsuitable, you may have a significant claim.' },
  { q: 'What if the adviser was acting for both me and my former spouse during the divorce?', a: 'An adviser acting for both parties to a divorce has a potential conflict of interest that must be managed carefully — or the clients must be separately advised. If the same adviser was involved in the pension arrangements for both parties and had a conflict of interest, this may itself be a relevant factor in assessing the quality and independence of the advice given.' },
  { q: 'Is there a time limit for a pension transfer mis-selling claim following divorce?', a: 'Yes. The standard time limit principles apply — the clock runs from when you knew or should have known the advice was unsuitable, not necessarily from the date of the pension transfer. Since divorce-related pension transfers often occurred years ago, it is important to seek advice promptly to establish whether the limitation period has expired.' },
  { q: 'What if I can no longer locate the adviser who gave me the advice?', a: 'The FCA\'s Financial Services Register records current and former regulated firms and individuals. We can trace the firm that gave the advice and check its current regulatory status. If the firm has since failed, FSCS claims may be available.' },
]

export default function PensionTransferAfterDivorcePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Transfer After Divorce', item: '/pension-transfer-after-divorce/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Transfer After Divorce" description={metadata.description as string} url="/pension-transfer-after-divorce/" />
      <ArticleSchema title="Pension Transfer After Divorce" description={metadata.description as string} url="/pension-transfer-after-divorce/" />
      <Breadcrumb crumbs={[{ label: 'Pension Transfer After Divorce' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Transfer After Divorce — Were You Mis-Sold a Pension Following a Pension Sharing Order?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension credits received via a pension sharing order on divorce are subject to the same suitability rules as any other pension — unsuitable advice is claimable.',
              'Where the pension credit came from a DB/final salary scheme, advice to transfer it out into a SIPP is often unsuitable.',
              'Advisers with a conflict of interest in divorce proceedings may have given tainted advice.',
              'Time limits apply — the clock runs from when you knew the advice was unsuitable.',
              'If the adviser has since failed, FSCS claims up to £85,000 may be available.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Divorce is a period of significant financial change, and pension sharing orders often result in one party receiving substantial pension rights they have little experience managing. Financial advisers were frequently engaged to advise on what to do with those rights — and in many cases, the advice given was unsuitable, particularly where valuable guaranteed DB pension credits were transferred into riskier products.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you received a pension credit via a pension sharing order and were then advised to transfer it into a SIPP or other product — and the advice was unsuitable — you may have a significant claim. Contact us for a free, no-obligation review.</p>
            </div>
            <h2>Pension Sharing Orders — How They Work</h2>
            <p>When a court makes a pension sharing order on divorce, a percentage of the pension holder's pension rights is transferred to their former spouse. The recipient receives a "pension credit" — which may be left within the original scheme (as an internal transfer) or transferred to a separate pension arrangement (an external transfer).</p>
            <p>The choice between staying in the scheme and transferring externally is consequential — particularly where the original scheme is a defined benefit arrangement providing guaranteed income. Many people were advised to transfer externally when remaining in the scheme would have been more appropriate.</p>
            <h2>Defined Benefit Pension Credits and Transfer Risk</h2>
            <p>Where the pension sharing order is made against a DB or final salary pension, the credit carries guaranteed income rights within that scheme. Advice to transfer those rights into a SIPP involves giving up guarantees — and is assessed by the same suitability standards as any other DB transfer. See our guides on <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit transfer claims</Link> and <Link href="/what-is-a-cash-equivalent-transfer-value/" className="text-[#1e3a5f] underline">what a CETV is</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you mis-sold a pension following a divorce pension sharing order? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
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
