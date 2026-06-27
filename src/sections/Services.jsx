import { motion } from 'framer-motion'
import { 
  FaPalette, 
  FaShoppingCart, 
  FaSearch, 
  FaRocket, 
  FaShieldAlt, 
  FaBullhorn 
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeader from '../components/common/SectionHeader'

const Services = () => {
  const services = [
    {
      icon: <FaPalette className="text-3xl text-purple-400" />,
      title: 'Custom Website Design',
      description: 'Mobile-first, conversion-focused designs that reflect your unique brand identity and engage visitors.',
    },
    {
      icon: <FaShoppingCart className="text-3xl text-pink-400" />,
      title: 'E‑Commerce Solutions',
      description: 'Secure, scalable online stores with seamless payment gateways and inventory management.',
    },
    {
      icon: <FaSearch className="text-3xl text-cyan-400" />,
      title: 'SEO & Visibility',
      description: 'On-page optimization, local SEO, and content strategies to rank higher on Google and attract customers.',
    },
    {
      icon: <FaRocket className="text-3xl text-amber-400" />,
      title: 'Performance Optimization',
      description: 'Sub‑second load times, 90+ Lighthouse scores, and optimized core web vitals for better user experience.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-emerald-400" />,
      title: 'Maintenance & Security',
      description: 'Regular updates, daily backups, malware scanning, and 24/7 monitoring to keep your site safe.',
    },
    {
      icon: <FaBullhorn className="text-3xl text-indigo-400" />,
      title: 'Brand & Content Strategy',
      description: 'Compelling copywriting, visual storytelling, and social media integration to build a cohesive brand.',
    },
  ]

  // Animation variants for staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow decorations */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-600/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Our Services"
          title="What we deliver"
          description="From design to launch and beyond—we provide everything you need to build a powerful online presence."
          className="text-center mx-auto mb-16"
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 shadow-lg shadow-transparent hover:shadow-purple-500/10 flex flex-col"
            >
              {/* Icon with glow */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Subtle CTA arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-purple-400 transition-colors">
                <span className="font-medium">Learn More</span>
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge – bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Every project includes <strong className="text-white">1 month free support</strong> &nbsp;•&nbsp; No hidden fees
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services