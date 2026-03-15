import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Handshake, ShieldCheck, Truck } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Product Discovery',
    description: 'We begin with an in-depth consultation to fully understand your product requirements, target market, and business goals. Our sourcing team then leverages our extensive network to identify the best-suited manufacturers from our database of verified suppliers.',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Supplier Negotiation',
    description: 'Our experienced negotiators work on your behalf to secure the most competitive pricing and favorable terms. We request product samples from shortlisted suppliers, which are rigorously evaluated for quality, specifications, and compliance before we proceed.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'Our dedicated quality control team performs comprehensive inspections at multiple stages of production. We use internationally recognised testing standards to ensure every product meets your exact specifications and quality benchmarks before shipping.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'We manage the complete logistics chain from manufacturer to your doorstep. This includes handling all documentation, customs clearance, freight forwarding, and last-mile delivery — working with trusted partners for timely and cost-effective outcomes.',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-100" />
      {/* Dimming overlay so dots don't overpower */}
      <div className="absolute inset-0 bg-zinc-950/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Our Process</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Our proven 4-step process ensures you get the right products from the right suppliers, every time.
          </p>
        </motion.div>

        {/* Steps grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.number}
                className="relative z-10 list-none"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Number + icon bubble */}
                <div className="relative z-10 flex items-center gap-4 mb-6 lg:flex-col lg:items-start lg:gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden group">
                    <GlowingEffect
                      spread={30}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="absolute inset-[2px] rounded-[calc(1rem-2px)] bg-zinc-950 flex items-center justify-center z-10 transition-colors duration-300 group-hover:bg-zinc-900">
                       <Icon className="h-6 w-6 text-zinc-100" />
                    </div>
                  </div>
                  <span className="text-xs font-black text-zinc-600 tracking-widest lg:hidden">{step.number}</span>
                </div>

                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-zinc-800 p-2 group">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-zinc-900 bg-zinc-950 p-6 shadow-sm">
                    <div className="text-xs font-black text-zinc-600 tracking-widest mb-1">{step.number}</div>
                    <div className="space-y-3 flex-1">
                      <h3 className="pt-0.5 text-lg leading-[1.375rem] font-semibold font-sans tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
