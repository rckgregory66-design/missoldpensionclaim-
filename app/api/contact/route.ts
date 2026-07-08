import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, pensionType, yearAdvice, adviserFirm, pensionValue, moneyTransferred, moneyLost, message, contact } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const html = `
      <h2 style="color:#0f2035;font-family:sans-serif;">New Pension Claim Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold;width:200px">Name</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${name}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Phone</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${phone}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Email</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Preferred contact</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${contact || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Pension type</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${pensionType || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Year advice given</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${yearAdvice || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Adviser / firm</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${adviserFirm || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Pension value</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${pensionValue || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Was pension transferred?</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${moneyTransferred || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold">Financial losses?</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${moneyLost || '—'}</td></tr>
        <tr><td style="padding:8px;background:#f0f4f8;font-weight:bold;vertical-align:top">Additional details</td><td style="padding:8px">${message || '—'}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:12px;color:#666;margin-top:20px">Sent from missoldpensionclaim.co.uk enquiry form</p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Mis-Sold Pension Claim <noreply@missoldpensionclaim.co.uk>',
        to: [process.env.CONTACT_TO || 'info@edwardamaury.co.uk'],
        reply_to: email,
        subject: `New Pension Claim Enquiry — ${name}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
