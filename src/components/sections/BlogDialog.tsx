import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogDialog = ({ isOpen, onClose, blogPost }) => {
  if (!blogPost) return null;

  // Extended content for the blog (this would typically come from your CMS/API)
  const getExtendedContent = (postId) => {
    const contentMap = {
      1: {
        fullContent: `
          <p>The landscape of Web3 community building is rapidly evolving beyond traditional platforms like Discord and Telegram. While these platforms have served as the foundation for most crypto communities, we're seeing innovative new approaches that prioritize engagement, value creation, and sustainable growth.</p>
          
          <h3>The Limitations of Current Platforms</h3>
          <p>Discord and Telegram, while popular, weren't designed specifically for Web3 communities. They lack native token integration, governance features, and sophisticated moderation tools that modern DAOs and projects need.</p>
          
          <h3>Emerging Platforms and Strategies</h3>
          <p>New platforms like Guild.xyz, Snapshot, and Commonwealth are creating purpose-built solutions for Web3 communities. These platforms offer:</p>
          <ul>
            <li>Token-gated access and roles</li>
            <li>Integrated governance systems</li>
            <li>Reward mechanisms for participation</li>
            <li>Cross-platform identity verification</li>
          </ul>
          
          <h3>Best Practices for Community Growth</h3>
          <p>Successful Web3 communities focus on providing real value to members through education, networking opportunities, and shared ownership in the project's success. The key is creating multiple touchpoints and engagement layers that cater to different types of community members.</p>
          
          <p>Building a thriving Web3 community requires understanding the unique motivations of crypto-native users and providing them with tools to actively participate in governance and decision-making processes.</p>
        `,
        metrics: {
          views: '2,847'
        }
      },
      2: {
        fullContent: `
          <p>The DeFi marketing landscape in 2025 is fundamentally different from just two years ago. Regulatory clarity has brought both opportunities and constraints that marketing teams must navigate carefully.</p>
          
          <h3>The New Regulatory Environment</h3>
          <p>With increased regulatory oversight from SEC, CFTC, and international bodies, DeFi projects must now balance innovation with compliance. This shift has led to the emergence of "compliance-first" marketing strategies.</p>
          
          <h3>Key Compliance Considerations</h3>
          <ul>
            <li>Clear disclaimers about token utility vs. securities</li>
            <li>Geographic restrictions and compliance</li>
            <li>Educational content over promotional material</li>
            <li>Transparent communication about risks</li>
          </ul>
          
          <h3>Community-Driven Growth</h3>
          <p>The most successful DeFi projects are focusing on organic community growth through education and value creation rather than aggressive marketing tactics. This approach builds trust and ensures long-term sustainability.</p>
          
          <p>Marketing teams are now working closely with legal departments to ensure all communications meet regulatory standards while still effectively communicating the project's value proposition.</p>
        `,
        metrics: {
          views: '1,923'
        }
      },
      3: {
        fullContent: `
          <p>NFTs are evolving far beyond their origins as digital art collectibles. The next wave of NFT innovation focuses on utility, functionality, and real-world applications that provide tangible value to holders.</p>
          
          <h3>Beyond Collectibles: Functional NFTs</h3>
          <p>Modern NFTs serve as:</p>
          <ul>
            <li>Access tokens for exclusive communities and events</li>
            <li>Membership cards with evolving benefits</li>
            <li>Identity verification tools</li>
            <li>Governance tokens with voting rights</li>
            <li>Dynamic assets that change based on user behavior</li>
          </ul>
          
          <h3>Real-World Integration</h3>
          <p>We're seeing NFTs integrated into physical experiences, from restaurant loyalty programs to real estate transactions. This bridge between digital and physical worlds represents the future of NFT utility.</p>
          
          <h3>Technical Innovations</h3>
          <p>New standards like ERC-6551 (Token Bound Accounts) and ERC-4907 (Rental NFTs) are enabling more sophisticated use cases. These technical improvements make NFTs more versatile and valuable as functional assets.</p>
          
          <p>The most successful NFT projects of 2025 will be those that solve real problems and provide ongoing value rather than relying solely on speculative trading.</p>
        `,
        metrics: {
          views: '3,156'
        }
      },
      4: {
        fullContent: `
          <p>Effective DAO governance requires more than just voting mechanisms. It demands comprehensive analytics frameworks that help measure community health, engagement quality, and decision-making effectiveness.</p>
          
          <h3>Essential DAO Metrics</h3>
          <p>Key performance indicators for DAO success include:</p>
          <ul>
            <li>Proposal participation rates</li>
            <li>Voter turnout and distribution</li>
            <li>Community growth and retention</li>
            <li>Treasury management efficiency</li>
            <li>Contributor satisfaction and productivity</li>
          </ul>
          
          <h3>Analytics Tools and Frameworks</h3>
          <p>Modern DAOs leverage tools like DeepDAO, Messari Governor, and custom dashboards to track these metrics in real-time. The goal is to identify trends and make data-driven improvements to governance processes.</p>
          
          <h3>Behavioral Analysis</h3>
          <p>Understanding voter behavior patterns helps DAOs design better incentive structures and improve proposal quality. This includes analyzing voting delegation patterns, proposal discussion quality, and member engagement cycles.</p>
          
          <p>The most successful DAOs treat governance as a product that requires continuous iteration and improvement based on member feedback and behavioral data.</p>
        `,
        metrics: {
          views: '1,745'
        }
      },
      5: {
        fullContent: `
          <p>In an industry saturated with hype and speculation, authentic content strategy has become the key differentiator for Web3 projects seeking to build lasting relationships with their audiences.</p>
          
          <h3>The Problem with Hype-Driven Content</h3>
          <p>Traditional crypto marketing relies heavily on promises of quick returns, complex technical jargon, and fear-of-missing-out tactics. This approach attracts speculators but fails to build genuine community engagement.</p>
          
          <h3>Building Authentic Narratives</h3>
          <p>Successful Web3 content strategies focus on:</p>
          <ul>
            <li>Educational content that empowers users</li>
            <li>Transparent communication about challenges and progress</li>
            <li>Stories from real community members</li>
            <li>Behind-the-scenes insights into development</li>
            <li>Honest discussions about risks and limitations</li>
          </ul>
          
          <h3>Content Distribution Strategy</h3>
          <p>Multi-platform content distribution ensures maximum reach while maintaining message consistency. This includes long-form blog posts, video content, podcasts, and interactive community discussions.</p>
          
          <p>The goal is to build trust through consistent, valuable content that helps users make informed decisions rather than impulse purchases.</p>
        `,
        metrics: {
          views: '2,234'
        }
      },
      6: {
        fullContent: `
          <p>Understanding the psychological drivers behind Web3 community participation is crucial for building engaging, sustainable communities that members genuinely want to be part of.</p>
          
          <h3>Motivation Factors in Web3 Communities</h3>
          <p>Community members are driven by:</p>
          <ul>
            <li>Sense of ownership and governance participation</li>
            <li>Learning opportunities and skill development</li>
            <li>Social connection and networking</li>
            <li>Financial incentives and rewards</li>
            <li>Status and recognition within the community</li>
          </ul>
          
          <h3>Behavioral Patterns</h3>
          <p>Research shows that the most engaged community members cycle through different participation phases: lurking, contributing, leading, and mentoring. Understanding these phases helps design appropriate engagement strategies.</p>
          
          <h3>Creating Psychological Safety</h3>
          <p>Successful communities foster environments where members feel safe to ask questions, share ideas, and make mistakes. This requires careful moderation and community guideline enforcement.</p>
          
          <p>The most thriving Web3 communities balance financial incentives with intrinsic motivations like autonomy, mastery, and purpose.</p>
        `,
        metrics: {
          views: '1,892'
        }
      },
      7: {
        fullContent: `
          <p>As the multi-chain ecosystem continues to expand, marketing teams face the challenge of building cohesive brand experiences across diverse blockchain networks, each with unique cultures and user behaviors.</p>
          
          <h3>Understanding Chain-Specific Cultures</h3>
          <p>Each blockchain ecosystem has developed distinct characteristics:</p>
          <ul>
            <li>Ethereum: DeFi innovation and NFT culture</li>
            <li>Solana: Speed and low-cost transactions</li>
            <li>Polygon: Sustainability and scalability focus</li>
            <li>Avalanche: Enterprise and institutional adoption</li>
            <li>BNB Chain: Trading and yield farming</li>
          </ul>
          
          <h3>Cross-Chain Marketing Strategies</h3>
          <p>Successful multi-network marketing requires:</p>
          <ul>
            <li>Platform-specific content adaptation</li>
            <li>Community manager specialization</li>
            <li>Technical integration considerations</li>
            <li>Unified brand messaging across chains</li>
          </ul>
          
          <h3>Technical and Cultural Bridges</h3>
          <p>Building bridges between communities involves creating shared experiences, cross-chain governance participation, and unified reward systems that work across multiple networks.</p>
          
          <p>The future belongs to projects that can seamlessly operate across multiple chains while respecting and adapting to each ecosystem's unique characteristics.</p>
        `,
        metrics: {
          views: '2,567'
        }
      }
    };

    return contentMap[postId] || {
      fullContent: '<p>Content coming soon...</p>',
      metrics: { views: '0' }
    };
  };

  const extendedData = getExtendedContent(blogPost.id);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const dialogVariants = {
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
        damping: 25,
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Dialog */}
          <motion.div
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img 
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </motion.button>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-primary px-3 py-1 rounded-full text-white text-sm font-semibold">
                  {blogPost.category}
                </span>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {blogPost.title}
                </h1>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {blogPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(blogPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {blogPost.readTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-16rem)]">
              <div className="p-8">
                {/* Views Metric */}
                <Card className="bg-surface border-border mb-8">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient-start">{extendedData.metrics.views}</div>
                      <div className="text-sm text-text-secondary">Views</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center px-3 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded-full text-sm text-gradient-start"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Excerpt */}
                <div className="bg-surface border-l-4 border-gradient-start p-4 mb-8 rounded">
                  <p className="text-text-secondary italic text-lg leading-relaxed">
                    {blogPost.excerpt}
                  </p>
                </div>

                {/* Full Content */}
                <div 
                  className="prose prose-lg max-w-none text-text-primary"
                  style={{
                    lineHeight: '1.8',
                  }}
                  dangerouslySetInnerHTML={{ __html: extendedData.fullContent }}
                />

                {/* Author Bio */}
                <Card className="bg-surface border-border mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {blogPost.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-2">
                          {blogPost.author}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Web3 marketing strategist with 5+ years of experience helping blockchain projects build engaged communities and drive sustainable growth.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlogDialog;