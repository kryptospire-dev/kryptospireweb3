import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
              <span className="gradient-text">Cookie</span> Policy
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
                  What Are Cookies
                </h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Essential Cookies
                    </h3>
                    <p>
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually only set in response to actions made by you which amount to a 
                      request for services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Performance Cookies
                    </h3>
                    <p>
                      These cookies allow us to count visits and traffic sources so we can measure and 
                      improve the performance of our site. They help us know which pages are the most 
                      and least popular.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Functionality Cookies
                    </h3>
                    <p>
                      These cookies enable the website to provide enhanced functionality and personalization. 
                      They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Marketing Cookies
                    </h3>
                    <p>
                      These cookies may be set through our site by our advertising partners. They may be 
                      used by those companies to build a profile of your interests and show you relevant 
                      adverts on other sites.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Managing Cookies
                </h2>
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies that are 
                  already on your computer and you can set most browsers to prevent them from being placed. 
                  However, if you do this, you may have to manually adjust some preferences every time you 
                  visit a site.
                </p>
                
                <div className="bg-surface border border-border rounded-lg p-4 mt-4">
                  <p className="font-medium text-text-primary mb-2">Browser Settings:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                    <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                    <li>Safari: Preferences → Privacy → Cookies and website data</li>
                    <li>Edge: Settings → Site permissions → Cookies and site data</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Third-Party Cookies
                </h2>
                <p>
                  We use third-party services such as Google Analytics to help us understand how you 
                  interact with our website. These services may place cookies on your device. We do 
                  not control these cookies and you should check the relevant third party's website 
                  for more information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;