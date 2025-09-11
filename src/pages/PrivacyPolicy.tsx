import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              <span className="gradient-text">Privacy</span> Policy
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
                  Information We Collect
                </h2>
                <p>
                  At KryptoSpire, we collect information you provide directly to us, such as when you 
                  create an account, fill out a form, or communicate with us. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Project details and business information</li>
                  <li>Communications preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who help us operate our business</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and the rights of others</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-surface border border-border rounded-lg p-4">
                  <p><strong>Email:</strong> privacy@kryptospire.com</p>
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

export default PrivacyPolicy;