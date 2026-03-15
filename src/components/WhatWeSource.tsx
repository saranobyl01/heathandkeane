import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Cpu, Shirt, Home, Settings, Factory, ArrowRight } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const categories = [
  {
    icon: ShoppingCart,
    title: 'Consumer Goods',
    description: 'From household essentials to personal care products, we source a wide range of consumer goods from trusted manufacturers worldwide.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Cpu,
    title: 'Electronics',
    description: 'Source cutting-edge electronics including components, devices, and accessories from top-tier manufacturers across Asia and beyond.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Connect with expert textile manufacturers specializing in clothing, fabrics, and fashion accessories at competitive prices.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Discover a vast selection of home decor, furniture, garden tools, and outdoor products from reliable global suppliers.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Settings,
    title: 'Industrial Parts',
    description: 'Source precision-engineered industrial components, machinery parts, and equipment from certified global manufacturers.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Factory,
    title: 'Custom Manufacturing',
    description: 'Work with our network of manufacturers to bring your unique product vision to life with custom specifications and private labelling.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function WhatWeSource() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-we-source" ref={ref} className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
            Product Categories
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            What We Source
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            From consumer electronics to industrial machinery, we connect you with verified suppliers across every major product category.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 list-none p-0"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.li key={cat.title} variants={itemVariants} className="h-full">
                <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-zinc-800 p-2 md:p-3 group">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-zinc-900 bg-zinc-950 shadow-sm md:shadow-[0px_0px_27px_0px_rgba(0,0,0,0.3)]">
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                      <div className="absolute bottom-4 left-5 w-fit rounded-lg border-[0.75px] border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-2 shadow-lg group-hover:bg-zinc-800 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-zinc-100" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <h3 className="text-xl leading-[1.375rem] font-semibold font-sans tracking-tight text-white">
                          {cat.title}
                        </h3>
                        <p className="font-sans text-sm leading-relaxed text-zinc-400 font-light items-start">
                          {cat.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center text-xs font-bold text-zinc-100 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit">
                        Learn more <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
