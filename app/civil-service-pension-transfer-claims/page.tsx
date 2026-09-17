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
  title: 'Civil Service Pension Transfer Claims | Mis-Sold Pension Solicitors',
  description: 'Were you advised to transfer out of the Civil Service Pension Scheme? This is almost always unsuitable. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/civil-service-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the Civil Service Pension Scheme?', a: 'Yes. The Civil Service Pension Scheme (CSPS) — whether the classic, classic plus, premium, nuvos or alpha arrangements — is a defined benefit scheme providing guaranteed, government-backed retirement income. Advice to transfer out of the CSPS into a SIPP or personal pension is almost always unsuitable. If you were advised to transfer and suffered a loss, you may have a significant claim for compensation.' },
  { q: 'Which sections of the Civil Service Pension Scheme are affected?', a: 'The CSPS has a number of sections — classic (final salary), classic plus, premium, nuvos (career average) and alpha (career average, the current section). All are defined benefit arrangements. Transfers out of any of these sections are almost always unsuitable advice, as each provides guaranteed benefits that are very expensive to replicate commercially.' },
  { q: 'How is compensation calculated for a CSPS transfer claim?', a: 'Compensation is calculated by comparing the guaranteed income and other benefits you gave up in the CSPS — modelled as the cost of replicating those benefits in the open market — against the current value of the fund you transferred into. Because CSPS benefits are index-linked and government-backed, the gap can be very substantial, often running into six figures.' },
  { q: 'Is there a time limit for a Civil Service pension transfer claim?', a: 'Yes. Time limits apply and vary depending on the route — FOS complaint, FSCS claim (if the adviser has failed), or legal proceedings. The time limit may run from when you knew or should have known the advice was unsuitable, which can be later than the transfer date. Do not assume you are out of time without getting specific legal advice.' },
  { q: 'What benefits does the Civil Service Pension Scheme provide?', a: 'CSPS benefits include: a guaranteed pension income based on salary and years of service (classic/premium/classic plus) or career-average earnings (nuvos/alpha); annual increases in line with CPI; a lump sum on retirement; a pension for your spouse or partner on death; ill-health retirement benefits; and death-in-service payments. These are government-backed and carry no investment risk.' },
  { q: 'What if the firm that gave me advice has since closed?', a: 'If the firm that advised you is no longer trading and was FCA-authorised, you may be able to claim through the FSCS. Many advisory firms involved in DB pension transfer mis-selling have since failed. We can check the firm\'s status and advise on the appropriate route, including FSCS claims. See our guide on claiming when an adviser has gone bust.' },
  { q: 'Can I claim if I have since retired from the civil service?', a: 'Yes. Being retired does not prevent a claim. For retired civil servants who transferred out of the CSPS before retiring, the loss can often be demonstrated clearly by comparing the pension you actually receive with what you would have received under the CSPS. See our guide on claiming if already retired.' },
]

const cspsBenefits = [
  { label: 'Guaranteed income', desc: 'Pension based on salary/career earnings and years of service — payable for life regardless of investment markets.' },
  { label: 'CPI index-linking', desc: 'Annual increases protecting your income\'s real value throughout retirement.' },
  { label: 'Lump sum on retirement', desc: 'An automatic tax-free lump sum on retiring in certain sections of the scheme.' },
  { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse, civil partner or eligible partner.' },
  { label: 'Ill-health retirement', desc: 'Enhanced benefits if you cannot continue working due to health.' },
  { label: 'Government-backed', desc: 'No investment risk — your income is not dependent on stock market performance.' },
]

export default function CivilServicePensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Civil Service Pension Transfer Claims', item: '/civil-service-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Civil Service Pension Transfer Claims" description={metadata.description as string} url="/civil-service-pension-transfer-claims/" />
      <ArticleSchema title="Civil Service Pension Transfer Claims" description={metadata.description as string} url="/civil-service-pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'Civil Service Pension Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Civil Service Pension Transfer Claims — Were You Advised to Transfer Out of the CSPS?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The Civil Service Pension Scheme provides guaranteed, index-linked, government-backed retirement income — advice to transfer out is almost always unsuitable.',
              'All sections of the scheme (classic, premium, nuvos, alpha) are defined benefit arrangements with valuable guaranteed benefits.',
              'Compensation is based on the gap between what you gave up and the current fund value — often very substantial.',
              'If the adviser has since failed, FSCS claims may be available up to £85,000.',
              'Time limits apply — do not delay in seeking advice.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Civil Service Pension Scheme is one of the most comprehensive public sector pension schemes in the UK, providing guaranteed, inflation-linked retirement income backed by the government. If you were advised to transfer out of it — into a SIPP or personal pension — that advice was almost certainly unsuitable, and you may have grounds for a significant compensation claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For the vast majority of civil servants, advice to transfer out of the CSPS was unsuitable. If you transferred and suffered a loss — or gave up guaranteed benefits — you may have a significant compensation claim. Contact us for a free review.</p>
            </div>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Regulatory Priority</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA identified defined benefit pension transfer mis-selling — including transfers from public sector schemes like the CSPS — as a major consumer harm. Advisers were required to demonstrate positively that a transfer was in the member's best interests. This was a test they could rarely satisfy for a CSPS member.</p>
              </div>
            </div>

            <h2>What the Civil Service Pension Scheme Provides</h2>
            <p>The CSPS is a public sector defined benefit scheme. Unlike private sector schemes that have largely moved to defined contribution arrangements, the CSPS continues to offer guaranteed benefits linked to service and earnings. These are extremely valuable and very expensive to replicate.</p>

            <div className="not-prose space-y-3 mb-8">
              {cspsBenefits.map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{b.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Why Advisers Recommended Transfers — and Why They Were Wrong</h2>
            <p>In the low-interest environment of the post-2008 period, CETVs (cash equivalent transfer values) from DB schemes rose to historically high levels. Advisers often cited large CETV multiples as a reason to transfer — presenting the high capital value as an opportunity. This framing was misleading: a high CETV simply reflects the cost of replicating the scheme's guaranteed benefits. It does not mean the transferred fund will generate equivalent income.</p>
            <p>Advisers who recommended transfers were required to produce a Transfer Value Analysis comparing the guaranteed benefits with projected returns from the transfer value. In most cases, this analysis showed that a transfer was not in the member's interests. Advisers who recommended transfers anyway — often driven by commission — were in breach of their obligations under FCA rules (COBS 19).</p>

            <p>See our guide on <Link href="/what-is-a-cash-equivalent-transfer-value/" className="text-[#1e3a5f] underline">what a CETV is and why a high CETV is not a reason to transfer</Link>.</p>

            <h2>Other Public Sector Pension Transfer Claims</h2>
            <p>If you were advised to transfer from the NHS pension, Teachers Pension, police or firefighters' pension, or local government pension, the same principles apply. We have dedicated guides for <Link href="/nhs-pension-transfer-claims/" className="text-[#1e3a5f] underline">NHS pension transfer claims</Link> and <Link href="/teachers-pension-transfer-claims/" className="text-[#1e3a5f] underline">Teachers Pension transfer claims</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-[#c9a84c]" />
                <h3 className="font-semibold text-sm">Free Initial Review</h3>
              </div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer out of the Civil Service Pension? Contact us for a free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Teachers Pension Transfer Claims', href: '/teachers-pension-transfer-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'Can I Claim If Retired?', href: '/can-i-claim-if-i-am-already-retired/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not delay. Time limits vary by route. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See the time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
