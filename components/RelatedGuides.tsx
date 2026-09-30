import Link from 'next/link'
import { relatedFor } from '@/lib/related'

export default function RelatedGuides({ href }: { href: string }) {
  const links = relatedFor(href)
  if (links.length === 0) return null
  return (
    <nav aria-label="Related guides" className="not-prose my-10 rounded-lg border border-gray-200 bg-[#f0f4f8] p-5">
      <h2 className="text-lg font-semibold text-[#0f2035] mb-3">Related guides</h2>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {links.map(l => (
          <li key={l.href}><Link href={l.href} className="text-[#1e3a5f] underline hover:text-[#0f2035]">{l.label}</Link></li>
        ))}
      </ul>
    </nav>
  )
}
