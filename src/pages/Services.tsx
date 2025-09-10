import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SERVICES_DATA } from '@/constants/data';
import { handleNavigation } from '@/utils/navigation';
import ServiceDetails from '@/components/sections/ServiceDetails';
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

const Services = () => {
  // Dynamic icon mapping
  const iconMap: { [key: string]: any } = {
    Users, TrendingUp, MessageCircle, Target, Coins,
    BarChart3, Megaphone, Shield, Zap, Globe, Rocket
  };

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
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              From strategy to execution, we provide end-to-end marketing solutions 
              designed to drive real growth for your Web3 project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleNavigation('/contact')}
              >
                Get Custom Strategy
              </Button>
              <Button 
                variant="outline-glow" 
                size="xl"
                onClick={() => handleNavigation('/case-studies')}
              >
                See Results
              </Button>
            </div>
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
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => handleNavigation('/contact')}
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

      {/* Service Packages */}
      <ServiceDetails />

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
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleNavigation('/contact')}
              >
                Book a Strategy Call
              </Button>
              <Button 
                variant="outline-glow" 
                size="xl"
                onClick={() => handleNavigation('/case-studies')}
              >
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