import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mis-Sold Pension Claim',
  description: 'How Edward & Amaury Solicitors collects, uses and protects your personal data in connection with the Mis-Sold Pension Claim service.',
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Privacy Policy', item: '/privacy-policy/' }]} />
      <WebPageSchema title="Privacy Policy" description={metadata.description as string} url="/privacy-policy/" />

      <Breadcrumb crumbs={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0f2035] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

        <div className="prose-legal">
          <h2>Who We Are</h2>
          <p>This privacy policy relates to the Mis-Sold Pension Claim website operated by <strong>{siteConfig.firmName}</strong>, a law firm authorised and regulated by the Solicitors Regulation Authority under number {siteConfig.sraNumber}.</p>
          <p>Our registered address is: {siteConfig.address}.</p>
          <p>We are the data controller for the personal data collected through this website.</p>

          <h2>Data We Collect</h2>
          <p>When you contact us or complete an enquiry form, we may collect the following information:</p>
          <ul>
            <li>Name</li>
            <li>Telephone number</li>
            <li>Email address</li>
            <li>Information about your pension situation</li>
            <li>Details of any adviser or firm involved</li>
            <li>Approximate dates and values where provided</li>
          </ul>
          <p>We may also collect technical information about your use of this website, such as IP address and browser type, through cookies and similar technologies. Please see our <a href="/cookie-policy/" className="text-[#1e3a5f] underline">Cookie Policy</a> for more information.</p>

          <h2>How We Use Your Data</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your enquiry</li>
            <li>Assess whether we may be able to assist you</li>
            <li>Provide legal services where you choose to instruct us</li>
            <li>Comply with our regulatory and legal obligations</li>
          </ul>

          <h2>Legal Basis for Processing</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> Where you have submitted an enquiry form and confirmed your consent to being contacted</li>
            <li><strong>Legitimate interests:</strong> To respond to your enquiry and assess your potential claim</li>
            <li><strong>Legal obligation:</strong> Where we are required to retain or disclose data by law or regulation</li>
            <li><strong>Contract:</strong> Where you have instructed us and we are performing a contract for legal services</li>
          </ul>

          <h2>Sharing Your Data</h2>
          <p>We do not sell your personal data to third parties. We may share your data with:</p>
          <ul>
            <li>Staff and authorised representatives within our firm who need access to handle your enquiry or case</li>
            <li>Regulatory bodies where required by law (for example, the SRA)</li>
            <li>Third parties with your explicit consent</li>
            <li>Professional advisers such as barristers, where necessary for the conduct of your case</li>
          </ul>

          <h2>Data Retention</h2>
          <p>We retain personal data for as long as is necessary for the purpose for which it was collected, and in accordance with our legal and regulatory obligations. For client files, we typically retain records for a minimum of six years following the conclusion of a matter, in line with professional guidance. Enquiry data that does not result in instructions is retained for a shorter period.</p>

          <h2>Your Rights</h2>
          <p>Under data protection law, you have rights including:</p>
          <ul>
            <li><strong>Right of access:</strong> To request a copy of the personal data we hold about you</li>
            <li><strong>Right to rectification:</strong> To request correction of inaccurate data</li>
            <li><strong>Right to erasure:</strong> To request deletion of your data in certain circumstances</li>
            <li><strong>Right to restrict processing:</strong> To request that we limit how we use your data</li>
            <li><strong>Right to object:</strong> To object to processing based on legitimate interests</li>
            <li><strong>Right to data portability:</strong> To receive your data in a portable format where applicable</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-[#1e3a5f] underline">{siteConfig.email}</a>.</p>

          <h2>Complaints to the ICO</h2>
          <p>If you are not satisfied with how we handle your personal data, you have the right to complain to the Information Commissioner's Office (ICO). Website: <strong>ico.org.uk</strong>. Helpline: 0303 123 1113.</p>

          <h2>Security</h2>
          <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration or destruction.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy or how we handle your data, please contact us at:</p>
          <p>{siteConfig.firmName}<br />{siteConfig.address}<br />Email: <a href={`mailto:${siteConfig.email}`} className="text-[#1e3a5f] underline">{siteConfig.email}</a><br />Telephone: {siteConfig.phone}</p>
        </div>
      </div>
    </>
  )
}
