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
  title: 'Pension Transfer Claim | Mis-Sold Transfer & BSPS Claims',
  description: 'Were you advised to transfer out of a defined benefit or final salary pension, including the British Steel Pension Scheme? You may have a pension transfer mis-selling claim.',
  alternates: { canonical: '/pension-transfer-claim/' },
}

const faqs = [
  {
    q: 'What is a pension transfer mis-selling claim?',
    a: 'A pension transfer mis-selling claim arises where a financial adviser recommended you transfer out of a defined benefit (final salary) pension into a personal or SIPP arrangement, and that advice was unsuitable. Common reasons advice may have been unsuitable include: the recommendation to give up guaranteed benefits without adequate justification; failure to explain the value of the guaranteed income you were giving up; or recommending a high-risk or illiquid investment within the receiving SIPP.',
  },
  {
    q: 'What was the British Steel Pension Scheme (BSPS) scandal?',
    a: 'The British Steel Pension Scheme (BSPS) scandal involved thousands of steelworkers who were approached by financial advisers and encouraged to transfer out of their valuable defined benefit pension at a time of uncertainty about the scheme\'s future. Many received unsuitable advice and transferred into high-risk SIPPs, losing significant pension value as a result. The FCA undertook a major review of BSPS advice, finding widespread failings. If you were a BSPS member who transferred out on the advice of a financial adviser, you may be entitled to compensation.',
  },
  {
    q: 'How do I know if I was mis-sold a pension transfer?',
    a: 'You may have been mis-sold a pension transfer if: your adviser did not fully explain the value of the defined benefit pension you were giving up; you were not made aware of the risks of transferring to a personal pension or SIPP; the CETV (cash equivalent transfer value) was presented as an attractive lump sum without explanation of what it represents; or the advice did not take account of your full financial circumstances, health, or retirement needs. If you transferred out of a defined benefit pension and your pension pot is worth less than you expected, you should consider making a claim.',
  },
  {
    q: 'Is there a time limit for making a pension transfer mis-selling claim?',
    a: 'Yes. Time limits apply to pension mis-selling claims. The FCA\'s rules generally require that complaints are made within six years of the event, or three years from when you knew (or ought to have known) you had grounds to complain — whichever is later. In many cases involving pension transfers, the three-year knowledge date is the more relevant one. You should not delay seeking advice. Contact us as soon as possible to ensure your claim is not time-barred.',
  },
  {
    q: 'Can I claim if the adviser firm that gave me the advice has since closed?',
    a: 'Yes. If the firm that gave you pension transfer advice has failed or become insolvent, you may be able to claim through the Financial Services Compensation Scheme (FSCS), which can pay up to £85,000 per person per failed firm. If the firm is still trading, you should complain to the firm first and then to the Financial Ombudsman Service.',
  },
  {
    q: 'What compensation can I receive for a mis-sold pension transfer?',
    a: 'The aim of compensation for a mis-sold pension transfer is generally to put you back in the position you would have been in had you not transferred — meaning the pension income you would have received from the defined benefit scheme throughout your retirement. The value of this can be substantial, particularly for long-serving members with high final salaries. The actual compensation will depend on the specific facts of your case and the route through which it is resolved.',
  },
]

export default function PensionTransferClaimPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Transfer Claim', item: '/pension-transfer-claim/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Transfer Claim" description={metadata.description as string} url="/pension-transfer-claim/" />
      <ArticleSchema title="Pension Transfer Claim" description={metadata.description as string} url="/pension-transfer-claim/" />

      <Breadcrumb crumbs={[{ label: 'Pension Transfer Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Transfer Claim: Were You Mis-Sold a Transfer?</h1>
            <AuthorBox publishedDate="August 2025" reviewedDate="August 2025" />
            <TLDRBox points={[
              'If a financial adviser recommended you transfer out of a defined benefit (final salary) pension and that advice was unsuitable, you may have a claim.',
              'The British Steel Pension Scheme (BSPS) scandal saw thousands of steelworkers receive unsuitable transfer advice — many are entitled to compensation.',
              'Compensation aims to restore the guaranteed income you gave up by returning you to the financial position you would have been in.',
              'Time limits apply — generally six years from the event or three years from when you became aware of the problem, whichever is later.',
              'If the adviser firm has since failed, claims can be made through the FSCS (up to £85,000 per firm). If the firm is still trading, use the Financial Ombudsman.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension transfers from defined benefit schemes can be among the most consequential financial decisions a person makes. When that decision was driven by unsuitable advice — advice that failed to account for the value of guaranteed benefits, the risks involved, or your personal circumstances — you may be entitled to make a pension transfer mis-selling claim. This page explains what pension transfer mis-selling looks like, who may be affected, and how to pursue a claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If a financial adviser told you to transfer out of a defined benefit or final salary pension — including the British Steel Pension Scheme — and you now believe that advice was wrong, you may have a <strong className="text-white">pension transfer mis-selling claim</strong>. Compensation can be significant, particularly where substantial guaranteed income was lost.</p>
            </div>

            <h2>What Is a Defined Benefit Pension Transfer?</h2>
            <p>A defined benefit (DB) pension — also called a final salary pension — provides a guaranteed income in retirement based on your salary and years of service. It is a valuable and rare benefit. When you transfer out of a DB pension, you give up that guaranteed income in exchange for a cash value (known as the Cash Equivalent Transfer Value, or CETV), which is then invested in a personal pension or SIPP.</p>
            <p>The FCA has long held that transfers out of DB schemes are unlikely to be in most people's best interests, given the value of the guaranteed benefits being surrendered. Advisers are required to apply a high level of scrutiny before recommending such a transfer, and the starting point should be that a transfer is not suitable. Where advisers failed to meet this standard, a mis-selling claim may arise.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-2">British Steel Pension Scheme (BSPS)</p>
              <p className="text-amber-700 text-sm leading-relaxed">The BSPS scandal is one of the largest pension mis-selling episodes in UK history. Between 2016 and 2018, thousands of British Steel workers were approached by financial advisers — many operating from so-called "pension clinics" near steelworks — and encouraged to transfer out of the BSPS. The FCA found that the majority of advice reviewed was unsuitable. If you were a BSPS member who transferred, you may have a claim regardless of whether the adviser firm is still trading.</p>
            </div>

            <h2>Signs Your Pension Transfer Advice May Have Been Unsuitable</h2>
            <ul>
              <li>Your adviser did not explain the full value of your guaranteed pension income in clear terms</li>
              <li>The CETV (lump sum offer) was presented as a large sum without explaining what you were giving up</li>
              <li>You were not told that the default position is that transfers are unlikely to be in your best interests</li>
              <li>Your health, life expectancy, or retirement goals were not properly considered</li>
              <li>You were transferred into a SIPP investing in high-risk or illiquid assets</li>
              <li>You were one of many people advised by the same firm to transfer out of the same scheme</li>
              <li>The advice was given quickly, without detailed analysis of your personal circumstances</li>
            </ul>

            <h2>Who Can Make a Pension Transfer Claim?</h2>
            <p>You may be able to make a claim if:</p>
            <ul>
              <li>You were a member of a <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit or final salary pension scheme</Link></li>
              <li>A financial adviser recommended you transfer to a personal pension or <Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">SIPP</Link></li>
              <li>You followed that advice and transferred out</li>
              <li>You have suffered a loss — either in pension income, pension value, or both</li>
              <li>The advice was given by a UK FCA-regulated adviser</li>
            </ul>
            <p>You do not need to have lost money immediately. If you gave up a guaranteed income and are now receiving less than you would have, that can constitute a loss even if the transferred funds have grown in value.</p>

            <h2>How to Make a Pension Transfer Mis-Selling Claim</h2>
            <ol>
              <li><strong>Check your paperwork:</strong> Locate the suitability report and any written advice you received. This sets out the adviser's reasoning and is important evidence.</li>
              <li><strong>Calculate your loss:</strong> The loss is typically the difference between what your DB pension would have paid in retirement and what you are now on track to receive — a potentially very large figure for long-serving members.</li>
              <li><strong>Identify the right route:</strong> If the firm is still trading, complain to the firm and then to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link>. If the firm has failed, apply to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS</Link>.</li>
              <li><strong>Get legal advice:</strong> For substantial claims — particularly those involving large guaranteed income lost — solicitor support can significantly improve the outcome.</li>
            </ol>
            <p><Link href="/make-a-claim/" className="text-[#1e3a5f] underline font-medium">Start your claim here</Link> or <Link href="/contact/" className="text-[#1e3a5f] underline font-medium">contact us</Link> to speak to a solicitor about your options.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Pension Transfer Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your pension transfer and the advice you received. We can assess whether you have a claim.</p>
              <ContactForm compact />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} />No Win No Fee Available</h3>
              <p className="text-green-700 text-xs leading-relaxed">Many pension transfer mis-selling claims are handled on a <Link href="/no-win-no-fee-pension-claims/" className="text-green-700 underline">no win no fee</Link> basis. You pay nothing if your claim is unsuccessful.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
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
