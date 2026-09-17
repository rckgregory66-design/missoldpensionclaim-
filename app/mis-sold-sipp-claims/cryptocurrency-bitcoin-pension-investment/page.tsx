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
  title: 'Cryptocurrency & Bitcoin SIPP Pension Claims | FCA Unregulated',
  description: 'Were pension funds invested in Bitcoin or other cryptocurrency via a SIPP? Crypto is FCA-unregulated — unsuitable for pension investment. Free claim review.',
  alternates: { canonical: '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/' },
}

const faqs = [
  { q: 'Were SIPP investments in cryptocurrency or Bitcoin legitimate?', a: 'Cryptocurrency investments — including Bitcoin, Ethereum, and other digital assets — are not regulated by the FCA. Placing pension funds into unregulated cryptocurrency assets via a SIPP was almost always unsuitable. The extreme volatility of crypto assets, combined with the complete absence of regulatory protection, made them inappropriate for pension investment for the vast majority of people.' },
  { q: 'Can I claim if my SIPP was invested in cryptocurrency?', a: 'Potentially, yes. Your claim may be against: (1) the financial adviser who recommended the SIPP and/or the cryptocurrency investment; (2) the SIPP operator who accepted crypto assets into the scheme and failed to conduct adequate due diligence; or (3) the introducer who referred you to the arrangement. The landmark case of Adams v Options UK Personal Pensions LLP [2021] established that SIPP operators can bear liability for accepting unsuitable investments.' },
  { q: 'What is the FCA\'s position on cryptocurrency in pensions?', a: 'The FCA does not regulate cryptocurrency assets. Crypto-assets held directly are outside the scope of FCA regulation and FSCS protection. The FCA has repeatedly warned consumers about the high risk of crypto investments and stated that investors should be prepared to lose all of their money. Placing pension savings into unregulated crypto assets — assets with no regulatory oversight and extreme price volatility — is almost always inconsistent with pension investment objectives.' },
  { q: 'Is Bitcoin suitable for pension investment?', a: 'For the vast majority of pension savers, Bitcoin and other cryptocurrencies are entirely unsuitable pension investments. Pension savings represent long-term, earmarked retirement provision. Bitcoin can lose 50–90% of its value in months — as it has done multiple times. There is no regulatory protection, no underlying asset value, and complete dependence on speculative demand. Any adviser who recommended cryptocurrency as pension investment for a standard pension saver failed their suitability obligations.' },
  { q: 'Can I claim against the SIPP operator as well as the adviser?', a: 'Possibly. Following Adams v Options UK Personal Pensions LLP [2021], SIPP operators can be held liable where they accepted high-risk unregulated investments without adequate due diligence on the investment and the introducer. If the SIPP operator permitted cryptocurrency investments that were obviously unsuitable, they may bear some or all of the liability.' },
  { q: 'What if the advisory firm has since closed?', a: 'If the firm has since failed and was FCA-authorised, FSCS claims may be available up to £85,000. For crypto SIPP cases, FSCS has paid out on a number of claims relating to SIPP advice — the key question is whether the specific firm was FCA-authorised for the relevant activity.' },
  { q: 'Is there a time limit for a cryptocurrency SIPP claim?', a: 'Yes. Time limits apply. The clock may run from when you first knew or should have known the investment was unsuitable — which in crypto cases may be later than the investment date, particularly if the fund appeared to hold value for some time before falling. Do not assume you are out of time without taking legal advice.' },
]

export default function CryptocurrencyBitcoinSIPPPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'SIPP Claims', item: '/mis-sold-sipp-claims/' },
        { name: 'Cryptocurrency & Bitcoin SIPP Claims', item: '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/' },
      ]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Cryptocurrency & Bitcoin SIPP Pension Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/" />
      <ArticleSchema title="Cryptocurrency & Bitcoin SIPP Pension Claims" description={metadata.description as string} url="/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/" />
      <Breadcrumb crumbs={[{ label: 'SIPP Claims', href: '/mis-sold-sipp-claims/' }, { label: 'Cryptocurrency & Bitcoin SIPP Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Cryptocurrency & Bitcoin SIPP Claims — Pension Funds Invested in Unregulated Crypto Assets</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Cryptocurrency (Bitcoin, Ethereum etc.) is not regulated by the FCA — investing pension savings in crypto assets was almost always unsuitable.',
              'Claims may be available against the adviser, the SIPP operator (following Adams v Options [2021]), and any introducer.',
              'Extreme crypto price volatility combined with zero regulatory protection makes these assets entirely inappropriate for pension investment.',
              'FSCS claims may be available up to £85,000 if the adviser firm has since failed.',
              'Time limits apply — do not delay seeking legal advice.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The FCA has never regulated cryptocurrency as an investment. Placing pension savings — money earmarked for retirement — into Bitcoin, Ethereum, or other crypto assets via a SIPP was almost always entirely unsuitable. If your pension was invested in cryptocurrency, you may have significant claims against the adviser, the SIPP operator, or both.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Cryptocurrency is not FCA-regulated. Pension investment in crypto assets was almost always unsuitable. Claims may be available against the adviser, SIPP operator, or through the FSCS. Contact us for a free, no-obligation review.</p>
            </div>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">FCA Warning: No Regulatory Protection for Crypto</p>
                <p className="text-sm text-red-700 leading-relaxed">The FCA has repeatedly warned consumers that crypto assets are high-risk, speculative investments with no regulatory protection. Investors "should be prepared to lose all their money." This is the regulator's own position — which makes advice to invest pension savings in crypto assets almost impossible to defend as suitable.</p>
              </div>
            </div>
            <h2>Why Cryptocurrency is Unsuitable for Pension Investment</h2>
            <div className="not-prose space-y-3 mb-8">
              {[
                { label: 'No FCA regulation', desc: 'Crypto assets are not regulated by the FCA — there is no regulatory protection if the investment fails.' },
                { label: 'Extreme price volatility', desc: 'Bitcoin has lost 50–90% of its value on multiple occasions. This level of volatility is incompatible with pension investment objectives.' },
                { label: 'No FSCS protection', desc: 'Losses on unregulated crypto assets are not covered by the FSCS — unlike regulated investment products.' },
                { label: 'No underlying asset value', desc: 'Unlike property or shares, crypto assets have no underlying productive asset — value depends entirely on speculative demand.' },
                { label: 'Incompatible with pension objectives', desc: 'Pension savings are earmarked for retirement income — capital preservation and steady growth, not extreme speculative risk.' },
              ].map(b => (
                <div key={b.label} className="bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 flex gap-3">
                  <AlertTriangle size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div><p className="font-semibold text-[#0f2035] text-sm">{b.label}</p><p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
            <h2>SIPP Operator Liability — Adams v Options UK [2021]</h2>
            <p>The Court of Appeal's decision in <em>Adams v Options UK Personal Pensions LLP [2021]</em> established that SIPP operators can bear liability for accepting unsuitable investments where they failed to conduct adequate due diligence on the investment and the introducing firm. This principle applies to SIPP operators who permitted cryptocurrency investments without appropriate due diligence — including checking whether the adviser was authorised to advise on such investments.</p>
            <h2>Other SIPP Investment Claims</h2>
            <p>We handle all types of SIPP mis-selling including <Link href="/mis-sold-sipp-claims/storage-pod-pension-investment/" className="text-[#1e3a5f] underline">storage pods</Link>, <Link href="/mis-sold-sipp-claims/overseas-property-pension-investment/" className="text-[#1e3a5f] underline">overseas property</Link>, <Link href="/mis-sold-sipp-claims/unregulated-collective-investment-schemes/" className="text-[#1e3a5f] underline">UCIS</Link>, <Link href="/mis-sold-sipp-claims/green-energy-pension-investment/" className="text-[#1e3a5f] underline">green energy</Link>, <Link href="/mis-sold-sipp-claims/hotel-room-pension-investment/" className="text-[#1e3a5f] underline">hotel rooms</Link>, <Link href="/mis-sold-sipp-claims/forestry-land-pension-investment/" className="text-[#1e3a5f] underline">forestry and land</Link>, and <Link href="/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/" className="text-[#1e3a5f] underline">mini-bonds and care homes</Link>.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free SIPP Claim Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was your pension invested in cryptocurrency? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Other SIPP Investment Claims</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'SIPP Claims Hub', href: '/mis-sold-sipp-claims/' },
                  { label: 'UCIS SIPP Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
                  { label: 'Pension Scam Claims', href: '/pension-scam-claims/' },
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
