import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SectionHeader from '../components/common/SectionHeader'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "NR Studio completely transformed our online presence. Within 2 months, we saw a 40% increase in gym membership signups. The custom booking system is flawless.",
      name: "Mike Johnson",
      business: "Iron Forge Gym",
      rating: 5,
      avatar: "💪",
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      id: 2,
      quote: "Our online orders tripled after the redesign. Customers love the smooth ordering experience, and we've saved countless hours on manual reservation management.",
      name: "Sarah Martinez",
      business: "La Mesa Bistro",
      rating: 5,
      avatar: "🍽️",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      id: 3,
      quote: "The appointment scheduling system saves me 10 hours a week. My clients love the automated reminders, and I can finally focus on delivering great service.",
      name: "Emma Wilson",
      business: "Glow Aesthetics",
      rating: 5,
      avatar: "✨",
      gradient: "from-pink-500/10 to-rose-500/10",
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  // Render star ratings
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))
  }

  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Testimonials"
          title="What our clients say"
          description="Real results from real businesses. We're proud to help our clients grow."
          className="text-center mx-auto mb-16"
        />

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col relative`}
            >
              {/* Floating quote icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-3xl text-white/5 group-hover:text-purple-500/20 transition-colors" />

              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-2xl border border-white/10">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Aggregate Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">50+</span> happy clients
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">98%</span> satisfaction rate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials