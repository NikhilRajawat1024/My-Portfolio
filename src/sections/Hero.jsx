import { motion } from 'framer-motion'
import { FaRocket, FaPlay, FaArrowRight } from 'react-icons/fa'
import Button from '../components/common/Button'

const Hero = () => {
  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const floatingStats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '4.9★', label: 'Average Rating' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-20"
    >
      {/* Animated Background Glow */}
      <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: Text & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open for Projects
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
          >
            Premium Websites
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
              That Build Trust
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            We craft high-performance, stunning digital experiences for gyms, 
            restaurants, salons, and local businesses ready to grow their brand.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button variant="primary">
              View Our Work <FaArrowRight className="text-xs" />
            </Button>
            <Button variant="secondary">
              <FaPlay className="text-xs" /> Watch Showreel
            </Button>
          </motion.div>

          {/* Floating Stats (Glassmorphism Cards) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 max-w-md"
          >
            {floatingStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center transition-all duration-300"
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Visual / Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-md">
            {/* Floating floating elements (decorative) */}
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl animate-pulse delay-700" />

            {/* Browser Window Mockup */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4 h-5 rounded-md bg-white/10 backdrop-blur-sm" />
              </div>
              {/* Browser Content Preview */}
              <div className="p-6 aspect-[4/3] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-4 shadow-lg shadow-purple-500/30">
                  🚀
                </div>
                <h3 className="text-xl font-semibold text-white">Launch Your Brand</h3>
                <p className="text-sm text-gray-400 mt-1 max-w-xs">Modern. Fast. Conversion-focused.</p>
              </div>
            </div>

            {/* Floating Micro-Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-10 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-bold">✓</div>
                <div>
                  <p className="text-xs font-semibold text-white">Live Preview</p>
                  <p className="text-[10px] text-gray-400">Just deployed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero