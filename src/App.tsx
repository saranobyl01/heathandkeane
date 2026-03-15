import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { WhatWeSource } from '@/components/WhatWeSource'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeSource />
        <HowItWorks />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
