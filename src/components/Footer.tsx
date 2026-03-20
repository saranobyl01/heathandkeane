import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { TextEffect } from '@/components/ui/text-effect'

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Need Immediate Help? */}
      <section ref={ref} className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl mix-blend-screen" />
        
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/10">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Need Immediate Help?
          </h2>
          <TextEffect per="word" preset="fade" trigger={inView} className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our sourcing experts are available around the clock to answer your questions and get your sourcing journey started.
          </TextEffect>
          <InteractiveHoverButton
            text="Schedule a Call"
            onClick={() => handleScrollTo('#contact')}
            className="w-56 bg-white text-zinc-950 h-14"
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">Heath & Keane</span>
              </div>
              <p className="text-zinc-500 leading-relaxed max-w-md mb-8">
                Your trusted global sourcing partner. We connect businesses with verified manufacturers worldwide, handling quality control, logistics, and compliance.
              </p>
              <div className="flex gap-3">
                {['LinkedIn', 'Twitter', 'Email'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-colors cursor-pointer text-xs font-bold text-zinc-400">
                    {social[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <TextEffect as="h4" per="char" preset="fade" className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
                Quick Links
              </TextEffect>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'What We Source', href: '#what-we-source' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Why Choose Us', href: '#why-choose-us' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <TextEffect as="h4" per="char" preset="fade" className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
                Contact Us
              </TextEffect>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                  <a href="mailto:contact@heathandkeane.com" className="text-zinc-400 hover:text-white transition-colors">
                    contact@heathandkeane.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                  <a href="tel:9995050032" className="text-zinc-400 hover:text-white transition-colors">
                    9995050032
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-400">Dubai, UAE</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-400">24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs font-medium">
              © {new Date().getFullYear()} Heath & Keane. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy Policy</button>
              <button className="text-zinc-600 hover:text-white text-xs transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
