interface TLDRBoxProps {
  points: string[]
}

export default function TLDRBox({ points }: TLDRBoxProps) {
  return (
    <div className="not-prose border-l-4 border-[#c9a84c] bg-amber-50 rounded-r-lg p-5 my-6">
      <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-3">TL;DR — Quick Summary</p>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
            <span className="text-[#c9a84c] font-bold shrink-0 mt-0.5">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
