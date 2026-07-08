import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Users, CheckCircle, Scale } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import PageCTA from '@/components/PageCTA'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'About Us | Edward & Amaury Solicitors — Mis-Sold Pension Claim',
  description: 'Learn about the team behind Mis-Sold Pension Claim. Operated by Edward & Amaury Solicitors, authorised and regulated by the Solicitors Regulation Authority, SRA No. 800525.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'About', item: '/about/' }]} />
      <WebPageSchema title="About Us" description={metadata.description as string} url="/about/" />

      <Breadcrumb crumbs={[{ label: 'About Us' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-4">About Mis-Sold Pension Claim</h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">Mis-Sold Pension Claim is a specialist service operated by Edward &amp; Amaury Solicitors, a law firm authorised and regulated by the Solicitors Regulation Authority. We provide solicitor-led support to individuals who believe they may have received unsuitable advice about their pension.</p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Shield, title: 'SRA-Regulated Firm', desc: 'We are authorised and regulated by the Solicitors Regulation Authority. SRA number: 800525. This means you are dealing with a regulated law firm subject to professional conduct rules and client protection obligations.' },
            { icon: Scale, title: 'Solicitor-Led Service', desc: 'All claims are handled under solicitor supervision. We do not hand cases to unqualified handlers. You receive qualified legal support at every stage of your claim.' },
            { icon: Users, title: 'UK-Wide Support', desc: 'We assist clients throughout England and Wales, regardless of where they are based. Our service is primarily telephone and online-based, making it accessible wherever you are.' },
            { icon: CheckCircle, title: 'Clear and Honest Advice', desc: 'We will give you an honest assessment of your situation. We will not pursue a claim we do not consider has genuine merit, and we will explain all fees and options clearly before you decide how to proceed.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-[#0f2035] flex items-center justify-center mb-3">
                <Icon size={18} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-semibold text-[#0f2035] mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="prose-legal">
          <h2>Our Approach</h2>
          <p>We understand that people who contact us about a potential pension mis-selling claim are often concerned, confused and uncertain about what happened to their pension. Our approach is to listen, explain clearly and give honest advice — without pressure and without obligation at the initial stage.</p>
          <p>We believe that good legal support should be accessible, transparent and client-focused. Before any work begins on a claim, we will explain what is involved, what the realistic prospects are, what the fees are and what your other options are — including the free routes available through the <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">Financial Ombudsman Service</Link> and the <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">Financial Services Compensation Scheme</Link>.</p>

          <h2>Claim Types We Can Help With</h2>
          <p>We assist clients with a wide range of pension mis-selling claims, including:</p>
          <ul>
            <li><Link href="/mis-sold-pension-claims/" className="text-[#1e3a5f] underline">Mis-sold pension claims</Link> — unsuitable advice about any pension product or transfer</li>
            <li><Link href="/defined-benefit-pension-transfer-claims/" className="text-[#1e3a5f] underline">Defined benefit pension transfer claims</Link> — advice to give up guaranteed final salary income</li>
            <li><Link href="/final-salary-pension-claims/" className="text-[#1e3a5f] underline">Final salary pension transfer claims</Link> — specialist support for scheme members who transferred out</li>
            <li><Link href="/mis-sold-sipp-claims/" className="text-[#1e3a5f] underline">Mis-sold SIPP claims</Link> — unsuitable advice to transfer into a Self-Invested Personal Pension</li>
            <li><Link href="/high-risk-pension-investment-claims/" className="text-[#1e3a5f] underline">High-risk pension investment claims</Link> — pension funds placed into speculative or unregulated assets</li>
            <li><Link href="/bad-pension-advice-claims/" className="text-[#1e3a5f] underline">Bad pension advice claims</Link> — negligent or inadequate financial advice about pensions</li>
          </ul>
          <p>We can also assist with <Link href="/fscs-pension-claims/" className="text-[#1e3a5f] underline">FSCS claims</Link> where an adviser firm has failed, and <Link href="/financial-ombudsman-pension-complaints/" className="text-[#1e3a5f] underline">FOS complaints</Link> against firms that are still trading. Not sure which applies to you? <Link href="/how-do-i-know-if-my-pension-was-mis-sold/" className="text-[#1e3a5f] underline">Use our eligibility checklist</Link>.</p>

          <h2>The Firm</h2>
          <p>This service is operated by <strong>Edward &amp; Amaury Limited trading as Edward &amp; Amaury Solicitors</strong>, a law firm registered in England and Wales and authorised and regulated by the Solicitors Regulation Authority under SRA number 800525.</p>
          <p>Edward &amp; Amaury Solicitors handles a range of legal matters including financial mis-selling, dispute resolution, personal injury, immigration and wills and probate. The firm's work in financial mis-selling includes advice on pension and investment mis-selling claims.</p>

          <h2>Contact and Address</h2>
          <p>Our details are as follows:</p>
          <ul>
            <li><strong>Firm:</strong> {siteConfig.firmName}</li>
            <li><strong>Address:</strong> {siteConfig.address}</li>
            <li><strong>Telephone:</strong> <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="text-[#1e3a5f] underline">{siteConfig.phone}</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#1e3a5f] underline">{siteConfig.email}</a></li>
            <li><strong>SRA Number:</strong> {siteConfig.sraNumber}</li>
          </ul>

          <h2>Complaints</h2>
          <p>If you are not satisfied with our service, we have a formal complaints procedure. Please see our <Link href="/complaints-procedure/" className="text-[#1e3a5f] underline">Complaints Procedure</Link> page for details.</p>

          <h2>Regulatory Information</h2>
          <p>Edward &amp; Amaury Solicitors is authorised and regulated by the Solicitors Regulation Authority. The SRA regulates solicitors and law firms in England and Wales to ensure that legal services are provided competently and ethically. Our SRA number is 800525. You can verify our regulatory status on the <a href="https://www.sra.org.uk/consumers/register/organisation/?sraNumber=800525" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline">SRA register at sra.org.uk</a>.</p>

          <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200 mt-6">
            <p className="text-sm text-gray-600 leading-relaxed">Information on this website is for general guidance only and does not constitute legal advice. Whether you can make a claim depends on your individual circumstances, the advice you received, the losses suffered and the route available to you. You may be able to complain directly to the Financial Ombudsman Service or Financial Services Compensation Scheme without using a solicitor. If we are able to assist you, any fees and funding options will be explained clearly before you decide whether to proceed.</p>
          </div>
        </div>

        <div className="mt-14">
          <PageCTA />
        </div>
      </div>
    </>
  )
}
