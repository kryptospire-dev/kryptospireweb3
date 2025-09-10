import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award, Globe, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '$2.1B+',
      label: 'Market Cap Driven',
      description: 'Total value created for our clients',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Users,
      number: '5M+',
      label: 'Community Members',
      description: 'Engaged community members built',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: DollarSign,
      number: '150+',
      label: 'Projects Launched',
      description: 'Successful Web3 project launches',
      gradient: 'from-accent-pink to-gradient-start'
    },
    {
      icon: Award,
      number: '450%',
      label: 'Average Growth',
      description: 'Average TVL/Volume increase',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Reached',
      description: 'Global market expansion',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: Zap,
      number: '48hrs',
      label: 'Response Time',
      description: 'Average client response time',
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-surface/30 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proven <span className="gradient-text">results</span> that speak volumes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Numbers don't lie. Here's the measurable impact we've created for our clients 
            across the Web3 ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 text-center card-glow group-hover:border-gradient-start/30 transition-all duration-300 relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl mb-6`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3">
                      {stat.number}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {stat.label}
                    </h3>
                    
                    <p className="text-text-secondary text-sm">
                      {stat.description}
                    </p>
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

export default StatsSection;