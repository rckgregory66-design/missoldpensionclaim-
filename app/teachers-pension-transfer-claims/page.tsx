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
  title: 'Teachers Pension Transfer Claims | Mis-Sold Pension Solicitors',
  description: 'Were you advised to transfer out of the Teachers Pension Scheme? This is almost always unsuitable advice. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/teachers-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the Teachers Pension Scheme?', a: 'Yes. The Teachers Pension Scheme (TPS) is one of the most valuable defined benefit pension schemes in the UK, offering guaranteed index-linked income, ill-health retirement, a spouse\'s pension and other benefits. Advice to transfer out of the TPS into a SIPP or personal pension is almost always unsuitable, and if you followed such advice and suffered a loss, you may have a significant claim for compensation.' },
  { q: 'Was it ever suitable to transfer out of the Teachers Pension?', a: 'In very limited and specific circumstances — for example, where a teacher had a seriously reduced life expectancy, or where the scheme\'s death benefits were genuinely inadequate for their particular situation — a transfer might have been considered. These are narrow exceptions. For the overwhelming majority of teachers, transferring out of the TPS was and remains unsuitable advice. The FCA has made defined benefit transfer mis-selling a regulatory priority.' },
  { q: 'How much compensation can I get for a Teachers Pension transfer claim?', a: 'Compensation is calculated by comparing the guaranteed income you gave up in the TPS — modelled as a cost to replicate those benefits in the open market — against the current value of the fund you transferred into. Because Teachers Pension benefits are so valuable, the gap can be very substantial. No specific figure can be given without reviewing the facts of your individual case.' },
  { q: 'Is there a time limit for a Teachers Pension transfer claim?', a: 'Yes. Time limits apply depending on the route — FOS complaint, FSCS claim, or legal proceedings. Importantly, time may run from when you knew or should have known that the advice was unsuitable, which can be later than the transfer date. Do not assume you are out of time without obtaining specific legal advice.' },
  { q: 'What benefits does the Teachers Pension Scheme provide?', a: 'The TPS provides: a guaranteed income linked to salary and years of service; annual increases in line with inflation (CPI); ill-health retirement benefits if you cannot continue teaching due to health; a pension for your spouse, civil partner or eligible partner on your death; and death-in-service benefits. These benefits are extremely expensive to replicate commercially.' },
  { q: 'What if the adviser firm that gave me the advice has since closed down?', a: 'If the firm that advised you to transfer your Teachers Pension is no longer trading, you may be able to claim through the Financial Services Compensation Scheme (FSCS), which compensates eligible claimants where an FCA-authorised firm has failed. Many of the firms involved in DB pension transfer mis-selling have since been closed or had their authorisation withdrawn. See our guide on claiming when an adviser has gone bust.' },
  { q: 'Can retired teachers claim for a pension transfer?', a: 'Yes. Being retired does not prevent a claim. For retired teachers who transferred out of the TPS, the loss is often very clear — you can compare the income you actually receive with the income you would have received from the TPS. See our guide on claiming if already retired.' },
]

const tpsBenefits = [
  { label: 'Guaranteed income', desc: 'A pension linked to your salary and years of teaching service — payable for life, regardless of investment markets.' },
  { label: 'CPI index-linking', desc: 'Annual increases in line with the Consumer Prices Index, protecting your income\'s real value throughout retirement.' },
  { label: 'Ill-health retirement', desc: 'Enhanced benefits if you are forced to stop teaching due to health before normal retirement age.' },
  { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse, civil partner or eligible partner on your death.' },
  { label: 'Death-in-service lump sum', desc: 'A lump sum payment for eligible dependants if you die while still teaching.' },
  { label: 'No investment risk', desc: 'Government-backed — your retirement income does not depend on stock market performance.' },
]

export default function TeachersPensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Teachers Pension Transfer Claims', item: '/teachers-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Teachers Pension Transfer Claims" description={metadata.description as string} url="/teachers-pension-transfer-claims/" />
      <ArticleSchema title="Teachers Pension Transfer Claims" description={metadata.description as string} url="/teachers-pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'Teachers Pension Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Teachers Pension Transfer Claims — Were You Advised to Transfer Out of the TPS?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The Teachers Pension Scheme is one of the most valuable defined benefit pension schemes in the UK — advice to transfer out is almost always unsuitable.',
              'If you were advised to transfer your TPS into a SIPP or personal pension and suffered losses or gave up guaranteed benefits, you may have a significant claim.',
              'Compensation is based on the gap between the guaranteed income you gave up and the value of the fund you transferred into — often very substantial.',
              'The FCA has made defined benefit transfer mis-selling a regulatory priority, and these cases have a strong track record.',
              'Contact us for a free initial review — time limits may apply, so do not delay.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Teachers Pension Scheme is a public sector defined benefit scheme that provides teachers with guaranteed, inflation-linked retirement income backed by the government. Advice to transfer out of it — into a SIPP or personal pension — is almost never in a teacher's best interests. If you received such advice and went on to transfer, you may have grounds for a substantial compensation claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For the overwhelming majority of teachers, advice to transfer out of the Teachers Pension Scheme was unsuitable. If you transferred and suffered a loss — or gave up guaranteed benefits — you may have a significant compensation claim. Contact us for a free review.</p>
            </div>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Priority Area</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA identified DB pension transfer mis-selling — including transfers from public sector schemes like the Teachers Pension — as a major consumer harm priority. Advisers recommending TPS transfers needed to demonstrate that a transfer was in the member's best interests — a test they could rarely satisfy. Many of the firms involved have since been investigated, fined or closed.</p>
              </div>
            </div>

            <h2>What the Teachers Pension Scheme Provides</h2>
            <p>The TPS is a public sector defined benefit scheme, meaning your pension income is guaranteed by the government and linked to your service and salary — not to investment performance. Understanding the value of what you gave up is central to any claim.</p>

            <div className="not-prose space-y-3 mb-8">
              {tpsBenefits.map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{b.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Why Transfer Advice Was Almost Always Unsuitable</h2>
            <p>FCA guidance on defined benefit transfers makes clear that, in most cases, staying in a DB scheme is in the best interests of the member. The guaranteed, inflation-protected income of the Teachers Pension Scheme is something a SIPP or personal pension cannot replicate.</p>
            <p>Advisers who recommended transfers were required by FCA rules to demonstrate positively that the transfer was in the client's best interests — including producing a Transfer Value Analysis (TVAS or TVC) comparing the scheme benefits with what the transfer value could achieve elsewhere. In most cases, this analysis showed clearly that a transfer was not in the teacher's interests. Where advisers recommended transfers anyway — often driven by the commission they received — they were in breach of their regulatory obligations.</p>

            <h2>Other Public Sector Pension Transfer Claims</h2>
            <p>If you were advised to transfer out of another public sector defined benefit scheme — NHS pension, civil service pension, police or firefighters' pension, local government pension — the same principles apply. See our dedicated guide for <Link href="/nhs-pension-transfer-claims/" className="text-[#1e3a5f] underline">NHS pension transfer claims</Link> or contact us to discuss your specific scheme.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-[#c9a84c]" />
                <h3 className="font-semibold text-sm">Free Initial Review</h3>
              </div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your Teachers Pension? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'Can I Claim If Retired?', href: '/can-i-claim-if-i-am-already-retired/' },
                  { label: 'DB Redress Calculation', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not delay. Time limits vary by route and may affect your ability to claim. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
