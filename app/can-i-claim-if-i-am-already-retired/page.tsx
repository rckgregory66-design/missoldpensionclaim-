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
  title: 'Can I Claim If I Am Already Retired? | Pension Mis-Selling Claims',
  description: 'Already retired? You can still make a mis-sold pension claim. Retirement does not bar you from compensation. Free initial review — Edward & Amaury Solicitors.',
  alternates: { canonical: '/can-i-claim-if-i-am-already-retired/' },
}

const faqs = [
  { q: 'Can I make a pension mis-selling claim if I have already retired?', a: 'Yes. Being retired does not prevent you from making a mis-sold pension claim. What matters is whether the advice you received was unsuitable and whether you suffered a loss as a result — not whether you are still working. In fact, retirement can make the impact of unsuitable advice easier to quantify, because you are now in the position the bad advice created.' },
  { q: 'Does being retired affect how compensation is calculated?', a: 'Not necessarily. Compensation aims to restore you to the financial position you would have been in had the unsuitable advice not been given. If you transferred out of a defined benefit scheme and the difference between what you would have received from that scheme and what you actually receive is now clear, that comparison can form the basis of your compensation calculation.' },
  { q: 'Is it too late to claim if I retired many years ago?', a: 'It depends on when you knew — or should have known — that the advice was unsuitable and that you had suffered a loss. For some retirees, the date of knowledge (the legal term for when a claim time limit begins to run) is later than the date of the original advice. Do not assume you are out of time without seeking specific advice on your situation.' },
  { q: 'Can I claim if I am already drawing my pension?', a: 'Yes. Whether your pension is in drawdown, paying an annuity, or taking any other form does not prevent a claim. The fact you are already drawing a pension may actually clarify the extent of your loss — for example, if your income is lower than it would have been had you stayed in a defined benefit scheme.' },
  { q: 'Does taking pension benefits mean I accepted the advice?', a: 'No. Drawing your pension or accepting benefits from it does not mean you have accepted that the advice was suitable or waived any right to claim. You had no choice but to use the pension available to you. The law does not treat this as acceptance of the advice.' },
  { q: 'What if I transferred out of the NHS, teachers or another public sector pension?', a: 'Public sector pension schemes — including the NHS scheme, teachers\' pension, and civil service scheme — carry exceptionally valuable guaranteed benefits. Advice to transfer out of these schemes is very rarely suitable and is an area of significant FCA concern. Retirees who did transfer out of these schemes may have a strong basis for a claim. Contact us for a free initial review.' },
  { q: 'Can a retired person make an FSCS or FOS claim?', a: 'Yes. The Financial Services Compensation Scheme and the Financial Ombudsman Service both accept claims from retired persons. There is no requirement to be working or of working age to make a claim through either route. Time limits may still apply — seek advice promptly.' },
]

export default function AlreadyRetiredPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Can I Claim If Already Retired?', item: '/can-i-claim-if-i-am-already-retired/' }]} />
      <FAQSchema faqs={faqs} />
      <WebPageSchema title="Can I Claim If I Am Already Retired?" description={metadata.description as string} url="/can-i-claim-if-i-am-already-retired/" />
      <ArticleSchema title="Can I Claim If I Am Already Retired?" description={metadata.description as string} url="/can-i-claim-if-i-am-already-retired/" />

      <Breadcrumb crumbs={[{ label: 'Can I Claim If Retired?' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Can I Make a Pension Mis-Selling Claim If I Am Already Retired?</h1>
            <AuthorBox publishedDate="September 2026" />
            <TLDRBox points={[
              'Yes — being retired does not prevent you from making a mis-sold pension claim. The right to claim depends on the advice you received and the loss you suffered, not your employment status.',
              'For retirees who transferred out of a defined benefit scheme, the difference between what you now receive and what you would have received from the original scheme may be clearly quantifiable.',
              'Drawing your pension does not mean you accepted the advice — you had no choice but to use the pension available to you.',
              'The date of knowledge (when time limits begin to run) may be later than the date of the original advice — do not assume you are out of time.',
              'FOS and FSCS both accept claims from retired persons. Contact us for a free initial review.',
            ]} />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed speakable">One of the most common reasons people do not pursue a pension mis-selling claim is a belief that being retired means it is too late. This is not correct. Retirement does not bar a claim — and in some cases, the impact of unsuitable advice is clearest once you are in the retirement position that advice created.</p>

            <div className="not-prose bg-[#0f2035] border-l-4 border-[#c9a84c] p-5 rounded-r-lg mb-6">
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Yes — you can make a mis-sold pension claim even if you are already retired. What matters is whether the advice you received was unsuitable and whether it caused you a loss. Retirement does not bar a claim and does not mean you accepted the advice. Time limits may apply — seek advice promptly.</p>
            </div>

            <h2>Why Retired Claimants Often Have Strong Cases</h2>
            <p>For retirees who were advised to transfer out of a defined benefit or final salary pension, the loss is often very clear. You are now receiving an income from the arrangement the advice moved you into — and that can be directly compared with what you would have received had you stayed in the original scheme.</p>
            <p>This comparison — the guaranteed income you gave up versus the income you now have — often forms the core of compensation calculations in defined benefit transfer claims. For a retired person, the numbers are no longer hypothetical. The income gap is real and ongoing.</p>

            <h2>Does Drawing Your Pension Affect Your Right to Claim?</h2>
            <p>No. The fact you are already receiving benefits from your pension — whether through drawdown, an annuity, or any other arrangement — does not prevent a claim and does not constitute acceptance of the original advice.</p>
            <p>You had no practical choice but to use the pension that was available to you. Taking benefits from a pension is not the same as agreeing that the advice which created that pension was suitable. The law does not treat it as a waiver of your rights.</p>

            <h2>What About Time Limits?</h2>
            <div className="not-prose bg-amber-50 border-l-4 border-[#c9a84c] p-5 rounded-r-lg my-5 flex gap-3">
              <AlertTriangle size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Do Not Assume You Are Out of Time</p>
                <p className="text-sm text-gray-700 leading-relaxed">Time limits apply, but the starting point varies. For many retirees, the date of knowledge — when they first knew or should have known the advice was unsuitable — is not the date the advice was given. It may be the date losses became apparent, or the date a pension statement first showed the shortfall. Always seek individual advice before concluding a claim is time-barred.</p>
              </div>
            </div>
            <p>The time limits for mis-sold pension claims depend on the route you take. For <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">FOS complaints</Link>, you generally have six months from the firm's final response letter. For <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS claims</Link>, their own rules apply. For legal claims, the usual period is six years from the loss, or three years from the date of knowledge. See our <Link href="/time-limits-mis-sold-pension-claims/" className="text-[#1e3a5f] underline">time limits guide</Link> for more detail.</p>

            <h2>If You Transferred Out of a Public Sector Scheme</h2>
            <p>If you retired after transferring out of the NHS pension, teachers' pension, civil service pension, or another public sector defined benefit scheme, you may have a particularly strong basis for a claim. These schemes carry exceptionally valuable guaranteed benefits — index-linked income, spouse's pension, ill-health retirement — that are rarely replicated by the arrangements they were transferred into. The FCA has made DB transfer mis-selling a priority area.</p>
            <ul>
              {[
                { label: 'NHS pension transfer claims', href: '/nhs-pension-transfer-claims/' },
                { label: 'Defined benefit pension transfer claims', href: '/defined-benefit-pension-transfer-claims/' },
                { label: 'Final salary pension claims', href: '/final-salary-pension-claims/' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] underline">{l.label}</Link></li>
              ))}
            </ul>

            <h2>How Compensation Is Calculated for Retired Claimants</h2>
            <p>Compensation aims to restore you to the financial position you would have been in had the unsuitable advice not been given. For retired claimants, this typically means:</p>
            <ul>
              <li><strong>DB transfer claims:</strong> The value of the guaranteed income you gave up, modelled over your remaining life expectancy, compared with the value of the pension fund you actually have.</li>
              <li><strong>SIPP or investment claims:</strong> The difference between where your pension fund is now and where a suitable investment would have taken it, plus any charges paid as a result of the bad advice.</li>
            </ul>
            <p>No specific figure can be given without reviewing the facts of your individual case. See our <Link href="/mis-sold-pension-compensation-calculator/" className="text-[#1e3a5f] underline">compensation guide</Link> for further explanation.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>

          <aside className="space-y-6">
            <div className="bg-[#0f2035] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-sm">Free Initial Review</h3>
              <p className="text-gray-300 text-sm mb-5">Already retired and concerned about pension advice you received? Contact us for a free, no-obligation review.</p>
              <ContactForm compact />
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-4 text-sm">Related Pages</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Am I Eligible to Claim?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
                  { label: 'NHS Pension Transfer Claims', href: '/nhs-pension-transfer-claims/' },
                  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
                  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
                  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
                  { label: 'Claim If Adviser Has Gone Bust', href: '/can-i-claim-if-adviser-has-gone-bust/' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] hover:underline flex items-center gap-1"><ArrowRight size={12} />{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f4f8] rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3 text-sm">Key Points</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'Retirement does not bar a mis-selling claim',
                  'Drawing your pension is not acceptance of advice',
                  'DB retirees often have a clearly quantifiable loss',
                  'Time limits run from knowledge, not the advice date',
                  'FOS and FSCS accept claims from retired persons',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />{p}</li>
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
