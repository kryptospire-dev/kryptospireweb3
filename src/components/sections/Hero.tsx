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
    { key: 'marketCap', number: 2.1, label: 'Market Cap Driven', prefix: '$', suffix: 'B+' },
    { key: 'members', number: 5, label: 'Community Members', suffix: 'M+' },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-surface">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-start/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Web3 growth</span>
            <br />
            <span className="text-text-primary">without the hype.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build authentic communities, create compelling content, and drive sustainable growth for Web3 projects that are changing the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="hero" size="xl" className="group" onClick={handleBookCall}>
              Start Your Growth Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline-glow" size="xl" className="group" onClick={handleViewCaseStudies}>
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={16} />
              Watch Case Studies
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.prefix}
                  {stat.key === 'projects' ? Math.round(counts.projects) : 
                   stat.key === 'marketCap' ? counts.marketCap.toFixed(1) :
                   Math.round(counts.members)}
                  {stat.suffix}
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center text-text-muted hover:text-gradient-start transition-colors">
          <span className="text-xs mb-2 font-bold">Scroll to explore</span>
          <motion.div 
            className="w-px h-8 bg-gradient-to-b from-gradient-start to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;