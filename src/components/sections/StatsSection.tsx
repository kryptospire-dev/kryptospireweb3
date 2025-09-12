import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award, Globe, Zap, BarChart3 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  
  const [animatedNumbers, setAnimatedNumbers] = useState({});

  const stats = [
    {
      icon: TrendingUp,
      number: '$1.1B+',
      targetValue: 1.1,
      suffix: 'B+',
      prefix: '$',
      label: 'Market Cap Driven',
      description: 'Total value created for our clients',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Users,
      number: '5M+',
      targetValue: 5,
      suffix: 'M+',
      label: 'Community Members',
      description: 'Engaged community members built',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: DollarSign,
      number: '150+',
      targetValue: 150,
      suffix: '+',
      label: 'Projects Launched',
      description: 'Successful Web3 project launches',
      gradient: 'from-purple-500 to-violet-500',
      delay: 0.3
    },
    {
      icon: Award,
      number: '450%',
      targetValue: 450,
      suffix: '%',
      label: 'Average Growth',
      description: 'Average TVL/Volume increase',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Globe,
      number: '25+',
      targetValue: 25,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Global market expansion',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.5
    },
    {
      icon: Zap,
      number: '24hrs',
      targetValue: 24,
      suffix: 'hrs',
      label: 'Response Time',
      description: 'Average client response time',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ];

  // Animated counter function
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.targetValue;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [index]: start
          }));
        }, 16);
      });
    }
  }, [isInView]);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-surface/30 to-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-start/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-end/10 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-start/10 border border-gradient-start/20 rounded-full mb-6"
          >
            <BarChart3 className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Our Impact</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Proven <span className="gradient-text">results</span> that speak volumes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Numbers don't lie. Here's the measurable impact we've created for our clients 
            across the Web3 ecosystem.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedNumbers[index] || 0;
            
            const formatNumber = () => {
              if (stat.suffix === 'B+') return `${stat.prefix || ''}${animatedValue.toFixed(1)}${stat.suffix}`;
              if (stat.suffix === 'M+') return `${animatedValue.toFixed(0)}${stat.suffix}`;
              if (stat.suffix === '%') return `${Math.round(animatedValue)}${stat.suffix}`;
              if (stat.suffix === 'hrs') return `${Math.round(animatedValue)}${stat.suffix}`;
              return `${Math.round(animatedValue)}${stat.suffix}`;
            };

            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="group"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 text-center h-full overflow-hidden">
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <IconComponent className="text-white" size={28} />
                    </motion.div>
                    
                    {/* Animated Number */}
                    <motion.div 
                      className="text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: stat.delay }}
                    >
                      {isInView ? formatNumber() : '0'}
                    </motion.div>
                    
                    {/* Label and Description */}
                    <h3 className="text-lg lg:text-xl font-semibold text-text-primary mb-3 group-hover:gradient-text transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Subtle border glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-start/20 transition-all duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-surface/50 to-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Delivering measurable results across the Web3 ecosystem
            </h3>
            <p className="text-text-secondary">
              Our data-driven approach ensures every campaign delivers ROI and sustainable growth for our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;