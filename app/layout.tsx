import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import MobileCTA from '@/components/MobileCTA'
import { OrganizationSchema, PersonSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Mis-Sold Pension Claims Solicitors | Pension Compensation Claims',
    template: '%s | Mis-Sold Pension Claim',
  },
  description: 'Solicitor-led support for mis-sold pension, SIPP and defined benefit transfer claims. Free initial enquiry. Edward & Amaury Solicitors, SRA regulated.',
  openGraph: {
    siteName: 'Mis-Sold Pension Claim',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mis-Sold Pension Claims Solicitors — Edward & Amaury Solicitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.svg'],
  },
  verification: {
    google: '_6P32nzvOGjCGUwstNRGa1IWdwkz1AiHTdKa8zbvoOk',
    other: {
      'msvalidate.01': '40D00AD9CC126F4D8873AF68A24D8412',
    },
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationSchema />
        <PersonSchema />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileCTA />
      </body>
    </html>
  )
}
