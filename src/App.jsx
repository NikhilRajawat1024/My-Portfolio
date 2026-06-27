import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App