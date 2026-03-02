import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  Shield,
  Users,
  Target,
  TrendingUp,
  ChevronDown,
  Phone,
  Zap,
  Eye,
  HeartHandshake,
  DoorOpen,
  MessageCircleQuestion,
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

const stats = [
  { icon: TrendingUp, value: '$5B+', label: 'Total Funded' },
  { icon: Users, value: '50,000+', label: 'Businesses Served' },
  { icon: Target, value: 'Same Day', label: 'Decision Speed' },
  { icon: Shield, value: 'A+', label: 'BBB Rating' },
]

const values = [
  { icon: Zap, title: 'Speed', desc: 'We know time is money. That\'s why most applications get a decision the same day.' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden fees, no fine-print surprises. We lay every detail on the table upfront.' },
  { icon: HeartHandshake, title: 'Partnership', desc: 'We\'re not just a lender — we\'re a long-term partner in your business growth.' },
  { icon: DoorOpen, title: 'Accessibility', desc: 'We believe every business deserves access to capital, regardless of credit perfection.' },
]

const faqs = [
  { q: 'What is Helping Capital?', a: 'We\'re a direct lender in the business of making funding easy. Our team helps business owners from all industries find the right financing options to fuel growth.' },
  { q: 'How does Helping Capital work?', a: 'We provide a one-stop solution through a simple online application process. A dedicated Funding Specialist guides you through review, approval, and funding — start to finish.' },
  { q: 'How do I apply?', a: 'Apply online in minutes without impacting your credit score. Just answer a few basic questions about you and your business, and our team takes it from there.' },
  { q: 'How long does it take to be approved?', a: 'Approval decisions are typically made within a few hours after applying, so you can focus on running your business.' },
  { q: 'How quickly can I get my funds?', a: 'In most cases, funds are deposited into your business bank account within 24 hours after approval.' },
  { q: 'Will exploring my options impact my credit score?', a: 'No. We only perform a soft credit pull during the initial review, which does not affect your credit score.' },
  { q: 'Is my business eligible?', a: 'Eligibility typically requires at least 6 months in business and $15,000 in monthly revenue (or $180,000 annually).' },
  { q: 'Which documents are required?', a: 'You\'ll need your last three months of business bank statements, a valid ID, and basic business details. That\'s it.' },
  { q: 'How long is the financing period?', a: 'Repayment terms typically range from a few months to up to 5 years, depending on your financing option.' },
  { q: 'Can I pay off my financing early?', a: 'Yes. Most of our funding options allow early payoff with no extra fees or prepayment penalties.' },
  { q: 'How secure is my information?', a: 'We use industry-standard SSL encryption and secure integrations to keep your information safe throughout the entire funding process.' },
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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[80px] bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(32,76,229,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding py-16 sm:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] border border-white/[0.1] rounded-full text-white/80 text-xs font-bold uppercase tracking-widest">About Us</span>
            <h1 className="heading-xl text-white max-w-3xl mx-auto mt-5">
              We're Not a Bank.{' '}
              <span className="text-accent-400">We're Your Funding Partner.</span>
            </h1>
            <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Helping Capital was built on a simple belief: every small business deserves
              access to the capital it needs to grow — without the run-around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                <img src="/hero-handshake.png" alt="Business meeting" className="w-full h-60 object-cover rounded-2xl" loading="lazy" />
                <img src="/meeting-clients.png" alt="Meeting with clients" className="w-full h-60 object-cover rounded-2xl mt-8" loading="lazy" />
                <img src="/team-handshake.png" alt="Team partnership" className="w-full h-60 object-cover rounded-2xl" loading="lazy" />
                <img src="/business-deal.png" alt="Business deal" className="w-full h-60 object-cover rounded-2xl mt-8" loading="lazy" />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="pill-label">Our Mission</span>
              <h2 className="heading-lg text-brand-900 mt-4">
                A Leading <span className="text-accent-500">Funding Company</span>
              </h2>
              <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                We help small businesses nationwide access the funding they need to grow.
                As a direct lender with over $5 billion funded and an A+ BBB rating, we
                offer a simple online application and same-day decisions — making business
                funding fast, simple, and stress-free.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We've thrown out the old rule book on business funding. No endless paperwork,
                no waiting games — just fast access to the capital your business needs,
                exactly when you need it.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We help businesses of all types and sizes, no matter your industry. As long
                as you've been operating for at least six months and have solid monthly
                revenue, we're ready to work with you.
              </p>
              <Link to="/apply" className="btn-primary mt-6">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <div className="font-display font-extrabold text-2xl text-brand-900">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="pill-label">Our Values</span>
            <h2 className="heading-lg text-brand-900 mt-4">What Sets Us Apart</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center mb-3">
                    <v.icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="font-display font-bold text-brand-900 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-py bg-white">
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-brand-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(255,90,0,0.06),transparent)]" />
        <div className="relative max-w-3xl mx-auto section-padding text-center">
          <h2 className="heading-md text-white">Still have questions?</h2>
          <p className="mt-3 text-slate-400">Our team is here to help. Reach out anytime.</p>
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
