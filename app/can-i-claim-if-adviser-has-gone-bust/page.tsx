import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Can I Claim If My Pension Adviser Has Gone Bust? | FSCS Guide',
  description: 'If your financial adviser has gone out of business, you may still be able to claim compensation through the FSCS. Solicitor-led guide to your options.',
  alternates: { canonical: '/can-i-claim-if-adviser-has-gone-bust/' },
}

const faqs = [
  { q: 'Can I still claim if my financial adviser is no longer trading?', a: 'Yes — in many cases you can. If your adviser firm was authorised by the FCA and has since failed, you may be able to make a claim through the Financial Services Compensation Scheme (FSCS). The FSCS exists specifically to compensate eligible claimants where an authorised financial services firm has failed and is unable to pay claims against it.' },
  { q: 'What is the FSCS compensation limit for pension advice claims?', a: 'The FSCS applies limits to the compensation it pays per eligible person, per firm. For investment advice (which includes most pension advice claims), the current limit is set by the FCA. You should check the FSCS website for the current figure, as limits can change. See our <a href="/fscs-pension-compensation-limit/" class="text-[#1e3a5f] underline">FSCS compensation limit page</a> for more detail.' },
  { q: 'What if my adviser firm is still trading but in difficulty?', a: 'If the firm is still trading and has FCA authorisation, the correct route may be to complain directly to the firm first and then, if the complaint is not resolved satisfactorily, to the Financial Ombudsman Service (FOS). The FSCS is typically available only once a firm has formally failed (been declared in default). A solicitor can advise on which route applies.' },
  { q: 'What if I cannot find evidence that my adviser existed?', a: 'If you are unsure whether your adviser was FCA-authorised, you can check the FCA Financial Services Register at register.fca.org.uk. You can also check the FSCS website for firms it has declared in default. A solicitor can help you investigate who gave you the advice and whether any regulated route is available.' },
  { q: 'Do I need a solicitor to make an FSCS claim?', a: 'You can apply to the FSCS directly at no cost. However, a solicitor can help you assess whether your case meets the FSCS criteria, gather supporting evidence, and handle the claim on your behalf if the process is complex or contested.' },
  { q: 'Is there a time limit for FSCS pension claims?', a: 'FSCS claims can be affected by limitation periods. The FSCS has its own eligibility rules on timing. It is important not to delay — seek advice promptly to protect your position.' },
]

export default function AdviserGoneBustPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Can I Claim If My Adviser Has Gone Bust?', item: '/can-i-claim-if-adviser-has-gone-bust/' }]} />
      <WebPageSchema title="Can I Claim If My Adviser Has Gone Bust?" description={metadata.description as string} url="/can-i-claim-if-adviser-has-gone-bust/" />
      <ArticleSchema title="Can I Claim If My Adviser Has Gone Bust?" description={metadata.description as string} url="/can-i-claim-if-adviser-has-gone-bust/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Adviser Gone Bust' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Can I Claim Compensation If My Financial Adviser Has Gone Bust?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Yes — if your adviser firm was FCA-authorised and has since failed, you may be able to claim through the Financial Services Compensation Scheme (FSCS).',
              'The FSCS exists specifically for situations where an authorised firm has failed and cannot meet claims against it.',
              'An FSCS claim is available directly, without a solicitor, and without charge — but professional help can be valuable for complex cases.',
              'There is a limit on the compensation the FSCS can pay, set by the FCA — check the current figure on the FSCS website.',
              'Time limits can apply — do not delay in seeking advice.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">
              One of the most common concerns we hear from potential claimants is this: "My financial adviser has closed down — does that mean I have lost my chance to claim?" In most cases, the answer is no. There is a route specifically designed for this situation.
            </p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Yes. If your adviser's firm was FCA-authorised and has since failed, the FSCS may compensate you up to the current FSCS limit. The firm closing does not end your right to claim — the FSCS is designed exactly for this situation. Contact us for a free assessment.</p>
            </div>

            <h2>What Happens When a Financial Adviser Goes Out of Business?</h2>
            <p>When an FCA-authorised financial adviser firm becomes insolvent, enters administration or is otherwise unable to meet claims against it, the FSCS steps in as a compensation scheme of last resort. The FSCS declares firms "in default" and then becomes the body you claim against — rather than the firm itself.</p>
            <p>This means that the fact your adviser is no longer trading does not, by itself, prevent you from pursuing compensation for unsuitable pension advice. You are claiming against the FSCS, using the same underlying facts about the advice you received.</p>

            <h2>What Is the FSCS and How Does It Apply to Pension Claims?</h2>
            <p>The Financial Services Compensation Scheme is the UK's statutory compensation fund for customers of authorised financial services firms that fail. It is funded by levies on financial services firms and is free to use.</p>
            <p>For pension advice claims, the FSCS covers losses caused by unsuitable advice that was given by an authorised investment adviser. This includes:</p>
            <ul>
              <li>Advice to transfer out of a defined benefit (final salary) pension</li>
              <li>Advice to invest in a SIPP, including into high-risk or unregulated assets</li>
              <li>Advice that was unsuitable for your circumstances, risk profile or investment objectives</li>
            </ul>
            <p>The FSCS cannot help where the advice was given by an unregulated or unauthorised person, or where the firm is still trading — in those situations, different routes apply.</p>

            <h2>How Do I Know If My Adviser Firm Has Failed?</h2>
            <p>You can check whether a firm has been declared in default on the FSCS website. The FCA Financial Services Register also shows whether a firm was authorised and whether its authorisation has been cancelled or withdrawn.</p>
            <p>If you are unsure whether your former adviser was FCA-regulated, search their name or firm name on the FCA Register at register.fca.org.uk. A solicitor can help you investigate this.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-6 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">What If My Adviser Was Unregulated?</p>
                <p className="text-sm text-gray-700 leading-relaxed">If the person who gave you advice was not FCA-authorised, the FSCS route will not be available. You may still have potential legal remedies — contact us to discuss your options.</p>
              </div>
            </div>

            <h2>Is There a Compensation Limit?</h2>
            <p>Yes. The FSCS applies limits to the amount of compensation it pays per eligible person, per firm. The current limit for investment advice (which covers most pension advice claims) is set by the FCA and can change over time. You should check the current figure directly on the FSCS website or our <Link href="/fscs-pension-compensation-limit/" className="text-[#1e3a5f] underline">FSCS compensation limit page</Link>.</p>
            <p>If your losses exceed the FSCS limit, you may not be able to recover the full amount through the FSCS alone. A solicitor can advise on whether any other remedies may be available.</p>

            <h2>How to Make an FSCS Claim for Pension Mis-Selling</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { n: 1, title: 'Confirm the firm is in FSCS default', desc: 'Check the FSCS website or FCA Register to confirm the firm has failed and the FSCS is accepting claims against it.' },
                { n: 2, title: 'Gather your evidence', desc: 'Collect pension paperwork, transfer documents, suitability reports and any adviser correspondence. If you do not have these, you can make a data subject access request.' },
                { n: 3, title: 'Submit a claim to the FSCS', desc: 'You can apply directly on the FSCS website at no cost, or instruct a solicitor to handle the process on your behalf.' },
                { n: 4, title: 'Support the FSCS investigation', desc: 'The FSCS will investigate the claim and may request additional information. They assess the advice and your losses, then make a compensation decision.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-3 bg-[#f0f4f8] p-4 rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#c9a84c] text-white font-bold text-sm flex items-center justify-center shrink-0">{n}</div>
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Do I Need a Solicitor for an FSCS Claim?</h2>
            <p>You can apply to the FSCS directly and for free. For straightforward cases, many people manage this without professional help. However, a solicitor can add value where:</p>
            <ul>
              <li>Your case is complex or involves significant losses</li>
              <li>You are uncertain whether you meet the FSCS eligibility criteria</li>
              <li>You need help gathering or presenting evidence</li>
              <li>The FSCS has rejected or underpaid a claim you believe is valid</li>
              <li>Your losses exceed the FSCS limit and you want to explore other routes</li>
            </ul>

            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-2">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">Related Pages</p>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FSCS Pension Claims Guide', href: '/fscs-pension-claims/' },
                  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
                  { label: 'FOS vs FSCS — Which Route Applies?', href: '/compare/fos-vs-fscs/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
                  { label: 'Time Limits for Pension Claims', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-5 text-white">
              <h3 className="font-semibold mb-3 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">If your adviser has gone bust, we can review your case and advise on whether the FSCS route is available to you. No charge, no obligation.</p>
              <Link href="/contact/" className="block w-full text-center bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Contact Us
              </Link>
              <Link href="/make-a-claim/" className="block w-full text-center mt-2 border border-white/30 hover:bg-white/10 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Make a Claim
              </Link>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
                  { label: 'FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
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
