'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setShow(true)
  }, [])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setShow(false) }
  const decline = () => { localStorage.setItem('cookie-consent', 'declined'); setShow(false) }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f2035] text-white p-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-200 leading-relaxed">
          We use cookies to improve your experience on our website. By continuing, you accept our use of essential cookies.
          Read our{' '}
          <Link href="/cookie-policy/" className="underline text-[#c9a84c] hover:text-[#e6c46a]">Cookie Policy</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={accept} className="bg-[#c9a84c] hover:bg-[#b8960e] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Accept
          </button>
          <button onClick={decline} className="border border-gray-500 text-gray-300 hover:border-gray-300 text-sm px-4 py-2 rounded-lg transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
