import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Award, Zap, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Web3 Native Expertise',
      description: 'Deep understanding of blockchain technology, DeFi protocols, and crypto culture.',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Users,
      title: 'Authentic Community Building',
      description: 'We build real communities, not follower farms. Quality engagement over vanity metrics.',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '$2.1B+ in market cap driven across 150+ successful Web3 project launches.',
      gradient: 'from-accent-pink to-gradient-start'
    },
    {
      icon: Award,
      title: 'Results-Driven Approach',
      description: 'Every strategy is backed by data and designed to deliver measurable outcomes.',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Zap,
      title: 'Agile & Responsive',
      description: 'Fast execution and quick pivots to capitalize on market opportunities.',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide network of influencers, media contacts, and community builders.',
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why choose <span className="gradient-text">KryptoSpire?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're not just another marketing agency. We're Web3 natives who understand 
            the unique challenges and opportunities in the decentralized ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-lg mb-6`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;