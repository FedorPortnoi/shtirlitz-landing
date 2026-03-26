import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Pain from '@/components/Pain'
import Pipeline from '@/components/Pipeline'
import Comparison from '@/components/Comparison'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Pipeline />
        <Comparison />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
