import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheck, FaTimes } from 'react-icons/fa';
import { staggerContainer, fadeIn, hoverScale, tapScale } from '../utils/animations';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    color: 'text-accent-blue',
    ariaLabel: 'Visit my GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourusername',
    color: 'text-accent-purple',
    ariaLabel: 'Visit my LinkedIn profile'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/yourusername',
    color: 'text-accent-green',
    ariaLabel: 'Visit my Twitter profile'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputVariants = {
    focus: { scale: 1.02 },
    blur: { scale: 1 }
  };

  return (
    <section 
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-space font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="glass-card p-6 md:p-8"
          >
            <form
              onSubmit={handleSubmit} 
              className="space-y-6"
              aria-label="Contact form"
            >
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-text-secondary mb-2"
                >
                  Name
                </label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
            >
              <input
                type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark/50 border ${
                      errors.name ? 'border-red-500' : 'border-secondary-dark'
                    } focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-text-secondary mb-2"
                >
                  Email
                </label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                >
              <input
                    type="email"
                    id="email"
                name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark/50 border ${
                      errors.email ? 'border-red-500' : 'border-secondary-dark'
                    } focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-text-secondary mb-2"
                >
                  Message
                </label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  whileBlur="blur"
                >
              <textarea
                    id="message"
                name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg bg-primary-dark/50 border ${
                      errors.message ? 'border-red-500' : 'border-secondary-dark'
                    } focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
                </motion.div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? hoverScale : {}}
                whileTap={!isSubmitting ? tapScale : {}}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                    aria-label="Sending message"
                  />
                ) : (
                  'Send Message'
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                      submitStatus === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheck aria-hidden="true" />
                        <span>Message sent successfully!</span>
                      </>
                    ) : (
                      <>
                        <FaTimes aria-hidden="true" />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6 md:space-y-8"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-space font-bold mb-6 text-text-primary">Get in Touch</h3>
              <p className="text-text-secondary mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-4 text-text-secondary hover:text-accent-blue transition-colors"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  aria-label="Send me an email"
                >
                  <FaEnvelope className="text-2xl" aria-hidden="true" />
                  <span>your.email@example.com</span>
                </motion.a>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-space font-bold mb-6 text-text-primary">Connect with Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg bg-primary-dark/50 hover:bg-secondary-dark transition-all ${link.color}`}
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    aria-label={link.ariaLabel}
                  >
                    <link.icon className="text-2xl" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
