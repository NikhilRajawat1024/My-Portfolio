import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaEnvelope />, href: 'designnest1824@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <ScrollLink to="hero" smooth duration={500} className="cursor-pointer inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Designnest
              </span>
            </ScrollLink>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-xs">
              Premium business websites that build trust and grow your brand.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (static) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Web Design</li>
              <li className="text-sm text-gray-400">E‑Commerce</li>
              <li className="text-sm text-gray-400">SEO & Visibility</li>
              <li className="text-sm text-gray-400">Maintenance & Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">
                <a href="mailto:designnest1824@gmail.com" className="hover:text-white transition-colors">
                  designnest1824@gmail.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-sm text-gray-400">Remote – Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} <span className="text-white font-medium">Designnest</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> using React &amp; .NET
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer