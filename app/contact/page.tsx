import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import { BreadcrumbSchema, WebPageSchema } from '@/components/Schema'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Contact Us | Free Pension Mis-Selling Enquiry',
  description: 'Contact Edward & Amaury Solicitors for a free, no-obligation initial enquiry about a mis-sold pension claim. Call us or complete the enquiry form.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Contact', item: '/contact/' }]} />
      <WebPageSchema title="Contact Us" description={metadata.description as string} url="/contact/" />

      <Breadcrumb crumbs={[{ label: 'Contact' }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f2035] mb-3">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Contact our solicitor-led team for a free, no-obligation initial enquiry about your pension situation. There is no charge for speaking to us and no obligation to proceed.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0f2035] mb-2">Send Your Enquiry</h2>
            <p className="text-gray-500 text-sm mb-6">Complete the form below and a solicitor will be in touch with you shortly.</p>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-[#0f2035] rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Telephone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="text-white font-semibold text-lg hover:text-[#c9a84c] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-white font-semibold hover:text-[#c9a84c] transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Address</p>
                    <p className="text-white">
                      Pacific House<br />
                      Fletcher Way, Parkhouse<br />
                      Carlisle, CA3 0LJ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Response Times</p>
                    <p className="text-white text-sm">We aim to respond to all enquiries within one business day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f4f8] rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-[#0f2035] mb-3">Before You Contact Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">You do not need to have all your documents ready before making an enquiry. Simply tell us what happened with your pension and we will take it from there.</p>
              <p className="text-gray-600 text-sm leading-relaxed">You may also be able to complain directly to the <strong>Financial Ombudsman Service</strong> or apply to the <strong>Financial Services Compensation Scheme</strong> without using a solicitor. Both routes are free. We will discuss all your options with you.</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed"><strong className="text-gray-700">Regulatory information:</strong> {siteConfig.firmName}. Authorised and regulated by the Solicitors Regulation Authority. SRA number: {siteConfig.sraNumber}. Registered in England and Wales.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
