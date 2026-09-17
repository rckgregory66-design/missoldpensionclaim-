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
  title: 'Pension Annuity Mis-Selling Claims | Unsuitable Annuity Advice',
  description: 'Were you advised to buy the wrong type of annuity, or failed to be offered an enhanced annuity? Mis-sold annuity claims — free initial review by specialist solicitors.',
  alternates: { canonical: '/pension-annuity-mis-selling-claims/' },
}

const faqs = [
  { q: 'What is pension annuity mis-selling?', a: 'Pension annuity mis-selling occurs when you received unsuitable advice about which type of annuity to buy — or were not advised at all when you should have been. Common examples include: not being offered an enhanced (impaired life) annuity despite qualifying health conditions; being advised to buy a level annuity rather than an inflation-linked annuity; being sold a single-life annuity when a joint-life annuity would have better suited your circumstances; or buying an annuity from your existing pension provider without a market comparison.' },
  { q: 'What is an enhanced or impaired life annuity?', a: 'An enhanced annuity (also called an impaired life annuity) pays a higher income to people with health conditions or lifestyle factors that reduce life expectancy — such as diabetes, heart disease, cancer, smoking, or obesity. Insurers pay more because they expect to pay it for a shorter period. If you had qualifying conditions but were not offered an enhanced annuity, the income you receive could be significantly lower than you are entitled to — and this may give rise to a mis-selling claim.' },
  { q: 'Was I mis-sold if I bought an annuity without taking financial advice?', a: 'Possibly. Where you arranged your annuity directly with a provider without advice ("execution only"), you cannot claim against an adviser — but you may have grounds to complain to the annuity provider if they failed to ask relevant questions about your health, failed to highlight the open market option, or failed to explain that you might qualify for an enhanced rate. If you did receive advice and it was unsuitable, you can claim against the adviser.' },
  { q: 'What is the open market option and why does it matter?', a: 'The open market option (OMO) is your right to shop around and buy an annuity from any provider, not just your existing pension company. Before using OMO became standard practice, many people bought an annuity from their pension provider without realising they could get a higher income by comparing the whole market. Failure to explain the open market option — or failure to use it — may give rise to a complaint or claim.' },
  { q: 'Can I claim if I bought a level annuity instead of an inflation-linked annuity?', a: 'Potentially. A level annuity pays a fixed income that does not increase with inflation. Over time, its real value falls. An inflation-linked annuity increases annually — typically in line with RPI or a fixed percentage. If your adviser recommended a level annuity without properly explaining the long-term impact on purchasing power, or if an inflation-linked annuity would have been more appropriate for your circumstances, there may be grounds for a claim.' },
  { q: 'Is there a time limit for an annuity mis-selling claim?', a: 'Yes. FOS complaints must generally be made within six years of the event, or three years from when you knew (or should have known) that you had cause to complain. For claims against a firm that has since failed, FSCS time limits also apply. The clock does not necessarily run from when the annuity was bought — it can run from when you first realised the advice was unsuitable. Do not assume you are out of time without taking legal advice.' },
  { q: 'Can I claim if the adviser who gave me annuity advice has since closed?', a: 'Yes, if the firm was FCA-authorised. FSCS claims may be available up to £85,000. The FSCS can also cover unsuitable annuity advice where the adviser firm has since failed.' },
]

const warningSignItems = [
  'You had health conditions (heart disease, diabetes, cancer, COPD, high blood pressure) but were not asked about your health',
  'You were not offered or told about the open market option',
  'You were not shown quotes from multiple annuity providers',
  'You smoked or had a high BMI but were not offered a smoker\'s or enhanced annuity',
  'You bought a single-life annuity but had a spouse or dependant who would have benefited from a joint-life annuity',
  'You received a level annuity with no explanation of the long-term impact of inflation',
  'You were advised to use your pension provider\'s annuity without a whole-of-market comparison',
]

export default function AnnuityMisSellingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Annuity Mis-Selling Claims', item: '/pension-annuity-mis-selling-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Annuity Mis-Selling Claims" description={metadata.description as string} url="/pension-annuity-mis-selling-claims/" />
      <ArticleSchema title="Pension Annuity Mis-Selling Claims" description={metadata.description as string} url="/pension-annuity-mis-selling-claims/" />
      <Breadcrumb crumbs={[{ label: 'Pension Annuity Mis-Selling Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Annuity Mis-Selling Claims — Were You Advised to Buy the Wrong Annuity?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Annuity mis-selling includes failing to offer an enhanced rate for health conditions, not using the open market option, and recommending a level instead of inflation-linked annuity.',
              'Enhanced (impaired life) annuities pay significantly more to people with qualifying health conditions — failure to offer one is a common ground for claims.',
              'The open market option gives you the right to buy from any provider — failure to explain or use it may support a complaint.',
              'Time limits can run from when you knew the advice was unsuitable, not necessarily when the annuity was bought.',
              'If the adviser has since failed, FSCS claims up to £85,000 may be available.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Buying an annuity is one of the most irreversible financial decisions a person can make — once done, it typically cannot be undone. This makes unsuitable annuity advice particularly damaging. Millions of people bought annuities without proper advice or without being shown all available options. If you received unsuitable advice — or no advice when you needed it — you may have a claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you had a qualifying health condition but were not offered an enhanced annuity, were not shown the open market option, or received unsuitable advice about which type of annuity to buy — you may have a claim. Contact us for a free, no-obligation review.</p>
            </div>
            <h2>Warning Signs of Annuity Mis-Selling</h2>
            <div className="not-prose space-y-2 mb-8">
              {warningSignItems.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-red-50 rounded-lg p-3 border border-red-100">
                  <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <h2>Enhanced Annuities — The Most Common Ground for Claims</h2>
            <p>Enhanced annuity rates can be <strong>10–40% higher</strong> than standard rates for qualifying health conditions. Common qualifying conditions include:</p>
            <ul>
              <li>Heart disease or previous heart attack</li>
              <li>Stroke or TIA</li>
              <li>Type 1 or Type 2 diabetes</li>
              <li>Cancer (diagnosed or in remission)</li>
              <li>Chronic obstructive pulmonary disease (COPD) or other respiratory conditions</li>
              <li>High blood pressure (hypertension)</li>
              <li>Kidney disease</li>
              <li>Smoking history or current smoker</li>
              <li>Obesity or high BMI</li>
            </ul>
            <p>If any of these applied to you at the time you took out your annuity, and your adviser did not explore enhanced annuity options, this may be a significant ground for a claim.</p>
            <h2>Annuity vs Drawdown</h2>
            <p>For guidance on whether you should have been recommended an annuity or drawdown, see our <Link href="/compare/annuity-vs-drawdown/" className="text-[#1e3a5f] underline">annuity vs drawdown comparison guide</Link> and our page on <Link href="/pension-drawdown-mis-selling-claims/" className="text-[#1e3a5f] underline">pension drawdown mis-selling claims</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Were you sold the wrong annuity, or missed out on an enhanced rate? Contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Annuity vs Drawdown', href: '/compare/annuity-vs-drawdown/' },
                  { label: 'Pension Drawdown Mis-Selling', href: '/pension-drawdown-mis-selling-claims/' },
                  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
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
