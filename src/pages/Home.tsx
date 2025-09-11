import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StatsSection from '@/components/sections/StatsSection';  
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogHighlights from '@/components/sections/BlogHighlights';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <BlogHighlights />
      <TestimonialsSection />
    </main>
  );
};

export default Home;