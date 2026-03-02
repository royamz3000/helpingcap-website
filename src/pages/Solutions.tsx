import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight,
  CreditCard,
  TrendingUp,
  CalendarClock,
  FileText,
  Truck,
  Repeat,
  Landmark,
  CheckCircle2,
  HelpCircle,
  Phone,
} from 'lucide-react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  )
}

const solutions = [
  {
    icon: CreditCard,
    title: 'Lines of Credit',
    slug: 'lines-of-credit',
    range: '$10K – $250K',
    desc: 'Flexible revolving credit you can draw on whenever you need it. Only pay interest on what you use.',
    benefits: ['Draw funds on demand', 'Revolving — replenishes as you repay', 'Interest only on what you use'],
  },
  {
    icon: TrendingUp,
    title: 'Short-Term Loans',
    slug: 'short-term-loans',
    range: '$5K – $500K',
    desc: 'Quick capital for immediate opportunities with straightforward terms and fast funding.',
    benefits: ['Funded as fast as same day', 'Terms from 3 to 18 months', 'Simple repayment structure'],
  },
  {
    icon: CalendarClock,
    title: 'Long-Term Loans',
    slug: 'long-term-loans',
    range: '$25K – $5M',
    desc: 'Larger projects deserve patient capital. Spread payments over years, not months.',
    benefits: ['Terms up to 5 years', 'Lower monthly payments', 'Ideal for expansion & capex'],
  },
  {
    icon: FileText,
    title: 'Invoice Factoring',
    slug: 'invoice-factoring',
    range: 'Up to 95%',
    desc: 'Turn outstanding invoices into immediate cash. Stop waiting 60–90 days for customer payments.',
    benefits: ['Advance up to 95% of invoice value', 'No new debt on your balance sheet', 'Grows with your sales'],
  },
  {
    icon: Truck,
    title: 'Equipment Financing',
    slug: 'equipment-financing',
    range: '$10K – $5M',
    desc: 'Get the equipment your business needs now. The equipment itself serves as collateral.',
    benefits: ['Equipment serves as collateral', '100% financing available', 'Flexible lease or purchase'],
  },
  {
    icon: Repeat,
    title: 'Merchant Cash Advance',
    slug: 'merchant-cash-advance',
    range: '$5K – $500K',
    desc: 'Funding based on future sales. Payments flex with your revenue — easier when business slows.',
    benefits: ['No fixed monthly payment', 'Approval based on sales, not credit', 'Funds in 24–48 hours'],
  },
  {
    icon: Landmark,
    title: 'SBA Loans',
    slug: 'sba-loans',
    range: '$50K – $5M',
    desc: 'Government-backed loans with the best rates in the market. We handle the complexity.',
    benefits: ['Lowest available interest rates', 'Terms up to 25 years', 'We guide you through the SBA process'],
  },
]

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[80px] bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(32,76,229,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding py-16 sm:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-xs font-bold uppercase tracking-widest mb-4">Our Solutions</span>
            <h1 className="heading-xl text-white max-w-3xl mx-auto">
              Funding Solutions Built for <span className="text-accent-400">Real Businesses</span>
            </h1>
            <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every business is different. That's why we offer seven distinct funding products —
              so you get capital that actually fits your situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding space-y-6">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-brand-950 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <span className="text-xs font-bold text-accent-500 bg-accent-50 border border-accent-100 px-2.5 py-1 rounded-lg">{s.range}</span>
                  </div>
                  <h2 className="heading-md text-brand-900">{s.title}</h2>
                  <p className="mt-2 text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
                <div className="lg:w-72 shrink-0">
                  <ul className="space-y-2 mb-5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/solutions/${s.slug}`} className="btn-primary text-sm !py-2.5">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-950 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-accent-400" />
          </div>
          <h2 className="heading-md text-brand-900">Not sure which solution is right for you?</h2>
          <p className="mt-3 text-slate-500">Our funding specialists will help you find the perfect fit — no cost, no obligation.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/apply" className="btn-accent !text-base !px-8 !py-4">
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+18634179220" className="btn-outline !text-base">
              <Phone className="w-4 h-4" /> Call (863) 417-9220
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
