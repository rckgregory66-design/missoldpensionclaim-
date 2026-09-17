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
  title: 'Pension Cold Calling Claims | Contacted Out of the Blue?',
  description: 'Pension cold calling has been banned since January 2019. If you were cold-called and then mis-sold a pension, you may have a compensation claim.',
  alternates: { canonical: '/pension-cold-calling-claims/' },
}

const faqs = [
  { q: 'Is pension cold calling illegal?', a: 'Yes. Since 9 January 2019, it has been a criminal offence in the UK to make unsolicited direct marketing calls about pensions. The ban covers calls about transferring or reviewing a pension, releasing pension funds, or making pension investments. Breaches can result in fines of up to £500,000 from the Information Commissioner\'s Office (ICO). If you received a cold call about your pension after this date, the caller was breaking the law.' },
  { q: 'Can I claim if I was cold-called and then transferred or invested my pension?', a: 'Possibly, yes. Being cold-called is a significant warning sign of pension fraud or mis-selling. If a cold call led to you receiving unsuitable advice, transferring your pension into a SIPP, or placing your pension into a high-risk investment — and you suffered a loss — you may have a claim against the adviser and/or the SIPP operator.' },
  { q: 'What if I was cold-called before the 2019 ban?', a: 'Before 9 January 2019, pension cold calling was not banned as such — though it could still be a warning sign of mis-selling or fraud. If you were cold-called before the ban and subsequently received unsuitable advice, your claim rests on the unsuitability of the advice rather than the cold calling itself. The route to a claim (FOS, FSCS, legal action) is the same.' },
  { q: 'What does a pension cold call typically look like?', a: 'Common patterns include: being told you are entitled to a "free pension review"; being asked about accessing your pension early; being offered high returns from pension investments; being told you have unclaimed pension benefits; or being contacted by someone claiming to be from the government, HMRC, or the Pension Service. These are all hallmarks of pension scam or mis-selling contact patterns.' },
  { q: 'How do I report a pension cold call?', a: 'Report it to the ICO (ico.org.uk) if the call was made after January 2019. Also report it to Action Fraud (0300 123 2040) if you believe it was part of a scam. The FCA ScamSmart tool (fca.org.uk/scamsmart) allows you to check whether the firm is authorised. If you have already transferred your pension, seek legal advice urgently.' },
  { q: 'What if the firm that cold-called me was not FCA-authorised?', a: 'If the firm that cold-called you and subsequently gave advice was not FCA-authorised, the FOS and FSCS may not be available. However, you may still have civil legal claims and criminal fraud remedies. If funds were transferred to an unauthorised scheme, Action Fraud and the Serious Fraud Office have jurisdiction. The situation is more complex but not necessarily without remedy — legal advice is essential.' },
  { q: 'Is there a time limit for a cold-calling pension claim?', a: 'Yes. Time limits apply for FOS complaints and legal proceedings. In cold calling cases, the date of knowledge (when you knew or should have known you had a claim) may be important in calculating the limitation period. Do not assume you are out of time without taking advice.' },
]

export default function PensionColdCallingPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Cold Calling Claims', item: '/pension-cold-calling-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Pension Cold Calling Claims" description={metadata.description as string} url="/pension-cold-calling-claims/" />
      <ArticleSchema title="Pension Cold Calling Claims" description={metadata.description as string} url="/pension-cold-calling-claims/" />
      <Breadcrumb crumbs={[{ label: 'Pension Cold Calling Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Cold Calling Claims — Contacted Out of the Blue About Your Pension?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Pension cold calling has been a criminal offence since January 2019 — any unsolicited call about your pension after that date was unlawful.',
              'Being cold-called is a major warning sign of pension fraud or mis-selling — particularly if it led to a SIPP transfer or high-risk investment.',
              'Claims are based on the unsuitable advice that followed the cold call, not the call itself (unless post-2019).',
              'Report cold calls to the ICO; if fraud is involved, report to Action Fraud.',
              'Time limits apply — seek advice promptly if you transferred your pension following a cold call.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Pension cold calling was one of the most common entry points for pension mis-selling and fraud in the UK. Being called out of the blue about your pension — particularly with offers of a "free review," early access, or high-return investments — is a hallmark of the patterns that led to hundreds of millions in pension losses. If you were cold-called and your pension was subsequently transferred or invested unsuitably, you may have a significant claim.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Pension cold calling has been illegal since January 2019. If you were cold-called and subsequently mis-sold a pension product, you may have a compensation claim. Contact us for a free, no-obligation review.</p>
            </div>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Cold Calling Is a Red Flag — Not Just a Technicality</p>
                <p className="text-sm text-red-700 leading-relaxed">The pension cold calling ban was introduced specifically because cold calling was the primary mechanism by which scammers and mis-sellers accessed victims. If someone rang you unsolicited about your pension and you went on to transfer or invest as a result, there is a significant probability that the advice you received was unsuitable.</p>
              </div>
            </div>
            <h2>What Happened After the Cold Call?</h2>
            <div className="not-prose space-y-2 mb-8">
              {[
                { label: 'Did you transfer your pension into a SIPP?', href: '/mis-sold-sipp-claims/' },
                { label: 'Did you transfer out of a defined benefit or final salary pension?', href: '/defined-benefit-pension-transfer-claims/' },
                { label: 'Was your pension invested in high-risk assets?', href: '/high-risk-pension-investment-claims/' },
                { label: 'Were you told you could access your pension early?', href: '/pension-scam-claims/' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between bg-[#f0f4f8] rounded-lg p-4 border border-gray-200 hover:border-[#c9a84c] transition-colors group">
                  <span className="font-semibold text-[#0f2035] text-sm group-hover:text-[#1e3a5f]">{item.label}</span>
                  <ArrowRight size={14} className="text-[#c9a84c]" />
                </Link>
              ))}
            </div>
            <p>Also see our guide on <Link href="/pension-scam-claims/" className="text-[#1e3a5f] underline">pension scam claims</Link> — many pension fraud cases began with a cold call.</p>
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Were You Cold-Called?</h3>
              <p className="text-gray-300 text-sm mb-5">If you were cold-called and your pension was subsequently transferred or invested, contact us for a free review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Pension Scam Claims', href: '/pension-scam-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
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
