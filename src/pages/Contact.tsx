import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CONTACT_INFO, FAQ_DATA } from '@/constants/data';
import { handleNavigation } from '@/utils/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 25,
      scale: 0.96,
      rotateX: 8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  const cardHoverVariants = {
    initial: { 
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
    },
    hover: { 
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.12)",
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20
      }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0, rotate: -15 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: 400,
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

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Get icon component based on name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return Mail;
      case 'Phone': return Phone;
      case 'MapPin': return MapPin;
      case 'Clock': return Clock;
      default: return Mail;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                build something
              </motion.span> amazing together
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to take your Web3 project to the next level? We'd love to hear about your vision 
              and discuss how we can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="gradient-text">Get Started</span> Today
              </motion.h2>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    variants={formFieldVariants}
                    custom={0}
                  >
                    <Label htmlFor="firstName" className="text-text-primary">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    variants={formFieldVariants}
                    custom={1}
                  >
                    <Label htmlFor="lastName" className="text-text-primary">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  custom={2}
                >
                  <Label htmlFor="email" className="text-text-primary">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@project.com" 
                    className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  custom={3}
                >
                  <Label htmlFor="project" className="text-text-primary">Project Name</Label>
                  <Input 
                    id="project" 
                    placeholder="Your awesome Web3 project" 
                    className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                    onChange={(e) => handleInputChange('project', e.target.value)}
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={formFieldVariants}
                  custom={4}
                >
                  <Label htmlFor="message" className="text-text-primary">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your project, goals, and how we can help..." 
                    rows={6}
                    className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {!isSubmitted ? (
                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <motion.div
                        className="mr-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Send size={18} />
                      </motion.div>
                      <motion.span
                        variants={pulseVariants}
                        animate="animate"
                      >
                        Send Message
                      </motion.span>
                    </Button>
                  ) : (
                    <motion.div
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium"
                    >
                      <CheckCircle className="mr-2" size={18} />
                      Message Sent Successfully!
                    </motion.div>
                  )}
                </motion.div>

                <motion.p 
                  className="text-sm text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </motion.p>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="space-y-8"
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="gradient-text">Contact</span> Information
                </motion.h2>
                <motion.p 
                  className="text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  We're here to help you navigate the Web3 landscape and achieve your growth objectives. 
                  Reach out through any of these channels.
                </motion.p>
              </div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {CONTACT_INFO.map((info, index) => {
                  const IconComponent = getIconComponent(info.icon);
                  return (
                    <motion.div
                      key={info.title}
                      variants={cardVariants}
                      className="group"
                    >
                      <motion.div
                        className="bg-surface border border-border rounded-lg p-6 card-glow hover:border-gradient-start/30 transition-all duration-300 h-full relative overflow-hidden"
                        variants={cardHoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {/* Subtle background gradient on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-gradient-start/3 to-gradient-end/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-4">
                            <motion.div 
                              className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4"
                              variants={iconVariants}
                              initial="hidden"
                              whileInView="visible"
                              whileHover="hover"
                              viewport={{ once: true }}
                            >
                              <IconComponent className="text-white" size={20} />
                            </motion.div>
                            <motion.h3 
                              className="font-semibold text-text-primary"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                            >
                              {info.title}
                            </motion.h3>
                          </div>
                          <motion.p 
                            className="text-text-primary font-medium mb-1"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            {info.content}
                          </motion.p>
                          <motion.p 
                            className="text-text-secondary text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            {info.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* FAQ Section */}
              <motion.div 
                className="bg-surface border border-border rounded-xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Subtle background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gradient-start/2 to-gradient-end/2 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold text-text-primary mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    Frequently Asked Questions
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Accordion type="single" collapsible className="w-full">
                      {FAQ_DATA.slice(0, 3).map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        >
                          <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-text-primary hover:text-gradient-start transition-colors duration-300">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-text-secondary">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;