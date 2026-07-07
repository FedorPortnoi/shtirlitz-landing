import Nav from '@/components/Nav'
import { TourProvider } from '@/components/tour/TourContext'
import IntroWalkthrough from '@/components/tour/IntroWalkthrough'
import DemoLogin from '@/components/tour/DemoLogin'
import TypeSelect from '@/components/tour/TypeSelect'
import CheckForm from '@/components/tour/CheckForm'
import PipelineRun from '@/components/tour/PipelineRun'
import DossierReveal from '@/components/tour/DossierReveal'
import Pain from '@/components/Pain'
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
        <TourProvider>
          <IntroWalkthrough />
          <DemoLogin />
          <TypeSelect />
          <CheckForm />
          <PipelineRun />
          <DossierReveal />
        </TourProvider>
        <Pain />
        <Comparison />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
