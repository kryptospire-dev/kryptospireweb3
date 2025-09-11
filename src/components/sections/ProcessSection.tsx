import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3, CheckCircle, PlayCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'Deep dive into your project, market, and competition to identify unique opportunities.',
      features: ['Market Research', 'Competitor Analysis', 'Audience Insights', 'Goal Setting'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      number: '02',
      icon: Target,
      title: 'Strategy Development',
      description: 'Create a comprehensive marketing strategy tailored to your specific goals and budget.',
      features: ['Custom Strategy', 'Channel Selection', 'Content Planning', 'Timeline Creation'],
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Execution & Launch',
      description: 'Execute the strategy with precision while building momentum for your project.',
      features: ['Campaign Launch', 'Community Building', 'Content Creation', 'Influencer Outreach'],
      gradient: 'from-purple-500 to-violet-500',
      delay: 0.3
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Optimize & Scale',
      description: 'Continuously monitor, analyze, and optimize performance to maximize ROI.',
      features: ['Performance Tracking', 'A/B Testing', 'Strategy Refinement', 'Scaling Up'],
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
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
      y: 40,
      scale: 0.95
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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-surface/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-start/8 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-end/8 rounded-full blur-2xl" />
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
            <PlayCircle className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Our Process</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our proven <span className="gradient-text">process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A systematic approach that has driven success for 150+ Web3 projects. 
            Here's how we turn your vision into measurable results.
          </p>
        </motion.div>

        {/* Enhanced Process Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 h-full overflow-hidden">
                  {/* Enhanced Background Number */}
                  <div className="absolute top-6 right-6 text-5xl lg:text-6xl font-bold text-gradient-start/5 group-hover:text-gradient-start/10 transition-all duration-500">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Header Section */}
                    <div className="flex items-start mb-6">
                      <motion.div
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl mr-4 shadow-lg transition-all duration-300`}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gradient-start mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6 text-base">
                      {step.description}
                    </p>

                    {/* Enhanced Feature List */}
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: step.delay + featureIndex * 0.1,
                            duration: 0.5 
                          }}
                          className="flex items-center text-sm text-text-secondary"
                        >
                          <CheckCircle className="w-4 h-4 text-gradient-start mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle border enhancement on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-start/10 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Flow Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-surface/50 to-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-4">
              Ready to start your Web3 growth journey?
            </h3>
            <p className="text-text-secondary mb-6">
              Our proven 4-step process ensures your project gets the strategic foundation and execution it needs to succeed in the competitive Web3 landscape.
            </p>
            
            {/* Process indicators */}
            <div className="flex items-center justify-center gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-px bg-gradient-start/30 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;