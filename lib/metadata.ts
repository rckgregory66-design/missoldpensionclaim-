import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Mis-Sold Pension Claim',
  url: 'https://missoldpensionclaim.co.uk',
  phone: '01228 272395',
  email: 'info@edwardamaury.co.uk',
  address: 'Pacific House, Fletcher Way, Parkhouse, Carlisle, CA3 0LJ',
  sraNumber: '800525',
  firmName: 'Edward & Amaury Limited trading as Edward & Amaury Solicitors',
  firmShort: 'Edward & Amaury Solicitors',
}

export function buildMetadata(override: Partial<Metadata> & { title: string; description: string }): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: override.title,
    description: override.description,
    openGraph: {
      title: override.title,
      description: override.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title,
      description: override.description,
    },
    alternates: {
      canonical: override.alternates?.canonical ?? '/',
    },
    robots: { index: true, follow: true },
    ...override,
  }
}
