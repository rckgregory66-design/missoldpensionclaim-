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
  title: 'Police Pension Transfer Claims | Mis-Sold Pension Solicitors',
  description: 'Were you advised to transfer out of the Police Pension Scheme? Transferring from a police pension is almost always unsuitable advice. Free initial review.',
  alternates: { canonical: '/police-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the Police Pension Scheme?', a: 'Yes. The Police Pension Scheme — whether the 1987 scheme, the 2006 scheme (CARE) or the 2015 scheme — provides guaranteed defined benefit income. Advice to transfer out into a SIPP or personal pension is almost always unsuitable. If you transferred and suffered a loss, you may have a significant compensation claim.' },
  { q: 'Which Police Pension Schemes are affected?', a: 'Three main schemes apply: the Police Pension Scheme 1987 (final salary, closed to new members); the New Police Pension Scheme 2006 (career average); and the Police Pension Scheme 2015 (career average). All are defined benefit arrangements providing guaranteed income. Transfers out of any of these into a defined contribution arrangement are almost always unsuitable.' },
  { q: 'What benefits does the Police Pension Scheme provide?', a: 'Police pension benefits include: a guaranteed pension linked to service and earnings; early retirement provisions if forced to retire through ill-health in the line of duty; a spouse\'s or partner\'s pension on death; lump sum death-in-service benefits; and injury awards where injuries are sustained on duty. These are extremely valuable benefits that cannot be replicated commercially.' },
  { q: 'How much compensation can I get for a police pension transfer claim?', a: 'Compensation is calculated by comparing the guaranteed benefits given up — modelled as the cost of replicating those benefits commercially — against the current value of the fund you transferred into. Because police pension benefits include early retirement and injury provisions that are particularly expensive to replicate, the gap can be very large.' },
  { q: 'Is there a time limit for a police pension transfer claim?', a: 'Yes. Time limits apply depending on the route. The clock may run from when you knew or should have known the advice was unsuitable, which can be later than the transfer date. Do not assume you are out of time without taking legal advice.' },
  { q: 'What if the advisory firm has since failed?', a: 'If the firm that gave the advice has since failed and was FCA-authorised, you may be able to claim through the FSCS. Many firms involved in DB pension transfer mis-selling have since closed. We can check the firm\'s status and advise on the appropriate route.' },
  { q: 'Can I claim if I have already retired from the police?', a: 'Yes. Being retired does not prevent a claim. For retired officers who transferred out, the loss can often be demonstrated clearly by comparing what you actually receive with what you would have received from the Police Pension Scheme. See our guide on claiming if already retired.' },
]

const benefits = [
  { label: 'Guaranteed income for life', desc: 'Based on service and pensionable pay — payable regardless of market conditions.' },
  { label: 'Early retirement provisions', desc: 'Enhanced benefits for officers forced to retire through injury or ill-health on duty.' },
  { label: 'Injury award', desc: 'Additional ongoing award where injury was sustained on duty and impairs earning capacity.' },
  { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse, civil partner or eligible partner.' },
  { label: 'Death-in-service lump sum', desc: 'Lump sum for dependants if you die while serving.' },
  { label: 'Government-backed', desc: 'No investment risk — your retirement income is not dependent on investment markets.' },
]

export default function PolicePensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Police Pension Transfer Claims', item: '/police-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Police Pension Transfer Claims" description={metadata.description as string} url="/police-pension-transfer-claims/" />
      <ArticleSchema title="Police Pension Transfer Claims" description={metadata.description as string} url="/police-pension-transfer-claims/" />
      <Breadcrumb crumbs={[{ label: 'Police Pension Transfer Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Police Pension Transfer Claims — Were You Advised to Transfer Out of Your Police Pension?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Police pension schemes (1987, 2006 CARE, 2015) are defined benefit schemes — advice to transfer out is almost always unsuitable.',
              'Police pensions include unique benefits (early retirement, injury awards) that are particularly expensive to replicate commercially.',
              'Compensation is based on the gap between guaranteed benefits given up and the current fund value — often very substantial.',
              'If the adviser has since failed, FSCS claims may be available up to £85,000.',
              'Time limits apply — seek advice without delay.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Police Pension Scheme is one of the most comprehensive occupational pension schemes in the UK. It provides officers with guaranteed, index-linked income and unique protections for injury and ill-health. Advice to transfer out of it was almost always unsuitable. If you were advised to transfer and have suffered losses, you may have grounds for a significant claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For the overwhelming majority of police officers, advice to transfer out of the Police Pension Scheme was unsuitable. If you transferred and suffered a loss, you may have a significant compensation claim. Contact us for a free review.</p>
            </div>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Unique Benefits Make Transfers Especially Unjustifiable</p>
                <p className="text-sm text-red-700 leading-relaxed">Police pensions include protections that go beyond standard DB schemes — particularly injury awards and enhanced ill-health retirement provisions. These are specific to police service and simply cannot be replicated by any commercial pension product. Any adviser who recommended a transfer without properly accounting for these unique benefits failed to meet their obligations.</p>
              </div>
            </div>
            <h2>What the Police Pension Scheme Provides</h2>
            <div className="not-prose space-y-3 mb-8">
              {benefits.map(b => (
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
            <p>We also handle transfer claims from the <Link href="/nhs-pension-transfer-claims/" className="text-[#1e3a5f] underline">NHS</Link>, <Link href="/teachers-pension-transfer-claims/" className="text-[#1e3a5f] underline">Teachers</Link>, <Link href="/civil-service-pension-transfer-claims/" className="text-[#1e3a5f] underline">Civil Service</Link>, and <Link href="/local-government-pension-transfer-claims/" className="text-[#1e3a5f] underline">Local Government</Link> pension schemes.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3"><Shield size={16} className="text-[#c9a84c]" /><h3 className="font-semibold text-sm">Free Initial Review</h3></div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your police pension? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Teachers Pension Transfer Claims', href: '/teachers-pension-transfer-claims/' },
                  { label: 'Civil Service Pension Transfer Claims', href: '/civil-service-pension-transfer-claims/' },
                  { label: 'LGPS Transfer Claims', href: '/local-government-pension-transfer-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700"><Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
