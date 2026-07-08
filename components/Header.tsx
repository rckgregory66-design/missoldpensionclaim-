'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

const services = [
  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
  { label: 'Financial Ombudsman Complaints', href: '/financial-ombudsman-pension-complaints/' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <header className="bg-[#0f2035] text-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0a1628] py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <span className="text-gray-300">Authorised &amp; Regulated by the Solicitors Regulation Authority · SRA No. 800525</span>
          <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-[#c9a84c] font-semibold hover:text-[#e6c46a] transition-colors">
            <Phone size={14} />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white tracking-tight">Mis-Sold Pension Claim</span>
            <span className="text-xs text-[#c9a84c] font-medium">Edward &amp; Amaury Solicitors</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className="flex items-center gap-1 text-gray-200 hover:text-[#c9a84c] transition-colors py-2">
                Claim Types <ChevronDown size={14} />
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl w-72 py-2 z-50">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm hover:bg-[#f0f4f8] hover:text-[#0f2035] transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="text-gray-200 hover:text-[#c9a84c] transition-colors">Am I Eligible?</Link>
            <Link href="/pension-claim-process/" className="text-gray-200 hover:text-[#c9a84c] transition-colors">How It Works</Link>
            <Link href="/compare/" className="text-gray-200 hover:text-[#c9a84c] transition-colors">Compare</Link>
            <Link href="/faqs/" className="text-gray-200 hover:text-[#c9a84c] transition-colors">FAQs</Link>
            <Link href="/about/" className="text-gray-200 hover:text-[#c9a84c] transition-colors">About</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <Link href="/contact/" className="bg-white text-[#0f2035] hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              Free Enquiry
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#162d4a] border-t border-[#1e3a5f]">
          <div className="px-4 py-4 space-y-1">
            <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-[#c9a84c] font-semibold py-2">
              <Phone size={16} /> {siteConfig.phone}
            </a>
            <div className="border-t border-[#1e3a5f] pt-3 space-y-1">
              {services.map(s => (
                <Link key={s.href} href={s.href} className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>
                  {s.label}
                </Link>
              ))}
              <div className="border-t border-[#1e3a5f] pt-2 space-y-1">
                <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>Am I Eligible?</Link>
                <Link href="/pension-claim-process/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>How It Works</Link>
                <Link href="/compare/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>Compare Routes</Link>
                <Link href="/faqs/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>FAQs</Link>
                <Link href="/about/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>About</Link>
                <Link href="/contact/" className="block text-gray-200 hover:text-[#c9a84c] py-1.5 text-sm" onClick={() => setOpen(false)}>Contact</Link>
              </div>
            </div>
            <div className="pt-3">
              <Link href="/contact/" className="block w-full text-center bg-[#c9a84c] text-white font-semibold py-3 rounded-lg text-sm" onClick={() => setOpen(false)}>
                Start Your Free Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
