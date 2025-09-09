import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Target, 
  Coins,
  BarChart3,
  Megaphone,
  Shield,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const allServices = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Build engaged, passionate communities that drive your project forward with authentic connections.',
      features: ['Discord/Telegram Setup', 'Community Management', 'Ambassador Programs', 'Engagement Strategies'],
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies that scale your project sustainably across all channels.',
      features: ['Performance Marketing', 'KOL Partnerships', 'Influencer Outreach', 'Growth Hacking'],
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: MessageCircle,
      title: 'Content Strategy',
      description: 'Compelling narratives that resonate with your target audience and drive action.',
      features: ['Content Creation', 'Blog Writing', 'Video Production', 'Social Media Content'],
      gradient: 'from-accent-pink to-gradient-start',
    },
    {
      icon: Target,
      title: 'Launch Strategy',
      description: 'End-to-end support for successful token and project launches.',
      features: ['Go-to-Market Strategy', 'Launch Planning', 'PR & Media', 'Launch Execution'],
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: Coins,
      title: 'Tokenomics Design',
      description: 'Sustainable token economies that align incentives perfectly.',
      features: ['Token Design', 'Economic Modeling', 'Incentive Structures', 'Governance Design'],
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Deep data analysis to optimize performance and maximize ROI.',
      features: ['Performance Analytics', 'Market Research', 'Competitive Analysis', 'ROI Tracking'],
      gradient: 'from-accent-pink to-gradient-start',
    },
    {
      icon: Megaphone,
      title: 'PR & Media Relations',
      description: 'Strategic media coverage and thought leadership positioning.',
      features: ['Press Release', 'Media Outreach', 'Thought Leadership', 'Crisis Management'],
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: Shield,
      title: 'Reputation Management',
      description: 'Protect and enhance your project\'s reputation in the Web3 space.',
      features: ['Online Reputation', 'Crisis Response', 'Brand Protection', 'Community Moderation'],
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuous optimization of marketing performance and user acquisition.',
      features: ['Conversion Optimization', 'A/B Testing', 'Funnel Analysis', 'User Experience'],
      gradient: 'from-accent-pink to-gradient-start',
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Scale your project internationally with localized marketing strategies.',
      features: ['Market Entry', 'Localization', 'Regional Partnerships', 'Cultural Adaptation'],
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: Rocket,
      title: 'Strategic Consulting',
      description: 'High-level strategic guidance for complex Web3 marketing challenges.',
      features: ['Strategy Development', 'Market Analysis', 'Competitive Positioning', 'Growth Planning'],
      gradient: 'from-gradient-end to-accent-pink',
    },
  ];

  const packages = [
    {
      name: 'Startup',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for early-stage projects looking to establish their presence.',
      features: [
        'Community setup & management',
        'Content creation (4 posts/week)',
        'Basic analytics reporting',
        'Monthly strategy calls',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive growth package for scaling projects.',
      features: [
        'Full community management',
        'Multi-channel content strategy',
        'KOL & influencer partnerships',
        'Advanced analytics & optimization',
        'Bi-weekly strategy sessions',
        'PR & media outreach',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for established projects with complex needs.',
      features: [
        'Custom strategy development',
        'Dedicated account team',
        'Global expansion support',
        'Crisis management',
        'Priority support & consultation',
        'White-glove service',
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Comprehensive</span> Web3 marketing services
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              From strategy to execution, we provide end-to-end marketing solutions 
              designed to drive real growth for your Web3 project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Services</span> that scale
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose from our comprehensive suite of Web3 marketing services, 
              each designed to address specific growth challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg mb-6`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-gradient-start rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose your <span className="gradient-text">growth package</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Flexible packages designed to meet your project's specific needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? 'scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`bg-background border rounded-xl p-8 h-full ${
                  pkg.popular 
                    ? 'border-gradient-start shadow-glow-primary' 
                    : 'border-border card-glow hover:border-gradient-start/30'
                } transition-all duration-300`}>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold gradient-text">
                      {pkg.price}
                    </span>
                    <span className="text-text-secondary ml-1">
                      {pkg.period}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-8">
                    {pkg.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-text-secondary">
                        <div className="w-2 h-2 bg-gradient-start rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={pkg.popular ? "hero" : "outline-glow"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">accelerate</span> your growth?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss your project's unique needs and create a custom strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Book a Strategy Call
              </Button>
              <Button variant="outline-glow" size="xl">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;