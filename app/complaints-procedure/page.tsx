import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Complaints Procedure | Edward & Amaury Solicitors',
  description: 'Our complaints procedure. If you are not satisfied with our service, here is how to raise a complaint and what happens next.',
  alternates: { canonical: '/complaints-procedure/' },
}

export default function ComplaintsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Complaints Procedure', item: '/complaints-procedure/' }]} />
      <WebPageSchema title="Complaints Procedure" description={metadata.description as string} url="/complaints-procedure/" />

      <Breadcrumb crumbs={[{ label: 'Complaints Procedure' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0f2035] mb-4">Complaints Procedure</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">We are committed to providing a high quality of service. If you are not satisfied with any aspect of our service, we take such concerns seriously and will deal with your complaint promptly and fairly.</p>

        <div className="prose-legal">
          <h2>How to Make a Complaint</h2>
          <p>If you have a concern or complaint about our service, you should in the first instance raise the matter with the solicitor or fee earner handling your matter. Many concerns can be resolved quickly at this stage.</p>
          <p>If you are not satisfied following that discussion, you should raise your complaint formally with our Compliance Officer for Legal Practice (COLP):</p>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">COLP: Mr Nadeem Pervaz</p>
            <p className="text-gray-700 text-sm"><strong>Address:</strong> Pacific House, Fletcher Way, Parkhouse, Carlisle, CA3 0LJ</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> nadeem@edwardamaury.co.uk</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 01228 272395</p>
          </div>

          <h2>What Happens After You Complain?</h2>
          <p>We will acknowledge receipt of your complaint and, where appropriate, invite you to a meeting to discuss your concerns. Following our investigation, we will write to you with our conclusions within <strong>eight weeks</strong> of receiving your complaint.</p>
          <p>Our response may include one or more of the following:</p>
          <ul>
            <li>Putting the matter right</li>
            <li>An apology and an assurance that we will do our best to ensure the issue does not recur</li>
            <li>A reduction in our bill</li>
            <li>Compensation for any loss suffered</li>
            <li>Compensation for inconvenience or distress</li>
          </ul>

          <h2>If You Remain Dissatisfied</h2>
          <p>If you are not satisfied with our response, or if we have not resolved your complaint within eight weeks, you have the right to refer your complaint to the Legal Ombudsman:</p>

          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Legal Ombudsman</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0300 555 0333</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.legalombudsman.org.uk</p>
            <p className="text-gray-700 text-sm mt-3"><strong>Time limits:</strong> You must refer your complaint to the Legal Ombudsman within six months of receiving our final written response to your complaint. The Legal Ombudsman also applies rules relating to when the complaint arose — generally within six years of the act or omission complained about, or three years from when you should reasonably have known about it.</p>
          </div>

          <h2>Solicitors Regulation Authority</h2>
          <p>If your complaint relates to our conduct — rather than the quality of our service — you may also report your concerns to the Solicitors Regulation Authority (SRA):</p>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Solicitors Regulation Authority</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0370 606 2555</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.sra.org.uk</p>
          </div>

          <h2>Alternative Dispute Resolution</h2>
          <p>We have access to alternative dispute resolution (ADR) services for the resolution of our complaints. Our approved ADR provider is ProMediate UK Limited (telephone: 02036213908). If we feel ADR is appropriate in your case, we will advise you accordingly.</p>

          <h2>Further Information</h2>
          <p>For more information about our complaints procedure or to obtain a copy in a different format, please contact us at the details below.</p>

          <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200 not-prose mt-6">
            <p className="text-sm text-gray-700 leading-relaxed"><strong>Edward &amp; Amaury Limited</strong> trading as Edward &amp; Amaury Solicitors. Authorised and regulated by the Solicitors Regulation Authority. SRA number: {siteConfig.sraNumber}. Registered in England and Wales. Address: {siteConfig.address}. Telephone: {siteConfig.phone}.</p>
          </div>
        </div>
      </div>
    </>
  )
}
