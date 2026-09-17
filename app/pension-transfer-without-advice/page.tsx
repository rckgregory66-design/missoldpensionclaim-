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
  title: 'Pension Transfer Without Advice | Execution-Only Transfers Explained',
  description: 'Can you transfer a defined benefit pension without taking advice? The rules, the risks, and whether you can claim if a transfer-without-advice goes wrong.',
  alternates: { canonical: '/pension-transfer-without-advice/' },
}

const faqs = [
  { q: 'Can I transfer a defined benefit pension without taking advice?', a: 'For DB pensions with a transfer value of £30,000 or more, you are legally required to take regulated financial advice from a pension transfer specialist before proceeding. This requirement was introduced by the FCA in April 2015 and remains in force. Pension providers must check that advice has been received before allowing the transfer. For DB pensions with a transfer value below £30,000, financial advice is not a legal requirement — though it is still strongly recommended.' },
  { q: 'What is an execution-only pension transfer?', a: 'An execution-only transaction is one where you instruct a financial firm to carry out a transaction without taking their advice — you have made the decision yourself and are simply using them to execute it. For most pension transfers (including DC to DC transfers), execution-only is possible. For DB transfers above the £30,000 threshold, the mandatory advice requirement means execution-only is not permitted — regulated advice must first be taken and documented.' },
  { q: 'Can I claim if I was allowed to transfer my DB pension without advice?', a: 'If a pension provider or SIPP operator allowed a DB pension transfer above the £30,000 threshold to proceed without evidence that regulated advice had been taken, that itself is a regulatory breach. You may have claims against the scheme administrator for failing to follow mandatory advice requirements, and against the SIPP operator for permitting the transfer. This is separate from any claim against the adviser (or introducer) who facilitated the transfer.' },
  { q: 'What if I received advice but it was given by someone who was not authorised to advise on pension transfers?', a: 'Advice on pension transfers — particularly DB pension transfers — must be given by a firm holding the appropriate FCA authorisation. If "advice" was given by an unregulated introducer, a claims management company, or a firm without the relevant permissions, it does not count as regulated advice and does not satisfy the mandatory advice requirement. The transfer may have proceeded on the basis of a regulatory breach by all involved parties.' },
  { q: 'Can I claim if I transferred a DC pension without advice and it went badly?', a: 'For DC pension transfers, the mandatory advice requirement does not apply. However, if you received advice about the DC transfer — even from a firm you did not formally instruct as adviser — and that advice was unsuitable, you may have a claim. The boundary between advice and information can be blurred; if what was provided effectively amounted to a recommendation, the adviser owes you suitability obligations.' },
  { q: 'What is the role of the SIPP operator in accepting a DB transfer without proper advice evidence?', a: 'SIPP operators are required to take reasonable steps to ensure that the mandatory advice requirement has been met before accepting a DB transfer above the £30,000 threshold. If a SIPP operator accepted a transfer without adequate evidence of regulated advice — for example, relying on a certificate signed by an unregulated introducer — the operator may bear liability, in addition to any claim against the adviser. The case of Adams v Options UK Personal Pensions LLP [2021] is relevant to SIPP operator liability more broadly.' },
  { q: 'Is there a time limit for a claim relating to a transfer without advice?', a: 'Yes. The standard limitation principles apply. The clock runs from when you knew or should have known that you had a claim — which in advice cases may be later than the transfer date. Do not assume you are out of time without taking legal advice.' },
]

export default function PensionTransferWithoutAdvicePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Transfer Without Advice', item: '/pension-transfer-without-advice/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Transfer Without Advice" description={metadata.description as string} url="/pension-transfer-without-advice/" />
      <ArticleSchema title="Pension Transfer Without Advice" description={metadata.description as string} url="/pension-transfer-without-advice/" />
      <Breadcrumb crumbs={[{ label: 'Pension Transfer Without Advice' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Transfer Without Advice — Execution-Only Transfers and the Mandatory Advice Rule</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'DB pension transfers above £30,000 require regulated financial advice — the mandatory advice rule has applied since April 2015.',
              'Execution-only is not permitted for DB transfers above the threshold — advice must be taken and documented.',
              'Allowing a DB transfer to proceed without evidence of regulated advice is a regulatory breach by the scheme/SIPP operator.',
              '"Advice" given by unregulated introducers does not satisfy the mandatory advice requirement.',
              'SIPP operators can bear liability for accepting transfers without adequate advice evidence — see Adams v Options [2021].',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The mandatory advice requirement for DB pension transfers was designed specifically to protect pension savers from transferring valuable guaranteed benefits without professional guidance. Where that protection was circumvented — whether by the scheme, the SIPP operator, or the parties who facilitated the transfer — there may be significant claims available.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For DB transfers above £30,000, regulated advice is legally required. If your transfer proceeded without it — or with advice from an unregulated party — there may be claims against the scheme, the SIPP operator, and any facilitating intermediary. Contact us for a free assessment.</p>
            </div>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Unregulated "Advisers" Do Not Satisfy the Requirement</p>
                <p className="text-sm text-red-700 leading-relaxed">Many pension fraud schemes involved unregulated introducers producing documentation that appeared to show advice had been given. This does not satisfy the mandatory advice requirement. Regulated advice means advice given by an FCA-authorised firm with the appropriate pension transfer specialist permissions — nothing less.</p>
              </div>
            </div>
            <h2>DB Transfer Mandatory Advice — The Rule at a Glance</h2>
            <div className="not-prose space-y-2 mb-8">
              {[
                { label: 'DB pension transfer value ≥ £30,000', desc: 'Regulated financial advice from a pension transfer specialist is required — no exceptions.' },
                { label: 'DB pension transfer value < £30,000', desc: 'Advice not legally required, but strongly recommended. The provider may still recommend advice.' },
                { label: 'DC to DC pension transfer', desc: 'No mandatory advice requirement — but advice may still be advisable, and unsuitable advice remains claimable.' },
              ].map(r => (
                <div key={r.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{r.label}</p><p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p></div>
                </div>
              ))}
            </div>
            <p>See also our guide on <Link href="/what-is-a-suitability-report/" className="text-[#1e3a5f] underline">what a suitability report must contain</Link> and our guide to <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">DB transfer mis-selling claims</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Did your DB pension transfer proceed without proper regulated advice? Contact us for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Pension Scam Claims', href: '/pension-scam-claims/' },
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
