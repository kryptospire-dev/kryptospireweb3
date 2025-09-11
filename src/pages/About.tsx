import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ABOUT_DATA } from '@/constants/data';
import { handleNavigation } from '@/utils/navigation';
import TeamSection from '@/components/sections/TeamSection';
import MissionSection from '@/components/sections/MissionSection';
import { Target, Award, Users, Heart } from 'lucide-react';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    initial: { 
      y: 0, 
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      y: -5, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.95
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building the <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                future
              </motion.span> of Web3 marketing
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're more than marketers—we're Web3 natives who understand the technology, 
              the community, and the vision that drives this revolutionary space.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                  Start Your Growth Journey
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
                  View Our Success Stories
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MissionSection />
      </motion.div>

      {/* Company Timeline */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="gradient-text">Journey</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From humble beginnings to industry leadership—here's how we've grown alongside the Web3 ecosystem.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {ABOUT_DATA.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative group"
                whileHover="hover"
              >
                <motion.div 
                  className="bg-background border border-border rounded-xl p-6 card-glow hover:border-gradient-start/30 transition-all duration-300 h-full"
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div 
                    className="text-3xl font-orbitron font-bold gradient-text mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px currentColor",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.year}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-text-primary mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Subtle hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 to-gradient-end/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              These principles guide every decision we make and every strategy we develop.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {ABOUT_DATA.values.map((value, index) => {
              // Get the correct icon component
              let IconComponent;
              switch (value.icon) {
                case 'Target':
                  IconComponent = Target;
                  break;
                case 'Award':
                  IconComponent = Award;
                  break;
                case 'Users':
                  IconComponent = Users;
                  break;
                case 'Heart':
                  IconComponent = Heart;
                  break;
                default:
                  IconComponent = Target;
              }
              
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group"
                  whileHover="hover"
                >
                  <motion.div 
                    className="bg-surface border border-border rounded-xl p-8 card-glow group-hover:border-gradient-start/30 transition-all duration-300 h-full"
                    variants={cardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-lg mb-6`}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <IconComponent className="text-white" size={24} />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-semibold text-text-primary mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p 
                      className="text-text-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TeamSection />
      </motion.div>

      {/* CTA Section */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to <span className="gradient-text">grow together?</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join the 150+ Web3 projects that trust KryptoSpire to drive their growth.
            </motion.p>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleNavigation('/contact')}
              >
                Start Your Growth Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;