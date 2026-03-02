import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const solutions = [
  { label: 'Lines of Credit', href: '/solutions/lines-of-credit' },
  { label: 'Short-Term Loans', href: '/solutions/short-term-loans' },
  { label: 'Long-Term Loans', href: '/solutions/long-term-loans' },
  { label: 'Invoice Factoring', href: '/solutions/invoice-factoring' },
  { label: 'Equipment Financing', href: '/solutions/equipment-financing' },
  { label: 'Merchant Cash Advance', href: '/solutions/merchant-cash-advance' },
  { label: 'SBA Loans', href: '/solutions/sba-loans' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solOpen, setSolOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSolOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-950/90 backdrop-blur-2xl shadow-lg border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-[80px]">
            <Link to="/" aria-label="Home">
              <Logo className="h-20" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolOpen(true)}
                onMouseLeave={() => setSolOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                    location.pathname.startsWith('/solutions')
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {solOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-glass-lg border border-slate-100/80 py-1.5 overflow-hidden"
                    >
                      {solutions.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="block px-4 py-2.5 text-[13px] text-slate-600 hover:text-brand-900 hover:bg-cream-100 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-1.5 pt-1.5">
                        <Link
                          to="/solutions"
                          className="block px-4 py-2.5 text-[13px] font-semibold text-accent-500 hover:bg-accent-50 transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about#faq"
                className="px-4 py-2 text-[14px] font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200"
              >
                FAQs
              </Link>
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+18634179220"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-accent-400" />
                </div>
                <span>(863) 417-9220</span>
              </a>
              <Link to="/apply" className="btn-accent text-sm !py-2.5 !px-6 !rounded-lg">
                Apply now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-brand-950 shadow-2xl overflow-y-auto border-l border-white/[0.06]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-3 py-3 text-lg font-medium text-white hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 mb-2 px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
                  Services
                </div>
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-3 py-2.5 text-[15px] text-slate-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+18634179220"
                    className="flex items-center justify-center gap-2 py-3 text-white font-medium"
                  >
                    <Phone className="w-5 h-5 text-accent-400" />
                    (863) 417-9220
                  </a>
                  <Link to="/apply" className="btn-accent w-full justify-center">
                    Apply now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
