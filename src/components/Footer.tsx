import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  'Useful Links': [
    { label: 'About Us', href: '/about' },
    { label: 'Apply for Funds', href: '/apply' },
    { label: 'FAQs', href: '/about#faq' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  Services: [
    { label: 'Lines of Credit', href: '/solutions/lines-of-credit' },
    { label: 'Short-Term Loans', href: '/solutions/short-term-loans' },
    { label: 'Long-Term Loans', href: '/solutions/long-term-loans' },
    { label: 'Invoice Factoring', href: '/solutions/invoice-factoring' },
    { label: 'Equipment Financing', href: '/solutions/equipment-financing' },
    { label: 'Merchant Cash Advance', href: '/solutions/merchant-cash-advance' },
    { label: 'SBA Loans', href: '/solutions/sba-loans' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-400">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-brand-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,90,0,0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto section-padding py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to grow your business?
            </h3>
            <p className="text-slate-300 mt-1">Apply in minutes. Get funded as fast as today.</p>
          </div>
          <Link
            to="/apply"
            className="btn-accent whitespace-nowrap !text-base !px-8 !py-4"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <Logo className="h-8 opacity-90" />
            <p className="mt-5 leading-relaxed text-sm">
              A direct lender helping small businesses nationwide access the
              funding they need to grow. $5B+ funded. A+ BBB rated.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                2890 W Broward Blvd Unit B, Fort Lauderdale, FL 33312
              </div>
              <a href="tel:+18634179220" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent-500" />
                (863) 417-9220
              </a>
              <a href="mailto:info@helpingcapital.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent-500" />
                info@helpingcapital.com
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-500 shrink-0" />
                Monday – Friday: 9am – 6pm
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Helping Capital. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/disclosures" className="hover:text-slate-300">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
