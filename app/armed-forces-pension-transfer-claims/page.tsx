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
  title: 'Armed Forces Pension Transfer Claims | Military Pension Mis-Selling',
  description: 'Were you advised to transfer out of the Armed Forces Pension Scheme? This is almost always unsuitable advice. Solicitor-led claims — free initial review.',
  alternates: { canonical: '/armed-forces-pension-transfer-claims/' },
}

const faqs = [
  { q: 'Can I claim if I was advised to transfer out of the Armed Forces Pension Scheme?', a: 'Yes. The Armed Forces Pension Scheme (AFPS) — whether the AFPS 1975, AFPS 2005, AFPS 2015, or the Reserve Forces arrangements — provides defined benefit income. Advice to transfer out into a SIPP or personal pension is almost always unsuitable. If you transferred and suffered a loss, you may have a significant compensation claim.' },
  { q: 'Which Armed Forces Pension Schemes are covered?', a: 'The main schemes include AFPS 1975 (closed, very generous final salary benefits), AFPS 2005 (career average, includes Early Departure Payment), and AFPS 2015 (career average, current scheme). Reserve Forces pension arrangements also exist. All provide guaranteed defined benefit income.' },
  { q: 'What is the Early Departure Payment (EDP) and why does it matter?', a: 'The Early Departure Payment is a preserved pension benefit available to service personnel who leave after a qualifying period but before pension age — providing a preserved pension that comes into payment earlier than a standard occupational pension. Advisers who recommended transfers from AFPS 2005 without properly accounting for EDP benefits gave advice that was almost certainly unsuitable.' },
  { q: 'What benefits does the Armed Forces Pension Scheme provide?', a: 'AFPS benefits include: a guaranteed pension based on service and pensionable pay; annual CPI increases; an immediate pension on medical discharge; a death-in-service attributable benefit; a spouse\'s or partner\'s pension; and, under AFPS 2005, an Early Departure Payment. These are unique to military service and cannot be replicated commercially.' },
  { q: 'Is there a time limit for an Armed Forces pension transfer claim?', a: 'Yes. Time limits apply depending on the route. The clock may run from when you knew or should have known the advice was unsuitable. Do not assume you are out of time without taking legal advice — we can advise on the specific limitation position in your case.' },
  { q: 'What if the advisory firm has since closed?', a: 'If the firm has since failed and was FCA-authorised, FSCS claims may be available up to £85,000. Many firms involved in DB pension transfer mis-selling have since closed. We can check the firm\'s current status as part of assessing your case.' },
  { q: 'Can veterans or former service personnel claim?', a: 'Yes. Claims are open to all former service personnel who were advised to transfer their AFPS pension — whether they left the armed forces recently or years ago. The date of knowledge principle means the time limit may not have started running until the loss became apparent.' },
]

export default function ArmedForcesPensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Armed Forces Pension Transfer Claims', item: '/armed-forces-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Armed Forces Pension Transfer Claims" description={metadata.description as string} url="/armed-forces-pension-transfer-claims/" />
      <ArticleSchema title="Armed Forces Pension Transfer Claims" description={metadata.description as string} url="/armed-forces-pension-transfer-claims/" />
      <Breadcrumb crumbs={[{ label: 'Armed Forces Pension Transfer Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Armed Forces Pension Transfer Claims — Were You Advised to Transfer Your Military Pension?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'All AFPS schemes (1975, 2005, 2015) are defined benefit — advice to transfer out is almost always unsuitable.',
              'Unique AFPS benefits — including EDP, medical discharge pension, and attributable death benefits — cannot be replicated commercially.',
              'If a transferred AFPS 2005 included an Early Departure Payment, the loss of that benefit is a key part of any compensation claim.',
              'If the adviser has failed, FSCS claims up to £85,000 may be available.',
              'Time limits apply — do not delay seeking advice.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Armed Forces Pension Scheme provides service personnel with guaranteed, government-backed retirement income and unique benefits that reflect the nature of military service. Advice to transfer out of an AFPS into a SIPP or personal pension was almost always unsuitable. If you were targeted by an adviser offering a free pension review and subsequently transferred, you may have a significant claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Advice to transfer out of the Armed Forces Pension Scheme was almost always unsuitable. If you transferred and suffered a loss, you may have a significant compensation claim. Contact us for a free review — time limits apply.</p>
            </div>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">EDP Benefits Were Often Overlooked</p>
                <p className="text-sm text-red-700 leading-relaxed">Many advisers who recommended transfers from AFPS 2005 failed to properly value or account for the Early Departure Payment benefit — an ongoing payment available to personnel leaving after a qualifying period. Ignoring or understating EDP was itself a failure of suitability assessment.</p>
              </div>
            </div>
            <h2>What the Armed Forces Pension Scheme Provides</h2>
            <div className="not-prose space-y-3 mb-8">
              {[
                { label: 'Guaranteed pension income', desc: 'Based on service and pensionable pay — payable for life.' },
                { label: 'Early Departure Payment (AFPS 2005)', desc: 'An ongoing payment for personnel leaving after qualifying service, before normal pension age.' },
                { label: 'Immediate pension on medical discharge', desc: 'Enhanced benefits for personnel medically discharged — including attributable benefits if discharge is service-related.' },
                { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse or partner.' },
                { label: 'Death-in-service attributable benefits', desc: 'Enhanced benefits for dependants if death is attributable to service.' },
                { label: 'Government-backed', desc: 'No investment risk — your income is not dependent on market performance.' },
              ].map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{b.label}</p><p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>Other Public Sector Pension Transfer Claims</h2>
            <p>We also handle claims for transfers from the <Link href="/police-pension-transfer-claims/" className="text-[#1e3a5f] underline">Police</Link>, <Link href="/nhs-pension-transfer-claims/" className="text-[#1e3a5f] underline">NHS</Link>, <Link href="/teachers-pension-transfer-claims/" className="text-[#1e3a5f] underline">Teachers</Link>, <Link href="/civil-service-pension-transfer-claims/" className="text-[#1e3a5f] underline">Civil Service</Link>, and <Link href="/local-government-pension-transfer-claims/" className="text-[#1e3a5f] underline">Local Government</Link> pension schemes.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3"><Shield size={16} className="text-[#c9a84c]" /><h3 className="font-semibold text-sm">Free Initial Review</h3></div>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your armed forces pension? Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Police Pension Transfer Claims', href: '/police-pension-transfer-claims/' },
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
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
