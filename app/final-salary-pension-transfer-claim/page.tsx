import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Final Salary Pension Transfer Claim | Were You Mis-Sold?',
  description: 'If a financial adviser recommended you transfer out of a final salary (defined benefit) pension, you may have been mis-sold. Find out how to make a final salary pension transfer claim.',
  alternates: { canonical: '/final-salary-pension-transfer-claim/' },
}

const faqs = [
  {
    q: 'What is a final salary pension?',
    a: 'A final salary pension — also called a defined benefit (DB) pension — is a workplace pension that provides a guaranteed income in retirement. The amount you receive is calculated based on your salary and the number of years you were a member of the scheme. Because the income is guaranteed and does not depend on investment performance, final salary pensions are considered very valuable. Many schemes also include inflation protection, a spouse\'s pension, and other benefits that are lost if you transfer out.',
  },
  {
    q: 'Why would a financial adviser recommend transferring out of a final salary pension?',
    a: 'Advisers may recommend a final salary pension transfer for a number of reasons — including flexibility in how you take benefits, the ability to pass the fund on to beneficiaries, or in response to high Cash Equivalent Transfer Values (CETVs) at the time. Some advisers had legitimate reasons for recommending transfers in specific cases. However, the FCA\'s position is that transfers are unlikely to be in most people\'s best interests, and the high volume of unsuitable transfer advice has led to widespread claims.',
  },
  {
    q: 'What does "mis-sold" mean in the context of a final salary transfer?',
    a: 'A final salary pension transfer is mis-sold where the advice given was unsuitable — for example: the adviser failed to properly quantify the value of the guaranteed benefits being given up; the suitability assessment was inadequate or based on incorrect information; the risks of the receiving scheme (e.g. a SIPP with high-risk investments) were not properly disclosed; the advice did not take proper account of your health, age, or financial circumstances; or the adviser had a financial incentive to recommend a transfer that was not disclosed.',
  },
  {
    q: 'How much compensation can I receive for a mis-sold final salary transfer?',
    a: 'Compensation for a mis-sold final salary pension transfer aims to restore you to the position you would have been in had you stayed in the scheme — meaning the pension income you have lost and will lose throughout your retirement. This can be very substantial for long-serving members with high salaries. The actual amount will depend on your specific scheme, salary, years of service, and what has happened to the transferred funds. A solicitor or financial expert can help calculate the loss.',
  },
  {
    q: 'Can I still claim if I have already started drawing my pension from the new scheme?',
    a: 'Yes. The fact that you have already started taking your pension from a personal pension or SIPP does not prevent you from making a mis-selling claim. The loss is calculated from the point of transfer and takes into account the income you would have received from the final salary scheme. You should seek advice as soon as possible, as time limits apply.',
  },
  {
    q: 'What is the CETV and how does it relate to a claim?',
    a: 'The Cash Equivalent Transfer Value (CETV) is the lump sum value the pension scheme places on your guaranteed benefits — the amount they will pay to transfer your pension pot to another scheme. CETVs were unusually high at certain periods (particularly between 2015 and 2020 when bond yields were low), which led many advisers to recommend transfers. However, a high CETV does not on its own mean a transfer is suitable. Many advisers failed to properly explain that the CETV represents the value of all future guaranteed income and inflation-linked increases.',
  },
]

export default function FinalSalaryTransferClaimPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Final Salary Pension Transfer Claim', item: '/final-salary-pension-transfer-claim/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Final Salary Pension Transfer Claim" description={metadata.description as string} url="/final-salary-pension-transfer-claim/" />
      <ArticleSchema title="Final Salary Pension Transfer Claim" description={metadata.description as string} url="/final-salary-pension-transfer-claim/" />

      <Breadcrumb crumbs={[{ label: 'Final Salary Transfer Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Final Salary Pension Transfer Claim: Were You Mis-Sold?</h1>
            <AuthorBox publishedDate="August 2025" reviewedDate="August 2025" />
            <TLDRBox points={[
              'A final salary (defined benefit) pension provides guaranteed income for life. Transferring out gives up those guarantees permanently.',
              'If a financial adviser recommended you transfer out and that advice was unsuitable, you may have a mis-selling claim.',
              'The FCA\'s starting position is that a transfer out of a final salary pension is unlikely to be in most people\'s best interests.',
              'Compensation aims to restore the guaranteed income you lost — which can amount to tens or hundreds of thousands of pounds.',
              'Time limits apply. If you transferred between 2015 and 2022, there is a real risk your claim may already be approaching the deadline.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A final salary pension — also called a defined benefit scheme — provides one of the most valuable retirement benefits available: a guaranteed income for life, protected against inflation, with no investment risk to you. Transferring out of such a scheme is an irreversible decision that can result in significantly lower retirement income. Where that decision was driven by unsuitable advice, a final salary pension transfer mis-selling claim may allow you to recover what you lost.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you were advised to transfer out of a final salary or defined benefit pension by a financial adviser and you now have less pension income than you expected, you may have a <strong className="text-white">mis-selling claim</strong>. The FCA has identified widespread failings in this area. Compensation can be very significant.</p>
            </div>

            <h2>What Makes a Final Salary Pension So Valuable?</h2>
            <p>Final salary — or defined benefit — pensions provide benefits that cannot be replicated by personal pensions or SIPPs. These include:</p>
            <ul>
              <li>A <strong>guaranteed income for life</strong> regardless of how long you live</li>
              <li>Annual <strong>inflation-linked increases</strong> that protect your spending power</li>
              <li>A <strong>spouse's or dependant's pension</strong> if you die before or during retirement</li>
              <li>A <strong>lump sum death benefit</strong> in some cases</li>
              <li>No investment risk to you — the fund is managed by the scheme trustees</li>
            </ul>
            <p>When you transfer out, you give up all of these benefits permanently in exchange for a cash value (the CETV) that is then invested in a personal pension or SIPP. From that point, your retirement income depends entirely on investment performance — which may be lower, especially over long retirements.</p>

            <h2>When Is a Final Salary Transfer Mis-Sold?</h2>
            <p>The FCA requires advisers recommending a final salary pension transfer to apply a high level of care and to start from the presumption that a transfer is not in the client's best interests. A transfer may have been mis-sold where:</p>
            <ul>
              <li>The suitability report did not properly explain or quantify the value of the benefits being given up</li>
              <li>The adviser used the size of the CETV as a selling point without explaining what it represents</li>
              <li>Your health, life expectancy, or spouse's needs were not properly considered</li>
              <li>You were transferred into a <Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">SIPP</Link> investing in high-risk or illiquid assets</li>
              <li>The advice was part of a mass transfer exercise at your employer (particularly relevant to British Steel, Carillion, and similar schemes)</li>
              <li>The adviser had undisclosed financial incentives to recommend a transfer</li>
              <li>The risks were not explained clearly in writing before you transferred</li>
            </ul>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-2">Time Limits — Act Now</p>
              <p className="text-amber-700 text-sm leading-relaxed">Many people transferred between 2015 and 2020 when CETVs were at historically high levels. If you transferred in this period, the six-year deadline from the date of advice may be approaching or may have already passed for some claimants — but the three-year knowledge date may still be open. <Link href="/contact/" className="text-amber-700 underline font-medium">Contact us now</Link> to establish whether your claim is still within time.</p>
            </div>

            <h2>How Is Loss Calculated?</h2>
            <p>The loss in a final salary transfer mis-selling claim is typically calculated as the difference between:</p>
            <ul>
              <li><strong>What you would have received</strong> from the defined benefit scheme throughout your retirement (based on your scheme rules, salary, and service record)</li>
              <li><strong>What you are on track to receive</strong> from the personal pension or SIPP you transferred into</li>
            </ul>
            <p>For a long-serving member with a reasonable salary, this can amount to hundreds of thousands of pounds. The calculation requires specialist pension actuarial input, which we can arrange as part of assessing your case.</p>

            <h2>How to Make a Final Salary Transfer Claim</h2>
            <ol>
              <li><strong>Locate your suitability report:</strong> This is the written advice document your adviser should have provided. If you do not have it, we can help you obtain it.</li>
              <li><strong>Identify whether the firm is still trading:</strong> Check the FCA register. If the firm has failed, you will claim through the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS</Link>. If trading, complain to the firm then the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman</Link>.</li>
              <li><strong>Gather your pension documents:</strong> Collect any letters from your original DB scheme, transfer paperwork, and statements from the receiving pension.</li>
              <li><strong>Get advice without delay:</strong> Time limits apply. <Link href="/contact/" className="text-[#1e3a5f] underline">Contact us</Link> to discuss your case before the deadline passes.</li>
            </ol>

            <p><Link href="/make-a-claim/" className="text-[#1e3a5f] underline font-medium">Start your claim here</Link> or <Link href="/contact/" className="text-[#1e3a5f] underline font-medium">contact us</Link> to speak to a solicitor.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Final Salary Transfer Claim</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your final salary pension and the advice you received. We can assess whether you have a claim and calculate your potential compensation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} />Act Before the Deadline</h3>
              <p className="text-red-700 text-xs leading-relaxed">If you transferred between 2015 and 2022, time limits may be approaching. <Link href="/time-limits-mis-sold-pension-claims/" className="text-red-700 underline">Check the time limits</Link> or contact us today.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
                  { label: 'Time Limits for Claims', href: '/time-limits-mis-sold-pension-claims/' },
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
