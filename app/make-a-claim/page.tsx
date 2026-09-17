import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Shield, Clock, FileText, Users } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Make a Mis-Sold Pension Claim | Start Your Free Enquiry',
  description: 'Start your mis-sold pension claim with Edward & Amaury Solicitors. Free initial review, no obligation, and no win no fee options available for eligible cases.',
  alternates: { canonical: '/make-a-claim/' },
}

const faqs = [
  { q: 'How do I start a mis-sold pension claim?', a: 'The first step is a free initial enquiry. Contact us by phone or complete the form on this page and a solicitor will review your situation. You do not need to have all your documents ready — just tell us what happened with your pension.' },
  { q: 'Is there a charge for the initial review?', a: 'No. The initial review is free and there is no obligation to proceed. We will explain your options clearly before you decide anything.' },
  { q: 'Can I make a claim on a no win no fee basis?', a: 'We can often handle suitable cases on a no win no fee basis. This is assessed on the merits of your case. Any funding arrangement, including any success fee or deduction, will be explained clearly before you agree to proceed.' },
  { q: 'What information do I need to make a claim?', a: 'As much as you can provide — pension paperwork, transfer documents, adviser correspondence, and any suitability reports. If you do not have these, we can advise on how to obtain them, including making a data subject access request to your former adviser.' },
  { q: 'What if my financial adviser has gone out of business?', a: 'You may still be able to claim through the Financial Services Compensation Scheme (FSCS), which exists specifically to compensate eligible claimants where an authorised financial services firm has failed. We can advise on whether the FSCS route is available to you.' },
  { q: 'How long does a pension mis-selling claim take?', a: 'Timescales vary depending on the route. FOS complaints typically take several months. FSCS claims have their own processing timescales. Legal claims can take longer. We will keep you informed at every stage.' },
]

const steps = [
  { step: 1, title: 'Free Initial Enquiry', desc: 'Contact us by phone or complete the form. Tell us what happened with your pension and we will listen.' },
  { step: 2, title: 'Case Review', desc: 'We review the details of your situation, the advice you received, your documents and the losses or benefits you may have suffered.' },
  { step: 3, title: 'Your Options Explained', desc: 'We explain the routes available to you — FOS complaint, FSCS claim, or legal action — and which may be appropriate for your case.' },
  { step: 4, title: 'Submit Your Claim', desc: 'If you decide to proceed, we handle the claim submission and all correspondence on your behalf.' },
]

export default function MakeAClaimPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Make a Claim', item: '/make-a-claim/' }]} />
      <WebPageSchema title="Make a Mis-Sold Pension Claim" description={metadata.description as string} url="/make-a-claim/" />
      <FAQSchema faqs={faqs} />

      <Breadcrumb crumbs={[{ label: 'Make a Claim' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#1e3a5f] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-[#c9a84c]/30">
                <Shield size={12} /> SRA-Regulated Solicitors · No. 800525
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Start Your Mis-Sold Pension Claim
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you were given unsuitable pension, SIPP or investment advice, you may be entitled to compensation. Our solicitor-led team offers a free, no-obligation initial review of your situation.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Free initial review — no charge, no obligation',
                  'Solicitor-led from start to finish',
                  'No win no fee options available for eligible cases',
                  'FOS, FSCS and legal routes covered',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle size={15} className="text-[#c9a84c] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base">
                <Phone size={18} /> {siteConfig.phone}
              </a>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-[#0f2035] text-lg font-semibold mb-1">Request a Free Call Back</h2>
              <p className="text-gray-500 text-sm mb-5">A solicitor will contact you to discuss your pension situation. No charge. No obligation.</p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2035] mb-3">How Making a Claim Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A straightforward four-step process from your first contact to your claim being submitted.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm mb-3">{step}</div>
                <h3 className="font-semibold text-[#0f2035] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pension-claim-process/" className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:underline text-sm">
              Full claim process guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why use a solicitor */}
      <section className="py-14 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f2035] mb-5">Why Make Your Claim with Us?</h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'SRA-Regulated Solicitors', desc: 'Edward & Amaury Solicitors is authorised and regulated by the Solicitors Regulation Authority (SRA No. 800525). You are protected by the SRA Standards and Regulations.' },
                  { icon: FileText, title: 'Solicitor-Led Review', desc: 'Your case is reviewed and handled by qualified solicitors, not claims management staff. That matters for complex pension mis-selling cases.' },
                  { icon: Users, title: 'All Routes Covered', desc: 'We advise on FOS complaints, FSCS claims and legal proceedings — and will recommend the route most appropriate for your individual situation.' },
                  { icon: Clock, title: 'Act Promptly — Time Limits Apply', desc: 'Time limits can apply to pension mis-selling claims, depending on the route. Getting advice early preserves your options.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-lg p-4 border border-gray-200 flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0f2035] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2035] text-sm mb-1">{title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-[#0f2035] mb-4">You Can Also Claim Directly</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">You do not need a solicitor to complain to the Financial Ombudsman Service or apply to the FSCS. Both are free and available directly.</p>
              <div className="space-y-3">
                <div className="bg-[#f0f4f8] rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-[#0f2035] mb-1">Financial Ombudsman Service (FOS)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Free, independent dispute resolution for complaints against authorised financial services firms. <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Learn more</Link>.</p>
                </div>
                <div className="bg-[#f0f4f8] rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-[#0f2035] mb-1">Financial Services Compensation Scheme (FSCS)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Compensation for eligible claimants where an authorised firm has failed. <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Learn more</Link>.</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">We will always explain all routes available to you as part of your free initial review — including those you can pursue yourself at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0f2035] mb-3">Common Situations That May Support a Claim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These are some of the situations that may indicate your pension advice was unsuitable. Not all of these need to apply — contact us to discuss your individual circumstances.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'You were advised to transfer out of a final salary or defined benefit pension',
              'You were moved into a SIPP without a clear explanation of the risks',
              'Your pension was placed into high-risk or unregulated investments',
              'You were not told about the charges involved',
              'You lost valuable guaranteed benefits that you had built up',
              'The risks were not properly explained to match your circumstances',
              'You were promised returns that sounded too good to be true',
              'You felt pressured to proceed with the advice',
              'Your adviser has since been investigated, fined or closed down',
            ].map((sign, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#f0f4f8] rounded-lg border border-gray-200">
                <CheckCircle size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="inline-flex items-center gap-2 border border-[#0f2035] text-[#0f2035] hover:bg-[#0f2035] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              Full eligibility checklist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-[#f0f4f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2035] mb-8 text-center">Common Questions About Making a Claim</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0f2035] to-[#1e3a5f] rounded-2xl p-10 text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Ready to Start? Contact Us Today</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Your initial review is free, confidential and carries no obligation. We will explain what happened with your pension and what your options are before you decide anything.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                <Phone size={18} /> {siteConfig.phone}
              </a>
              <Link href="/contact/" className="flex items-center justify-center gap-2 bg-white text-[#0f2035] hover:bg-gray-100 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                Enquiry Form <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-5 text-xs text-gray-400">{siteConfig.firmName} · SRA No. {siteConfig.sraNumber}</p>
          </div>
        </div>
      </section>
    </>
  )
}
