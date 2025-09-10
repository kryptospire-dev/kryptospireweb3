import { motion } from 'framer-motion';
import { Rocket, Shield, Users, Zap } from 'lucide-react';

const MissionSection = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We stay ahead of Web3 trends and pioneer new marketing methodologies.',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Honest communication and ethical practices in everything we do.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building authentic relationships that drive long-term success.',
    },
    {
      icon: Zap,
      title: 'Results Driven',
      description: 'Every strategy is designed to deliver measurable, sustainable growth.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">mission</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              To empower Web3 projects with authentic marketing strategies that build genuine 
              communities and drive sustainable growth in the decentralized future.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Since 2019, we've been at the forefront of Web3 marketing, helping projects navigate 
              the complex landscape of decentralized communities, tokenomics, and blockchain technology. 
              We believe in growth without the hype—real strategies for real results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-sm text-text-secondary">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">$2.1B+</div>
                <div className="text-sm text-text-secondary">Market Cap Driven</div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface border border-border rounded-lg p-6 card-glow hover:border-gradient-start/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;