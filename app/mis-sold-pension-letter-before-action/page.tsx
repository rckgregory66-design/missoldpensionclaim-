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
  title: 'Pension Mis-Selling Letter Before Action | Pre-Action Protocol Guide',
  description: 'What is a letter before action in a pension mis-selling claim? When is one needed, what must it contain, and how does it differ from an FOS complaint?',
  alternates: { canonical: '/mis-sold-pension-letter-before-action/' },
}

const faqs = [
  { q: 'What is a letter before action in a pension mis-selling claim?', a: 'A letter before action (LBA) — also called a pre-action letter or letter of claim — is a formal letter sent to the defendant (typically the advisory firm or SIPP operator) before court proceedings are issued. It sets out the claimant\'s case, the alleged breach of duty, the losses claimed, and invites the defendant to respond or settle. Under the Pre-Action Protocol for Professional Negligence, LBAs must comply with specific requirements regarding content and timing.' },
  { q: 'When is a letter before action needed instead of an FOS complaint?', a: 'An LBA is needed when the claim is to be pursued through court proceedings rather than (or in addition to) the FOS. Common scenarios include: the claim exceeds the FOS cap of £430,000; the FOS has rejected the complaint and you are pursuing legal action instead; the firm has disputed liability and you are escalating; or the limitation period is at risk of expiring and proceedings need to be issued promptly. An LBA is a step in the litigation process — it does not apply to FOS complaints.' },
  { q: 'What must a letter before action in a professional negligence claim include?', a: 'Under the Pre-Action Protocol for Professional Negligence, the letter of claim must include: the claimant\'s identity and details; a clear chronological summary of the facts; the allegations of breach of duty; the causal connection between the breach and the loss; an explanation of loss and damage; and the remedy sought. The defendant has a specified period to acknowledge and respond. Failure to comply with the protocol can have cost consequences in subsequent proceedings.' },
  { q: 'What is the Pre-Action Protocol for Professional Negligence?', a: 'The Pre-Action Protocol for Professional Negligence governs the pre-court steps in claims against professionals — including financial advisers and solicitors. It requires parties to exchange information and attempt resolution before proceedings. Key steps: preliminary notice of claim; full letter of claim; defendant\'s acknowledgement (21 days); defendant\'s letter of response (3 months from letter of claim); and a meeting if requested. The protocol is designed to promote early settlement and narrow the issues for trial.' },
  { q: 'Can I send a letter before action without a solicitor?', a: 'Technically yes, but it is not advisable for pension mis-selling claims. The Pre-Action Protocol has specific requirements, and a poorly drafted LBA can undermine your position, create admissions, or fail to preserve the full scope of your claim. For complex pension claims, a solicitor should draft the LBA to ensure it properly identifies all grounds, quantifies the loss correctly, and complies with procedural requirements.' },
  { q: 'Does sending a letter before action stop the limitation clock?', a: 'No. Sending an LBA does not stop the limitation period from running. Only issuing court proceedings stops the clock. An LBA typically precedes proceedings and should be sent with enough time remaining in the limitation period to allow the defendant to respond and for proceedings to be issued if settlement is not reached.' },
  { q: 'What happens if the defendant does not respond to a letter before action?', a: 'If the defendant fails to acknowledge or respond within the required periods, this is a breach of the Pre-Action Protocol. The court can impose cost sanctions on a party who fails to comply. A non-response may also indicate that proceedings are necessary — a solicitor will advise on the appropriate next steps, which may include issuing a claim form.' },
]

const lbaComponents = [
  { label: 'Claimant\'s identity and contact details', desc: 'Full name and address of the claimant and their representatives.' },
  { label: 'Chronological narrative', desc: 'Clear timeline of events — from the initial engagement with the adviser through to the transfer, investment, and the resulting loss.' },
  { label: 'Allegations of breach', desc: 'Specific breaches of FCA rules, common law duty of care, and/or contractual obligations.' },
  { label: 'Causation', desc: 'The link between each breach and the loss suffered — establishing that but for the breach, the loss would not have occurred.' },
  { label: 'Quantified loss', desc: 'An initial calculation of the loss, usually based on the difference between the guaranteed benefits foregone and the current fund value.' },
  { label: 'Supporting documents', desc: 'Key documents should be listed — suitability reports, transfer values, investment schedules.' },
  { label: 'Remedy sought', desc: 'Whether monetary compensation, specific performance, or other relief is requested.' },
]

export default function LetterBeforeActionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Mis-Selling Letter Before Action', item: '/mis-sold-pension-letter-before-action/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Mis-Selling Letter Before Action" description={metadata.description as string} url="/mis-sold-pension-letter-before-action/" />
      <ArticleSchema title="Pension Mis-Selling Letter Before Action" description={metadata.description as string} url="/mis-sold-pension-letter-before-action/" />
      <Breadcrumb crumbs={[{ label: 'Letter Before Action' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Mis-Selling Letter Before Action — Pre-Action Protocol Guide</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A letter before action (LBA) is a formal pre-court document required under the Pre-Action Protocol for Professional Negligence.',
              'It is needed when pursuing court proceedings — not for FOS complaints, which have their own complaint-letter process.',
              'An LBA must identify the breach, causation, and quantified loss — a poorly drafted LBA can damage your position.',
              'Sending an LBA does not stop the limitation clock — only issuing proceedings does.',
              'For complex pension claims (DB transfers, SIPP mis-selling), a solicitor should draft the LBA.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A letter before action is the formal step before court proceedings in a professional negligence claim — including pension mis-selling claims pursued via litigation. It is governed by the Pre-Action Protocol for Professional Negligence and must meet specific requirements. Understanding when one is needed — and what it must contain — is essential if you are considering legal action.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A letter before action is a step in litigation — it precedes court proceedings and must comply with the Pre-Action Protocol for Professional Negligence. For FOS complaints, see our <Link href="/pension-complaint-letter-template/" className="text-[#c9a84c] underline">complaint letter template guide</Link>. For court proceedings, contact us for specialist legal help.</p>
            </div>
            <h2>What a Letter Before Action Must Include</h2>
            <div className="not-prose space-y-3 mb-8">
              {lbaComponents.map(c => (
                <div key={c.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <FileText size={16} className="text-[#1e3a5f] shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{c.label}</p><p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>LBA vs FOS Complaint Letter</h2>
            <p>These are different documents for different routes. An FOS complaint letter is an informal complaint to the financial services ombudsman — no formal protocol governs it, and it does not require the same level of legal precision. An LBA is a pre-litigation document governed by a court protocol, with serious procedural consequences if done incorrectly. For most pension mis-selling claims, the FOS route is tried first; an LBA is sent when the claim value exceeds the FOS cap or the FOS has rejected the complaint. See our guides on the <Link href="/pension-ombudsman-complaint-process/" className="text-[#1e3a5f] underline">FOS complaint process</Link> and on <Link href="/compare/fos-vs-legal-action/" className="text-[#1e3a5f] underline">FOS vs legal action</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Legal Action for Pension Mis-Selling</h3>
              <p className="text-gray-300 text-sm mb-5">Considering litigation for a pension claim? We handle the full process — from LBA to trial. Contact us for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'Complaint Letter Template', href: '/pension-complaint-letter-template/' },
                  { label: 'FOS Complaint Process', href: '/pension-ombudsman-complaint-process/' },
                  { label: 'After FOS Rejection', href: '/what-happens-after-fos-rejects-my-pension-claim/' },
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
