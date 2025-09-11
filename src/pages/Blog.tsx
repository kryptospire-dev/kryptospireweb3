import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, BookOpen, TrendingUp, BarChart, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import BlogDialog from '../components/sections/BlogDialog'; // Import the BlogDialog component

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
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
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
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
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
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
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
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
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      tags: ['Psychology', 'Community', 'Engagement'],
      featured: false
    },
    {
      id: 7,
      title: 'Cross-Chain Marketing: Building Multi-Network Communities',
      excerpt: 'Strategies for creating cohesive brand experiences across multiple blockchain ecosystems and their unique cultures.',
      category: 'Strategy',
      author: 'Jordan Martinez',
      date: '2024-12-20',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      tags: ['Cross-chain', 'Strategy', 'Multi-network'],
      featured: false
    }
  ];

  // Function to handle opening blog dialog
  const handleReadMore = (blogPost) => {
    setSelectedBlog(blogPost);
    setIsDialogOpen(true);
  };

  // Function to handle closing blog dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedBlog(null);
  };

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    initial: { 
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
    },
    hover: { 
      y: -4,
      scale: 1.01,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.12)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconFloatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case 'Analytics': return BarChart;
      case 'Community': return Users;
      case 'Strategy': return Target;
      default: return TrendingUp;
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
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Insights
              </motion.span> that drive Web3 growth
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Deep dives, strategies, and insights from the frontlines of Web3 marketing. 
              Stay ahead of the curve with actionable content from our team of experts.
            </motion.p>
            
            {/* Newsletter Signup */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Input 
                placeholder="Enter your email" 
                className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" className="shrink-0">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-sm text-text-secondary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Join 10,000+ Web3 builders getting weekly insights
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary transition-colors duration-300" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-surface border-border focus:border-gradient-start transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  variants={cardVariants}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeCategory === category
                      ? 'bg-gradient-primary text-white shadow-glow-primary'
                      : 'bg-surface border border-border text-text-secondary hover:border-gradient-start/30 hover:text-gradient-start'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                className="cursor-pointer"
              >
                <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      <img 
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-primary px-3 py-1 rounded-full text-white text-xs font-semibold">
                          Featured
                        </span>
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
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 hover:gradient-text transition-all duration-300">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary">
                          By {featuredPost.author}
                        </span>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            variant="outline-glow" 
                            className="group"
                            onClick={() => handleReadMore(featuredPost)}
                          >
                            Read More
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {regularPosts.map((post, index) => {
              const IconComponent = getIconForCategory(post.category);
              return (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  className="group h-full"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    className="cursor-pointer h-full"
                  >
                    <Card className="bg-surface border-border hover:border-gradient-start/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-surface/20 to-background/20" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gradient-start border border-gradient-start/20">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <IconComponent className="text-white/60" size={24} />
                        </div>
                      </div>
                      
                      <CardHeader className="flex-1">
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
                        
                        <h3 className="text-lg font-semibold text-text-primary group-hover:gradient-text transition-all duration-300 line-clamp-2">
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
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="group p-0 h-auto"
                              onClick={() => handleReadMore(post)}
                            >
                              Read More
                              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <motion.div
                variants={iconFloatVariants}
                animate="animate"
              >
                <BookOpen className="mx-auto mb-4 text-text-secondary" size={48} />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-text-primary mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                No articles found
              </motion.h3>
              <motion.p 
                className="text-text-secondary mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Try adjusting your search or filter criteria
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline-glow" 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
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
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Never miss an <span className="gradient-text">insight</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Get weekly deep dives, case studies, and actionable strategies delivered to your inbox.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Input 
                placeholder="Your email address" 
                className="bg-background border-border focus:border-gradient-start transition-all duration-300"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" className="shrink-0">
                  Subscribe Now
                </Button>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-sm text-text-secondary mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Join 10,000+ Web3 builders • Unsubscribe anytime
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Dialog */}
      <BlogDialog 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        blogPost={selectedBlog}
      />
    </main>
  );
};

export default Blog;