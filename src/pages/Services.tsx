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
  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 25,
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1] // Professional cubic-bezier easing
      }
    }
  };

  const cardHoverVariants = {
    initial: { 
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.1)"
    },
    hover: { 
      y: -6,
      scale: 1.015,
      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.12)",
      borderColor: "rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 25,
        mass: 0.8
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.5 + (i * 0.05)
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    tap: {
      scale: 0.96,
      transition: {
        duration: 0.1
      }
    }
  };

  // Get icon component based on name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'TrendingUp': return TrendingUp;
      case 'MessageCircle': return MessageCircle;
      case 'Target': return Target;
      case 'Coins': return Coins;
      case 'BarChart3': return BarChart3;
      case 'Megaphone': return Megaphone;
      case 'Shield': return Shield;
      case 'Zap': return Zap;
      case 'Globe': return Globe;
      case 'Rocket': return Rocket;
      default: return Users;
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              >
                Comprehensive
              </motion.span> Web3 marketing services
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            >
              From strategy to execution, we provide end-to-end marketing solutions 
              designed to drive real growth for your Web3 project.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get Custom Strategy
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.1 }}
              >
                <Button 
                  variant="outline-glow" 
                  size="xl"
                  onClick={() => handleNavigation('/case-studies')}
                >
                  See Results
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <span className="gradient-text">Services</span> that scale
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Choose from our comprehensive suite of Web3 marketing services, 
              each designed to address specific growth challenges.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="group cursor-pointer h-full"
                  onClick={() => handleNavigation('/contact')}
                  whileHover="hover"
                >
                  <motion.div 
  className="bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 
             transition-all duration-500 relative overflow-hidden
             flex flex-col items-center text-center 
             sm:items-start sm:text-left"
  variants={cardHoverVariants}
  initial="initial"
  whileHover="hover"
>
  {/* Subtle background gradient on hover */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-gradient-start/3 to-gradient-end/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    initial={false}
  />

  {/* Content */}
  <div className="relative z-10">
    <motion.div 
      className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg mb-6 
                  mx-auto sm:mx-0`}
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <IconComponent className="text-white" size={24} />
    </motion.div>
    
    <motion.h3 
      className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-500"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {service.title}
    </motion.h3>
    
    <motion.p 
      className="text-text-secondary mb-6 leading-relaxed"
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {service.description}
    </motion.p>

    <ul className="space-y-2">
      {service.features.map((feature, featureIndex) => (
        <motion.li 
          key={featureIndex} 
          className="flex items-center text-sm text-text-secondary"
          variants={featureVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={featureIndex}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-gradient-start rounded-full mr-3 flex-shrink-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.3, 
              delay: 0.6 + (featureIndex * 0.05),
              type: "spring",
              stiffness: 300
            }}
          />
          {feature}
        </motion.li>
      ))}
    </ul>
  </div>

  {/* Hover border effect */}
  <motion.div
    className="absolute inset-0 border border-gradient-start/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    initial={false}
  />
</motion.div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <ServiceDetails />
      </motion.div>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Ready to <span className="gradient-text">accelerate</span> your growth?
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Let's discuss your project's unique needs and create a custom strategy that delivers results.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
              >
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => handleNavigation('/contact')}
                >
                  Book a Strategy Call
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Button 
                  variant="outline-glow" 
                  size="xl"
                  onClick={() => handleNavigation('/case-studies')}
                >
                  View Case Studies
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;