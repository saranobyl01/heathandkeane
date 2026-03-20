import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, ShieldCheck, TrendingUp } from 'lucide-react'
import { TextShimmer } from '@/components/ui/text-shimmer'
import { TextEffect } from '@/components/ui/text-effect'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

const stats = [
  { icon: Globe, value: '50+', label: 'Countries Connected' },
  { icon: ShieldCheck, value: '99%', label: 'Quality Pass Rate' },
  { icon: TrendingUp, value: '500+', label: 'Happy Clients' },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 hero-grid" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

        {/* Glowing blobs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />

        {/* Continent silhouettes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="280" cy="380" rx="180" ry="120" fill="white" />
          <ellipse cx="350" cy="500" rx="100" ry="80" fill="white" />
          <ellipse cx="700" cy="320" rx="220" ry="130" fill="white" />
          <ellipse cx="720" cy="480" rx="60" ry="80" fill="white" />
          <ellipse cx="1050" cy="340" rx="200" ry="100" fill="white" />
          <ellipse cx="1100" cy="450" rx="80" ry="60" fill="white" />
          <ellipse cx="1200" cy="300" rx="120" ry="80" fill="white" />
          <ellipse cx="500" cy="650" rx="60" ry="40" fill="white" />
          <ellipse cx="1300" cy="600" rx="100" ry="60" fill="white" />
        </svg>

        {/* Route lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900">
          <line x1="280" y1="380" x2="700" y2="320" stroke="white" strokeWidth="0.8" strokeDasharray="5,6" />
          <line x1="700" y1="320" x2="1050" y2="340" stroke="white" strokeWidth="0.8" strokeDasharray="5,6" />
          <line x1="1050" y1="340" x2="1200" y2="300" stroke="white" strokeWidth="0.8" strokeDasharray="5,6" />
          <line x1="720" y1="480" x2="1100" y2="450" stroke="white" strokeWidth="0.8" strokeDasharray="5,6" />
          <circle cx="280" cy="380" r="4" fill="white" opacity="0.5" />
          <circle cx="700" cy="320" r="4" fill="white" opacity="0.5" />
          <circle cx="1050" cy="340" r="4" fill="white" opacity="0.5" />
          <circle cx="1200" cy="300" r="3" fill="white" opacity="0.4" />
          <circle cx="720" cy="480" r="3" fill="white" opacity="0.4" />
        </svg>

        {/* Floating dots */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 17 + 5) % 95}%`,
              top: `${(i * 23 + 10) % 85}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${2.5 + (i % 3) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <TextEffect as="p" per="char" preset="fade" className="text-xs font-semibold tracking-widest uppercase text-zinc-400">
            Global Sourcing Experts
          </TextEffect>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Source Products
          <br />
          <span className="text-white/20">Globally</span>{' '}
          <TextShimmer
            as="span"
            className="font-black [--base-color:theme(colors.zinc.600)] [--base-gradient-color:theme(colors.white)]"
            duration={3}
            spread={4}
          >
            with Confidence
          </TextShimmer>
        </motion.h1>

        <TextEffect
          per="word"
          preset="fade"
          delay={0.2}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light"
        >
          Connect with verified manufacturers worldwide. We handle quality control,
          logistics, and compliance so you can focus on growing your business.
        </TextEffect>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <InteractiveHoverButton
            text="Start Sourcing"
            onClick={() => handleScrollTo('#contact')}
            className="w-48 bg-white text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] h-14"
          />
          <InteractiveHoverButton
            text="How It Works"
            onClick={() => handleScrollTo('#how-it-works')}
            className="w-48 bg-transparent text-white border-white/20 hover:bg-white/5 h-14"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-white/60" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white font-medium">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
