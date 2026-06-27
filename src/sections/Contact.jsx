import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import SectionHeader from '../components/common/SectionHeader'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // EmailJS Credentials
  const EMAILJS_SERVICE_ID = 'service_23rigqg'
  const EMAILJS_TEMPLATE_ID = 'template_1zb77uq'
  const EMAILJS_PUBLIC_KEY = 'lCNS6z5yNVkMKm400'

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: '#' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setIsSuccess(false)

    const form = e.target
    
    // Build the data object with EXACT field names matching your template
    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    console.log('📤 Sending email with params:', templateParams)
    console.log('🔑 Service ID:', EMAILJS_SERVICE_ID)
    console.log('📝 Template ID:', EMAILJS_TEMPLATE_ID)
    console.log('🔐 Public Key:', EMAILJS_PUBLIC_KEY)

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      console.log('✅ Email sent successfully:', result)
      setIsSuccess(true)
      form.reset()
    } catch (err) {
      console.error('❌ EmailJS Error Details:', err)
      console.error('Error text:', err.text)
      console.error('Error status:', err.status)
      
      // Show user-friendly error
      if (err.text && err.text.includes('template')) {
        setError('Template ID not found. Please check your EmailJS template.')
      } else if (err.text && err.text.includes('service')) {
        setError('Service ID not found. Please check your EmailJS service.')
      } else if (err.text && err.text.includes('API key')) {
        setError('Invalid API key. Please check your EmailJS public key.')
      } else {
        setError('Something went wrong. Please try again or contact us directly.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badge="Get in Touch"
          title="Let's build something great together"
          description="Have a project in mind? Fill out the form below, and we'll respond within 24 hours."
          className="text-center mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Website redesign for my gym"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your business and what you need..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {isSuccess && (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 text-sm">
                    <FaCheckCircle />
                    <span>Thanks! We'll get back to you within 24 hours.</span>
                  </div>
                )}
                {error && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm">
                    <span>⚠️</span>
                    <span>{error}</span>
                  </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    We'll respond within 24 hours
                  </span>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/5">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <a href="mailto:hello@nrstudiodev.com" className="text-white hover:text-purple-400 transition-colors text-sm">
                      hello@nrstudiodev.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-pink-400 transition-colors text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <span className="text-white text-sm">Remote – Available worldwide</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm font-medium text-gray-300 mb-4">Connect with us</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
              <p className="text-sm text-gray-400">
                ⭐ <span className="text-white font-semibold">4.9/5</span> average rating 
                <span className="block text-xs mt-1">Trusted by 50+ businesses worldwide</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact