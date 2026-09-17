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
  title: 'Can I Claim Pension Compensation for a Deceased Relative? | Guide',
  description: 'If a family member was mis-sold a pension and has since died, their estate may still be able to claim compensation. Solicitor guide to claiming on behalf of a deceased person.',
  alternates: { canonical: '/can-i-claim-on-behalf-of-a-deceased-relative/' },
}

const faqs = [
  { q: 'Can I claim pension mis-selling compensation on behalf of someone who has died?', a: 'In many cases, yes. A mis-sold pension claim does not automatically die with the person. If the deceased had a potential claim at the time of their death, the right to pursue that claim may pass to their estate under the Law Reform (Miscellaneous Provisions) Act 1934. Whether this is possible depends on the specific facts, the route available, and the stage the claim had reached.' },
  { q: 'Who can bring a pension claim on behalf of a deceased person?', a: 'The personal representative of the deceased — either the executor named in the will or, if there is no will, the administrator appointed under the rules of intestacy — is the person who can bring a claim on behalf of the estate. If you are not already a personal representative, you may need to apply for probate or letters of administration before proceeding.' },
  { q: 'Does a mis-sold pension claim die with the person?', a: 'Not automatically. Claims relating to financial loss suffered by the deceased during their lifetime can generally survive and form part of the estate. However, some routes have specific rules — for example, the FOS has its own eligibility criteria for claims made after death. It is important to seek legal advice promptly, as time limits may apply.' },
  { q: 'Can I use a Lasting Power of Attorney to make a pension claim on behalf of a living person?', a: 'Yes. If someone has granted you a Lasting Power of Attorney for property and financial affairs, you may be able to bring a pension mis-selling claim on their behalf while they are still alive but lack capacity to act for themselves. You would need to produce evidence of the LPA when corresponding with the firm, FOS or FSCS.' },
  { q: 'Is there a time limit for making a claim after someone has died?', a: 'Time limits continue to run even after death. The personal representative steps into the shoes of the deceased and the same limitation periods apply. Additionally, some routes — such as the FOS — have their own rules about claims made by beneficiaries or estates after a person has died. Seek advice promptly to avoid missing a deadline.' },
  { q: 'What happens to any compensation received on behalf of a deceased person?', a: 'Compensation recovered on behalf of the estate forms part of the estate and is distributed in accordance with the will, or the rules of intestacy if there is no will. It does not go directly to individual family members unless they are beneficiaries of the estate.' },
  { q: 'What if the deceased had already started a complaint before they died?', a: 'If the deceased had already submitted a complaint to the firm, the FOS or the FSCS before their death, the personal representative may be able to continue that complaint. In some cases, the complaint can be progressed without interruption. Contact the relevant body and the firm concerned as soon as possible to notify them of the death and ask how the complaint can continue.' },
]

export default function DeceasedRelativePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Claim on Behalf of a Deceased Relative', item: '/can-i-claim-on-behalf-of-a-deceased-relative/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Can I Claim Pension Compensation for a Deceased Relative?" description={metadata.description as string} url="/can-i-claim-on-behalf-of-a-deceased-relative/" />
      <ArticleSchema title="Can I Claim Pension Compensation for a Deceased Relative?" description={metadata.description as string} url="/can-i-claim-on-behalf-of-a-deceased-relative/" />

      <Breadcrumb crumbs={[{ label: 'Claim for Deceased Relative' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Can I Claim Pension Mis-Selling Compensation on Behalf of a Deceased Relative?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'A mis-sold pension claim does not automatically die with the person — it can pass to their estate and be pursued by the personal representative (executor or administrator).',
              'The personal representative steps into the shoes of the deceased and can bring a claim on behalf of the estate.',
              'If the deceased had already started a complaint, the personal representative may be able to continue it.',
              'If someone lacks capacity but is still alive, a holder of a Lasting Power of Attorney (property and financial affairs) may be able to bring a claim on their behalf.',
              'Time limits continue to run after death — seek advice promptly.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">The death of a family member who was mis-sold a pension does not necessarily end the right to claim compensation. In many cases, a claim can be brought by the estate of the deceased person — or, if the person is still alive but lacks mental capacity, by someone acting under a Lasting Power of Attorney.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">In many cases, yes — a mis-sold pension claim can survive and pass to the deceased's estate. The personal representative (executor or administrator) can bring the claim on the estate's behalf. The same time limits apply. Seek advice promptly to confirm whether a claim is still possible.</p>
            </div>

            <h2>Does a Pension Mis-Selling Claim Die With the Person?</h2>
            <p>Under the Law Reform (Miscellaneous Provisions) Act 1934, most causes of action — including claims for financial loss — survive the death of the person who suffered them. This means a potential mis-sold pension claim that existed at the time of death can, in principle, be pursued by the estate.</p>
            <p>The right is not automatic in every case. Some routes — such as the Financial Ombudsman Service — have their own rules about claims made by beneficiaries or estates after death, and these may differ from the general legal position. The FSCS similarly has eligibility criteria that need to be assessed.</p>

            <h2>Who Can Bring the Claim?</h2>
            <p>The personal representative of the deceased — that is, either:</p>
            <ul>
              <li>The <strong>executor</strong> named in the deceased's will, or</li>
              <li>The <strong>administrator</strong> appointed by the court (via letters of administration) if there is no will, or the named executor cannot or will not act</li>
            </ul>
            <p>The personal representative acts on behalf of the estate and any compensation recovered forms part of the estate assets, to be distributed according to the will or the rules of intestacy.</p>
            <p>If you are not already a personal representative, you may need to apply for a grant of probate or letters of administration before you can act. A solicitor can advise on this process.</p>

            <h2>If a Complaint Had Already Been Started</h2>
            <p>If the deceased had already submitted a complaint to the firm, referred the matter to the FOS, or made an FSCS application before they died, the personal representative should notify the relevant body of the death as soon as possible. In many cases, the complaint or claim can be continued by the personal representative without needing to start again.</p>
            <p>Time limits may still be running — contact the FOS or FSCS promptly to ask about the status of any existing complaint and how to continue it.</p>

            <h2>Claiming Under a Lasting Power of Attorney</h2>
            <p>If the person is still alive but has lost mental capacity, someone holding a registered Lasting Power of Attorney for Property and Financial Affairs (LPA-PFA) may be able to bring a pension mis-selling claim on their behalf.</p>

            <div className="not-prose bg-[#f0f4f8] border border-gray-200 rounded-xl p-5 my-6">
              <p className="font-semibold text-[#0f2035] text-sm mb-3">LPA for Property and Financial Affairs — Key Points</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'The LPA must be registered with the Office of the Public Guardian before it can be used.',
                  'It must cover property and financial affairs — a health and welfare LPA alone is not sufficient.',
                  'You will need to produce evidence of the LPA to the adviser firm, FOS or FSCS when making the claim.',
                  'As attorney, you must act in the donor\'s best interests. Pursuing a valid compensation claim normally qualifies.',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
                ))}
              </ul>
            </div>

            <h2>Time Limits After Death</h2>
            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-5 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Act Promptly — Time Limits Continue After Death</p>
                <p className="text-sm text-gray-700 leading-relaxed">The same limitation periods apply to claims brought by estates as to claims brought by the person themselves. These do not pause or restart on death. If you are the personal representative of someone who may have had a pension mis-selling claim, seek advice as soon as possible to ensure any applicable deadline has not passed.</p>
              </div>
            </div>
            <p>For FOS complaints, the six-month deadline from the firm's final response letter applies equally to estates. For legal claims, the Limitation Act periods continue to run. See our <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">time limits guide</Link>.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">We can advise on whether a claim can be brought on behalf of a deceased person or someone who lacks capacity. Contact us for a free assessment.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Time Limits for Pension Claims', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'Can I Claim If Retired?', href: '/can-i-claim-if-i-am-already-retired/' },
                  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
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
