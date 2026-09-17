import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'FCA Rules on Pension Advice | COBS, PROD and Consumer Duty Explained',
  description: 'What FCA rules govern pension advice in the UK? COBS 9, PROD, PS22/13 and the Consumer Duty set the standards — and breach of them can mean mis-selling.',
  alternates: { canonical: '/pension-advice-fca-rules/' },
}

const faqs = [
  { q: 'What FCA rules govern pension transfer advice?', a: 'Pension transfer advice — particularly advice on transferring defined benefit pension rights — is governed primarily by FCA COBS 19 (Conduct of Business Sourcebook, Chapter 19). COBS 19 sets detailed rules on: when advice must be given; the content and scope of the suitability assessment; the requirement for a Transfer Value Comparator (TVC) and a Transfer Value Analysis (TVAS); and the content of the suitability report. COBS 19 was substantially strengthened from 1 October 2018 onwards.' },
  { q: 'What is the FCA\'s Conduct of Business Sourcebook (COBS)?', a: 'The Conduct of Business Sourcebook (COBS) is the FCA\'s main rulebook for the conduct of investment business and financial advice. It covers: suitability of advice (COBS 9 and 9A); product information and disclosure; charges and commissions; communications with clients; and specific rules for pension transfer advice (COBS 19). Breach of COBS can give rise to regulatory enforcement and private rights of action.' },
  { q: 'What changed for pension transfer advice in October 2018?', a: 'From 1 October 2018, the FCA substantially strengthened the rules for defined benefit pension transfer advice under COBS 19. Key changes included: the introduction of the Transfer Value Comparator (TVC) — a standardised comparison tool; a strengthened "appropriate pension transfer analysis" requirement; and tighter guidance on when a transfer could ever be in a client\'s best interests. The FCA also issued Finalised Guidance (FG17/9) clarifying its expectations.' },
  { q: 'What is PS22/13 and why is it important?', a: 'PS22/13 is the FCA\'s Policy Statement on defined benefit pension transfer redress (August 2022). It sets the methodology for calculating compensation in DB transfer mis-selling cases — replacing the earlier approach. Under PS22/13, redress is calculated by comparing what the client\'s pension pot should have been worth (had they not transferred) against its actual current value, using standardised actuarial assumptions. This methodology applies to cases reviewed or settled after the implementation date.' },
  { q: 'What is the FCA Product Intervention rule (PROD) and how does it relate to pension advice?', a: 'The FCA\'s Product Governance rules (PROD) require firms manufacturing or distributing financial products to identify a target market and ensure the product is only sold to customers in that market. For pension products — particularly SIPPs and non-standard pension products — PROD means that firms should have had clear frameworks identifying who the products were suitable for. Where SIPPs were distributed to customers outside the target market, this is a PROD breach on top of any COBS suitability breach.' },
  { q: 'What is the FCA Consumer Duty and when does it apply?', a: 'The FCA Consumer Duty (effective 31 July 2023) imposes an overarching obligation on firms to deliver "good outcomes" for customers — going beyond mere technical compliance with specific rules. It applies to: new products and services from 31 July 2023; and existing products and services from 31 July 2024. The Consumer Duty does not apply retrospectively to historical advice — but it reflects the direction of travel and the standard the FCA now expects. Advisers giving advice after July 2023 are subject to the Consumer Duty.' },
  { q: 'Can I claim compensation for a breach of FCA rules?', a: 'Yes. Breach of FCA rules that causes you a financial loss can give rise to a private right of action under section 138D of the Financial Services and Markets Act 2000. This allows individuals (but not businesses) to sue directly for breach of FCA rules. Additionally, the FOS can award compensation for breach of FCA rules up to its cap, and the FSCS can compensate where the firm has failed.' },
]

const rules = [
  { label: 'COBS 9 / 9A — Suitability', desc: 'Core suitability rules requiring advisers to know their customer and give suitable advice based on individual circumstances.' },
  { label: 'COBS 19 — Pension Transfer Advice', desc: 'Specific rules for DB transfer advice: TVC, appropriate pension transfer analysis, suitability report requirements.' },
  { label: 'FG17/9 — FCA Finalised Guidance', desc: 'FCA guidance clarifying expectations for DB transfer advice — the "starting assumption" that transfer is unlikely to be suitable.' },
  { label: 'PS22/13 — DB Transfer Redress', desc: 'FCA policy statement setting the methodology for calculating redress in DB transfer mis-selling cases.' },
  { label: 'PROD — Product Governance', desc: 'Product governance rules requiring target market identification — relevant where SIPPs or non-standard products were sold outside their target market.' },
  { label: 'Consumer Duty (2023)', desc: 'Overarching duty to deliver good outcomes for customers — applies to advice given on or after 31 July 2023.' },
  { label: 'FSMA 2000 s.138D', desc: 'Provides a private right of action for individuals for losses caused by breach of FCA rules.' },
]

export default function FCARulesPensionAdvicePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'FCA Rules on Pension Advice', item: '/pension-advice-fca-rules/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="FCA Rules on Pension Advice" description={metadata.description as string} url="/pension-advice-fca-rules/" />
      <ArticleSchema title="FCA Rules on Pension Advice" description={metadata.description as string} url="/pension-advice-fca-rules/" />
      <Breadcrumb crumbs={[{ label: 'FCA Rules on Pension Advice' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">FCA Rules on Pension Advice — COBS, PS22/13 and the Consumer Duty Explained</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'COBS 9/9A sets the core suitability rules for all financial advice — breach causes a private right of action under FSMA s.138D.',
              'COBS 19 governs DB pension transfer advice specifically — strengthened significantly from October 2018 (TVC, transfer analysis, suitability report).',
              'PS22/13 (August 2022) sets the current methodology for calculating DB transfer mis-selling compensation.',
              'The FCA\'s starting assumption is that a DB transfer is unlikely to be in the client\'s best interests.',
              'The Consumer Duty (July 2023) imposes an overarching obligation to deliver good outcomes — applying to advice given after that date.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">UK pension advisers are subject to a detailed regulatory framework under the FCA. Understanding which rules apply — and when they apply — is central to any pension mis-selling claim. The rules set the standard of care against which advice is assessed. Breach of those rules that causes a financial loss gives rise to a compensation claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">FCA rules set the standard of care for pension advisers. Breach of COBS, COBS 19, or PROD that causes financial loss gives rise to a claim under FSMA s.138D, via FOS, or through the FSCS. Contact us for a free assessment of whether the advice you received met the required standard.</p>
            </div>
            <h2>Key FCA Rules in Pension Advice Claims</h2>
            <div className="not-prose space-y-3 mb-8">
              {rules.map(r => (
                <div key={r.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{r.label}</p><p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>The FCA\'s Starting Assumption on DB Transfers</h2>
            <p>The FCA has made clear — in FG17/9 and in COBS 19 — that its starting assumption is that transferring out of a defined benefit pension is unlikely to be in the client's best interests. An adviser must be able to demonstrate positive reasons why a transfer is suitable, not simply fail to identify a reason why it is unsuitable. This places the burden firmly on the adviser — and means a generic or superficial analysis will not meet the required standard.</p>
            <p>See our guides on <Link href="/what-is-a-suitability-report/" className="text-[#1e3a5f] underline">what a suitability report should contain</Link>, <Link href="/pension-transfer-value-analysis/" className="text-[#1e3a5f] underline">transfer value analysis</Link>, and <Link href="/how-is-defined-benefit-pension-transfer-redress-calculated/" className="text-[#1e3a5f] underline">how DB transfer redress is calculated under PS22/13</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was the advice you received compliant with FCA rules? Contact us for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Financial Adviser Duty of Care', href: '/financial-adviser-duty-of-care/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'DB Transfer Redress (PS22/13)', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'Pension Transfer Value Analysis', href: '/pension-transfer-value-analysis/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
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
