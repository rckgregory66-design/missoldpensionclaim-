import { siteConfig } from '@/lib/metadata'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Organization'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.firmName,
    alternateName: 'Mis-Sold Pension Claim',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pacific House, Fletcher Way, Parkhouse',
      addressLocality: 'Carlisle',
      postalCode: 'CA3 0LJ',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description: 'Mis-sold pension claims solicitors. Solicitor-led support for mis-sold pension, SIPP and defined benefit transfer claims across England and Wales.',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Authorised and regulated by the Solicitors Regulation Authority',
      identifier: siteConfig.sraNumber,
    },
    sameAs: [
      `https://www.sra.org.uk/consumers/register/organisation/?sraNumber=${siteConfig.sraNumber}`,
    ],
    serviceType: [
      'Mis-sold pension claims',
      'SIPP mis-selling claims',
      'Defined benefit pension transfer claims',
      'Final salary pension transfer claims',
      'Pension compensation claims',
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/about/#nadeem-pervaz`,
    name: 'Nadeem Pervaz',
    jobTitle: 'Solicitor — Pension Mis-Selling Claims',
    description: 'Nadeem Pervaz is a solicitor at Edward & Amaury Solicitors specialising in mis-sold pension claims, including defined benefit transfer claims, SIPP mis-selling and high-risk investment claims.',
    worksFor: {
      '@type': 'LegalService',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.firmName,
    },
    knowsAbout: [
      'Pension mis-selling',
      'Defined benefit pension transfer claims',
      'SIPP mis-selling',
      'Financial Services Compensation Scheme claims',
      'Financial Ombudsman Service complaints',
      'FCA pension advice regulations',
      'Pension compensation claims',
    ],
    url: `${siteConfig.url}/about/`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ crumbs }: { crumbs: { name: string; item: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      ...crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 2, name: c.name, item: `${siteConfig.url}${c.item}` })),
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const today = new Date().toISOString().split('T')[0]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    datePublished: '2025-01-01',
    dateModified: today,
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebPageSchema({ title, description, url, datePublished = '2025-01-01' }: { title: string; description: string; url: string; datePublished?: string }) {
  const today = new Date().toISOString().split('T')[0]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified: today,
    isAccessibleForFree: true,
    isPartOf: { '@type': 'WebSite', url: siteConfig.url, name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.firmName,
    },
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/about/#nadeem-pervaz`,
      name: 'Nadeem Pervaz',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable'],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function AggregateRatingSchema({ ratingValue = '4.9', reviewCount = '47' }: { ratingValue?: string; reviewCount?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.firmName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema({ locationName, streetAddress, addressLocality, postalCode, url, description }: {
  locationName: string; streetAddress: string; addressLocality: string; postalCode: string; url: string; description: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    '@id': `${siteConfig.url}${url}#local-business`,
    name: locationName,
    url: `${siteConfig.url}${url}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      postalCode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 54.8951,
      longitude: -2.9382,
    },
    areaServed: [
      { '@type': 'City', name: 'Carlisle' },
      { '@type': 'AdministrativeArea', name: 'Cumbria' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    parentOrganization: {
      '@type': 'LegalService',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.firmName,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Authorised and regulated by the Solicitors Regulation Authority',
      identifier: siteConfig.sraNumber,
    },
    serviceType: [
      'Mis-sold pension claims',
      'SIPP mis-selling claims',
      'Defined benefit pension transfer claims',
      'Pension compensation claims',
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function HowToSchema({ steps }: { steps: { name: string; text: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Make a Mis-Sold Pension Claim',
    description: 'A step-by-step guide to pursuing a mis-sold pension compensation claim through Edward & Amaury Solicitors.',
    totalTime: 'PT30M',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ArticleSchema({ title, description, url, datePublished = '2025-01-01' }: {
  title: string; description: string; url: string; datePublished?: string
}) {
  const today = new Date().toISOString().split('T')[0]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified: today,
    isAccessibleForFree: true,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/about/#nadeem-pervaz`,
      name: 'Nadeem Pervaz',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.firmName,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable'],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
