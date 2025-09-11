import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-text-secondary leading-relaxed space-y-8">
              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using KryptoSpire's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Services Description
                </h2>
                <p>
                  KryptoSpire provides Web3 marketing and growth services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Community building and management</li>
                  <li>Growth marketing and strategy</li>
                  <li>Content creation and strategy</li>
                  <li>Launch strategy and execution</li>
                  <li>Consulting and advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  User Responsibilities
                </h2>
                <p>
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Notify us of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Payment Terms
                </h2>
                <p>
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payments are due according to the agreed schedule</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Intellectual Property
                </h2>
                <p>
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of KryptoSpire and its licensors. The service is protected by 
                  copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  In no event shall KryptoSpire, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                  damages arising out of your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Contact Information
                </h2>
                <p>
                  Questions about the Terms of Service should be sent to us at:
                </p>
                <div className="bg-surface border border-border rounded-lg p-4">
                  <p><strong>Email:</strong> legal@kryptospire.com</p>
                  <p><strong>Address:</strong> San Francisco, CA</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;