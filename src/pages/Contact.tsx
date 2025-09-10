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

  const iconMap: { [key: string]: any } = {
    Mail, Phone, MapPin, Clock
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you within 24 hours.');
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">build something</span> amazing together
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Ready to take your Web3 project to the next level? We'd love to hear about your vision 
              and discuss how we can help you achieve your goals.
            </p>
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
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Get Started</span> Today
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-text-primary">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-surface border-border focus:border-gradient-start"
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-text-primary">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-surface border-border focus:border-gradient-start"
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-primary">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@project.com" 
                    className="bg-surface border-border focus:border-gradient-start"
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-text-primary">Project Name</Label>
                  <Input 
                    id="project" 
                    placeholder="Your awesome Web3 project" 
                    className="bg-surface border-border focus:border-gradient-start"
                    onChange={(e) => handleInputChange('project', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your project, goals, and how we can help..." 
                    rows={6}
                    className="bg-surface border-border focus:border-gradient-start"
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>

                <p className="text-sm text-text-secondary">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Contact</span> Information
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We're here to help you navigate the Web3 landscape and achieve your growth objectives. 
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CONTACT_INFO.map((info, index) => {
                  const IconComponent = iconMap[info.icon];
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-surface border border-border rounded-lg p-6 card-glow hover:border-gradient-start/30 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <h3 className="font-semibold text-text-primary">
                          {info.title}
                        </h3>
                      </div>
                      <p className="text-text-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {info.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* FAQ Section */}
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-6">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {FAQ_DATA.slice(0, 3).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-text-primary hover:text-gradient-start">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;