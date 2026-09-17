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
  title: 'Pension Complaint Letter Template | What to Include and How to Write It',
  description: 'What to include in a pension mis-selling complaint letter to your adviser firm. A step-by-step guide — and why using a solicitor often produces better outcomes.',
  alternates: { canonical: '/pension-complaint-letter-template/' },
}

const faqs = [
  { q: 'Do I need to write a complaint letter before going to the FOS?', a: 'Yes. Before you can refer a complaint to the Financial Ombudsman Service, you must first complain directly to the firm that gave you the advice and allow them eight weeks to respond. If they do not respond within eight weeks, or if their response is unsatisfactory, you can then refer the matter to the FOS. The FOS will ask you to confirm you have complained to the firm first.' },
  { q: 'How long does the firm have to respond to my complaint?', a: 'Under FCA rules, the firm has eight weeks to provide a final response to a complaint. They should send you an acknowledgement promptly (usually within five days), and must issue their final response within eight weeks. If they have not done so by then, you can go to the FOS.' },
  { q: 'What if the firm no longer exists?', a: 'If the firm has failed and cannot respond to a complaint, the firm complaint route is not available. Instead, you should apply directly to the FSCS, which compensates eligible claimants where an FCA-authorised firm has been declared in default. You do not need to have complained to the firm first in order to make an FSCS claim. See our guide on how to make an FSCS pension claim.' },
  { q: 'Will writing the complaint letter myself affect my chances?', a: 'A complaint letter does not need to be written by a lawyer. However, the way a complaint is framed — what evidence is highlighted, which regulatory rules are cited, and how the loss is explained — can affect how the firm and later the FOS assess it. For complex claims (particularly DB transfers), professional advice on how to present the complaint can improve outcomes.' },
  { q: 'Can I use a template for a pension complaint letter?', a: 'A template can help structure your letter, but it needs to be completed with your specific facts, dates, amounts, and circumstances. A generic template sent without personalisation may result in the firm issuing a generic initial rejection. The more specific and evidenced your complaint, the harder it is for the firm to dismiss it without engaging with the substance.' },
  { q: 'What happens after I send the complaint letter?', a: 'The firm must acknowledge your complaint and then provide a final response within eight weeks. Their response may uphold your complaint and offer compensation, partially uphold it, or reject it. If rejected or you are unhappy with the offer, you can refer the matter to the FOS within six months of the final response. See our guide on what happens after a FOS referral.' },
  { q: 'Should I keep a record of my complaint?', a: 'Yes. Send the complaint letter by recorded post or email with a read receipt, and keep copies of all correspondence. Note the date the complaint was submitted — this is important because the six-month window to go to the FOS runs from the firm\'s final response.' },
]

const mustInclude = [
  { label: 'Your details', desc: 'Full name, address, contact telephone and email, and date of birth.' },
  { label: 'Account/policy references', desc: 'The pension plan or SIPP reference number, and any account numbers for the original pension you transferred from.' },
  { label: 'Name and address of the firm', desc: 'The full name of the firm you are complaining about, and their FCA reference number if known.' },
  { label: 'Dates', desc: 'Date of the advice, date of the pension transfer, and dates of any relevant meetings or correspondence.' },
  { label: 'What happened', desc: 'A clear, factual description of the advice you were given and the actions you took as a result.' },
  { label: 'Why it was unsuitable', desc: 'Why the advice was not in your best interests — your risk appetite, objectives, financial circumstances at the time.' },
  { label: 'The loss', desc: 'Your best estimate of the financial loss suffered — the value transferred in versus the current value, or the DB benefits given up.' },
  { label: 'What you want', desc: 'A clear statement of what you are asking for — typically compensation to put you in the position you would have been in had the advice not been given.' },
]

export default function PensionComplaintLetterPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Complaint Letter Template', item: '/pension-complaint-letter-template/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Complaint Letter Template" description={metadata.description as string} url="/pension-complaint-letter-template/" />
      <ArticleSchema title="Pension Complaint Letter Template" description={metadata.description as string} url="/pension-complaint-letter-template/" />

      <Breadcrumb crumbs={[{ label: 'Pension Complaint Letter Template' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Complaint Letter — What to Include and How to Write It</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Before going to the FOS, you must first complain to the firm — they have eight weeks to respond.',
              'Your complaint letter needs to include: your details, the dates of the advice and transfer, why it was unsuitable, and the loss suffered.',
              'A generic template letter is less effective than a personalised, evidence-backed complaint.',
              'For complex claims (especially DB transfers), professional help in drafting the complaint often improves outcomes.',
              'Keep records — the six-month window to go to the FOS runs from the firm\'s final response.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Before you can refer a pension mis-selling complaint to the Financial Ombudsman Service, you must complain directly to the firm that gave you the advice. This page explains what to include in your complaint letter and how to give your complaint the best chance of success.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A pension complaint letter to the firm is required before going to the FOS. It should be specific, factual, and evidence-backed — stating clearly what happened, why the advice was unsuitable, and what loss you have suffered. The firm has eight weeks to respond.</p>
            </div>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">If the Firm Has Failed — Skip This Step</p>
                <p className="text-sm text-gray-700 leading-relaxed">If the firm that gave you the advice is no longer trading and has been declared in default by the FSCS, you do not need to complain to the firm first. Apply directly to the FSCS instead. <Link href="/how-to-make-an-fscs-pension-claim/" className="text-[#1e3a5f] underline">See our FSCS claim guide.</Link></p>
              </div>
            </div>

            <h2>What Must Go in a Pension Complaint Letter</h2>
            <div className="not-prose space-y-3 mb-8">
              {mustInclude.map(item => (
                <div key={item.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <FileText size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0f2035] text-sm">{item.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>What Happens After You Submit the Complaint</h2>
            <p>Once the firm receives your complaint:</p>
            <ol>
              <li><strong>Acknowledgement</strong> — the firm must acknowledge your complaint promptly (typically within five business days).</li>
              <li><strong>Investigation</strong> — the firm's complaints team will review the advice given, the evidence, and the applicable regulatory rules.</li>
              <li><strong>Final response</strong> — within eight weeks, they must issue a final response. This may uphold the complaint (and offer compensation), partially uphold it, or reject it.</li>
              <li><strong>Next steps</strong> — if the response is unsatisfactory, or if eight weeks have passed without a final response, you can refer to the FOS within six months of the final response.</li>
            </ol>
            <p>See our guide on <Link href="/pension-claim-process/" className="text-[#1e3a5f] underline">the full pension claim process</Link>.</p>

            <h2>Tips for an Effective Complaint Letter</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                'Be specific — include exact dates, amounts, and quotes from documents where possible',
                'Attach supporting documents — suitability report, pension statements, transfer documents, correspondence',
                'Focus on the facts — avoid expressing general frustration; state clearly what happened and why it was wrong',
                'State the regulatory rule that was breached, if you know it (e.g. COBS 9 suitability requirements)',
                'State clearly what you are asking for — put you back in the position you would have been in',
                'Send by recorded post or email with delivery confirmation — keep copies of everything',
                'Note the date sent — the eight-week clock starts from when the firm receives the complaint',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Want Us to Handle Your Complaint?</h3>
              <p className="text-gray-300 text-sm mb-5">We can draft and submit your pension complaint on your behalf. Free initial review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Pension Claim Process', href: '/pension-claim-process/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'How to Make an FSCS Claim', href: '/how-to-make-an-fscs-pension-claim/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'Solicitor vs Direct Claim', href: '/compare/solicitor-vs-direct-claim/' },
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
