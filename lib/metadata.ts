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

// Per-page Open Graph block: page-level openGraph replaces the layout's, so images are repeated here
export function pageOpenGraph(path: string): NonNullable<Metadata['openGraph']> {
  return {
    url: path,
    siteName: siteConfig.name,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mis-Sold Pension Claims Solicitors — Edward & Amaury Solicitors' }],
  }
}

export function buildMetadata(override: Partial<Metadata> & { title: string; description: string }): Metadata {
  const { title, description, ...metadataOverride } = override

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: override.alternates?.canonical ?? '/',
    },
    robots: { index: true, follow: true },
    ...metadataOverride,
  }
}
