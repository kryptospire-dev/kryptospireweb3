import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const [counts, setCounts] = useState({
    projects: 0,
    marketCap: 0,
    members: 0,
  });

  const stats = [
    { key: "projects", number: 150, label: "Projects Launched", suffix: "+" },
    {
      key: "marketCap",
      number: 1.1,
      label: "Market Cap Driven",
      prefix: "$",
      suffix: "B+",
    },
    { key: "members", number: 1, label: "Community Members", suffix: "M+" },
  ];

  // Enhanced animated counter function
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        setTimeout(() => {
          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }

            setCounts((prev) => ({
              ...prev,
              [stat.key]: start,
            }));
          }, 16);
        }, index * 100);
      });
    }
  }, [isInView]);

  const handleBookCall = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewCaseStudies = () => {
    navigate("/case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-surface pt-20 sm:pt-24 lg:pt-16">
      {/* Enhanced background glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-start/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-end/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Additional subtle background elements */}
        <div className="absolute top-16 right-20 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-start/10 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-20 left-16 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-end/10 rounded-full blur-lg opacity-60" />
      </div>

      <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 relative z-20"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
          >
            <motion.span 
              className="gradient-text block tracking-tight"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Web3 growth
            </motion.span>
            <motion.span 
              className="text-text-primary block tracking-tight"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              without the hype.
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 relative z-20"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            As a leading Web3 marketing agency, we build authentic communities,
            create compelling content, and drive sustainable growth for Web3
            projects that are changing the world.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-stretch sm:items-center mb-14 sm:mb-14 lg:mb-16 px-2 sm:px-0 max-w-lg sm:max-w-none mx-auto relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="hero"
                size="xl"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-xl"
                onClick={handleBookCall}
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
              >
                <span className="hidden sm:inline">
                  Start Your Growth Journey
                </span>
                <span className="sm:hidden">Start Growth Journey</span>
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  size={18}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline-glow"
                size="xl"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-xl"
                onClick={handleViewCaseStudies}
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
              >
                <Play
                  className="mr-2 group-hover:scale-110 transition-transform flex-shrink-0"
                  size={16}
                />
                <span className="hidden sm:inline">Watch Case Studies</span>
                <span className="sm:hidden">Case Studies</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Animated Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-20"
          >
            {/* Desktop Stats (3 columns) */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto px-4 sm:px-6 mb-16 sm:mb-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center py-3 sm:py-2 group cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-1 sm:mb-2 transition-all duration-300"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {stat.prefix}
                    {stat.key === "projects"
                      ? Math.round(counts.projects)
                      : stat.key === "marketCap"
                      ? counts.marketCap.toFixed(1)
                      : Math.round(counts.members)}
                    {stat.suffix}
                  </motion.div>
                  <div
                    className="text-text-secondary text-xs sm:text-sm lg:text-base font-medium leading-tight"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Stats (Horizontal Layout) */}
            <div className="sm:hidden px-4 mb-16">
              <div className="flex flex-col space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.15
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-surface/40 to-background/30 backdrop-blur-sm border border-gradient-start/20 hover:border-gradient-start/40 transition-all duration-300">
                      {/* Left side - Number */}
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="text-3xl md:text-4xl font-bold gradient-text"
                            style={{
                              fontFamily: "Rajdhani, sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {stat.prefix}
                            {stat.key === "projects"
                              ? Math.round(counts.projects)
                              : stat.key === "marketCap"
                              ? counts.marketCap.toFixed(1)
                              : Math.round(counts.members)}
                            {stat.suffix}
                          </motion.div>
                        </div>
                        
                        {/* Separator Line */}
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gradient-start/30 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="flex-1">
                          <div
                            className="text-text-secondary text-sm font-medium leading-tight"
                            style={{
                              fontFamily: "Rajdhani, sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </div>

                      {/* Right side - Indicator */}
                      <div className="flex-shrink-0 ml-4">
                        <motion.div
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 border border-gradient-start/30 flex items-center justify-center group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300"
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <motion.div
                      className="mt-2 h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? "100%" : 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.8 + index * 0.15,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;