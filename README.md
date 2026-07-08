# Mis-Sold Pension Claim — missoldpensionclaim.co.uk

A professional UK solicitor-led pension mis-selling claims website built with Next.js 16, TypeScript and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16.2.9 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-based config in `app/globals.css`)
- **Components:** React Server Components with selective Client Components
- **Icons:** Lucide React

## Getting Started

### Development

```bash
npm install
npm run dev -- --webpack   # Use --webpack flag (Turbopack has a dev compile hang)
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                                          # Homepage
├── layout.tsx                                        # Root layout
├── globals.css                                       # Tailwind v4 config + global styles
├── sitemap.ts                                        # Auto sitemap.xml
├── robots.ts                                         # Auto robots.txt
├── mis-sold-pension-claims/page.tsx
├── mis-sold-sipp-claims/page.tsx
├── defined-benefit-pension-transfer-claims/page.tsx
├── final-salary-pension-claims/page.tsx
├── bad-pension-advice-claims/page.tsx
├── pension-transfer-claims/page.tsx
├── high-risk-pension-investment-claims/page.tsx
├── how-do-i-know-if-my-pension-was-mis-sold/page.tsx
├── mis-sold-pension-compensation-calculator/page.tsx
├── fscs-pension-claims/page.tsx
├── financial-ombudsman-pension-complaints/page.tsx
├── time-limits-mis-sold-pension-claims/page.tsx
├── pension-claim-process/page.tsx
├── faqs/page.tsx                                     # 40+ FAQs
├── about/page.tsx
├── contact/page.tsx
├── complaints-procedure/page.tsx
├── privacy-policy/page.tsx
├── terms/page.tsx
└── cookie-policy/page.tsx

components/
├── Header.tsx        # Sticky nav, dropdown, mobile menu
├── Footer.tsx        # Full footer with CTA strip, regulatory footer
├── ContactForm.tsx   # Full enquiry form + compact version
├── TrustStrip.tsx    # 5 trust signals
├── Breadcrumb.tsx    # Breadcrumb nav
├── FAQAccordion.tsx  # Accessible FAQ accordion
├── CookieBanner.tsx  # GDPR cookie consent
├── PageCTA.tsx       # Dark blue CTA section
└── Schema.tsx        # JSON-LD: Organization, Breadcrumb, FAQ, WebPage

lib/
└── metadata.ts       # siteConfig (firm details), buildMetadata helper
```

## Firm Details

- **Firm:** Edward & Amaury Limited trading as Edward & Amaury Solicitors
- **SRA Number:** 800525
- **Address:** Pacific House, Fletcher Way, Parkhouse, Carlisle, CA3 0LJ
- **Phone:** 01228 272395
- **Email:** info@edwardamaury.co.uk
- **Complaints (COLP):** Mr Nadeem Pervaz — nadeem@edwardamaury.co.uk

To update firm details, edit `lib/metadata.ts` → `siteConfig`.

## SEO Features

- Unique meta title + description on every page
- Canonical tags throughout
- Open Graph + Twitter Card meta tags
- JSON-LD schema: Organization/LegalService, BreadcrumbList, FAQPage, WebPage
- Auto-generated sitemap.xml and robots.txt
- 40+ FAQ schema entries
- Internal linking across all pages
- Semantic HTML, H1/H2/H3 structure

## Compliance

- SRA regulatory footer on every page
- No compensation guarantees anywhere
- FOS and FSCS direct routes mentioned prominently
- Standard disclaimer on every page
- Complaints procedure page (with COLP contact, Legal Ombudsman, SRA details)
- Privacy policy, cookie policy, terms of use
- Cookie consent banner

## Editing Content

| What | Where |
|------|-------|
| Firm details | `lib/metadata.ts` |
| Page content | `app/[page]/page.tsx` |
| Nav links | `components/Header.tsx` |
| Footer links | `components/Footer.tsx` |
| Contact form | `components/ContactForm.tsx` |
| Colours | `app/globals.css` → `@theme` block |

## Important Before Launch

1. **Contact form:** Currently uses a local state mock. Wire up to a real endpoint (Formspree, EmailJS, or `app/api/contact/route.ts`).
2. **Domain URL:** Update `siteConfig.url` in `lib/metadata.ts` once DNS resolves.
3. **GSC:** Add Google Search Console verification tag to `app/layout.tsx`.
4. **Images:** Add real photography. Place in `public/images/`. Use descriptive alt text.

## Deployment

Deploy to Vercel (recommended), Netlify or any Node.js host.

**Vercel:** Push to GitHub → connect repo → build command `npm run build`, output `.next`.
