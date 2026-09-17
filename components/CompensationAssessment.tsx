'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

type PensionType = 'db' | 'sipp' | 'general' | ''
type RouteType = 'fos' | 'fscs' | 'unsure' | ''

interface Answers {
  pensionType: PensionType
  transferYear: string
  approximateValue: string
  adviserStatus: RouteType
}

const contextualResult = (answers: Answers) => {
  const { pensionType, transferYear, approximateValue, adviserStatus } = answers
  const year = parseInt(transferYear, 10)
  const isRecent = !isNaN(year) && year >= 2015
  const isOld = !isNaN(year) && year < 2000

  if (pensionType === 'db') {
    return {
      headline: 'Defined Benefit Transfer Claims Can Involve Significant Compensation',
      summary: 'Advice to transfer out of a final salary or defined benefit pension is a major FCA concern. Compensation for these claims typically reflects the value of the guaranteed income you gave up compared to what your transferred fund is now worth — which can be substantial, particularly where the transfer took place several years ago and the fund has underperformed the scheme benefits.',
      route: adviserStatus === 'fscs'
        ? 'Because your adviser firm has failed, you may be able to claim through the FSCS. There is a limit on what the FSCS can pay, set by the FCA.'
        : adviserStatus === 'fos'
          ? 'If your adviser firm is still trading, the first step is typically a complaint to the firm, followed by referral to the Financial Ombudsman Service if unresolved.'
          : 'The appropriate route depends on whether your adviser firm is still trading. We will identify this as part of your initial review.',
      extra: isOld ? 'For older transfers, time limits may be a relevant consideration — early advice is important.' : '',
    }
  }

  if (pensionType === 'sipp') {
    return {
      headline: 'SIPP Mis-Selling Claims: Covering Investment Losses and Charges',
      summary: 'SIPP mis-selling claims typically cover the investment losses suffered as a result of unsuitable advice, plus any charges paid in connection with the advice. Where your SIPP was invested in high-risk or unregulated assets without adequate explanation of the risks, compensation can reflect the difference between the position you are in and where you would have been with suitable advice.',
      route: adviserStatus === 'fscs'
        ? 'The FSCS may be the appropriate route if your adviser firm has failed. There is a compensation limit per eligible person, per firm.'
        : 'If your adviser is still trading, a complaint through the Financial Ombudsman Service is often the first step.',
      extra: '',
    }
  }

  return {
    headline: 'Compensation Aims to Restore Your Financial Position',
    summary: 'For general pension mis-selling claims, compensation aims to put you back in the position you would have been in had you received suitable advice. The amount depends on the specific advice you received, the losses you have suffered, the benefits you gave up, and the route available to you.',
    route: 'The appropriate route — FOS complaint, FSCS claim, or legal action — depends on the specifics of your case. We will identify the right path as part of your free initial review.',
    extra: approximateValue === '250k+' ? 'For larger transfers, it is particularly important to take legal advice to ensure all routes and options are explored.' : '',
  }
}

export default function CompensationAssessment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    pensionType: '',
    transferYear: '',
    approximateValue: '',
    adviserStatus: '',
  })

  const result = step === 4 ? contextualResult(answers) : null

  return (
    <div className="bg-[#f0f4f8] rounded-2xl border border-gray-200 p-6 my-8 not-prose">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm">{step < 4 ? step + 1 : '✓'}</div>
        <p className="font-semibold text-[#0f2035] text-sm">
          {step === 0 && 'Quick Assessment: What type of pension situation applies to you?'}
          {step === 1 && 'When did the advice or transfer take place?'}
          {step === 2 && 'Approximately how much was transferred or advised on?'}
          {step === 3 && 'What is the current status of your adviser firm?'}
          {step === 4 && 'Your Assessment Summary'}
        </p>
      </div>

      {step === 0 && (
        <div className="space-y-3">
          {[
            { value: 'db' as PensionType, label: 'I was advised to transfer out of a final salary or defined benefit pension' },
            { value: 'sipp' as PensionType, label: 'I was advised to put my pension into a SIPP or high-risk investment' },
            { value: 'general' as PensionType, label: 'I received general pension advice that turned out to be unsuitable' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => { setAnswers(a => ({ ...a, pensionType: opt.value })); setStep(1) }}
              className="w-full text-left p-4 bg-white rounded-lg border border-gray-200 hover:border-[#c9a84c] hover:shadow-sm transition-all text-sm text-gray-700"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3">
          {[
            { value: 'pre-2000', label: 'Before 2000' },
            { value: '2000-2009', label: '2000–2009' },
            { value: '2010-2015', label: '2010–2015' },
            { value: '2016-2020', label: '2016–2020' },
            { value: '2021+', label: '2021 or later' },
            { value: 'unsure', label: 'I am not sure' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => { setAnswers(a => ({ ...a, transferYear: opt.value })); setStep(2) }}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#c9a84c] hover:shadow-sm transition-all text-sm text-gray-700"
            >
              {opt.label}
            </button>
          ))}
          <button onClick={() => setStep(0)} className="text-xs text-gray-400 hover:text-gray-600 mt-1">← Back</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          {[
            { value: 'under50k', label: 'Under £50,000' },
            { value: '50k-100k', label: '£50,000 – £100,000' },
            { value: '100k-250k', label: '£100,000 – £250,000' },
            { value: '250k+', label: 'Over £250,000' },
            { value: 'unsure', label: 'I am not sure' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => { setAnswers(a => ({ ...a, approximateValue: opt.value })); setStep(3) }}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#c9a84c] hover:shadow-sm transition-all text-sm text-gray-700"
            >
              {opt.label}
            </button>
          ))}
          <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-gray-600 mt-1">← Back</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          {[
            { value: 'fos' as RouteType, label: 'My adviser firm is still trading (FCA-authorised)' },
            { value: 'fscs' as RouteType, label: 'My adviser firm has closed down or gone bust' },
            { value: 'unsure' as RouteType, label: 'I am not sure / I cannot find them' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => { setAnswers(a => ({ ...a, adviserStatus: opt.value })); setStep(4) }}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#c9a84c] hover:shadow-sm transition-all text-sm text-gray-700"
            >
              {opt.label}
            </button>
          ))}
          <button onClick={() => setStep(2)} className="text-xs text-gray-400 hover:text-gray-600 mt-1">← Back</button>
        </div>
      )}

      {step === 4 && result && (
        <div>
          <div className="bg-[#0f2035] rounded-xl p-5 text-white mb-4">
            <p className="font-semibold text-[#c9a84c] text-sm mb-2">{result.headline}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{result.summary}</p>
          </div>
          {result.route && (
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3">
              <p className="text-xs font-semibold text-[#0f2035] mb-1 uppercase tracking-wide">Route</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.route}</p>
            </div>
          )}
          {result.extra && (
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-3">
              <p className="text-sm text-gray-700 leading-relaxed">{result.extra}</p>
            </div>
          )}
          <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
            <div className="flex items-start gap-2">
              <CheckCircle size={15} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Important:</strong> This assessment is for general guidance only and does not constitute legal advice. Compensation depends entirely on the specific facts of your case. No specific figure or outcome can be predicted without a full review of your individual circumstances.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8960e] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              <Phone size={14} /> {siteConfig.phone}
            </a>
            <Link href="/contact/" className="flex items-center justify-center gap-2 bg-[#0f2035] hover:bg-[#162d4a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Free Enquiry Form <ArrowRight size={14} />
            </Link>
            <button onClick={() => { setStep(0); setAnswers({ pensionType: '', transferYear: '', approximateValue: '', adviserStatus: '' }) }} className="text-xs text-gray-400 hover:text-gray-600 underline self-center">
              Start again
            </button>
          </div>
        </div>
      )}

      {step < 4 && (
        <p className="text-xs text-gray-400 mt-4">Step {step + 1} of 4 · This tool provides general guidance only — not legal advice</p>
      )}
    </div>
  )
}
