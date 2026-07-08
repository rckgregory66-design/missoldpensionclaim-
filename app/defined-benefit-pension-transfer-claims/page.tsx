import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Defined Benefit Pension Transfer Claims | Final Salary Mis-Selling',
  description: 'Were you advised to transfer out of a final salary or defined benefit pension? Find out whether the advice may have been unsuitable and what your options are.',
  alternates: { canonical: '/defined-benefit-pension-transfer-claims/' },
}

const faqs = [
  { q: 'What is a defined benefit pension?', a: 'A defined benefit (DB) pension, also known as a final salary pension, is a type of workplace pension that guarantees a set level of income in retirement, usually based on your salary and length of service. Unlike defined contribution pensions, the retirement income is not dependent on investment performance. DB pensions are generally considered highly valuable because they provide a guaranteed, inflation-linked income for life.' },
  { q: 'Why are DB pension transfers considered high risk?', a: 'Transferring out of a defined benefit pension means giving up guaranteed income for life in exchange for a cash transfer value. This is generally considered a significant and irreversible decision. In most cases, it is very difficult to replicate the value of a DB pension through investing, and the FCA has stated that for most people it will not be in their best interests to transfer.' },
  { q: 'Can I claim if I transferred out of a DB pension?', a: 'Whether you have grounds for a claim depends on the advice you received. If the adviser failed to properly explain the value of what you were giving up, did not adequately assess your circumstances, or recommended a transfer that was not in your best interests, there may be grounds for a claim. The fact that you transferred does not automatically mean you were mis-sold.' },
  { q: 'What is a pension transfer value?', a: 'When you transfer out of a DB scheme, you receive a cash equivalent transfer value (CETV). This is the amount that the scheme administrators calculate represents the value of your expected future benefits from the scheme. The transfer value then moves into a defined contribution pension or SIPP where it is invested.' },
  { q: 'How is compensation calculated for a DB transfer claim?', a: 'Compensation for a defined benefit transfer claim typically aims to put you back in the position you would have been in had you not transferred. This usually means calculating what your DB pension would have been worth and comparing it with the current value of your transferred fund, taking into account charges, investment performance and other relevant factors. Calculations are complex and depend on individual circumstances.' },
]

export default function DefinedBenefitPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Defined Benefit Pension Transfer Claims', item: '/defined-benefit-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Defined Benefit Pension Transfer Claims" description={metadata.description as string} url="/defined-benefit-pension-transfer-claims/" />
      <ArticleSchema title="Defined Benefit Pension Transfer Claims" description={metadata.description as string} url="/defined-benefit-pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'Defined Benefit Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Defined Benefit Pension Transfer Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'A defined benefit (DB) pension transfer claim arises when an adviser recommended you give up guaranteed lifetime income, and that advice was unsuitable.',
              'The FCA has stated that for most people, transferring out of a DB pension is not in their best interests — especially when transfer values were high between 2015 and 2020.',
              'Compensation typically aims to restore the guaranteed income you would have received had you not transferred.',
              'If the adviser firm has since failed, the FSCS may compensate you. If it is still trading, complain to the firm first, then the FOS.',
              'Do not assume you are out of time — limitation periods for DB transfer claims can start later than you think.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you were advised to transfer out of a defined benefit or final salary pension scheme and have suffered a financial loss or given up guaranteed benefits, you may have grounds for a claim. Defined benefit transfer mis-selling has been one of the most significant areas of pension complaints in the UK in recent years.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A defined benefit (DB) pension transfer claim arises when a financial adviser recommended you give up a guaranteed pension income in exchange for a cash transfer value, and that advice was unsuitable. The FCA has stated that for most people, transferring out of a DB pension is not in their best interests. If you were advised to transfer, particularly between 2015 and 2020, your advice may be worth reviewing.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Important:</strong> Not every defined benefit transfer was mis-sold. Whether advice was suitable depends on your individual circumstances and the quality of advice you received. This page is for general information only. Please contact us for a personal assessment.</p>
            </div>

            <h2>What Is a Defined Benefit Pension?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-4">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> A defined benefit pension promises a set income for life when you retire — it does not depend on how markets perform. A defined contribution pension (like a SIPP or personal pension) gives you a pot of money that grows or shrinks with investments. When advisers recommended transferring from DB to DC, they were asking clients to swap a guaranteed income for investment risk.</p>
            </div>
            <p>A defined benefit (DB) pension — commonly called a final salary pension — is a type of workplace pension that provides a guaranteed retirement income. The income is usually calculated on the basis of your salary and the number of years you were a member of the scheme. Unlike defined contribution pensions, the investment risk sits with the employer rather than the employee.</p>
            <p>DB pensions are widely regarded as extremely valuable because they offer:</p>
            <ul>
              <li>A guaranteed income for life, regardless of investment markets</li>
              <li>Inflation-linked increases to protect against the rising cost of living</li>
              <li>Death benefits for spouses or dependants</li>
              <li>No investment risk for the member</li>
            </ul>
            <p>The FCA has stated that, for most people, it will not be in their best interests to transfer out of a DB pension. This position is reflected in the FCA's <a href="https://www.fca.org.uk/firms/defined-benefit-pension-transfers" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">guidance on defined benefit pension transfers</a>.</p>

            <div className="not-prose overflow-x-auto mb-8 mt-6">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold"></th>
                    <th className="text-left p-3 font-semibold">Defined Benefit (DB)</th>
                    <th className="text-left p-3 font-semibold">Defined Contribution (DC)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Retirement income', 'Guaranteed for life', 'Depends on investment returns'],
                    ['Investment risk', 'Employer bears the risk', 'You bear all the risk'],
                    ['Inflation protection', 'Usually included', 'Not guaranteed'],
                    ['Death benefits', 'Spouse/dependant pension', 'Remaining fund value'],
                    ['Flexibility', 'Limited', 'Greater flexibility'],
                    ['FCA position on transfer', 'Not in most people\'s best interests', 'N/A (already DC)'],
                  ].map(([feature, db, dc], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{feature}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{db}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{dc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Why Were DB Transfers Mis-Sold?</h2>
            <p>During periods when transfer values were high — particularly between approximately 2015 and 2020 — many financial advisers recommended transfers out of DB schemes. Some of this advice was appropriate, but a significant volume of advice has since been found to have been unsuitable.</p>
            <p>Common problems with DB transfer advice included:</p>
            <ul>
              <li>Failure to adequately explain the value of the guaranteed benefits being given up</li>
              <li>Insufficient comparison between the DB benefits and what the transferred fund could realistically provide</li>
              <li>Failure to assess whether the client genuinely needed the flexibility of a defined contribution arrangement</li>
              <li>Inadequate risk profiling or ignoring the client's actual risk tolerance</li>
              <li>Conflicts of interest where the adviser was incentivised to recommend a transfer</li>
              <li>Failure to consider the client's wider financial circumstances</li>
              <li>Recommending transfer to vulnerable clients who were unsuitable for high-risk investments</li>
            </ul>

            <h2>The Importance of Independent Advice</h2>
            <p>Since April 2015, anyone with a DB pension worth over £30,000 who wants to transfer must take regulated financial advice first. This advice must come from a qualified pension transfer specialist. The requirement exists precisely because DB transfers are complex and the risks of giving up guaranteed benefits are significant.</p>
            <p>If you received such advice and it has since turned out to be unsuitable, you may have a claim against the adviser or their firm.</p>

            <h2>What Losses May Be Recoverable?</h2>
            <p>A compensation assessment for a DB transfer claim typically compares:</p>
            <ul>
              <li>The income you would have received from the DB scheme had you not transferred</li>
              <li>The actual value of your transferred fund today</li>
              <li>Charges paid since the transfer</li>
              <li>Investment performance of the transferred funds</li>
              <li>Spouse and dependant benefits that have been lost</li>
            </ul>
            <p>These calculations are complex and require professional assessment. The aim is generally to restore you to the position you would have been in had the unsuitable advice not been given.</p>

            <h2>Who Can You Claim Against?</h2>
            <p>A claim arising from unsuitable DB transfer advice may potentially be directed at:</p>
            <ul>
              <li>The financial adviser or advisory firm that gave the advice</li>
              <li>The firm that employs or employed the adviser at the time</li>
              <li>In some cases, the SIPP operator who accepted the transfer</li>
            </ul>
            <p>Where an advisory firm has since failed and cannot meet claims, the FSCS may be able to compensate you. <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Learn more about FSCS claims</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />

            <div className="mt-8 bg-[#f0f4f8] rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-2">Related Claim Types</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 bg-white border border-gray-200 text-[#1e3a5f] text-xs font-medium px-3 py-1.5 rounded-full hover:border-[#c9a84c] transition-colors">
                    {l.label} <ArrowRight size={11} />
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">DB Transfer Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your defined benefit pension transfer. A solicitor will review your case.</p>
              <ContactForm compact />
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-red-600" />
                <span className="font-semibold text-red-800 text-sm">High-Value Claims</span>
              </div>
              <p className="text-red-700 text-xs leading-relaxed">DB transfer claims can involve significant sums and complex calculations. Specialist legal support can be especially valuable in these cases.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <span className="font-semibold text-amber-800 text-sm">Time Limits Apply</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">Time limits for DB transfer claims vary. Please seek advice as soon as possible.</p>
              <Link href="/time-limits-mis-sold-pension-claims/" className="text-amber-700 text-xs font-semibold underline mt-2 inline-block">Learn about time limits</Link>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
