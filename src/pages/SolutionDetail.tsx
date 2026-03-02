import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  TrendingUp,
  CalendarClock,
  FileText,
  Truck,
  Repeat,
  Landmark,
  Phone,
  ClipboardCheck,
  Search,
  Handshake,
  Banknote,
  ChevronDown,
  Users,
  ListChecks,
  MessageCircleQuestion,
} from 'lucide-react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="font-semibold text-brand-900 group-hover:text-brand-900 transition-colors pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
        <p className="pb-5 text-slate-500 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  )
}

/* ── Solution Data ────────────────────────────────────────── */

interface SolutionData {
  icon: typeof CreditCard
  title: string
  range: string
  tagline: string
  description: string
  idealFor: string
  benefits: string[]
  requirements: string[]
  image: string
  steps: { icon: typeof ClipboardCheck; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

const data: Record<string, SolutionData> = {
  'lines-of-credit': {
    icon: CreditCard,
    title: 'Lines of Credit',
    range: '$10K – $250K',
    tagline: 'Flexible capital on demand.',
    description: 'A business line of credit gives you access to a revolving pool of capital. Draw what you need, when you need it — and only pay interest on the amount you use. As you repay, your available credit replenishes automatically. Perfect for managing cash flow, covering payroll, or seizing time-sensitive opportunities.',
    idealFor: 'Business owners who need flexible, ongoing access to capital for managing cash flow, covering seasonal dips, handling unexpected expenses, or taking advantage of time-sensitive opportunities without applying for a new loan each time.',
    benefits: [
      'Draw funds on demand — use only what you need',
      'Revolving credit that replenishes as you repay',
      'Interest charged only on the outstanding balance',
      'No collateral required for most applicants',
      'Decisions in as little as 24 hours',
      'Build business credit history',
    ],
    requirements: [
      '6+ months in business',
      '$15,000+ monthly revenue',
      'Active business bank account',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Submit a Quick Application', desc: 'Tell us about your business and how much credit you need. It takes under 5 minutes online.' },
      { icon: Search, title: 'We Assess Your Business', desc: 'Our team reviews your revenue history and cash flow to determine your credit limit — no hard credit pull.' },
      { icon: Handshake, title: 'Receive Your Credit Offer', desc: 'Get a clear offer showing your approved limit, draw rate, and repayment terms. No hidden fees.' },
      { icon: Banknote, title: 'Draw Funds Anytime', desc: 'Once approved, draw from your credit line whenever you need it. Funds hit your account the same day.' },
    ],
    faqs: [
      { q: 'How is a line of credit different from a loan?', a: 'A loan gives you a lump sum upfront that you repay on a fixed schedule. A line of credit is revolving — you draw what you need, repay it, and the credit becomes available again. You only pay interest on what you actually use.' },
      { q: 'What can I use the funds for?', a: 'Anything your business needs — payroll, inventory, marketing, equipment repairs, bridging gaps between receivables, or covering unexpected expenses. There are no restrictions.' },
      { q: 'Will applying affect my credit score?', a: 'No. We perform a soft credit pull during the initial review, which has zero impact on your credit score. A hard pull only happens if you accept a formal offer.' },
      { q: 'How quickly can I access funds after approval?', a: 'Once your line of credit is set up, you can draw funds on demand. Most draws are deposited into your business account the same business day.' },
      { q: 'Is there a minimum draw amount?', a: 'Minimum draw amounts vary but are typically $500–$1,000. You can draw as often as you need, up to your approved limit.' },
      { q: 'What happens if I don\'t use the full credit line?', a: 'Nothing — you only pay interest on what you draw. Your unused credit remains available at no cost until you need it.' },
    ],
  },
  'short-term-loans': {
    icon: TrendingUp,
    title: 'Short-Term Loans',
    range: '$5K – $500K',
    tagline: 'Fast capital for immediate needs.',
    description: 'When opportunity knocks, you need capital fast. Short-term loans provide a lump sum with clear, straightforward terms — typically 3 to 18 months. Ideal for inventory purchases, seasonal cash gaps, or time-sensitive investments that will pay for themselves quickly.',
    idealFor: 'Business owners facing a time-sensitive opportunity or short-term cash need — whether it\'s stocking up on inventory before peak season, funding a marketing push, covering a gap between receivables, or handling an unexpected expense.',
    benefits: [
      'Funded as fast as the same day',
      'Terms from 3 to 18 months',
      'Simple, predictable repayment schedule',
      'No collateral required for many applicants',
      'Higher approval rates than traditional banks',
      'Use funds for any business purpose',
    ],
    requirements: [
      '6+ months in business',
      '$15,000+ monthly revenue',
      'Active business bank account',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Complete the Online Application', desc: 'Answer a few questions about your business, revenue, and funding needs. Takes under 5 minutes.' },
      { icon: Search, title: 'Fast Review Process', desc: 'Our underwriting team reviews your application and bank statements. Most decisions come back within hours, not weeks.' },
      { icon: Handshake, title: 'Review Your Offer', desc: 'Receive a transparent offer with your loan amount, repayment term, and total cost clearly laid out. No surprises.' },
      { icon: Banknote, title: 'Get Funded Today', desc: 'Accept your offer and funds are wired directly to your business account — often the same business day.' },
    ],
    faqs: [
      { q: 'How fast can I actually get funded?', a: 'Most short-term loans are funded within 24 hours of approval. In many cases, if you apply in the morning and are approved, funds arrive the same business day.' },
      { q: 'What is the typical repayment schedule?', a: 'Repayment is typically made through daily or weekly automatic debits from your business bank account. This spreads the cost evenly and makes budgeting predictable.' },
      { q: 'Do I need collateral?', a: 'Most short-term loans from Helping Capital are unsecured, meaning no collateral is required. Approval is primarily based on your business revenue and cash flow history.' },
      { q: 'Can I pay off the loan early?', a: 'Yes. Most of our short-term loan products allow early payoff, and many come with a discount if you pay ahead of schedule. Ask your Funding Specialist for details on your specific offer.' },
      { q: 'What credit score do I need?', a: 'We look at the full picture, not just your credit score. Many of our clients have been approved with scores in the 500s. Revenue, time in business, and cash flow matter more than a perfect FICO score.' },
    ],
  },
  'long-term-loans': {
    icon: CalendarClock,
    title: 'Long-Term Loans',
    range: '$25K – $5M',
    tagline: 'Patient capital for big ambitions.',
    description: 'Major growth initiatives require capital that works on your timeline. Long-term loans spread repayment over 1 to 5 years, keeping monthly payments manageable while you invest in expansion, acquisitions, real estate, or large equipment purchases.',
    idealFor: 'Established businesses with a strong track record that need significant capital for expansion, real estate, major equipment, acquisitions, or other large-scale investments where spreading payments over years makes financial sense.',
    benefits: [
      'Repayment terms up to 5 years',
      'Lower monthly payments',
      'Fixed or variable rate options',
      'Ideal for expansion, acquisitions, or real estate',
      'Larger funding amounts available',
      'Build long-term business credit',
    ],
    requirements: [
      '12+ months in business',
      '$25,000+ monthly revenue',
      'Solid business financials',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Start Your Application', desc: 'Provide details about your business history, financials, and what you plan to use the funds for.' },
      { icon: Search, title: 'In-Depth Review', desc: 'Our team performs a thorough analysis of your financials, credit, and business plan to structure the best possible terms.' },
      { icon: Handshake, title: 'Customized Offer', desc: 'Receive a tailored loan offer with your amount, interest rate, repayment term, and monthly payment clearly detailed.' },
      { icon: Banknote, title: 'Close & Fund', desc: 'Review and sign your agreement. Funds are deposited into your account, typically within 3–5 business days.' },
    ],
    faqs: [
      { q: 'What can long-term loans be used for?', a: 'Common uses include business expansion, commercial real estate, major equipment purchases, acquisitions, franchise fees, large inventory orders, and debt consolidation. Essentially, any significant business investment.' },
      { q: 'How do repayment terms work?', a: 'You make fixed monthly payments over the agreed term (1–5 years). This gives you predictability for budgeting, unlike products with daily or weekly payments.' },
      { q: 'Is collateral required?', a: 'It depends on the loan size and your business profile. Larger loans may require collateral such as real estate, equipment, or a personal guarantee. Your Funding Specialist will discuss options upfront.' },
      { q: 'How long does approval take?', a: 'Long-term loans involve a more thorough review. Expect a decision within 3–7 business days, depending on the complexity of your application and the documentation provided.' },
      { q: 'Can I refinance later if rates drop?', a: 'Yes. Many of our long-term loan clients refinance when better terms become available. We actively monitor your account and will reach out if we can improve your terms.' },
    ],
  },
  'invoice-factoring': {
    icon: FileText,
    title: 'Invoice Factoring',
    range: 'Up to 95% of invoice value',
    tagline: 'Turn invoices into instant cash.',
    description: 'Stop waiting 30, 60, or 90 days for customers to pay. Invoice factoring lets you sell your outstanding invoices and receive up to 95% of the value immediately. It\'s not a loan — it\'s an advance on money you\'ve already earned.',
    idealFor: 'B2B businesses that invoice clients on net-30, net-60, or net-90 terms and need to bridge the gap between delivering services and receiving payment. Especially valuable for staffing firms, trucking companies, manufacturers, and professional services.',
    benefits: [
      'Receive up to 95% of invoice value upfront',
      'Not a loan — doesn\'t add debt to your balance sheet',
      'Grows naturally with your sales volume',
      'No long-term contracts required',
      'We handle collections on factored invoices',
      'Ideal for B2B businesses with net terms',
    ],
    requirements: [
      'B2B business with outstanding invoices',
      'Creditworthy customers',
      'Invoices free of liens',
    ],
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Submit Your Invoices', desc: 'Tell us about your business and share the outstanding invoices you\'d like to factor. We handle the rest.' },
      { icon: Search, title: 'We Verify Your Invoices', desc: 'Our team verifies the invoices and assesses the creditworthiness of your customers — not your credit.' },
      { icon: Handshake, title: 'Get Your Advance', desc: 'Receive up to 95% of the invoice value deposited directly into your account, typically within 24 hours.' },
      { icon: Banknote, title: 'Collect the Balance', desc: 'When your customer pays, we release the remaining balance minus a small factoring fee. Simple and transparent.' },
    ],
    faqs: [
      { q: 'Is invoice factoring a loan?', a: 'No. Factoring is the sale of your accounts receivable at a discount. It doesn\'t create debt on your balance sheet and doesn\'t require monthly repayments — your customers\' payments settle the advance.' },
      { q: 'Do my customers know I\'m factoring?', a: 'In most cases, your customers will be notified to send payment to a new address. However, the process is handled professionally and is extremely common in B2B industries. Many large companies work with factored vendors daily.' },
      { q: 'What if my customer pays late?', a: 'Depending on the type of factoring agreement (recourse vs. non-recourse), the risk of late payment may be shared. Your Funding Specialist will explain the options and help you choose the right structure.' },
      { q: 'How much does factoring cost?', a: 'Factoring fees typically range from 1–5% of the invoice value, depending on your volume, your customers\' creditworthiness, and how quickly they pay. The faster they pay, the lower the fee.' },
      { q: 'Can I factor just some of my invoices?', a: 'Yes. You can choose which invoices to factor. There\'s no requirement to factor your entire accounts receivable. You stay in control.' },
    ],
  },
  'equipment-financing': {
    icon: Truck,
    title: 'Equipment Financing',
    range: '$10K – $5M',
    tagline: 'Get the tools your business needs.',
    description: 'Don\'t let equipment costs hold your business back. Equipment financing lets you acquire machinery, vehicles, technology, or any business equipment with the equipment itself serving as collateral — keeping your cash reserves intact.',
    idealFor: 'Businesses that need to purchase or lease equipment — from construction machinery and commercial vehicles to restaurant ovens, medical devices, IT infrastructure, and manufacturing tools. If it\'s equipment your business uses, we can finance it.',
    benefits: [
      'Equipment serves as collateral — no additional assets needed',
      'Up to 100% financing available',
      'Flexible lease or purchase options',
      'Fixed payments for easy budgeting',
      'Tax advantages (Section 179 deduction)',
      'New and used equipment eligible',
    ],
    requirements: [
      '6+ months in business',
      '$10,000+ monthly revenue',
      'Equipment quote or invoice from vendor',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Tell Us What You Need', desc: 'Share details about the equipment you want to purchase or lease, along with a vendor quote or invoice.' },
      { icon: Search, title: 'Quick Equipment Assessment', desc: 'We evaluate the equipment value and your business profile. Since the equipment is collateral, approvals are often faster.' },
      { icon: Handshake, title: 'Choose Lease or Purchase', desc: 'Receive a tailored offer with lease or purchase options, payment terms, and any applicable tax benefits clearly outlined.' },
      { icon: Banknote, title: 'Get Your Equipment', desc: 'Once approved, we pay the vendor directly and you receive your equipment. Start using it in your business immediately.' },
    ],
    faqs: [
      { q: 'Can I finance used equipment?', a: 'Yes. We finance both new and used equipment. Used equipment may have slightly different terms, but it\'s absolutely eligible. Provide us the vendor details and we\'ll work up an offer.' },
      { q: 'What types of equipment qualify?', a: 'Nearly any tangible business asset — construction equipment, vehicles, restaurant equipment, medical devices, manufacturing machinery, IT hardware, point-of-sale systems, and more. If it\'s used in your business, it likely qualifies.' },
      { q: 'Should I lease or buy?', a: 'It depends on your situation. Leasing offers lower monthly payments and the ability to upgrade frequently. Purchasing builds equity and may offer tax advantages through Section 179. Your Funding Specialist can help you decide.' },
      { q: 'How much of a down payment do I need?', a: 'Many of our equipment financing options require zero down payment. In some cases, a small down payment (10–20%) may be required for higher-risk profiles or specialty equipment.' },
      { q: 'What is the Section 179 tax deduction?', a: 'Section 179 allows businesses to deduct the full purchase price of qualifying equipment purchased or leased during the tax year, rather than depreciating it over time. Consult your tax advisor for specifics.' },
    ],
  },
  'merchant-cash-advance': {
    icon: Repeat,
    title: 'Merchant Cash Advance',
    range: '$5K – $500K',
    tagline: 'Funding that flexes with your revenue.',
    description: 'A merchant cash advance provides a lump sum of capital in exchange for a percentage of your future sales. Payments adjust automatically with your revenue — when business is slow, you pay less. When it\'s booming, you pay it down faster.',
    idealFor: 'Businesses with strong daily sales volume — restaurants, retail stores, e-commerce shops, salons, auto repair shops, and any business that processes consistent credit card or bank transactions. Especially valuable when you need fast funding without rigid payment schedules.',
    benefits: [
      'No fixed monthly payment — adjusts with sales',
      'Approval based on revenue, not credit score',
      'Funds deposited in 24–48 hours',
      'No collateral required',
      'Use for any business purpose',
      'High approval rates',
    ],
    requirements: [
      '6+ months in business',
      '$15,000+ monthly revenue',
      'Consistent credit card or bank deposits',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Apply in Minutes', desc: 'Complete our short online application and provide your last 3 months of bank statements. That\'s all we need.' },
      { icon: Search, title: 'Revenue-Based Review', desc: 'We analyze your daily sales and deposit history — not your credit score. High revenue means high approval odds.' },
      { icon: Handshake, title: 'Accept Your Advance', desc: 'Receive a clear offer showing your advance amount, factor rate, and holdback percentage. No hidden costs.' },
      { icon: Banknote, title: 'Funds in 24–48 Hours', desc: 'Once you accept, the full advance amount lands in your business account within 1–2 business days.' },
    ],
    faqs: [
      { q: 'How does repayment work?', a: 'A small, fixed percentage of your daily sales (called the "holdback") is automatically collected. On slow days you pay less; on busy days you pay more. There\'s no fixed monthly bill to worry about.' },
      { q: 'Is a merchant cash advance a loan?', a: 'Technically, no. An MCA is a purchase of your future receivables at a discount. This distinction means MCAs have different regulations than traditional loans and can often be funded faster with fewer requirements.' },
      { q: 'What is a factor rate?', a: 'Instead of an interest rate, MCAs use a factor rate (e.g., 1.2 to 1.5). If you receive a $100,000 advance at a factor rate of 1.3, you\'d repay $130,000 total. Your Funding Specialist will explain your specific rate.' },
      { q: 'Do I need good credit?', a: 'Credit score is not the primary factor. Approval is based mainly on your business\'s revenue and deposit history. Many MCA clients have credit scores below 600.' },
      { q: 'Can I get a second advance?', a: 'Yes. Once you\'ve repaid a certain percentage of your first advance (usually 50–60%), you may qualify for a renewal or second advance, often at improved terms.' },
    ],
  },
  'sba-loans': {
    icon: Landmark,
    title: 'SBA Loans',
    range: '$50K – $5M',
    tagline: 'The gold standard in business lending.',
    description: 'SBA loans are government-backed loans that offer the most competitive rates and longest terms available. The application process can be complex — but our team handles the heavy lifting, guiding you through every step to maximize your approval chances.',
    idealFor: 'Established businesses with strong financials who want the lowest possible rates and longest repayment terms. Ideal for major investments like commercial real estate, large-scale expansion, franchise purchases, or debt consolidation where long-term affordability is the priority.',
    benefits: [
      'Lowest interest rates in the market',
      'Repayment terms up to 25 years',
      'Backed by the U.S. Small Business Administration',
      'Lower down payment requirements',
      'We guide you through the entire SBA process',
      'Multiple SBA programs available (7(a), 504, Microloans)',
    ],
    requirements: [
      '2+ years in business (preferred)',
      'Good personal credit (680+)',
      'Profitable or near-profitable',
      'Detailed business financials',
    ],
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=700&h=500&fit=crop',
    steps: [
      { icon: ClipboardCheck, title: 'Initial Consultation', desc: 'Speak with a Funding Specialist who will assess your eligibility, help you choose the right SBA program, and outline what documentation is needed.' },
      { icon: Search, title: 'Document Preparation', desc: 'We help you assemble the required documents — tax returns, financial statements, business plan, and SBA forms. Our team reviews everything before submission.' },
      { icon: Handshake, title: 'SBA Underwriting', desc: 'Your application goes through SBA underwriting. We work directly with the SBA on your behalf and keep you informed at every step.' },
      { icon: Banknote, title: 'Approval & Funding', desc: 'Once approved, funds are disbursed according to your loan structure. SBA loans typically close within 30–60 days from application.' },
    ],
    faqs: [
      { q: 'What SBA loan programs are available?', a: 'The most common are: SBA 7(a) for general business purposes (up to $5M), SBA 504 for real estate and large equipment (up to $5.5M), and SBA Microloans for smaller needs (up to $50K). We\'ll help you determine which program fits best.' },
      { q: 'Why are SBA loan rates so low?', a: 'Because the SBA guarantees a portion of the loan (up to 85%), the lender\'s risk is significantly reduced. This allows them to offer lower interest rates and longer terms than conventional loans.' },
      { q: 'How long does the SBA loan process take?', a: 'SBA loans are more thorough than other products. Expect 30–60 days from application to funding, depending on your documentation readiness and the loan amount. Our team works to keep the timeline as short as possible.' },
      { q: 'What if my business is newer than 2 years?', a: 'While 2+ years is preferred, newer businesses with strong financials and a solid business plan can still be eligible, especially for SBA Microloans. Talk to us — we\'ll assess your situation honestly.' },
      { q: 'Is a down payment required?', a: 'SBA loans typically require a 10–20% down payment for real estate purchases. For working capital and other uses, down payment requirements vary. SBA loans generally require less down than conventional loans.' },
      { q: 'Do I need a business plan?', a: 'For most SBA loans, yes. A business plan demonstrates to the SBA that you have a clear strategy for using the funds and repaying the loan. Our team can guide you on what to include.' },
    ],
  },
}

/* ── Component ────────────────────────────────────────────── */

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const solution = slug ? data[slug] : undefined
  if (!solution) return <Navigate to="/solutions" replace />

  const Icon = solution.icon

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[80px] bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(32,76,229,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding py-16 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/solutions" className="text-sm text-slate-500 hover:text-white transition-colors mb-4 inline-block">
              ← All Solutions
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent-400" />
              </div>
              <span className="text-sm font-bold text-accent-400 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-lg">{solution.range}</span>
            </div>
            <h1 className="heading-xl text-white">{solution.title}</h1>
            <p className="mt-3 text-xl text-slate-400">{solution.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview + Benefits */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-80 lg:h-[420px] object-cover rounded-2xl"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-md text-brand-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{solution.description}</p>

              <h3 className="font-display font-bold text-lg text-brand-900 mt-8 mb-3">Key Benefits</h3>
              <ul className="space-y-2.5">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ideal For + Requirements */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-7 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-900">Who Is This For?</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{solution.idealFor}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-7 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
                    <ListChecks className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-900">Basic Requirements</h3>
                </div>
                <ul className="space-y-2.5">
                  {solution.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="relative section-py bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(255,90,0,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-xs font-bold uppercase tracking-widest mb-3">How to Apply</span>
            <h2 className="heading-lg text-white">
              Your Path to {solution.title}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solution.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <span className="font-display font-bold text-slate-600 text-xl">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <Link to="/apply" className="btn-accent !text-base !px-8 !py-4">
              Start Your Application <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <Reveal className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-4">
              <MessageCircleQuestion className="w-6 h-6 text-accent-500" />
            </div>
            <span className="pill-label mb-3">{solution.title} FAQ</span>
            <h2 className="heading-lg text-brand-900">Common Questions</h2>
          </Reveal>
          <div>
            {solution.faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(255,90,0,0.06),transparent)]" />
        <div className="relative max-w-3xl mx-auto section-padding text-center">
          <h2 className="heading-md text-white">
            Ready to apply for {solution.title}?
          </h2>
          <p className="mt-3 text-slate-400">Get a decision as fast as the same day — no obligation.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="btn-accent !text-base !px-8 !py-4">
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+18634179220" className="btn-outline !border-white/20 !text-white hover:!bg-white/10 !text-base">
              <Phone className="w-4 h-4" /> Call (863) 417-9220
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
