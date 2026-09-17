import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Occupational Pension Transfer Claims | Private Sector DB Mis-Selling',
  description: 'Were you advised to transfer out of your employer\'s occupational DB pension? This is almost always unsuitable advice. Solicitor-led claims — free review.',
  alternates: { canonical: '/occupational-pension-transfer-claims/' },
}

const faqs = [
  { q: 'What is an occupational pension scheme?', a: 'An occupational pension scheme — also called a workplace pension — is a pension set up by an employer for its employees. Occupational schemes can be defined benefit (guaranteeing an income based on salary and service) or defined contribution (where the final pension depends on the value of the invested fund). When people talk about transferring out of a workplace pension, they are typically referring to a defined benefit occupational scheme.' },
  { q: 'Can I claim if I was advised to transfer out of my employer\'s occupational DB pension?', a: 'Yes. Advice to transfer out of a private sector defined benefit occupational scheme is subject to the same FCA suitability requirements as any other DB transfer advice. If the advice was unsuitable for your circumstances, and you suffered a loss as a result, you may have a claim for compensation against the adviser and/or through the FOS or FSCS.' },
  { q: 'What types of private sector occupational DB scheme exist?', a: 'Private sector occupational DB schemes include final salary schemes (where the pension is based on your final salary and years of service), career-average schemes (where the pension is based on average earnings throughout the career), and hybrid schemes (combining both). Many large private sector employers ran DB schemes, though many have since closed to new members or accrual.' },
  { q: 'Does it matter if the scheme has been wound up?', a: 'Not necessarily. If you were advised to transfer out of a DB scheme before it was wound up, the suitability of that advice is assessed at the time it was given. If the advice was unsuitable then, you may still have a claim — even if the scheme has since been wound up, entered the Pension Protection Fund (PPF), or the employer has since closed.' },
  { q: 'What if the scheme transferred into the Pension Protection Fund?', a: 'The PPF provides a safety net for members of DB schemes where the sponsoring employer has become insolvent. PPF compensation is subject to limits (90% of the scheme\'s benefits for deferred members, subject to a cap). If you were advised to transfer out of a scheme that subsequently entered the PPF, the calculation of your loss would need to compare what the PPF would have paid against what the fund you transferred into is now worth.' },
  { q: 'Is there a time limit for an occupational pension transfer claim?', a: 'Yes. Time limits apply depending on the route. For FOS complaints, you must first complain to the firm and then refer within six months of the final response. Legal claims are subject to limitation periods. Time may run from when you knew or should have known the advice was unsuitable.' },
  { q: 'What if the company I worked for no longer exists?', a: 'The identity of your former employer does not affect your ability to claim against the financial adviser who gave you the transfer advice. The claim is against the regulated adviser, not the employer. If the adviser\'s firm has since failed, FSCS claims may be available.' },
]

export default function OccupationalPensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Occupational Pension Transfer Claims', item: '/occupational-pension-transfer-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Occupational Pension Transfer Claims" description={metadata.description as string} url="/occupational-pension-transfer-claims/" />
      <ArticleSchema title="Occupational Pension Transfer Claims" description={metadata.description as string} url="/occupational-pension-transfer-claims/" />
      <Breadcrumb crumbs={[{ label: 'Occupational Pension Transfer Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Occupational Pension Transfer Claims — Private Sector DB Mis-Selling</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Advice to transfer out of a private sector defined benefit occupational scheme is subject to the same FCA suitability rules as any other DB transfer.',
              'Final salary and career-average occupational schemes provide guaranteed income — transferring out is almost always unsuitable.',
              'Claims can be brought against the adviser and/or through FOS/FSCS regardless of whether the employer or scheme still exists.',
              'If the scheme entered the PPF, loss is calculated against what the PPF would have paid — not the full scheme benefits.',
              'Time limits apply — seek advice promptly.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Millions of UK workers built up defined benefit pension rights with private sector employers. Many were advised to transfer those rights into SIPPs or personal pensions. For the vast majority, that advice was unsuitable — and the losses have been substantial. If you were advised to transfer out of an occupational DB scheme, you may have a significant claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Advice to transfer out of a private sector occupational DB pension is subject to the same FCA rules as any DB transfer. If the advice was unsuitable, you may have a significant claim — regardless of whether the employer or scheme still exists. Contact us for a free review.</p>
            </div>
            <h2>What DB Occupational Schemes Provide</h2>
            <div className="not-prose space-y-3 mb-8">
              {[
                { label: 'Guaranteed income for life', desc: 'Based on salary and years of service — not dependent on investment performance.' },
                { label: 'Index-linking', desc: 'Annual increases — either in line with RPI/CPI or at a fixed rate — protect the real value of your pension.' },
                { label: 'Spouse\'s/partner\'s pension', desc: 'A continuing pension for your surviving spouse or partner.' },
                { label: 'Lump sum on retirement', desc: 'Many schemes provide a tax-free lump sum at retirement in addition to the pension income.' },
                { label: 'No investment risk', desc: 'Your income is guaranteed — you do not bear any of the investment risk.' },
              ].map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{b.label}</p><p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>The Pension Protection Fund (PPF)</h2>
            <p>Where you were advised to transfer out of a scheme that subsequently entered the PPF, the compensation calculation must compare what you would have received from the PPF — not the full scheme benefits. The PPF pays 90% of benefits for deferred members, subject to an annual compensation cap. If the PPF payout would have exceeded the value of the fund you transferred into, there is still a measurable loss — and potentially a claim.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to transfer your occupational DB pension? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
                  { label: 'DB Redress Calculation', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
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
