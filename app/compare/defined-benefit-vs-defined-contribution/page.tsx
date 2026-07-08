import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import FAQAccordion from '@/components/FAQAccordion'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Defined Benefit vs Defined Contribution Pensions | Key Differences Explained',
  description: 'Understand the difference between defined benefit (final salary) and defined contribution pensions — and why it matters for mis-sold pension claims.',
  alternates: { canonical: '/compare/defined-benefit-vs-defined-contribution/' },
}

const faqs = [
  { q: 'Which type of pension is more valuable?', a: 'Defined benefit pensions are generally considered more valuable for most people because they provide a guaranteed income for life, regardless of investment performance or how long you live. Defined contribution pensions depend on the value of the fund at retirement, which is subject to investment risk. The FCA has stated that for most people it will not be in their best interests to transfer out of a defined benefit pension.' },
  { q: 'Can I claim compensation for a defined contribution pension?', a: 'Yes. Defined contribution pension claims typically arise where an adviser recommended switching from one personal pension to another without good reason, placed funds into unsuitable high-risk investments within a SIPP, or failed to properly explain charges or risks. These are sometimes referred to as SIPP mis-selling claims.' },
  { q: 'I was told my transfer value was very high — does that mean transferring was a good idea?', a: 'Not necessarily. High transfer values — which were common between 2015 and 2020 due to low interest rates — do not automatically mean that transferring was in your best interests. An adviser must still assess your individual circumstances, income needs, attitude to risk and other factors. A high transfer value is not, by itself, justification for recommending a transfer.' },
  { q: 'What is a critical yield?', a: 'A critical yield is the annual investment return that the invested transfer value would need to achieve in order to match the benefits you would have received had you stayed in the defined benefit scheme. If the critical yield is unrealistically high, this is a strong indicator that the transfer was not in your best interests. Advisers are required to calculate and consider the critical yield when recommending a DB transfer.' },
]

const rows = [
  { feature: 'Also known as', db: 'Final salary pension; occupational scheme', dc: 'Money purchase pension; personal pension; SIPP' },
  { feature: 'How retirement income is calculated', db: 'Based on salary and length of service — guaranteed', dc: 'Based on the value of the pension fund at retirement — not guaranteed' },
  { feature: 'Investment risk', db: 'Borne by the employer / scheme', dc: 'Borne by the member' },
  { feature: 'Inflation protection', db: 'Usually — income typically increases in line with inflation', dc: 'Depends on the product chosen at retirement (e.g. annuity)' },
  { feature: 'Income guaranteed for life?', db: 'Yes', dc: 'Only if an annuity is purchased; drawdown is not guaranteed' },
  { feature: 'Death benefits', db: 'Often includes spouse/dependant pensions or lump sum', dc: 'Typically the remaining fund value' },
  { feature: 'Flexibility', db: 'Less flexible — income fixed on retirement', dc: 'More flexible — drawdown allows variable income' },
  { feature: 'What you give up on transfer', db: 'Guaranteed income for life, inflation protection, death benefits', dc: 'N/A — these are already defined contribution arrangements' },
  { feature: 'Typical mis-selling scenario', db: 'Adviser recommended transferring out without adequate justification', dc: 'Adviser recommended unsuitable investments within SIPP; unnecessary pension switching' },
]

export default function DbVsDcPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Comparisons', item: '/compare/' }, { name: 'Defined Benefit vs Defined Contribution', item: '/compare/defined-benefit-vs-defined-contribution/' }]} />
      <WebPageSchema title="Defined Benefit vs Defined Contribution Pensions" description={metadata.description as string} url="/compare/defined-benefit-vs-defined-contribution/" />
      <ArticleSchema title="Defined Benefit vs Defined Contribution Pensions" description={metadata.description as string} url="/compare/defined-benefit-vs-defined-contribution/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Comparisons', href: '/compare/' }, { label: 'Defined Benefit vs Defined Contribution' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Defined Benefit vs Defined Contribution Pensions</h1>
          <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />

          <TLDRBox points={[
            'Defined benefit (DB) pensions pay a guaranteed income for life based on salary and service — they cannot run out',
            'Defined contribution (DC) pensions depend on investment performance and how long you live — they can run out',
            'Advice to transfer from a DB to a DC pension is irreversible and carries significant risk',
            'The FCA requires advisers to recommend staying in a DB pension unless transfer is clearly in your interest',
            'If you were advised to transfer your DB pension and regret it, you may have a mis-sold pension claim',
          ]} />

          <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Understanding the difference between defined benefit and defined contribution pensions is central to understanding whether you may have a mis-sold pension claim. These two types of pension work in fundamentally different ways — and what you stand to lose by transferring between them is very different.</p>

          <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
            <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-white text-sm leading-relaxed">A <strong className="text-[#c9a84c]">defined benefit (DB) pension</strong> pays a guaranteed income for life based on your salary and service — you cannot run out of money. A <strong className="text-[#c9a84c]">defined contribution (DC) pension</strong> builds up a pot of money that depends on investment performance — the income in retirement is not guaranteed. Transferring from DB to DC means giving up that guarantee, which is why the FCA says for most people it will not be in their best interests.</p>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
            <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> A defined benefit pension is like being promised a fixed salary every year until you die. A defined contribution pension is like being given a pot of savings and told to make it last. They are not the same — and trading one for the other carries serious risks that advisers must explain fully.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4">Side-by-Side Comparison</h2>

          <div className="not-prose overflow-x-auto mb-10 rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f2035] text-white">
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Feature</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Defined Benefit (DB)</th>
                  <th className="px-5 py-3 text-left font-semibold w-1/3">Defined Contribution (DC)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}>
                    <td className="px-5 py-3 font-medium text-[#0f2035]">{r.feature}</td>
                    <td className="px-5 py-3 text-gray-600">{r.db}</td>
                    <td className="px-5 py-3 text-gray-600">{r.dc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3">Why Defined Benefit Transfers Are So Often Mis-Sold</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">The FCA has stated that for most people, it will not be in their best interests to transfer out of a defined benefit pension. The reason is that the guaranteed, inflation-linked income provided by a DB scheme is extremely difficult to replicate through investing a cash transfer value.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Despite this, many financial advisers recommended transfers — particularly between 2015 and 2020, when low interest rates caused transfer values to be unusually high. The high transfer value made transfers look attractive, but an adviser was still required to demonstrate that a transfer was in the client's best interests based on their individual circumstances.</p>
          <Link href="/defined-benefit-pension-transfer-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] text-sm font-semibold underline mb-8">
            Defined benefit transfer claims — find out more <ArrowRight size={13} />
          </Link>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-3 mt-8">Mis-Selling in Defined Contribution Pensions</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">Defined contribution pensions can also be mis-sold — most commonly where an adviser recommended placing pension funds into a SIPP and then investing in high-risk or unregulated assets without adequately explaining the risks, or recommended switching between personal pensions without adequate justification.</p>
          <Link href="/mis-sold-sipp-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] text-sm font-semibold underline mb-8">
            Mis-sold SIPP claims — find out more <ArrowRight size={13} />
          </Link>

          <h2 className="text-2xl font-bold text-[#0f2035] mb-4 mt-10">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
