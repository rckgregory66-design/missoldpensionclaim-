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
  title: 'Pension Scam Claims | Were You a Victim of Pension Fraud? Solicitors',
  description: 'Were you cold-called about your pension or pressured into a transfer? Pension scam victims may be able to recover losses through FOS, FSCS or legal action. Free review.',
  alternates: { canonical: '/pension-scam-claims/' },
}

const faqs = [
  { q: 'Can I claim compensation if I was a victim of a pension scam?', a: 'Possibly — it depends on who was involved and whether any FCA-regulated firm played a role in your loss. If a regulated financial adviser recommended or facilitated the transfer that was part of a scam, you may have a claim against that adviser or their firm (and through the FSCS if the firm has failed). If a SIPP operator accepted the scam investment into your pension, they may also be liable. If the scam was entirely operated by unauthorised firms, recovery is more difficult but still worth exploring.' },
  { q: 'What are the most common pension scam types?', a: 'Common pension scam types include: cold calling (now banned) followed by advice to transfer into a SIPP holding high-risk investments; promises of guaranteed high returns or early pension access; "pension liberation" or "pension unlocking" schemes that promised early access to pension funds (before age 55); and pension review services operated by unregulated introducers who passed clients to authorised firms for a fee.' },
  { q: 'Was I scammed if I was cold-called about my pension?', a: 'Cold calling about pensions has been illegal since 2019. If you were cold-called before 2019 and this led to a pension transfer, the cold call may be evidence of a mis-selling or scam scheme, but it does not on its own determine whether you have a viable claim. What matters is whether a regulated firm gave you unsuitable advice, and whether you suffered a loss as a result.' },
  { q: 'What is pension liberation and can I claim for it?', a: 'Pension liberation (also called pension unlocking) promised to let people access their pension before the minimum pension age (then 55). This was marketed as a legal solution but in practice typically involved transferring the pension to an overseas or unregulated scheme, taking an "advance" of pension funds (subject to heavy charges and HMRC tax penalties), and leaving the remaining pension in a high-risk or failed investment. Victims of pension liberation can potentially claim against the FCA-regulated firms that facilitated the transfer.' },
  { q: 'What if my pension was transferred without my full knowledge or consent?', a: 'Pension transfers require your active consent — you must sign transfer documents. However, in some scam scenarios, documents were signed under pressure, without full understanding of what was happening, or were procured by misrepresentation. If you believe you were misled into signing transfer documents, this is relevant to the merits of a claim. A solicitor can assess the specific circumstances.' },
  { q: 'Can I get my pension money back if it has been transferred to a scam?', a: 'Recovery depends on what happened to the money and who was involved. If the pension was transferred to an unregulated scheme that has since been dissolved, direct recovery from the scam operators is typically very difficult. However, claims against the regulated firms that advised the transfer or the SIPP operators that held the investment — and through the FSCS if those firms have failed — may enable you to recover some or all of your loss.' },
  { q: 'Should I report a pension scam to Action Fraud?', a: 'Yes — if you believe you have been the victim of pension fraud, you should report it to Action Fraud (actionfraud.police.uk) and to the FCA (fca.org.uk/scamsmart). Reporting does not itself recover your money, but it creates a record and may assist investigations. It does not prevent you from also pursuing a compensation claim through the FOS, FSCS or legal routes.' },
]

const warningSignsList = [
  'Unexpected contact — cold call, text, email or social media approach about your pension',
  'Promises of guaranteed high returns or "better" pension performance',
  'Offers of early pension access or "pension reviews" from firms you have not heard of',
  'Pressure to make a quick decision or transfer urgently',
  'Complicated offshore investment structures described as tax-efficient',
  'Introductory or referral fees that were not disclosed upfront',
  'Advice to invest in storage pods, overseas property, land banking or other unusual assets',
]

export default function PensionScamPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Scam Claims', item: '/pension-scam-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Scam Claims" description={metadata.description as string} url="/pension-scam-claims/" />
      <ArticleSchema title="Pension Scam Claims" description={metadata.description as string} url="/pension-scam-claims/" />

      <Breadcrumb crumbs={[{ label: 'Pension Scam Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Scam Claims — Were You a Victim of Pension Fraud or Cold Calling?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension scams typically involve cold calling, promises of high returns, or early access — followed by a transfer into a SIPP holding high-risk or fraudulent investments.',
              'If a regulated financial adviser or SIPP operator was involved in facilitating the transfer, they may be liable even if the underlying investment was a fraud.',
              'Claims can be brought via FOS (if the firm is still trading), FSCS (if the firm has failed), or legal proceedings.',
              'Cold calling about pensions has been illegal since 2019 — if you were cold-called before then and lost money, this may support a claim.',
              'Report suspected scams to Action Fraud and the FCA — but also take legal advice on a compensation claim.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension scams have cost UK savers hundreds of millions of pounds over the past two decades. Victims were approached — often by cold call — with promises of high returns, guaranteed income, or early pension access. A transfer was arranged, pension funds moved into a SIPP, and the money invested in high-risk or fraudulent assets. When the scheme collapsed, the pension was gone. But there may still be routes to compensation.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If a regulated adviser or SIPP operator was involved in a pension scam that cost you money, you may be able to claim compensation — even if the underlying investment was fraudulent. Contact us for a free assessment of your specific situation.</p>
            </div>

            <h2>Warning Signs of a Pension Scam</h2>
            <div className="not-prose space-y-2 mb-6">
              {warningSignsList.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>How Pension Scams Typically Worked</h2>
            <p>The most common pension scam pattern involved the following stages:</p>
            <ol>
              <li><strong>Initial contact</strong> — a cold call, text or social media approach offering a "free pension review" or promising better returns.</li>
              <li><strong>Introduction to an adviser</strong> — an unregulated introducer passed the potential victim to a regulated financial adviser (sometimes called "introduced business").</li>
              <li><strong>SIPP transfer recommendation</strong> — the regulated adviser recommended transferring the pension into a SIPP.</li>
              <li><strong>High-risk investment</strong> — the SIPP was invested in storage pods, overseas property, land banking, green energy, or another high-risk or unregulated asset.</li>
              <li><strong>Collapse</strong> — the underlying investment failed, leaving the pension worthless or heavily reduced.</li>
            </ol>
            <p>The regulated adviser was the critical link in this chain. Their recommendation and the SIPP operator's acceptance of the investment may give rise to regulatory liability — and that is where compensation claims are focused.</p>

            <h2>Pension Liberation Scams</h2>
            <p>Pension liberation (also called pension unlocking) schemes promised people access to their pension funds before the minimum pension age. In practice, these schemes typically resulted in:</p>
            <ul>
              <li>Large HMRC tax charges on the "advanced" sums (under the unauthorised payments regime)</li>
              <li>Loss of the remaining pension fund into failed investments</li>
              <li>Significant adviser and promoter fees taken from the fund before any returns were paid</li>
            </ul>
            <p>If a regulated firm was involved in facilitating a pension liberation arrangement, there may be grounds for a claim against that firm or its successors.</p>

            <h2>Routes to Compensation</h2>
            <p>The appropriate route depends on the status of the regulated firms involved:</p>
            <ul>
              <li><strong>FOS</strong> — if the firm is still FCA-authorised and trading, complain to the firm and then refer to the FOS.</li>
              <li><strong>FSCS</strong> — if the firm has failed, apply to the FSCS for compensation up to the applicable limit. Many advisory firms involved in pension scam referrals have since failed.</li>
              <li><strong>Legal action</strong> — where other routes are unavailable or insufficient, legal proceedings against responsible parties may be appropriate.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Think you may have been a victim of a pension scam? We can assess whether you have a viable compensation claim. Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Can I Claim If Adviser Has Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">Useful Contacts</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  { label: 'Report to Action Fraud', note: 'actionfraud.police.uk' },
                  { label: 'FCA ScamSmart', note: 'fca.org.uk/scamsmart' },
                  { label: 'The Pensions Regulator', note: 'thepensionsregulator.gov.uk' },
                ].map(c => (
                  <li key={c.label} className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /><span><strong>{c.label}</strong><br />{c.note}</span></li>
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
