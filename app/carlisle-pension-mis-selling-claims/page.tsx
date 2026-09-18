import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Phone } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema, LocalBusinessSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Carlisle Pension Mis-Selling Claims | Local Solicitors',
  description: 'Carlisle-based solicitors handling mis-sold pension claims across Cumbria. No win no fee. Edward & Amaury Solicitors, SRA No. 800525. Free review.',
  alternates: { canonical: '/carlisle-pension-mis-selling-claims/' },
}

const faqs = [
  { q: 'Are Edward & Amaury Solicitors based in Carlisle?', a: 'Yes. Edward & Amaury Solicitors are based at Pacific House, Fletcher Way, Parkhouse, Carlisle, CA3 0LJ. We handle mis-sold pension claims across Cumbria and throughout England and Wales.' },
  { q: 'Can I claim for a mis-sold pension if I live in Cumbria?', a: 'Yes. Pension mis-selling claims are handled by the Financial Ombudsman Service (FOS) and the Financial Services Compensation Scheme (FSCS), both of which accept claims from anywhere in the UK. Where you live does not affect your eligibility to claim — what matters is the advice you received and the loss you suffered.' },
  { q: 'Do I need to visit your Carlisle office to start a claim?', a: 'No. While we are based in Carlisle, we work with clients throughout Cumbria and across England and Wales without the need for in-person meetings. Initial consultations can be handled by telephone or email, and the claims process can proceed entirely remotely if that suits you better.' },
  { q: 'Were many people in Cumbria affected by pension mis-selling?', a: 'Pension mis-selling affected people across the UK, including many in Cumbria. The FCA and FSCS have received tens of thousands of complaints involving mis-sold SIPP investments, unsuitable defined benefit pension transfers, and high-risk investment schemes promoted through pension vehicles. Many Cumbrian residents were affected, particularly those who received advice through introducers or on pension consolidation during the 2010s.' },
  { q: 'What types of pension mis-selling claims do you handle in Carlisle?', a: 'We handle mis-sold SIPP claims, defined benefit (final salary) pension transfer claims, claims involving high-risk investments (storage pods, overseas property, mini-bonds, green energy, cryptocurrency), pension scam claims, and claims against failed advisers through the FSCS. We also represent clients in FOS complaints and, where appropriate, court proceedings.' },
  { q: 'What is the time limit for making a pension mis-selling claim from Carlisle?', a: 'Time limits for pension claims follow standard limitation rules — typically six years from the date of the negligent advice, or three years from when you knew or ought reasonably to have known you had a claim. Some FSCS claims have additional deadline rules. Do not assume you are out of time without taking advice — contact us for a free assessment.' },
  { q: 'What does no win no fee mean for pension claims?', a: 'No win no fee means you pay nothing upfront and nothing if your claim is unsuccessful. If your claim succeeds, a success fee is deducted from your compensation — the percentage and cap will be clearly explained before you commit. We will always ensure you understand the financial arrangement fully before any work begins.' },
]

const claimTypes = [
  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/', desc: 'SIPPs invested in high-risk or unregulated assets — storage pods, overseas property, mini-bonds and more.' },
  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/', desc: 'Final salary pension transfers that were unsuitable or poorly advised.' },
  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/', desc: 'Claims through the Financial Services Compensation Scheme where the adviser firm has failed.' },
  { label: 'Pension Scam Claims', href: '/pension-scam-claims/', desc: 'Pension liberation, fraudulent schemes, and unauthorised transfers.' },
  { label: 'Pension Cold Calling Claims', href: '/pension-cold-calling-claims/', desc: 'Mis-selling that began with an unsolicited call — a criminal offence since January 2019.' },
  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/', desc: 'Investments in unregulated or speculative assets within pension wrappers.' },
]

export default function CarlislePensionClaimsPage() {
  return (
    <>
      <LocalBusinessSchema
        locationName="Edward & Amaury Solicitors — Carlisle Pension Mis-Selling Claims"
        streetAddress="Pacific House, Fletcher Way, Parkhouse"
        addressLocality="Carlisle"
        postalCode="CA3 0LJ"
        url="/carlisle-pension-mis-selling-claims/"
        description="Mis-sold pension claims solicitors based in Carlisle, Cumbria. Handling SIPP mis-selling, defined benefit transfer claims and pension compensation claims across England and Wales."
      />
      <BreadcrumbSchema crumbs={[{ name: 'Carlisle Pension Mis-Selling Claims', item: '/carlisle-pension-mis-selling-claims/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Carlisle Pension Mis-Selling Claims" description={metadata.description as string} url="/carlisle-pension-mis-selling-claims/" />
      <ArticleSchema title="Carlisle Pension Mis-Selling Claims" description={metadata.description as string} url="/carlisle-pension-mis-selling-claims/" />
      <Breadcrumb crumbs={[{ label: 'Carlisle Pension Claims' }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Carlisle Pension Mis-Selling Claims — Solicitors Based in Cumbria</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Edward & Amaury Solicitors are based in Carlisle and handle mis-sold pension claims across Cumbria and England and Wales.',
              'We handle SIPP mis-selling, defined benefit transfer claims, FSCS claims, pension scam claims and high-risk investment claims.',
              'No win no fee — no upfront cost and nothing to pay if your claim is unsuccessful.',
              'Claims can proceed entirely by telephone and email — no need to visit our Carlisle office.',
              'Contact us for a free, no-obligation initial review of your pension claim.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Edward & Amaury Solicitors are pension mis-selling specialists based in Carlisle, Cumbria. We handle solicitor-led claims for individuals across Cumbria and throughout England and Wales who received unsuitable pension advice or were placed into high-risk investments through their pension.</p>
            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">We are Carlisle-based solicitors specialising in pension mis-selling claims. No win no fee, no upfront cost. Call us on {siteConfig.phone} or use the form below for a free initial review.</p>
            </div>

            <div className="not-prose bg-[#f0f4f8] rounded-xl p-5 border border-gray-200 mb-8 flex gap-3">
              <MapPin size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0f2035] text-sm mb-1">Our Carlisle Office</p>
                <p className="text-gray-700 text-sm">{siteConfig.address}</p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center gap-1 text-[#1e3a5f] text-sm mt-1 hover:underline">
                  <Phone size={12} />{siteConfig.phone}
                </a>
                <p className="text-gray-500 text-xs mt-2">Authorised and regulated by the Solicitors Regulation Authority. SRA No. {siteConfig.sraNumber}.</p>
              </div>
            </div>

            <h2>Pension Mis-Selling Claims for Cumbria Residents</h2>
            <p>Pension mis-selling affected many thousands of people across the UK during the 2000s and 2010s. Common patterns included unsuitable advice to transfer out of employer defined benefit schemes, SIPP investments into unregulated or illiquid assets, and pension liberation schemes targeting people who needed early access to their funds.</p>
            <p>As a Carlisle firm, we have seen the impact of these schemes on people across Cumbria — former NHS workers advised to transfer out of their NHS pension, public sector employees placed into SIPPs with speculative investments, and individuals targeted by cold callers offering "free pension reviews" that turned out to be the entry point for mis-selling.</p>

            <h2>Claim Types We Handle</h2>
            <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
              {claimTypes.map(ct => (
                <Link key={ct.href} href={ct.href} className="bg-[#f0f4f8] rounded-xl p-4 border border-gray-200 hover:border-[#c9a84c] transition-colors group block">
                  <p className="font-semibold text-[#0f2035] text-sm mb-1 group-hover:text-[#1e3a5f]">{ct.label}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{ct.desc}</p>
                </Link>
              ))}
            </div>

            <h2>No Win No Fee Pension Claims from Carlisle</h2>
            <p>All our pension mis-selling work is handled on a no win no fee basis. This means:</p>
            <div className="not-prose space-y-2 mb-6">
              {[
                'No upfront payment — you pay nothing to start your claim.',
                'No charge if your claim is unsuccessful — you carry no financial risk.',
                'If your claim succeeds, a success fee is deducted from your compensation — this is explained clearly before you commit.',
                'You receive a written funding agreement setting out the exact terms before any work begins.',
              ].map(p => (
                <div key={p} className="flex gap-2 items-start bg-white rounded-lg p-3 border border-gray-100">
                  <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{p}</p>
                </div>
              ))}
            </div>
            <p>See our <Link href="/no-win-no-fee-pension-claims/" className="text-[#1e3a5f] underline">no win no fee pension claims guide</Link> for more detail on how the funding arrangement works and what percentage applies.</p>

            <h2>How Pension Mis-Selling Claims Work</h2>
            <p>Most pension mis-selling claims follow one of two routes:</p>
            <ul>
              <li><strong>Financial Ombudsman Service (FOS)</strong> — where the adviser firm is still solvent. The FOS can award up to £430,000 per complaint (for acts after April 2019). See our <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">FOS pension complaints guide</Link>.</li>
              <li><strong>Financial Services Compensation Scheme (FSCS)</strong> — where the adviser firm has failed and been declared in default by the FSCS. The FSCS applies a compensation limit per firm. See our <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS pension claims guide</Link>.</li>
            </ul>
            <p>Where losses exceed the FOS cap, or where there are multiple respondents, court proceedings may also be appropriate. We advise on the best route for your specific circumstances.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Pension Claim Review</h3>
              <p className="text-gray-300 text-sm mb-5">Based in Carlisle. No win no fee. Tell us what happened to your pension — we will assess your options at no charge.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'DB Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'No Win No Fee', href: '/no-win-no-fee-pension-claims/' },
                  { label: 'Make a Claim', href: '/make-a-claim/' },
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
