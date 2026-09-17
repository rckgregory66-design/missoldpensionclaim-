import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Annuity vs Drawdown: Which Is Better? | Pension Mis-Selling Guide',
  description: 'Was drawdown the right choice for you, or should your adviser have recommended an annuity? Understanding the difference is key to assessing whether you were mis-sold.',
  alternates: { canonical: '/compare/annuity-vs-drawdown/' },
}

const faqs = [
  { q: 'What is the difference between an annuity and drawdown?', a: 'An annuity converts your pension fund into a guaranteed income for life — you give the fund to an insurance company in exchange for a fixed (or inflation-linked) income paid until you die. Drawdown keeps your pension invested and allows you to take income from it flexibly, but the fund remains exposed to investment risk and could run out. The choice between them was one of the most important retirement decisions — and many people were not properly advised.' },
  { q: 'Was I mis-sold if my adviser recommended drawdown over an annuity?', a: 'Not automatically. Drawdown can be appropriate in the right circumstances. But if your adviser recommended drawdown without properly assessing your risk appetite, income needs, and capacity for loss — or if they did not explain the risks clearly, or if an annuity or guaranteed income product would have been more appropriate for your specific situation — that advice may have been unsuitable, and you may have a claim.' },
  { q: 'When is an annuity typically more appropriate?', a: 'An annuity is typically more appropriate where: you need a guaranteed income to meet regular expenses; you have a low capacity to absorb investment losses; you are concerned about running out of money; you have a health condition that qualifies you for an enhanced annuity; or you have no dependants who would benefit from a drawdown fund on your death. For many retirees, the certainty of an annuity better matches their needs.' },
  { q: 'When is drawdown typically more appropriate?', a: 'Drawdown may be appropriate where: you have other guaranteed income (e.g. state pension, DB pension) covering essential expenses; you have a high capacity to absorb investment losses; you want flexibility over when and how much you take; you have health issues that reduce life expectancy (annuity rates are based on average life expectancy); or you want to preserve a fund for beneficiaries on death.' },
  { q: 'Can I claim if I was moved from an annuity into drawdown?', a: 'If you already had an annuity providing guaranteed income and were advised to surrender it and move into drawdown, that advice requires very careful scrutiny. Surrendering an annuity is almost always irreversible and gives up guaranteed income. If the advice to surrender was unsuitable, there may be a significant claim.' },
  { q: 'What is an enhanced annuity and was I entitled to one?', a: 'An enhanced (or impaired life) annuity pays a higher income to people with health conditions or lifestyle factors that reduce life expectancy — such as diabetes, heart conditions, or smoking. If you had qualifying health conditions but your adviser did not explore an enhanced annuity, they may have failed their suitability obligations. The failure to obtain the best available annuity rate for your circumstances can itself support a claim.' },
  { q: 'What about the pension freedoms (post-2015)?', a: 'The pension freedoms introduced in April 2015 removed the requirement to buy an annuity and made flexi-access drawdown widely available. This significantly increased the volume of drawdown arrangements and created new opportunities for unsuitable advice — particularly where advisers recommended drawdown to clients for whom a guaranteed income would have been more appropriate. Post-2015 drawdown advice is as capable of being unsuitable as pre-2015 advice.' },
]

const rows = [
  { factor: 'Income certainty', annuity: 'Guaranteed for life — cannot run out', drawdown: 'Variable — fund can run out' },
  { factor: 'Investment risk', annuity: 'None — insurer bears the risk', drawdown: 'Full investment risk borne by you' },
  { factor: 'Flexibility', annuity: 'Low — income fixed at outset (unless index-linked)', drawdown: 'High — take more or less as needed' },
  { factor: 'Death benefit', annuity: 'Depends on type — can include spouse\'s pension', drawdown: 'Remaining fund passes to beneficiaries' },
  { factor: 'Health/enhanced rates', annuity: 'Higher income for health conditions', drawdown: 'Health irrelevant to income level' },
  { factor: 'Inflation protection', annuity: 'Available (index-linked) but costs more', drawdown: 'Depends on investment performance' },
  { factor: 'Suited to', annuity: 'Regular income needs, low risk tolerance, health conditions', drawdown: 'Flexible needs, other guaranteed income, higher risk tolerance' },
]

export default function AnnuityVsDrawdownPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Compare', item: '/compare/' }, { name: 'Annuity vs Drawdown', item: '/compare/annuity-vs-drawdown/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Annuity vs Drawdown" description={metadata.description as string} url="/compare/annuity-vs-drawdown/" />
      <ArticleSchema title="Annuity vs Drawdown" description={metadata.description as string} url="/compare/annuity-vs-drawdown/" />
      <Breadcrumb crumbs={[{ label: 'Compare', href: '/compare/' }, { label: 'Annuity vs Drawdown' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Annuity vs Drawdown — Was Your Adviser's Recommendation Right for You?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'An annuity converts your fund into guaranteed income for life; drawdown keeps it invested with flexibility but risk.',
              'Drawdown advice is unsuitable where the client needed certainty, had low risk tolerance, or lacked other guaranteed income.',
              'The failure to explore enhanced annuity rates for clients with health conditions is itself a potential ground for a claim.',
              'Post-2015 pension freedoms increased drawdown uptake — and increased the volume of unsuitable drawdown advice.',
              'Surrendering a guaranteed annuity to move into drawdown is almost always irreversible — advice to do so requires strong justification.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The choice between annuity and drawdown is one of the most consequential decisions in retirement planning. It is also an area where unsuitable advice has caused significant harm. Understanding the differences — and when each is appropriate — is key to assessing whether you were properly advised.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you needed guaranteed income, had low risk tolerance, or had health conditions qualifying you for an enhanced annuity — and your adviser recommended drawdown without adequately addressing these factors — that advice may have been unsuitable. Contact us for a free review.</p>
            </div>
            <h2>Head-to-Head: Annuity vs Drawdown</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Factor</th>
                    <th className="text-left p-3 font-semibold">Annuity</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Drawdown</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.factor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.annuity}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.drawdown}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>When Drawdown Advice Is Likely to Have Been Unsuitable</h2>
            <div className="not-prose space-y-2 mb-8">
              {[
                'You told your adviser you needed a guaranteed, regular income to meet living expenses',
                'Your risk questionnaire showed a cautious or low risk tolerance',
                'You had no other source of guaranteed income besides the state pension',
                'You were in or near retirement with little capacity to absorb short-term investment losses',
                'You had a health condition that would have qualified you for an enhanced annuity',
                'The drawdown fund was invested in high-risk or illiquid assets',
                'The adviser did not show you an annuity comparison or discuss enhanced annuity options',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-[#f0f4f8] rounded-lg p-3 border border-gray-200">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <p>See also our guide on <Link href="/pension-drawdown-mis-selling-claims/" className="text-[#1e3a5f] underline">pension drawdown mis-selling claims</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you advised to go into drawdown when an annuity might have been more suitable? Contact us for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Pension Drawdown Mis-Selling', href: '/pension-drawdown-mis-selling-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'Compare: FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
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
