import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

const claimLinks = [
  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
]

const infoLinks = [
  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
  { label: 'Claim Process', href: '/pension-claim-process/' },
  { label: 'Compare: FOS vs FSCS', href: '/compare/fos-vs-fscs/' },
  { label: 'Compare: DB vs DC Pension', href: '/compare/defined-benefit-vs-defined-contribution/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Terms of Use', href: '/terms/' },
  { label: 'Complaints Procedure', href: '/complaints-procedure/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      {/* CTA strip */}
      <div className="bg-[#1e3a5f] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-1">Think You May Have A Claim?</h2>
            <p className="text-gray-300 text-sm">Speak to a solicitor today for a free, no-obligation initial enquiry.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              <Phone size={16} /> {siteConfig.phone}
            </a>
            <Link href="/contact/" className="flex items-center justify-center gap-2 bg-white text-[#0f2035] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
              Free Enquiry Form
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Firm info */}
          <div className="md:col-span-1">
            <div className="text-white font-bold text-lg mb-1">Mis-Sold Pension Claim</div>
            <div className="text-[#c9a84c] text-sm mb-4">Edward &amp; Amaury Solicitors</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#c9a84c] shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#c9a84c] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#c9a84c] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </div>
            </div>
          </div>

          {/* Claim types */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Claim Types</h3>
            <ul className="space-y-2 text-sm">
              {claimLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Information</h3>
            <ul className="space-y-2 text-sm">
              {infoLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory bar */}
        <div className="border-t border-[#1e3a5f] mt-12 pt-8">
          <div className="bg-[#0f2035] rounded-lg p-5 text-sm text-gray-400 leading-relaxed mb-6">
            <p className="font-semibold text-gray-300 mb-2">Important Information</p>
            <p>Information on this website is for general guidance only and does not constitute legal advice. Whether you can make a claim depends on your individual circumstances, the advice you received, the losses suffered and the route available to you. You may be able to complain directly to the Financial Ombudsman Service or Financial Services Compensation Scheme without using a solicitor. If we are able to assist you, any fees and funding options will be explained clearly before you decide whether to proceed.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-500">
            <div className="space-y-1">
              <p className="text-gray-400"><strong className="text-gray-300">{siteConfig.firmName}</strong></p>
              <p>Authorised and regulated by the <a href="https://www.sra.org.uk/consumers/register/organisation/?sraNumber=800525" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 underline">Solicitors Regulation Authority</a>. SRA number: {siteConfig.sraNumber}.</p>
              <p>Registered in England and Wales.</p>
            </div>
            <p className="shrink-0">&copy; {new Date().getFullYear()} Mis-Sold Pension Claim. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
