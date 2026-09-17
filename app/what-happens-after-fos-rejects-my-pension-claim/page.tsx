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
  title: 'What Happens After FOS Rejects My Pension Claim? | Options Guide',
  description: 'FOS rejected your pension mis-selling complaint? You still have options — legal action, FSCS, or accepting the decision. Solicitor guide to your next steps.',
  alternates: { canonical: '/what-happens-after-fos-rejects-my-pension-claim/' },
}

const faqs = [
  { q: 'What happens if the FOS rejects my pension complaint?', a: 'A final decision by the Financial Ombudsman Service (FOS) is binding on the firm if you accept it — but it is not binding on you. If the ombudsman issues a final decision that rejects your complaint and you disagree with it, you are not required to accept it. You can consider whether to bring legal proceedings against the firm, even after a negative FOS outcome. However, this is a significant step and specialist legal advice is essential.' },
  { q: 'Can I go to court after the FOS rejects my complaint?', a: 'Yes. A negative FOS decision does not prevent you from bringing a court claim against the firm for the same subject matter. However, the court is not bound by the FOS decision and will make its own assessment of the facts and the law. A FOS rejection may be considered by a court, but it does not bar your claim. You should take legal advice promptly, as court time limits apply.' },
  { q: 'What if the FOS investigator upheld my complaint but the ombudsman disagreed?', a: 'The FOS process has two stages: an investigator\'s view and, if either side disagrees, a final decision from an ombudsman. If the investigator\'s view was in your favour but the ombudsman reversed it, this can feel particularly frustrating. A court is not bound by either finding. A specialist solicitor can assess whether the ombudsman\'s legal reasoning was sound and whether a court claim has merit.' },
  { q: 'Is there a time limit to bring a court claim after a FOS rejection?', a: 'Yes. Court claims are subject to limitation periods under the Limitation Act 1980 — typically six years from the date of the loss or breach, or three years from the date of knowledge, whichever expires later. Crucially, bringing a FOS complaint does not extend these court limitation periods — if you are near the end of the limitation period, you may need to issue court proceedings before the FOS process concludes. Seek advice immediately if time may be running out.' },
  { q: 'What if the ombudsman upheld my complaint but the firm refuses to comply?', a: 'If the ombudsman issued a final decision in your favour and you accepted it, that decision is legally binding on the firm. If the firm refuses to comply, you can apply to court to enforce the ombudsman\'s award. This is a different situation from challenging a rejection — enforcement of an accepted FOS award is straightforward in most cases. Contact us if you are in this position.' },
  { q: 'Does a FOS rejection affect an FSCS claim for the same loss?', a: 'If the firm has since failed, a prior FOS rejection of a complaint against that firm does not automatically bar an FSCS claim. The FSCS assesses claims independently. However, the FSCS will take account of all available evidence, and the reasoning in the FOS decision may be relevant to its assessment. We can advise on whether an FSCS claim remains viable after a FOS rejection.' },
  { q: 'Should I accept a FOS final decision rejecting my pension claim?', a: 'You do not have to accept a negative final decision. Before doing so, consider whether legal proceedings are worth pursuing — this depends on the strength of your case, the amount at stake, and the legal costs involved. We offer a free initial review and can give you an honest assessment of whether a court claim has realistic prospects.' },
]

const steps = [
  { n: '1', title: 'Review the decision carefully', desc: 'Read the ombudsman\'s final decision in full. Identify exactly which findings went against you and the legal basis for those findings. A decision that relies on incorrect factual findings or misapplied legal principles may be challengeable.' },
  { n: '2', title: 'Take specialist legal advice promptly', desc: 'Contact a solicitor with experience in pension mis-selling claims. They can assess whether the FOS reasoning was sound and whether court proceedings would have realistic prospects.' },
  { n: '3', title: 'Check limitation periods', desc: 'Court time limits may be running independently of the FOS process. If the court limitation period is approaching, you may need to issue proceedings to preserve your position even before deciding whether to pursue the case to trial.' },
  { n: '4', title: 'Consider whether the FSCS is available', desc: 'If the firm has since failed, explore whether an FSCS claim remains open. A FOS rejection against a firm that was still trading does not automatically close the FSCS route if the firm subsequently fails.' },
  { n: '5', title: 'Consider the economics', desc: 'Court proceedings cost money. A no win no fee arrangement may be available for strong cases. Weigh the potential compensation against the realistic costs and risks of litigation.' },
]

export default function FOSRejectionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'What Happens After FOS Rejects My Pension Claim?', item: '/what-happens-after-fos-rejects-my-pension-claim/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="What Happens After FOS Rejects My Pension Claim?" description={metadata.description as string} url="/what-happens-after-fos-rejects-my-pension-claim/" />
      <ArticleSchema title="What Happens After FOS Rejects My Pension Claim?" description={metadata.description as string} url="/what-happens-after-fos-rejects-my-pension-claim/" />

      <Breadcrumb crumbs={[{ label: 'After FOS Rejection' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Happens After the FOS Rejects My Pension Mis-Selling Complaint?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A negative FOS final decision is not binding on you — you can still bring a court claim against the firm for the same loss.',
              'Courts are not bound by FOS decisions and make their own independent assessment of the facts and law.',
              'Court time limits (typically 6 years from the loss or 3 from knowledge) run independently of the FOS process — act promptly.',
              'If the firm has since failed, an FSCS claim may still be available despite a prior FOS rejection.',
              'Take specialist legal advice before deciding whether to accept or challenge a negative FOS outcome.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A rejection by the Financial Ombudsman Service can feel like the end of the road for a pension mis-selling claim. It is not. A FOS final decision is binding on the firm — but only if you choose to accept it. If you do not accept it, you retain the right to bring court proceedings, and a court will make its own assessment entirely independently of what the FOS decided.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A FOS rejection does not bar a court claim. You have the right to reject the ombudsman's decision and pursue litigation. Courts make their own independent assessment. Time limits apply — take legal advice promptly before your options close.</p>
            </div>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Court Time Limits Run Independently of FOS</p>
                <p className="text-sm text-gray-700 leading-relaxed">The FOS process does not pause the clock on court limitation periods. If you are approaching the end of the limitation period for a court claim — typically six years from the loss — you may need to issue proceedings before the FOS process concludes, to preserve your right to litigate. If you are in this situation, seek advice immediately.</p>
              </div>
            </div>

            <h2>How the FOS Decision Works</h2>
            <p>The FOS process concludes with a final decision from an ombudsman. That decision:</p>
            <ul>
              <li>Is <strong>binding on the firm</strong> — if you accept it, the firm must comply.</li>
              <li>Is <strong>not binding on you</strong> — you can reject it without penalty and pursue other routes.</li>
              <li>Does <strong>not prevent a court claim</strong> — courts will consider the FOS reasoning but are not bound by it.</li>
              <li>Has a <strong>six-month acceptance deadline</strong> — you typically have six months from the date of the decision to accept it.</li>
            </ul>
            <p>If the decision rejected your complaint and you do not accept it, the FOS process ends and you retain the right to litigate.</p>

            <h2>Going to Court After a FOS Rejection</h2>
            <p>Bringing a court claim after a negative FOS decision is a serious step. It will typically be appropriate where:</p>
            <ul>
              <li>The amount at stake is substantial enough to justify the cost of litigation</li>
              <li>The ombudsman's decision appears to have made legal or factual errors</li>
              <li>New evidence has come to light since the FOS investigation</li>
              <li>A specialist solicitor assesses the claim as having realistic prospects</li>
            </ul>
            <p>Court proceedings in pension mis-selling cases can be complex and expensive. They are not appropriate in every case. A realistic assessment of costs, risks, and prospects is essential before committing to litigation.</p>

            <h2>Your Next Steps After a FOS Rejection</h2>
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

            <h2>FSCS Route After FOS Rejection</h2>
            <p>If the firm that gave you the advice has since failed — even after the FOS rejected your complaint when the firm was still trading — you should explore whether an FSCS claim is available. The FSCS assesses claims independently and a prior FOS rejection is not an automatic bar. The FSCS will, however, consider the reasoning in the FOS decision as part of its own assessment.</p>
            <p>See our guide to <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS pension claims</Link> and <Link href="/can-i-claim-if-adviser-has-gone-bust/" className="text-[#1e3a5f] underline">claiming when an adviser has gone bust</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Review After FOS Rejection</h3>
              <p className="text-gray-300 text-sm mb-5">FOS rejected your pension complaint? We can assess whether a court claim or FSCS route remains open. Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Claim If Adviser Has Gone Bust', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'Claim Process', href: '/pension-claim-process/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">Key Points</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'FOS rejection is not binding on you',
                  'Courts assess independently of FOS',
                  'Court time limits run alongside FOS',
                  'FSCS may still be available if firm failed',
                  'Take legal advice before accepting or rejecting',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
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
