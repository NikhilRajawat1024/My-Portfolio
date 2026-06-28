import { motion } from 'framer-motion'
import { FaArrowRight, FaDumbbell, FaUtensils, FaSpa } from 'react-icons/fa'
import SectionHeader from '../components/common/SectionHeader'

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: <FaDumbbell className="text-4xl text-orange-400" />,
      category: 'Fitness & Wellness',
      title: 'Iron Forge Gym',
      description: 'Custom membership portal with class booking, payment integration, and client progress tracking.',
      tags: ['React', '.NET', 'Stripe'],
      gradient: 'from-orange-500/30 to-red-500/30',
      // Add this new link property or just hardcode the href in the JSX
    },
    {
      id: 2,
      icon: <FaUtensils className="text-4xl text-emerald-400" />,
      category: 'Restaurants & Cafes',
      title: 'La Mesa Bistro',
      description: 'Online ordering system with real-time inventory, reservation management, and loyalty rewards.',
      tags: ['React', 'Entity Framework', 'MySQL'],
      gradient: 'from-emerald-500/30 to-teal-500/30',
      // Add a flag or just handle in JSX
    },
    {
      id: 3,
      icon: <FaSpa className="text-4xl text-pink-400" />,
      category: 'Salons & Clinics',
      title: 'Glow Aesthetics',
      description: 'Appointment scheduling with automated reminders, staff management, and client history database.',
      tags: ['React', 'C#', 'SQL Server'],
      gradient: 'from-pink-500/30 to-rose-500/30',
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-pink-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Case Studies"
          title="Projects that deliver results"
          description="Each project is built with a focus on performance, user experience, and business growth."
          className="text-center mx-auto mb-16"
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
  <motion.div
    key={project.id}
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="group bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
  >
    {/* Visual placeholder */}
    <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          {project.icon}
        </div>
        <span className="mt-3 text-xs font-mono text-white/60 bg-black/40 px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="absolute -inset-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 mt-2 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* LINK: View Live Demo (only for the gym project) */}
<div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between w-full"></div>
     {project.id === 1 ? (
    <a
      href="https://iron-forge-gym.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full group"
    >
      <span className="text-sm font-medium text-gray-400 group-hover:text-purple-400 transition-colors">
        View Live Demo
      </span>
      <FaArrowRight className="text-sm text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
    </a>
  ) : project.id === 2 ? (
      <a
      href="https://restaurent-template-nine.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full group"
    >
      <span className="text-sm font-medium text-gray-400 group-hover:text-purple-400 transition-colors">
        View Live Demo
      </span>
      <FaArrowRight className="text-sm text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
    </a>
  ) : (
    <span className="text-sm font-medium text-gray-400 cursor-pointer">
      Coming Soon
    </span>
  )}
</div>
  </motion.div>
))}
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
            View All Projects
          </button>
          <p className="text-xs text-gray-500 mt-3">
            More case studies available on request.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects