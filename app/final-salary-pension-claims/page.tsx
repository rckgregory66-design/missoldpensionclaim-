import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Final Salary Pension Transfer Claims | Final Salary Mis-Selling Solicitors',
  description: 'Were you advised to give up your final salary pension? Solicitor-led support for final salary pension transfer mis-selling claims. Free initial enquiry.',
  alternates: { canonical: '/final-salary-pension-claims/' },
}

const faqs = [
  { q: 'What is a final salary pension?', a: 'A final salary pension is a type of defined benefit occupational pension where the retirement income is calculated based on your final salary (or career average salary in some schemes) and the number of years you were a member. The income is paid for life and is usually increased in line with inflation.' },
  { q: 'Is a final salary pension the same as a defined benefit pension?', a: 'Yes. Final salary pensions are a type of defined benefit pension. The terms are often used interchangeably. Other defined benefit pensions may be based on career average earnings rather than final salary, but all defined benefit pensions share the key feature of a guaranteed retirement income.' },
  { q: 'Should I have been advised to transfer out of my final salary pension?', a: 'The Financial Conduct Authority has stated that for most people it will not be in their interests to transfer out of a defined benefit pension. Advice to transfer should only be given where there is clear justification based on the individual\'s specific circumstances. If you were advised to transfer and the advice was not based on a thorough analysis of your situation, you may have grounds for a claim.' },
  { q: 'What if I was told the transfer value was very high?', a: 'High transfer values were common during certain periods, particularly between 2015 and 2020, when low interest rates inflated DB transfer values. A high transfer value does not automatically mean that transferring was in your best interests. An adviser must still consider your overall circumstances, income needs, attitude to risk and other factors.' },
]

export default function FinalSalaryPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Final Salary Pension Claims', item: '/final-salary-pension-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Final Salary Pension Transfer Claims" description={metadata.description as string} url="/final-salary-pension-claims/" />
      <ArticleSchema title="Final Salary Pension Transfer Claims" description={metadata.description as string} url="/final-salary-pension-claims/" />

      <Breadcrumb crumbs={[{ label: 'Final Salary Pension Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Final Salary Pension Transfer Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'A final salary pension pays a guaranteed income for life — giving up that income is one of the most consequential financial decisions a person can make.',
              'Advisers who recommended transferring out were required to demonstrate that doing so was clearly in your best interests — the FCA says for most people it was not.',
              'If you transferred between 2015 and 2020 when transfer values were artificially high, the advice is especially worth reviewing.',
              'Compensation typically means calculating the value of the guaranteed income you would have received versus what your fund is now worth.',
              'Both the FOS and FSCS routes are available depending on whether the adviser firm is still trading.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A final salary pension is one of the most valuable financial assets many people will ever have. If you were advised to give it up and the advice was unsuitable, you may be able to make a claim. This page explains what final salary pensions are, why transfers are so often problematic, and how a claim may be pursued.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A final salary pension transfer claim is a complaint or legal action against a financial adviser who recommended you give up your guaranteed lifetime income. Final salary and defined benefit pensions are the same thing. The FCA's position is that for most people, transferring out is not in their best interests. If you received advice to transfer — especially between 2015 and 2020 when transfer values were high — it is worth a free review.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Important:</strong> Not all final salary pension transfers are mis-sold. Whether advice was suitable depends on your individual circumstances. Please contact us for a personal assessment.</p>
            </div>

            <h2>What Is a Final Salary Pension?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-4">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> A final salary pension pays you a set amount every year for the rest of your life — worked out from your salary and years in the scheme. You cannot run out of money because it is not a pot you draw from; it is an income the scheme guarantees to pay. That guarantee is exactly what is lost when an adviser recommends a transfer out.</p>
            </div>
            <p>A final salary pension is a type of occupational pension that provides a guaranteed income for life on retirement. The income is typically calculated as a fraction of your salary multiplied by your years of service in the scheme. For example, a 1/60ths scheme might pay 1/60th of your final salary for each year of service.</p>
            <p>Key features of final salary pensions include:</p>
            <ul>
              <li>Guaranteed retirement income paid for life</li>
              <li>Income linked to final salary rather than investment performance</li>
              <li>Protection against inflation through annual increases</li>
              <li>Death benefits for spouses and dependent children</li>
              <li>No investment risk for the scheme member</li>
            </ul>

            <h2>The Value You Give Up on Transfer</h2>
            <p>When you transfer out of a final salary pension, you give up all of those guarantees in exchange for a lump sum — known as the Cash Equivalent Transfer Value (CETV). Once transferred, your retirement income depends entirely on how the transferred fund is invested and market performance. For most people, this represents a significant downgrade in the security of their retirement.</p>
            <p>The FCA's position is clear: for the majority of people, giving up a defined benefit pension will not be in their best interests. Advice to transfer should be the exception, not the rule, and should be supported by a rigorous analysis of the individual's specific circumstances.</p>

            <h2>When Final Salary Transfer Advice May Have Been Unsuitable</h2>
            <p>Potential grounds for a final salary transfer claim may include:</p>
            <ul>
              <li>The adviser failed to properly explain the guaranteed benefits being given up</li>
              <li>The transfer value analysis did not genuinely compare like for like</li>
              <li>Your income needs in retirement were not properly considered</li>
              <li>Your attitude to risk was not accurately assessed</li>
              <li>You were not told about the charges that would apply post-transfer</li>
              <li>The adviser had a financial incentive to recommend a transfer</li>
              <li>You did not fully understand what you were agreeing to</li>
              <li>You were vulnerable, elderly or in poor health and the transfer was inappropriate</li>
              <li>You were told the transfer was low risk or that returns were guaranteed</li>
            </ul>

            <h2>What You May Be Able to Recover</h2>
            <p>A compensation assessment for a final salary transfer claim typically aims to put you in the position you would have been in had you retained your scheme membership. This involves modelling what your scheme income would have been worth and comparing it to the current value of your transferred fund. The assessment is complex and must be done on a case-by-case basis.</p>

            <h2>How to Proceed</h2>
            <p>If you believe you were wrongly advised to transfer out of a final salary pension, you should:</p>
            <ol>
              <li>Gather any documents you have relating to the transfer — including the suitability letter, transfer value analysis, and any correspondence with your adviser</li>
              <li>Contact us for a free initial assessment of your situation</li>
              <li>We will identify the appropriate route and explain your options clearly</li>
            </ol>
            <p>See also our page on <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit pension transfer claims</Link>, which covers the same area in more detail.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Final Salary Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Contact us for a free, no-obligation review of your final salary pension transfer.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'FSCS Claims', href: '/fscs-pension-claims/' },
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
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
