import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle, FileText } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'What Is a Suitability Report? | Pension Advice Documentation Guide',
  description: 'A suitability report is required documentation from a regulated adviser explaining why their recommendation was suitable for you. Missing or poor ones support mis-selling claims.',
  alternates: { canonical: '/what-is-a-suitability-report/' },
}

const faqs = [
  { q: 'What is a suitability report?', a: 'A suitability report is a written document that a regulated financial adviser is required to give you before, or at the point of, making a personal recommendation. It must explain why the recommended pension, investment or transfer is suitable for you personally — taking into account your financial situation, investment objectives and attitude to risk. It is sometimes called a suitability letter or recommendation letter.' },
  { q: 'Was my adviser required to give me a suitability report?', a: 'Yes, if they were FCA-regulated and provided you with a personal recommendation about a pension, investment or transfer. The requirement to produce a suitability report is set out in FCA rules (COBS 9). This has been a regulatory requirement for many years. If your adviser did not give you a suitability report, or gave you one after you had already agreed to proceed, they may have failed to comply with their regulatory obligations.' },
  { q: 'What should a suitability report contain?', a: 'A suitability report must explain: why the recommendation meets your needs, objectives and risk tolerance; the costs and charges involved; the risks associated with the recommended product or transfer; what you would give up by proceeding (particularly for defined benefit transfers); and any disadvantages the adviser is aware of. For pension transfer advice, a Transfer Value Analysis (or Transfer Value Comparator) must also be provided.' },
  { q: 'What if I never received a suitability report?', a: 'If your adviser failed to provide a suitability report at all, this is itself a regulatory breach — and it may support a mis-selling claim. The absence of a suitability report means there is no record of the adviser explaining why their recommendation was suitable for you. You can request copies of all documents through a data subject access request. Even if the adviser has since closed, records may be held by a third party.' },
  { q: 'Can I still claim without a suitability report?', a: 'Yes. Claims can succeed without a suitability report. The absence of one may itself be evidence of a failing. You may be able to reconstruct what happened from other documents — correspondence, fact find notes, transfer documents — and from your own recollection. A solicitor can advise on how to build the strongest possible case with the documents available.' },
  { q: 'What is a Transfer Value Analysis (TVAS) and why does it matter?', a: 'A Transfer Value Analysis (TVAS) — now called a Transfer Value Comparator (TVC) — is a document that FCA rules require advisers to produce when advising on defined benefit pension transfers. It compares the guaranteed benefits in the defined benefit scheme against what the transfer value could achieve in a new arrangement. An inadequate TVAS, or the failure to produce one at all, is commonly cited in pension transfer mis-selling claims.' },
  { q: 'What is a fact find or client questionnaire?', a: 'A fact find (or client questionnaire) is a document that regulated advisers use to gather information about your personal circumstances, financial position, investment experience, objectives and attitude to risk. FCA rules require advisers to take reasonable steps to understand your circumstances before making a recommendation. If the fact find was not completed, was incomplete, or did not accurately reflect your situation, the advice may have been based on incorrect assumptions — which can support a claim.' },
]

const requiredContents = [
  { label: 'Why the advice is suitable for you', desc: 'The report must refer specifically to your personal circumstances — not a generic explanation of the product.' },
  { label: 'Your investment objectives and risk tolerance', desc: 'The recommendation must match your stated goals and your capacity and attitude to risk.' },
  { label: 'Costs and charges', desc: 'All charges — adviser fees, platform charges, product costs — must be disclosed.' },
  { label: 'Risks of the recommendation', desc: 'The risks of the recommended product or transfer must be clearly explained.' },
  { label: 'What you give up by proceeding', desc: 'For DB transfers, the guaranteed benefits you are giving up must be explained and compared with what the transfer value can offer.' },
  { label: 'Transfer Value Analysis (for DB transfers)', desc: 'A TVAS or TVC comparing the scheme benefits with the transfer value is required before any DB transfer recommendation can be made.' },
]

export default function SuitabilityReportPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'What Is a Suitability Report?', item: '/what-is-a-suitability-report/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="What Is a Suitability Report?" description={metadata.description as string} url="/what-is-a-suitability-report/" />
      <ArticleSchema title="What Is a Suitability Report?" description={metadata.description as string} url="/what-is-a-suitability-report/" />

      <Breadcrumb crumbs={[{ label: 'What Is a Suitability Report?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Is a Suitability Report? Pension Advice Documentation Explained</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A suitability report is a written document that FCA-regulated advisers are required to provide before making any personal recommendation — including pension transfers and SIPP advice.',
              'It must explain why the advice is suitable for you specifically, covering your circumstances, objectives, risk tolerance and the costs and risks involved.',
              'If you never received one, or received a poor one, that itself is evidence of an adviser failing FCA rules.',
              'For defined benefit transfer advice, a Transfer Value Analysis (TVAS or TVC) is also required.',
              'You can obtain copies through a data subject access request (DSAR) even if you no longer have them.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">When you received advice about your pension — whether to transfer to a SIPP, move into particular investments, or give up a final salary pension — the adviser was required by FCA rules to provide a suitability report. Understanding what it should have contained, and what happens when it is absent or inadequate, is important for anyone considering a pension mis-selling claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A suitability report is a written document from your adviser explaining why their recommendation was right for you. FCA rules required them to produce one. If you never received a suitability report, or it was inadequate, that may support your claim — even if you have no other documentation.</p>
            </div>

            <h2>What Is a Suitability Report?</h2>
            <p>A suitability report is a formal written document that FCA-regulated financial advisers are required to provide whenever they make a personal recommendation. The requirement is set out in the FCA's Conduct of Business Sourcebook (COBS 9).</p>
            <p>Its purpose is to demonstrate that the adviser understood your personal circumstances and that their recommendation was appropriate for you specifically — not just suitable in the abstract or for a hypothetical investor.</p>
            <p>It may also be called a suitability letter, recommendation letter, or advice report. Whatever name is used, the regulatory requirement and minimum content are the same.</p>

            <h2>What Must a Suitability Report Contain?</h2>
            <div className="not-prose space-y-3 mb-8">
              {requiredContents.map(item => (
                <div key={item.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <FileText size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{item.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Common Failures Found in Suitability Reports</h2>
            <p>In pension mis-selling cases, suitability reports — where they exist — frequently contain deficiencies that support a claim. Common failures include:</p>
            <ul>
              <li><strong>Generic content</strong> — the report uses standard template language rather than addressing the client's individual circumstances.</li>
              <li><strong>Inadequate risk assessment</strong> — the report does not accurately reflect the client's attitude to risk or capacity for loss.</li>
              <li><strong>Underplaying the value of scheme benefits</strong> — the defined benefit benefits given up are not properly quantified or explained.</li>
              <li><strong>Inadequate Transfer Value Analysis</strong> — the TVAS is missing, incomplete, or uses inappropriate assumptions.</li>
              <li><strong>No explanation of charges</strong> — the full cost of the recommended product is not disclosed.</li>
              <li><strong>Post-dated documents</strong> — the report was issued after the client had already agreed to proceed, in breach of the requirement to provide it before or at the point of recommendation.</li>
            </ul>

            <h2>What If You Never Received a Suitability Report?</h2>
            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-5 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Absence Can Support Your Claim</p>
                <p className="text-sm text-gray-700 leading-relaxed">If your adviser failed to give you a suitability report, this is itself a breach of FCA rules (COBS 9.4.1). In a claim, it means there is no contemporaneous evidence that the adviser assessed suitability before making their recommendation. This typically supports the claimant's case rather than undermining it.</p>
              </div>
            </div>
            <p>Many claimants do not have a suitability report because they were never given one, because they have lost it, or because the adviser's records have been lost following the firm's closure. In all these cases:</p>
            <ul>
              <li>You can make a <strong>data subject access request (DSAR)</strong> to the adviser or their successor to obtain copies of all records held about you.</li>
              <li>If the firm has closed, records may be held by an administrator, the firm's professional indemnity insurer, or the FSCS.</li>
              <li>Claims can and do succeed without a suitability report — other documents and your own recollection of events can support the case.</li>
            </ul>
            <p>See our guide on <Link href="/what-evidence-do-i-need-for-pension-mis-selling-claim/" className="text-[#1e3a5f] underline">what evidence you need for a pension mis-selling claim</Link> for more on how to obtain documents.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Concerned about your pension advice documentation? Contact us for a free initial review of your situation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
                  { label: 'The Claim Process', href: '/pension-claim-process/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">Key Documents in a Pension Claim</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'Suitability report / recommendation letter',
                  'Transfer Value Analysis (TVAS/TVC)',
                  'Client fact find / questionnaire',
                  'DB scheme benefit statement',
                  'SIPP / new scheme documents',
                  'Adviser correspondence',
                ].map(d => (
                  <li key={d} className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />{d}</li>
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
