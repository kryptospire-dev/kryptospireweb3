import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'Deep dive into your project, market, and competition to identify unique opportunities.',
      features: ['Market Research', 'Competitor Analysis', 'Audience Insights', 'Goal Setting']
    },
    {
      number: '02',
      icon: Target,
      title: 'Strategy Development',
      description: 'Create a comprehensive marketing strategy tailored to your specific goals and budget.',
      features: ['Custom Strategy', 'Channel Selection', 'Content Planning', 'Timeline Creation']
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Execution & Launch',
      description: 'Execute the strategy with precision while building momentum for your project.',
      features: ['Campaign Launch', 'Community Building', 'Content Creation', 'Influencer Outreach']
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Optimize & Scale',
      description: 'Continuously monitor, analyze, and optimize performance to maximize ROI.',
      features: ['Performance Tracking', 'A/B Testing', 'Strategy Refinement', 'Scaling Up']
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our proven <span className="gradient-text">process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A systematic approach that has driven success for 150+ Web3 projects. 
            Here's how we turn your vision into measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300 relative overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute top-4 right-4 text-6xl font-orbitron font-bold text-gradient-start/10 group-hover:text-gradient-start/20 transition-all duration-300">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gradient-start mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary group-hover:gradient-text transition-all duration-300">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-gradient-start rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;