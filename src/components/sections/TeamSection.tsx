import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { ABOUT_DATA } from '@/constants/data';

const TeamSection = () => {
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
            Meet our <span className="gradient-text">team</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Web3 veterans with deep expertise across DeFi, NFTs, DAOs, and community building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_DATA.team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background border border-border rounded-xl p-6 card-glow group-hover:border-gradient-start/30 transition-all duration-300 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gradient-start to-gradient-end rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-gradient-start font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    className="w-8 h-8 bg-surface border border-border rounded-full flex items-center justify-center hover:border-gradient-start/30 hover:bg-gradient-start/10 transition-all duration-300"
                  >
                    <Linkedin size={16} className="text-text-secondary hover:text-gradient-start" />
                  </a>
                  <a 
                    href="#"
                    className="w-8 h-8 bg-surface border border-border rounded-full flex items-center justify-center hover:border-gradient-start/30 hover:bg-gradient-start/10 transition-all duration-300"
                  >
                    <Twitter size={16} className="text-text-secondary hover:text-gradient-start" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;