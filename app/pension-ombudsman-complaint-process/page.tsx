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
  title: 'Pension Ombudsman Complaint Process | Step-by-Step Guide 2025',
  description: 'How to make a pension complaint to the Financial Ombudsman Service or the Pensions Ombudsman. Step-by-step guide — time limits, what to expect, and how solicitors help.',
  alternates: { canonical: '/pension-ombudsman-complaint-process/' },
}

const faqs = [
  { q: 'Which ombudsman handles pension mis-selling complaints — the FOS or the Pensions Ombudsman?', a: 'The Financial Ombudsman Service (FOS) handles complaints about financial advice — including complaints that you were mis-advised to transfer your pension or invest in unsuitable products. The Pensions Ombudsman (TPO) handles complaints about scheme administration — for example, if your pension scheme applied your benefits incorrectly or made an administrative error. Most pension mis-selling complaints go to the FOS.' },
  { q: 'What are the steps in an FOS pension complaint?', a: 'Step 1: Complain to the firm first — you must give the firm a chance to respond. Step 2: Wait for the firm\'s Final Response Letter (FRL) — they have 8 weeks to respond. Step 3: If you are unhappy with the response (or they do not respond within 8 weeks), refer the complaint to the FOS. Step 4: The FOS assigns an adjudicator who reviews both sides. Step 5: The adjudicator issues a recommendation — either party can ask for an Ombudsman to review it. Step 6: If you accept the Ombudsman\'s final decision, it is legally binding on the firm.' },
  { q: 'How long does an FOS pension complaint take?', a: 'FOS pension complaints can take anywhere from several months to two or more years depending on complexity. The FOS has a very high caseload of pension mis-selling complaints. Simpler cases resolved by adjudicator recommendation can move more quickly; cases where either party contests the recommendation and an Ombudsman is required typically take longer. See our guide on how long pension claims take.' },
  { q: 'What is the FOS compensation cap?', a: 'The FOS can award up to £430,000 for complaints about acts or omissions after 1 April 2019. For older complaints, lower limits apply. If your loss exceeds £430,000, you should consider whether legal proceedings offer an appropriate additional route. The FOS cap is not the same as the FSCS limit — these are separate schemes.' },
  { q: 'What happens if the firm does not comply with an FOS decision?', a: 'If the firm accepts the FOS decision (or is bound by it) but does not pay, you can apply to a county court to enforce it as a court judgment. In practice, regulated firms rarely fail to comply with FOS decisions — failure to do so is a regulatory breach that the FCA can act on.' },
  { q: 'What is a Final Response Letter (FRL)?', a: 'A Final Response Letter is the firm\'s written response to your complaint — their definitive decision on whether they uphold your complaint and, if so, what redress they offer. Once you receive the FRL, you have six months to refer the complaint to the FOS if you are unhappy with the outcome. Keep this letter — it is the starting gun for the FOS referral period.' },
  { q: 'Should I use a solicitor for an FOS pension complaint?', a: 'You are not required to use a solicitor, but it can significantly improve the quality and strength of your complaint. Solicitors can analyse the original advice, identify all available grounds, gather expert evidence, and draft a detailed submission that addresses the relevant regulatory standards. For large or complex claims — particularly DB transfer or SIPP claims — solicitor-led representation often produces better outcomes. See our comparison of solicitor vs direct claim.' },
]

const steps = [
  { n: '1', title: 'Complain to the firm first', desc: 'Send a formal complaint letter to the firm that gave the advice. They have 8 weeks to respond with a Final Response Letter (FRL).' },
  { n: '2', title: 'Receive the Final Response Letter', desc: 'The firm\'s FRL sets out their position. If they uphold your complaint, they will offer redress. If not, or if you are unhappy with the offer, proceed to the FOS.' },
  { n: '3', title: 'Refer to the FOS within 6 months', desc: 'You have 6 months from the FRL to refer to the FOS. Refer promptly — missing this deadline can close the FOS route.' },
  { n: '4', title: 'FOS reviews the complaint', desc: 'An FOS adjudicator reviews both sides, may request further information, and issues a recommendation. This typically takes several months.' },
  { n: '5', title: 'Adjudicator recommendation', desc: 'The adjudicator recommends upholding or rejecting your complaint, and if upholding, sets a redress figure. Either party can ask for an Ombudsman review.' },
  { n: '6', title: 'Ombudsman\'s final decision', desc: 'An Ombudsman\'s final decision is legally binding on the firm if you accept it. You can still reject it and pursue legal action instead.' },
]

export default function PensionOmbudsmanProcessPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Ombudsman Complaint Process', item: '/pension-ombudsman-complaint-process/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Ombudsman Complaint Process" description={metadata.description as string} url="/pension-ombudsman-complaint-process/" />
      <ArticleSchema title="Pension Ombudsman Complaint Process" description={metadata.description as string} url="/pension-ombudsman-complaint-process/" />
      <Breadcrumb crumbs={[{ label: 'Pension Ombudsman Complaint Process' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Ombudsman Complaint Process — Step-by-Step Guide</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension mis-selling complaints go to the Financial Ombudsman Service (FOS) — not the Pensions Ombudsman, which handles scheme administration complaints.',
              'You must complain to the firm first; they have 8 weeks to respond with a Final Response Letter.',
              'You have 6 months from the FRL to refer to the FOS — missing this deadline can close the route.',
              'The FOS can award up to £430,000 for post-April 2019 acts; older limits apply to earlier complaints.',
              'For large or complex claims, solicitor-led representation typically produces better outcomes.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The Financial Ombudsman Service is the primary route for most pension mis-selling complaints in the UK. Understanding the process — and navigating it correctly — is critical to a successful outcome. Missing the 6-month referral deadline or failing to identify all grounds at the outset can significantly damage your claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Most pension mis-selling complaints go to the FOS. You must complain to the firm first, then refer to the FOS within 6 months of their Final Response Letter. We can manage the entire process — contact us for a free review.</p>
            </div>
            <h2>The 6-Step FOS Complaint Process</h2>
            <div className="not-prose space-y-3 mb-8">
              {steps.map(s => (
                <div key={s.n} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0f2035] text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</div>
                  <div><p className="font-semibold text-[#0f2035] text-sm">{s.title}</p><p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 text-sm mb-1">6-Month Deadline Is Strict</p>
                <p className="text-sm text-amber-700 leading-relaxed">You have exactly 6 months from the date of the Final Response Letter to refer to the FOS. The FOS can refuse to consider a complaint referred outside this window. Start the process promptly and keep a copy of all correspondence.</p>
              </div>
            </div>
            <p>For a comparison of the FOS and the Pensions Ombudsman, see our <Link href="/compare/pensions-ombudsman-vs-fos/" className="text-[#1e3a5f] underline">TPO vs FOS comparison guide</Link>. For guidance on what happens if the FOS rejects your complaint, see <Link href="/what-happens-after-fos-rejects-my-pension-claim/" className="text-[#1e3a5f] underline">what happens after FOS rejects my pension claim</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Solicitor-Led FOS Complaint</h3>
              <p className="text-gray-300 text-sm mb-5">We manage the entire FOS process — from complaint letter to final decision. Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'TPO vs FOS Comparison', href: '/compare/pensions-ombudsman-vs-fos/' },
                  { label: 'After FOS Rejects Your Claim', href: '/what-happens-after-fos-rejects-my-pension-claim/' },
                  { label: 'Complaint Letter Template', href: '/pension-complaint-letter-template/' },
                  { label: 'Solicitor vs Direct Claim', href: '/compare/solicitor-vs-direct-claim/' },
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
