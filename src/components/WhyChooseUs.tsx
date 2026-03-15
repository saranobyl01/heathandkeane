import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Clock, Shield, Globe, HeadphonesIcon, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: BarChart3,
    title: 'Price Benchmarking',
    description: 'We conduct thorough market analysis and price benchmarking to ensure you always receive the most competitive pricing from our supplier network, saving you money without compromising quality.',
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Our streamlined sourcing process and established supplier relationships significantly reduce your time-to-market. What could take months on your own, we can accomplish in weeks.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We protect your business interests through thorough supplier vetting, quality inspections, and secure payment structures. Our experience means we anticipate and mitigate risks before they become problems.',
  },
  {
    icon: Globe,
    title: 'Global Footprint',
    description: 'With an established presence and network across Asia, Europe, and the Americas, we provide access to a vast global supplier base that would be impossible for most businesses to develop independently.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Every client receives a dedicated sourcing manager who serves as your single point of contact throughout the entire process. We are always available to address your questions and concerns promptly.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: "Whether you're a startup placing your first order or an established enterprise managing complex supply chains, our services scale seamlessly with your business needs and growth trajectory.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" ref={ref} className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Our Advantage</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Why Choose Heath & Keane
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            We don't just connect you with suppliers – we become your strategic partner in global sourcing success.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={itemVariants}
                className="group bg-zinc-900 rounded-2xl border border-zinc-800 p-7 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-800 mb-5 group-hover:bg-zinc-700 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">{b.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{b.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
