import { motion } from "framer-motion";
import { Twitter, Linkedin, Send, Mail, ArrowUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  // Your Calendly URL - Same as in Navigation
  const CALENDLY_URL = "https://calendly.com/kryptospire96/web-3";

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const serviceLinks = [
    { name: "Community Building", href: "/services/community-building" },
    { name: "Growth Marketing", href: "/services/growth-marketing" },
    { name: "Content Strategy", href: "/services/content-strategy" },
    { name: "Launch Strategy", href: "/services/launch-strategy" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://x.com/kryptospire928", icon: Twitter },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shivam-singh-376546383/",
      icon: Linkedin,
    },
    { name: "Telegram", href: "https://t.me/kryptospire", icon: Send },
  ];

  // Detect route change and scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calendly booking handler - Same as Navigation
  const handleBookCall = () => {
    console.log('Opening Calendly from footer...');
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gradient-start/5 to-gradient-end/5" />
      </div>

      <div className="container-custom py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center sm:justify-start space-x-2 mb-6 cursor-pointer w-fit mx-auto sm:mx-0"
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-orbitron font-bold text-lg">
                  K
                </span>
              </motion.div>
              <span className="font-orbitron font-bold text-xl sm:text-2xl gradient-text">
                KryptoSpire
              </span>
            </motion.div>

            <p className="text-text-secondary mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Fueling The Next Web3 Wave. Building the future of decentralized
              marketing.
            </p>

            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow-primary"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h4 className="font-semibold text-text-primary mb-4 sm:mb-6 text-base sm:text-lg">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              {companyLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-gradient-start transition-colors relative group text-left text-sm sm:text-base"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h4 className="font-semibold text-text-primary mb-4 sm:mb-6 text-base sm:text-lg">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              {serviceLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-gradient-start transition-colors relative group text-left text-sm sm:text-base"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"
          >
            <h4 className="font-semibold text-text-primary mb-4 sm:mb-6 text-base sm:text-lg">
              Get in Touch
            </h4>
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center sm:justify-start text-text-secondary"
              >
                <Mail
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] mr-3 text-gradient-start flex-shrink-0"
                />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kryptospire@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gradient-start transition-colors text-sm sm:text-base"
                >
                  kryptospire@gmail.com
                </a>
              </motion.div>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Ready to scale your Web3 project? Let's talk.
              </p>

              {/* Updated Book a Call Button - Now opens Calendly directly */}
              <motion.div>
                <motion.button
                  onClick={handleBookCall}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300 w-full text-sm sm:text-base"
                >
                  Book a Call
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-text-secondary text-xs sm:text-sm text-center sm:text-left">
            © 2025 KryptoSpire. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
              {legalLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-gradient-start transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow-primary transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;