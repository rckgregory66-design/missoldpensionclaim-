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
  title: 'Solicitor vs Direct Claim: Which Is Better for a Pension Claim?',
  description: 'Should you use a solicitor or go direct to FOS or FSCS for your pension claim? Honest comparison of costs, speed, complexity and outcomes. Solicitor guide.',
  alternates: { canonical: '/compare/solicitor-vs-direct-claim/' },
}

const faqs = [
  { q: 'Do I need a solicitor to make a pension mis-selling claim?', a: 'No — you can make a pension mis-selling complaint directly to the Financial Ombudsman Service (FOS) or claim directly from the FSCS without professional help. Both services are free to use and do not require legal representation. However, using a solicitor can add significant value in complex cases — particularly where a defined benefit transfer is involved, where the loss calculation is complex, or where you have claims against multiple parties.' },
  { q: 'How much does it cost to use a solicitor for a pension claim?', a: 'Many solicitors handle pension mis-selling claims on a no win no fee basis (conditional fee agreement). This means you pay nothing if the claim is unsuccessful, and the solicitor\'s fee — typically a percentage of the compensation recovered — is payable only if you succeed. If you instruct a solicitor on this basis, your financial exposure if the claim fails is zero (subject to the terms of the agreement).' },
  { q: 'What are the advantages of going directly to the FOS or FSCS?', a: 'The main advantage of going direct is cost — both the FOS and FSCS are free to use. For straightforward claims where the evidence is clear, the loss is easy to calculate, and the firm is still trading (FOS) or has failed (FSCS), going direct can be efficient. The FOS in particular handles a large volume of pension complaints and does not require complex legal submissions.' },
  { q: 'When does using a solicitor add most value for a pension claim?', a: 'A solicitor adds most value where: the claim involves a defined benefit transfer (where loss calculations follow the FCA\'s PS22/13 methodology and can be complex); the claim involves a SIPP operator as well as the adviser (requiring strategy across multiple parties); the FOS or FSCS initial decision is lower than the true loss and needs to be challenged; the loss exceeds the FOS £430,000 cap or the FSCS £85,000 limit; or where the adviser is still trading and litigation is the appropriate route.' },
  { q: 'Can I start by going direct and then instruct a solicitor later?', a: 'Yes. You can start a FOS complaint yourself and instruct a solicitor to take over at any point in the process — including if you receive an initial assessment or offer you want to challenge. Similarly, you can begin a FSCS claim yourself and take legal advice at any stage. Time limits still apply throughout, so do not allow the process to drift.' },
  { q: 'What is the FOS compensation cap and does it affect my claim?', a: 'The FOS can currently award compensation of up to £430,000 for complaints about acts or omissions on or after 1 April 2019. For older complaints, the limit is lower. If your loss exceeds the applicable FOS cap, you cannot recover the excess through the FOS — legal action would be the appropriate route for the excess. A solicitor can advise on whether your potential loss is likely to approach or exceed the cap.' },
  { q: 'Is the FOS decision binding?', a: 'If you accept an FOS final decision, it becomes binding on the firm. However, the firm is not bound until you accept. You can reject an FOS decision and pursue the matter through the courts instead — though you would then need to fund litigation. A solicitor can advise on whether an FOS decision is fair or whether it is worth challenging.' },
]

const rows = [
  { factor: 'Cost', solicitor: 'No win no fee (usually) — fee from compensation only', direct: 'Free' },
  { factor: 'Who handles the claim', solicitor: 'Qualified solicitor prepares and manages the file', direct: 'You prepare and submit everything yourself' },
  { factor: 'Loss calculation', solicitor: 'Solicitor calculates loss per FCA methodology (PS22/13)', direct: 'You calculate, or rely on FOS/FSCS to assess' },
  { factor: 'DB transfer claims', solicitor: 'Complex calculations handled professionally', direct: 'FOS/FSCS can assess, but you need to evidence the loss' },
  { factor: 'Multi-party claims', solicitor: 'Can pursue adviser and SIPP operator simultaneously', direct: 'Possible but more complex to coordinate yourself' },
  { factor: 'FOS cap', solicitor: 'Can advise on and pursue losses above the FOS cap via litigation', direct: 'FOS limited to £430,000 cap — no access to courts' },
  { factor: 'FSCS limit', solicitor: 'Can advise on strategy where loss exceeds £85,000', direct: 'FSCS limited to £85,000 per firm' },
  { factor: 'Challenging decisions', solicitor: 'Experienced at challenging FOS/FSCS decisions', direct: 'You challenge any decisions yourself' },
  { factor: 'Speed', solicitor: 'Similar to direct; FOS/FSCS timescales are driven by those bodies', direct: 'Direct applications can be submitted immediately' },
]

export default function SolicitorVsDirectPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Compare', item: '/compare/' },
        { name: 'Solicitor vs Direct Claim', item: '/compare/solicitor-vs-direct-claim/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Solicitor vs Direct Claim" description={metadata.description as string} url="/compare/solicitor-vs-direct-claim/" />
      <ArticleSchema title="Solicitor vs Direct Claim" description={metadata.description as string} url="/compare/solicitor-vs-direct-claim/" />

      <Breadcrumb crumbs={[{ label: 'Compare', href: '/compare/' }, { label: 'Solicitor vs Direct Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Solicitor vs Direct Claim — Which Route Is Better for a Pension Mis-Selling Claim?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'You can go direct to the FOS or FSCS for free — no solicitor required for straightforward claims.',
              'A solicitor (usually on no win no fee) adds most value for complex DB transfer claims, multi-party claims, or losses above the FOS cap or FSCS limit.',
              'The FOS cap is £430,000 (for complaints about acts after April 2019) — losses above this cannot be recovered through the FOS.',
              'The FSCS limit is £85,000 per failed firm — losses above this need other routes.',
              'You can start direct and bring in a solicitor at any point if needed.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">You do not need a solicitor to make a pension mis-selling claim. Both the FOS and FSCS are free to use without legal representation. But for complex claims — particularly defined benefit transfers, multi-party SIPP cases, or large losses — professional advice can add real value. Here is an honest comparison to help you decide.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">For straightforward claims, going direct to the FOS or FSCS is free and often effective. For DB transfers, large losses, or multi-party claims, a no win no fee solicitor can increase recovery and handle complexity. You can always start direct and add professional support later.</p>
            </div>

            <h2>Head-to-Head Comparison</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Factor</th>
                    <th className="text-left p-3 font-semibold">Solicitor</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Direct (FOS / FSCS)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.factor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.solicitor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.direct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When to Go Direct</h2>
            <div className="not-prose space-y-2 mb-6">
              {[
                'The claim involves a straightforward complaint about advice — unsuitable fund selection, undisclosed charges, or unsuitable risk',
                'The firm is still trading and FCA-authorised (FOS route)',
                'The firm has failed (FSCS route) and the loss is clearly within the £85,000 limit',
                'The claim involves a personal pension rather than a DB transfer',
                'You have the time and confidence to handle the correspondence yourself',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>When a Solicitor Adds Most Value</h2>
            <div className="not-prose space-y-2 mb-8">
              {[
                'The claim involves a defined benefit or final salary pension transfer — where the PS22/13 loss calculation is complex',
                'You have claims against both the adviser and a SIPP operator — requiring coordinated strategy',
                'The potential loss approaches or exceeds the FOS cap (£430,000) or the FSCS limit (£85,000)',
                'The FOS or FSCS has issued an initial decision that seems too low and you want to challenge it',
                'The adviser firm is still trading and litigation — not FOS — is the appropriate route',
                'You are unsure whether you are out of time and need legal advice on limitation',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>No Win No Fee — What It Means in Practice</h2>
            <p>Most pension mis-selling solicitors offer conditional fee agreements (no win no fee). Under these arrangements:</p>
            <ul>
              <li>You pay nothing if the claim is unsuccessful</li>
              <li>If the claim succeeds, the solicitor's fee — a percentage of the compensation recovered — is deducted from the award</li>
              <li>Your out-of-pocket risk if the claim fails is zero (subject to the specific terms of the agreement)</li>
            </ul>
            <p>No win no fee aligns the solicitor's incentives with yours — they are only paid if you recover compensation. See our full <Link href="/no-win-no-fee-pension-claims/" className="text-[#1e3a5f] underline">no win no fee guide</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Advice on Your Options</h3>
              <p className="text-gray-300 text-sm mb-5">Not sure which route is right for your claim? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'No Win No Fee Pension Claims', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'Compare: FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'Compare: FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
                  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
                  { label: 'Pension Claim Process', href: '/pension-claim-process/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">Key Caps at a Glance</h3>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /><span><strong>FOS cap:</strong> £430,000 (acts after 1 April 2019) — lower for earlier acts</span></div>
                <div className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /><span><strong>FSCS limit:</strong> £85,000 per eligible claimant per failed firm</span></div>
                <div className="flex items-start gap-2"><XCircle size={12} className="text-red-400 shrink-0 mt-0.5" /><span><strong>Excess above cap:</strong> not recoverable via FOS/FSCS — requires litigation</span></div>
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
