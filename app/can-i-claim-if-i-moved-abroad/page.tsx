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
  title: 'Can I Claim If I Have Moved Abroad? | Pension Mis-Selling from Overseas',
  description: 'Living abroad does not prevent a UK pension mis-selling claim. You can claim from overseas if the original advice was given in the UK. Find out how.',
  alternates: { canonical: '/can-i-claim-if-i-moved-abroad/' },
}

const faqs = [
  { q: 'Can I make a pension mis-selling claim if I live abroad?', a: 'Yes — in most cases. If the pension advice was given in the UK, the adviser was FCA-regulated, and the pension was a UK pension, you can generally still claim even if you now live abroad. Your current country of residence does not affect your rights against the UK firm or your ability to use the FOS or FSCS.' },
  { q: 'Does it matter which country I now live in?', a: 'For claims based on UK-regulated advice, your current country of residence is generally not a barrier. You do not need to return to the UK to make a claim — we can conduct the entire process by correspondence, email and phone. However, for QROPS (Qualifying Recognised Overseas Pension Schemes) and overseas transfer advice, additional complexities can arise depending on the jurisdiction.' },
  { q: 'What is a QROPS and can I claim for a bad QROPS transfer?', a: 'A Qualifying Recognised Overseas Pension Scheme (QROPS) is a pension scheme based outside the UK that meets HMRC criteria. Some advisers recommended transferring UK pension benefits into QROPS — particularly for those moving abroad. Where a QROPS transfer was unsuitable, was into an unrecognised scheme, or resulted in unexpected tax charges (such as the overseas transfer charge), there may be grounds for a claim.' },
  { q: 'I was advised to transfer my pension before I moved abroad — can I still claim?', a: 'Yes. If the advice to transfer was given while you were still in the UK, or by a UK-regulated adviser, and the advice was unsuitable, the claim arises from that UK advice regardless of where you now live. This is one of the more common scenarios — people were advised to transfer, then moved abroad, only to discover later that the transfer was unsuitable.' },
  { q: 'Can I make a claim through the FOS from abroad?', a: 'Yes. The FOS accepts complaints from customers regardless of their current country of residence, provided the complaint is against an FCA-authorised firm based in the UK. Complaints can be submitted online. The FOS will correspond with you electronically and does not require you to appear in person.' },
  { q: 'Can I make an FSCS claim from abroad?', a: 'Yes. The FSCS accepts claims from claimants living abroad, provided the claim is against an FCA-authorised firm that has failed. FSCS compensation is subject to the standard limits (£85,000 for investment losses per firm). We can help you submit an FSCS claim from overseas.' },
  { q: 'Are there any extra complications if I moved abroad before the pension transfer?', a: 'Possibly. If you were already non-UK resident when the advice was given, or if the advice was given by a non-UK regulated adviser, the picture is more complex. The FCA\'s jurisdiction extends to UK-authorised firms wherever their clients are located, but if the adviser was regulated in a different jurisdiction, the FOS and FSCS may not have jurisdiction. We can assess the specific facts of your case.' },
]

export default function MovedAbroadPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Can I Claim If I Moved Abroad?', item: '/can-i-claim-if-i-moved-abroad/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Can I Claim If I Moved Abroad?" description={metadata.description as string} url="/can-i-claim-if-i-moved-abroad/" />
      <ArticleSchema title="Can I Claim If I Moved Abroad?" description={metadata.description as string} url="/can-i-claim-if-i-moved-abroad/" />
      <Breadcrumb crumbs={[{ label: 'Can I Claim If I Moved Abroad?' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Can I Make a Pension Mis-Selling Claim If I Have Moved Abroad?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Living abroad does not prevent a UK pension mis-selling claim — what matters is whether the advice was given by a UK-regulated adviser.',
              'FOS complaints and FSCS claims can be submitted from overseas electronically.',
              'QROPS transfer advice can give rise to separate claims where the transfer was unsuitable or resulted in unexpected tax charges.',
              'No need to return to the UK — the entire claim process can be handled remotely.',
              'Time limits apply — the clock may have started running before you moved abroad.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Many pension mis-selling victims are now living abroad — whether retired to Spain, France, Australia, or elsewhere. Moving country does not extinguish your right to claim against a UK-regulated financial adviser. If the advice was given in the UK and the adviser was FCA-regulated, the claim follows the adviser — not your postcode.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Yes — in most cases you can claim from abroad. The entire process can be handled remotely. Contact us for a free review — we work with clients across the world.</p>
            </div>
            <h2>What You Can Still Do From Abroad</h2>
            <div className="not-prose space-y-3 mb-8">
              {[
                { label: 'Submit an FOS complaint online', desc: 'FOS accepts complaints electronically from claimants anywhere in the world against UK-regulated firms.' },
                { label: 'Make an FSCS claim', desc: 'FSCS accepts claims from overseas claimants where the firm was FCA-authorised and has since failed.' },
                { label: 'Instruct a solicitor by email and phone', desc: 'There is no requirement to meet us in person — we can take full instructions and handle your claim remotely.' },
                { label: 'Claim for QROPS mis-selling', desc: 'If you were advised to transfer into a QROPS when moving abroad, and the advice was unsuitable, there may be a separate claim.' },
              ].map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{b.label}</p><p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 text-sm mb-1">Time Limits Still Apply</p>
                <p className="text-sm text-amber-700 leading-relaxed">Living abroad does not pause the limitation clock. If you transferred before moving abroad, time limits may already be running. Do not delay seeking advice — <Link href="/time-limits-mis-sold-pension-claims/" className="underline">see our time limits guide</Link>.</p>
              </div>
            </div>
            <p>Also see our guide on <Link href="/can-i-claim-if-i-am-already-retired/" className="text-[#1e3a5f] underline">claiming if you have already retired</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Review — Available From Abroad</h3>
              <p className="text-gray-300 text-sm mb-5">Living abroad? We handle claims remotely for clients worldwide. Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Can I Claim If Already Retired?', href: '/can-i-claim-if-i-am-already-retired/' },
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
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
