import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      
      {/* Placeholder for Contact */}
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  )
}

export default App