import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Pension Claim Comparisons | FOS vs FSCS, DB vs DC, Solicitor vs Direct',
  description: 'Side-by-side comparisons to help you understand your pension mis-selling claim options. Compare the FOS vs FSCS, defined benefit vs defined contribution, and more.',
  alternates: { canonical: '/compare/' },
}

const comparisons = [
  {
    title: 'FOS vs FSCS — Which Route Applies to Me?',
    desc: 'The Financial Ombudsman Service and the Financial Services Compensation Scheme are both free — but they cover different situations. Learn which route applies depending on whether the adviser firm is still trading.',
    href: '/compare/fos-vs-fscs/',
  },
  {
    title: 'Defined Benefit vs Defined Contribution Pensions',
    desc: 'Understanding the difference between these two pension types is central to understanding whether you have a mis-selling claim. See how they compare and why the distinction matters.',
    href: '/compare/defined-benefit-vs-defined-contribution/',
  },
  {
    title: 'Solicitor-Led Claim vs Direct Complaint — What Are the Differences?',
    desc: 'You can complain to the FOS or FSCS yourself, for free. Or you can use a solicitor. Understand the trade-offs — when solicitor support adds most value, and when you may prefer to proceed directly.',
    href: '/compare/solicitor-vs-direct-claim/',
  },
]

export default function CompareHubPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Comparisons', item: '/compare/' }]} />
      <WebPageSchema title="Pension Claim Comparisons" description={metadata.description as string} url="/compare/" />

      <Breadcrumb crumbs={[{ label: 'Comparisons' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">Pension Claim Comparisons</h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed speakable">Side-by-side comparisons to help you understand the options available for pursuing a mis-sold pension claim — including which regulatory route applies to your situation, the differences between pension types, and whether solicitor support is right for you.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {comparisons.map(c => (
            <div key={c.href} className="bg-[#f0f4f8] rounded-xl border border-gray-200 p-6 flex flex-col">
              <h2 className="text-lg font-semibold text-[#0f2035] mb-3">{c.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{c.desc}</p>
              <Link href={c.href} className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold text-sm underline">
                Read comparison <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        <PageCTA />
      </div>
    </>
  )
}
