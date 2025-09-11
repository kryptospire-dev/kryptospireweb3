import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceLinks = [
    { name: 'Community Building', href: '/services/community-building' },
    { name: 'Growth Marketing', href: '/services/growth-marketing' },
    { name: 'Content Strategy', href: '/services/content-strategy' },
    { name: 'Launch Strategy', href: '/services/launch-strategy' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle link clicks
  const handleLinkClick = (href) => {
    window.scrollTo(0, 0);
    console.log('Navigating to:', href);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gradient-start/5 to-gradient-end/5" />
      </div>

      <div className="container-custom py-20 relative">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 mb-6 cursor-pointer w-fit"
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-orbitron font-bold text-lg">K</span>
              </motion.div>
              <span className="font-orbitron font-bold text-2xl gradient-text">
                KryptoSpire
              </span>
            </motion.div>
            
            <p className="text-text-secondary mb-8 leading-relaxed">
              Web3 growth without the hype. Building the future of decentralized marketing.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow-primary"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-text-secondary hover:text-gradient-start transition-colors relative group text-left"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-text-secondary hover:text-gradient-start transition-colors relative group text-left"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center text-text-secondary"
              >
                <Mail size={18} className="mr-3 text-gradient-start flex-shrink-0" />
                <a
                  href="mailto:hello@kryptospire.com"
                  className="hover:text-gradient-start transition-colors"
                >
                  hello@kryptospire.com
                </a>
              </motion.div>
              
              <p className="text-text-secondary leading-relaxed">
                Ready to scale your Web3 project? Let's talk.
              </p>
              
              <motion.button
                onClick={() => handleLinkClick('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-primary px-8 py-3 rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300 w-full"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © 2025 KryptoSpire. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="text-text-secondary hover:text-gradient-start transition-colors text-sm"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow-primary transition-all duration-300 ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;