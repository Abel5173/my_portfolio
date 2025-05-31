import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useMemo, memo } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheck, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { staggerContainer, fadeIn, hoverScale, tapScale } from '../utils/animations';
import AnimatedBackground from '../components/AnimatedBackground';
import debounce from 'lodash/debounce';

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

const ContactInfoCard = memo(({ info, index }) => (
  <motion.a
    href={info.link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group block"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
    <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg p-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30" />
          <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-full p-3">
            <info.icon className="text-xl text-accent-blue" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-primary">{info.title}</h3>
          <p className="text-text-secondary">{info.value}</p>
        </div>
      </div>
    </div>
  </motion.a>
));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Memoize contact info to prevent unnecessary re-renders
  const contactInfo = useMemo(() => [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'abel.zeleke@example.com',
      link: 'mailto:abel.zeleke@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+251 912 345 678',
      link: 'tel:+251912345678'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: 'https://maps.google.com/?q=Addis+Ababa,Ethiopia'
    }
  ], []);

  // Memoize validation function
  const validateForm = useCallback(() => {
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
  }, [formData]);

  // Debounced input handler
  const debouncedSetFormData = useMemo(
    () => debounce((name, value) => {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }, 300),
    [errors]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    debouncedSetFormData(name, value);
  }, [debouncedSetFormData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  // Memoize input variants
  const inputVariants = useMemo(() => ({
    focus: { scale: 1.02 },
    blur: { scale: 1 }
  }), []);

  return (
    <section 
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Neo-brutalist Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
            <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-8 py-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Get in Touch</span>
              </h2>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form with Neo-brutalist Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
            <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {['name', 'email', 'subject', 'message'].map((field) => (
                    <div key={field} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-focus-within:opacity-50 transition-opacity" />
                      {field === 'message' ? (
                        <textarea
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                          required
                          rows="5"
                          className="relative w-full bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue resize-none"
                        />
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                          required
                          className="relative w-full bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue"
                        />
                      )}
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <motion.button
                  type="submit"
                  className="relative group w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-6 py-3 text-accent-blue font-medium">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </div>
                </motion.button>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`text-center p-4 rounded-lg ${
                        submitStatus === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <div className="flex items-center justify-center gap-2">
                          <FaCheck />
                          <span>Message sent successfully!</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <FaTimes />
                          <span>Failed to send message. Please try again.</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Info with Neo-brutalist Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={info.title} info={info} index={index} />
            ))}

            {/* Social Links with Neo-brutalist Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
              <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-text-primary mb-4">Connect with Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.ariaLabel}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-full p-3">
                        <social.icon className="text-xl text-accent-blue" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
