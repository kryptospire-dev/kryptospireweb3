import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CaseStudyDialog from '../components/sections/CaseStudyDialog'; // Import the dialog component

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filters = ['All', 'DeFi', 'NFTs', 'DAOs', 'GameFi', 'Infrastructure'];

  const caseStudies = [
    {
      id: 1,
      title: 'DeFiVault Protocol',
      category: 'DeFi',
      image: '/placeholder.svg',
      description: 'Transformed a struggling DeFi protocol into a $50M TVL success story.',
      results: {
        growth: '+450% TVL',
        community: '25K members',
        roi: '$2.1M raised'
      },
      tags: ['Community Building', 'Launch Strategy', 'Content'],
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      id: 2,
      title: 'MetaWorlds NFT',
      category: 'NFTs',
      image: '/placeholder.svg',
      description: 'Launched and sold out 10,000 NFT collection in under 2 hours.',
      results: {
        growth: '10K sold out',
        community: '50K Discord',
        roi: '15 ETH floor'
      },
      tags: ['Launch Strategy', 'Community', 'Influencer'],
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      id: 3,
      title: 'DecenDAO Governance',
      category: 'DAOs',
      image: '/placeholder.svg',
      description: 'Built a thriving governance community with 80% voting participation.',
      results: {
        growth: '80% participation',
        community: '15K voters',
        roi: '$5M treasury'
      },
      tags: ['Community', 'Governance', 'Strategy'],
      gradient: 'from-accent-pink to-gradient-start'
    },
    {
      id: 4,
      title: 'CryptoRealm Game',
      category: 'GameFi',
      image: '/placeholder.svg',
      description: 'Launched Play-to-Earn game with sustainable tokenomics and engaged player base.',
      results: {
        growth: '+300% MAU',
        community: '100K players',
        roi: '$8M token value'
      },
      tags: ['Tokenomics', 'Community', 'Content'],
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      id: 5,
      title: 'ChainLink Oracle',
      category: 'Infrastructure',
      image: '/placeholder.svg',
      description: 'Scaled oracle network adoption across 50+ protocols and chains.',
      results: {
        growth: '50+ integrations',
        community: '30K developers',
        roi: '$100M+ secured'
      },
      tags: ['Growth Marketing', 'Developer Relations', 'PR'],
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      id: 6,
      title: 'YieldFarm Protocol',
      category: 'DeFi',
      image: '/placeholder.svg',
      description: 'Revitalized yield farming protocol with innovative reward mechanisms.',
      results: {
        growth: '+600% APY',
        community: '20K farmers',
        roi: '$12M locked'
      },
      tags: ['Tokenomics', 'Community', 'Analytics'],
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  // Use useCallback to memoize the filter handler
  const handleFilterChange = useCallback((filter) => {
    console.log('Filter change requested:', filter, 'Current:', activeFilter);
    setActiveFilter(filter);
  }, [activeFilter]);

  // Handler for opening case study dialog
  const handleCaseStudyClick = useCallback((caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsDialogOpen(true);
  }, []);

  // Handler for closing dialog
  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedCaseStudy(null);
  }, []);

  // Memoize the filtered results
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

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

  const cardVariants = {
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
        duration: 0.5,
        ease: "easeOut"
      }
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Real <span className="gradient-text">results</span> for real projects
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Discover how we've helped Web3 projects achieve extraordinary growth, 
              build thriving communities, and create lasting impact in the decentralized ecosystem.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-8 text-sm text-text-secondary"
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="mr-2 text-gradient-start" size={16} />
                <span>$2.1B+ Market Cap Driven</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="mr-2 text-gradient-start" size={16} />
                <span>5M+ Community Members</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DollarSign className="mr-2 text-gradient-start" size={16} />
                <span>150+ Projects Launched</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={`filter-${filter}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Button clicked for filter:', filter);
                  handleFilterChange(filter);
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-primary text-white shadow-glow-primary'
                    : 'bg-surface border border-border text-text-secondary hover:border-gradient-start/30 hover:text-gradient-start'
                }`}
                type="button"
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div 
            key={`grid-${activeFilter}`} // Force re-render when filter changes
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Changed from whileInView to animate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study) => (
              <motion.div
                key={`study-${study.id}-${activeFilter}`} // Unique key with filter
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video bg-gradient-to-br from-surface to-background">
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="text-6xl font-orbitron font-bold text-white/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {study.category}
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gradient-start border border-gradient-start/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {study.category}
                      </motion.span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-text-primary group-hover:gradient-text transition-all duration-300">
                      {study.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {study.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.results).map(([key, value], index) => (
                        <motion.div 
                          key={key} 
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                        >
                          <div className="text-lg font-bold gradient-text">{value}</div>
                          <div className="text-xs text-text-secondary capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 flex-1">
                      {study.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-xs text-gradient-start"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto">
                      <Button 
                        variant="outline-glow" 
                        className="w-full group"
                        onClick={() => handleCaseStudyClick(study)}
                      >
                        View Full Case Study
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Success <span className="gradient-text">by the numbers</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '150+', label: 'Projects Launched', desc: 'Successful Web3 launches' },
              { number: '$2.1B+', label: 'Market Cap Driven', desc: 'Total value created' },
              { number: '5M+', label: 'Community Members', desc: 'Engaged community built' },
              { number: '450%', label: 'Average Growth', desc: 'TVL/Volume increase' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.9
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-center h-full"
              >
                <motion.div 
                  className="bg-background border border-border rounded-xl p-8 card-glow hover:border-gradient-start/30 transition-all duration-300 h-full flex flex-col justify-between min-h-[200px]"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold gradient-text mb-3"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-lg font-semibold text-text-primary mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {stat.label}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-text-secondary"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.desc}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Ready to become our <span className="gradient-text">next success story?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join the 150+ Web3 projects that have achieved extraordinary results with KryptoSpire.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="xl">
                  Book a Strategy Call
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline-glow" size="xl">
                  <ExternalLink className="mr-2" size={16} />
                  View Full Case Studies
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Dialog */}
      <CaseStudyDialog 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        caseStudy={selectedCaseStudy}
      />
    </main>
  );
};

export default CaseStudies;