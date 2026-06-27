import { motion } from 'framer-motion'

const SectionHeader = ({ badge, title, description, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${className}`}
    >
      {/* Badge */}
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-4">
        {badge}
      </span>
      
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
        {title}
      </h2>
      
      {/* Description */}
      {description && (
        <p className="text-lg text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader