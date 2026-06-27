import { motion } from 'framer-motion'
import { FaMobileAlt, FaRocket, FaBullseye, FaArrowRight } from 'react-icons/fa'
import SectionHeader from '../components/common/SectionHeader'

const About = () => {
  const values = [
    {
      icon: <FaMobileAlt className="text-2xl text-purple-400" />,
      title: 'Mobile-First Design',
      description: 'Your website looks stunning and works flawlessly on every device.',
    },
    {
      icon: <FaRocket className="text-2xl text-pink-400" />,
      title: 'Blazing Fast Performance',
      description: 'Optimized code, lazy loading, and CDN delivery for instant loading.',
    },
    {
      icon: <FaBullseye className="text-2xl text-cyan-400" />,
      title: 'Conversion Optimized',
      description: 'Designed to turn visitors into paying customers—not just look pretty.',
    },
  ]

  const processSteps = [
    { step: '01', label: 'Discovery', desc: 'We understand your brand & goals.' },
    { step: '02', label: 'Design', desc: 'We craft a unique, premium UI.' },
    { step: '03', label: 'Develop', desc: 'We build it with clean, scalable code.' },
    { step: '04', label: 'Launch', desc: 'We deploy and support you forever.' },
  ]

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* LEFT COLUMN: Text + Values */}
          <div>
            <SectionHeader
              badge="About Us"
              title="Crafting premium digital experiences for local brands."
              description="I'm Nikhil, the founder of NR Studio. I bridge the gap between 
              beautiful design and reliable code—helping gyms, restaurants, and small 
              businesses establish a powerful online presence that drives revenue."
            />

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-5 text-center transition-all duration-300 hover:border-purple-500/30"
                >
                  <div className="flex justify-center mb-3">{value.icon}</div>
                  <h4 className="text-sm font-semibold text-white">{value.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Process Visual (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/5">
              {/* Floating accent circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
              
              <h3 className="text-xl font-semibold text-white mb-2">How We Work</h3>
              <p className="text-sm text-gray-400 mb-8">A transparent, four-step process to your new website.</p>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-sm font-bold text-purple-400 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {step.label}
                      </h4>
                      <p className="text-xs text-gray-400">{step.desc}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-5 mt-10 w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Trust micro-badge */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for projects
                </span>
                <span>•</span>
                <span>⭐ 4.9/5 client rating</span>
              </div>
            </div>

            {/* Floating decorative pill */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 shadow-xl hidden md:flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-white font-medium">100% Client Satisfaction</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About