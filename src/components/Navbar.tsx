import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What We Source', href: '#what-we-source' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-200">
                <Globe2 className="w-4 h-4 text-white" />
              </div>
              <span className={cn(
                'text-lg font-bold tracking-tight transition-colors duration-300',
                scrolled ? 'text-zinc-900' : 'text-white'
              )}>
                Heath & Keane
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150',
                    scrolled
                      ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className={cn(
                  'hidden sm:inline-flex items-center gap-1.5 px-5 h-10 text-sm font-semibold rounded-lg border transition-all duration-200',
                  scrolled
                    ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-700'
                    : 'bg-white text-zinc-900 border-white hover:bg-zinc-100'
                )}
              >
                Start Sourcing
                <ChevronRight className="h-3.5 w-3.5" />
              </button>

              <button
                className="lg:hidden p-2 rounded-lg"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen
                  ? <X className={cn('h-5 w-5', scrolled ? 'text-zinc-900' : 'text-white')} />
                  : <Menu className={cn('h-5 w-5', scrolled ? 'text-zinc-900' : 'text-white')} />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
                <span className="text-base font-bold text-zinc-900">Heath & Keane</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 rounded-md hover:bg-zinc-100">
                  <X className="h-5 w-5 text-zinc-600" />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-3 text-left text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg flex items-center justify-between group transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                  </button>
                ))}
              </nav>
              <div className="p-5 border-t border-zinc-100">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full h-11 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Start Sourcing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
