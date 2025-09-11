import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Strategy', 'Community', 'NFTs', 'DeFi', 'DAOs', 'Content', 'Analytics'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web3 Community Building: Beyond Discord and Telegram',
      excerpt: 'Exploring next-generation platforms and strategies for building engaged Web3 communities that drive real value.',
      category: 'Community',
      author: 'Sarah Chen',
      date: '2025-01-08',
      readTime: '8 min read',
      image: '/placeholder.svg',
      tags: ['Community', 'Strategy', 'Web3'],
      featured: true
    },
    {
      id: 2,
      title: 'DeFi Marketing in 2025: Navigating Regulatory Landscape',
      excerpt: 'How compliance-first marketing strategies are reshaping DeFi project launches and community engagement.',
      category: 'DeFi',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      readTime: '12 min read',
      image: '/placeholder.svg',
      tags: ['DeFi', 'Regulation', 'Marketing'],
      featured: false
    },
    {
      id: 3,
      title: 'NFT Utility Beyond Art: The Rise of Functional Tokens',
      excerpt: 'Examining how NFTs are evolving from collectibles to utility-driven assets with real-world applications.',
      category: 'NFTs',
      author: 'Alex Kim',
      date: '2025-01-03',
      readTime: '6 min read',
      image: '/placeholder.svg',
      tags: ['NFTs', 'Utility', 'Innovation'],
      featured: false
    },
    {
      id: 4,
      title: 'Data-Driven DAO Governance: Metrics That Matter',
      excerpt: 'Key performance indicators and analytics frameworks for measuring DAO health and engagement.',
      category: 'DAOs',
      author: 'Emma Thompson',
      date: '2025-01-01',
      readTime: '10 min read',
      image: '/placeholder.svg',
      tags: ['DAOs', 'Analytics', 'Governance'],
      featured: false
    },
    {
      id: 5,
      title: 'Content Strategy for Web3: Authenticity Over Hype',
      excerpt: 'Building authentic narratives that resonate with crypto-native audiences while avoiding common pitfalls.',
      category: 'Content',
      author: 'David Park',
      date: '2024-12-28',
      readTime: '7 min read',
      image: '/placeholder.svg',
      tags: ['Content', 'Strategy', 'Authenticity'],
      featured: false
    },
    {
      id: 6,
      title: 'The Psychology of Web3 Community Engagement',
      excerpt: 'Understanding the motivations and behaviors that drive participation in decentralized communities.',
      category: 'Strategy',
      author: 'Lisa Wang',
      date: '2024-12-25',
      readTime: '9 min read',
      image: '/placeholder.svg',
      tags: ['Psychology', 'Community', 'Engagement'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <span className="gradient-text">Insights</span> that drive Web3 growth
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Deep dives, strategies, and insights from the frontlines of Web3 marketing. 
              Stay ahead of the curve with actionable content from our team of experts.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-surface border-border focus:border-gradient-start"
              />
              <Button variant="hero" className="shrink-0">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-text-secondary mt-4">
              Join 10,000+ Web3 builders getting weekly insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-surface border-border focus:border-gradient-start"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeCategory === category
                      ? 'bg-gradient-primary text-white shadow-glow-primary'
                      : 'bg-surface border border-border text-text-secondary hover:border-gradient-start/30 hover:text-gradient-start'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-primary px-3 py-1 rounded-full text-white text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="text-white/20" size={80} />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-gradient-start">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 hover:gradient-text transition-all duration-300 cursor-pointer">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        By {featuredPost.author}
                      </span>
                      <Button variant="outline-glow" className="group">
                        Read More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-surface to-background relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="text-text-secondary/20" size={40} />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gradient-start border border-gradient-start/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-text-primary group-hover:gradient-text transition-all duration-300 cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-xs text-gradient-start"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-text-secondary">
                        By {post.author}
                      </span>
                      <Button variant="ghost" size="sm" className="group p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button variant="outline-glow" size="lg">
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Never miss an <span className="gradient-text">insight</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get weekly deep dives, case studies, and actionable strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-background border-border focus:border-gradient-start"
              />
              <Button variant="hero" className="shrink-0">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-text-secondary mt-4">
              Join 10,000+ Web3 builders • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;