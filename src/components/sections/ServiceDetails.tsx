import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleNavigation } from '@/utils/navigation';

const ServiceDetails = () => {
  const servicePackages = [
    {
      name: 'Starter Growth',
      description: 'Perfect for early-stage Web3 projects looking to establish their presence.',
      features: [
        'Community setup & strategy',
        'Content creation (4 posts/week)',
        'Basic influencer outreach',
        'Monthly performance report',
        'Discord/Telegram management'
      ],
      highlight: 'Great for MVPs',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      name: 'Scale & Accelerate',
      description: 'Comprehensive growth strategy for projects ready to scale rapidly.',
      features: [
        'Everything in Starter',
        'Advanced KOL partnerships',
        'PR & media relations',
        'Launch campaign management',
        'Tokenomics consulting',
        'Weekly strategy calls'
      ],
      highlight: 'Most Popular',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      name: 'Enterprise Leadership',
      description: 'Full-service marketing partnership for established protocols.',
      features: [
        'Everything in Scale',
        'Dedicated account team',
        'Custom campaign development',
        'Global expansion strategy',
        'Crisis management support',
        'Quarterly strategy workshops'
      ],
      highlight: 'Maximum Impact',
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
            Choose your <span className="gradient-text">growth path</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you're launching your first token or scaling to billions in TVL, 
            we have the right approach for your growth stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular Badge */}
              {pkg.highlight === 'Most Popular' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-glow-primary">
                    {pkg.highlight}
                  </span>
                </div>
              )}
              
              <div className={`bg-background border-2 ${pkg.highlight === 'Most Popular' ? 'border-gradient-start' : 'border-border'} rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/50 transition-all duration-300`}>
                <div className="text-center mb-8">
                  <div className={`inline-block p-1 rounded-lg bg-gradient-to-r ${pkg.gradient} mb-4`}>
                    <div className="bg-background rounded px-3 py-1">
                      <span className="text-sm font-medium gradient-text">{pkg.highlight}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-gradient-start mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pkg.highlight === 'Most Popular' ? 'hero' : 'outline-glow'} 
                  className="w-full group"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;