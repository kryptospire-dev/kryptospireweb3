import { motion } from 'framer-motion';
import { Users, Award, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push boundaries and explore new frontiers in Web3 marketing.',
      gradient: 'from-gradient-start to-gradient-end',
    },
    {
      icon: Award,
      title: 'Transparency',
      description: 'Clear communication and honest results are at our core.',
      gradient: 'from-gradient-end to-accent-pink',
    },
    {
      icon: Users,
      title: 'Results-Driven',
      description: 'Every strategy is designed to deliver measurable outcomes.',
      gradient: 'from-accent-pink to-gradient-start',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We succeed when our clients succeed. Your growth is our mission.',
      gradient: 'from-gradient-start to-gradient-end',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Started with a vision to bring authentic marketing to Web3.',
    },
    {
      year: '2021',
      title: 'Growth',
      description: 'Expanded to serve 50+ DeFi and NFT projects.',
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Pioneered new community-building methodologies.',
    },
    {
      year: '2025',
      title: 'Leadership',
      description: 'Leading the industry with 150+ successful projects.',
    },
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
              Building the <span className="gradient-text">future</span> of Web3 marketing
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              We're more than marketers—we're Web3 natives who understand the technology, 
              the community, and the vision that drives this revolutionary space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From humble beginnings to industry leadership—here's how we've grown alongside the Web3 ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-surface border border-border rounded-xl p-6 card-glow hover:border-gradient-start/30 transition-all duration-300">
                  <div className="text-3xl font-orbitron font-bold gradient-text mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              These principles guide every decision we make and every strategy we develop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background border border-border rounded-xl p-8 card-glow group-hover:border-gradient-start/30 transition-all duration-300 h-full">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-lg mb-6`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
              Ready to <span className="gradient-text">grow together?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join the 150+ Web3 projects that trust KryptoSpire to drive their growth.
            </p>
            <Button variant="hero" size="xl">
              Start Your Growth Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;