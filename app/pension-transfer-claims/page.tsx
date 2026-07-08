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
  title: 'Pension Transfer Claims | Unsuitable Pension Transfer Advice Solicitors',
  description: 'If you were advised to transfer your pension from one scheme to another and that advice was unsuitable, you may have grounds for a claim. Find out more.',
  alternates: { canonical: '/pension-transfer-claims/' },
}

const faqs = [
  { q: 'What is a pension transfer claim?', a: 'A pension transfer claim arises where an adviser recommended transferring your pension from one arrangement to another, and that advice was unsuitable. This might involve a transfer from an occupational scheme to a personal pension, from a personal pension to a SIPP, or from one personal pension to another.' },
  { q: 'Can I claim if I transferred between personal pensions?', a: 'Yes. Even a transfer between two personal pension arrangements can give rise to a claim if the adviser did not have adequate grounds for recommending the switch, failed to explain the costs, or placed you in a product that was not suitable for you.' },
  { q: 'What are the warning signs that a pension transfer was unsuitable?', a: 'Warning signs include: you were not clearly told why a transfer was in your interests; the transfer involved significant charges; you were moved into higher-risk investments; you lost valuable benefits such as guaranteed annuity rates; the adviser received a commission from the new provider; or the suitability report did not adequately explain the basis for the recommendation.' },
]

export default function PensionTransferPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Transfer Claims', item: '/pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Transfer Claims" description={metadata.description as string} url="/pension-transfer-claims/" />
      <ArticleSchema title="Pension Transfer Claims" description={metadata.description as string} url="/pension-transfer-claims/" />

      <Breadcrumb crumbs={[{ label: 'Pension Transfer Claims' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Transfer Claims</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'A pension transfer claim arises when a financial adviser recommended moving your pension from one scheme to another, and that advice was unsuitable or incomplete.',
              'Common types include transfers out of defined benefit (final salary) schemes, transfers into SIPPs, and switches between personal pensions.',
              'Advisers must have a clear, justifiable reason for recommending a transfer based on your personal circumstances — not just a generic recommendation.',
              'You can claim even if you transferred between two personal pensions, not just in and out of final salary schemes.',
              'Signing documentation agreeing to the transfer at the time does not prevent you from making a claim later.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">If you were advised to transfer your pension from one arrangement to another and the advice was unsuitable or incomplete, you may have grounds to make a claim. Pension transfers can involve significant financial decisions and it is important that any advice you receive meets the required professional standards.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A pension transfer claim arises when a financial adviser recommended moving your pension from one scheme to another and the advice was unsuitable — for example, because it led to higher charges, involved high-risk investments, or caused you to give up valuable guaranteed benefits without adequate warning. The most common types involve transfers out of defined benefit (final salary) schemes or into SIPPs.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> When an adviser tells you to move your pension pot somewhere else, they must have a good reason based on your personal situation — and must tell you clearly about risks, costs and what you might lose. If they did not, you may have a claim regardless of whether you signed paperwork agreeing to the transfer at the time.</p>
            </div>

            <h2>What Types of Pension Transfer May Give Rise to a Claim?</h2>
            <p>Pension transfer mis-selling claims can arise in several contexts, including:</p>

            <h3>Transfer from an Occupational Scheme to a Personal Pension</h3>
            <p>Where an employer's occupational pension scheme — particularly a defined benefit scheme — was transferred into a personal pension or SIPP, the advice must have been based on a rigorous assessment of whether transferring was genuinely in the member's best interests. See also: <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">Defined Benefit Transfer Claims</Link>.</p>

            <h3>Transfer into a SIPP</h3>
            <p>Advice to transfer a pension into a self-invested personal pension raises particular concerns where the SIPP was then used to invest in high-risk or non-standard assets. See also: <Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">Mis-Sold SIPP Claims</Link>.</p>

            <h3>Transfer into a Personal Pension or Stakeholder Pension</h3>
            <p>Even a transfer between conventional personal pension arrangements can be mis-sold. If the transfer was motivated by commissions, resulted in significant charges, or placed you in a less suitable product without adequate justification, there may be grounds for a claim.</p>

            <h3>Transfer into a High-Risk Investment</h3>
            <p>Where a pension transfer led to funds being invested in high-risk, alternative or unregulated assets, the advice may have been unsuitable. See: <Link href="/high-risk-pension-investment-claims/" className="text-[#1e3a5f] underline">High-Risk Pension Investment Claims</Link>.</p>

            <h2>Warning Signs of an Unsuitable Pension Transfer</h2>
            <ul>
              <li>You were not given a clear written explanation of why the transfer was in your interests</li>
              <li>The transfer involved significant charges or exit penalties from the original scheme</li>
              <li>The recommendation was made very quickly without detailed discussion of your circumstances</li>
              <li>You lost guaranteed benefits such as a guaranteed annuity rate or final salary income</li>
              <li>Your new pension performed significantly worse than your old one</li>
              <li>The adviser received commission or other financial incentives for the transfer recommendation</li>
              <li>You were not told about the ongoing charges of the new arrangement</li>
              <li>You did not understand what you were agreeing to</li>
            </ul>

            <h2>What Documents May Help?</h2>
            <ul>
              <li>The suitability letter or transfer report from your adviser</li>
              <li>Pension statements from both before and after the transfer</li>
              <li>Any risk profiling questionnaire completed at the time</li>
              <li>Correspondence with the adviser</li>
              <li>Details of any charges paid</li>
              <li>Documents from the original and new pension providers</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Free Claim Review</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your pension transfer. A solicitor will review your situation.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
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
