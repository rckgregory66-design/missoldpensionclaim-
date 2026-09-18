import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

const claimLinks = [
  { label: 'No Win No Fee Pension Claims', href: '/no-win-no-fee-pension-claims/' },
  { label: 'Mis-Sold Pension Claims', href: '/mis-sold-pension-claims/' },
  { label: 'Mis-Sold SIPP Claims', href: '/mis-sold-sipp-claims/' },
  { label: 'Defined Benefit Transfer Claims', href: '/defined-benefit-pension-transfer-claims/' },
  { label: 'Final Salary Pension Claims', href: '/final-salary-pension-claims/' },
  { label: 'Bad Pension Advice Claims', href: '/bad-pension-advice-claims/' },
  { label: 'Pension Transfer Claims', href: '/pension-transfer-claims/' },
  { label: 'High-Risk Investment Claims', href: '/high-risk-pension-investment-claims/' },
  { label: 'FSCS Pension Claims', href: '/fscs-pension-claims/' },
  { label: 'FOS Pension Complaints', href: '/financial-ombudsman-pension-complaints/' },
  { label: 'Storage Pod SIPP Claims', href: '/mis-sold-sipp-claims/storage-pod-pension-investment/' },
  { label: 'Overseas Property SIPP Claims', href: '/mis-sold-sipp-claims/overseas-property-pension-investment/' },
  { label: 'UCIS SIPP Claims', href: '/mis-sold-sipp-claims/unregulated-collective-investment-schemes/' },
  { label: 'Green Energy SIPP Claims', href: '/mis-sold-sipp-claims/green-energy-pension-investment/' },
  { label: 'Hotel Room SIPP Claims', href: '/mis-sold-sipp-claims/hotel-room-pension-investment/' },
  { label: 'Forestry & Land SIPP Claims', href: '/mis-sold-sipp-claims/forestry-land-pension-investment/' },
  { label: 'Pension Scam Claims', href: '/pension-scam-claims/' },
  { label: 'Civil Service Pension Transfer Claims', href: '/civil-service-pension-transfer-claims/' },
  { label: 'Local Government Pension Transfer Claims', href: '/local-government-pension-transfer-claims/' },
  { label: 'Mini-Bond & Care Home SIPP Claims', href: '/mis-sold-sipp-claims/mini-bonds-care-home-pension-investment/' },
  { label: 'Pension Drawdown Mis-Selling', href: '/pension-drawdown-mis-selling-claims/' },
  { label: 'Police Pension Transfer Claims', href: '/police-pension-transfer-claims/' },
  { label: 'Armed Forces Pension Transfer Claims', href: '/armed-forces-pension-transfer-claims/' },
  { label: 'Occupational Pension Transfer Claims', href: '/occupational-pension-transfer-claims/' },
  { label: 'Pension Charges Mis-Selling', href: '/pension-charges-mis-selling/' },
  { label: 'Pension Annuity Mis-Selling Claims', href: '/pension-annuity-mis-selling-claims/' },
  { label: 'Cryptocurrency Bitcoin SIPP Claims', href: '/mis-sold-sipp-claims/cryptocurrency-bitcoin-pension-investment/' },
  { label: 'Pension Cold Calling Claims', href: '/pension-cold-calling-claims/' },
  { label: 'FOS Complaint Process', href: '/pension-ombudsman-complaint-process/' },
  { label: 'How Much Compensation Can I Get?', href: '/how-much-compensation-can-i-get/' },
  { label: 'FCA Rules on Pension Advice', href: '/pension-advice-fca-rules/' },
  { label: 'Carlisle Pension Claims', href: '/carlisle-pension-mis-selling-claims/' },
]

const infoLinks = [
  { label: 'Make a Claim', href: '/make-a-claim/' },
  { label: 'Am I Eligible?', href: '/how-do-i-know-if-my-pension-was-mis-sold/' },
  { label: 'Compensation Guide', href: '/mis-sold-pension-compensation-calculator/' },
  { label: 'FSCS Compensation Limit', href: '/fscs-pension-compensation-limit/' },
  { label: 'Adviser Gone Bust?', href: '/can-i-claim-if-adviser-has-gone-bust/' },
  { label: 'What Evidence Do I Need?', href: '/what-evidence-do-i-need-for-pension-mis-selling-claim/' },
  { label: 'NHS Pension Transfer', href: '/nhs-pension-transfer-claims/' },
  { label: 'Can I Claim If Retired?', href: '/can-i-claim-if-i-am-already-retired/' },
  { label: 'Claim for Deceased Relative', href: '/can-i-claim-on-behalf-of-a-deceased-relative/' },
  { label: 'How Long Does a Claim Take?', href: '/how-long-does-a-pension-claim-take/' },
  { label: 'Is Compensation Taxable?', href: '/is-pension-mis-selling-compensation-taxable/' },
  { label: 'What Is a Suitability Report?', href: '/what-is-a-suitability-report/' },
  { label: 'Time Limits', href: '/time-limits-mis-sold-pension-claims/' },
  { label: 'Claim Process', href: '/pension-claim-process/' },
  { label: 'After FOS Rejection', href: '/what-happens-after-fos-rejects-my-pension-claim/' },
  { label: 'Teachers Pension Transfer Claims', href: '/teachers-pension-transfer-claims/' },
  { label: 'Civil Service Pension Transfer', href: '/civil-service-pension-transfer-claims/' },
  { label: 'What Is a TVAS?', href: '/pension-transfer-value-analysis/' },
  { label: 'Was My Pension Review Mis-Selling?', href: '/pension-review-was-it-mis-selling/' },
  { label: 'Complaint Letter Guide', href: '/pension-complaint-letter-template/' },
  { label: 'Solicitor vs Direct Claim', href: '/compare/solicitor-vs-direct-claim/' },
  { label: 'Pensions Ombudsman vs FOS', href: '/compare/pensions-ombudsman-vs-fos/' },
  { label: 'No Win No Fee Percentage', href: '/no-win-no-fee-pension-claims-percentage/' },
  { label: 'How to Make an FSCS Claim', href: '/how-to-make-an-fscs-pension-claim/' },
  { label: 'What Is a CETV?', href: '/what-is-a-cash-equivalent-transfer-value/' },
  { label: 'DB Transfer Redress Calculation', href: '/how-is-defined-benefit-pension-transfer-redress-calculated/' },
  { label: 'Compare: FOS vs Legal Action', href: '/compare/fos-vs-legal-action/' },
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
