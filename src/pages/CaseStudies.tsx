import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CaseStudies = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

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
            <div className="flex items-center justify-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center">
                <TrendingUp className="mr-2 text-gradient-start" size={16} />
                <span>$2.1B+ Market Cap Driven</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 text-gradient-start" size={16} />
                <span>5M+ Community Members</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 text-gradient-start" size={16} />
                <span>150+ Projects Launched</span>
              </div>
            </div>
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
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-primary text-white shadow-glow-primary'
                    : 'bg-surface border border-border text-text-secondary hover:border-gradient-start/30 hover:text-gradient-start'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative aspect-video bg-gradient-to-br from-surface to-background">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-orbitron font-bold text-white/20">
                        {study.category}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gradient-start border border-gradient-start/20">
                        {study.category}
                      </span>
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

                  <CardContent className="space-y-6">
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold gradient-text">{value}</div>
                          <div className="text-xs text-text-secondary capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-xs text-gradient-start"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline-glow" className="w-full group">
                      View Full Case Study
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Launched', desc: 'Successful Web3 launches' },
              { number: '$2.1B+', label: 'Market Cap Driven', desc: 'Total value created' },
              { number: '5M+', label: 'Community Members', desc: 'Engaged community built' },
              { number: '450%', label: 'Average Growth', desc: 'TVL/Volume increase' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-background border border-border rounded-xl p-8 card-glow hover:border-gradient-start/30 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/contact')}>
                Book a Strategy Call
              </Button>
              <Button variant="outline-glow" size="xl" onClick={() => navigate(`/case-studies/${caseStudies[0].id}`)}>
                <ExternalLink className="mr-2" size={16} />
                View Full Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;