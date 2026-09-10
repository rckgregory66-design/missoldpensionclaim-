import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Complaints Handling Procedure | Edward & Amaury Solicitors',
  description: 'Our Complaints Handling Procedure. How we deal with your complaint, how long it takes, and your rights to the Legal Ombudsman and SRA.',
  alternates: { canonical: '/complaints-procedure/' },
}

export default function ComplaintsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Complaints Procedure', item: '/complaints-procedure/' }]} />
      <WebPageSchema title="Complaints Handling Procedure" description={metadata.description as string} url="/complaints-procedure/" />

      <Breadcrumb crumbs={[{ label: 'Complaints Procedure' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0f2035] mb-4">Complaints Handling Procedure</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">This Complaints Handling Procedure tells you how we will deal with your complaint and how long it is likely to take. It also provides important information about what you can do if you are not happy with the way in which we are dealing with your complaint, or about our final decision.</p>

        <div className="prose-legal">
          <h2>Designated Complaints Handler</h2>
          <p>If you have any concerns about our service, our work, or our charges, you should discuss these first with the individual who has day-to-day control of your matter. If this person cannot satisfactorily address your concerns and you wish to make a complaint, please contact our Designated Complaints Handler:</p>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Nadeem Shahid Pervaz</p>
            <p className="text-gray-700 text-sm"><strong>Address:</strong> 17 Spencer Street, Carlisle, CA1 1BE</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> nadeem@edwardamaury.co.uk</p>
          </div>

          <h2>Step One: Acknowledging your Complaint</h2>
          <p>Within two working days of receiving your complaint, your complaint will be recorded in our Complaints Register and a separate file will be opened in which we will store any correspondence and other documents relating to your complaint. Within two working days we will also send you a letter acknowledging your complaint.</p>

          <h2>Step Two: Investigating your Complaint</h2>
          <p>Within five working days of receiving your complaint, we will review your file(s) and any other relevant documentation and send you a letter telling you how we propose to deal with your complaint. Examples of what we might say in this letter are as follows:</p>
          <ul>
            <li>If your complaint is straightforward we might make suggestions as to how we can put things right or we may offer you some form of redress;</li>
            <li>If your complaint is more complicated we might ask you to confirm, explain or clarify any issues;</li>
            <li>We may ask to meet with you to discuss things face-to-face and we would hope to be in a position to meet with you no longer than fourteen working days after first receiving your complaint. If you would prefer not to meet, or if we cannot arrange this within an agreeable timescale, we will write to you fully setting out our views on the situation and making suggestions as to how we can put things right, or asking you to confirm, explain or clarify any issues. Within three working days of any meeting, we will write to you again to confirm what took place and to confirm any offer of redress that we have made.</li>
          </ul>
          <p>Whichever form our investigation takes, we will aim to give you our final decision within six weeks of receiving your complaint (or sooner if possible).</p>

          <h2>Data Protection Complaints</h2>
          <p>If you wish to complain about how we use and manage your personal information, please follow the procedure set out above. We are obliged under the Data Use and Access Act 2025 to acknowledge your complaint within 30 days.</p>

          <h2>Step Three: Appealing against our Final Decision</h2>
          <p>If you are not satisfied with our final decision, please let us know and we will review our decision again. We will let you know the result of any appeal within five working days of receiving your appeal.</p>

          <h2>Step Four: The Legal Ombudsman</h2>
          <p>If you are still not satisfied, you can then contact the Legal Ombudsman about your complaint provided you do so within six months of the end of our Internal Complaints Handling Procedure.</p>
          <p>In addition, there are time limits relating to the date you first became aware or should have become aware of the problem. The relevant time limits are set out in the version of the Legal Ombudsman&apos;s Scheme Rules in force from time to time and may only be extended by the Legal Ombudsman in exceptional circumstances. You must take your complaint to the Legal Ombudsman within six months of receiving a final response to your complaint, and no more than one year from the date of the act or omission (or no more than one year from when you should reasonably have known there was cause for complaint).</p>
          <p>Ordinarily, you cannot use the Legal Ombudsman unless you have first attempted to resolve your complaint using our internal Complaints Handling Procedure, but you will be able to contact the Legal Ombudsman if the complaint has not been resolved to your satisfaction within eight weeks of first making the complaint to us, or the Legal Ombudsman determines there are fair and reasonable circumstances for it to consider your complaint sooner, or it considers that your complaint cannot be resolved using our internal procedure because the relationship between you and us has broken down irretrievably.</p>
          <p>To use the Legal Ombudsman you must be an individual, a micro-enterprise, a charity with an annual income under £1 million, a club, association or society with an annual income under £1 million, a trustee of a trust with a net asset value under £1 million, or a personal representative or residuary beneficiary of an estate where the person with the complaint died before referring it. If you are not, you can only obtain redress by using our Complaints Handling Procedure, by mediation or arbitration, or by taking action through the Courts.</p>

          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Legal Ombudsman</p>
            <p className="text-gray-700 text-sm"><strong>Post:</strong> PO Box 6167, Slough, SL1 0EH</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0300 555 0333</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> enquiries@legalombudsman.org.uk</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.legalombudsman.org.uk</p>
          </div>

          <h2>Complaining to the Solicitors Regulation Authority</h2>
          <p>The Solicitors Regulation Authority can help you if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristic.</p>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Solicitors Regulation Authority</p>
            <p className="text-gray-700 text-sm"><strong>Post:</strong> The Cube, 199 Wharfside Street, Birmingham, B1 1RN</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0370 606 2555</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> report@sra.org.uk</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.sra.org.uk</p>
          </div>

          <h2>Complaining to the Information Commissioner</h2>
          <p>If you are still not satisfied about how we have handled a complaint about how we have used or managed your data, you can then contact the Information Commissioner. Complaints to the ICO are made via their website.</p>

          <h2>Alternative Dispute Resolution</h2>
          <p>Where we are not able to settle your complaint using our internal complaints process, there are alternative complaints bodies (such as the Ombudsman Services, www.ombudsman-services.org) which are competent to deal with complaints about legal services should both you and our firm wish to use such a scheme. Please let us know if you would like to consider using an alternative complaints body to resolve your complaint.</p>

          <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200 not-prose mt-6">
            <p className="text-sm text-gray-700 leading-relaxed"><strong>Edward &amp; Amaury Limited</strong> trading as Edward &amp; Amaury Solicitors. Authorised and regulated by the Solicitors Regulation Authority. SRA number: {siteConfig.sraNumber}. Registered in England and Wales. Address: {siteConfig.address}. Telephone: {siteConfig.phone}.</p>
          </div>
        </div>
      </div>
    </>
  )
}
