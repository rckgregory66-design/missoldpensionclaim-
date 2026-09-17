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
  title: 'How to Make an FSCS Pension Claim | Step-by-Step Guide',
  description: 'Step-by-step guide to making an FSCS pension claim. What to prepare, how to apply, what the FSCS assesses, and how long it takes. Solicitor-assisted claims available.',
  alternates: { canonical: '/how-to-make-an-fscs-pension-claim/' },
}

const faqs = [
  { q: 'How do I make an FSCS pension claim?', a: 'You can make an FSCS pension claim by submitting an application to the FSCS directly via their website (fscs.org.uk), or by instructing a solicitor to do so on your behalf. The FSCS requires information about you, the failed firm, the advice you received, and the loss you have suffered. Using a solicitor can help ensure your claim is fully evidenced and correctly framed.' },
  { q: 'Does the firm have to have failed for me to claim from the FSCS?', a: 'Yes. The FSCS only compensates claimants where the firm that gave the advice was FCA-authorised and has since been declared in default — meaning it is unable to meet claims against it. If the firm is still trading, the FOS complaint route (rather than FSCS) is the appropriate first step.' },
  { q: 'How do I check if a firm has been declared in default by the FSCS?', a: 'You can search the FSCS website (fscs.org.uk) for firms that have been declared in default. The FSCS publishes a list of failed firms. You can also search the FCA register (register.fca.org.uk) to check a firm\'s current authorisation status. If a firm is shown as cancelled or no longer authorised, it may have failed.' },
  { q: 'What is the FSCS compensation limit for pension advice claims?', a: 'For claims relating to investment advice — including pension transfer advice — the FSCS compensation limit is £85,000 per person per firm. This limit applies per eligible claimant per failed firm, not per policy. If you have claims against multiple failed firms, you may be eligible for separate compensation from each. See our detailed guide on the FSCS compensation limit.' },
  { q: 'How long does an FSCS pension claim take?', a: 'Straightforward FSCS pension claims typically take between six and twelve months from submission to a decision. Complex cases, or those involving large numbers of claims against a single failed firm, can take longer. The FSCS will keep you updated on the progress of your claim.' },
  { q: 'Do I need a solicitor to make an FSCS pension claim?', a: 'You do not need a solicitor — you can apply to the FSCS directly for free. However, instructing a solicitor can help if your case is complex, if the evidence of loss needs careful preparation, or if the FSCS\'s initial assessment of your claim is lower than the actual loss. Some solicitors handle FSCS claims on a no win no fee basis. We can advise on whether professional help would benefit your case.' },
  { q: 'What happens if the FSCS offers less than my full loss?', a: 'The FSCS compensation limit is £85,000 per firm. If your actual loss exceeds this, the FSCS can only compensate up to the limit. For losses above £85,000 from a single failed firm, other routes — such as legal action against related parties, or claims against a SIPP operator — may be needed to recover the excess. A solicitor can advise on maximising recovery.' },
]

const steps = [
  { n: '1', title: 'Confirm the firm has failed', desc: 'Check the FSCS website or FCA register to confirm that the firm that advised you has been declared in default by the FSCS. The FSCS can only compensate where a firm has failed and cannot meet claims against it.' },
  { n: '2', title: 'Gather your evidence', desc: 'Collect all documents relating to the advice and your pension: suitability reports, pension correspondence, scheme benefit statements, transfer documents, and any other records. If you don\'t have documents, make a data subject access request (DSAR) to the firm\'s administrator or the FSCS itself.' },
  { n: '3', title: 'Calculate your loss', desc: 'Work out the difference between what your pension is now worth and what it would have been worth under a suitable investment (or still in your original scheme). For DB transfer claims, this requires comparing the guaranteed benefits given up against the current fund value.' },
  { n: '4', title: 'Submit your FSCS application', desc: 'Apply via fscs.org.uk or instruct a solicitor to apply on your behalf. You will need to provide details of the failed firm, the nature of the advice, the loss you have suffered, and supporting documentation.' },
  { n: '5', title: 'FSCS investigates your claim', desc: 'The FSCS will assess whether the firm\'s advice was unsuitable and whether it caused a loss. They may request further information. For pension transfer claims, their assessment follows the FCA\'s redress methodology.' },
  { n: '6', title: 'Receive the FSCS decision', desc: 'The FSCS will issue a decision on your claim. If upheld, compensation will be paid up to the £85,000 limit. If you disagree with the outcome, the FSCS has an internal complaints process and you can ultimately refer the matter to the Financial Ombudsman Service.' },
]

export default function FSCSHowToPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How to Make an FSCS Pension Claim', item: '/how-to-make-an-fscs-pension-claim/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="How to Make an FSCS Pension Claim" description={metadata.description as string} url="/how-to-make-an-fscs-pension-claim/" />
      <ArticleSchema title="How to Make an FSCS Pension Claim" description={metadata.description as string} url="/how-to-make-an-fscs-pension-claim/" />

      <Breadcrumb crumbs={[{ label: 'How to Make an FSCS Pension Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How to Make an FSCS Pension Claim — Step-by-Step Guide</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The FSCS compensates eligible claimants where an FCA-authorised firm has failed and cannot meet claims against it.',
              'You can apply directly to the FSCS online for free, or instruct a solicitor to do so on your behalf.',
              'The compensation limit for investment advice (including pension advice) is £85,000 per person per failed firm.',
              'Straightforward claims typically take 6–12 months; complex cases can take longer.',
              'If your loss exceeds £85,000, other routes may be needed to recover the excess.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If the firm that gave you unsuitable pension advice has since failed, the Financial Services Compensation Scheme (FSCS) may be able to compensate you. This page explains the process step by step — what to prepare, how to apply, what the FSCS assesses, and how long it takes.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">To make an FSCS pension claim: confirm the firm has been declared in default; gather evidence of the advice and your loss; apply via the FSCS website or through a solicitor. Compensation is up to £85,000 per failed firm. The process typically takes 6–12 months.</p>
            </div>

            <h2>Is the FSCS the Right Route for You?</h2>
            <p>The FSCS route is appropriate where:</p>
            <ul>
              <li>The firm that gave you the advice was <strong>FCA-authorised</strong> at the time of the advice, and</li>
              <li>That firm has since been <strong>declared in default</strong> by the FSCS — meaning it is insolvent or otherwise unable to meet claims.</li>
            </ul>
            <p>If the firm is still trading and FCA-authorised, the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">FOS complaint route</Link> is the appropriate first step. The FSCS is specifically for claims against failed firms.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Check the Firm's Status First</p>
                <p className="text-sm text-gray-700 leading-relaxed">Search for the firm on the FSCS website (fscs.org.uk) and the FCA register (register.fca.org.uk). If the firm is listed as declared in default by the FSCS, you can claim. If it is still registered with the FCA, use the FOS route first. If you are unsure, contact us and we can check for you.</p>
              </div>
            </div>

            <h2>Step-by-Step: Making Your FSCS Pension Claim</h2>
            <div className="not-prose space-y-3 mb-8">
              {steps.map(s => (
                <div key={s.n} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#0f2035] text-white text-xs font-bold flex items-center justify-center shrink-0">{s.n}</div>
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{s.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>The FSCS Compensation Limit</h2>
            <p>For investment advice claims — including pension transfer advice — the FSCS compensation limit is <strong>£85,000 per eligible claimant per failed firm</strong>. This means:</p>
            <ul>
              <li>If your loss from a single failed firm is £85,000 or less, the FSCS can compensate the full amount.</li>
              <li>If your loss exceeds £85,000, the FSCS can only pay up to the limit. The excess may need to be pursued through other routes (e.g. legal action against a SIPP operator or another party).</li>
              <li>If you have claims against multiple failed firms — for example, both the adviser and the SIPP operator — each claim is assessed separately up to the £85,000 limit per firm.</li>
            </ul>
            <Link href="/fscs-pension-compensation-limit/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Full guide to the FSCS compensation limit <ArrowRight size={12} />
            </Link>

            <h2>What Evidence Does the FSCS Need?</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                'Proof of identity (passport, driving licence)',
                'Details of the failed firm — name, FCA reference number if known',
                'Dates of the advice and the pension transfer',
                'Suitability report or recommendation letter (if you have it)',
                'Pension statements — original scheme and the SIPP/new pension',
                'Evidence of your loss — current fund value vs original scheme value',
                'Any correspondence with the adviser firm',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}</div>
              ))}
            </div>
            <p>If you do not have some of these documents, a data subject access request (DSAR) to the firm's administrator or liquidator can often recover records. The FSCS can also obtain some evidence directly. See our <Link href="/what-evidence-do-i-need-for-pension-mis-selling-claim/" className="text-[#1e3a5f] underline">evidence guide</Link> for more detail.</p>

            <h2>Should You Use a Solicitor for an FSCS Claim?</h2>
            <p>You can apply to the FSCS directly — the service is free and does not require legal representation. However, using a solicitor can be beneficial where:</p>
            <ul>
              <li>The claim involves a defined benefit transfer, where the loss calculation is complex</li>
              <li>The initial FSCS offer is below the actual loss and needs to be challenged</li>
              <li>You have claims against multiple parties (adviser and SIPP operator)</li>
              <li>You are unsure whether your loss exceeds the £85,000 limit and need a strategy for recovering the excess</li>
            </ul>
            <p>We handle FSCS pension claims and can advise on whether professional assistance is likely to add value in your specific case.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">FSCS Claim Assistance</h3>
              <p className="text-gray-300 text-sm mb-5">We can handle your FSCS pension claim or advise on whether you need professional help. Free initial review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
                  { label: 'Compare: FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
                  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
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
