import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      
      {/* Placeholder sections – will be filled in later sprints */}
      <section id="services" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  )
}

export default App