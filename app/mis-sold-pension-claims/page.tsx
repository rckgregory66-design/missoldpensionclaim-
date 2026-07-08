import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, AlertTriangle, FileText, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Mis-Sold Pension Claims | Pension Compensation Solicitors',
  description: 'Find out what a mis-sold pension claim involves, who can claim, what advice may have been unsuitable and how a solicitor can help you pursue compensation.',
  alternates: { canonical: '/mis-sold-pension-claims/' },
}

const faqs = [
  { q: 'What does it mean for a pension to be mis-sold?', a: 'A pension is mis-sold when a financial adviser recommends a pension product, transfer or course of action that is unsuitable for the client given their personal circumstances, financial situation and attitude to risk. This can include advising a transfer that results in the loss of valuable guaranteed benefits, or placing pension funds into inappropriate investments.' },
  { q: 'Who can make a mis-sold pension claim?', a: 'Anyone who received regulated financial advice about their pension that may have been unsuitable may potentially have grounds for a claim. Eligibility depends on the specific advice received, the losses or lost benefits suffered, who gave the advice and which route is available. A solicitor can assess your individual situation.' },
  { q: 'What evidence do I need?', a: 'Useful documents include your pension transfer documentation, suitability letter, risk profile questionnaire, pension statements, adviser correspondence, and any charges or fees information. Even if you do not have all of these, it is worth making an enquiry as some records may be obtainable from third parties.' },
  { q: 'How long does a mis-sold pension claim take?', a: 'Timescales vary considerably depending on the route. Financial Ombudsman complaints may take several months or longer. FSCS claims have their own timescales. Legal proceedings take longer still. We will give you a realistic estimate once we understand your case.' },
]

export default function MisSoldPensionClaimsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Mis-Sold Pension Claims', item: '/mis-sold-pension-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Mis-Sold Pension Claims" description={metadata.description as string} url="/mis-sold-pension-claims/" />
      <ArticleSchema title="Mis-Sold Pension Claims" description={metadata.description as string} url="/mis-sold-pension-claims/" />

      <Breadcrumb crumbs={[{ label: 'Mis-Sold Pension Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Mis-Sold Pension Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'A mis-sold pension claim is a complaint against a financial adviser who gave you unsuitable advice about a pension transfer or investment.',
              'You may be able to claim if you lost money, gave up guaranteed benefits, or received advice that did not reflect your circumstances.',
              'Three routes are available: Financial Ombudsman Service (firm still trading), FSCS (firm failed), or legal action.',
              'Time limits apply — for FOS complaints, you have six months from the firm\'s final response letter.',
              'Initial enquiries are free. You can also complain directly to the FOS or FSCS without using a solicitor.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you received advice about your pension that turned out to be unsuitable, incorrect or incomplete, you may have grounds to make a mis-sold pension claim. This page explains what pension mis-selling is, who may be able to claim, and how the process works.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A mis-sold pension claim is a legal or regulatory complaint against a financial adviser who recommended a pension transfer or investment that was not suitable for you. If the advice caused you to lose money or give up guaranteed benefits, you may be able to recover those losses through the Financial Ombudsman Service, the FSCS, or legal proceedings — depending on whether the adviser firm is still trading.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Important:</strong> Whether you have a valid claim depends entirely on your individual circumstances, the advice you received, who gave it and the losses suffered. Nothing on this page constitutes legal advice. Please contact us for a personal assessment.</p>
            </div>

            <h2>What Is a Mis-Sold Pension?</h2>
            <p>Pension mis-selling occurs when a regulated financial adviser recommends a course of action relating to your pension that is not suitable for you. In simple terms, it means you were given pension advice that should not have been given — either because it did not reflect your financial situation, your attitude to risk, your needs or your existing benefits.</p>
            <p>Pension mis-selling is distinct from simply making a loss on an investment. Markets go up and down, and not every loss means something went wrong. Mis-selling relates specifically to the quality and suitability of the advice given to you by a regulated professional.</p>

            <h2>What Types of Pension Advice Can Be Mis-Sold?</h2>
            <p>Mis-selling can arise in a number of contexts, including:</p>
            <ul>
              <li>Advice to transfer out of a defined benefit or final salary pension scheme</li>
              <li>Advice to move pension funds into a self-invested personal pension (SIPP)</li>
              <li>Advice to invest pension money into high-risk or unregulated products</li>
              <li>Advice that did not adequately explain the charges involved</li>
              <li>Advice to give up guaranteed retirement income or benefits</li>
              <li>Advice that did not take account of your true attitude to risk</li>
              <li>Advice that recommended switching pensions without a clear benefit to you</li>
            </ul>

            <h2>What Makes Advice Unsuitable?</h2>
            <p>Financial advisers who are regulated by the Financial Conduct Authority (FCA) are required to ensure that the advice they give is suitable for each individual client. The FCA sets out its suitability requirements in the <a href="https://www.handbook.fca.org.uk/handbook/COBS/9/" className="text-[#1e3a5f] underline" target="_blank" rel="noopener noreferrer">Conduct of Business Sourcebook (COBS 9)</a>. This means they must:</p>
            <ul>
              <li>Understand your personal financial circumstances and objectives</li>
              <li>Assess your attitude to risk accurately and honestly</li>
              <li>Explain all significant risks clearly and in a way you can understand</li>
              <li>Compare the advantages and disadvantages of any recommended transfer</li>
              <li>Consider whether staying in your existing pension might be more appropriate</li>
              <li>Provide you with a written suitability report explaining the basis of their recommendation</li>
              <li>Disclose all charges and how they are calculated</li>
            </ul>
            <p>If an adviser failed to do any of the above, or if their recommendation was wrong given what they knew about you, there may be grounds for a mis-selling complaint.</p>

            <h2>Who Can Make a Mis-Sold Pension Claim?</h2>
            <p>You may potentially have grounds for a claim if:</p>
            <ul>
              <li>You received regulated financial advice about your pension from a firm or individual authorised by the FCA</li>
              <li>The advice resulted in a transfer, switch or investment decision</li>
              <li>You suffered a financial loss, or gave up benefits you were not adequately warned about</li>
              <li>The advice was not suitable for your individual circumstances</li>
            </ul>
            <p>It is important to note that not every poor pension outcome means advice was wrong. The question is whether the adviser met their professional and regulatory obligations to you at the time the advice was given.</p>

            <h2>What Losses May Be Recoverable?</h2>
            <p>Compensation for a mis-sold pension claim typically aims to put you back in the position you would have been in had the unsuitable advice not been given. This may include:</p>
            <ul>
              <li>The value of guaranteed benefits given up (for example, the income you would have received from a final salary scheme)</li>
              <li>Investment losses directly attributable to unsuitable advice</li>
              <li>Charges paid as a result of the advised transfer or investment</li>
              <li>In some cases, interest on losses</li>
            </ul>
            <p>What is recoverable depends on the specific circumstances of your case, the route you take and how compensation is calculated. We cannot predict or guarantee an outcome for any individual case.</p>

            <h2>What Documents Might Help?</h2>
            <p>The following documents may be relevant to a mis-sold pension claim. Do not worry if you do not have all of them — it is worth making an initial enquiry regardless.</p>
            <ul>
              <li>Pension transfer report or suitability letter from your adviser</li>
              <li>Pension statements from before and after the transfer</li>
              <li>Risk profile or attitude to risk questionnaire</li>
              <li>SIPP or personal pension paperwork</li>
              <li>Investment documentation relating to the recommended products</li>
              <li>Any charges, fees or commissions information</li>
              <li>Correspondence with your adviser or their firm</li>
              <li>Any complaint letters already sent, or responses received</li>
            </ul>

            <h2>What Are the Time Limits?</h2>
            <p>Time limits can apply to mis-sold pension claims and vary depending on the route available to you. For Financial Ombudsman Service complaints, you generally must complain within six months of receiving your adviser's final response. Different rules apply to FSCS applications and legal claims. If in doubt, seek advice promptly.</p>
            <Link href="/time-limits-mis-sold-pension-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Read more about time limits <ArrowRight size={13} />
            </Link>

            <h2>Routes for Making a Claim</h2>
            <p>There are three main routes for pursuing a mis-sold pension claim:</p>
            <div className="space-y-4 not-prose">
              {[
                { title: 'Financial Ombudsman Service (FOS)', desc: 'A free, independent service for complaints about FCA-authorised firms. You can complain directly without a solicitor.', href: '/financial-ombudsman-pension-complaints/' },
                { title: 'Financial Services Compensation Scheme (FSCS)', desc: 'Provides compensation where an authorised firm has failed and cannot meet claims. You can apply directly.', href: '/fscs-pension-claims/' },
                { title: 'Legal Action', desc: 'Where FOS and FSCS routes are unavailable or insufficient, legal proceedings may be an option.', href: '/pension-claim-process/' },
              ].map(r => (
                <div key={r.title} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#0f2035] mb-1">{r.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{r.desc}</p>
                  <Link href={r.href} className="text-[#1e3a5f] text-sm font-semibold underline">Learn more</Link>
                </div>
              ))}
            </div>

            <h2 className="mt-8">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Start Your Free Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your pension situation. A solicitor will review your case and contact you.</p>
              <ContactForm compact />
            </div>

            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Claim Types</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <span className="font-semibold text-amber-800 text-sm">Time Limits May Apply</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">Delays in seeking advice could affect your ability to claim. We recommend contacting us as soon as possible.</p>
              <Link href="/time-limits-mis-sold-pension-claims/" className="text-amber-700 text-xs font-semibold underline mt-2 inline-block">Learn about time limits</Link>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <PageCTA />
        </div>
      </div>
    </>
  )
}
