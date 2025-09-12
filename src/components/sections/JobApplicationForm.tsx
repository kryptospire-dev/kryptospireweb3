import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, Upload, Send, User, Mail, Phone, MapPin, FileText, Briefcase, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const JobApplicationForm = ({ isOpen, onClose, jobRole }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null,
    availableStart: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // ✅ Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!jobRole) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setSubmitSuccess(false);
      onClose();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        linkedIn: '',
        portfolio: '',
        experience: '',
        coverLetter: '',
        resume: null,
        availableStart: ''
      });
    }, 2000);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 25, duration: 0.4 }
    },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.05 }
    })
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Form Container */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success State */}
            {submitSuccess && (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 bg-background z-20 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: 1 }}
                    className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Send className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-text-secondary">
                    We'll review your application and get back to you soon.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Header */}
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Apply for {jobRole.title}
                  </h2>
                  <div className="flex items-center text-white/80 text-sm gap-4">
                    <span className="flex items-center">
                      <Briefcase size={14} className="mr-1" />
                      {jobRole.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {jobRole.location}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* Form Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="p-8">
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                      <User className="mr-2 text-gradient-start" size={20} />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={0}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          First Name *
                        </label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="Enter your first name"
                        />
                      </motion.div>

                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={1}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Last Name *
                        </label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="Enter your last name"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                      <Mail className="mr-2 text-gradient-start" size={20} />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={2}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>

                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={3}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </motion.div>

                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={4}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Location
                        </label>
                        <Input
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="City, Country"
                        />
                      </motion.div>

                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={5}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Available Start Date
                        </label>
                        <Input
                          type="date"
                          value={formData.availableStart}
                          onChange={(e) => handleInputChange('availableStart', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                      <Briefcase className="mr-2 text-gradient-start" size={20} />
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={6}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          LinkedIn Profile
                        </label>
                        <Input
                          type="url"
                          value={formData.linkedIn}
                          onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </motion.div>

                      <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={7}>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Portfolio/Website
                        </label>
                        <Input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => handleInputChange('portfolio', e.target.value)}
                          className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                          placeholder="https://yourportfolio.com"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Experience */}
                  <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={8}>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Years of Relevant Experience *
                    </label>
                    <Input
                      required
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                      placeholder="e.g., 3 years in community management and Web3 marketing"
                    />
                  </motion.div>

                  {/* Resume Upload */}
                  <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={9}>
                    <label className="block text-sm font-medium text-text-primary mb-2 flex items-center">
                      <FileText className="mr-2 text-gradient-start" size={16} />
                      Resume/CV * (PDF only)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center w-full p-4 border-2 border-dashed border-border hover:border-gradient-start bg-surface rounded-lg cursor-pointer transition-all duration-300 group"
                      >
                        <div className="text-center">
                          <Upload className="mx-auto mb-2 text-text-secondary group-hover:text-gradient-start transition-colors" size={24} />
                          <p className="text-sm text-text-secondary group-hover:text-gradient-start transition-colors">
                            {formData.resume ? formData.resume.name : 'Click to upload your resume (PDF)'}
                          </p>
                        </div>
                      </label>
                    </div>
                  </motion.div>

                  {/* Cover Letter */}
                  <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={10}>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Cover Letter *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      className="bg-surface border-border focus:border-gradient-start resize-none transition-all duration-300"
                      placeholder="Tell us why you're excited about this role and how your experience makes you a great fit for KryptoSpire."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="flex gap-4 pt-6 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <Button variant="outline-glow" onClick={onClose} className="flex-1" disabled={isSubmitting}>
                      Cancel
                    </Button>
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="hero"
                        className="w-full group"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="mr-2"
                          >
                            <Calendar size={16} />
                          </motion.div>
                        ) : (
                          <Send className="mr-2" size={16} />
                        )}
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JobApplicationForm;
