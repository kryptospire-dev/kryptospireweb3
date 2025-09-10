import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Coffee, Heart, Zap, Globe, BookOpen, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with a globally distributed team.',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Coffee,
      title: 'Flexible Hours',
      description: 'Balance your work and life with flexible scheduling that works for you.',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.',
      gradient: 'from-accent-pink to-gradient-start'
    },
    {
      icon: Zap,
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and professional development.',
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      icon: Globe,
      title: 'Annual Retreats',
      description: 'Join the team for amazing retreats in exotic locations around the world.',
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      icon: BookOpen,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths with mentorship and internal mobility.',
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  const openRoles = [
    {
      id: 1,
      title: 'Senior Community Manager',
      department: 'Community',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead community building efforts for multiple Web3 projects, managing Discord/Telegram communities and developing engagement strategies.',
      requirements: ['3+ years community management experience', 'Deep Web3/crypto knowledge', 'Experience with Discord/Telegram bots', 'Strong written communication'],
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      id: 2,
      title: 'Growth Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive user acquisition and retention through data-driven marketing campaigns across multiple channels.',
      requirements: ['2+ years performance marketing experience', 'Web3 marketing experience preferred', 'Strong analytical skills', 'Experience with marketing automation'],
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      id: 3,
      title: 'Content Strategist',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and execute content strategies that drive engagement and growth for Web3 brands.',
      requirements: ['3+ years content strategy experience', 'Excellent writing skills', 'Understanding of Web3 ecosystem', 'Experience with content management systems'],
      gradient: 'from-accent-pink to-gradient-start'
    },
    {
      id: 4,
      title: 'Influencer Relations Manager',
      department: 'Partnerships',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and manage relationships with Web3 influencers, KOLs, and thought leaders to amplify our clients brands.',
      requirements: ['2+ years influencer marketing experience', 'Existing Web3 influencer network', 'Strong negotiation skills', 'Experience with campaign management'],
      gradient: 'from-gradient-start to-gradient-end'
    },
    {
      id: 5,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze marketing performance, community metrics, and on-chain data to drive strategic decisions.',
      requirements: ['2+ years data analysis experience', 'SQL and Python proficiency', 'Experience with analytics tools', 'Understanding of blockchain data'],
      gradient: 'from-gradient-end to-accent-pink'
    },
    {
      id: 6,
      title: 'Junior Marketing Coordinator',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Support marketing campaigns and operations while learning from our senior team members.',
      requirements: ['0-1 years marketing experience', 'Strong organizational skills', 'Interest in Web3/crypto', 'Willingness to learn and grow'],
      gradient: 'from-accent-pink to-gradient-start'
    }
  ];

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and push the boundaries of what\'s possible in Web3 marketing.'
    },
    {
      title: 'Transparent Communication',
      description: 'Open, honest communication is the foundation of our remote-first culture.'
    },
    {
      title: 'Results Driven',
      description: 'We measure success by the real impact we create for our clients and their communities.'
    },
    {
      title: 'Continuous Learning',
      description: 'The Web3 space evolves rapidly, and we encourage continuous learning and adaptation.'
    }
  ];

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
              Build the <span className="gradient-text">future</span> of Web3 with us
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Join a world-class team of Web3 marketing experts who are passionate about 
              building authentic communities and driving real growth for revolutionary projects.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center">
                <Users className="mr-2 text-gradient-start" size={16} />
                <span>Remote-First Team</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 text-gradient-start" size={16} />
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center">
                <Heart className="mr-2 text-gradient-start" size={16} />
                <span>4.9/5 Employee Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="gradient-text">KryptoSpire?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We offer more than just a job—we provide a platform to shape the future 
              of decentralized marketing while growing your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-lg mb-6`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Open positions</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Find your perfect role and join our mission to build the future of Web3 marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-background border-border hover:border-gradient-start/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary group-hover:gradient-text transition-all duration-300 mb-2">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <span className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-gradient-start">
                            {role.department}
                          </span>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {role.location}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {role.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {role.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-gradient-start rounded-full mr-3 mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline-glow" className="w-full group">
                      Apply Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">culture</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The values that guide how we work, collaborate, and grow together as a team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-surface border border-border rounded-xl p-8 h-full card-glow group-hover:border-gradient-start/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Don't see your <span className="gradient-text">perfect role?</span>
              </h2>
              <p className="text-xl text-text-secondary">
                We're always looking for exceptional talent. Send us your information 
                and let's start a conversation about your future with KryptoSpire.
              </p>
            </div>

            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        First Name
                      </label>
                      <Input className="bg-surface border-border focus:border-gradient-start" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Last Name
                      </label>
                      <Input className="bg-surface border-border focus:border-gradient-start" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <Input type="email" className="bg-surface border-border focus:border-gradient-start" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Role of Interest
                    </label>
                    <Input className="bg-surface border-border focus:border-gradient-start" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Tell us about yourself
                    </label>
                    <Textarea 
                      rows={6}
                      className="bg-surface border-border focus:border-gradient-start resize-none"
                      placeholder="Tell us about your experience, what excites you about Web3, and why you'd like to join KryptoSpire..."
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    Send Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Careers;