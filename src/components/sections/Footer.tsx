import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceLinks = [
    { name: 'Community Building', href: '/services/community-building' },
    { name: 'Growth Marketing', href: '/services/growth-marketing' },
    { name: 'Content Strategy', href: '/services/content-strategy' },
    { name: 'Launch Strategy', href: '/services/launch-strategy' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-sm">K</span>
              </div>
              <span className="font-orbitron font-bold text-xl gradient-text">
                KryptoSpire
              </span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Web3 growth without the hype. Building the future of decentralized marketing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-gradient-start hover:bg-gradient-start/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-gradient-start transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-gradient-start transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-text-primary mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center text-text-secondary">
                <Mail size={18} className="mr-3 text-gradient-start" />
                <a href="mailto:hello@kryptospire.com" className="hover:text-gradient-start transition-colors">
                  hello@kryptospire.com
                </a>
              </div>
              <p className="text-text-secondary">
                Ready to scale your Web3 project? Let's talk.
              </p>
              <button className="btn-gradient px-6 py-2 rounded-lg font-semibold text-white text-sm hover:shadow-glow-primary transition-all duration-300">
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © 2025 KryptoSpire. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-text-secondary hover:text-gradient-start transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;