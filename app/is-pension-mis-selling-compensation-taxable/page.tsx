import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Info } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'Is Pension Mis-Selling Compensation Taxable? | Tax Treatment Guide',
  description: 'Pension mis-selling compensation is generally not taxable as income. But the position depends on how it is paid and what it covers. Solicitor guide — seek tax advice.',
  alternates: { canonical: '/is-pension-mis-selling-compensation-taxable/' },
}

const faqs = [
  { q: 'Is pension mis-selling compensation taxable?', a: 'Generally, compensation received for financial loss caused by mis-sold pension advice is not treated as taxable income by HMRC. It is compensatory in nature — intended to restore a lost financial position rather than to provide a financial gain. However, the tax treatment can depend on how the compensation is structured, what it covers, and where it is paid. You should seek independent tax advice before accepting a compensation payment.' },
  { q: 'Do I have to pay tax on FSCS pension compensation?', a: 'In most cases, FSCS compensation payments for investment advice losses — including pension mis-selling — are not subject to income tax. The payment is compensatory rather than income. However, if the compensation is paid into a pension scheme rather than directly to you, different rules may apply. The FSCS does not deduct tax from compensation payments, but that does not determine your personal tax position — seek advice from a qualified tax adviser.' },
  { q: 'Is FOS pension compensation taxable?', a: 'FOS awards for financial loss resulting from unsuitable pension advice are generally compensatory in nature and not treated as taxable income. However, FOS awards can include a number of elements — including interest — and the tax treatment of each element may differ. You should seek independent tax advice about any FOS award before accepting it.' },
  { q: 'Is the interest element of compensation taxable?', a: 'Possibly. HMRC generally treats interest added to a compensation payment as taxable interest income. Where the FOS or FSCS adds interest to a compensation award to reflect the time value of money, that interest element may be subject to income tax. The main compensation element (the capital sum) is typically not taxable, but the interest element may be. This is one reason why independent tax advice is important.' },
  { q: 'Does pension mis-selling compensation affect my pension annual allowance?', a: 'This depends on how the compensation is paid. If compensation is paid directly to you in cash, it does not constitute a pension contribution and does not affect your annual allowance. If compensation is directed back into a pension scheme (sometimes called a \'pension credit\'), it may count as a pension input and could have annual allowance implications. This is a complex area — seek advice from a tax adviser or pension specialist.' },
  { q: 'What if compensation is paid back into my pension?', a: 'Where compensation is paid back into a pension — for example, because the mis-selling occurred within a SIPP and the remedy involves reinstating the pension to its correct value — there can be tax and annual allowance implications. HMRC has issued guidance on certain types of pension compensation payments, but this is a specialist area. You should take independent tax and pensions advice.' },
  { q: 'Should I get tax advice before accepting pension compensation?', a: 'Yes — this is strongly recommended, particularly for larger payments or where the payment includes multiple elements (capital, interest, expenses). A qualified tax adviser or chartered accountant can assess your personal tax position in light of the specific payment you are receiving. We can refer you to appropriate professionals if needed.' },
]

export default function TaxablePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Is Pension Compensation Taxable?', item: '/is-pension-mis-selling-compensation-taxable/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Is Pension Mis-Selling Compensation Taxable?" description={metadata.description as string} url="/is-pension-mis-selling-compensation-taxable/" />
      <ArticleSchema title="Is Pension Mis-Selling Compensation Taxable?" description={metadata.description as string} url="/is-pension-mis-selling-compensation-taxable/" />

      <Breadcrumb crumbs={[{ label: 'Is Compensation Taxable?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Is Pension Mis-Selling Compensation Taxable?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension mis-selling compensation is generally not taxable as income — it is compensatory in nature, not a financial gain.',
              'However, any interest element added to a compensation award may be taxable as interest income.',
              'If compensation is paid back into a pension rather than directly to you, annual allowance implications can arise.',
              'The position depends on the specific structure of the payment — do not assume. Seek independent tax advice before accepting.',
              'This page provides general information only. It is not tax advice. Your solicitor is not a tax adviser.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A question we are regularly asked is whether pension mis-selling compensation is subject to income tax. The short answer is: generally not — but there are important exceptions, and the position depends on how the payment is structured. This page provides general guidance. It is not tax advice. You should seek advice from a qualified tax adviser before accepting any significant compensation payment.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Pension mis-selling compensation is generally not subject to income tax — it is designed to restore a lost financial position, not to provide a gain. However, any interest added to the award may be taxable, and payments directed into a pension can trigger annual allowance issues. Always take independent tax advice before accepting a payment.</p>
            </div>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">This Is General Information — Not Tax Advice</p>
                <p className="text-sm text-gray-700 leading-relaxed">Tax rules are complex and depend on your personal circumstances and how compensation is structured. We are solicitors, not tax advisers. The information on this page is general guidance only. For advice specific to your situation, please consult a qualified tax adviser or chartered accountant.</p>
              </div>
            </div>

            <h2>The General Position</h2>
            <p>Under HMRC's general approach, compensation received for financial loss is not treated as income or as a taxable gain. The principle is that compensation restores you to the position you would have been in — it does not put you in a better position, and therefore does not represent a taxable receipt.</p>
            <p>This principle applies to most pension mis-selling compensation payments: whether awarded by the Financial Ombudsman Service, paid by the FSCS, or agreed as part of a settlement with an adviser firm. The capital element of the compensation is generally not subject to income tax or capital gains tax.</p>

            <h2>The Interest Element — Potentially Taxable</h2>
            <p>Where a compensation award includes an interest element — added by the FOS or FSCS to reflect the time value of money over the period since the loss was suffered — that interest may be treated by HMRC as taxable interest income.</p>
            <p>The amount of interest included in a compensation award can be significant, particularly for long-standing claims or claims involving large amounts. It is important to understand how much of your award is capital compensation and how much is interest, so you can assess your tax position accurately.</p>

            <h2>Payments Into a Pension — Annual Allowance Risk</h2>
            <p>Where compensation is paid directly back into a pension arrangement rather than to you in cash — sometimes used in SIPP compensation cases to reconstruct the pension to its correct value — there can be implications for your pension annual allowance.</p>
            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <div className="flex gap-2 mb-2">
                <Info size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="font-semibold text-[#0f2035] text-sm">Annual Allowance — Key Point</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">The pension annual allowance is the maximum amount that can be paid into your pension in any tax year with tax relief. For 2024/25 it is £60,000 (or 100% of your earnings if lower). If a large compensation payment is directed into your pension, it may use up or exceed your annual allowance, creating a tax charge. This is a specialist area — seek advice from a pensions tax expert before agreeing to a pension credit structure.</p>
            </div>

            <h2>FSCS Compensation — Specific Position</h2>
            <p>FSCS compensation for investment advice losses is paid directly to eligible claimants. The FSCS does not deduct tax from payments. The payment itself — as a capital compensation sum — is generally not taxable. However, whether any particular payment is taxable in your hands depends on your personal circumstances, and the FSCS cannot advise you on tax. Seek independent advice.</p>

            <h2>Practical Guidance</h2>
            <ul>
              <li>Keep a clear record of how your compensation payment is broken down — capital, interest, expenses — as provided in the award letter or settlement agreement.</li>
              <li>Before accepting a large compensation payment, take advice from a qualified tax adviser or chartered accountant.</li>
              <li>If compensation is being structured as a payment into a pension rather than directly to you, specifically ask about annual allowance implications.</li>
              <li>If you are asked to sign a settlement agreement, ensure your solicitor has reviewed it before you sign.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Questions about pension mis-selling compensation? Contact us for a free initial review of your case.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'No Win No Fee', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="text-xs text-gray-700 leading-relaxed"><strong>Disclaimer:</strong> This page provides general information about the typical tax treatment of pension mis-selling compensation. It is not tax advice. Tax rules are subject to change and their application depends on your personal circumstances. Always consult a qualified tax adviser.</p>
            </div>
          </aside>
        </div>
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
