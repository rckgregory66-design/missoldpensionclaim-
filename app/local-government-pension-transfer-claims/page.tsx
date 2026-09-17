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
  title: 'Local Government Pension Transfer Claims | LGPS Mis-Selling Solicitors',
  description: 'Were you advised to transfer out of the LGPS? Transferring from a local government pension is almost always unsuitable advice. Free initial review.',
  alternates: { canonical: '/local-government-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the LGPS?', a: 'Yes. The Local Government Pension Scheme (LGPS) is a defined benefit pension providing guaranteed, inflation-linked income. Advice to transfer out of the LGPS into a SIPP or personal pension is almost always unsuitable. If you were advised to transfer and suffered a loss, you may have a significant compensation claim.' },
  { q: 'Who is covered by the Local Government Pension Scheme?', a: 'The LGPS covers a wide range of public sector employees — council workers, school support staff, NHS support workers, fire and rescue service staff, housing association employees, and many others employed by local authorities and associated bodies. It is one of the largest occupational pension schemes in the UK.' },
  { q: 'How much compensation can I claim for an LGPS transfer?', a: 'Compensation is calculated by comparing the guaranteed benefits you gave up in the LGPS — modelled as the cost of replicating those benefits commercially — against the current value of the fund you transferred into. Because LGPS benefits are index-linked and guaranteed, the gap can be very large, often running into six figures or more.' },
  { q: 'Is there a time limit for claiming against an LGPS transfer?', a: 'Yes. Time limits apply depending on the route — FOS complaint, FSCS claim, or legal proceedings. The clock may run from when you knew or should have known the advice was unsuitable, which can be later than the transfer date. Do not assume you are out of time without getting legal advice.' },
  { q: 'What benefits does the LGPS provide?', a: 'The LGPS provides: a guaranteed pension based on career-average earnings (for the 2014 scheme) or final salary (for earlier service); annual CPI increases; a lump sum on retirement; a pension for your spouse, civil partner or eligible partner on death; ill-health retirement benefits; and death-in-service cover. These are government-backed and carry no investment risk.' },
  { q: 'What if the adviser firm has since closed?', a: 'If the firm that advised you is no longer trading and was FCA-authorised, you may be able to claim through the FSCS up to £85,000. Many firms involved in DB transfer mis-selling have since failed. We can check the firm\'s status and advise on the best route for your case.' },
  { q: 'Can I claim if I have already left local government employment?', a: 'Yes. Leaving your employer — whether through redundancy, retirement, or a new job — does not prevent a claim for mis-sold pension transfer advice. What matters is whether the advice given at the time was unsuitable for your circumstances, and whether you suffered a loss as a result.' },
]

const lgpsBenefits = [
  { label: 'Career-average guaranteed income', desc: 'Based on your earnings throughout your career — payable for life.' },
  { label: 'CPI index-linking', desc: 'Annual increases to protect the real value of your pension.' },
  { label: 'Tax-free lump sum', desc: 'An optional lump sum on retirement.' },
  { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse or civil partner.' },
  { label: 'Ill-health retirement', desc: 'Enhanced benefits if health forces you to stop working.' },
  { label: 'Death-in-service cover', desc: 'Lump sum for dependants if you die while employed.' },
]

export default function LGPSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Local Government Pension Transfer Claims', item: '/local-government-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Local Government Pension Transfer Claims" description={metadata.description as string} url="/local-government-pension-transfer-claims/" />
      <ArticleSchema title="Local Government Pension Transfer Claims" description={metadata.description as string} url="/local-government-pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'Local Government Pension Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Local Government Pension Transfer Claims — Were You Advised to Transfer Out of the LGPS?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The LGPS is one of the UK\'s largest defined benefit pension schemes — advice to transfer out is almost always unsuitable.',
              'LGPS members include council workers, school support staff, housing association employees and many others across the public sector.',
              'Compensation is based on the value of guaranteed benefits given up versus the current fund value — often very substantial.',
              'If the adviser has since failed, FSCS claims may be available up to £85,000.',
              'Time limits apply — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Local Government Pension Scheme provides millions of public sector workers with guaranteed, inflation-linked retirement income backed by the government. Advice to transfer out of the LGPS into a SIPP or personal pension was almost always unsuitable. If you were advised to transfer and have suffered losses, you may have grounds for a significant claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Advice to transfer out of the LGPS was almost always unsuitable. If you transferred and suffered a loss, you may have a significant compensation claim. Contact us for a free review — time limits apply.</p>
            </div>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Priority Area</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA has identified DB pension transfer mis-selling — including transfers from public sector schemes like the LGPS — as a major consumer harm. Advisers were required to demonstrate that a transfer was in the member's best interests. For LGPS members, this test could rarely be satisfied.</p>
              </div>
            </div>

            <h2>What the LGPS Provides</h2>
            <div className="not-prose space-y-3 mb-8">
              {lgpsBenefits.map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{b.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Other Public Sector Pension Transfer Claims</h2>
            <p>The same principles apply to transfers from other public sector schemes. We have dedicated guides for <Link href="/nhs-pension-transfer-claims/" className="text-[#1e3a5f] underline">NHS pension transfer claims</Link>, <Link href="/teachers-pension-transfer-claims/" className="text-[#1e3a5f] underline">Teachers Pension transfer claims</Link>, and <Link href="/civil-service-pension-transfer-claims/" className="text-[#1e3a5f] underline">Civil Service Pension transfer claims</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-[#c9a84c]" />
                <h3 className="font-semibold text-sm">Free Initial Review</h3>
              </div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your LGPS pension? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Teachers Pension Transfer Claims', href: '/teachers-pension-transfer-claims/' },
                  { label: 'Civil Service Pension Transfer Claims', href: '/civil-service-pension-transfer-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not delay. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
