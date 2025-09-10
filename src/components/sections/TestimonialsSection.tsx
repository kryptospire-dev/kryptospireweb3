import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Founder',
      company: 'DeFiVault Protocol',
      image: '/placeholder.svg',
      rating: 5,
      text: 'KryptoSpire transformed our struggling DeFi protocol into a $50M TVL success story. Their community building expertise is unmatched in the Web3 space.',
      results: '+450% TVL Growth'
    },
    {
      name: 'Sarah Williams',
      role: 'CEO',
      company: 'MetaWorlds NFT',
      image: '/placeholder.svg',
      rating: 5,
      text: 'The team helped us sell out our 10,000 NFT collection in under 2 hours. Their launch strategy and community engagement tactics are simply phenomenal.',
      results: '10K NFTs Sold Out'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Co-founder',
      company: 'DecenDAO',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Working with KryptoSpire was a game-changer. They built us a thriving governance community with 80% voting participation - unprecedented in the DAO space.',
      results: '80% Voting Participation'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Marketing',
      company: 'ChainLink Oracle',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Their strategic approach to developer relations and ecosystem building helped us scale to 50+ protocol integrations across multiple chains.',
      results: '50+ Integrations'
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'YieldFarm Protocol',
      image: '/placeholder.svg',
      rating: 5,
      text: 'KryptoSpire revitalized our yield farming protocol with innovative tokenomics and community incentives. The results speak for themselves.',
      results: '+600% APY Growth'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Web3 founders and leaders 
            say about working with KryptoSpire.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-8 lg:p-12 card-glow"
            >
              <div className="flex items-center justify-center mb-8">
                <Quote className="text-gradient-start" size={40} />
              </div>

              <blockquote className="text-xl lg:text-2xl text-text-primary text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-text-primary font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-text-secondary text-sm mb-2">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded-full text-sm font-medium text-gradient-start">
                  {testimonials[currentIndex].results}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-start shadow-glow-primary'
                    : 'bg-border hover:bg-gradient-start/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;