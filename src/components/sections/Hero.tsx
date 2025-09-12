import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  
  const [counts, setCounts] = useState({
    projects: 0,
    marketCap: 0,
    members: 0
  });

  const stats = [
    { key: 'projects', number: 150, label: 'Projects Launched', suffix: '+' },
    { key: 'marketCap', number: 1.1, label: 'Market Cap Driven', prefix: '$', suffix: 'B+' },
    { key: 'members', number: 1, label: 'Community Members', suffix: 'M+' },
  ];

  // Animated counter function
  useEffect(() => {
    if (isInView) {
      stats.forEach(stat => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          
          setCounts(prev => ({
            ...prev,
            [stat.key]: start
          }));
        }, 16);
      });
    }
  }, [isInView]);

  const handleBookCall = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCaseStudies = () => {
    navigate('/case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-surface pt-16 sm:pt-0">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-start/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-end/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2"
          >
            <span className="gradient-text block">Web3 growth</span>
            <span className="text-text-primary block">without the hype.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            We build authentic communities, create compelling content, and drive sustainable growth for Web3 projects that are changing the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-stretch sm:items-center mb-14 sm:mb-14 lg:mb-16 px-2 sm:px-0 max-w-lg sm:max-w-none mx-auto"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold" 
              onClick={handleBookCall}
            >
              <span className="hidden sm:inline">Start Your Growth Journey</span>
              <span className="sm:hidden">Start Growth Journey</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
            </Button>
            <Button 
              variant="outline-glow" 
              size="xl" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold" 
              onClick={handleViewCaseStudies}
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform flex-shrink-0" size={16} />
              <span className="hidden sm:inline">Watch Case Studies</span>
              <span className="sm:hidden">Case Studies</span>
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-8 max-w-3xl mx-auto px-4 sm:px-6 mb-16 sm:mb-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center py-3 sm:py-2"
              >
                <div className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.prefix}
                  {stat.key === 'projects' ? Math.round(counts.projects) : 
                   stat.key === 'marketCap' ? counts.marketCap.toFixed(1) :
                   Math.round(counts.members)}
                  {stat.suffix}
                </div>
                <div className="text-text-secondary text-xs sm:text-sm lg:text-base font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-6 lg:bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center text-text-muted hover:text-gradient-start transition-colors">
          <motion.div 
            className="w-px h-7 sm:h-8 bg-gradient-to-b from-gradient-start to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;