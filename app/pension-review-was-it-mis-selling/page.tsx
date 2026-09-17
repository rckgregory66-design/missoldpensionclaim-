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
  title: 'Was My Pension Review Mis-Selling? | Warning Signs to Look For',
  description: 'Were you contacted for a free pension review and then advised to transfer? These reviews often led to unsuitable advice. Find out if you can claim compensation.',
  alternates: { canonical: '/pension-review-was-it-mis-selling/' },
}

const faqs = [
  { q: 'Can a pension review lead to a mis-selling claim?', a: 'Yes. A significant number of mis-sold pension claims arose from unsolicited "free pension reviews" — often marketed by cold call, text, or comparison website. If the review led to a recommendation to transfer your pension into a SIPP or high-risk investment, and that advice was unsuitable for your circumstances, you may have a claim for compensation.' },
  { q: 'What is a free pension review and how did they work?', a: 'Free pension review services were marketed — often by unregulated introducers — as a way to check whether your pension was performing well or whether you could get better returns elsewhere. Once a customer was signed up, they were typically passed to a regulated financial adviser (sometimes via an introducer referral arrangement) who recommended a pension transfer. The adviser received commission on the transfer. In many cases, the transfer recommendation was unsuitable.' },
  { q: 'Were free pension reviews legal?', a: 'The free pension review itself was typically legal — it was a marketing and lead generation activity. However, many of the transfer recommendations that resulted from these reviews were not in the customer\'s best interests and breached FCA rules. The FCA has scrutinised introducer arrangements and the advice given following pension reviews as part of its pension mis-selling enforcement work.' },
  { q: 'What are the warning signs that a pension review led to mis-selling?', a: 'Warning signs include: being contacted out of the blue (cold call, text, comparison website); being told your current pension is underperforming or that you could do better elsewhere; being recommended a SIPP within a short time of the review, without full exploration of your circumstances; the new SIPP being invested in storage pods, overseas property, land, green energy or other non-standard assets; and high or undisclosed charges on the new arrangement.' },
  { q: 'Can I claim if the review was conducted years ago?', a: 'Potentially, yes. Time limits apply, but the clock may run from when you knew or should have known the advice was unsuitable — which can be later than the date of the review or the transfer. Do not assume you are out of time without getting specific legal advice. See our time limits guide.' },
  { q: 'What if I never complained about the pension review at the time?', a: 'Not complaining at the time does not prevent a claim now. Many people did not realise they had received unsuitable advice until years later — perhaps when the investment failed, when they saw news about pension mis-selling, or when a loss became apparent. The fact that you did not complain immediately does not bar a claim, though time limits may affect which route is available.' },
  { q: 'What if the firm that conducted the review has since closed?', a: 'If the firm that carried out the review, or that gave you advice following it, has since failed, you may be able to claim through the FSCS. Many of the firms involved in pension review-led mis-selling have been closed or have had their FCA authorisation withdrawn. The FSCS compensates eligible claimants where an FCA-authorised firm has failed.' },
]

const warningSigns = [
  'You were contacted out of the blue — by cold call, text, social media, or comparison website',
  'The "review" was very brief and did not explore your full financial circumstances',
  'You were told your pension was underperforming or that you could earn higher returns',
  'A SIPP was recommended quickly, without a detailed discussion of the risks',
  'The SIPP was invested in non-standard assets (storage pods, property, land, green energy)',
  'High charges were taken from the fund in the first year',
  'You were told it was free or there was no cost to you',
  'You were given a suitability report that did not accurately reflect your circumstances',
]

export default function PensionReviewMisSellingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Was My Pension Review Mis-Selling?', item: '/pension-review-was-it-mis-selling/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Was My Pension Review Mis-Selling?" description={metadata.description as string} url="/pension-review-was-it-mis-selling/" />
      <ArticleSchema title="Was My Pension Review Mis-Selling?" description={metadata.description as string} url="/pension-review-was-it-mis-selling/" />

      <Breadcrumb crumbs={[{ label: 'Was My Pension Review Mis-Selling?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Was My Pension Review Mis-Selling? Warning Signs and How to Claim</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Many pension mis-selling claims arose from "free pension review" services that led to unsuitable SIPP transfers.',
              'The reviews were typically marketing tools — the money was made by advisers who received commission on the subsequent pension transfer.',
              'If the transfer recommendation was unsuitable, you may have a claim — regardless of whether the review was described as "free".',
              'Not having complained at the time does not prevent a claim now.',
              'Time limits apply but may run from when you first knew or should have known about the mis-selling.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Thousands of people in the UK were approached for a "free pension review" — by cold call, text, or online — and went on to transfer their pension into a SIPP based on the advice that followed. In many cases, that advice was unsuitable. If this happened to you and your pension has suffered losses, you may be able to claim compensation.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If a free pension review led to a recommendation to transfer into a SIPP, and that advice was unsuitable for your circumstances, you may have a significant claim — even if you agreed to the transfer, even if you signed a suitability report, and even if it was years ago.</p>
            </div>

            <h2>How Pension Review Mis-Selling Worked</h2>
            <p>The typical pattern of pension review mis-selling involved the following steps:</p>
            <ol>
              <li><strong>Unsolicited contact</strong> — a cold call, text, or comparison website lead generation asked if you would like a free pension review.</li>
              <li><strong>Introduction to an adviser</strong> — an unregulated introducer passed you to a regulated financial adviser, earning a referral fee.</li>
              <li><strong>The review</strong> — a brief "review" of your pension, often emphasising that your current fund was "underperforming" or that better returns were available elsewhere.</li>
              <li><strong>Transfer recommendation</strong> — the adviser recommended transferring your pension into a SIPP. The adviser received a commission on the transfer.</li>
              <li><strong>SIPP investment</strong> — the SIPP was invested in high-risk, often unregulated assets — storage pods, overseas property, land banking, green energy, hotel rooms.</li>
              <li><strong>Loss</strong> — the investment failed or significantly underperformed, and the pension is now worth far less than what was transferred in.</li>
            </ol>

            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Commission Conflicts Were Central</p>
                <p className="text-sm text-red-700 leading-relaxed">In many cases, the reason unsuitable transfers were recommended was simple: the adviser received significant commission for recommending the transfer and the SIPP investment. The free pension review was the entry point — but commission drove the advice. The FCA has identified commission-driven pension transfer advice as a major area of consumer harm.</p>
              </div>
            </div>

            <h2>Warning Signs Your Pension Review Led to Mis-Selling</h2>
            <div className="not-prose space-y-2 mb-8">
              {warningSigns.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <AlertTriangle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2>Does Signing a Suitability Report Mean I Cannot Claim?</h2>
            <p>No. Having signed a suitability report — even one that said the transfer was suitable for you — does not prevent a claim. Suitability reports can be inaccurate. The FCA's test is whether the advice was objectively suitable given your actual circumstances, not whether you signed a document saying it was. If the suitability report did not accurately reflect your risk appetite, financial position, or the risks involved, it may itself be evidence of unsuitable advice. See our <Link href="/what-is-a-suitability-report/" className="text-[#1e3a5f] underline">guide to suitability reports</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Did a free pension review lead to a SIPP transfer and losses? Contact us to find out if you have a claim.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Pension Scam Claims', href: '/pension-scam-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'How Do I Know If Mis-Sold?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not delay. Time limits vary by route. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
