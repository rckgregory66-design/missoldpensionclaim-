import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'What Is a Transfer Value Analysis (TVAS)? | Pension Mis-Selling Guide',
  description: 'A TVAS compared DB scheme benefits with projected returns from the transfer value. Advisers who ignored a negative TVAS and recommended transfer may have mis-sold.',
  alternates: { canonical: '/pension-transfer-value-analysis/' },
}

const faqs = [
  { q: 'What is a Transfer Value Analysis (TVAS)?', a: 'A Transfer Value Analysis (TVAS) — also sometimes called a Transfer Value Comparator (TVC) after 2018 rule changes — is a document that financial advisers were required to produce when recommending a defined benefit (DB) pension transfer. It compared the guaranteed benefits of the DB scheme against the projected returns from the transfer value if invested in the market. The TVAS was intended to show whether the transfer value could realistically replicate the DB scheme\'s benefits.' },
  { q: 'Was an adviser required to produce a TVAS before recommending a transfer?', a: 'Yes. Under FCA rules (COBS 19), advisers giving DB transfer advice were required to produce a TVAS (or later, a Transfer Value Comparator under the October 2018 rules). The TVAS compared the DB scheme\'s benefits with what the transfer value was projected to achieve. A critical yield — the investment return needed to match DB benefits — was central to the analysis. If the critical yield was high, the analysis typically showed a transfer was not in the member\'s interests.' },
  { q: 'What is a critical yield in a TVAS?', a: 'The critical yield is the investment return that the transfer value would need to achieve, each year, to provide an income equivalent to the DB pension at retirement. If the critical yield was, say, 8% per year, that meant the transferred funds would need to consistently grow at 8% per year to match what the DB scheme guaranteed. Because DB pensions are guaranteed and inflation-linked, achieving the critical yield in a market investment was very difficult — which is why most TVAS reports showed a transfer was unsuitable.' },
  { q: 'What is a Transfer Value Comparator (TVC)?', a: 'The TVC replaced the TVAS for most purposes from October 2018 under FCA rules. A TVC compares the transfer value offered by the scheme against the estimated cost of purchasing, from an annuity provider, benefits broadly equivalent to those provided by the DB scheme. Unlike the TVAS, the TVC does not rely on assumptions about future investment returns — it uses actual annuity costs. A TVC that showed the transfer value was less than the cost of replicating the benefits was a strong indicator that the transfer was not in the member\'s interests.' },
  { q: 'If my adviser\'s TVAS showed the transfer was unsuitable, does that mean I have a claim?', a: 'A TVAS or TVC that showed a transfer was not in your interests — and which the adviser recommended the transfer anyway — is strong evidence of unsuitable advice. It does not automatically confirm a claim, since other factors are also assessed, but it is very significant. If your adviser produced a TVAS or TVC that showed a high critical yield or that the TVC demonstrated the transfer value was less than replacement cost, and recommended the transfer regardless, you should seek legal advice.' },
  { q: 'What if I was not given a TVAS or TVC at all?', a: 'Failure to produce a TVAS or TVC was itself a regulatory breach. Advisers were required to produce these analyses as part of their DB transfer advice obligations. If no TVAS or TVC was provided before you transferred, or if the documents provided were inadequate or incomplete, this may support a claim of unsuitable or deficient advice.' },
  { q: 'Can I get a copy of the TVAS for my pension transfer?', a: 'You can request a copy of your TVAS or TVC from the adviser firm. If the firm has since failed, make a data subject access request (DSAR) to the firm\'s administrator or liquidator. The FSCS can also obtain some evidence directly when assessing FSCS claims. Even if you cannot locate the original TVAS, this does not prevent a claim — a loss can still be demonstrated without it.' },
]

export default function TVASPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Transfer Value Analysis', item: '/pension-transfer-value-analysis/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="What Is a Transfer Value Analysis (TVAS)?" description={metadata.description as string} url="/pension-transfer-value-analysis/" />
      <ArticleSchema title="What Is a Transfer Value Analysis (TVAS)?" description={metadata.description as string} url="/pension-transfer-value-analysis/" />

      <Breadcrumb crumbs={[{ label: 'Pension Transfer Value Analysis' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Is a Transfer Value Analysis (TVAS)?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A TVAS was a required analysis that advisers had to produce when recommending a DB pension transfer — it compared the guaranteed benefits against projected returns from the transfer value.',
              'The critical yield — the investment return needed to match DB benefits — was central. High critical yields almost always showed a transfer was unsuitable.',
              'From October 2018, a Transfer Value Comparator (TVC) replaced the TVAS — it compared the transfer value against the cost of buying equivalent annuity income.',
              'If your adviser recommended a transfer despite a negative TVAS or TVC, that is strong evidence of unsuitable advice.',
              'Failure to produce a TVAS or TVC at all was itself a regulatory breach.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">When a financial adviser recommended that you transfer out of a defined benefit pension, they were required by FCA rules to produce a Transfer Value Analysis — a document designed to show whether the transfer value could actually replicate the guaranteed income you were giving up. In most cases, it could not. Understanding your TVAS (or TVC) is often key to understanding why you have a claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A TVAS compared your DB scheme's guaranteed benefits against what your transfer value could realistically achieve once invested. A high critical yield almost always showed a transfer was unsuitable. If your adviser recommended the transfer regardless, that may be evidence of mis-selling.</p>
            </div>

            <h2>How a TVAS Worked</h2>
            <p>The TVAS used a standardised methodology to answer a simple question: at what annual investment return would the transfer value generate the same income as the DB scheme? This return was called the <strong>critical yield</strong>.</p>
            <ul>
              <li>If the critical yield was low (say, 2–3%), it meant a relatively modest return was sufficient — and a transfer might potentially be considered if the member had specific circumstances that justified it.</li>
              <li>If the critical yield was high (say, 6%, 8% or above), it meant the transfer value would need to achieve consistently high returns in the market to match the guaranteed DB income — a very difficult target, especially given the guaranteed and index-linked nature of DB benefits.</li>
            </ul>
            <p>In the vast majority of cases, the critical yield was high — and the appropriate advice was to remain in the DB scheme.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-6 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">A High Critical Yield Almost Always Meant: Do Not Transfer</p>
                <p className="text-sm text-gray-700 leading-relaxed">Where the TVAS showed a critical yield above about 5–6%, it was very difficult for an adviser to justify a transfer recommendation. Many advisers recommended transfers despite high critical yields — often because they or the firm received significant commission. These recommendations were almost always unsuitable.</p>
              </div>
            </div>

            <h2>The Transfer Value Comparator (TVC) — from October 2018</h2>
            <p>From October 2018, the FCA changed the rules to require a Transfer Value Comparator (TVC) in addition to (and later replacing) the TVAS for most purposes. The TVC took a different approach:</p>
            <ul>
              <li>It calculated the cost of purchasing, from an annuity provider, benefits broadly equivalent to those the DB scheme would provide.</li>
              <li>It compared this cost against the transfer value being offered.</li>
              <li>Where the transfer value was less than the replacement cost — which was almost always the case — the TVC highlighted this gap prominently.</li>
            </ul>
            <p>The TVC was designed to make the cost of giving up DB benefits immediately visible, without relying on projection assumptions. See our guide on <Link href="/what-is-a-cash-equivalent-transfer-value/" className="text-[#1e3a5f] underline">what a CETV is and the gap it represents</Link>.</p>

            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-2">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">TVAS or TVC — What Matters for Your Claim</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">Whether the analysis was a TVAS or TVC, the key question is the same: did it show the transfer was in your interests? If the analysis was negative — a high critical yield, or a transfer value below replacement cost — and the adviser recommended the transfer anyway, that recommendation was almost certainly unsuitable. The analysis itself is important evidence in a claim.</p>
            </div>

            <h2>What If You Cannot Find Your TVAS?</h2>
            <p>If you cannot locate your TVAS or TVC, you can:</p>
            <ul>
              <li>Make a data subject access request (DSAR) to the adviser firm or its administrator/liquidator</li>
              <li>Ask the FSCS to obtain evidence when making an FSCS claim</li>
              <li>Contact us — we can advise on evidence recovery as part of assessing your case</li>
            </ul>
            <p>Even without the TVAS, a loss can still be demonstrated through other evidence. See our <Link href="/what-evidence-do-i-need-for-pension-mis-selling-claim/" className="text-[#1e3a5f] underline">evidence guide</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your DB pension? We can review your TVAS or TVC and assess your claim. Free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'DB Redress Calculation', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
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
