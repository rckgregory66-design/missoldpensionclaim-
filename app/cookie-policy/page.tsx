import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Cookie Policy | Mis-Sold Pension Claim',
  description: 'Information about how cookies are used on the Mis-Sold Pension Claim website operated by Edward & Amaury Solicitors.',
  alternates: { canonical: '/cookie-policy/' },
}

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Cookie Policy', item: '/cookie-policy/' }]} />
      <WebPageSchema title="Cookie Policy" description={metadata.description as string} url="/cookie-policy/" />

      <Breadcrumb crumbs={[{ label: 'Cookie Policy' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0f2035] mb-4">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

        <div className="prose-legal">
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites function efficiently and to provide information to website operators.</p>

          <h2>How We Use Cookies</h2>
          <p>The Mis-Sold Pension Claim website uses cookies to:</p>
          <ul>
            <li>Remember your cookie preferences</li>
            <li>Ensure the website functions correctly</li>
            <li>Understand how visitors use the website (analytics)</li>
          </ul>

          <h2>Types of Cookies We Use</h2>

          <h3>Strictly Necessary Cookies</h3>
          <p>These cookies are essential for the website to function. They allow you to navigate the site and use its features. These cookies cannot be disabled as the website cannot function properly without them. They do not collect personal information about you.</p>

          <h3>Analytics Cookies</h3>
          <p>We may use analytics cookies to understand how visitors use this website — for example, which pages are visited most often and whether visitors encounter error messages. This helps us improve how the website works. These cookies are only placed if you accept them through our cookie banner.</p>

          <h3>Preference Cookies</h3>
          <p>These cookies allow the website to remember choices you have made, such as your cookie consent preferences.</p>

          <h2>Managing Cookies</h2>
          <p>When you first visit our website, you will be shown a cookie banner asking you to accept or decline non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting the site.</p>
          <p>You can also manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that blocking cookies may affect the functionality of this website.</p>

          <h2>Third-Party Cookies</h2>
          <p>We may use third-party services such as analytics tools that set their own cookies. We do not control these cookies. Please refer to the relevant third party's privacy and cookie policies for more information.</p>

          <h2>More Information</h2>
          <p>For more information about cookies generally, please visit the Information Commissioner's Office website at <strong>ico.org.uk</strong>.</p>

          <h2>Contact</h2>
          <p>If you have any questions about our use of cookies, please contact us:</p>
          <p>{siteConfig.firmName}<br />{siteConfig.address}<br />Email: <a href={`mailto:${siteConfig.email}`} className="text-[#1e3a5f] underline">{siteConfig.email}</a></p>
        </div>
      </div>
    </>
  )
}
