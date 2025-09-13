import { motion } from "framer-motion";

const TrustedBy = () => {
  const partners = [
    // { name: 'Arbitrum', logo: '🔷' },
    // { name: 'Polygon', logo: '🔮' },
    // { name: 'Minati', logo: '🔗' },
    // { name: 'Uniswap', logo: '🦄' },
    // { name: 'Aave', logo: '👻' },
    // { name: 'Apex Protocol', logo: '⚡' },
    { name: "Arbitrum", logo: "/arbitrum.jpg" },
    { name: "Polygon", logo: "/polygon.png" },
    { name: "Minati", logo: "/minati.png" },
    { name: "Uniswap", logo: "/images.png" },
    { name: "Aave", logo: "/aavee.png" },
    { name: "Apex Protocol", logo: "/apex-protocol.png" },
  ];

  return (
    <section className="py-20 bg-surface/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-text-secondary font-medium mb-6">
            Trusted by leading Web3 projects
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="text-text-secondary text-sm font-medium group-hover:text-gradient-start transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
