import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Target, 
  Coins,
  BarChart3 
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Build engaged, passionate communities that drive your project forward.',
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies that scale your project sustainably.',
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: MessageCircle,
      title: 'Content Strategy',
      description: 'Compelling narratives that resonate with your target audience.',
      gradient: 'from-accent-pink to-gradient-start',
    },
    {
      icon: Target,
      title: 'Launch Strategy',
      description: 'End-to-end support for successful token and project launches.',
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: Coins,
      title: 'Tokenomics Design',
      description: 'Sustainable token economies that align incentives perfectly.',
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Deep data analysis to optimize performance and ROI.',
      gradient: 'from-accent-pink to-gradient-start',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span> that deliver results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive Web3 marketing solutions 
            that drive real growth without empty promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                  {/* Background gradient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg mb-6 relative z-10`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${service.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-8">
            Ready to transform your Web3 project?
          </p>
          <button className="btn-gradient px-8 py-3 rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;