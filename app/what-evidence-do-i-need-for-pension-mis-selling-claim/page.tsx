import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle, FileText } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'What Evidence Do I Need for a Pension Mis-Selling Claim?',
  description: 'Find out what documents and evidence you need for a pension mis-selling claim — and what to do if you no longer have them. Solicitor-led guide.',
  alternates: { canonical: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
}

const faqs = [
  { q: 'What documents do I need for a pension mis-selling claim?', a: 'The most useful documents include: the suitability report or recommendation letter from your adviser, the pension transfer value analysis (TVAS), any correspondence with your adviser about the transfer, your original pension scheme documents (e.g. the defined benefit scheme booklet), and any new scheme documents (e.g. SIPP paperwork). You do not need all of these to start — we can advise on what is available and how to obtain missing documents.' },
  { q: 'What if I no longer have my pension documents?', a: 'This is very common. You may be able to obtain copies through a data subject access request (DSAR) to your former adviser or their successors, to the pension scheme administrator, or to the firm\'s appointed representatives. Where a firm has failed, the FSCS or the Financial Services Register may hold records. We can advise on how to request the documents relevant to your case.' },
  { q: 'Do I need a suitability report to make a claim?', a: 'A suitability report is helpful but not always essential. The absence of a suitability report — or one that is inadequate — can itself be evidence of a failing. If the adviser failed to provide one, or provided one that did not properly address your circumstances, that may support your claim.' },
  { q: 'What is a TVAS and why does it matter?', a: 'A Transfer Value Analysis (TVAS, now called a Transfer Value Comparator or TVC) is a document that FCA-regulated advisers are required to produce when advising on defined benefit pension transfers. It compares the guaranteed benefits in the scheme against the transfer value. An inadequate TVAS, or the failure to produce one at all, can be relevant evidence in a DB transfer claim.' },
  { q: 'Can I still claim without any documents at all?', a: 'It is possible to make an initial enquiry and begin the process even if you have no documents to hand. We will assess what information is available and how documents might be obtained. Claims can sometimes proceed with less documentation than claimants expect, particularly where records can be obtained from third parties.' },
]

const documentCategories = [
  {
    title: 'Adviser Documents',
    icon: FileText,
    items: [
      { label: 'Suitability report', desc: 'The written recommendation from your adviser explaining why the pension transfer or investment was suitable for you. Regulated advisers are required to provide this.' },
      { label: 'Client fact find or questionnaire', desc: 'Documents recording your personal and financial circumstances, investment objectives and attitude to risk at the time of the advice.' },
      { label: 'Transfer Value Analysis (TVAS/TVC)', desc: 'Required for defined benefit transfer advice — compares the transfer value against the scheme benefits.' },
      { label: 'Correspondence with your adviser', desc: 'Letters, emails or meeting notes from around the time the advice was given.' },
      { label: 'Fee disclosure or terms of business', desc: 'Documents showing what fees were charged and on what basis.' },
    ],
  },
  {
    title: 'Pension Scheme Documents',
    icon: FileText,
    items: [
      { label: 'Original scheme documents', desc: 'For defined benefit transfers, documents from your former employer\'s scheme showing your guaranteed benefits — annual statement, member handbook or benefit projection.' },
      { label: 'Transfer value letter', desc: 'The letter from the defined benefit scheme confirming the cash equivalent transfer value (CETV) offered to you.' },
      { label: 'New scheme documents', desc: 'Paperwork for the pension you transferred into — e.g. SIPP application, policy documents, investment choices.' },
      { label: 'Annual statements', desc: 'Statements showing the value of your pension before and after the transfer.' },
    ],
  },
  {
    title: 'Investment Documents',
    icon: FileText,
    items: [
      { label: 'Investment literature and marketing material', desc: 'Brochures, prospectuses or information memoranda for any investments your pension was placed into.' },
      { label: 'Portfolio or fund valuations', desc: 'Documents showing how your pension was invested and its value at various points.' },
      { label: 'Charges information', desc: 'Any document showing the charges applied to your pension or investment.' },
    ],
  },
]

export default function EvidencePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'What Evidence Do I Need?', item: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' }]} />
      <WebPageSchema title="What Evidence Do I Need for a Pension Mis-Selling Claim?" description={metadata.description as string} url="/what-evidence-do-i-need-for-pension-mis-selling-claim/" />
      <ArticleSchema title="What Evidence Do I Need for a Pension Mis-Selling Claim?" description={metadata.description as string} url="/what-evidence-do-i-need-for-pension-mis-selling-claim/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'What Evidence Do I Need?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Evidence Do I Need for a Pension Mis-Selling Claim?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The most useful documents are: suitability report, Transfer Value Analysis (for DB transfers), fact find, pension scheme correspondence, and any investment literature.',
              'You do not need to have all of these documents before you can start — we will advise on what is available and how to obtain what is missing.',
              'If you no longer have documents, a data subject access request (DSAR) to your former adviser can often recover them.',
              'The absence of a suitability report, or a poor one, is itself evidence of an adviser failing.',
              'Contact us for a free initial review — we will assess your case based on the information you have available.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">
              A question we hear regularly is: "I don&apos;t have any paperwork from when I transferred my pension — does that mean I can&apos;t claim?" The answer, in most cases, is no. Many claimants do not have their original documents to hand, and there are ways to obtain them. This guide explains what evidence is useful, what is not essential, and what to do if documents are missing.
            </p>

            <h2>Why Evidence Matters</h2>
            <p>Evidence helps establish two core elements of a mis-sold pension claim:</p>
            <ul>
              <li><strong>What advice you were given</strong> — was it suitable for your circumstances, investment objectives and attitude to risk?</li>
              <li><strong>What loss you have suffered</strong> — how does your current position compare to where you would have been had you received suitable advice?</li>
            </ul>
            <p>Strong evidence makes both of these easier to demonstrate. But the absence of documents can itself be significant — an adviser who failed to produce a suitability report, or produced an inadequate one, has fallen short of FCA requirements.</p>

            <h2>The Most Useful Documents</h2>

            {documentCategories.map(cat => (
              <div key={cat.title} className="not-prose mb-8">
                <h3 className="text-lg font-semibold text-[#0f2035] mb-4 flex items-center gap-2">
                  <FileText size={18} className="text-[#c9a84c]" /> {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.items.map(item => (
                    <div key={item.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200">
                      <p className="font-semibold text-[#0f2035] text-sm mb-1">{item.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <h2>What If I Do Not Have These Documents?</h2>
            <p>It is very common for claimants to have little or no paperwork from when their pension was transferred. Here is what you can do:</p>

            <h3>Make a Data Subject Access Request (DSAR)</h3>
            <p>Under UK data protection law, you have the right to request all personal data held about you by a firm or organisation. This includes your former financial adviser, their appointed representatives, or any successor firm. A DSAR must be responded to within one month and must include copies of relevant documents held about you.</p>
            <p>Where a firm has failed or been wound up, records may be held by an administrator or successor firm. The FCA Register may show who holds records for a dissolved firm.</p>

            <h3>Contact the Pension Scheme Administrator</h3>
            <p>Your original defined benefit scheme administrator may hold copies of transfer correspondence, benefit statements and the transfer value letter. These can help reconstruct what happened even if adviser documents are missing.</p>

            <h3>Check With the New Scheme</h3>
            <p>The SIPP provider or investment platform that received your pension will have records of the transfer and any investments made. You can request these under a DSAR.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-6 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">The Absence of Documents Can Support Your Claim</p>
                <p className="text-sm text-gray-700 leading-relaxed">FCA rules required regulated advisers to give clients a suitability report before or at the point of recommendation. If your adviser failed to do so, or the report they provided was inadequate, this itself may constitute a regulatory failing that supports your claim.</p>
              </div>
            </div>

            <h2>What You Do Not Need to Have</h2>
            <p>You do not need to have all of the above documents, or even most of them, before making an initial enquiry. Many claimants come to us with only a general recollection of what happened and a handful of documents. We assess what is available and advise on the most appropriate next steps.</p>
            <p>It is also not necessary to have a clear figure for your losses before you contact us. Quantifying losses is part of the claims process, not a precondition for starting it.</p>

            <h2>Start with a Free Review</h2>
            <p>The best first step is to contact us for a free, no-obligation initial review. Tell us what you remember about the advice you received, what happened to your pension, and what documents — if any — you have. We will take it from there.</p>

            <div className="not-prose mt-6">
              <div className="bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 mb-6">
                <p className="font-semibold text-[#0f2035] text-sm mb-3">Related Guides</p>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: 'Am I Eligible to Make a Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                    { label: 'Make a Claim', href: '/make-a-claim/' },
                    { label: 'Can I Claim If My Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                    { label: 'Time Limits for Pension Claims', href: '/time-limits-mis-sold-pension-claims/' },
                    { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  ].map(l => (
                    <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-5 text-white">
              <h3 className="font-semibold mb-3 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">Not sure what documents you have or whether you have a claim? Contact us for a free, no-obligation initial review. Bring whatever you have — we will work with it.</p>
              <Link href="/make-a-claim/" className="block w-full text-center bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Make a Claim
              </Link>
              <Link href="/contact/" className="block w-full text-center mt-2 border border-white/30 hover:bg-white/10 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Key Document Checklist</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'Suitability report from adviser',
                  'Transfer Value Analysis (TVAS/TVC)',
                  'Client fact find or questionnaire',
                  'DB scheme benefit statement',
                  'CETV (transfer value) letter',
                  'SIPP / new scheme documents',
                  'Adviser correspondence / emails',
                  'Investment literature or brochures',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-3">Don&apos;t have these? Contact us — we can help you obtain them.</p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
