'use client'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const pensionTypes = [
  'Mis-sold pension (general)',
  'Mis-sold SIPP (Self-Invested Personal Pension)',
  'Defined benefit / final salary transfer',
  'Bad or unsuitable pension advice',
  'Pension transferred into high-risk investments',
  'FSCS claim (adviser firm has failed)',
  'Financial Ombudsman complaint',
  'Other / not sure',
]

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', pensionType: '',
    yearAdvice: '', adviserFirm: '', pensionValue: '',
    moneyTransferred: '', moneyLost: '', message: '',
    contact: 'phone', consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target
    setForm(f => ({
      ...f,
      [target.name]: target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    }))
  }

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError('Sorry, there was a problem sending your enquiry. Please call us directly or try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-semibold text-[#0f2035]">Thank you for your enquiry</h3>
        <p className="text-gray-600 max-w-sm">A member of our team will be in touch with you shortly to discuss your pension claim. We aim to respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
          <input required name="name" value={form.name} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
            placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number *</label>
          <input required name="phone" type="tel" value={form.phone} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
            placeholder="Your phone number" />
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
          <input required name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
            placeholder="Your email address" />
        </div>
        {!compact && (
          <>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of pension issue</label>
              <select name="pensionType" value={form.pensionType} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white">
                <option value="">-- Please select --</option>
                {pensionTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Approximate year advice was given</label>
              <input name="yearAdvice" value={form.yearAdvice} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                placeholder="e.g. 2015" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adviser or firm name (if known)</label>
              <input name="adviserFirm" value={form.adviserFirm} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                placeholder="Name of adviser or firm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Approximate pension value</label>
              <select name="pensionValue" value={form.pensionValue} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white">
                <option value="">-- Please select --</option>
                <option>Under £25,000</option>
                <option>£25,000 – £50,000</option>
                <option>£50,000 – £100,000</option>
                <option>£100,000 – £250,000</option>
                <option>Over £250,000</option>
                <option>Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Was the pension transferred?</label>
              <select name="moneyTransferred" value={form.moneyTransferred} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white">
                <option value="">-- Please select --</option>
                <option>Yes</option>
                <option>No</option>
                <option>Not sure</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Have you suffered financial losses?</label>
              <select name="moneyLost" value={form.moneyLost} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white">
                <option value="">-- Please select --</option>
                <option>Yes – significant losses</option>
                <option>Yes – some losses</option>
                <option>No losses but I lost guaranteed benefits</option>
                <option>Not sure</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your situation</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                placeholder="Briefly describe what happened with your pension..." />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred contact method</label>
              <div className="flex gap-4">
                {['phone', 'email', 'either'].map(m => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="radio" name="contact" value={m} checked={form.contact === m} onChange={handleChange} className="accent-[#1e3a5f]" />
                    {m.charAt(0).toUpperCase() + m.slice(1)}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className="flex items-start gap-2 cursor-pointer">
            <input required type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5 accent-[#1e3a5f]" />
            <span className="text-xs text-gray-600 leading-relaxed">
              By submitting this form, you agree that Edward &amp; Amaury Solicitors or its authorised representatives may contact you about your enquiry. Your information will be handled in accordance with our{' '}
              <a href="/privacy-policy/" className="text-[#1e3a5f] underline hover:text-[#162d4a]">Privacy Policy</a>.
              Submitting this form does not create a solicitor-client relationship.
            </span>
          </label>
        </div>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>}
      <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base">
        <Send size={16} />
        {loading ? 'Sending…' : compact ? 'Request a Call Back' : 'Submit Your Free Enquiry'}
      </button>
    </form>
  )
}
