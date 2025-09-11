import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CASE_STUDIES } from '@/constants/data';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = CASE_STUDIES.find(study => study.id === parseInt(id || ''));
  
  if (!caseStudy) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Button onClick={() => navigate('/case-studies')}>
              Back to Case Studies
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/case-studies')}
            className="mb-8 hover:bg-surface"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Case Studies
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {caseStudy.description}
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center text-text-secondary">
                <Calendar className="mr-2" size={16} />
                <span>6 month campaign</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Users className="mr-2" size={16} />
                <span>{caseStudy.category} Industry</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <Card className="bg-surface border-border text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {caseStudy.results.growth}
                </div>
                <div className="text-text-secondary">Growth Achieved</div>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {caseStudy.results.community}
                </div>
                <div className="text-text-secondary">Community Size</div>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {caseStudy.results.roi}
                </div>
                <div className="text-text-secondary">Value Created</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Challenge</span> & Solution
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-surface border-border p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">The Challenge</h3>
                  <p className="text-text-secondary leading-relaxed">
                    The project was struggling with low community engagement, limited brand awareness, 
                    and difficulty in attracting quality users. Traditional marketing approaches were 
                    not resonating with the Web3 audience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface border-border p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Our Solution</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We implemented a comprehensive Web3-native strategy focusing on authentic community 
                    building, strategic partnerships, and compelling content that resonated with the 
                    target audience's values and interests.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-surface border border-border rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to achieve similar results?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help your Web3 project achieve extraordinary growth.
              </p>
              <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
                Book Your Strategy Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyDetail;