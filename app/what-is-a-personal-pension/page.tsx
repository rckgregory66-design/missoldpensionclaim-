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
  title: 'What Is a Personal Pension? | Types, Rules & Mis-Selling Guide',
  description: 'A personal pension is a defined contribution scheme you arrange yourself. Learn how personal pensions work, who they are for, and when advice about them can be mis-selling.',
  alternates: { canonical: '/what-is-a-personal-pension/' },
}

const faqs = [
  { q: 'What is a personal pension?', a: 'A personal pension is a type of defined contribution pension that you arrange yourself — either independently or through your employer. You make contributions, your employer may also contribute, and the government adds basic-rate tax relief. The fund is invested and grows over time. At retirement, you use the fund to provide an income — either by buying an annuity, going into drawdown, or taking lump sums. The final pension depends on contributions made and investment performance.' },
  { q: 'What is the difference between a personal pension and a workplace pension?', a: 'A workplace pension is set up by your employer and contributions are typically made by both you and your employer. A personal pension is arranged by you independently — for example, if you are self-employed, or if you want to save additional amounts beyond your workplace scheme. Stakeholder pensions are a type of personal pension with capped charges. SIPPs are a type of personal pension offering greater investment flexibility.' },
  { q: 'What is a stakeholder pension?', a: 'A stakeholder pension is a type of personal pension meeting certain minimum standards set by the government — including capped charges (no more than 1.5% of the fund value per year in the first 10 years, then 1% thereafter), flexibility to stop and restart contributions without penalty, and investment in a default fund. Stakeholder pensions were introduced in April 2001 to provide accessible, low-cost pension saving. They are appropriate for most mainstream savers.' },
  { q: 'What is the difference between a personal pension and a SIPP?', a: 'A SIPP (Self-Invested Personal Pension) is a type of personal pension with a wider investment choice — it can hold individual shares, commercial property, and alternative investments. A standard personal pension invests in a pre-selected fund range. SIPPs are appropriate for sophisticated investors who want to make their own investment decisions and accept the associated risks. For most mainstream savers, a standard personal pension or stakeholder pension is more appropriate. See our <a href="/compare/sipp-vs-personal-pension/">SIPP vs personal pension comparison</a>.' },
  { q: 'Can a personal pension be mis-sold?', a: 'Yes. Personal pensions can be mis-sold in several ways: being advised to transfer from a better scheme (such as a defined benefit occupational scheme) into a personal pension without adequate justification; being placed into unsuitable funds within the personal pension; being charged excessive fees; or receiving advice that was not based on a proper assessment of your needs, objectives and risk tolerance.' },
  { q: 'What tax relief do I get on personal pension contributions?', a: 'Basic-rate taxpayers receive tax relief at source — for every £80 you contribute, the government adds £20, making an effective contribution of £100. Higher and additional rate taxpayers can claim further relief through self-assessment. The annual allowance limits the total tax-relieved contributions to £60,000 per year (2024/25). There is also a lifetime allowance framework, though the lifetime allowance charge was removed from April 2023.' },
  { q: 'Can I have a personal pension alongside a workplace pension?', a: 'Yes. You can contribute to both a personal pension and a workplace pension simultaneously, subject to the annual allowance. This can be useful if you want to save above your employer\'s contribution level, or if you are self-employed and also employed part-time. A financial adviser can help structure contributions effectively — though the quality of that advice is subject to the same suitability standards.' },
]

export default function WhatIsPersonalPensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'What Is a Personal Pension?', item: '/what-is-a-personal-pension/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="What Is a Personal Pension?" description={metadata.description as string} url="/what-is-a-personal-pension/" />
      <ArticleSchema title="What Is a Personal Pension?" description={metadata.description as string} url="/what-is-a-personal-pension/" />
      <Breadcrumb crumbs={[{ label: 'What Is a Personal Pension?' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">What Is a Personal Pension? — Types, Rules, and When Advice Can Be Mis-Selling</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A personal pension is a defined contribution scheme where the final pension depends on contributions and investment performance — not a guaranteed income.',
              'Types include standard personal pensions, stakeholder pensions (capped charges), and SIPPs (wider investment choice).',
              'Personal pensions can be mis-sold: unsuitable transfers from DB schemes, high charges, or unsuitable investment advice within the pension.',
              'SIPPs are a type of personal pension — but carry higher risks and charges that make them suitable only for sophisticated investors.',
              'Tax relief at source adds 20% to basic-rate taxpayer contributions; higher rate taxpayers can claim further relief.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A personal pension is a defined contribution arrangement — your retirement income depends on what is paid in and how the fund grows. Unlike defined benefit schemes, there is no guaranteed income. Understanding how personal pensions work is the foundation for understanding whether you have been properly advised about one.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">A personal pension is a DC arrangement you arrange yourself. If you were advised to transfer from a better scheme into a personal pension, or the personal pension was sold with unsuitable charges or investments, you may have a mis-selling claim. Contact us for a free review.</p>
            </div>
            <h2>Types of Personal Pension</h2>
            <div className="not-prose space-y-3 mb-8">
              {[
                { label: 'Standard personal pension', desc: 'Invest in a range of pre-selected funds. Charges vary by provider — typically 0.5–1.5% per year. Flexible contributions.' },
                { label: 'Stakeholder pension', desc: 'Minimum-standards pension with capped charges (1.5% then 1%), flexible contributions, and a default investment fund. Good for mainstream savers.' },
                { label: 'SIPP (Self-Invested Personal Pension)', desc: 'Wider investment choice including shares, property and alternatives. Higher charges. Appropriate for sophisticated investors only. See our SIPP mis-selling guides.' },
                { label: 'Group personal pension (GPP)', desc: 'A personal pension arranged through an employer, typically with employer contributions added. The employee\'s pot is still individual, not pooled.' },
              ].map(t => (
                <div key={t.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{t.label}</p><p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>Personal Pension vs Defined Benefit — the Key Distinction</h2>
            <p>A personal pension is defined contribution — the income you get depends on what is in the fund at retirement. A defined benefit (final salary or career-average) scheme guarantees an income based on salary and service, regardless of investment performance. This distinction is critical in mis-selling claims: advice to transfer out of a DB scheme into a personal pension means giving up guaranteed income for market-dependent income. See our guides on <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit transfer claims</Link> and <Link href="/compare/defined-benefit-vs-defined-contribution/" className="text-[#1e3a5f] underline">DB vs DC pensions</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Was Your Personal Pension Mis-Sold?</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to take out, transfer into, or invest within a personal pension unsuitably? Free initial review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'SIPP vs Personal Pension', href: '/compare/sipp-vs-personal-pension/' },
                  { label: 'DB vs DC Pension', href: '/compare/defined-benefit-vs-defined-contribution/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
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
