import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Coffee,
  Heart,
  Zap,
  Globe,
  BookOpen,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import JobApplicationForm from "../components/sections/JobApplicationForm"; // Import the job application form

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  // Function to handle apply button click
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplicationFormOpen(true);
  };

  // Function to close application form
  const handleCloseApplicationForm = () => {
    setIsApplicationFormOpen(false);
    setSelectedJob(null);
  };

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.96,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const cardHoverVariants = {
    initial: {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0, rotate: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.96,
      transition: {
        duration: 0.1,
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
      },
    }),
  };

  const requirementVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.4 + i * 0.05,
      },
    }),
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const benefits = [
    {
      icon: Users,
      title: "Remote-First Culture",
      description:
        "Work from anywhere in the world with a globally distributed team.",
      gradient: "from-gradient-start to-gradient-end",
    },
    {
      icon: Coffee,
      title: "Flexible Hours",
      description:
        "Balance your work and life with flexible scheduling that works for you.",
      gradient: "from-gradient-end to-accent-pink",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and wellness programs for you and your family.",
      gradient: "from-accent-pink to-gradient-start",
    },
    {
      icon: Zap,
      title: "Learning Budget",
      description:
        "$2,000 annual budget for courses, conferences, and professional development.",
      gradient: "from-gradient-start to-gradient-end",
    },
    {
      icon: Globe,
      title: "Annual Retreats",
      description:
        "Join the team for amazing retreats in exotic locations around the world.",
      gradient: "from-gradient-end to-accent-pink",
    },
    {
      icon: BookOpen,
      title: "Growth Opportunities",
      description:
        "Clear career progression paths with mentorship and internal mobility.",
      gradient: "from-accent-pink to-gradient-start",
    },
  ];

  const openRoles = [
    {
      id: 1,
      title: "Senior Community Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead community building efforts for multiple Web3 projects, managing Discord/Telegram communities and developing engagement strategies.",
      requirements: [
        "3+ years community management experience",
        "Deep Web3/crypto knowledge",
        "Experience with Discord/Telegram bots",
        "Strong written communication",
      ],
      gradient: "from-gradient-start to-gradient-end",
    },
    {
      id: 2,
      title: "Growth Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Drive user acquisition and retention through data-driven marketing campaigns across multiple channels.",
      requirements: [
        "2+ years performance marketing experience",
        "Web3 marketing experience preferred",
        "Strong analytical skills",
        "Experience with marketing automation",
      ],
      gradient: "from-gradient-end to-accent-pink",
    },
    {
      id: 3,
      title: "Content Strategist",
      department: "Content",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop and execute content strategies that drive engagement and growth for Web3 brands.",
      requirements: [
        "3+ years content strategy experience",
        "Excellent writing skills",
        "Understanding of Web3 ecosystem",
        "Experience with content management systems",
      ],
      gradient: "from-accent-pink to-gradient-start",
    },
    {
      id: 4,
      title: "Influencer Relations Manager",
      department: "Partnerships",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and manage relationships with Web3 influencers, KOLs, and thought leaders to amplify our clients brands.",
      requirements: [
        "2+ years influencer marketing experience",
        "Existing Web3 influencer network",
        "Strong negotiation skills",
        "Experience with campaign management",
      ],
      gradient: "from-gradient-start to-gradient-end",
    },
    {
      id: 5,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Analyze marketing performance, community metrics, and on-chain data to drive strategic decisions.",
      requirements: [
        "2+ years data analysis experience",
        "SQL and Python proficiency",
        "Experience with analytics tools",
        "Understanding of blockchain data",
      ],
      gradient: "from-gradient-end to-accent-pink",
    },
    {
      id: 6,
      title: "Junior Marketing Coordinator",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Support marketing campaigns and operations while learning from our senior team members.",
      requirements: [
        "0-1 years marketing experience",
        "Strong organizational skills",
        "Interest in Web3/crypto",
        "Willingness to learn and grow",
      ],
      gradient: "from-accent-pink to-gradient-start",
    },
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description:
        "We embrace new technologies and push the boundaries of what's possible in Web3 marketing.",
    },
    {
      title: "Transparent Communication",
      description:
        "Open, honest communication is the foundation of our remote-first culture.",
    },
    {
      title: "Results Driven",
      description:
        "We measure success by the real impact we create for our clients and their communities.",
    },
    {
      title: "Continuous Learning",
      description:
        "The Web3 space evolves rapidly, and we encourage continuous learning and adaptation.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-surface">
        <div className="container-custom">
          {/* Desktop Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="hidden md:block text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Build the <span className="gradient-text">future</span> of Web3
              with us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-text-secondary mb-8"
            >
              Join a world-class team of Web3 marketing experts. Together, we'll
              shape the future of blockchain adoption.
            </motion.p>
          </motion.div>

          {/* Mobile Hero */}
          {/* Mobile Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="block md:hidden text-center max-w-2xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Build the <span className="gradient-text">future</span> of Web3
              with us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-text-secondary mb-8"
            >
              Join a world-class team of Web3 marketing experts. Together, we'll
              shape the future of blockchain adoption.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Why <span className="gradient-text">KryptoSpire?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              We offer more than just a job—we provide a platform to shape the
              future of decentralized marketing while growing your career.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  className="group h-full"
                >
                  <motion.div
                    className="bg-surface border border-border rounded-xl p-8 h-full card-glow 
               group-hover:border-gradient-start/30 transition-all duration-300 relative overflow-hidden
               text-center sm:text-left flex flex-col items-center sm:items-start"
                    variants={cardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {/* Subtle background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      initial={false}
                    />

                    <div className="relative z-10 flex flex-col items-center sm:items-start">
                      <motion.div
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-lg mb-6`}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>
                      <motion.h3
                        className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {benefit.title}
                      </motion.h3>
                      <motion.p
                        className="text-text-secondary leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {benefit.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="gradient-text">Open positions</span>
            </motion.h2>
            <motion.p
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Find your perfect role and join our mission to build the future of
              Web3 marketing.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {openRoles.map((role, index) => (
              <motion.div
                key={role.id}
                variants={cardVariants}
                className="group h-full"
              >
                <motion.div
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="h-full"
                >
                  <Card className="bg-background border-border hover:border-gradient-start/30 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl font-semibold text-text-primary group-hover:gradient-text transition-all duration-300 mb-2"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {role.title}
                          </motion.h3>
                          <motion.div
                            className="flex items-center gap-4 text-sm text-text-secondary flex-wrap"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <motion.span
                              className="px-2 py-1 bg-gradient-start/10 border border-gradient-start/20 rounded text-gradient-start"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(59, 130, 246, 0.2)",
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {role.department}
                            </motion.span>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {role.location}
                            </div>
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {role.type}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                      <motion.p
                        className="text-text-secondary leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {role.description}
                      </motion.p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <motion.h4
                          className="font-semibold text-text-primary mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        >
                          Requirements:
                        </motion.h4>
                        <ul className="space-y-2">
                          {role.requirements.map((req, reqIndex) => (
                            <motion.li
                              key={reqIndex}
                              className="flex items-start text-sm text-text-secondary"
                              variants={requirementVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              custom={reqIndex}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-gradient-start rounded-full mr-3 mt-2 flex-shrink-0"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.6 + reqIndex * 0.05,
                                  type: "spring",
                                  stiffness: 300,
                                }}
                              />
                              {req}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: true }}
                      >
                        <Button
                          variant="outline-glow"
                          className="w-full group"
                          onClick={() => handleApplyClick(role)}
                        >
                          Apply Now
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Our <span className="gradient-text">culture</span>
            </motion.h2>
            <motion.p
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              The values that guide how we work, collaborate, and grow together
              as a team.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className="group h-full"
              >
                <motion.div
                  className="bg-surface border border-border rounded-xl p-8 h-full card-glow 
             group-hover:border-gradient-start/30 transition-all duration-300 relative overflow-hidden
             text-center sm:text-left" // ✅ added responsive text alignment
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-semibold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      className="text-text-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General Application Form */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Don't see your{" "}
                <span className="gradient-text">perfect role?</span>
              </motion.h2>
              <motion.p
                className="text-xl text-text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                We're always looking for exceptional talent. Send us your
                information and let's start a conversation about your future
                with KryptoSpire.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                      >
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          First Name
                        </label>
                        <Input className="bg-surface border-border focus:border-gradient-start transition-all duration-300" />
                      </motion.div>
                      <motion.div
                        variants={formFieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                      >
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Last Name
                        </label>
                        <Input className="bg-surface border-border focus:border-gradient-start transition-all duration-300" />
                      </motion.div>
                    </div>

                    <motion.div
                      variants={formFieldVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={2}
                    >
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div
                      variants={formFieldVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={3}
                    >
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Role of Interest
                      </label>
                      <Input
                        className="bg-surface border-border focus:border-gradient-start transition-all duration-300"
                        placeholder="e.g., Marketing, Community, Content"
                      />
                    </motion.div>

                    <motion.div
                      variants={formFieldVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={4}
                    >
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Tell us about yourself
                      </label>
                      <Textarea
                        rows={6}
                        className="bg-surface border-border focus:border-gradient-start resize-none transition-all duration-300"
                        placeholder="Tell us about your experience, what excites you about Web3, and why you'd like to join KryptoSpire..."
                      />
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      whileTap="tap"
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button variant="hero" size="lg" className="w-full group">
                        <motion.div
                          className="mr-2"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Send size={16} />
                        </motion.div>
                        <motion.span variants={pulseVariants} animate="animate">
                          Send Application
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Application Form Modal */}
      <JobApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={handleCloseApplicationForm}
        jobRole={selectedJob}
      />
    </main>
  );
};

export default Careers;
