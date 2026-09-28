import { CUSTOM_CURSOR, SHOW_PLANES, SHOW_REELS } from './config'
import { LangProvider } from './i18n/LangContext'
import CustomCursor from './components/CustomCursor'

import Progress from './sections/Progress'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Metrics from './sections/Metrics'
import Services from './sections/Services'
import Marquee from './sections/Marquee'
import Plans from './sections/Plans'
import Cases from './sections/Cases'
import Reels from './sections/Reels'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import FloatingWhatsApp from './sections/FloatingWhatsApp'

export default function App() {
  return (
    <LangProvider>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Marquee />
        {SHOW_PLANES && <Plans />}
        <Cases />
        {SHOW_REELS && <Reels />}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {CUSTOM_CURSOR && <CustomCursor />}
    </LangProvider>
  )
}
