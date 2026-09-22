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
          <p>Mis-Sold Pension Claim is a trading style of Edward and Amaury Limited (Edward &amp; Amaury Solicitors). We are committed to providing a quality legal service to all of our clients. If you feel unhappy with the way that we are handling matters, do not hesitate to speak to your fee earner about it. We understand that clients can feel anxious about legal matters, and we can assure you that your concerns will be dealt with sympathetically and in confidence.</p>
          <p>Hopefully they will be able to resolve your concerns. If they are unable to do so or you remain unhappy about the situation, please contact the Compliance Officer for Legal Practice (COLP) at our office. Your complaint will be dealt with independently by the COLP, and will ordinarily be referred for investigation where the matter cannot be resolved informally. The matter will be dealt with by someone else, where it personally concerns the COLP or they are acting in your case.</p>
          <p>You may contact them by telephone, fax or e-mail. It is more helpful in most cases if you write to them, setting out your concerns and what you would ideally like us to do about them. This gives us a clearer idea of the nature of your complaint, and the matters which will need to be looked into. However, if for any reason, you do not feel comfortable about writing to us, please feel free to telephone them, even if only by way of an initial call before writing to us.</p>

          <h2>Designated Complaints Handler</h2>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Mr Nadeem Pervaz — Compliance Officer for Legal Practice and Complaints Handler</p>
            <p className="text-gray-700 text-sm"><strong>Address:</strong> Pacific House, Fletcher Way, Parkhouse, Carlisle, CA3 0LJ</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> nadeem@edwardamaury.co.uk</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 01228 272395</p>
          </div>

          <h2>What will happen next?</h2>
          <p>Where it is felt that an initial meeting with them may be of mutual assistance, we will invite you to attend if it is convenient for you to do so. You may, in any event, request such a meeting yourself, if you feel your concerns could be better expressed this way. Where a meeting has taken place, our investigations would normally be completed within 3 days of that meeting.</p>
          <p>Mr Pervaz will either write to you within 3 days of any meeting, to confirm what took place and any solutions that were agreed, or setting out his findings, or, in relatively complex matters, he will invite you to meet with him further to discuss and hopefully resolve your concerns.</p>
          <p>If you do not want a meeting or it is not possible to attend, he will send you a detailed reply to your complaint, including suggestions for resolving the matter. The remedies open to the firm, following investigation of the complaint may be:</p>
          <ul>
            <li>Putting the matter right;</li>
            <li>An apology from the firm and an assurance that we will do our best to ensure it will not happen again;</li>
            <li>A reduction in the bill;</li>
            <li>A total abatement of the bill;</li>
            <li>Compensation for loss suffered;</li>
            <li>Compensation for inconvenience and/or distress;</li>
            <li>Notification of your right to complain to the Legal Ombudsman or the Solicitors Regulation Authority, either as a matter of professional conduct, or in respect of inadequate professional service.</li>
          </ul>
          <p>If you are satisfied with the investigation, the fee-earner will continue to handle the file. However, if the relationship has broken down, the file will be transferred to another fee-earner in the firm, and you will be informed of the identity of the new fee-earner.</p>
          <p>However, if you are still not satisfied, we will arrange for our findings and proposals and all correspondence relating to the matter to be independently reviewed. This will happen, depending upon the nature of your concerns, and at our discretion, either by:</p>
          <ul>
            <li>asking our local Law Society or another local firm of solicitors to review your complaint; or</li>
            <li>inviting you to agree to independent mediation.</li>
          </ul>
          <p>We will let you know within 3 days of receipt of your letter, who is going to review the matter and how long this will take.</p>
          <p>We have 8 weeks from receipt of your initial complaint to review your complaint and try to resolve your complaint.</p>

          <h2>The Legal Ombudsman</h2>
          <p>You must have tried resolving your complaint with us first but, if we are unable to help you, or you are not satisfied with our handling of your complaint, you can have the complaint independently looked at by the Legal Ombudsman, an independent complaints body, established under the Legal Services Act 2007, that deals with legal services complaints. There is no charge to you to use this scheme.</p>
          <p>You may be able to complain direct to the Legal Ombudsman either before the expiry of the 8 weeks or without waiting for our response if:</p>
          <ul>
            <li>An Ombudsman considers that there are exceptional reasons to consider the complaint sooner, or without it having been made first to us; or</li>
            <li>An Ombudsman considers that in-house resolution is not possible due to irretrievable breakdown in the relationship between us and you.</li>
          </ul>
          <p>Please note that there are time limits within which you must make your complaint to the Legal Ombudsman. These time limits are:</p>
          <ul>
            <li>You refer the complaint to the Legal Ombudsman within 6 months of the date of our final written response; and</li>
            <li>You refer the complaint to the Legal Ombudsman within either: 6 years from the date of act or omission or the problem happening; or if the act took place more than 6 years ago, 3 years from when you found out about it or should reasonably have known that there was cause for complaint.</li>
          </ul>

          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Legal Ombudsman</p>
            <p className="text-gray-700 text-sm"><strong>Post:</strong> PO Box 6806, Wolverhampton WV1 9WJ</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0300 555 0333 (8:30am to 5:30pm)</p>
            <p className="text-gray-700 text-sm"><strong>Minicom:</strong> 0300 555 1777</p>
            <p className="text-gray-700 text-sm"><strong>Email:</strong> enquiries@legalombudsman.org.uk</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.legalombudsman.org.uk</p>
          </div>
          <p>We enclose links to the Legal Ombudsman&apos;s leaflets &quot;Here to help&quot; and &quot;How to complain to your legal service provider&quot;: <a href="https://www.legalombudsman.org.uk/information-centre/consumer-resources/complaining-to-a-service-provider/" target="_blank" rel="noopener noreferrer">legalombudsman.org.uk</a>.</p>
          <p>If we are unable to resolve your complaint using our internal complaints process, alternative complaints bodies exist (such as ProMediate UK Limited — Address: Brow Farm, Top Road, Frodsham, Cheshire WA6 6SP; Tel: 02036213908 and 07827961764; Web Address: <a href="https://www.promediate.co.uk" target="_blank" rel="noopener noreferrer">www.promediate.co.uk</a>; E-mail: enquiries@promediate.co.uk) which are competent to deal with complaints about legal services should both you and our firm wish to use such a scheme. There is no charge to you to use this scheme.</p>
          <p>The Legal Ombudsman is still able to consider complaints that have previously been considered by an ADR entity.</p>

          <h2>The Solicitors Regulation Authority</h2>
          <p>The Solicitors Regulation Authority can help you if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristic. You can raise your concerns with the Solicitors Regulation Authority at <a href="https://www.sra.org.uk/consumers/problems/report-solicitor" target="_blank" rel="noopener noreferrer">sra.org.uk</a>.</p>
          <div className="bg-[#f0f4f8] rounded-lg p-5 border border-gray-200 not-prose my-4">
            <p className="font-semibold text-[#0f2035] mb-2">Solicitors Regulation Authority</p>
            <p className="text-gray-700 text-sm"><strong>Post:</strong> The Cube, 199 Wharfside Street, Birmingham, B1 1RN</p>
            <p className="text-gray-700 text-sm"><strong>Telephone:</strong> 0370 606 2555 (8:00am–6:00pm Mon, Wed, Thu &amp; Fri; 9:30am–6:00pm Tue)</p>
            <p className="text-gray-700 text-sm"><strong>Website:</strong> www.sra.org.uk/contactus</p>
          </div>

          <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200 not-prose mt-6">
            <p className="text-sm text-gray-700 leading-relaxed"><strong>Edward &amp; Amaury Limited</strong> trading as Edward &amp; Amaury Solicitors. Authorised and regulated by the Solicitors Regulation Authority. SRA number: {siteConfig.sraNumber}. Registered in England and Wales. Address: {siteConfig.address}. Telephone: {siteConfig.phone}.</p>
          </div>
        </div>
      </div>
    </>
  )
}
