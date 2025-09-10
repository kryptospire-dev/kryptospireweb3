import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BlogHighlights = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web3 Community Building: Beyond Discord and Telegram',
      excerpt: 'Exploring next-generation platforms and strategies for building engaged Web3 communities that drive real value.',
      category: 'Community',
      author: 'Sarah Chen',
      date: '2025-01-08',
      readTime: '8 min read',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      id: 2,
      title: 'DeFi Marketing in 2025: Navigating Regulatory Landscape',
      excerpt: 'How compliance-first marketing strategies are reshaping DeFi project launches and community engagement.',
      category: 'DeFi',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      readTime: '12 min read',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      id: 3,
      title: 'NFT Utility Beyond Art: The Rise of Functional Tokens',
      excerpt: 'Examining how NFTs are evolving from collectibles to utility-driven assets with real-world applications.',
      category: 'NFTs',
      author: 'Alex Kim',
      date: '2025-01-03',
      readTime: '6 min read',
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">insights</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay ahead of the curve with actionable insights, strategies, and analysis 
            from the frontlines of Web3 marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate('/blog')}
            >
              <div className="bg-surface border border-border rounded-xl overflow-hidden h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="text-white/60" size={40} />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gradient-start border border-gradient-start/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">
                      By {post.author}
                    </span>
                    <ArrowRight className="text-gradient-start group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline-glow" 
            size="lg"
            onClick={() => navigate('/blog')}
            className="group"
          >
            View All Articles
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlights;