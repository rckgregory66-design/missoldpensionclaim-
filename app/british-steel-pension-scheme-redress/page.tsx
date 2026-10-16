import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import RelatedGuides from '@/components/RelatedGuides'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ArticleSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'British Steel Pension Scheme Redress: FCA Scheme Explained',
  description: 'How the FCA redress scheme for British Steel Pension Scheme (BSPS) transfers worked, who it covered, its deadlines and what to do if you were missed. UK guide.',
  alternates: { canonical: '/british-steel-pension-scheme-redress/' },
  openGraph: pageOpenGraph('/british-steel-pension-scheme-redress/'),
}

const faqs = [
  { q: 'What is the British Steel Pension Scheme redress scheme?', a: 'It is a consumer redress scheme made by the Financial Conduct Authority (FCA), with final rules published in 2022. It required firms that advised British Steel Pension Scheme (BSPS) members to transfer out to review that advice and pay redress where it was unsuitable and the member lost out. The rules are in the FCA Handbook at CONRED 4.' },
  { q: 'Which advice did the scheme cover?', a: 'The FCA said the scheme covered most consumers who were advised between 26 May 2016 and 29 March 2018. The exact scope is set out in the rules in CONRED 4, so check the FCA Handbook or ask the firm that advised you if you are unsure whether your case was in scope.' },
  { q: 'How was redress calculated?', a: 'The FCA described redress as the amount needed to top up a personal pension so that the member could buy an annuity giving an income similar to the one they gave up in the BSPS. Firms had to use a calculator provided by the FCA. Because annuities became cheaper to buy, some top-up amounts turned out smaller than first expected, and some were nil.' },
  { q: 'Can I still complain if I was not included in the scheme?', a: 'The FCA states that if you are unhappy with an adviser\'s response you can complain to the Financial Ombudsman Service, and that if the adviser has failed you can make a claim to the Financial Services Compensation Scheme (FSCS). Whether a particular complaint or claim is in time and eligible depends on its facts, so check the FOS and FSCS guidance or take advice.' },
  { q: 'What if my adviser firm no longer exists?', a: 'The FCA says customers of firms that are no longer trading should make a claim with the FSCS. It also says the FSCS was still accepting claims at the time of its April 2024 update. See our guide to claiming when an adviser has gone bust for the general position.' },
  { q: 'Does this page tell me whether my own advice was unsuitable?', a: 'No. It describes the scheme in general terms. Whether your advice was unsuitable depends on your circumstances and the records of what was recommended and why. The FCA also offers an advice checker on its website that can help you judge this.' },
]

export default function BSPSRedressPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'British Steel Pension Scheme Redress', item: '/british-steel-pension-scheme-redress/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="British Steel Pension Scheme Redress: FCA Scheme Explained" description={metadata.description as string} url="/british-steel-pension-scheme-redress/" />
      <ArticleSchema title="British Steel Pension Scheme Redress: FCA Scheme Explained" description={metadata.description as string} url="/british-steel-pension-scheme-redress/" />

      <Breadcrumb crumbs={[{ label: 'British Steel Pension Scheme Redress' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">British Steel Pension Scheme Redress: How the FCA Scheme Worked</h1>
            <AuthorBox publishedDate="October 2026" />
            <TLDRBox points={[
              'The FCA made a consumer redress scheme (CONRED 4) for former British Steel Pension Scheme members advised to transfer out, with final rules published in 2022.',
              'Firms had to review their advice and pay redress where it was unsuitable and the member lost out. Redress was designed to restore the pension income given up.',
              'The FCA estimated that almost half of the advice was unsuitable. Many unsuitable cases still produced no redress because no financial loss was found.',
              'If your adviser failed, the FSCS is the route. If you disagree with an adviser or firm, the Financial Ombudsman Service is available.',
              'General information for the UK, based on FCA material dated 2022 to 2024. Not advice on your own case.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Following the restructuring of the British Steel Pension Scheme (BSPS) in 2017, around 7,700 members transferred out after receiving advice. The FCA concluded that a high proportion of that advice was unsuitable and required firms to review it under a purpose-made redress scheme. This page explains, in general terms, how that scheme worked and what options exist for members who still have concerns.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The BSPS redress scheme was an FCA-made scheme that required advising firms to review their transfer advice and pay redress for unsuitable advice that caused a loss. Its firm deadlines ran from March 2023 to February 2024. If you were not helped through it, you can still complain to the Financial Ombudsman Service or, if the adviser has failed, claim from the FSCS.</p>
            </div>

            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-8 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">General Information, Not Advice On Your Case</p>
                <p className="text-sm text-gray-700 leading-relaxed">This page covers the law and regulatory position in England, Wales and Scotland as described in FCA publications dated 2022 to 2024. Figures are the FCA&apos;s and are as at the dates given. The position may have changed, and nothing here guarantees any outcome in an individual case.</p>
              </div>
            </div>

            <h2>What happened to the British Steel Pension Scheme</h2>
            <p>According to the FCA, the BSPS was restructured in 2017, and around 7,700 members transferred out of it after receiving advice. The FCA estimated that almost half (46%) of that advice was unsuitable, causing significant harm and distress. For background on why giving up a defined benefit pension is treated so carefully, see our guides to <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit pension transfer claims</Link> and <Link href="/pension-advice-fca-rules/" className="text-[#1e3a5f] underline">FCA rules on pension advice</Link>.</p>

            <h2>How the FCA redress scheme worked</h2>
            <p>The FCA published final rules in November 2022 for a consumer redress scheme for former BSPS members who received unsuitable advice to transfer out. The rules are in the FCA Handbook at CONRED 4. In outline:</p>
            <ul>
              <li><strong>Firms reviewed their own advice.</strong> Firms had to review the advice they gave and pay redress to members who lost money because of unsuitable advice.</li>
              <li><strong>Period covered.</strong> The FCA said the scheme covered most consumers advised between 26 May 2016 and 29 March 2018.</li>
              <li><strong>Calculation.</strong> Redress was based on the amount needed to top up a personal pension so the member could buy an annuity giving a similar income to staying in the BSPS, using a calculator provided by the FCA. Compare our explainer on <Link href="/how-is-defined-benefit-pension-transfer-redress-calculated/" className="text-[#1e3a5f] underline">how defined benefit transfer redress is calculated</Link>.</li>
              <li><strong>Suitable-advice cases.</strong> Firms had to give the FCA details of cases they rated suitable, so that the FCA could check whether those consumers wanted a Financial Ombudsman Service review.</li>
            </ul>

            <h3>Firm deadlines</h3>
            <p>The FCA set these deadlines for firms:</p>
            <ul>
              <li>Identify scheme cases and contact consumers by 28 March 2023.</li>
              <li>Review whether the advice was suitable by 28 September 2023.</li>
              <li>Make cash lump sum offers by 28 December 2023.</li>
              <li>Make offers to pay into pensions by 28 February 2024.</li>
            </ul>

            <h2>What the results looked like</h2>
            <p>The FCA reported the following figures, as at April 2024:</p>
            <ul>
              <li>Firms included 2,937 members in the scheme, across 348 firms. Of those, 2,186 did not opt out and had their advice reviewed.</li>
              <li>Firms assessed about 49% of the reviewed advice as unsuitable. Of the unsuitable cases, 70.1% were found to involve no loss, and so received no redress.</li>
              <li>360 members were offered a total of £8.7 million under the scheme. The FCA noted that falling annuity costs meant some top-up payments were smaller, or nil.</li>
              <li>Taking the Ombudsman, the FSCS and the scheme together, over 6,500 former members were supported, and £106 million of redress was offered to at least 1,870 members.</li>
            </ul>
            <p>The practical lesson is that unsuitable advice and financial loss are separate questions. Advice can be found unsuitable and still produce no redress if the comparison with staying in the scheme shows no loss.</p>

            <h2>If you disagree with the outcome or were not included</h2>
            <ul>
              <li><strong>Complain to the adviser, then the Ombudsman.</strong> The FCA says members could complain to their adviser first and, if unhappy with the response, to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link>. The FCA also says that members whose cases were reviewed under the scheme could ask the Ombudsman to check that the firm had calculated redress in line with the scheme rules.</li>
              <li><strong>Claim from the FSCS if the firm has failed.</strong> The FSCS handled claims where firms had failed. Before the scheme, the FCA reports 1,768 claims, of which 1,257 were upheld, with £69.7 million paid in redress. See <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS pension claims</Link> and <Link href="/can-i-claim-if-adviser-has-gone-bust/" className="text-[#1e3a5f] underline">claiming when your adviser has gone bust</Link>.</li>
              <li><strong>Keep your paperwork.</strong> Your suitability report, any redress letter and your transfer documents help whoever reviews the case. See <Link href="/what-evidence-do-i-need-for-pension-mis-selling-claim/" className="text-[#1e3a5f] underline">what evidence you need</Link> and <Link href="/what-is-a-suitability-report/" className="text-[#1e3a5f] underline">what a suitability report is</Link>.</li>
              <li><strong>Mind the time limits.</strong> Different routes have different limits. Our guide to <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">time limits for pension claims</Link> explains the general position.</li>
            </ul>

            <h2>Beware unsolicited low settlement offers</h2>
            <p>The FCA took action against firms that made low settlement offers to former BSPS members to avoid the scheme. It reported that one firm offered £100 to 82% of its BSPS clients and another offered £300 to 83% of its former BSPS members, and it later imposed similar requirements on three further firms. If you received a settlement offer, do not assume it reflects what a proper review would produce. Take advice before accepting anything, particularly if you are asked to sign away future claims.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />

            <h2>Sources</h2>
            <ul>
              <li>FCA, <a href="https://www.fca.org.uk/publications/corporate-documents/british-steel-pension-scheme-transfers-action-fca-fos-and-fscs" className="text-[#1e3a5f] underline" rel="noopener">British Steel Pension Scheme transfers: action from the FCA, FOS and FSCS</a> (figures as at April 2024).</li>
              <li>FCA, <a href="https://www.fca.org.uk/news/press-releases/fca-confirms-plans-deliver-redress-over-1000-former-bsps-members" className="text-[#1e3a5f] underline" rel="noopener">FCA confirms plans to deliver redress to over 1,000 former BSPS members</a>, 28 November 2022.</li>
              <li>FCA, <a href="https://www.fca.org.uk/publications/policy-statements/ps22-14-consumer-redress-scheme-bsps" className="text-[#1e3a5f] underline" rel="noopener">PS22/14: Consumer redress scheme for unsuitable advice to transfer out of the British Steel Pension Scheme</a>.</li>
              <li>FCA Handbook, <a href="https://handbook.fca.org.uk/handbook/conred4" className="text-[#1e3a5f] underline" rel="noopener">CONRED 4: British Steel Consumer Redress Scheme</a>.</li>
            </ul>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Concerned about a defined benefit pension transfer? Contact us for a free initial review of your case.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'How DB Redress Is Calculated', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Financial Ombudsman Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Occupational Pension Transfers', href: '/occupational-pension-transfer-claims/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="text-xs text-gray-700 leading-relaxed"><strong>Disclaimer:</strong> This page is general information about a regulatory scheme, based on FCA publications. It is not legal or financial advice on your own case and does not guarantee any outcome.</p>
            </div>
          </aside>
        </div>
        <RelatedGuides href="/british-steel-pension-scheme-redress/" />
        <div className="mt-14"><PageCTA /></div>
      </div>
    </>
  )
}
