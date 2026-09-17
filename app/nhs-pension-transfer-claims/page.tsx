import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle, Shield } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'NHS Pension Transfer Claims | Mis-Sold Final Salary Pension Solicitors',
  description: 'Were you advised to transfer out of the NHS pension? It is almost never suitable. Solicitor-led NHS pension transfer mis-selling claims. Free initial review.',
  alternates: { canonical: '/nhs-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the NHS pension?', a: 'Yes — in most cases, advice to transfer out of the NHS Pension Scheme is likely to have been unsuitable. The NHS pension is one of the most valuable defined benefit schemes in existence, offering guaranteed index-linked income, ill-health retirement, a spouse\'s pension and other benefits that are very difficult to replicate. If you were advised to transfer your NHS pension to a SIPP or personal pension and you suffered losses or gave up guaranteed benefits, you may have grounds for a significant claim.' },
  { q: 'Was it ever suitable to transfer out of the NHS pension?', a: 'In very limited circumstances, a transfer might have been suitable — for example, in cases involving serious ill-health where life expectancy was materially reduced, or certain complex circumstances where the scheme\'s death benefits did not meet a member\'s needs. However, these are narrow exceptions. For the overwhelming majority of NHS staff, transferring out of the NHS pension was and is unsuitable advice. The FCA has made defined benefit transfer mis-selling a priority area precisely because cases like this were so widespread.' },
  { q: 'How much compensation can I get for an NHS pension transfer claim?', a: 'NHS pension transfer compensation is typically based on the difference between the guaranteed income you gave up and the value of the fund you transferred into, modelled over your lifetime. Because NHS pension benefits are so valuable, the gap between what was given up and what the transferred fund is now worth can be very substantial. No specific figure can be given without reviewing your individual case.' },
  { q: 'Is there a time limit for an NHS pension transfer claim?', a: 'Yes. The applicable time limits depend on the route — FOS complaint, FSCS claim, or legal action. For some claims, the clock starts from when you knew or should have known the advice was unsuitable, which may be later than the transfer date. Do not assume you are out of time without seeking specific legal advice.' },
  { q: 'What benefits did I give up by transferring out of the NHS pension?', a: 'The NHS Pension Scheme offers: a guaranteed income in retirement linked to your salary and years of service; index-linked increases to keep pace with inflation; ill-health retirement benefits if you cannot continue working due to health; a pension for your spouse or partner on your death; and, for older members, a lump sum on death in service. These are exceptionally valuable benefits that are almost impossible to replicate with a SIPP or personal pension.' },
  { q: 'Can I rejoin the NHS pension scheme if I transferred out?', a: 'Whether you can rejoin the NHS Pension Scheme after transferring out depends on your circumstances and scheme rules. Eligibility to rejoin does not necessarily affect your right to claim compensation for the period your pension was not in the scheme, or for the losses suffered. A solicitor can advise on the interaction between any scheme re-entry and your compensation position.' },
  { q: 'What if the adviser firm that gave me the advice has since closed down?', a: 'If the firm that advised you to transfer your NHS pension is no longer trading, you may be able to claim through the Financial Services Compensation Scheme (FSCS), which compensates eligible claimants where an authorised firm has failed. See our <a href="/can-i-claim-if-adviser-has-gone-bust/" class="text-[#1e3a5f] underline">guide on claiming when an adviser has gone bust</a>.' },
]

const nhsBenefits = [
  { label: 'Guaranteed income', desc: 'A pension linked to your salary and years of service — payable for life, regardless of investment performance.' },
  { label: 'Index-linking', desc: 'Your NHS pension increases each year in line with inflation (CPI), protecting your income\'s real value over a long retirement.' },
  { label: 'Ill-health retirement', desc: 'Enhanced retirement benefits if you are forced to stop working due to health problems before normal retirement age.' },
  { label: 'Spouse\'s / partner\'s pension', desc: 'On your death, a continuing pension is paid to your spouse, civil partner or eligible partner — providing long-term family security.' },
  { label: 'Lump sum on death', desc: 'For members in active service, a lump sum death-in-service payment is made on death.' },
  { label: 'No investment risk', desc: 'The scheme is underwritten by the NHS and government — there is no investment risk to the member. Your income is not dependent on stock market performance.' },
]

export default function NHSPensionTransferPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'NHS Pension Transfer Claims', item: '/nhs-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="NHS Pension Transfer Claims" description={metadata.description as string} url="/nhs-pension-transfer-claims/" />
      <ArticleSchema title="NHS Pension Transfer Claims" description={metadata.description as string} url="/nhs-pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'NHS Pension Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">NHS Pension Transfer Claims — Were You Advised to Transfer Out of the NHS Pension?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The NHS Pension Scheme is one of the most valuable defined benefit pension schemes in the UK — advice to transfer out of it is almost always unsuitable.',
              'If you were advised to transfer to a SIPP or personal pension and suffered losses or gave up guaranteed benefits, you may have a significant claim.',
              'Compensation is typically based on the difference between the guaranteed income you gave up and the value of the fund you transferred into — the gap can be very substantial.',
              'The FCA has made defined benefit transfer mis-selling a regulatory priority — these cases are well-established and frequently succeed.',
              'Contact us for a free initial review — time limits may apply, so do not delay.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The NHS Pension Scheme is widely regarded as one of the most valuable employee benefit schemes in existence. Advice to transfer out of it — into a SIPP or personal pension — is almost never in a member's best interests. If you received such advice, you may have grounds for a substantial compensation claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For the overwhelming majority of NHS employees and former employees, advice to transfer out of the NHS Pension Scheme was unsuitable. If you were given such advice and went on to transfer, you may have a significant claim for compensation. Contact us for a free, no-obligation review of your situation.</p>
            </div>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Priority Area</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA identified defined benefit pension transfer mis-selling as a major consumer harm priority. NHS pension transfers were a significant part of this problem. Advisers were required to demonstrate that a transfer was in the member's best interests — in most cases, they could not. Many of the firms involved have since been investigated, fined or closed.</p>
              </div>
            </div>

            <h2>What Makes the NHS Pension So Valuable?</h2>
            <p>The NHS Pension Scheme is a public sector defined benefit scheme — meaning your pension income is guaranteed by the government and linked to your salary and service, not to the performance of investments. Understanding what you gave up is essential to understanding the scale of any potential loss.</p>

            <div className="not-prose space-y-3 mb-8">
              {nhsBenefits.map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{b.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Why Was This Advice Almost Always Unsuitable?</h2>
            <p>FCA guidance on defined benefit transfers makes clear that, in most cases, staying in a defined benefit scheme is in the best interests of the member. The guaranteed, inflation-protected income of the NHS scheme is something a SIPP or personal pension can almost never replicate.</p>
            <p>Advisers who recommended transfers were required by the FCA to demonstrate that the transfer was in the client's best interests — a test that was nearly impossible to satisfy for most NHS employees. In practice, many advisers failed to produce adequate Transfer Value Analyses (TVAs), failed to properly assess the member's circumstances, or had conflicts of interest through commission arrangements tied to the transfer.</p>
            <p>The FCA's subsequent work — including the introduction of stronger rules under PS17/12 and later reforms — confirmed that the sector had systematically failed consumers. Many of the firms involved have since been subject to FCA enforcement action, fines or withdrawal of authorisation.</p>

            <h2>How Is Compensation Calculated for NHS Pension Transfers?</h2>
            <p>Compensation for NHS pension transfer claims typically involves a comparison between:</p>
            <ul>
              <li>The guaranteed income you would have received from the NHS Pension Scheme, modelled over your lifetime using actuarial assumptions, and</li>
              <li>The value of the pension fund you transferred into and its current income-producing capacity.</li>
            </ul>
            <p>For most claimants, the gap between these two figures is substantial. NHS pension benefits are expensive to replicate commercially — which is precisely why transferring them away for a cash equivalent transfer value (CETV) is almost always a bad deal for the member.</p>
            <p>No specific figure can be given without reviewing the facts of your individual case. See our <Link href="/mis-sold-pension-compensation-calculator/" className="text-[#1e3a5f] underline">compensation guide</Link> for more detail on how calculations work.</p>

            <h2>Which Route Applies to Your Claim?</h2>
            <p>The route available to you depends on the status of the adviser firm that gave you the advice:</p>
            <ul>
              <li><strong>If the firm is still FCA-authorised and trading:</strong> Complain to the firm, then refer to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link> if unresolved.</li>
              <li><strong>If the firm has failed or been closed down:</strong> Apply to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Financial Services Compensation Scheme (FSCS)</Link>. Many of the firms involved in NHS pension transfer mis-selling have since failed.</li>
              <li><strong>For complex or large-value cases:</strong> Legal proceedings may be appropriate, either alongside or instead of regulatory routes.</li>
            </ul>

            <h2>Other Public Sector Pension Transfer Claims</h2>
            <p>The same concerns apply to transfers out of other public sector defined benefit schemes. If you were advised to transfer out of a teachers' pension, civil service pension, police pension, firefighters' pension, or local government pension scheme, the principles are identical. Contact us to discuss your situation.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-[#c9a84c]" />
                <h3 className="font-semibold text-sm">Free Initial Review</h3>
              </div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your NHS pension? Contact us for a free review of your case and an explanation of your options.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700 leading-relaxed">Do not delay in seeking advice about an NHS pension transfer claim. Time limits vary by route and may affect your ability to claim. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide</Link>.</p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
