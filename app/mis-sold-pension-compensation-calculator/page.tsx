import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'How Much Compensation For a Mis-Sold Pension? | Compensation Guide',
  description: 'Understand how mis-sold pension compensation is calculated. No guarantees are given — compensation depends on your individual circumstances and losses suffered.',
  alternates: { canonical: '/mis-sold-pension-compensation-calculator/' },
}

const faqs = [
  { q: 'How is compensation calculated for a mis-sold pension?', a: 'Compensation aims to put you back in the financial position you would have been in had the unsuitable advice not been given. For defined benefit transfer claims, this typically means calculating the value of the guaranteed income you gave up versus what your transferred fund is now worth. For SIPP and investment claims, it typically covers losses plus charges paid as a result of the advice.' },
  { q: 'Is there a maximum compensation limit?', a: 'Yes — the limits depend on the route. The Financial Ombudsman Service applies a monetary cap per complaint. The FSCS applies limits set by the FCA per eligible person, per firm. Legal proceedings are not subject to a statutory cap but are limited to the provable loss suffered. Please check current limits with the FOS and FSCS directly.' },
  { q: 'Can I receive compensation if I still have some money in my pension?', a: 'Yes. Compensation is not prevented by the fact that some of your pension pot remains. What matters is the difference between the position you are now in and the position you would have been in but for the unsuitable advice. If you gave up guaranteed benefits, those benefits form part of the comparison even if your fund has not been entirely lost.' },
  { q: 'How long does it take to receive compensation?', a: 'Timescales vary by route. FOS complaints can take several months or longer. FSCS claims have their own processing timescales. Legal claims are typically the longest route. Once a decision is made, payment usually follows within a specified period. We will keep you updated at all key stages.' },
]

const factors = [
  { label: 'Value transferred', desc: 'The amount that was transferred out of your original pension scheme into the new arrangement.' },
  { label: 'Losses suffered', desc: 'The difference between what your pension fund is now worth and what it would have been worth had you not transferred or received unsuitable advice.' },
  { label: 'Value of guaranteed benefits given up', desc: 'Where you transferred out of a defined benefit scheme, the value of the guaranteed income you gave up is a key factor. This is typically modelled as the income you would have received had you stayed in the scheme.' },
  { label: 'Charges paid', desc: 'Charges paid as a result of the advised transfer or investment — including adviser fees, platform charges and product costs — may be recoverable.' },
  { label: 'Investment performance', desc: 'Where your pension was invested in unsuitable products, any difference in performance compared to a suitable benchmark may be considered.' },
  { label: 'Adviser conduct', desc: 'The nature and severity of the failing — for example, whether the advice was simply poorly documented or involved more serious misrepresentation — may affect the outcome.' },
  { label: 'The route taken', desc: 'Different routes — FOS complaint, FSCS claim, or legal action — apply different methodologies to calculating compensation. The route available to you will affect what compensation is possible.' },
]

export default function CompensationPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'How Much Compensation?', item: '/mis-sold-pension-compensation-calculator/' }]} />
      <WebPageSchema title="How Much Compensation For a Mis-Sold Pension?" description={metadata.description as string} url="/mis-sold-pension-compensation-calculator/" />
      <ArticleSchema title="How Much Compensation For a Mis-Sold Pension?" description={metadata.description as string} url="/mis-sold-pension-compensation-calculator/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Compensation Guide' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">How Much Compensation Could I Claim For a Mis-Sold Pension?</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'Compensation for a mis-sold pension aims to put you back in the position you would have been in without the unsuitable advice — not to add a windfall.',
              'For defined benefit transfer claims, compensation typically reflects the value of the guaranteed income you gave up versus what your transferred fund is now worth.',
              'For SIPP and high-risk investment claims, compensation typically covers investment losses plus charges paid as a result of the advice.',
              'No specific figure can be given without reviewing your individual case — each claim is calculated on its own facts.',
              'The route you use (FOS, FSCS, or legal action) affects how compensation is calculated and what maximum applies.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">One of the most common questions we receive is how much compensation might be available for a mis-sold pension claim. The honest answer is that it depends entirely on your individual circumstances. This page explains the key factors that affect compensation and how different routes calculate it.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Compensation for a mis-sold pension aims to restore you to the financial position you would have been in without the bad advice. For <a href="/defined-benefit-pension-transfer-claims/" className="text-[#c9a84c] underline">defined benefit transfer claims</a>, this typically means the value of the guaranteed income you gave up versus what your transferred fund is now worth. For <a href="/mis-sold-sipp-claims/" className="text-[#c9a84c] underline">SIPP claims</a>, it typically means investment losses plus charges. No specific figure can be given without reviewing your individual case.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Important Disclaimer</p>
                <p className="text-sm text-gray-700 leading-relaxed">We cannot guarantee compensation or predict the outcome of any claim. The information on this page is for general guidance only. Compensation depends on the specific facts of your case, the route available and various other factors. Please contact us for a personal assessment.</p>
              </div>
            </div>

            <h2>What Is the Aim of Compensation?</h2>
            <p>In simple terms, compensation for a mis-sold pension claim aims to put you back in the position you would have been in had the unsuitable advice not been given. This does not mean simply refunding what you paid in — it means restoring, as far as possible, the financial position you would have occupied if you had received suitable advice.</p>

            <h2>Factors That Affect How Much Compensation May Be Available</h2>
            <div className="not-prose space-y-4 mb-8">
              {factors.map(f => (
                <div key={f.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-1">
                    <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#0f2035] text-sm">{f.label}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">{f.desc}</p>
                </div>
              ))}
            </div>

            <h2>How Different Routes Calculate Compensation</h2>

            <h3>Financial Ombudsman Service (FOS)</h3>
            <p>The FOS has established methodologies for calculating redress in mis-sold pension cases. For pension transfer claims, the FOS typically uses an approach that compares the actual value of the pension with what it would have been worth had the client stayed in the original scheme or received suitable advice. Interest may also be added. The FOS can award up to a set monetary limit per complaint.</p>
            <Link href="/financial-ombudsman-pension-complaints/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Learn more about FOS complaints <ArrowRight size={12} />
            </Link>

            <h3>Financial Services Compensation Scheme (FSCS)</h3>
            <p>The FSCS compensates eligible claimants where an authorised financial services firm has failed. The FSCS applies limits to the amount of compensation it pays per eligible person, per firm. These limits are set by the FCA and may change over time — please check the FSCS website for current figures. For mis-sold pension advice, compensation may cover losses attributable to the bad advice up to the applicable limit.</p>
            <Link href="/fscs-pension-claims/" className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold underline text-sm">
              Learn more about FSCS claims <ArrowRight size={12} />
            </Link>

            <h3>Legal Proceedings</h3>
            <p>Where legal action is pursued, the court will assess damages based on the financial loss suffered as a result of the negligent or unsuitable advice. The aim is, again, to restore the claimant to the position they would have been in but for the wrong. Legal proceedings are more complex and time-consuming but may be appropriate where other routes are unavailable or have produced an unsatisfactory outcome.</p>

            <h2>Defined Benefit Transfer Claims — A Special Case</h2>
            <p>Compensation for defined benefit transfer claims requires particular care. The assessment typically involves modelling what the defined benefit scheme income would have been worth over the remainder of the member's life and comparing it with the current value of the transferred fund. Actuarial assumptions and individual health and life expectancy can all be relevant. These calculations are complex and must be performed by qualified professionals.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />

            <h2>Using a Simple Enquiry Form</h2>
            <p>While we cannot predict the outcome of any individual claim, completing a short enquiry form allows us to understand your situation and give you a more informed picture of what may be possible in your case. There is no charge for an initial review.</p>

            <div className="not-prose mt-6 bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Request Your Free Assessment</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us what happened with your pension. A solicitor will review your case and explain your options.</p>
              <ContactForm compact />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Key Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'Claim Process', href: '/pension-claim-process/' },
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
