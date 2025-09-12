import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Award, Zap, Globe, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Web3 Native Expertise',
      description: 'Deep understanding of blockchain technology, DeFi protocols, and crypto culture built over years.',
      stats: '5+ Years Experience',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Blockchain Technology', 'DeFi Protocols', 'Smart Contracts']
    },
    {
      icon: Users,
      title: 'Authentic Community Building',
      description: 'We build real communities, not follower farms. Quality engagement over vanity metrics.',
      stats: '5M+ Community Members',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Real Engagement', 'Quality Over Quantity', 'Long-term Growth']
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Documented success across multiple Web3 verticals with measurable results.',
      stats: '$2.1B+ Market Cap Driven',
      gradient: 'from-purple-500 to-violet-500',
      features: ['150+ Projects', 'Documented Results', 'Multiple Verticals']
    },
    {
      icon: Award,
      title: 'Results-Driven Approach',
      description: 'Every strategy is backed by data and designed to deliver measurable outcomes.',
      stats: '450% Average Growth',
      gradient: 'from-orange-500 to-red-500',
      features: ['Data-Backed Strategy', 'Measurable KPIs', 'ROI Focused']
    },
    {
      icon: Zap,
      title: 'Agile & Responsive',
      description: 'Fast execution and quick pivots to capitalize on market opportunities in real-time.',
      stats: '48hr Response Time',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Fast Execution', 'Market Agility', 'Real-time Optimization']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide network of influencers, media contacts, and community builders.',
      stats: '25+ Countries Reached',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Global Network', 'Multi-timezone Support', 'Cultural Expertise']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-surface/30 via-background to-surface/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-8 w-32 h-32 bg-gradient-start/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-8 w-40 h-40 bg-gradient-end/10 rounded-full blur-2xl" />
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
            <Star className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Why Choose Us</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Why choose <span className="gradient-text">KryptoSpire?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're not just another marketing agency. We're Web3 natives who understand 
            the unique challenges and opportunities in the decentralized ecosystem.
          </p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 h-full overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 transition-opacity duration-500`}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%", transition: { duration: 0.8 } }}
                  />

                  {/* Enhanced Icon - Centered on mobile, left on desktop */}
                  <motion.div
                    className={`flex lg:inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl mb-6 relative z-10 shadow-xl mx-auto lg:mx-0`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconComponent className="text-white" size={28} />
                  </motion.div>

                  {/* Stats Badge */}
                  {/* <div className="relative z-10 mb-4">
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${reason.gradient} rounded-full text-white text-sm font-semibold`}>
                      {reason.stats}
                    </div>
                  </div> */}

                  {/* Content */}
                  <div className="relative z-10 text-center lg:text-left">
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300"
                    >
                      {reason.title}
                    </motion.h3>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {reason.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {reason.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                          className="flex items-center justify-start lg:justify-start text-sm text-text-secondary"
                        >
                          <CheckCircle className="w-4 h-4 text-gradient-start mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-surface/50 to-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-6">
              Trusted by leading Web3 projects worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-sm text-text-secondary">Projects Launched</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">$1.1B+</div>
                <div className="text-sm text-text-secondary">Market Cap Driven</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">5M+</div>
                <div className="text-sm text-text-secondary">Community Members</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">450%</div>
                <div className="text-sm text-text-secondary">Average Growth</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;