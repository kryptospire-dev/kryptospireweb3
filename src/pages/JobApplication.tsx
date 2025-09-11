import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormField } from '@/components/ui/input-form';
import { CAREERS_DATA } from '@/constants/data';

const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const job = CAREERS_DATA.openRoles.find(role => role.id === parseInt(id || ''));

  if (!job) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
            <Button onClick={() => navigate('/careers')}>
              Back to Careers
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert(`Thank you for applying to ${job.title}! We'll review your application and get back to you within 3-5 business days.`);
    navigate('/careers');
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/careers')}
            className="mb-8 hover:bg-surface"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Careers
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-3 text-gradient-start" size={24} />
              <span className="text-gradient-start font-medium">{job.department}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Apply for <span className="gradient-text">{job.title}</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-text-secondary">
              <span>📍 {job.location}</span>
              <span>💼 {job.type}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Job Info */}
            <div className="lg:col-span-1">
              <Card className="bg-surface border-border p-6 sticky top-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Job Overview</h3>
                  <p className="text-text-secondary mb-6">{job.description}</p>
                  
                  <h4 className="font-semibold text-text-primary mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-text-secondary">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-start rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="bg-surface border-border p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-8">
                    Application <span className="gradient-text">Form</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="First Name"
                        name="firstName"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={(value) => handleInputChange('firstName', value)}
                      />
                      <FormField
                        label="Last Name"
                        name="lastName"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={(value) => handleInputChange('lastName', value)}
                      />
                    </div>

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(value) => handleInputChange('email', value)}
                    />

                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(value) => handleInputChange('phone', value)}
                    />

                    <FormField
                      label="LinkedIn Profile"
                      name="linkedIn"
                      placeholder="https://linkedin.com/in/johndoe"
                      value={formData.linkedIn}
                      onChange={(value) => handleInputChange('linkedIn', value)}
                    />

                    <FormField
                      label="Portfolio/Website"
                      name="portfolio"
                      placeholder="https://johndoe.com"
                      value={formData.portfolio}
                      onChange={(value) => handleInputChange('portfolio', value)}
                    />

                    <FormField
                      label="Years of Relevant Experience"
                      name="experience"
                      placeholder="e.g., 5 years in Web3 marketing"
                      required
                      value={formData.experience}
                      onChange={(value) => handleInputChange('experience', value)}
                    />

                    <FormField
                      label="Cover Letter"
                      name="coverLetter"
                      type="textarea"
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                      required
                      rows={6}
                      value={formData.coverLetter}
                      onChange={(value) => handleInputChange('coverLetter', value)}
                    />

                    <div className="space-y-2">
                      <label className="text-text-primary font-medium">
                        Resume/CV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="w-full p-3 bg-surface border border-border rounded-lg text-text-secondary
                                 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                                 file:text-sm file:font-medium file:bg-gradient-start file:text-white
                                 hover:file:bg-gradient-start/90"
                      />
                      <p className="text-sm text-text-secondary">
                        Accepted formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2" size={18} />
                      Submit Application
                    </Button>

                    <p className="text-sm text-text-secondary text-center">
                      By submitting this application, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobApplication;