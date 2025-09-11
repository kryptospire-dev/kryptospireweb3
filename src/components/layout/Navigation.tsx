import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "@/constants/data";
import { handleNavigation, openCalendlyModal } from "@/utils/navigation";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = NAVIGATION_ITEMS;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-orbitron font-bold text-xl lg:text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                KryptoSpire
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-cyan-400 whitespace-nowrap ${
                    location.pathname === item.href
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {item.name}
                  {/* Active indicator */}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex justify-end">
            <Button
              variant="hero"
              size="lg"
              className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-end">
            <button
              className="p-3 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-800 bg-black/95 backdrop-blur-sm"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-lg font-medium transition-colors hover:text-cyan-400 py-2 ${
                    location.pathname === item.href
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-800">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full py-4 text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "/contact";
                  }}
                >
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