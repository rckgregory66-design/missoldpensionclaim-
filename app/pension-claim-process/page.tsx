import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, WebPageSchema, ArticleSchema, FAQSchema, HowToSchema } from '@/components/Schema'
import AuthorBox from '@/components/AuthorBox'
import TLDRBox from '@/components/TLDRBox'

export const metadata: Metadata = {
  title: 'The Pension Mis-Selling Claim Process | Step-by-Step Guide',
  description: 'A clear step-by-step guide to how the mis-sold pension claim process works, from initial enquiry through to pursuing compensation.',
  alternates: { canonical: '/pension-claim-process/' },
}

const faqs = [
  { q: 'Do I have to use a solicitor to make a mis-sold pension claim?', a: 'No. You can complain directly to the firm and then to the Financial Ombudsman Service, or apply directly to the FSCS, all free of charge. A solicitor is not required. However, solicitor support can be valuable for complex cases, where other routes have produced an unsatisfactory outcome, or where significant sums are at stake.' },
  { q: 'Will I have to pay anything upfront?', a: 'No. The initial review is free and you will not be committed to any fees until you have agreed in full to the terms. We explain all fee arrangements clearly before any chargeable work begins.' },
  { q: 'What documents do I need to provide?', a: 'Useful documents include your pension transfer report or suitability letter, pension statements, risk profile questionnaire, SIPP or personal pension paperwork, and any correspondence with your adviser. Do not worry if you cannot locate all documents — some may be obtainable from third parties and we can advise you on this.' },
  { q: 'How long does the process take?', a: 'Timescales vary considerably. An initial firm complaint should receive a response within eight weeks. FOS complaints can take several months or longer. FSCS claims have their own processing timescales. Legal proceedings typically take longer still. We will give you a realistic indication once we understand your case.' },
]

const steps = [
  {
    n: 1, title: 'Free Initial Enquiry',
    desc: 'Contact us for a free, no-obligation initial discussion. You can call us, complete the contact form, or request a call back. Tell us what happened with your pension — there is no need to have all the paperwork ready at this stage.',
    outcome: 'We will listen, ask some initial questions and let you know if your situation sounds like it may be worth exploring further.',
  },
  {
    n: 2, title: 'Review of Pension and Advice Documents',
    desc: 'If your initial enquiry suggests there may be a potential claim, we will ask you to provide relevant documents where possible. These might include your pension transfer report, suitability letter, pension statements, risk profile questionnaire and any correspondence with your adviser.',
    outcome: 'We will review what you have and identify what further information may be needed. Do not worry if you cannot locate all documents — some may be obtainable from third parties.',
  },
  {
    n: 3, title: 'Identify the Adviser and the Appropriate Route',
    desc: 'We will identify who gave you the advice and their regulatory status. This determines which route — Financial Ombudsman Service, Financial Services Compensation Scheme, or legal action — is most appropriate for your case.',
    outcome: 'You will receive a clear explanation of the routes available, the advantages and disadvantages of each, and our recommendation for how to proceed.',
  },
  {
    n: 4, title: 'Assess Suitability of the Advice and Your Losses',
    desc: 'We assess the advice against the regulatory standards in place at the time and the specific circumstances of your case. We also consider what losses or lost benefits you may have suffered as a result of the advice.',
    outcome: 'We give you an honest assessment of the strength of your potential claim. We will not pursue a claim that we do not consider has genuine merit.',
  },
  {
    n: 5, title: 'Explain Fees and Agree How to Proceed',
    desc: 'Before any work begins on pursuing your claim, we will explain clearly any fees that may apply, how they are calculated, and how the funding of any work will be arranged. You will not be committed to anything until you understand and agree to the terms.',
    outcome: 'You make an informed decision about whether to proceed, fully understanding what is involved and any costs.',
  },
  {
    n: 6, title: 'Submit the Complaint or Claim',
    desc: 'Depending on the route, we will submit a complaint to the financial services firm, refer to the FOS, submit an FSCS application, or begin legal proceedings on your behalf. We handle all communications with the relevant parties.',
    outcome: 'Your case is formally in progress, with all relevant parties notified.',
  },
  {
    n: 7, title: 'Negotiate and Pursue Compensation',
    desc: 'We pursue your claim through the appropriate process, respond to any requests for information or evidence, and negotiate on your behalf where the opportunity arises. We keep you updated at key stages.',
    outcome: 'Your claim progresses through the process, with the aim of achieving the best available outcome for your individual situation.',
  },
]

export default function ClaimProcessPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Pension Claim Process', item: '/pension-claim-process/' }]} />
      <WebPageSchema title="The Pension Mis-Selling Claim Process" description={metadata.description as string} url="/pension-claim-process/" />
      <ArticleSchema title="The Pension Mis-Selling Claim Process" description={metadata.description as string} url="/pension-claim-process/" />
      <FAQSchema faqs={faqs} />
      <HowToSchema steps={steps.map(s => ({ name: s.title, text: s.desc }))} />

      <Breadcrumb crumbs={[{ label: 'Pension Claim Process' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">The Pension Mis-Selling Claim Process</h1>
            <AuthorBox publishedDate="January 2025" reviewedDate="June 2025" />
            <TLDRBox points={[
              'The process starts with a free initial enquiry — you do not need to have all documents ready or know which route applies before contacting us.',
              'We identify whether the claim should go to the FOS (firm still trading), the FSCS (firm failed), or through legal proceedings.',
              'We assess the suitability of the advice and the losses suffered before committing to pursue a claim.',
              'Fees and funding arrangements are explained clearly before any chargeable work begins — you will not be committed to anything until you agree.',
              'Most clients do not need to manage communications with the firm, FOS or FSCS themselves — we handle that on your behalf.',
            ]} />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">Understanding how the pension mis-selling claim process works can help you make an informed decision about whether and how to proceed. Here is a clear, step-by-step overview of how we handle pension mis-selling enquiries, from your first contact through to pursuing compensation.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">The claim process has three main phases: (1) free initial review of your situation and documents; (2) identifying the right route — <a href="/financial-ombudsman-pension-complaints/" className="text-[#c9a84c] underline">FOS complaint</a>, <a href="/fscs-pension-claims/" className="text-[#c9a84c] underline">FSCS application</a>, or legal proceedings; and (3) submitting and pursuing the claim. Most people do not need to do anything themselves beyond providing documents — we manage the process on your behalf.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-8">
              <p className="text-sm text-blue-800 leading-relaxed"><strong>In simple terms:</strong> You do not need to know which route is right for you before contacting us. The first step is a free conversation about what happened. We identify the correct route and handle everything from there. You will not be committed to anything until you understand and agree to the terms.</p>
            </div>

            <div className="space-y-6 mb-10">
              {steps.map(s => (
                <div key={s.n} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#0f2035] px-5 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm shrink-0">{s.n}</div>
                    <h2 className="text-white font-semibold text-base m-0">{s.title}</h2>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-start gap-2 bg-[#f0f4f8] rounded-lg p-3">
                      <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-xs leading-relaxed">{s.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-[#0f2035] mb-3">What About Direct Routes?</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">You are not required to use a solicitor to pursue a mis-sold pension claim. You can:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <span>Complain directly to the adviser firm, and refer to the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link> if unsatisfied — free of charge</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <span>Apply directly to the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Financial Services Compensation Scheme</Link> if the firm has failed — also free of charge</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">We will always be transparent about both options. Solicitor-led support is most valuable in complex cases, where other routes have not produced a satisfactory outcome, or where significant sums are involved.</p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#0f2035] mb-4">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#0f2035] mb-3">How Long Does the Process Take?</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Timescales vary considerably depending on the route, the complexity of the case and the parties involved. As a general guide:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /><span>An initial firm complaint should receive a response within eight weeks</span></li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /><span>FOS complaints can take several months or longer, depending on complexity and caseload</span></li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /><span>FSCS claims have their own processing timescales</span></li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /><span>Legal proceedings typically take longer</span></li>
              </ul>
              <p className="text-gray-500 text-xs mt-3">We will give you a realistic indication of timescales once we understand your case.</p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Start the Process Today</h3>
              <p className="text-gray-300 text-sm mb-5">Your first step is a free, no-obligation initial enquiry. Tell us what happened.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4">Useful Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'FSCS Claims', href: '/fscs-pension-claims/' },
                  { label: 'FOS Complaints', href: '/financial-ombudsman-pension-complaints/' },
                  { label: 'FAQs', href: '/faqs/' },
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
