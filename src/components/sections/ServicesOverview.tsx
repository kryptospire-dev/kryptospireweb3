import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  TrendingUp,
  MessageCircle,
  Target,
  Coins,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Users,
      title: "Community Building",
      description: "Build engaged, passionate communities that drive your project forward with authentic connections.",
      features: ["Discord/Telegram Setup", "Community Management", "Ambassador Programs"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Data-driven strategies that scale your project sustainably across all channels.",
      features: ["Performance Marketing", "KOL Partnerships", "Growth Hacking"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: MessageCircle,
      title: "Content Strategy",
      description: "Compelling narratives that resonate with your target audience and drive action.",
      features: ["Content Creation", "Social Media", "Video Production"],
      gradient: "from-purple-500 to-violet-500",
      delay: 0.3
    },
    {
      icon: Target,
      title: "Launch Strategy",
      description: "End-to-end support for successful token and project launches.",
      features: ["Go-to-Market Strategy", "Launch Planning", "PR & Media"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      icon: Coins,
      title: "Tokenomics Design",
      description: "Sustainable token economies that align incentives perfectly.",
      features: ["Token Design", "Economic Modeling", "Governance Design"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep data analysis to optimize performance and maximize ROI.",
      features: ["Performance Analytics", "Market Research", "ROI Tracking"],
      gradient: "from-pink-500 to-rose-500",
      delay: 0.6
    },
  ];

  const navigate = useNavigate();

  const handleServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-surface/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-start/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-end/10 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-start/10 border border-gradient-start/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Our Services</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Services</span> that deliver results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide comprehensive Web3 marketing
            solutions that drive real growth without empty promises.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 h-full overflow-hidden">

                  {/* Enhanced Icon - Centered on mobile, left on desktop */}
                  <motion.div
                    className={`flex lg:inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 relative z-10 shadow-lg mx-auto lg:mx-0`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconComponent className="text-white" size={28} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center lg:text-left">
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: service.delay + featureIndex * 0.1 }}
                          className="flex items-center justify-center lg:justify-start text-sm text-text-secondary"
                        >
                          <CheckCircle className="w-4 h-4 text-gradient-start mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-surface/50 to-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Ready to transform your Web3 project?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Let's discuss how our proven strategies can accelerate your growth and build a thriving community around your project.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={handleServices}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gradient-start" />
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gradient-start" />
                Custom Strategy
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gradient-start" />
                Proven Results
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;