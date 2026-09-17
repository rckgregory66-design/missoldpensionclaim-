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
  title: 'What Is a Cash Equivalent Transfer Value (CETV)? | Pension Guide',
  description: 'A CETV is the lump sum your defined benefit scheme will pay to transfer your pension. It rarely reflects the true value of what you give up. Solicitor guide.',
  alternates: { canonical: '/what-is-a-cash-equivalent-transfer-value/' },
}

const faqs = [
  { q: 'What is a cash equivalent transfer value (CETV)?', a: 'A cash equivalent transfer value (CETV) is the lump sum that a defined benefit (DB) pension scheme offers to a member who wishes to transfer out of the scheme into a different pension arrangement. It represents the scheme\'s calculation of the capital value of the benefits the member would give up. It is sometimes called the transfer value or the cash transfer value.' },
  { q: 'How is a CETV calculated?', a: 'A CETV is calculated by the DB scheme\'s actuaries. It reflects the estimated cost to the scheme of providing the member\'s benefits — discounted to a present value. The calculation uses assumptions about future investment returns, inflation, and life expectancy. CETVs can vary significantly over time as these assumptions change, particularly in response to movements in gilt yields and inflation rates.' },
  { q: 'Does a high CETV mean I should transfer?', a: 'No. A high CETV is not in itself a reason to transfer. The purpose of calculating a CETV is to help you understand the capital value being offered — not to make the transfer attractive. The question is whether the CETV, once invested in a SIPP or personal pension, can generate income and benefits equivalent to those you would give up. In most cases, it cannot — which is why DB transfers are almost always unsuitable.' },
  { q: 'What is a CETV multiple and what does it mean?', a: 'A CETV multiple (sometimes called a transfer value multiple) compares the CETV to your annual DB pension entitlement. For example, if your scheme offers a CETV of £300,000 for a DB pension of £10,000 per year, the multiple is 30. High multiples — sometimes 30, 40, or even 50 times annual pension — were widely cited by advisers as a reason to transfer. However, a high multiple simply reflects the cost of replicating DB benefits; it does not mean the transfer is a good idea.' },
  { q: 'What is the difference between a CETV and the true value of my DB pension?', a: 'The true value of a DB pension — the cost of replicating its benefits in the open market — is typically significantly higher than the CETV offered by the scheme. This is the fundamental problem with DB transfers: the CETV is what the scheme pays out, but the comparator value (the cost of replacing what you give up) is usually much higher. The gap between the two is a key driver of compensation in DB transfer mis-selling claims.' },
  { q: 'Can a CETV expire?', a: 'Yes. A CETV quotation is typically valid for three months from the date of calculation (for FCA-regulated transfers, the scheme must guarantee the CETV for three months under statutory rules). If you do not complete the transfer within this period, you will need to obtain a new CETV, which may be higher or lower depending on market conditions.' },
  { q: 'If I transferred my DB pension, what happens to my CETV?', a: 'If you transferred your DB pension, the CETV was paid to the receiving scheme (typically a SIPP). From that point, it became an investment in the new scheme. The growth (or loss) in value since the transfer, compared against what the DB scheme would have provided, is the basis for any compensation calculation if the advice was unsuitable.' },
]

export default function CETVPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'What Is a Cash Equivalent Transfer Value?', item: '/what-is-a-cash-equivalent-transfer-value/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="What Is a Cash Equivalent Transfer Value (CETV)?" description={metadata.description as string} url="/what-is-a-cash-equivalent-transfer-value/" />
      <ArticleSchema title="What Is a Cash Equivalent Transfer Value (CETV)?" description={metadata.description as string} url="/what-is-a-cash-equivalent-transfer-value/" />

      <Breadcrumb crumbs={[{ label: 'What Is a CETV?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Is a Cash Equivalent Transfer Value (CETV)?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A CETV is the lump sum your defined benefit pension scheme offers if you transfer out — it is the scheme\'s estimate of the capital value of the benefits you give up.',
              'A high CETV is not a reason to transfer. It reflects the cost of replicating DB benefits, not a "profit" on the transfer.',
              'The true value of a DB pension — what it would cost to replace in the open market — is almost always higher than the CETV.',
              'This gap between the CETV paid and the cost of replacing what you gave up is a key driver of compensation in DB transfer mis-selling claims.',
              'CETVs are valid for three months and can fluctuate significantly with market conditions.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Understanding the cash equivalent transfer value (CETV) is essential for anyone who was advised to transfer out of a defined benefit pension — and for anyone who wants to understand why their compensation claim may be substantial. The CETV is the lump sum the scheme paid when you transferred out. But it is rarely the same as the true value of what you gave up.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A CETV is the transfer value your DB scheme paid when you left it. It is not what your DB pension was "worth" — the true cost of replacing the guaranteed income, inflation-linking and spousal pension is usually much higher. This gap is what drives large compensation figures in DB transfer claims.</p>
            </div>

            <h2>How a CETV Is Calculated</h2>
            <p>DB scheme actuaries calculate the CETV using a set of assumptions about:</p>
            <ul>
              <li><strong>Future investment returns</strong> — the discount rate applied to future liabilities</li>
              <li><strong>Inflation</strong> — the rate at which benefits will increase over time</li>
              <li><strong>Life expectancy</strong> — how long, on average, the scheme expects to pay benefits</li>
              <li><strong>Mortality rates</strong> — the likelihood of the member surviving to various ages</li>
            </ul>
            <p>Because these assumptions are sensitive to market conditions — particularly gilt yields and inflation expectations — CETVs can vary considerably from one quarter to the next. CETVs rose dramatically in the post-2008 low-interest-rate environment, which is one reason why many advisers were able to cite large CETVs as a reason to transfer.</p>

            <h2>Why a High CETV Does Not Mean You Should Transfer</h2>
            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-6 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">A High CETV Multiple Is Not a Reason to Transfer</p>
                <p className="text-sm text-gray-700 leading-relaxed">Many advisers presented high CETV multiples — "your transfer value is 40 times your annual pension" — as evidence that a transfer was financially attractive. This framing was misleading. A high multiple simply means it is expensive to replicate the scheme benefits. It does not mean the transfer value will generate equivalent benefits once invested.</p>
              </div>
            </div>

            <h2>CETV vs True Replacement Value — the Gap That Drives Compensation</h2>
            <p>The central issue in DB transfer mis-selling claims is the gap between:</p>
            <ul>
              <li>The <strong>CETV</strong> — the lump sum the scheme paid out, and</li>
              <li>The <strong>comparator value</strong> — the cost of purchasing an equivalent guaranteed income in the open market.</li>
            </ul>
            <p>The comparator value is almost always higher than the CETV. This means that transferring out typically means accepting a sum that is insufficient to replicate what you gave up. The FCA's redress methodology (PS22/13) uses this gap as the basis for compensation calculations.</p>

            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-2">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">Simple Illustration</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">Imagine a DB pension worth £10,000 per year (index-linked, with a spouse's pension). The scheme offers a CETV of £250,000. But to purchase an equivalent annuity today — inflation-linked, with spousal benefits — costs £350,000. The CETV is £100,000 short of what you need to replicate what you gave up. That gap is the starting point for a compensation calculation.</p>
              <p className="text-xs text-gray-500">This is a simplified illustration only and does not represent any specific case or outcome.</p>
            </div>
            <p>See our detailed guide on <Link href="/how-is-defined-benefit-pension-transfer-redress-calculated/" className="text-[#1e3a5f] underline">how DB pension transfer redress is calculated</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your DB pension? We can assess whether you have a claim. Free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'DB Redress Calculation', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Teachers Pension Transfer Claims', href: '/teachers-pension-transfer-claims/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
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
