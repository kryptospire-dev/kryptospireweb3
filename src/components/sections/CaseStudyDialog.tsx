import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Users, DollarSign, Calendar, Target, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CaseStudyDialog = ({ isOpen, onClose, caseStudy }) => {
  if (!caseStudy) return null;

  // Detailed case study data - you can expand this based on your needs
  const detailedData = {
    1: {
      ...caseStudy,
      duration: '6 months',
      challenge: 'DeFiVault was struggling with low TVL and minimal community engagement. The protocol had innovative features but lacked visibility and user adoption in the competitive DeFi landscape.',
      solution: 'We implemented a comprehensive strategy focusing on community-first growth, strategic partnerships with key DeFi influencers, and a content marketing campaign that highlighted the protocol\'s unique value propositions.',
      timeline: [
        { phase: 'Month 1-2', title: 'Foundation Building', description: 'Community setup, content strategy development, and initial influencer outreach' },
        { phase: 'Month 3-4', title: 'Growth Acceleration', description: 'Launched referral programs, KOL partnerships, and educational content series' },
        { phase: 'Month 5-6', title: 'Scale & Optimize', description: 'Performance optimization, advanced analytics implementation, and sustainable growth strategies' }
      ],
      metrics: [
        { label: 'Total Value Locked', before: '$2.1M', after: '$50M', growth: '+450%' },
        { label: 'Active Users', before: '1,200', after: '15,800', growth: '+1,217%' },
        { label: 'Community Size', before: '5K', after: '25K', growth: '+400%' },
        { label: 'Daily Transactions', before: '145', after: '2,300', growth: '+1,486%' }
      ],
      testimonial: {
        quote: 'KryptoSpire transformed our struggling protocol into a $50M TVL success. Their community-first approach and deep Web3 knowledge made all the difference.',
        author: 'Sarah Chen',
        role: 'Founder, DeFiVault Protocol'
      }
    },
    2: {
      ...caseStudy,
      duration: '3 months',
      challenge: 'MetaWorlds needed to launch their 10,000 NFT collection in a saturated market with declining floor prices across the industry. The challenge was creating genuine utility and demand.',
      solution: 'We developed a multi-phase launch strategy combining exclusive pre-launch community building, strategic influencer partnerships, and a utility-first narrative that emphasized long-term value over quick flips.',
      timeline: [
        { phase: 'Month 1', title: 'Pre-Launch Hype', description: 'Community building, whitelist campaigns, and strategic partnerships' },
        { phase: 'Month 2', title: 'Launch Preparation', description: 'Influencer collaborations, content creation, and technical preparation' },
        { phase: 'Month 3', title: 'Launch & Growth', description: 'Successful mint, secondary market support, and utility rollout' }
      ],
      metrics: [
        { label: 'Mint Time', before: 'Target: 24h', after: 'Actual: 2h', growth: '92% faster' },
        { label: 'Discord Members', before: '2K', after: '50K', growth: '+2,400%' },
        { label: 'Floor Price', before: '0.05 ETH', after: '15 ETH', growth: '+29,900%' },
        { label: 'Trading Volume', before: '0 ETH', after: '2,500 ETH', growth: 'Launch success' }
      ],
      testimonial: {
        quote: 'The team helped us sell out our 10K NFT collection in under 2 hours. Their launch strategy and influencer network are unmatched in the Web3 space.',
        author: 'Marcus Rodriguez',
        role: 'CEO, MetaWorlds NFT'
      }
    },
    3: {
      ...caseStudy,
      duration: '8 months',
      challenge: 'DecenDAO faced the common challenge of low governance participation, with less than 5% of token holders actively voting on proposals. This threatened the protocol\'s decentralized nature.',
      solution: 'We implemented a comprehensive governance engagement strategy including educational content, simplified voting processes, incentive structures, and community-driven proposal development.',
      timeline: [
        { phase: 'Month 1-3', title: 'Education & Onboarding', description: 'Governance education, UI/UX improvements, and community ambassador program' },
        { phase: 'Month 4-6', title: 'Incentive Implementation', description: 'Voting rewards system, proposal quality improvements, and delegate program launch' },
        { phase: 'Month 7-8', title: 'Optimization & Scale', description: 'Advanced analytics, participation optimization, and long-term sustainability planning' }
      ],
      metrics: [
        { label: 'Voting Participation', before: '5%', after: '80%', growth: '+1,500%' },
        { label: 'Active Voters', before: '800', after: '15,000', growth: '+1,775%' },
        { label: 'Treasury Value', before: '$500K', after: '$5M', growth: '+900%' },
        { label: 'Proposal Quality Score', before: '2.1/5', after: '4.7/5', growth: '+124%' }
      ],
      testimonial: {
        quote: 'Thanks to KryptoSpire, we achieved 80% voting participation in our governance - something most DAOs can only dream of. Incredible results.',
        author: 'Alexandra Kim',
        role: 'Head of Growth, DecenDAO'
      }
    },
    4: {
      ...caseStudy,
      duration: '9 months',
      challenge: 'CryptoRealm needed to launch a sustainable Play-to-Earn game in a market flooded with unsustainable tokenomics and short-lived gaming projects.',
      solution: 'We designed a comprehensive launch strategy focusing on sustainable tokenomics, genuine gameplay value, and long-term community building rather than quick speculation.',
      timeline: [
        { phase: 'Month 1-3', title: 'Foundation & Beta', description: 'Community building, beta testing, and tokenomics refinement' },
        { phase: 'Month 4-6', title: 'Launch & Growth', description: 'Public launch, player acquisition, and ecosystem development' },
        { phase: 'Month 7-9', title: 'Scale & Sustain', description: 'Feature expansion, economic optimization, and long-term sustainability' }
      ],
      metrics: [
        { label: 'Monthly Active Users', before: '0', after: '100K', growth: 'Launch success' },
        { label: 'Daily Sessions', before: '0', after: '500K', growth: 'Strong engagement' },
        { label: 'Token Value', before: '$0', after: '$8M market cap', growth: 'Successful launch' },
        { label: 'Player Retention', before: 'N/A', after: '65% (30-day)', growth: 'Industry leading' }
      ],
      testimonial: {
        quote: 'KryptoSpire helped us build a sustainable P2E ecosystem that players actually want to engage with long-term. Their tokenomics expertise was invaluable.',
        author: 'David Park',
        role: 'Founder, CryptoRealm Game'
      }
    },
    5: {
      ...caseStudy,
      duration: '12 months',
      challenge: 'ChainLink Oracle needed to expand their network adoption across multiple chains while maintaining security and reliability standards.',
      solution: 'We developed a multi-chain growth strategy focusing on developer relations, technical content marketing, and strategic partnership development.',
      timeline: [
        { phase: 'Month 1-4', title: 'Developer Relations', description: 'Technical documentation, developer outreach, and educational content' },
        { phase: 'Month 5-8', title: 'Partnership Expansion', description: 'Protocol integrations, cross-chain deployments, and ecosystem growth' },
        { phase: 'Month 9-12', title: 'Scale & Security', description: 'Network optimization, security audits, and institutional adoption' }
      ],
      metrics: [
        { label: 'Protocol Integrations', before: '10', after: '50+', growth: '+400%' },
        { label: 'Developer Community', before: '5K', after: '30K', growth: '+500%' },
        { label: 'Value Secured', before: '$10M', after: '$100M+', growth: '+900%' },
        { label: 'Cross-chain Deployments', before: '2', after: '15', growth: '+650%' }
      ],
      testimonial: {
        quote: 'The strategic approach to developer relations and partnership development helped us achieve unprecedented network growth and adoption.',
        author: 'Sarah Johnson',
        role: 'Head of Business Development, ChainLink Oracle'
      }
    },
    6: {
      ...caseStudy,
      duration: '5 months',
      challenge: 'YieldFarm Protocol was struggling with unsustainable APY rates and declining user interest in their yield farming opportunities.',
      solution: 'We redesigned their tokenomics model and implemented a sustainable rewards system combined with strategic marketing to attract long-term yield farmers.',
      timeline: [
        { phase: 'Month 1-2', title: 'Tokenomics Redesign', description: 'Economic modeling, sustainability analysis, and mechanism design' },
        { phase: 'Month 3-4', title: 'Community Rebuild', description: 'User education, migration support, and trust rebuilding' },
        { phase: 'Month 5', title: 'Growth & Optimization', description: 'Performance marketing, yield optimization, and ecosystem expansion' }
      ],
      metrics: [
        { label: 'Sustainable APY', before: '50% (unsustainable)', after: '600% (sustainable)', growth: 'Improved model' },
        { label: 'Active Farmers', before: '2K', after: '20K', growth: '+900%' },
        { label: 'Total Value Locked', before: '$1M', after: '$12M', growth: '+1,100%' },
        { label: 'User Retention', before: '15%', after: '75%', growth: '+400%' }
      ],
      testimonial: {
        quote: 'KryptoSpire completely transformed our yield farming protocol with sustainable tokenomics that actually work long-term.',
        author: 'Michael Zhang',
        role: 'CTO, YieldFarm Protocol'
      }
    }
  };

  const currentData = detailedData[caseStudy.id] || caseStudy;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="bg-background border-border overflow-hidden">
              {/* Header */}
              <CardHeader className={`relative overflow-hidden bg-gradient-to-br ${currentData.gradient} p-8`}>
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                <div className="relative z-10">
                  <motion.span 
                    className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentData.category}
                  </motion.span>
                  
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentData.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-white/90 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentData.description}
                  </motion.p>

                  {currentData.duration && (
                    <motion.div 
                      className="flex items-center mt-4 text-white/80"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Calendar size={16} className="mr-2" />
                      <span>Project Duration: {currentData.duration}</span>
                    </motion.div>
                  )}
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>
              </CardHeader>

              {/* Scrollable Content */}
              <CardContent className="p-8 max-h-[65vh] overflow-y-auto space-y-8 pb-20">
                {/* Key Results */}
                <motion.section 
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {Object.entries(currentData.results).map(([key, value], index) => (
                    <motion.div 
                      key={key}
                      className="text-center p-4 bg-surface rounded-lg border border-border"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                      <div className="text-sm text-text-secondary capitalize">{key}</div>
                    </motion.div>
                  ))}
                </motion.section>

                {/* Challenge & Solution */}
                {currentData.challenge && currentData.solution && (
                  <motion.section 
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Target className="mr-3 text-gradient-start" size={20} />
                        <h3 className="text-xl font-semibold text-text-primary">The Challenge</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{currentData.challenge}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Zap className="mr-3 text-gradient-start" size={20} />
                        <h3 className="text-xl font-semibold text-text-primary">Our Solution</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{currentData.solution}</p>
                    </div>
                  </motion.section>
                )}

                {/* Timeline */}
                {currentData.timeline && (
                  <motion.section 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-xl font-semibold text-text-primary">Project Timeline</h3>
                    <div className="space-y-4">
                      {currentData.timeline.map((phase, index) => (
                        <motion.div 
                          key={index}
                          className="flex gap-4 p-4 bg-surface rounded-lg border border-border"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-20 text-sm font-medium text-gradient-start">
                            {phase.phase}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-text-primary mb-1">{phase.title}</h4>
                            <p className="text-text-secondary text-sm">{phase.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Detailed Metrics */}
                {currentData.metrics && (
                  <motion.section 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <h3 className="text-xl font-semibold text-text-primary">Detailed Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentData.metrics.map((metric, index) => (
                        <motion.div 
                          key={index}
                          className="p-4 bg-surface rounded-lg border border-border"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-text-primary">{metric.label}</span>
                            <span className="text-sm font-bold text-green-500">{metric.growth}</span>
                          </div>
                          <div className="flex justify-between text-sm text-text-secondary">
                            <span>Before: {metric.before}</span>
                            <span>After: {metric.after}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Tags */}
                <motion.section 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <h3 className="text-xl font-semibold text-text-primary">Services Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentData.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded-full text-sm text-gradient-start"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.section>

                {/* Testimonial */}
                {currentData.testimonial && (
                  <motion.section 
                    className="p-6 bg-gradient-to-br from-surface to-background rounded-lg border border-border"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="flex items-start space-x-4">
                      <Award className="text-gradient-start flex-shrink-0 mt-1" size={24} />
                      <div>
                        <blockquote className="text-text-primary italic mb-3 text-lg leading-relaxed">
                          "{currentData.testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-text-primary">{currentData.testimonial.author}</div>
                          <div className="text-text-secondary text-sm">{currentData.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* CTA */}
                <motion.section 
                  className="text-center pt-6 border-t border-border"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Ready to achieve similar results?
                  </h3>
                  <Button variant="hero" size="lg">
                    Book a Strategy Call
                  </Button>
                </motion.section>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDialog;