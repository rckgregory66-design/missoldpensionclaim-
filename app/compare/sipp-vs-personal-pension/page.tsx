import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'SIPP vs Personal Pension: Key Differences | Mis-Selling Guide',
  description: 'What is the difference between a SIPP and a personal pension? Was a SIPP the right product for you? Understanding the distinction is key to assessing mis-selling.',
  alternates: { canonical: '/compare/sipp-vs-personal-pension/' },
}

const faqs = [
  { q: 'What is the difference between a SIPP and a personal pension?', a: 'A Self-Invested Personal Pension (SIPP) gives the holder greater investment flexibility than a standard personal pension — it can hold a wider range of assets, including commercial property, individual shares, and alternative investments. A standard personal pension is typically invested in a range of pre-selected funds. For most mainstream pension savers, a standard personal pension is more appropriate; SIPPs are typically appropriate for more sophisticated investors who want to make their own investment decisions.' },
  { q: 'Was I mis-sold if my pension was put into a SIPP instead of a personal pension?', a: 'Possibly. Where a SIPP was recommended when a standard personal pension (or staying in a workplace scheme) would have been more appropriate — or where the SIPP was used to hold unsuitable, high-risk, or unregulated investments — there may be grounds for a mis-selling claim. The key question is whether the SIPP product itself and/or the investments within it were suitable for you specifically.' },
  { q: 'Are SIPP charges higher than personal pension charges?', a: 'Generally, yes. SIPPs — particularly those accepting non-standard investments — typically have higher charges than standard personal pensions. These include SIPP operator charges (a flat fee and/or percentage), investment charges, and dealing charges on individual investments. If you were moved from a low-cost personal pension into a high-cost SIPP without adequate justification, the charge differential itself may be a relevant factor in a mis-selling claim.' },
  { q: 'Are standard personal pensions safer than SIPPs?', a: 'Standard personal pensions invest in regulated, diversified funds — which provides a degree of protection through diversification and the regulatory framework. SIPPs can hold unregulated, illiquid, or high-risk alternative investments. When SIPPs were used to hold assets such as storage pods, overseas property, UCIS, or green energy investments, savers were exposed to risks far beyond what a standard pension would involve.' },
  { q: 'Can I claim if I was transferred from a workplace pension into a SIPP?', a: 'Yes — this is one of the most common SIPP mis-selling patterns. Advisers sometimes recommended transferring from an employer\'s pension (particularly a defined benefit scheme) into a SIPP, often to invest in high-risk alternatives. Where the workplace pension offered better terms (guaranteed benefits, employer contributions, lower charges), the transfer was almost certainly unsuitable.' },
  { q: 'Can I still use a SIPP if I want investment flexibility?', a: 'Yes — SIPPs are legitimate products and are appropriate for some investors. If you are a sophisticated investor who wants to make your own investment decisions and accepts the associated risks, a SIPP may be suitable. The issue arises where SIPPs were sold to standard pension savers as vehicles for high-risk or unregulated investments, without proper explanation of the risks or proper assessment of suitability.' },
  { q: 'What should I do if I am not sure whether my SIPP was suitable?', a: 'Contact us for a free review. We assess all aspects of SIPP mis-selling — the product recommendation, the underlying investments, the charges, and the advice process — to determine whether you have a claim and what routes are available.' },
]

const rows = [
  { factor: 'Investment choice', sipp: 'Wide — including shares, property, alternatives', pp: 'Restricted to pre-selected fund range' },
  { factor: 'Typical charges', sipp: 'Higher — operator + investment + dealing charges', pp: 'Lower — fund AMC typically 0.5–1%' },
  { factor: 'Who it suits', sipp: 'Sophisticated investors making own decisions', pp: 'Most mainstream pension savers' },
  { factor: 'Non-standard assets', sipp: 'Can hold (e.g. commercial property, alternatives)', pp: 'Generally not available' },
  { factor: 'FSCS coverage', sipp: 'Depends on what\'s held — advice FSCS £85k', pp: 'Advice FSCS £85k; product depends on provider' },
  { factor: 'Mis-selling risk', sipp: 'Higher — alternatives can be unsuitable for most', pp: 'Lower — limited to standard fund range' },
]

export default function SIPPvsPersonalPensionPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Compare', item: '/compare/' }, { name: 'SIPP vs Personal Pension', item: '/compare/sipp-vs-personal-pension/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="SIPP vs Personal Pension" description={metadata.description as string} url="/compare/sipp-vs-personal-pension/" />
      <ArticleSchema title="SIPP vs Personal Pension" description={metadata.description as string} url="/compare/sipp-vs-personal-pension/" />
      <Breadcrumb crumbs={[{ label: 'Compare', href: '/compare/' }, { label: 'SIPP vs Personal Pension' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">SIPP vs Personal Pension — Was a SIPP the Right Product for You?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'SIPPs offer greater investment flexibility but higher charges — they are appropriate for sophisticated investors, not most mainstream savers.',
              'Moving a pension into a SIPP to invest in high-risk alternatives (storage pods, overseas property, crypto) was almost always unsuitable.',
              'SIPP charges are typically significantly higher than standard personal pensions — the cost difference is a relevant factor in suitability.',
              'Transferring from a workplace or DB pension into a SIPP without strong justification is almost always unsuitable.',
              'If a SIPP was not appropriate for you, or the investments within it were not suitable, you may have a claim.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">SIPPs are legitimate pension products — but they are suitable for a relatively narrow audience. The widespread mis-selling of SIPPs occurred because advisers recommended them to mainstream pension savers as vehicles for high-risk investments that would never have been available in a standard pension. Understanding the difference between the two products is key to identifying whether you were mis-sold.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you were moved from a standard pension or workplace scheme into a SIPP, particularly to invest in high-risk alternatives — and you were a mainstream pension saver without sophisticated investment experience — that advice was likely unsuitable. Contact us for a free review.</p>
            </div>
            <h2>SIPP vs Personal Pension — Side by Side</h2>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold rounded-tl-lg">Factor</th>
                    <th className="text-left p-3 font-semibold">SIPP</th>
                    <th className="text-left p-3 font-semibold rounded-tr-lg">Personal Pension</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-semibold text-[#0f2035] border-b border-gray-100">{r.factor}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.sipp}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{r.pp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Types of SIPP Mis-Selling</h2>
            <p>For specific types of investment that caused harm when held within SIPPs, see our guides:</p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Storage Pod SIPP Claims', href: '/mis-sold-sipp-claims/storage-pod-pension-investment/' },
                { label: 'Overseas Property SIPP Claims', href: '/mis-sold-sipp-claims/overseas-property-pension-investment/' },
                { label: 'UCIS Pension Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
                { label: 'Green Energy SIPP Claims', href: '/mis-sold-sipp-claims/green-energy-pension-investment/' },
                { label: 'Crypto & Bitcoin SIPP Claims', href: '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/' },
                { label: 'Mini-Bond & Care Home SIPP Claims', href: '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-[#f0f4f8] border border-gray-200 rounded-lg p-3 hover:border-[#c9a84c] transition-colors group flex items-center justify-between">
                  <span className="font-semibold text-[#0f2035] text-sm group-hover:text-[#1e3a5f]">{item.label}</span>
                  <ArrowRight size={12} className="text-[#c9a84c]" />
                </Link>
              ))}
            </div>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Was a SIPP the right product for you? Contact us for a free, no-obligation assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims Hub', href: '/mis-sold-sipp-claims/' },
                  { label: 'Compare: DB vs DC Pension', href: '/compare/defined-benefit-vs-defined-contribution/' },
                  { label: 'Pension Charges Mis-Selling', href: '/pension-charges-mis-selling/' },
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
