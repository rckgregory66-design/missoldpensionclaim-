'use client'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/metadata'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex gap-3">
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold py-3 rounded-lg text-sm transition-colors"
      >
        <Phone size={16} /> Call Now
      </a>
      <Link
        href="/contact/"
        className="flex-1 flex items-center justify-center gap-2 bg-[#0f2035] hover:bg-[#162d4a] text-white font-semibold py-3 rounded-lg text-sm transition-colors"
      >
        Free Enquiry
      </Link>
    </div>
  )
}
