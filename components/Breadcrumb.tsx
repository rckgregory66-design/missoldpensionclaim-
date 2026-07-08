import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f0f4f8] border-b border-gray-200 py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <li><Link href="/" className="hover:text-[#0f2035] transition-colors">Home</Link></li>
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight size={12} />
              {c.href
                ? <Link href={c.href} className="hover:text-[#0f2035] transition-colors">{c.label}</Link>
                : <span className="text-[#0f2035] font-medium">{c.label}</span>
              }
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
