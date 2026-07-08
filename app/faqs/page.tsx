import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Pension Mis-Selling FAQs | 40+ Common Questions Answered',
  description: 'Answers to over 40 frequently asked questions about mis-sold pension claims, SIPP compensation, defined benefit transfers, time limits, fees and more.',
  alternates: { canonical: '/faqs/' },
}

const general = [
  { q: 'What is pension mis-selling?', a: 'Pension mis-selling occurs when a regulated financial adviser recommends a pension product, transfer or investment that is unsuitable for the individual client given their personal circumstances, financial situation and attitude to risk. See our full guide: <a href="/mis-sold-pension-claims/" class="text-[#1e3a5f] underline">Mis-Sold Pension Claims</a>.' },
  { q: 'How do I know if my pension was mis-sold?', a: 'Common indicators include being advised to transfer out of a final salary scheme, being placed into high-risk investments without adequate explanation, receiving advice that did not reflect your circumstances, or losing guaranteed benefits without being properly warned. See our <a href="/how-do-i-know-if-my-pension-was-mis-sold/" class="text-[#1e3a5f] underline">eligibility checklist</a>.' },
  { q: 'Who can make a mis-sold pension claim?', a: 'Anyone who received regulated financial advice about their pension that may have been unsuitable. Whether you have a valid claim depends on the specific advice, who gave it, the losses suffered and the route available. Use our <a href="/how-do-i-know-if-my-pension-was-mis-sold/" class="text-[#1e3a5f] underline">eligibility checklist</a> to check your situation.' },
  { q: 'Can I claim if my pension has gone up in value?', a: 'Possibly, though it is less straightforward. If you transferred out of a defined benefit scheme, the relevant question is not just whether your fund has grown but whether you are in a better position than you would have been had you kept your guaranteed defined benefit income.' },
  { q: 'What documents do I need to start a claim?', a: 'Useful documents include your pension transfer report or suitability letter, pension statements, risk profile questionnaire, correspondence with your adviser, SIPP paperwork and investment documents. Do not worry if you do not have all of these — it is still worth making an enquiry.' },
  { q: 'What if I cannot find my original paperwork?', a: 'You may still be able to make a claim. Some records may be available from your pension provider, the adviser firm, or their professional indemnity insurer. The FSCS and FOS also have access to records in some cases. Contact us to discuss your situation.' },
  { q: 'Can I claim if I think I was mis-sold but I am not sure?', a: 'Yes. An initial enquiry is free and without obligation. We can review what happened and help you assess whether there may be grounds for a claim. You do not need to be certain before making an enquiry.' },
  { q: 'What if I have already complained to my adviser and they rejected my complaint?', a: 'A rejection by the adviser firm is not the end of the road. You can refer the complaint to the Financial Ombudsman Service, or explore whether the FSCS or legal action may be appropriate depending on the circumstances.' },
]

const sipp = [
  { q: 'What is a SIPP?', a: 'A Self-Invested Personal Pension (SIPP) is a type of personal pension that allows the holder more flexibility over investment choices than a standard pension. This flexibility can make SIPPs suitable for certain investors, but also exposes pension savings to a wider range of risks, including high-risk and unregulated investments. See: <a href="/mis-sold-sipp-claims/" class="text-[#1e3a5f] underline">Mis-Sold SIPP Claims</a>.' },
  { q: 'How are SIPPs mis-sold?', a: 'SIPPs are commonly mis-sold when advisers recommend transferring pension funds into a SIPP and then investing in high-risk, non-standard or unregulated assets without properly explaining the risks or assessing suitability. Read more on our <a href="/mis-sold-sipp-claims/" class="text-[#1e3a5f] underline">SIPP mis-selling page</a>.' },
  { q: 'What high-risk investments are associated with SIPP mis-selling?', a: 'Common examples include overseas property developments, storage pods, forestry schemes, renewable energy projects, hotel room investments, care home bonds, mini-bonds and various unregulated collective investment schemes (UCIS). See our page on <a href="/high-risk-pension-investment-claims/" class="text-[#1e3a5f] underline">high-risk pension investment claims</a>.' },
  { q: 'Can I claim against a SIPP operator as well as an adviser?', a: 'Potentially, yes. SIPP operators have due diligence obligations regarding the investments they accept into their schemes. Where a SIPP operator failed to meet those obligations, they may also bear some responsibility.' },
  { q: 'What if the SIPP investment company has collapsed?', a: 'If the adviser firm that recommended the SIPP was FCA-authorised and has since failed, the FSCS may be able to compensate you for the advice-related loss. If the investment company itself has collapsed, different considerations apply.' },
]

const db = [
  { q: 'What is a defined benefit pension?', a: 'A defined benefit pension (also called a final salary pension) is an occupational pension that provides a guaranteed income for life in retirement, usually based on salary and years of service. It is generally considered one of the most valuable pension arrangements available. See: <a href="/defined-benefit-pension-transfer-claims/" class="text-[#1e3a5f] underline">Defined Benefit Transfer Claims</a> and <a href="/final-salary-pension-claims/" class="text-[#1e3a5f] underline">Final Salary Pension Claims</a>.' },
  { q: 'Why is advice to transfer out of a DB pension often unsuitable?', a: 'Transferring out of a DB pension means giving up guaranteed income for life, inflation protection and dependant benefits. The Financial Conduct Authority has stated that for most people this will not be in their best interests. Advice to transfer should only be given where there is clear and demonstrable justification. Read more: <a href="/defined-benefit-pension-transfer-claims/" class="text-[#1e3a5f] underline">DB pension transfer claims</a>.' },
  { q: 'What is a Cash Equivalent Transfer Value (CETV)?', a: 'A CETV is the lump sum value that a defined benefit scheme places on your expected future pension benefits. It is the amount transferred to a new arrangement when you give up your DB pension. A high CETV does not necessarily mean that transferring is in your best interests.' },
  { q: 'Were high transfer values in 2015–2020 a sign of mis-selling?', a: 'Not automatically. High transfer values during that period were a product of low interest rates rather than deliberate inflation. However, advisers may have recommended transfers that were not in clients\' interests in order to take advantage of high transfer values and the fees they could earn from recommending them.' },
  { q: 'What if my adviser said transferring was the right thing to do?', a: 'An adviser recommending a transfer is not a guarantee that the advice was suitable. You are entitled to expect advice that genuinely meets the regulatory standards. A solicitor can assess whether the advice met those standards in your case.' },
  { q: 'What is a Pension Transfer Specialist?', a: 'A Pension Transfer Specialist is a qualified adviser who is authorised to give advice on transfers from defined benefit pension schemes. Since April 2015, advice on DB pension transfers must be given by, or checked by, a qualified Pension Transfer Specialist.' },
]

const compensation = [
  { q: 'How much compensation could I get for a mis-sold pension?', a: 'Compensation depends on your individual circumstances — the losses suffered, the value of guaranteed benefits given up, the charges paid, the route available and other factors. We cannot predict or guarantee a specific figure for any individual case. Try our <a href="/mis-sold-pension-compensation-calculator/" class="text-[#1e3a5f] underline">pension compensation calculator</a> for a general illustration.' },
  { q: 'How is compensation calculated?', a: 'Compensation generally aims to put you back in the position you would have been in had the unsuitable advice not been given. For defined benefit transfer cases, this typically means modelling what your DB pension would have been worth compared to the current value of your transferred fund. See our <a href="/pension-claim-process/" class="text-[#1e3a5f] underline">claim process page</a> for more detail.' },
  { q: 'Does compensation include interest?', a: 'In many cases, yes. FOS complaints often include an interest element. FSCS calculations may also include interest in appropriate circumstances. Legal claims can also include interest on losses.' },
  { q: 'Will I definitely receive compensation if my claim is successful?', a: 'If a FOS complaint is upheld, the firm is directed to pay compensation and the FOS decision is binding on the firm if you accept it. FSCS compensation is paid directly by the FSCS. Legal judgments can be enforced through the courts if not paid.' },
  { q: 'Can compensation cover charges I paid?', a: 'Yes. Adviser fees, product charges and other costs paid as a result of the unsuitable advice may form part of a compensation assessment.' },
]

const timeLimits = [
  { q: 'Is there a time limit for making a mis-sold pension claim?', a: 'Yes. Time limits vary by route. For FOS complaints, you generally have six months from the firm\'s final response. Legal claims may be subject to six-year or three-year limitation periods under the Limitation Act 1980. Please seek advice promptly. See our <a href="/time-limits-mis-sold-pension-claims/" class="text-[#1e3a5f] underline">time limits guide</a> for full detail.' },
  { q: 'What if I received advice many years ago?', a: 'Some older claims may still be possible, depending on when you knew or should have known about the problem. The date of knowledge rules mean the clock may start running later than the date of advice in some cases. Please contact us to discuss your situation before assuming it is too late.' },
  { q: 'Does the FOS apply different time limits?', a: 'The FOS applies its own eligibility rules. Complaints must generally be made within six months of the firm\'s final response, and within six years of the event or three years from when the complainant knew (or should have known) of the issue — whichever is later.' },
  { q: 'What if I missed the six-month FOS deadline?', a: 'If you missed the six-month FOS referral deadline, you should contact us to explore whether other routes — such as legal action — remain open to you.' },
]

const fees = [
  { q: 'Does it cost anything to make an initial enquiry?', a: 'No. Your initial enquiry is free and without obligation. We will review your situation and explain your options before you decide whether to proceed.' },
  { q: 'How are fees structured?', a: 'Fee arrangements vary depending on the nature and complexity of the case and the route available. All fees and funding arrangements will be explained clearly to you before you decide whether to proceed. We will not begin work on a claim without your full agreement and understanding of any fees involved.' },
  { q: 'Do I need to pay upfront?', a: 'Funding arrangements are discussed as part of the initial review. Different arrangements may be available depending on your case. We will explain the options clearly before you commit to anything.' },
  { q: 'What if I complain to the FOS or FSCS directly?', a: 'Complaining to the <a href="/financial-ombudsman-pension-complaints/" class="text-[#1e3a5f] underline">FOS</a> or applying to the <a href="/fscs-pension-claims/" class="text-[#1e3a5f] underline">FSCS</a> directly is free of charge and does not require you to use a solicitor. We will make this clear when discussing your options.' },
  { q: 'Is there a no win no fee option?', a: 'Conditional fee arrangements may be available in some cases. Whether this applies to your situation depends on the nature of the claim and the route. This will be discussed and explained clearly before you proceed.' },
]

const fos_fscs = [
  { q: 'What is the difference between the FOS and the FSCS?', a: 'The Financial Ombudsman Service (FOS) resolves complaints against authorised financial firms that are still trading. The Financial Services Compensation Scheme (FSCS) pays compensation where an authorised firm has failed and cannot meet claims against it. Both offer free, direct routes for consumers. See: <a href="/financial-ombudsman-pension-complaints/" class="text-[#1e3a5f] underline">FOS pension complaints</a> and <a href="/fscs-pension-claims/" class="text-[#1e3a5f] underline">FSCS pension claims</a>.' },
  { q: 'What if I cannot complain to either the FOS or FSCS?', a: 'If neither the FOS nor the FSCS route is available — for example, if the firm was not FCA-authorised — legal action against other parties may need to be considered. A solicitor can advise on the options available in your specific situation.' },
  { q: 'Does the FOS decision bind both parties?', a: 'A FOS decision is binding on the financial firm if you accept it. However, if you accept a FOS decision, you generally cannot then pursue the same matter through the courts. If you reject the FOS decision, you retain the right to take legal action.' },
  { q: 'What is the FSCS compensation limit?', a: 'The FSCS applies limits to the compensation it pays per eligible person, per firm. These limits are set by the FCA and can change over time. Please check the FSCS website (fscs.org.uk) for the most current figures.' },
]

const documents = [
  { q: 'What documents help support a pension mis-selling claim?', a: 'Useful documents include: pension transfer report and suitability letter; pension statements before and after the transfer; risk profile questionnaire; SIPP or personal pension paperwork; investment documents; adviser correspondence; fee and charges information; any FOS or FSCS correspondence; and any complaints already sent.' },
  { q: 'What if I do not have the original suitability letter?', a: 'A suitability letter should have been provided by the adviser. If you do not have one, this may itself be relevant to a claim, as the requirement to provide a suitability report is a regulatory obligation. We may be able to assist in obtaining records.' },
  { q: 'Can I get my adviser\'s records?', a: 'Adviser firms are required to retain certain records. You may be able to obtain copies of your file by making a subject access request under data protection legislation. In some cases involving failed firms, the FSCS or appointed administrators may hold records.' },
]

const allFaqs = [...general, ...sipp, ...db, ...compensation, ...timeLimits, ...fees, ...fos_fscs, ...documents]

const sections = [
  { title: 'General Pension Mis-Selling', faqs: general },
  { title: 'SIPP Claims', faqs: sipp },
  { title: 'Defined Benefit and Final Salary Claims', faqs: db },
  { title: 'Compensation', faqs: compensation },
  { title: 'Time Limits', faqs: timeLimits },
  { title: 'Fees and Costs', faqs: fees },
  { title: 'FSCS and FOS', faqs: fos_fscs },
  { title: 'Documents Needed', faqs: documents },
]

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'FAQs', item: '/faqs/' }]} />
      <FAQSchema faqs={allFaqs} />
      <WebPageSchema title="Pension Mis-Selling FAQs" description={metadata.description as string} url="/faqs/" />

      <Breadcrumb crumbs={[{ label: 'FAQs' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Mis-Selling FAQs</h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">Answers to the most frequently asked questions about mis-sold pension claims, SIPP compensation, defined benefit transfers, time limits, fees and more. If your question is not answered here, please <Link href="/contact/" className="text-[#1e3a5f] underline">contact us</Link>.</p>

        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#0f2035] mb-5 pb-3 border-b-2 border-[#c9a84c]">{section.title}</h2>
              <FAQAccordion faqs={section.faqs} />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <PageCTA title="Still Have Questions?" body="Contact our solicitor-led team for a free, no-obligation discussion about your pension situation." />
        </div>
      </div>
    </>
  )
}
