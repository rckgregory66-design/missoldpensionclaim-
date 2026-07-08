import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Terms of Use | Mis-Sold Pension Claim',
  description: 'Terms and conditions for use of the Mis-Sold Pension Claim website operated by Edward & Amaury Solicitors.',
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Terms of Use', item: '/terms/' }]} />
      <WebPageSchema title="Terms of Use" description={metadata.description as string} url="/terms/" />

      <Breadcrumb crumbs={[{ label: 'Terms of Use' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0f2035] mb-4">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

        <div className="prose-legal">
          <h2>About This Website</h2>
          <p>This website (missoldpensionclaim.co.uk) is operated by <strong>{siteConfig.firmName}</strong>, a law firm authorised and regulated by the Solicitors Regulation Authority (SRA number: {siteConfig.sraNumber}). By using this website, you agree to these terms.</p>

          <h2>General Information Only</h2>
          <p>The information on this website is for general guidance only. It does not constitute legal advice. Whether you have a valid claim depends entirely on your individual circumstances, the advice you received, who gave it, the losses suffered and the route available to you.</p>
          <p>Accessing this website, reading its content, or completing the enquiry form does not create a solicitor-client relationship. A solicitor-client relationship is only created when we have confirmed in writing that we are acting for you.</p>

          <h2>No Guarantee of Outcome</h2>
          <p>Nothing on this website constitutes a guarantee or promise of any particular outcome. We do not guarantee that you will receive compensation or that any claim will succeed. Any indication of possible compensation ranges is illustrative only and does not apply to your individual case.</p>

          <h2>Alternative Routes</h2>
          <p>You may be able to complain to the Financial Ombudsman Service or apply to the Financial Services Compensation Scheme without using a solicitor. Both routes are available free of charge. We will discuss all your options with you before you decide how to proceed.</p>

          <h2>Intellectual Property</h2>
          <p>The content of this website — including text, graphics, logos and images — is owned by or licensed to Edward &amp; Amaury Limited. You may not reproduce, distribute or use any content from this website without our prior written permission.</p>

          <h2>External Links</h2>
          <p>This website may contain links to external websites. We are not responsible for the content of those websites and a link does not constitute an endorsement.</p>

          <h2>Limitation of Liability</h2>
          <p>We do not accept liability for any loss arising from reliance on information contained on this website. This website is provided on an "as is" basis. We make no warranty that the website will be uninterrupted or error-free.</p>

          <h2>Privacy</h2>
          <p>Your use of this website is also governed by our <a href="/privacy-policy/" className="text-[#1e3a5f] underline">Privacy Policy</a> and <a href="/cookie-policy/" className="text-[#1e3a5f] underline">Cookie Policy</a>.</p>

          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these terms from time to time. The date at the top of this page shows when they were last revised. Continued use of the website following any changes constitutes acceptance of the revised terms.</p>

          <h2>Contact</h2>
          <p>{siteConfig.firmName}<br />{siteConfig.address}<br />Telephone: {siteConfig.phone}<br />Email: <a href={`mailto:${siteConfig.email}`} className="text-[#1e3a5f] underline">{siteConfig.email}</a></p>
        </div>
      </div>
    </>
  )
}
