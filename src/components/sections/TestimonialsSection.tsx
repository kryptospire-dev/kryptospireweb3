import { motion, useAnimationControls } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const controls = useAnimationControls();
  const startTimeRef = useRef(Date.now());
  const pausedPositionRef = useRef(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      company: 'WazirX NFT',
      location: 'Mumbai, India',
      rating: 5,
      text: 'KryptoSpire transformed our NFT marketplace from a local platform to India\'s leading Web3 destination. Their understanding of technology was crucial.',
      results: '$100M+ Trading Volume',
      avatar: 'RS'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Co-founder',
      company: 'CoinDCX DeFi',
      location: 'Bangalore, India',
      rating: 5,
      text: 'Working with KryptoSpire was transformative. They helped us build authentic communities across 15+ Indian cities with remarkable results.',
      results: '+300% User Growth',
      avatar: 'PP'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Head of Marketing',
      company: 'Polygon Studios',
      location: 'Delhi, India',
      rating: 5,
      text: 'Their strategic approach to developer relations and ecosystem building in the Web3 space is exceptional. Results exceeded expectations.',
      results: '500+ Developers',
      avatar: 'VS'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'MetaVerse Labs',
      location: 'San Francisco, USA',
      rating: 5,
      text: 'KryptoSpire\'s global perspective helped us expand into Asian markets seamlessly with remarkable results and community growth.',
      results: '2M+ Global Users',
      avatar: 'ER'
    },
    {
      id: 5,
      name: 'Alexander Chen',
      role: 'Founder',
      company: 'ChainLink Oracle',
      location: 'Singapore',
      rating: 5,
      text: 'Their data-driven approach and technical knowledge helped us scale our oracle network effectively across multiple blockchains.',
      results: '25+ Integrations',
      avatar: 'AC'
    },
    {
      id: 6,
      name: 'David Kumar',
      role: 'CTO',
      company: 'Solana Labs',
      location: 'Bangalore, India',
      rating: 5,
      text: 'The community building expertise and technical depth they brought to our project was absolutely game-changing for our ecosystem.',
      results: '1M+ Transactions',
      avatar: 'DK'
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalWidth = testimonials.length * 400; // 400px per card including gap

  useEffect(() => {
    const startAnimation = () => {
      const duration = 60; // Total duration for one complete cycle
      
      controls.start({
        x: [pausedPositionRef.current, -totalWidth],
        transition: {
          duration: duration * (1 - Math.abs(pausedPositionRef.current) / totalWidth),
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [isPaused, controls, totalWidth]);

  const handleMouseEnter = async () => {
    // Get current position when pausing
    if (scrollRef.current) {
      const transform = window.getComputedStyle(scrollRef.current).transform;
      if (transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const translateX = parseFloat(matrix[1].split(',')[4]);
          pausedPositionRef.current = translateX;
        }
      }
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-surface/30 via-background to-surface/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-start/8 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-end/8 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
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
            <MessageSquare className="w-4 h-4 text-gradient-start" />
            <span className="text-sm font-medium text-gradient-start">Client Stories</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From India to Silicon Valley, discover how we've helped Web3 companies 
            achieve remarkable growth and build thriving communities.
          </p>
        </motion.div>

        {/* Smooth Scrolling Testimonials */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={scrollRef}
              className="flex gap-6"
              animate={controls}
              style={{ width: `${extendedTestimonials.length * 400}px` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-5 h-64 flex flex-col transition-all duration-300 group-hover:border-gradient-start/30 group-hover:shadow-lg">
                    {/* Header with quote and stars */}
                    <div className="flex items-center justify-between mb-3">
                      <Quote className="text-gradient-start" size={20} />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={12} />
                        ))}
                      </div>
                    </div>

                    {/* Review text - compact */}
                    <blockquote className="text-text-primary leading-relaxed mb-4 text-sm flex-1">
                      "{testimonial.text.substring(0, 120)}..."
                    </blockquote>

                    {/* Client info - horizontal layout */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">
                          {testimonial.avatar}
                        </span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-text-primary font-semibold text-sm truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-text-secondary text-xs truncate">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>

                      <div className="bg-gradient-start/10 border border-gradient-start/20 rounded-full px-2 py-1 flex-shrink-0">
                        <span className="text-gradient-start text-xs font-semibold">
                          {testimonial.results.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background/60 to-transparent pointer-events-none" />
        </div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;