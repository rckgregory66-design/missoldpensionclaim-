import { Shield, Users, Clock, Award, CheckCircle } from 'lucide-react'

const items = [
  { icon: Shield, label: 'SRA-Regulated Solicitors', sub: 'SRA No. 800525' },
  { icon: CheckCircle, label: 'Solicitor-Led Reviews', sub: 'Expert legal support' },
  { icon: Users, label: 'UK-Wide Service', sub: 'England & Wales' },
  { icon: Clock, label: 'No Obligation Enquiry', sub: 'Free initial review' },
  { icon: Award, label: 'Clear Fee Advice', sub: 'Explained before you proceed' },
]

function StarRating() {
  return (
    <div className="flex flex-col items-center text-center gap-1.5">
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(s => (
          <svg key={s} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      <div>
        <p className="font-semibold text-[#0f2035] text-xs leading-tight">Rated 5 / 5</p>
        <p className="text-gray-500 text-xs">Client reviews</p>
      </div>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="bg-[#f0f4f8] border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <StarRating />
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-[#0f2035] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#c9a84c]" />
              </div>
              <div>
                <p className="font-semibold text-[#0f2035] text-xs leading-tight">{label}</p>
                <p className="text-gray-500 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
