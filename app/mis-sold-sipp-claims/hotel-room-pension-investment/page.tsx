import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Hotel Room Pension Investment Claims | SIPP Mis-Selling Solicitors',
  description: 'Was your SIPP invested in hotel rooms or serviced accommodation? These were high-risk illiquid assets mis-sold as pension investments. Free solicitor review.',
  alternates: { canonical: '/mis-sold-sipp-claims/hotel-room-pension-investment/' },
}

const faqs = [
  { q: 'Can I claim if my SIPP was invested in a hotel room?', a: 'Yes. Hotel room and serviced accommodation investments were high-risk, illiquid, unregulated assets that were wholly unsuitable for pension investment in the vast majority of cases. If you were advised to transfer your pension into a SIPP and invest in a hotel room or serviced accommodation unit, you may have grounds for a substantial claim against the adviser and/or the SIPP operator.' },
  { q: 'How were hotel rooms sold as pension investments?', a: 'Hotel room schemes typically involved purchasing a room in a hotel or serviced accommodation development. Investors were promised a fixed or guaranteed rental income from hotel occupancy, with the right to use the room themselves for a period each year. The investments were packaged as SIPP-eligible and marketed as delivering stable, property-backed income. In practice, they were illiquid, unregulated, and dependent on the operational success of a single hotel development.' },
  { q: 'What went wrong with hotel room SIPP investments?', a: 'Hotel room schemes failed for a variety of reasons: the development was never completed; the hotel failed to achieve the occupancy required to pay promised returns; the management company collapsed; or the investor found that the room could not be sold at a reasonable price — or at all. Some schemes were operated in the UK; others were overseas. Many have since failed entirely.' },
  { q: 'Who is responsible for a hotel room SIPP claim?', a: 'Responsibility typically lies with: the financial adviser who recommended the SIPP transfer and the hotel room investment; the SIPP operator who accepted the unregulated hotel room asset into the pension without adequate assessment; and, if either has since failed, the FSCS. We assess each case to identify all relevant parties.' },
  { q: 'My hotel development was never built — can I still claim?', a: 'Yes. The failure of the development to be completed, or the collapse of the management company, does not prevent a claim against the adviser or SIPP operator who facilitated your investment. Compensation focuses on the bad advice — restoring you to the position you would have been in had the unsuitable investment never been made — not on recovering money from the failed hotel developer.' },
  { q: 'Can I claim through the FSCS for a hotel room SIPP loss?', a: 'If the financial adviser who recommended the investment, or the SIPP operator who held it, was FCA-authorised and has since failed, you may be able to claim through the FSCS. The FSCS has compensated claimants in relation to unsuitable SIPP investments in non-standard assets including hotel rooms. See our FSCS guide for more detail.' },
  { q: 'Is there a time limit for a hotel room SIPP claim?', a: 'Yes. Time limits apply depending on the route taken. For hotel room schemes that failed slowly — or where the loss only became apparent after the management company wound down — the date of knowledge (from which time limits typically run) may be later than the original investment date. Do not assume you are out of time without seeking specific legal advice.' },
]

export default function HotelRoomPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Mis-Sold SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Hotel Room SIPP Claims', item: '/mis-sold-sipp-claims/hotel-room-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Hotel Room Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/hotel-room-pension-investment/" />
      <ArticleSchema title="Hotel Room Pension Investment Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/hotel-room-pension-investment/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Hotel Room SIPP Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Hotel Room SIPP Investment Claims — Mis-Sold Pension Advice</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Hotel room and serviced accommodation investments were marketed as stable, income-producing SIPP assets — they were high-risk, illiquid, and unsuitable for pension investment.',
              'Claims can be brought against the adviser who recommended the scheme, the SIPP operator who accepted the investment, or both.',
              'Whether or not your hotel was built or is still operating does not prevent a claim against the adviser or operator.',
              'FSCS claims may be available if those firms have since failed.',
              'Contact us for a free initial review — time limits may apply.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Hotel room and serviced accommodation investments were among the most widely mis-sold SIPP assets of the 2000s and 2010s. Marketed as offering reliable rental income backed by bricks and mortar, they were in practice illiquid, unregulated, and dependent on the success of a single property development. Many have since failed. If your pension was invested in one of these schemes, you may have a significant claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If your SIPP held hotel rooms or serviced accommodation, you may have a claim against the adviser and/or the SIPP operator. Whether or not the hotel is still operating does not affect this. Contact us for a free assessment — FSCS claims may be available.</p>
            </div>

            <h2>How Hotel Room SIPP Schemes Worked</h2>
            <p>Hotel room schemes typically involved the following structure:</p>
            <ul>
              <li>You transferred your existing pension into a SIPP.</li>
              <li>The SIPP used your pension funds to "purchase" a room in a hotel or serviced accommodation development.</li>
              <li>The hotel management company leased your room back and paid you a fixed or guaranteed rental income — typically 6–10% per year for an initial period.</li>
              <li>You had the right to use the room for a limited number of days per year.</li>
              <li>After the guaranteed income period ended, returns became entirely dependent on hotel occupancy levels.</li>
            </ul>
            <p>The schemes were often promoted by comparison to buy-to-let property investment. In practice, the investment had none of the characteristics of direct property ownership and all of the risks of an unregulated, illiquid, single-asset scheme.</p>

            <h2>Why These Investments Were Unsuitable</h2>
            <p>Hotel room SIPP investments were unsuitable for pension investment for multiple reasons:</p>
            <ul>
              <li><strong>Illiquidity:</strong> there was no market to sell a hotel room interest. Investors who needed to access their pension or change investment could not exit.</li>
              <li><strong>Unregulated:</strong> the investments were not FCA-regulated products. Investors had no FCA recourse against the hotel operator or developer.</li>
              <li><strong>Single-asset risk:</strong> returns depended entirely on one hotel development's occupancy — a catastrophically concentrated risk for a pension.</li>
              <li><strong>Guaranteed returns were unsustainable:</strong> many schemes promised guaranteed income that was not backed by real hotel revenue — creating a Ponzi-like dynamic that collapsed once new investor money dried up.</li>
              <li><strong>Hidden charges:</strong> management fees, SIPP administration charges, and adviser fees significantly eroded returns.</li>
            </ul>

            <h2>SIPP Operator Liability</h2>
            <p>As with other unregulated SIPP investments, SIPP operators may be liable where they accepted hotel room investments without adequate due diligence. Case law has established that SIPP operators owe duties to clients, and operators who allowed high-risk non-standard assets into SIPPs without proper assessment may be held responsible for losses.</p>
            <p>See also our guide to <Link href="/mis-sold-sipp-claims/unregulated-collective-investment-schemes/" className="text-[#1e3a5f] underline">UCIS pension claims</Link> and <Link href="/mis-sold-sipp-claims/overseas-property-pension-investment/" className="text-[#1e3a5f] underline">overseas property SIPP claims</Link> for related case types.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your pension invested in a hotel room scheme? Contact us for a free review of your options.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Overseas Property SIPP Claims', href: '/mis-sold-sipp-claims/overseas-property-pension-investment/' },
                  { label: 'Storage Pod SIPP Claims', href: '/mis-sold-sipp-claims/storage-pod-pension-investment/' },
                  { label: 'UCIS SIPP Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={14} className="text-[#c9a84c]" />Time Limits Apply</h3>
              <p className="text-xs text-gray-700">Do not assume you are out of time — the date of knowledge may be later than the investment date. <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">See time limits guide.</Link></p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
