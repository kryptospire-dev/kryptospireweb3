import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '@/constants/data';
import { handleNavigation, openCalendlyModal } from '@/utils/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = NAVIGATION_ITEMS;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-sm">K</span>
            </div>
            <span className="font-orbitron font-bold text-xl gradient-text">
              KryptoSpire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gradient-start ${
                  location.pathname === item.href
                    ? 'text-gradient-start'
                    : 'text-text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="hero" size="lg" onClick={() => window.location.href = '/contact'}>
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-gradient-start transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-surface"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-gradient-start ${
                    location.pathname === item.href
                      ? 'text-gradient-start'
                      : 'text-text-secondary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="hero" size="lg" className="w-full">
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;