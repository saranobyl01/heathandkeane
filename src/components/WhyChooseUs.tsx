import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Clock, Shield, Globe, HeadphonesIcon, TrendingUp } from 'lucide-react'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import { TextEffect } from '@/components/ui/text-effect'

const benefits = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Price Benchmarking',
    description: 'We conduct thorough market analysis and price benchmarking to ensure you always receive the most competitive pricing from our supplier network, saving you money without compromising quality.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time Efficiency',
    description: 'Our streamlined sourcing process and established supplier relationships significantly reduce your time-to-market. What could take months on your own, we can accomplish in weeks.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Risk Mitigation',
    description: 'We protect your business interests through thorough supplier vetting, quality inspections, and secure payment structures. Our experience means we anticipate and mitigate risks before they become problems.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Footprint',
    description: 'With an established presence and network across Asia, Europe, and the Americas, we provide access to a vast global supplier base that would be impossible for most businesses to develop independently.',
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: 'Dedicated Support',
    description: 'Every client receives a dedicated sourcing manager who serves as your single point of contact throughout the entire process. We are always available to address your questions and concerns promptly.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Scalable Solutions',
    description: "Whether you're a startup placing your first order or an established enterprise managing complex supply chains, our services scale seamlessly with your business needs and growth trajectory.",
  },
]

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
          <TextEffect as="p" per="char" preset="fade" trigger={inView} className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
            Our Advantage
          </TextEffect>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Why Choose Heath & Keane
          </h2>
          <TextEffect per="word" preset="fade" trigger={inView} className="text-lg text-zinc-400 leading-relaxed">
            We don't just connect you with suppliers – we become your strategic partner in global sourcing success.
          </TextEffect>
        </motion.div>

        {/* Grid Using New Component */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FeaturesSectionWithHoverEffects features={benefits} />
        </motion.div>
      </div>
    </section>
  )
}
