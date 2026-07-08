import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

export default function PageCTA({ title = 'Ready to Find Out If You Can Claim?', body = 'Speak to our solicitor-led team for a free, no-obligation initial review of your pension situation.' }: { title?: string; body?: string }) {
  return (
    <div className="bg-[#0f2035] rounded-2xl p-8 md:p-10 text-center">
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">{body}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          <Phone size={16} /> {siteConfig.phone}
        </a>
        <Link href="/contact/" className="flex items-center justify-center gap-2 bg-white text-[#0f2035] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
          Start Free Enquiry <ArrowRight size={16} />
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-400">No obligation · Solicitor-led review · Fee arrangements explained before you proceed</p>
    </div>
  )
}
