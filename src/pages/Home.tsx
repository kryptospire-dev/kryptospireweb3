import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesOverview from '@/components/sections/ServicesOverview';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <ServicesOverview />
    </main>
  );
};

export default Home;