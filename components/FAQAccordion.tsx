'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ { q: string; a: string }

export default function FAQAccordion({ faqs, schema = true }: { faqs: FAQ[]; schema?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-[#0f2035] hover:bg-[#f0f4f8] transition-colors text-sm md:text-base"
            aria-expanded={open === i}
          >
            <span>{faq.q}</span>
            <ChevronDown size={18} className={`shrink-0 ml-3 text-[#c9a84c] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
              <div dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
