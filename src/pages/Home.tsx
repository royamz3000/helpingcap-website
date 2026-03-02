import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  Shield,
  Clock,
  Star,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  CalendarClock,
  FileText,
  Truck,
  Repeat,
  Landmark,
  ClipboardCheck,
  Search,
  Handshake,
  Banknote,
  Phone,
  Quote,
  DollarSign,
  Building2,
  Zap,
  Award,
  ShieldCheck,
  Lock,
  ChevronDown,
  Stethoscope,
  HardHat,
  Factory,
  Utensils,
  Store,
  Wrench,
  ShoppingCart,
  Users,
} from 'lucide-react'

/* ── Fade-in wrapper ─────────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Features ────────────────────────────────────────────── */
const features = [
  { icon: DollarSign, title: 'Fast Approvals', desc: 'We are known for our speed. Apply today and get a decision in hours, not weeks.' },
  { icon: Users, title: 'Expert Advisors', desc: 'Our experienced funding specialists are here to help grow your business.' },
  { icon: Zap, title: 'Same Day Funding', desc: 'We can have your funds wired to you the same day you apply.' },
]

/* ── Solutions ───────────────────────────────────────────── */
const solutions = [
  { icon: CreditCard, title: 'Lines of Credit', range: '$10K–$250K', slug: 'lines-of-credit', desc: 'Flexible revolving credit you can draw from whenever you need it.' },
  { icon: TrendingUp, title: 'Short-Term Loans', range: '$5K–$500K', slug: 'short-term-loans', desc: 'Quick capital for immediate needs with fast repayment terms.' },
  { icon: CalendarClock, title: 'Long-Term Loans', range: '$25K–$5M', slug: 'long-term-loans', desc: 'Structured financing for major investments and long-term growth.' },
  { icon: FileText, title: 'Invoice Factoring', range: 'Up to 95%', slug: 'invoice-factoring', desc: 'Turn your unpaid invoices into immediate working capital.' },
  { icon: Truck, title: 'Equipment Financing', range: '$10K–$5M', slug: 'equipment-financing', desc: 'Finance the equipment your business needs to operate and grow.' },
  { icon: Repeat, title: 'Merchant Cash Advance', range: '$5K–$500K', slug: 'merchant-cash-advance', desc: 'Advance based on future sales with flexible daily payments.' },
  { icon: Landmark, title: 'SBA Loans', range: '$50K–$5M', slug: 'sba-loans', desc: 'Government-backed loans with competitive rates and longer terms.' },
]

/* ── Steps ────────────────────────────────────────────────── */
const steps = [
  { icon: ClipboardCheck, num: '1', title: 'Apply Online', desc: 'Fill out a simple application and upload your last 3 bank statements. One of our Funding Specialists will contact you to discuss next steps.' },
  { icon: Search, num: '2', title: 'Get Reviewed', desc: 'We review your application and match you with the best funding option for your business at maximum capacity.' },
  { icon: Banknote, num: '3', title: 'Get Funded', desc: 'Accept your offer and sign. After a quick verification, you will receive a funding call and money in your account.' },
]

/* ── Industries ──────────────────────────────────────────── */
const industries = [
  { icon: HardHat, title: 'Construction', desc: 'Building projects have tight deadlines. We simplify financing so you can focus on completing your next big project.' },
  { icon: Stethoscope, title: 'Healthcare', desc: 'Patient care comes first. We offer tailored funding to help you invest in equipment and keep your practice running.' },
  { icon: Wrench, title: 'HVAC & Services', desc: 'Cash flow is critical for your business. Our funding programs help you stock up on supplies and hire technicians.' },
  { icon: Factory, title: 'Manufacturing', desc: 'Production lines and deadlines wait for no one. Get the capital to meet demand and upgrade equipment.' },
  { icon: Utensils, title: 'Restaurants', desc: 'From renovations to inventory, get the funding you need to keep your restaurant thriving and growing.' },
  { icon: Store, title: 'Retail', desc: 'Stock inventory, expand locations, and invest in marketing to grow your retail business.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Scale your online business with funding for inventory, advertising, and fulfillment operations.' },
  { icon: Building2, title: 'Real Estate', desc: 'Finance your next project, renovations, or bridge funding between transactions.' },
]

/* ── Testimonials ─────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Maria Gonzalez',
    role: 'Owner, Bella\'s Kitchen',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face',
    quote: 'I applied on Monday and had funds by Wednesday. The whole process felt personal — they actually cared about my business.',
  },
  {
    name: 'David Chen',
    role: 'Founder, TechFix Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    quote: 'After three banks turned me down, Helping Capital looked at my actual revenue and said yes. That funding let me hire two new techs.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Mitchell Logistics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    quote: 'We needed equipment financing fast. Their team walked me through every option and found the perfect fit. No pressure, just real help.',
  },
]

/* ── FAQ ──────────────────────────────────────────────────── */
const faqs = [
  { q: 'What is Helping Capital?', a: 'Helping Capital simplifies business funding. We help business owners across all industries select the best financing solution to grow their business.' },
  { q: 'How does Helping Capital work?', a: 'We provide working capital through a simple online application. A dedicated Funding Specialist guides you through review, approval, and funding — start to finish.' },
  { q: 'How can I apply?', a: 'Apply online in under 5 minutes. Just fill out a quick application and our team will contact you to discuss your options.' },
  { q: 'How long does it take to be approved?', a: 'Most applications are approved within hours. We specialize in fast turnaround times so you can focus on running your business.' },
  { q: 'Is my business eligible?', a: 'Eligibility typically requires at least 6 months in business and $15,000 in monthly revenue. We work with businesses across all industries.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`mb-3 rounded-2xl border transition-all duration-200 ${open ? 'bg-cream-50 border-slate-200 shadow-card' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="font-display font-bold text-brand-900 pr-4 text-[15px]">{q}</span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${open ? 'bg-accent-500 text-white rotate-45' : 'bg-brand-950 text-white'}`}>
          <span className="text-sm leading-none font-bold">+</span>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-slate-500 leading-relaxed text-[15px]">{a}</p>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-[80px] overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        {/* Decorative gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(32,76,229,0.18),transparent)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-500/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-600/[0.1] rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto section-padding py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                Same Day Business Funding
              </span>

              <h1 className="heading-xl text-white">
                Need Funds{' '}
                <span className="text-accent-500">Quickly?</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed">
                Access <span className="text-white font-semibold">$5,000 to $5,000,000</span> in Working Capital
              </p>

              {/* Inline form */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm">$</span>
                  <input
                    type="text"
                    placeholder="How much money do you need?"
                    className="w-full pl-9 pr-4 py-4 bg-white/[0.08] backdrop-blur border border-white/[0.12] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/30 transition-all"
                  />
                </div>
                <Link
                  to="/apply"
                  className="btn-accent !py-4 !px-8 !text-base !rounded-xl whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>

              {/* Bullet points */}
              <div className="mt-8 space-y-2.5">
                {[
                  'Easy Online Application',
                  'Secure Hassle-Free Working Capital',
                  'No Hard Credit Check Required',
                  'Same Day Funding',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] px-4 py-2.5 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-accent-400" />
                  <div>
                    <div className="text-white text-xs font-bold">BBB Rating A+</div>
                    <div className="text-slate-500 text-[10px]">Accredited Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] px-4 py-2.5 rounded-xl">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-white text-xs font-bold">SSL Secured</div>
                    <div className="text-slate-500 text-[10px]">256-bit encryption</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] px-4 py-2.5 rounded-xl">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400/40'}`} />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">4.9</span>
                </div>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Pattern frame behind image */}
              <div className="absolute -inset-4 lg:-inset-6 rounded-3xl opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-accent-500/30 rounded-tr-3xl" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-accent-500/30 rounded-bl-3xl" />

              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/team-handshake.png"
                  alt="Team partnership"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[520px] object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-2 lg:-left-6 bg-white/[0.95] backdrop-blur-xl rounded-2xl p-4 lg:p-5 shadow-glass-lg border border-white/50">
                <div className="text-2xl lg:text-3xl font-display font-extrabold text-brand-900">90%</div>
                <div className="font-bold text-brand-900 text-xs lg:text-sm">Customer Renewals</div>
                <p className="text-[10px] lg:text-xs text-slate-500 mt-1 max-w-[160px] lg:max-w-[180px]">Over 60% of our eligible customers secure additional funding from us.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center mb-12">
            <span className="pill-label">Features</span>
            <h2 className="heading-lg text-brand-900 mt-4">Why Choose Helping Capital</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center h-full border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-5">
                    <f.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / WHO WE ARE ────────────────────────────── */}
      <section className="section-py bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-glass">
                  <img
                    src="/hero-handshake.png"
                    alt="Business handshake"
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating referral card */}
                <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-glass-lg border border-white/50">
                  <div className="text-3xl font-display font-extrabold text-brand-900">22%</div>
                  <div className="font-bold text-brand-900 text-sm">Customer Referrals</div>
                  <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Word of mouth is a big part of our business. It speaks volumes about how much customers value our services.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="pill-label">Who We Are</span>
              <h2 className="heading-lg text-brand-900 mt-4">
                Direct Funders, Fast & Simple
              </h2>
              <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                Helping Capital is a leader in same-day funding. We are a direct funder providing
                working capital to businesses all across America. We value your time and money —
                95% of our clients are funded within 48 hours.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We offer all of our funding on an unsecured basis. This is how we're able to lead
                the industry in funding speed and specialize in fast turnaround business financing
                for qualified applicants.
              </p>
              <Link to="/about" className="btn-primary mt-8">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS / PROCESS ──────────────────────── */}
      <section id="process" className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill-label">How It Works</span>
            <h2 className="heading-lg text-brand-900 mt-4">
              3 Simple Steps to Get Funded
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              We stripped away every unnecessary step. What used to take months now takes as little as one day.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-accent-200 via-accent-300 to-accent-200" />
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-brand-950 flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="font-display font-extrabold text-2xl text-accent-400">{s.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link to="/apply" className="btn-accent !text-base !px-10 !py-4">
              Start Your Application <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="section-py bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill-label">Industries</span>
            <h2 className="heading-lg text-brand-900 mt-4">
              Industries We Serve
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              We fund businesses across virtually every industry. Here are some of the sectors we specialize in.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-50 transition-colors">
                    <ind.icon className="w-5 h-5 text-brand-900 group-hover:text-accent-500 transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-brand-900 text-[15px] mb-2">{ind.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES / SOLUTIONS ─────────────────────────── */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill-label">Our Services</span>
            <h2 className="heading-lg text-brand-900 mt-4">
              These Are Some of The Services We Offer
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="bg-white rounded-2xl border border-slate-100 p-6 h-full flex flex-col text-center group shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-950 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-brand-900 text-[15px] mb-1">{s.title}</h3>
                  <span className="text-xs font-bold text-accent-500 mb-2">{s.range}</span>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>
                  <span className="mt-3 text-sm font-semibold text-accent-500 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <Link to="/solutions" className="btn-accent !px-10 !py-4 !text-base">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="max-w-3xl mx-auto section-padding">
          <Reveal className="text-center mb-12">
            <span className="pill-label">Frequently Asked Questions</span>
            <h2 className="heading-lg text-brand-900 mt-4">You have Questions, We have Answers</h2>
          </Reveal>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <Reveal className="text-center mt-8">
            <Link to="/about#faq" className="btn-outline-light">
              View More <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS / REVIEWS ─────────────────────────── */}
      <section id="testimonials" className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="pill-label">Reviews</span>
            <h2 className="heading-lg text-brand-900 mt-4">
              What Our Clients Say
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-accent-200 mb-2" />
                  <p className="text-slate-600 leading-relaxed flex-1 text-[15px]">{t.quote}</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100/80">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-cream-200"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-brand-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="relative py-20 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(255,90,0,0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <h2 className="heading-lg text-white">
                Ready to Fuel Your <span className="text-accent-400">Business Growth?</span>
              </h2>
              <p className="mt-5 text-slate-400 text-lg leading-relaxed">
                Join thousands of business owners who stopped waiting and started growing.
                Your free, no-obligation quote is just minutes away.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'No obligation — completely free',
                  'Soft credit check won\'t affect your score',
                  'Same-day decisions on most applications',
                  'Dedicated funding specialist assigned to you',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-300 text-[15px]">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-accent-400" />
                Prefer to talk?{' '}
                <a href="tel:+18634179220" className="text-white font-semibold hover:text-accent-400 transition-colors">
                  (863) 417-9220
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card p-8">
                <h3 className="font-display font-bold text-xl text-white mb-1">Get Your Free Quote</h3>
                <p className="text-slate-500 text-sm mb-6">Takes less than 5 minutes. No commitment.</p>
                <form
                  className="space-y-3"
                  onSubmit={(e) => { e.preventDefault(); window.location.href = '/apply' }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="First Name" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all" />
                    <input type="text" placeholder="Last Name" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all" />
                  </div>
                  <input type="email" placeholder="Business Email" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all" />
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all" />
                  <select required defaultValue="" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all [&>option]:text-slate-900">
                    <option value="" disabled>How much funding do you need?</option>
                    <option>$5,000 – $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000 – $250,000</option>
                    <option>$250,000 – $500,000</option>
                    <option>$500,000+</option>
                  </select>
                  <button type="submit" className="btn-accent w-full !py-3.5 mt-1">
                    Get My Free Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
