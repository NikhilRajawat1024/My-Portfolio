import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 hover:scale-105 shadow-lg shadow-purple-500/25",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-105",
    outline: "bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/5"
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button