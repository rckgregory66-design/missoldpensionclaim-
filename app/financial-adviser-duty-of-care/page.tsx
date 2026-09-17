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
  title: 'Financial Adviser Duty of Care | What Advisers Owe You by Law',
  description: 'UK financial advisers owe clients a strict duty of care under FCA rules. Understand what standards apply, what a breach looks like, and how to claim.',
  alternates: { canonical: '/financial-adviser-duty-of-care/' },
}

const faqs = [
  { q: 'What duty does a financial adviser owe me?', a: 'A regulated financial adviser owes you several overlapping duties. Under FCA Conduct of Business rules (COBS), they must: know your customer (gather full information on your financial situation, objectives, and risk tolerance); give advice that is suitable for you specifically; ensure you understand the risks; charge fairly and transparently; and act in your best interests. These are not optional guidelines — they are regulatory requirements, breach of which can give rise to a complaint or compensation claim.' },
  { q: 'What does "suitability" mean in the context of financial advice?', a: 'Suitability means that the advice must be appropriate for you specifically — given your financial situation, investment knowledge and experience, financial objectives, and risk tolerance. An investment that is suitable for one person may be entirely unsuitable for another. The suitability assessment is not a box-ticking exercise — it requires the adviser to understand your whole picture and recommend only what genuinely meets your needs. Unsuitable advice is a breach of the adviser\'s regulatory and legal duties.' },
  { q: 'What is the FCA Consumer Duty and how does it apply?', a: 'The FCA Consumer Duty (effective from July 2023) sets a higher standard of care, requiring firms to deliver "good outcomes" for customers rather than merely meeting minimum suitability rules. Under the Consumer Duty, firms must consider the real-world impact of their products and services — not just comply with technical rules. While the Consumer Duty applies prospectively, it reflects an ongoing regulatory tightening that has been underway for years.' },
  { q: 'Is there a legal duty of care as well as a regulatory duty?', a: 'Yes. A regulated financial adviser owes a duty of care in the law of negligence, in addition to regulatory obligations. Breach of FCA rules is not automatically a legal claim, but negligent advice that causes a financial loss can give rise to a claim in negligence at common law. Advisers are also bound by the terms of their engagement letters and any express representations made to the client.' },
  { q: 'What is the "know your customer" (KYC) rule?', a: 'The know your customer requirement (found in FCA COBS 9 and 9A) requires advisers to gather sufficient information about the client before giving advice. This includes: their financial situation (assets, income, liabilities); investment objectives; risk tolerance; investment knowledge and experience; and capacity for loss. Advice given without gathering adequate information is likely to be unsuitable — and the failure to gather information is itself a breach of regulatory duty.' },
  { q: 'What happens if an adviser breached their duty of care?', a: 'If an adviser breached their duty of care and you suffered a financial loss as a result, you may claim compensation. Routes include: complaining directly to the firm; referring to the Financial Ombudsman Service (FOS); making an FSCS claim (if the firm has since failed); or taking court proceedings. The appropriate route depends on the size of your loss, the firm\'s current status, and the complexity of the issues.' },
  { q: 'Can I claim even if I signed a suitability report agreeing to the advice?', a: 'Yes. A suitability report is a document the adviser produces explaining why they believe the advice is suitable for you. Signing it does not prevent a claim if the advice was in fact unsuitable — the adviser cannot discharge their legal obligations simply by getting a signature. What matters is whether the advice was actually suitable given the information available at the time, not whether you signed a document. See our guide on <a href="/what-is-a-suitability-report/">what a suitability report is</a>.' },
]

const duties = [
  { label: 'Know your customer (KYC)', desc: 'Must gather sufficient information on your financial situation, objectives, risk tolerance and knowledge before giving advice. FCA COBS 9/9A.' },
  { label: 'Suitability', desc: 'Advice must be suitable for you specifically — not just appropriate in general. Unsuitable advice is a regulatory breach.' },
  { label: 'Best interests', desc: 'Must act in your best interests, not in their own financial interest or that of the product provider.' },
  { label: 'Clear explanation of risks', desc: 'Must explain the nature and risks of the recommended product in a way you can understand.' },
  { label: 'Transparent charges', desc: 'Must disclose all fees and charges clearly — including any ongoing advice charges and any product charges.' },
  { label: 'Written suitability report', desc: 'For certain regulated advice (including pension transfers, DB transfers), a written suitability report is mandatory.' },
  { label: 'Ongoing review obligation', desc: 'Where an ongoing advice service is agreed and charged for, the adviser must actually provide that ongoing review.' },
]

export default function FinancialAdviserDutyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Financial Adviser Duty of Care', item: '/financial-adviser-duty-of-care/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Financial Adviser Duty of Care" description={metadata.description as string} url="/financial-adviser-duty-of-care/" />
      <ArticleSchema title="Financial Adviser Duty of Care" description={metadata.description as string} url="/financial-adviser-duty-of-care/" />
      <Breadcrumb crumbs={[{ label: 'Financial Adviser Duty of Care' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Financial Adviser Duty of Care — What Advisers Owe You Under UK Law</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'FCA-regulated advisers owe strict statutory and common law duties — including suitability, best interests, and transparent charging.',
              'Unsuitable advice is a regulatory breach, regardless of whether you signed a suitability report.',
              'The "know your customer" rule requires advisers to gather full information before advising — failure to do so is itself a breach.',
              'The FCA Consumer Duty (from July 2023) sets a higher bar — firms must deliver good outcomes, not merely tick boxes.',
              'Breach of duty that causes financial loss can give rise to FOS complaints, FSCS claims, or court proceedings.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Financial advisers in the UK are subject to some of the most demanding conduct standards in any regulated sector. These are not guidelines — they are legal and regulatory requirements, backed by enforcement powers and compensation schemes. Understanding what your adviser owed you is the starting point for understanding whether you have a claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">FCA-regulated advisers owe you duties of suitability, best interests, and transparent charging. Breach of those duties — causing you a financial loss — can give rise to a claim for compensation. Contact us for a free assessment of your case.</p>
            </div>
            <h2>Your Adviser's Key Duties Under FCA Rules</h2>
            <div className="not-prose space-y-3 mb-8">
              {duties.map(d => (
                <div key={d.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{d.label}</p><p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>What Constitutes a Breach?</h2>
            <p>Common breaches of financial adviser duties include:</p>
            <ul>
              <li>Recommending a pension transfer without proper analysis of the benefits being given up</li>
              <li>Advising a high-risk investment to a client with a documented low risk tolerance</li>
              <li>Charging ongoing adviser fees without providing any ongoing service</li>
              <li>Failing to explain the true cost of charges</li>
              <li>Recommending a product paying higher commission without it being in the client's best interests</li>
              <li>Relying on a client-signed suitability report that did not accurately reflect the client's circumstances</li>
            </ul>
            <p>See also our guides on <Link href="/pension-review-was-it-mis-selling/" className="text-[#1e3a5f] underline">whether your pension review was mis-selling</Link> and <Link href="/what-is-a-suitability-report/" className="text-[#1e3a5f] underline">what a suitability report is</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Think your adviser breached their duty of care? Contact us for a free assessment — no obligation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'Was My Pension Review Mis-Selling?', href: '/pension-review-was-it-mis-selling/' },
                  { label: 'How to Make a Complaint', href: '/pension-complaint-letter-template/' },
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
