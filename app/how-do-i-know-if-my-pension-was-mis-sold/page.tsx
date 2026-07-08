import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, AlertTriangle, ArrowRight, XCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'How Do I Know If My Pension Was Mis-Sold? | Eligibility Checklist',
  description: 'Use our practical checklist to identify the signs that your pension may have been mis-sold. Find out whether you may have grounds for a compensation claim.',
  alternates: { canonical: '/how-do-i-know-if-my-pension-was-mis-sold/' },
}

const faqs = [
  { q: 'Do I need to have all my documents before making an enquiry?', a: 'No. You do not need to have all your documents ready before making an initial enquiry. The first step is a free conversation about what happened. We can help identify what documents may be relevant and, in some cases, assist in obtaining records from third parties.' },
  { q: 'What if I signed paperwork agreeing to the transfer at the time?', a: 'The fact that you signed documentation agreeing to a pension transfer does not prevent you from making a claim. You are entitled to rely on the professional expertise of a regulated adviser. If the advice was unsuitable, it remains potentially actionable even if you agreed to proceed at the time.' },
  { q: 'My pension has just lost money — does that mean it was mis-sold?', a: 'Not necessarily. A pension can lose value for many reasons, including general market conditions, without any fault on the part of the adviser. Mis-selling relates specifically to whether the advice was suitable for your individual circumstances — not whether you simply made a loss. However, if you also recognise any of the warning signs on this page, it is worth a free review.' },
  { q: 'Is there a time limit for making a mis-sold pension claim?', a: 'Yes. Time limits apply and vary depending on the route. For Financial Ombudsman Service complaints, you generally have six months from the firm\'s final response. For legal claims, the usual limitation period is six years from the loss, or three years from when you first knew about it. Do not assume you are out of time without seeking advice — the starting point is not always obvious.' },
]

const signs = [
  { sign: 'You were advised to transfer out of a final salary or defined benefit pension', detail: 'Defined benefit pensions offer guaranteed income for life. Advice to transfer out is only appropriate in specific circumstances. If you were not clearly told what you were giving up, this is a significant warning sign.' },
  { sign: 'You were moved into a SIPP without a proper explanation', detail: 'Self-invested personal pensions are more complex than standard pensions. If you were not clearly told how a SIPP works, what it would invest in, and what the risks were, the advice may have been unsuitable.' },
  { sign: 'Your pension was placed into high-risk or unregulated investments', detail: 'Investments such as overseas property, storage pods, care home bonds or mini-bonds are generally considered unsuitable for ordinary pension savers, particularly those approaching retirement.' },
  { sign: 'You were promised high returns or guaranteed income', detail: 'Promises of high or guaranteed returns on pension investments are a warning sign. Advisers must not mislead clients about the level of risk or the likelihood of particular returns.' },
  { sign: 'The charges involved were not clearly explained', detail: 'All charges, including adviser fees, product charges and ongoing management costs, must be disclosed. Hidden or unexplained charges can significantly erode pension fund value over time.' },
  { sign: 'You lost guaranteed benefits you had built up', detail: 'Guaranteed benefits such as a guaranteed annuity rate, final salary income, or death in service benefits are valuable. If you were not clearly told about the guaranteed benefits you were giving up, the advice may have been inadequate.' },
  { sign: 'The risks were not properly or honestly explained', detail: 'Advisers must explain investment risks clearly. If you were led to believe an investment was safe or low-risk when it was not, or if the risks were glossed over, this is a potential ground for a claim.' },
  { sign: 'The advice did not seem to match your circumstances', detail: 'Advice must be based on your individual situation — your age, income, outgoings, other assets, attitude to risk and retirement needs. If the advice you received seemed generic or did not reflect your personal position, it may have been unsuitable.' },
  { sign: 'You did not fully understand what you were agreeing to', detail: 'You are entitled to understand the advice being given to you and its implications. If paperwork was presented quickly, if explanations were confusing, or if you felt pressured to sign, these are concerning signs.' },
  { sign: 'You felt pressured to proceed with the transfer or investment', detail: 'Legitimate financial advisers do not pressure clients. If you were told the offer was time-limited, that you had to decide quickly, or were otherwise pressured into agreeing to a transfer, this may be relevant to a claim.' },
  { sign: 'Your attitude to risk was not properly assessed', detail: 'Advisers must carry out a proper risk assessment before making recommendations. If your risk questionnaire was not completed carefully, or if the recommended investment did not match the risk level assessed, the advice may be open to challenge.' },
  { sign: 'The adviser received a commission or introduction fee', detail: 'Where an adviser had a financial incentive to recommend a particular pension or investment, that creates a potential conflict of interest. This should have been disclosed. If it was not, or if the conflict influenced the advice, this is a potential issue.' },
]

export default function EligibilityPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How Do I Know If My Pension Was Mis-Sold?', item: '/how-do-i-know-if-my-pension-was-mis-sold/' }]} />
      <WebPageSchema title="How Do I Know If My Pension Was Mis-Sold?" description={metadata.description as string} url="/how-do-i-know-if-my-pension-was-mis-sold/" />
      <ArticleSchema title="How Do I Know If My Pension Was Mis-Sold?" description={metadata.description as string} url="/how-do-i-know-if-my-pension-was-mis-sold/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'How Do I Know If My Pension Was Mis-Sold?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How Do I Know If My Pension Was Mis-Sold?</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'Pension mis-selling is not always obvious — many people only discover a problem years later when pension savings have been reduced.',
              'Key warning signs include: being advised to transfer out of a final salary scheme; being moved into a SIPP; funds placed into high-risk or unregulated products.',
              'Advisers must base their advice on your individual circumstances — if the advice seemed generic or was not explained clearly, it may have been unsuitable.',
              'Signing paperwork at the time, or not complaining earlier, does not prevent you from making a claim now.',
              'If any of these warning signs apply, a free initial review can assess whether you have grounds for a claim.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension mis-selling is not always obvious. Many people do not realise that the advice they received was unsuitable until years later, when pension savings have been reduced or financial circumstances have changed. The checklist below identifies common warning signs.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The most common signs of pension mis-selling are: being advised to transfer out of a <a href="/defined-benefit-pension-transfer-claims/" className="text-[#c9a84c] underline">final salary or defined benefit scheme</a>; being moved into a <a href="/mis-sold-sipp-claims/" className="text-[#c9a84c] underline">SIPP</a> without proper explanation; having pension funds invested in <a href="/high-risk-pension-investment-claims/" className="text-[#c9a84c] underline">high-risk products</a>; or receiving advice that was not based on your personal circumstances. If any of these apply, it is worth a free review.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-4">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> Pension mis-selling means an adviser gave you unsuitable advice — not that your pension simply lost value due to markets. The question is whether the adviser met their professional duty to you given your individual circumstances. If you tick any of the warning signs below, it is worth a free review.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>Please note:</strong> Recognising one or more of these signs does not automatically mean you have a valid claim. Whether you have grounds for a claim depends on your individual circumstances, the advice you received, and the losses or lost benefits you have suffered. This checklist is for general guidance only. Please contact us for a personal assessment.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#0f2035] mb-6">Warning Signs Checklist</h2>

            <div className="space-y-4">
              {signs.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0f2035] mb-2">{item.sign}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#f0f4f8] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#0f2035] mb-4">What Does Not Necessarily Mean Mis-Selling</h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">It is important to understand that not every pension loss or poor outcome means advice was wrong. The following do not by themselves establish mis-selling:</p>
              <ul className="space-y-2">
                {[
                  'Your pension fund has fallen in value due to general market conditions',
                  'You are not happy with the performance of your pension investments',
                  'You simply wish you had made a different decision',
                  'The pension turned out to be more expensive than you hoped',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <XCircle size={16} className="text-gray-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">The key question is whether the adviser met their professional and regulatory obligations to you given what they knew about your circumstances at the time. A solicitor can help you assess this.</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#0f2035] mb-4">Documents That May Help You</h2>
              <p className="text-gray-600 text-sm mb-4">If you decide to seek advice about a potential claim, the following documents can be useful:</p>
              <ul className="space-y-2">
                {[
                  'Pension transfer report or suitability letter from your adviser',
                  'Pension statements before and after the transfer',
                  'Risk profile or attitude to risk questionnaire',
                  'SIPP or personal pension paperwork',
                  'Investment documents relating to specific products',
                  'Correspondence with your adviser or their firm',
                  'Any charges or fee information',
                  'Any complaint letters already sent and responses received',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-3">Do not worry if you do not have all of these documents. It is still worth making an enquiry. Some records may be available from third parties.</p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#0f2035] mb-4">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#0f2035] mb-3">What Should I Do Next?</h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">If you have recognised one or more of the warning signs above, the next step is to seek professional advice. A solicitor can review what happened, help you gather relevant documents, identify the appropriate route, and explain your options clearly — with no obligation.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 bg-[#0f2035] hover:bg-[#162d4a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                  Start Free Enquiry <ArrowRight size={14} />
                </Link>
                <Link href="/pension-claim-process/" className="inline-flex items-center gap-2 border border-[#0f2035] text-[#0f2035] hover:bg-[#0f2035] hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                  How the Process Works
                </Link>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Get a Free Assessment</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us what happened. A solicitor will review your situation for free, with no obligation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Relevant Claim Types</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
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
