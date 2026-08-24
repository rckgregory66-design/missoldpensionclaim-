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
  title: 'Self-Invested Personal Pension (SIPP) Mis-Selling Claim',
  description: 'Were you advised to invest your pension in a high-risk SIPP? If your SIPP was mis-sold — through unsuitable advice, high-risk investments, or an unregulated introducer — you may have a claim.',
  alternates: { canonical: '/self-invested-personal-pension-claim/' },
}

const faqs = [
  {
    q: 'What is a self-invested personal pension (SIPP)?',
    a: 'A self-invested personal pension (SIPP) is a type of personal pension that allows the holder to invest in a wider range of assets than a standard personal pension — including commercial property, stocks, and (in some cases) unregulated or alternative investments. SIPPs can be suitable for experienced investors with larger pension pots who want more control over their investments, but they are not appropriate for everyone.',
  },
  {
    q: 'How can a SIPP be mis-sold?',
    a: 'SIPP mis-selling can occur in several ways: an adviser recommends a SIPP without adequately considering whether it is suitable for your needs and attitude to risk; you are transferred from a workplace or final salary pension into a SIPP investing in high-risk or illiquid assets; an unregulated introducer refers you to a SIPP operator for high-risk investments; or the SIPP operator fails to carry out adequate due diligence before accepting the investment. In many cases, people were unaware of how high-risk or illiquid the underlying investments were.',
  },
  {
    q: 'What types of investments are often found in mis-sold SIPPs?',
    a: 'Common high-risk investments found in mis-sold SIPPs include: overseas hotel or resort development investments; car park or storage unit bonds; renewable energy investments such as biofuel or solar farms; peer-to-peer lending schemes; and other unregulated collective investment schemes (UCIS). These investments are typically illiquid — meaning they cannot be easily sold — and many have fallen significantly in value or failed entirely.',
  },
  {
    q: 'Can I claim against a SIPP operator as well as the financial adviser?',
    a: 'Possibly. The FCA and the Financial Ombudsman Service have held in a number of cases that SIPP operators have obligations to carry out appropriate due diligence before accepting high-risk investments, and may share liability where they failed to do so. This is an active and developing area of law. A solicitor can advise on whether the SIPP operator in your case may also be liable.',
  },
  {
    q: 'What if I cannot access my SIPP money?',
    a: 'If your SIPP holds illiquid investments — assets that cannot be bought or sold easily — you may find it difficult or impossible to access your pension. This is a common feature of mis-sold SIPP cases involving property or alternative investment schemes. In these situations, the value shown in your SIPP may not reflect the actual recoverable value. You should seek advice on your position as soon as possible.',
  },
  {
    q: 'Is there a time limit for making a SIPP mis-selling claim?',
    a: 'Yes. The general time limit for financial mis-selling complaints is six years from the event, or three years from when you became aware (or ought to have been aware) that you had grounds to complain — whichever is later. Because many people only become aware of the problem when the investment fails or they try to access their pension, the three-year knowledge date is often the more relevant one. Do not delay in seeking advice.',
  },
]

export default function SIPPClaimPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Self-Invested Personal Pension (SIPP) Claim', item: '/self-invested-personal-pension-claim/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Self-Invested Personal Pension (SIPP) Mis-Selling Claim" description={metadata.description as string} url="/self-invested-personal-pension-claim/" />
      <ArticleSchema title="Self-Invested Personal Pension (SIPP) Mis-Selling Claim" description={metadata.description as string} url="/self-invested-personal-pension-claim/" />

      <Breadcrumb crumbs={[{ label: 'SIPP Mis-Selling Claim' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Self-Invested Personal Pension (SIPP) Mis-Selling Claim</h1>
            <AuthorBox publishedDate="August 2025" reviewedDate="August 2025" />
            <TLDRBox points={[
              'A SIPP can be mis-sold if you were advised to move your pension into one without proper regard for suitability, risk, or the nature of the underlying investments.',
              'Common mis-sold SIPP investments include overseas property, car parks, storage units, biofuel schemes, and other unregulated assets.',
              'Both the financial adviser and the SIPP operator may be liable, depending on the circumstances.',
              'If your pension is locked in illiquid investments you cannot access, you should seek advice immediately.',
              'Time limits apply — generally three years from when you became aware of the problem, or six years from the original advice.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">A self-invested personal pension (SIPP) can be a legitimate and flexible pension vehicle for the right investor. But SIPPs were widely mis-sold — often by unscrupulous introducers and inadequately regulated advisers — to people who had no business investing in high-risk, illiquid assets with their pension savings. If your SIPP has fallen in value, if you cannot access your pension, or if you were advised to move your pension into a SIPP without proper explanation of the risks, you may have a claim.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">If you were advised to invest your pension in a SIPP holding high-risk or illiquid investments — and you were not properly warned about those risks — you may have a <strong className="text-white">SIPP mis-selling claim</strong> against your adviser, the SIPP operator, or both. The FCA and Financial Ombudsman have ruled in favour of claimants in many similar cases.</p>
            </div>

            <h2>What Is SIPP Mis-Selling?</h2>
            <p>SIPP mis-selling occurs where a self-invested personal pension was recommended to you — or set up for you — in a way that was unsuitable. The FCA has identified SIPP mis-selling as a major regulatory concern, particularly in cases involving high-risk or unregulated investments introduced by third-party introducers.</p>
            <p>Common scenarios include:</p>
            <ul>
              <li>You were cold-called or contacted unsolicited and persuaded to move your pension into a SIPP</li>
              <li>An unregulated introducer referred you to an FCA-authorised adviser or SIPP operator</li>
              <li>Your pension was invested in illiquid assets such as overseas property, storage units, or biofuel bonds</li>
              <li>You transferred from a <Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">defined benefit pension</Link> or workplace scheme into a SIPP investing in non-standard assets</li>
              <li>The risks of the investments were not clearly explained to you in writing</li>
            </ul>

            <h2>Types of High-Risk SIPP Investments</h2>
            <p>Many mis-sold SIPP cases involve investments that were either unregulated, illiquid, or both. Common examples include:</p>
            <div className="not-prose overflow-x-auto mb-6 mt-2">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0f2035] text-white">
                    <th className="text-left p-3 font-semibold">Investment Type</th>
                    <th className="text-left p-3 font-semibold">Common Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Overseas hotel / resort developments', 'Often failed to complete; cannot be sold'],
                    ['Car park or storage unit bonds', 'Illiquid; many wound up; capital at risk'],
                    ['Biofuel / solar farm investments', 'High promised returns; many failed'],
                    ['Peer-to-peer lending schemes', 'Capital not protected; illiquid'],
                    ['Unregulated collective investment schemes (UCIS)', 'Illegal to market to most retail clients'],
                    ['Forestry / land banking schemes', 'Speculative; planning permission issues'],
                  ].map(([type, issues], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f4f8]'}>
                      <td className="p-3 font-medium text-[#0f2035] border-t border-gray-100">{type}</td>
                      <td className="p-3 text-gray-700 border-t border-gray-100">{issues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>SIPP Operator Liability</h2>
            <p>It is not only the financial adviser who may be responsible. The Financial Ombudsman Service and the courts have held that SIPP operators — the firms that administer SIPPs — can also be liable where they failed to carry out adequate due diligence before accepting a high-risk investment into the SIPP. The relevant question is whether the operator should have known that the investment was not suitable to be held in a pension, and whether they acted appropriately.</p>
            <p>This is an evolving area of law. If your SIPP operator accepted investments that were clearly high-risk or unregulated without carrying out appropriate checks, they may share responsibility for your loss.</p>

            <h2>Making a SIPP Mis-Selling Claim</h2>
            <ol>
              <li><strong>Identify the parties:</strong> Who gave you the advice to set up the SIPP? Who introduced you? Who is the SIPP operator? All may potentially be liable.</li>
              <li><strong>Gather documents:</strong> Locate any suitability letters, SIPP application forms, and communications about the investment. If you do not have these, we can help you obtain them.</li>
              <li><strong>Assess the loss:</strong> Calculate the difference between what you invested and what your SIPP is currently worth, taking into account any illiquid assets.</li>
              <li><strong>Choose the right route:</strong> If any party is still trading, complain to them first and then to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman</Link>. If they have failed, apply to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS</Link>.</li>
            </ol>
            <p><Link href="/make-a-claim/" className="text-[#1e3a5f] underline font-medium">Start your claim</Link> or <Link href="/contact/" className="text-[#1e3a5f] underline font-medium">contact us</Link> to discuss your SIPP mis-selling situation with a solicitor.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">SIPP Claim Enquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Tell us about your SIPP and the investments it holds. We can help assess whether you have a claim against the adviser, operator, or both.</p>
              <ContactForm compact />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} />Cannot Access Your Pension?</h3>
              <p className="text-green-700 text-xs leading-relaxed">If your SIPP holds investments you cannot sell or access, that is a significant warning sign. <Link href="/contact/" className="text-green-700 underline">Contact us</Link> for advice on your options — do not wait for the investment to recover.</p>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
                  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
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
