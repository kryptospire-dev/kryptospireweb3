import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StatsSection from '@/components/sections/StatsSection';  
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogHighlights from '@/components/sections/BlogHighlights';
import SEO from '@/components/SEO'; // NEW: Import SEO component

// NEW: Organization Schema for homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "KryptoSpire",
  "alternateName": "KryptoSpire Web3 Marketing Agency",
  "description": "Leading Web3 marketing agency specializing in cryptocurrency, blockchain, and DeFi marketing during bull run periods.",
  "url": "https://kryptospire.com",
  "logo": "https://kryptospire.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://x.com/kryptospire928",
    "https://www.linkedin.com/in/shivam-singh-376546383/"
  ],
  "serviceArea": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web3 Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web3 Marketing Strategy",
          "description": "Comprehensive Web3 marketing strategies for bull run success"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Crypto Marketing Campaigns",
          "description": "Targeted cryptocurrency marketing campaigns"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bull Run Marketing Strategy",
          "description": "Expert bull run marketing strategies for maximum growth"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
};

const Home = () => {
  return (
    <>
      {/* NEW: SEO Component for Homepage */}
      <SEO
        title="KryptoSpire - Premier Web3 Marketing Agency for Bull Run Success"
        description="Leading Web3 marketing agency helping crypto projects dominate the bull run. Expert blockchain marketing, DeFi promotion, and cryptocurrency growth strategies that deliver 500%+ ROI."
        keywords={[
          'web3 marketing agency',
          'crypto marketing agency',
          'bull run marketing',
          'blockchain marketing agency',
          'cryptocurrency marketing',
          'marketing agency',
          'DeFi marketing',
          'NFT marketing',
          'crypto bull run',
          'web3 agency'
        ]}
        canonical="/"
        structuredData={organizationSchema}
      />
      
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
    </>
  );
};

export default Home;