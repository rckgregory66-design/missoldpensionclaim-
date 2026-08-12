import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, PoundSterling, Shield } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'
import { ArticleSchema, BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'No Win No Fee Pension Claims | Mis-Sold Pension Solicitors',
  description: 'Edward & Amaury Solicitors can often handle eligible mis-sold pension claims on a no win no fee basis. Learn how funding works, what it may cost and request a free review.',
  alternates: { canonical: '/no-win-no-fee-pension-claims/' },
}

const faqs = [
  { q: 'Can a mis-sold pension claim be handled on a no win no fee basis?', a: 'Edward & Amaury Solicitors can often run financial mis-selling cases on a no win no fee basis. This is not available automatically in every case. The firm must first assess the facts, prospects of success, likely value, available defendant and appropriate claim route.' },
  { q: 'What does no win no fee mean for a pension claim?', a: 'It usually means that the solicitor\'s entitlement to payment depends on the claim succeeding, subject to the terms of a written agreement. The precise definition of success, any success fee or deduction, disbursements and other potential costs must be set out and explained before you agree to proceed.' },
  { q: 'Are there any upfront fees?', a: 'An initial enquiry is free and carries no obligation. If the firm offers a no win no fee agreement, the written terms will explain whether any expenses could arise and whether insurance is appropriate. Do not assume that every possible cost is covered until you have read and discussed the agreement.' },
  { q: 'How much will be deducted if my pension claim succeeds?', a: 'The amount depends on the funding agreement offered for your individual case. No universal percentage is stated on this website. Any proposed success fee, deduction, VAT, disbursement or insurance cost will be explained clearly before you decide whether to instruct the firm.' },
  { q: 'Can I make a pension complaint without using a solicitor?', a: 'Yes. You can complain directly to the Financial Ombudsman Service or apply directly to the Financial Services Compensation Scheme without using a solicitor, where those routes apply. Those services do not charge consumers for submitting a complaint or claim. A solicitor may be useful where a matter is complex or another legal route needs to be considered.' },
  { q: 'What happens if my case is not accepted on a no win no fee basis?', a: 'The solicitor can explain whether another funding arrangement or a direct FOS or FSCS route may be available. An initial review does not oblige you to proceed, and no chargeable work should begin until the proposed terms have been explained and accepted.' },
]

export default function NoWinNoFeePensionClaimsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'No Win No Fee Pension Claims', item: '/no-win-no-fee-pension-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="No Win No Fee Pension Claims" description={metadata.description as string} url="/no-win-no-fee-pension-claims/" />
      <ArticleSchema title="No Win No Fee Pension Claims" description={metadata.description as string} url="/no-win-no-fee-pension-claims/" />

      <Breadcrumb crumbs={[{ label: 'No Win No Fee Pension Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">No Win No Fee Pension Claims</h1>
            <AuthorBox publishedDate="August 2026" reviewedDate="August 2026" />
            <TLDRBox points={[
              'Edward & Amaury Solicitors can often handle suitable financial mis-selling and pension claims on a no win no fee basis.',
              'No win no fee funding is not automatic: your case must first be assessed and accepted.',
              'Any success fee, deduction, expenses and insurance arrangements will be explained in writing before you proceed.',
              'An initial enquiry is free and does not create a solicitor-client relationship or commit you to a claim.',
              'You may instead complain directly to the FOS or FSCS for free where those routes apply.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you believe you received unsuitable pension advice, Edward &amp; Amaury Solicitors can often consider running an eligible mis-sold pension claim on a no win no fee basis. Availability depends on an individual assessment of your case and the written funding terms offered to you.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A no win no fee pension claim is a claim funded under a written agreement where the solicitor’s payment depends on a defined successful outcome. Edward &amp; Amaury Solicitors states that it can often run financial mis-selling cases this way. It cannot be promised for every enquiry, and all charges and deductions must be explained before a client proceeds.</p>
            </div>

            <h2>Can Pension Claims Be No Win No Fee?</h2>
            <p>Yes, some pension mis-selling claims may be accepted under a no win no fee funding arrangement. Edward &amp; Amaury Solicitors’ published financial mis-selling information states that the firm can often run cases on a no win no fee basis. The word <strong>often</strong> is important: the arrangement depends on the facts and commercial viability of each case.</p>
            <p>A solicitor may need to consider the quality of the original advice, the evidence available, the losses suffered, applicable time limits, the identity and status of the adviser firm, and the route through which compensation may be pursued.</p>

            <h2>What Does No Win No Fee Mean?</h2>
            <p>“No win no fee” is a commonly used description for a funding agreement under which legal fees depend on whether the case achieves the outcome defined in the agreement. It does not replace the written contract and should not be understood as a guarantee that there can never be any financial consequence in every possible circumstance.</p>
            <p>Before accepting a no win no fee pension claim, the solicitor should explain:</p>
            <ul>
              <li>How the agreement defines a successful claim</li>
              <li>What legal fees become payable if the claim succeeds</li>
              <li>Whether a success fee or deduction will apply</li>
              <li>Whether VAT is payable on any fee</li>
              <li>How expenses paid to third parties, known as disbursements, are treated</li>
              <li>Whether legal expenses insurance is recommended</li>
              <li>What could happen if instructions are withdrawn or obligations are not followed</li>
            </ul>

            <div className="not-prose grid sm:grid-cols-3 gap-4 my-8">
              {[
                { icon: PoundSterling, title: 'Free Initial Review', text: 'Tell the team what happened without obligation.' },
                { icon: Shield, title: 'Individual Assessment', text: 'Funding depends on the merits and route available.' },
                { icon: CheckCircle, title: 'Terms Explained', text: 'You receive the proposed arrangement before deciding.' },
              ].map(item => (
                <div key={item.title} className="border border-gray-200 rounded-xl p-5 bg-[#f8fafc]">
                  <item.icon className="text-[#c9a84c] mb-3" size={24} />
                  <h3 className="font-semibold text-[#0f2035] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2>Which Mis-Sold Pension Claims May Qualify?</h2>
            <p>A no win no fee assessment may be available for different forms of unsuitable pension advice, including:</p>
            <ul>
              <li><Link href="/defined-benefit-pension-transfer-claims/">Defined benefit pension transfer claims</Link> involving the loss of guaranteed retirement income</li>
              <li><Link href="/final-salary-pension-claims/">Final salary pension claims</Link> where transfer advice may have been unsuitable</li>
              <li><Link href="/mis-sold-sipp-claims/">Mis-sold SIPP claims</Link> involving unsuitable pension transfers or investments</li>
              <li><Link href="/high-risk-pension-investment-claims/">High-risk pension investment claims</Link> involving speculative or unregulated assets</li>
              <li><Link href="/bad-pension-advice-claims/">Bad pension advice claims</Link> where risks, charges or alternatives were not explained properly</li>
            </ul>
            <p>Inclusion in this list does not mean a claim will necessarily be accepted. Eligibility always depends on the evidence and circumstances.</p>

            <h2>How Is Eligibility Assessed?</h2>
            <p>The initial assessment normally considers what advice was given, whether the adviser was regulated, what pension benefits or investments were involved, when the advice was provided and whether a measurable loss may have resulted. The solicitor will also identify whether the adviser firm still trades and whether the <Link href="/financial-ombudsman-pension-complaints/">Financial Ombudsman Service</Link>, <Link href="/fscs-pension-claims/">Financial Services Compensation Scheme</Link> or another legal route may apply.</p>
            <p>Helpful documents include suitability reports, transfer value statements, pension statements, risk questionnaires, SIPP paperwork, investment documents and correspondence with the adviser. You can still make an enquiry if some documents are missing.</p>

            <h2>No Win No Fee Versus Making a Direct Complaint</h2>
            <p>You do not have to instruct a solicitor to complain about pension advice. Consumers can complain directly to an authorised adviser firm and, where applicable, refer the matter to the FOS without paying the FOS. If an eligible adviser firm has failed, an application can be made directly to the FSCS without paying the FSCS.</p>
            <p>Solicitor-led representation may be useful where the advice, loss calculation, limitation position or available defendants are complex. The potential benefit should be considered alongside the legal fees or deductions that would apply if the claim succeeds. See our <Link href="/compare/solicitor-vs-direct-claim/">solicitor versus direct claim comparison</Link>.</p>

            <h2>How to Start a No Win No Fee Pension Claim</h2>
            <ol>
              <li>Make a free initial enquiry and provide a short account of the pension advice.</li>
              <li>Share any documents you have, although missing paperwork need not prevent an enquiry.</li>
              <li>The solicitor assesses suitability, losses, time limits and the available claim route.</li>
              <li>If the case can be accepted, the proposed no win no fee agreement and potential deductions are explained.</li>
              <li>You decide whether to proceed after receiving the written terms.</li>
            </ol>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />

            <p className="text-xs text-gray-500 mt-6">Funding information is general guidance only. No win no fee availability is subject to case assessment and written agreement. Source: <a href="https://edwardamaury.co.uk/services/financial-mis-selling/" target="_blank" rel="noopener noreferrer">Edward &amp; Amaury Solicitors — Financial Mis-selling</a>.</p>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h2 className="font-semibold text-lg mb-3">Ask About No Win No Fee</h2>
              <p className="text-gray-300 text-sm mb-5">Request a free review to find out whether this funding option may be available for your pension claim.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h2 className="font-semibold text-[#0f2035] mb-4">Related Guidance</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mis-sold-pension-claims/" className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />Mis-Sold Pension Claims</Link></li>
                <li><Link href="/pension-claim-process/" className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />Claim Process</Link></li>
                <li><Link href="/compare/solicitor-vs-direct-claim/" className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />Solicitor vs Direct</Link></li>
                <li><Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />Time Limits</Link></li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA title="Could No Win No Fee Funding Apply?" body="Start with a free, no-obligation review. Funding availability and all proposed terms will be explained before you decide whether to proceed." /></div>
      </div>
    </>
  )
}
