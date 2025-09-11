import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogHighlights = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of Web3 Community Building: Beyond Discord and Telegram",
      excerpt:
        "Exploring next-generation platforms and strategies for building engaged Web3 communities that drive real value.",
      category: "Community",
      author: "Sarah Chen",
      date: "2025-01-08",
      readTime: "8 min read",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "DeFi Marketing in 2025: Navigating Regulatory Landscape",
      excerpt:
        "How compliance-first marketing strategies are reshaping DeFi project launches and community engagement.",
      category: "DeFi",
      author: "Marcus Rodriguez",
      date: "2025-01-05",
      readTime: "12 min read",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "NFT Utility Beyond Art: The Rise of Functional Tokens",
      excerpt:
        "Examining how NFTs are evolving from collectibles to utility-driven assets with real-world applications.",
      category: "NFTs",
      author: "Alex Kim",
      date: "2025-01-03",
      readTime: "6 min read",
      gradient: "from-purple-500 to-violet-500",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1644361567904-38166154e369?w=400&h=300&fit=crop&crop=center"
    },
  ];

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
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-surface/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-start/8 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-end/8 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-start/10 border border-gradient-start/20 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Latest Insights</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Latest <span className="gradient-text">insights</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with actionable insights, strategies, and
            analysis from the frontlines of Web3 marketing.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="cursor-pointer group"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/blog");
              }}
            >
              <motion.div 
                className="bg-surface/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:border-gradient-start/30"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Image Header */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <motion.img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gradient-start border border-gradient-start/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: post.delay + 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 text-xs text-text-secondary mb-4"
                  >
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: post.delay + 0.2, duration: 0.4 }}
                    className="text-lg lg:text-xl font-bold text-text-primary mb-3 line-clamp-2"
                  >
                    {post.title}
                  </motion.h3>

                  {/* Excerpt */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: post.delay + 0.3, duration: 0.4 }}
                    className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3"
                  >
                    {post.excerpt}
                  </motion.p>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: post.delay + 0.4, duration: 0.4 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-text-secondary font-medium">
                      By {post.author}
                    </span>
                    <ArrowRight className="text-gradient-start" size={16} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline-glow"
            size="lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/blog");
            }}
            className="group"
          >
            View All Articles
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlights;