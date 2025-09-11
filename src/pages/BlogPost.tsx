import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/constants/data';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blogPost = BLOG_POSTS.find(post => post.id === parseInt(id || ''));
  
  if (!blogPost) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Button onClick={() => navigate('/blog')}>
              Back to Blog
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 hover:bg-surface"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge variant="secondary" className="mb-4">
              {blogPost.category}
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-text-secondary mb-8">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>{blogPost.readTime}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="hover:bg-surface"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
            
            <p className="text-xl text-text-secondary leading-relaxed">
              {blogPost.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-xl mb-12"
            />
            
            <div className="text-text-secondary leading-relaxed space-y-6">
              <p>
                The Web3 landscape is evolving rapidly, and with it, the strategies we use to build and engage communities. 
                While Discord and Telegram have been the go-to platforms for Web3 projects, the most successful initiatives 
                are beginning to explore innovative approaches that create deeper, more meaningful connections.
              </p>
              
              <h2 className="text-3xl font-bold gradient-text">
                Beyond Traditional Platforms
              </h2>
              
              <p>
                Traditional social media platforms often fall short of creating the intimate, engaged communities that Web3 
                projects need to thrive. The future lies in creating multi-layered community experiences that span across 
                various touchpoints and provide real value to participants.
              </p>
              
              <h3 className="text-2xl font-semibold text-text-primary">
                Key Strategies for Modern Community Building
              </h3>
              
              <ul className="space-y-2">
                <li>Interactive governance systems that give users real decision-making power</li>
                <li>Gamified experiences that reward genuine participation</li>
                <li>Educational content that helps users understand and utilize your protocol</li>
                <li>Regular AMAs and transparent communication from the core team</li>
                <li>Community-driven content creation and curation</li>
              </ul>
              
              <p>
                The most successful Web3 communities are those that create genuine value for their members beyond just 
                potential financial returns. They become hubs of learning, collaboration, and innovation where members 
                feel heard and valued.
              </p>
              
              <h2 className="text-3xl font-bold gradient-text">
                Measuring Success
              </h2>
              
              <p>
                Traditional metrics like member count and message volume only tell part of the story. Focus on engagement 
                quality, retention rates, and the percentage of your community that actively participates in governance 
                and protocol usage.
              </p>
              
              <p>
                As we move forward, the projects that will thrive are those that view community building not as a marketing 
                tactic, but as a fundamental part of their protocol's value proposition.
              </p>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-border rounded-xl p-8 mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Need help building your Web3 community?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our team specializes in creating authentic, engaged communities for Web3 projects. 
              Let's discuss your community building strategy.
            </p>
            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
              Get Community Building Help
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;