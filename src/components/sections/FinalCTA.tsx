import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-br from-gradient-start/10 via-background to-gradient-end/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-start/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-surface border border-border rounded-full mb-8">
            <div className="w-2 h-2 bg-gradient-start rounded-full mr-3 animate-pulse" />
            <span className="text-sm text-text-secondary font-medium">
              Ready to scale your Web3 project?
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's build something <span className="gradient-text">extraordinary</span> together
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the 150+ Web3 projects that have achieved remarkable growth with KryptoSpire. 
            Your success story starts with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => navigate('/contact')}
            >
              <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Book Your Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              variant="outline-glow" 
              size="xl"
              onClick={() => navigate('/case-studies')}
              className="group"
            >
              View Success Stories
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '150+', label: 'Projects Launched' },
              { number: '$1.1B+', label: 'Market Cap Driven' },
              { number: '5M+', label: 'Community Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;