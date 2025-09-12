import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_ITEMS } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Your Calendly URL - Replace with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/kryptospire96/web-3";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const navItems = NAVIGATION_ITEMS;

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  };

  // Calendly booking handler
  const handleBookCall = () => {
    setIsMobileMenuOpen(false);
    
    // Option 1: Open in new tab (Recommended)
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    
    // Option 2: Navigate in same tab
    // window.location.href = CALENDLY_URL;
    
    // Option 3: Embedded popup (requires Calendly widget script)
    // if (window.Calendly) {
    //   window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    // } else {
    //   window.open(CALENDLY_URL, '_blank');
    // }
  };

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
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="font-orbitron font-bold text-base sm:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                KryptoSpire
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm xl:text-base font-medium transition-all duration-300 hover:text-cyan-400 whitespace-nowrap ${
                    location.pathname === item.href
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              variant="hero"
              size="lg"
              className="px-4 xl:px-6 py-2.5 xl:py-3 text-sm xl:text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 whitespace-nowrap flex items-center gap-2 group"
              onClick={handleBookCall}
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-1.5 sm:p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-800 bg-black/98 backdrop-blur-sm overflow-hidden"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      className={`block w-full text-left text-base sm:text-lg font-medium transition-colors hover:text-cyan-400 py-2 ${
                        location.pathname === item.href
                          ? "text-cyan-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-3 sm:pt-4 border-t border-gray-800"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg flex items-center justify-center gap-2 group"
                    onClick={handleBookCall}
                  >
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Book Strategy Call
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;