import { Shield, Calendar, CheckCircle } from 'lucide-react'

interface AuthorBoxProps {
  publishedDate: string
  reviewedDate?: string
  compact?: boolean
}

const SOLICITOR_NAME = 'Nadeem Pervaz'
const SOLICITOR_INITIALS = 'NP'
// Add individual SRA number below once confirmed from sra.org.uk
const SOLICITOR_SRA_INDIVIDUAL = ''

export default function AuthorBox({ publishedDate, reviewedDate, compact }: AuthorBoxProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 py-3 border-y border-gray-200 my-6 text-xs text-gray-500">
        <div className="w-7 h-7 rounded-full bg-[#0f2035] flex items-center justify-center text-[#c9a84c] font-bold text-xs shrink-0">{SOLICITOR_INITIALS}</div>
        <span>Written by <strong className="text-gray-700">{SOLICITOR_NAME}</strong>, Solicitor · Edward &amp; Amaury Solicitors · Firm SRA 800525</span>
        <span className="flex items-center gap-1"><Calendar size={11} /> Published {publishedDate}</span>
        {reviewedDate && <span className="flex items-center gap-1"><CheckCircle size={11} className="text-green-500" /> Reviewed {reviewedDate}</span>}
      </div>
    )
  }

  return (
    <div className="bg-[#f0f4f8] rounded-xl border border-gray-200 p-5 my-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-[#0f2035] flex items-center justify-center text-[#c9a84c] font-bold text-sm shrink-0">{SOLICITOR_INITIALS}</div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-[#0f2035] text-sm">{SOLICITOR_NAME}</span>
            <span className="text-xs text-gray-500">Solicitor, Edward &amp; Amaury Solicitors</span>
            <span className="inline-flex items-center gap-1 bg-[#0f2035] text-[#c9a84c] text-xs px-2 py-0.5 rounded-full font-medium">
              <Shield size={10} /> SRA Regulated
            </span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Firm SRA No. 800525</span>
            {SOLICITOR_SRA_INDIVIDUAL && (
              <span className="text-xs bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full font-medium">Individual SRA No. {SOLICITOR_SRA_INDIVIDUAL}</span>
            )}
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            {SOLICITOR_NAME} is a solicitor at Edward &amp; Amaury Solicitors, a law firm authorised and regulated by the Solicitors Regulation Authority. Content is reviewed for legal accuracy and compliance with FCA guidance and SRA conduct standards.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Calendar size={11} /> Published: {publishedDate}</span>
            {reviewedDate && <span className="flex items-center gap-1"><CheckCircle size={11} className="text-green-500" /> Last reviewed: {reviewedDate}</span>}
            <a href="/about/" className="text-[#1e3a5f] underline">About the firm</a>
          </div>
        </div>
      </div>
    </div>
  )
}
