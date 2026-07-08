import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, AlertTriangle, CheckCircle, FileText, Users, Scale, TrendingDown, Shield, HelpCircle, Clock } from 'lucide-react'
import TrustStrip from '@/components/TrustStrip'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { OrganizationSchema, FAQSchema, AggregateRatingSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Mis-Sold Pension Claims Solicitors | Pension Compensation Claims',
  description: 'Think you were given bad pension advice? Solicitor-led support for mis-sold pension, SIPP and defined benefit transfer claims. Free initial enquiry. Edward & Amaury Solicitors.',
  alternates: { canonical: '/' },
}

const warningSigns = [
  'You were advised to transfer out of a final salary or defined benefit pension',
  'You were moved into a SIPP without a clear explanation of the risks',
  'Your pension was placed into high-risk or unregulated investments',
  'You were promised returns that sounded too good to be true',
  'You were not told about the charges involved',
  'You lost valuable guaranteed benefits that you had built up',
  'The risks were not properly or clearly explained to you',
  'The advice did not seem to match your personal circumstances',
  'You did not fully understand what you were agreeing to',
  'You felt pressured to proceed with the transfer or investment',
]

const claimTypes = [
  { title: 'Mis-Sold Pension Claims', desc: 'General mis-selling of personal and workplace pension products and unsuitable pension advice.', href: '/mis-sold-pension-claims/', icon: FileText },
  { title: 'Mis-Sold SIPP Claims', desc: 'Unsuitable advice to transfer into a self-invested personal pension, often into high-risk assets.', href: '/mis-sold-sipp-claims/', icon: TrendingDown },
  { title: 'Defined Benefit Transfer Claims', desc: 'Advice to transfer out of a final salary or DB scheme that may have been unsuitable.', href: '/defined-benefit-pension-transfer-claims/', icon: Scale },
  { title: 'Final Salary Pension Claims', desc: 'Claims where advice to give up guaranteed final salary pension benefits may have been wrong.', href: '/final-salary-pension-claims/', icon: Shield },
  { title: 'Bad Pension Advice Claims', desc: 'Claims based on negligent, unsuitable or incomplete advice from a financial adviser.', href: '/bad-pension-advice-claims/', icon: AlertTriangle },
  { title: 'Pension Transfer Claims', desc: 'Transfers from occupational schemes into personal pensions or SIPPs that may have been inappropriate.', href: '/pension-transfer-claims/', icon: ArrowRight },
  { title: 'High-Risk Investment Claims', desc: 'Pensions invested into overseas property, storage pods, forestry and other speculative schemes.', href: '/high-risk-pension-investment-claims/', icon: AlertTriangle },
  { title: 'FSCS Pension Claims', desc: 'Claims through the Financial Services Compensation Scheme where an adviser firm has failed.', href: '/fscs-pension-claims/', icon: CheckCircle },
  { title: 'FOS Pension Complaints', desc: 'Complaints to the Financial Ombudsman Service about authorised financial advisers.', href: '/financial-ombudsman-pension-complaints/', icon: Users },
]

const processSteps = [
  { step: 1, title: 'Free Initial Enquiry', desc: 'Contact us for a free, no-obligation initial review. Tell us what happened with your pension.' },
  { step: 2, title: 'Document Review', desc: 'We review your pension paperwork, transfer documents and any adviser correspondence you can provide.' },
  { step: 3, title: 'Identify Your Route', desc: 'We identify who the claim may be against and the most appropriate route — FOS, FSCS or litigation.' },
  { step: 4, title: 'Assess Your Losses', desc: "We assess what losses or benefits you may have suffered as a result of the adviser's actions." },
  { step: 5, title: 'Submit Your Claim', desc: 'We submit the claim or complaint on your behalf and handle communications with the relevant parties.' },
  { step: 6, title: 'Pursue Compensation', desc: 'We pursue your claim and keep you informed throughout, working towards the best possible outcome.' },
]

const homeFaqs = [
  { q: 'What is pension mis-selling?', a: 'Pension mis-selling occurs when a financial adviser recommends a pension product, transfer or investment that is unsuitable for your individual circumstances. This may include advising you to transfer out of a final salary scheme, placing your pension into high-risk investments without adequately explaining the risks, or failing to explain charges or alternative options.' },
  { q: 'How do I know if my pension was mis-sold?', a: 'Common signs include being advised to transfer out of a defined benefit scheme, being moved into a SIPP you did not fully understand, being placed into high-risk or unregulated investments, losing guaranteed benefits, or receiving advice that did not reflect your financial situation or attitude to risk. You can use our <a href="/how-do-i-know-if-my-pension-was-mis-sold/" class="text-[#1e3a5f] underline">eligibility checklist</a> for more guidance.' },
  { q: 'Can I claim compensation for a mis-sold pension?', a: 'Whether you can claim depends on the specific advice you received, your individual circumstances, and the losses or lost benefits you have suffered. You may be able to complain to the Financial Ombudsman Service, make a claim through the Financial Services Compensation Scheme, or take legal action against the adviser or firm. A solicitor can review your situation and explain your options.' },
  { q: 'Is there a time limit for making a claim?', a: 'Time limits can apply and vary depending on the route. For Financial Ombudsman complaints, you generally have six months from the firm\'s final response letter. For FSCS claims, different rules apply. Legal claims may be subject to limitation periods. It is important to seek advice promptly. See our <a href="/time-limits-mis-sold-pension-claims/" class="text-[#1e3a5f] underline">time limits page</a> for more information.' },
  { q: 'Do I need a solicitor to make a claim?', a: 'You do not need a solicitor to complain to the Financial Ombudsman Service or apply to the FSCS. Both can be done directly at no cost. However, a solicitor can help you assess the strength of your claim, gather evidence, navigate complex cases, and pursue legal action where other routes are unavailable or insufficient.' },
  { q: 'What fees are involved?', a: 'Fees and funding arrangements vary and will be explained clearly before you decide whether to proceed. We will not start work on a claim without your full agreement and understanding of any fees involved.' },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFaqs} />
      <AggregateRatingSchema ratingValue="5" reviewCount="2" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#1e3a5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-[#c9a84c]/30">
                <Shield size={12} /> SRA-Regulated Solicitors · No. 800525
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                Mis-Sold Pension Claims Solicitors
              </h1>
              <p className="text-xl text-gray-300 mb-3 font-medium">
                Think you were given bad pension advice?
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                If you were advised to transfer, move or invest your pension and later suffered financial loss or gave up guaranteed benefits, you may be able to make a claim. Our solicitor-led team can review what happened and explain your options clearly, with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                  <Phone size={18} /> {siteConfig.phone}
                </a>
                <Link href="/contact/" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                  Check If You Can Claim <ArrowRight size={16} />
                </Link>
              </div>
              <p className="text-xs text-gray-400">No obligation · Solicitor-led review · Free initial enquiry · Fee arrangements explained before you proceed</p>
            </div>

            {/* Hero form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-[#0f2035] text-lg font-semibold mb-1">Request a Free Call Back</h2>
              <p className="text-gray-500 text-sm mb-5">A solicitor will contact you to discuss your pension situation.</p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* Warning signs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-3">Signs Your Pension May Have Been Mis-Sold</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">If any of the following apply to you, it may be worth seeking advice about whether you have a potential claim.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {warningSigns.map((sign, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#f0f4f8] rounded-lg">
                <AlertTriangle size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="inline-flex items-center gap-2 bg-[#0f2035] hover:bg-[#162d4a] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Eligibility Checklist <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Claim types */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-3">Types of Pension Mis-Selling Claims</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We assist with a range of mis-sold pension and investment claims. Find the situation that most closely matches yours.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {claimTypes.map(({ title, desc, href, icon: Icon }) => (
              <Link key={href} href={href} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#c9a84c] hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#0f2035] flex items-center justify-center mb-3">
                  <Icon size={18} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-semibold text-[#0f2035] mb-2 group-hover:text-[#1e3a5f]">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 mt-3 text-[#c9a84c] text-xs font-semibold">
                  Find out more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why solicitor-led */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-5">Why Use a Solicitor for Your Pension Claim?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">You are entitled to complain directly to the Financial Ombudsman Service or apply to the Financial Services Compensation Scheme without using a solicitor. Both routes are available free of charge.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">However, some pension mis-selling cases are complex. Where there are multiple parties involved, where an adviser firm has ceased trading, where losses are significant, or where a complaint has already been rejected, solicitor-led support may help you navigate the process more effectively.</p>
              <ul className="space-y-3">
                {[
                  'Assessment of whether your case is likely to have merit',
                  'Help gathering and organising relevant documents',
                  'Identifying the correct route and who to claim against',
                  'Handling complex cases involving multiple parties',
                  'Legal action where complaints routes are insufficient',
                  'Clear advice before you commit to any course of action',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[#0f2035] mb-4">Other Routes Available To You</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-[#0f2035] text-sm mb-1">Financial Ombudsman Service (FOS)</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">A free, independent service for complaints against authorised financial services firms. You can complain directly at no cost. <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Learn more</Link>.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-[#0f2035] text-sm mb-1">Financial Services Compensation Scheme (FSCS)</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Provides compensation where an authorised financial services firm has failed and is unable to meet claims against it. You can apply directly. <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Learn more</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-3">How the Claim Process Works</h2>
            <p className="text-gray-600">A straightforward overview of how we handle your pension mis-selling enquiry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm mb-3">{step}</div>
                <h3 className="font-semibold text-[#0f2035] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pension-claim-process/" className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:underline">
              Full process details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info boxes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#f0f4f8] rounded-xl">
              <Clock size={32} className="text-[#c9a84c] mx-auto mb-3" />
              <h3 className="font-semibold text-[#0f2035] mb-2">Time Limits Apply</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Time limits can vary depending on your route. It is important to seek advice sooner rather than later.</p>
              <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] text-sm font-semibold underline mt-2 inline-block">Learn about time limits</Link>
            </div>
            <div className="text-center p-6 bg-[#f0f4f8] rounded-xl">
              <HelpCircle size={32} className="text-[#c9a84c] mx-auto mb-3" />
              <h3 className="font-semibold text-[#0f2035] mb-2">Not Sure If You Have a Claim?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our checklist can help you identify whether the advice you received may have been unsuitable.</p>
              <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="text-[#1e3a5f] text-sm font-semibold underline mt-2 inline-block">Check eligibility</Link>
            </div>
            <div className="text-center p-6 bg-[#f0f4f8] rounded-xl">
              <Scale size={32} className="text-[#c9a84c] mx-auto mb-3" />
              <h3 className="font-semibold text-[#0f2035] mb-2">How Much Could You Recover?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Compensation depends on your losses, the advice you received and the route available. No guarantees can be given.</p>
              <Link href="/mis-sold-pension-compensation-calculator/" className="text-[#1e3a5f] text-sm font-semibold underline mt-2 inline-block">Compensation guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews — replace placeholder text with real client testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-2">What Our Clients Say</h2>
            <p className="text-gray-500 text-sm">SRA-regulated · Solicitor-led · Free initial review</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {[
              { quote: 'Muhib gave me great customer service and was supportive in progressing my case.', name: 'Claire Pratt', service: 'FSCS Pension Claim' },
              { quote: 'Edward and Amaury were fantastic, kept me informed at every step with straight talking.', name: 'Rob Luck', service: 'Pension Mis-Selling Claim' },
            ].map((t, i) => (
              <div key={i} className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-[#0f2035]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.service} · Edward &amp; Amaury Solicitors</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare hub */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-3">Not Sure Which Route Applies to You?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Side-by-side guides to help you understand the options before you make a decision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'FOS vs FSCS', desc: 'Which regulatory route applies — depends on whether your adviser firm is still trading.', href: '/compare/fos-vs-fscs/' },
              { title: 'Defined Benefit vs Defined Contribution', desc: 'Understand the key difference between pension types and why it matters for your claim.', href: '/compare/defined-benefit-vs-defined-contribution/' },
              { title: 'Solicitor vs Direct Claim', desc: 'When professional help adds value — and when going direct may be the right choice.', href: '/compare/solicitor-vs-direct-claim/' },
            ].map(c => (
              <Link key={c.href} href={c.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#c9a84c] hover:shadow-md transition-all group">
                <h3 className="font-semibold text-[#0f2035] mb-2 group-hover:text-[#1e3a5f] text-sm">{c.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#c9a84c] text-xs font-semibold">Compare <ArrowRight size={11} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-8 text-center">Common Questions About Pension Mis-Selling</h2>
          <FAQAccordion faqs={homeFaqs} />
          <div className="text-center mt-8">
            <Link href="/faqs/" className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:underline">
              View all 40+ FAQs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0f2035] to-[#1e3a5f] rounded-2xl p-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Start Your Free Initial Enquiry Today</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Speak to our solicitor-led team at no cost and with no obligation. We will explain what happened, whether you may have a claim, and what your options are before you decide how to proceed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                <Phone size={18} /> {siteConfig.phone}
              </a>
              <Link href="/contact/" className="flex items-center justify-center gap-2 bg-white text-[#0f2035] hover:bg-gray-100 font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                Enquiry Form <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-5 text-xs text-gray-400">Edward &amp; Amaury Solicitors · Authorised and regulated by the Solicitors Regulation Authority · SRA No. 800525</p>
          </div>
        </div>
      </section>
    </>
  )
}
