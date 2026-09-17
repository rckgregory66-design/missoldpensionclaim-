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
  title: 'Already Used a Claims Management Company? | Can I Switch to a Solicitor?',
  description: 'Used a CMC for your pension mis-selling claim but unhappy with progress? You may be able to switch to a solicitor. Find out your rights and options.',
  alternates: { canonical: '/what-if-i-already-used-a-claims-management-company/' },
}

const faqs = [
  { q: 'Can I switch from a claims management company to a solicitor?', a: 'In many cases, yes — but you need to check your existing contract with the CMC carefully. Most CMC contracts include a termination clause, and some include a fee payable if you cancel (which may be capped under FCA rules). If your CMC has done little or no work on your claim, and the contract allows termination, you may be able to switch. A solicitor can advise you on the termination process and whether there are any liability issues before you switch.' },
  { q: 'What is a claims management company (CMC)?', a: 'A claims management company is a business that handles claims on your behalf — similar in some ways to a solicitor, but not a law firm. CMCs can handle certain types of claim (including financial mis-selling claims) but cannot issue court proceedings or provide legal advice in the same way a regulated solicitor can. All CMCs must be authorised by the FCA, though the quality of service varies significantly.' },
  { q: 'What is the difference between a CMC and a solicitor for pension claims?', a: 'Both can submit FOS complaints and handle the claims process up to a point. Key differences: solicitors are legally qualified and regulated by the SRA; they can issue court proceedings if needed; they carry professional indemnity insurance; they are subject to strict professional conduct rules; and they can advise on legal strategy, limitation periods, and complex legal issues in a way a CMC cannot. For large or complex pension claims, a solicitor is generally more appropriate.' },
  { q: 'What if my CMC has already submitted a complaint — can I still switch?', a: 'If a complaint has already been submitted to the firm or referred to the FOS, the situation is more complex. You may be able to change representation mid-process, but the FOS will need to be informed and the CMC may still have a fee entitlement for work done. We can advise you on the specific position in your case.' },
  { q: 'My CMC hasn\'t done anything for months — what are my rights?', a: 'CMCs are regulated by the FCA and must treat customers fairly. If your CMC has failed to update you, is not progressing your claim, or is not acting in your best interests, you have the right to complain to the CMC directly. If you are not satisfied with the CMC\'s response, you can complain to the FCA or the Financial Ombudsman Service (which now covers CMC complaints).' },
  { q: 'Can I still claim if a CMC already submitted a claim that was rejected?', a: 'Possibly. If the original claim was rejected and you are still within time limits, there may be scope to reconsider the approach, resubmit with better evidence, or explore a different route (e.g. legal action rather than FOS). A solicitor can review the rejected claim, identify whether the grounds were properly presented, and advise whether any further action is available.' },
  { q: 'What fees does a CMC charge compared to a solicitor?', a: 'CMC fees and solicitor fees are both typically charged on a no win, no fee basis as a percentage of compensation recovered. For FCA-regulated claims, there are limits on what a CMC can charge. Solicitors are regulated by the SRA and must also comply with FCA rules in this context. The key difference is not the fee structure but the level of legal expertise, accountability, and the ability to pursue court proceedings if needed.' },
]

export default function AlreadyUsedCMCPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Already Used a Claims Management Company?', item: '/what-if-i-already-used-a-claims-management-company/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Already Used a Claims Management Company?" description={metadata.description as string} url="/what-if-i-already-used-a-claims-management-company/" />
      <ArticleSchema title="Already Used a Claims Management Company?" description={metadata.description as string} url="/what-if-i-already-used-a-claims-management-company/" />
      <Breadcrumb crumbs={[{ label: 'Already Used a CMC?' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Already Used a Claims Management Company? What Are Your Options?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Using a CMC does not prevent you switching to a solicitor — check your contract for termination rights and any fee obligations.',
              'Solicitors are legally qualified and can issue court proceedings, provide legal advice, and handle complex cases in a way a CMC cannot.',
              'If a CMC is not progressing your claim, you can complain to the CMC, then to the FOS, which now covers CMC complaints.',
              'A rejected CMC claim does not necessarily mean your case is over — a solicitor can review whether the grounds were properly presented.',
              'For large DB transfer, SIPP, or public sector pension claims, solicitor-led representation typically delivers better outcomes.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Many people first approach a claims management company (CMC) about a pension mis-selling claim, only to find the process is slower or less satisfying than expected. If you are unhappy with your CMC's progress, or simply want a second opinion, you may have more options than you realise — including switching to a solicitor.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Using a CMC first doesn't close off your options. Check your contract for termination rights, and contact us for a free assessment — we can advise on whether and how to switch, without obligation.</p>
            </div>
            <h2>CMC vs Solicitor — What's the Difference?</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Factor</th>
                    <th className="text-left p-3 font-semibold">CMC</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Solicitor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Regulated by', cmc: 'FCA', sol: 'SRA (and FCA for claims work)' },
                    { factor: 'Can issue court proceedings', cmc: 'No', sol: 'Yes' },
                    { factor: 'Can provide legal advice', cmc: 'No', sol: 'Yes' },
                    { factor: 'Professional indemnity', cmc: 'Required by FCA rules', sol: 'Required by SRA' },
                    { factor: 'Can advise on limitation', cmc: 'No', sol: 'Yes' },
                    { factor: 'Can pursue complex claims', cmc: 'Limited', sol: 'Yes — including Court of Appeal, Supreme Court cases' },
                  ].map((r, i) => (
                    <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.factor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.cmc}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.sol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>See also our full guide on <Link href="/compare/solicitor-vs-direct-claim/" className="text-[#1e3a5f] underline">solicitor vs direct claim</Link>.</p>
            <h2>Signs You Should Consider Switching</h2>
            <div className="not-prose space-y-2 mb-8">
              {[
                'Your CMC has not provided a meaningful update in several months',
                'Your CMC cannot tell you the current status of your FOS case',
                'You have been asked to sign documents you don\'t fully understand',
                'Your CMC cannot advise you on time limits or legal strategy',
                'The claim was rejected and your CMC has not explained next steps',
                'Your potential compensation is large enough to warrant solicitor-level expertise',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-amber-50 rounded-lg p-3 border border-amber-100">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Review of Your Existing Claim</h3>
              <p className="text-gray-300 text-sm mb-5">We can review your case and advise on whether switching makes sense — no obligation, no pressure.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Solicitor vs Direct Claim', href: '/compare/solicitor-vs-direct-claim/' },
                  { label: 'No Win No Fee Percentage', href: '/no-win-no-fee-pension-claims-percentage/' },
                  { label: 'No Win No Fee Claims', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
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
