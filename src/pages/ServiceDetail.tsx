import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SERVICES_DATA } from '@/constants/data';

const ServiceDetail = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  
  const serviceData = SERVICES_DATA.find(s => 
    s.title.toLowerCase().replace(/\s+/g, '-') === service
  );
  
  if (!serviceData) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Button onClick={() => navigate('/services')}>
              Back to Services
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="mb-8 hover:bg-surface"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{serviceData.title}</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {serviceData.description}
            </p>
            
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              What's <span className="gradient-text">Included</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {serviceData.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-surface border border-border rounded-lg"
                >
                  <CheckCircle className="text-gradient-start mr-4 flex-shrink-0" size={20} />
                  <span className="text-text-primary font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Process */}
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our <span className="gradient-text">Process</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-surface border-border p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold gradient-text mb-4">01</div>
                  <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                  <p className="text-text-secondary">
                    We dive deep into your project goals, target audience, and current challenges 
                    to create a tailored strategy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface border-border p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold gradient-text mb-4">02</div>
                  <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                  <p className="text-text-secondary">
                    Our experts develop a comprehensive plan with clear milestones, 
                    KPIs, and deliverables.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface border-border p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold gradient-text mb-4">03</div>
                  <h3 className="text-xl font-semibold mb-3">Execution</h3>
                  <p className="text-text-secondary">
                    We implement the strategy with continuous optimization and 
                    transparent reporting on progress.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="bg-surface border border-border rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to get started with {serviceData.title}?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Let's discuss how our {serviceData.title.toLowerCase()} expertise can help 
                accelerate your Web3 project's growth.
              </p>
              <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
                Book Your Strategy Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;