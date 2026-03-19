import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  category: z.string().min(1, 'Please select a category'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Please provide at least 10 characters'),
})

type FormValues = z.infer<typeof formSchema>

const categories = [
  'Consumer Goods',
  'Electronics',
  'Textiles & Apparel',
  'Home & Garden',
  'Industrial Parts',
  'Custom Manufacturing',
  'Other',
]

const perks = [
  'Free initial consultation',
  'Response within 24 hours',
  'No commitment required',
  'Dedicated sourcing manager',
]

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    reset()
    toast({
      variant: 'success',
      title: '✅ Inquiry Sent!',
      description: 'Our sourcing team will reach out to you within 24 hours.',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Get in touch with our sourcing experts today. We'll help you find the perfect suppliers for your business needs.
            </p>

            {/* Email card */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900 mb-8">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">Email us directly</p>
                <a
                  href="mailto:contact@heathandkeane.com"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  contact@heathandkeane.com
                </a>
              </div>
            </div>

            {/* Perks */}
            <ul className="space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0" />
                  <span className="text-sm text-zinc-400">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Inquiry Sent!</h3>
                  <p className="text-zinc-400 text-sm">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Get a Free Quote</h3>
                    <p className="text-zinc-500 text-sm mb-6">Fill out the form and we'll respond promptly.</p>
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <Label htmlFor="category" className="text-zinc-400 text-xs font-semibold uppercase tracking-wide">
                      Product Category <span className="text-red-400">*</span>
                    </Label>
                    <Select onValueChange={(v) => setValue('category', v)}>
                      <SelectTrigger
                        id="category"
                        className={`bg-zinc-950 border-zinc-800 text-white focus:ring-white/20 ${errors.category ? 'border-red-500' : ''}`}
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-red-400 text-xs">{errors.category.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-zinc-400 text-xs font-semibold uppercase tracking-wide">
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className={`bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-white/20 ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-zinc-400 text-xs font-semibold uppercase tracking-wide">
                      Message / Inquiry <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your sourcing requirements..."
                      rows={4}
                      className={`bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-white/20 ${errors.message ? 'border-red-500' : ''}`}
                      {...register('message')}
                    />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                  </div>

                  <InteractiveHoverButton
                    type="submit"
                    disabled={isSubmitting}
                    text={isSubmitting ? "Sending..." : "Send Inquiry"}
                    className="w-full h-12 bg-white text-zinc-950 opacity-100 disabled:opacity-60"
                  />
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
