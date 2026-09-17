import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Pensions Ombudsman vs FOS: Which Handles Your Complaint?',
  description: 'The Pensions Ombudsman and the FOS handle different types of pension complaint. Find out which one applies to your mis-selling or administration claim.',
  alternates: { canonical: '/compare/pensions-ombudsman-vs-fos/' },
}

const faqs = [
  { q: 'What is the difference between the Pensions Ombudsman and the FOS?', a: 'The Pensions Ombudsman (TPO) handles complaints about pension scheme administration — errors in calculating benefits, delays, poor record-keeping, and similar issues with how a pension scheme is run. The Financial Ombudsman Service (FOS) handles complaints about financial advice and regulated financial services — including unsuitable pension transfer advice, mis-sold SIPPs, and complaints about financial advisers. For pension mis-selling claims, the FOS is almost always the correct route.' },
  { q: 'Which body should I go to for a pension mis-selling complaint?', a: 'If your complaint is about advice given to you by a financial adviser — for example, advice to transfer your pension into a SIPP or a high-risk investment — the FOS is the correct route. The FOS regulates financial advisers and can award compensation where advice was unsuitable. The Pensions Ombudsman does not handle complaints about financial advice.' },
  { q: 'Can the Pensions Ombudsman award compensation?', a: 'Yes, the Pensions Ombudsman can award financial compensation where a pension scheme has been maladministered — for example, where errors in benefit calculations have resulted in underpayment, or where unreasonable delays have caused financial loss. However, the TPO cannot award compensation for losses caused by unsuitable financial advice — that is the FOS\'s remit.' },
  { q: 'What if I have both an administration complaint and a mis-selling complaint?', a: 'It is possible to have complaints falling within both bodies\' jurisdiction — for example, a complaint about how the pension scheme handled a transfer request (TPO) and a separate complaint about the adviser who recommended the transfer (FOS). Both complaints can be pursued simultaneously through the respective bodies.' },
  { q: 'Is there a time limit for going to the Pensions Ombudsman?', a: 'The Pensions Ombudsman operates a three-year time limit from the date of the act or omission complained about, or from when you could reasonably have known about it. However, you must also have first complained to the pension scheme itself and allowed them a reasonable opportunity to respond, before going to the TPO.' },
  { q: 'What about the Pension Protection Fund Ombudsman?', a: 'The Pension Protection Fund Ombudsman (PPFO) handles complaints specifically about decisions made by the Pension Protection Fund (PPF) or the Financial Assistance Scheme (FAS). It is a separate and more specialist body. It is not relevant to most mis-selling or administration complaints.' },
  { q: 'What if I am not sure which body handles my complaint?', a: 'If you are unsure whether your complaint is about financial advice (FOS) or pension administration (Pensions Ombudsman), we can help you identify the right route. For most pension mis-selling claims involving unsuitable advice to transfer, the FOS is the starting point — and from there you can also consider the FSCS (if the firm has failed) or legal action.' },
]

const rows = [
  { factor: 'Type of complaint', tpo: 'Pension scheme maladministration', fos: 'Unsuitable financial advice; mis-sold products' },
  { factor: 'Who you complain about', tpo: 'Pension scheme trustees/administrators', fos: 'Financial advisers; SIPP operators' },
  { factor: 'Compensation for mis-selling', tpo: 'No — not within TPO jurisdiction', fos: 'Yes — up to £430,000 cap (post-April 2019)' },
  { factor: 'Compensation for admin errors', tpo: 'Yes — for maladministration loss', fos: 'Limited — primarily covers advice failures' },
  { factor: 'Time limit', tpo: '3 years from act/omission or knowledge', fos: '6 months from firm\'s final response' },
  { factor: 'Pre-requisite', tpo: 'Must complain to scheme first', fos: 'Must complain to firm first (8 weeks)' },
  { factor: 'Binding on firm?', tpo: 'Yes — if you accept the decision', fos: 'Yes — if you accept the decision' },
  { factor: 'Cost to complainant', tpo: 'Free', fos: 'Free' },
]

export default function PensionsOmbudsmansVsFOSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Compare', item: '/compare/' },
        { name: 'Pensions Ombudsman vs FOS', item: '/compare/pensions-ombudsman-vs-fos/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pensions Ombudsman vs FOS" description={metadata.description as string} url="/compare/pensions-ombudsman-vs-fos/" />
      <ArticleSchema title="Pensions Ombudsman vs FOS" description={metadata.description as string} url="/compare/pensions-ombudsman-vs-fos/" />

      <Breadcrumb crumbs={[{ label: 'Compare', href: '/compare/' }, { label: 'Pensions Ombudsman vs FOS' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pensions Ombudsman vs FOS — Which Handles Your Pension Complaint?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'The Pensions Ombudsman (TPO) handles complaints about pension administration — errors, delays, poor record-keeping by the scheme itself.',
              'The Financial Ombudsman Service (FOS) handles complaints about financial advice — unsuitable pension transfer advice, mis-sold SIPPs, adviser misconduct.',
              'For pension mis-selling claims, the FOS is almost always the correct route — not the Pensions Ombudsman.',
              'Both bodies are free to use, but you must complain to the firm/scheme first before going to either.',
              'It is possible to pursue complaints through both bodies simultaneously if you have separate grounds.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Two different ombudsman bodies handle pension complaints in the UK — the Pensions Ombudsman (TPO) and the Financial Ombudsman Service (FOS). They cover different types of complaint. Sending your complaint to the wrong body wastes time. Here is a clear guide to which applies to your situation.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you were given unsuitable advice to transfer your pension — by a financial adviser — go to the FOS. If your pension scheme made errors in calculating or paying your benefits, go to the Pensions Ombudsman. For mis-selling, the FOS is the right body.</p>
            </div>

            <h2>Head-to-Head Comparison</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Factor</th>
                    <th className="text-left p-3 font-semibold">Pensions Ombudsman (TPO)</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Financial Ombudsman (FOS)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.factor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.tpo}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.fos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Pension Mis-Selling — FOS Is the Right Route</h2>
            <p>If your complaint is that a financial adviser gave you unsuitable advice — to transfer your defined benefit pension, to invest in a high-risk SIPP, or to take any other action that caused you financial loss — the <strong>FOS</strong> is the correct starting point.</p>
            <p>The process is:</p>
            <ol>
              <li>Complain to the firm that gave you the advice (they have eight weeks to respond).</li>
              <li>If the response is unsatisfactory or eight weeks pass, refer to the FOS within six months of the final response.</li>
              <li>If the firm has failed, apply to the FSCS instead.</li>
            </ol>
            <p>See our guides on <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">FOS pension complaints</Link>, <Link href="/compare/fos-vs-fscs/" className="text-[#1e3a5f] underline">FOS vs FSCS</Link>, and <Link href="/pension-claim-process/" className="text-[#1e3a5f] underline">the full claims process</Link>.</p>

            <h2>Pension Administration Errors — Pensions Ombudsman</h2>
            <p>If your complaint is about how the pension scheme itself has been run — errors in your benefit calculation, delays in processing transfers, lost contributions, poor communication — the <strong>Pensions Ombudsman</strong> is the right body. You must first raise the complaint formally with the scheme's internal disputes resolution procedure (IDRP) before going to the TPO.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Not Sure Which Route Applies?</h3>
              <p className="text-gray-300 text-sm mb-5">We can assess your situation and advise on the right route for your complaint. Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Compare: FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
                  { label: 'Compare: FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'Pension Claim Process', href: '/pension-claim-process/' },
                  { label: 'Complaint Letter Guide', href: '/pension-complaint-letter-template/' },
                  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">In Brief</h3>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /><span><strong>Mis-selling / unsuitable advice</strong> → FOS</span></div>
                <div className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /><span><strong>Scheme administration errors</strong> → Pensions Ombudsman</span></div>
                <div className="flex items-start gap-2"><XCircle size={12} className="text-red-400 shrink-0 mt-0.5" /><span><strong>Pensions Ombudsman cannot award mis-selling compensation</strong></span></div>
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
