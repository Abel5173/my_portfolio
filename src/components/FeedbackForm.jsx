import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaCheck, FaTimes } from 'react-icons/fa';
import { debounce } from '../utils/performance';

const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setRating(0);
      setFeedback('');
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = debounce((e) => {
    setFeedback(e.target.value);
  }, 300);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed left-8 bottom-8 p-4 rounded-full glass-card z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Provide feedback"
      >
        <span className="text-accent-blue">Feedback</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-6 md:p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-space font-bold mb-6 text-text-primary">
                Share Your Feedback
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-text-secondary mb-4">
                    How would you rate your experience?
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <motion.button
                        key={value}
                        type="button"
                        onClick={() => handleRatingChange(value)}
                        className={`p-2 rounded-lg ${
                          rating >= value
                            ? 'text-yellow-400'
                            : 'text-text-secondary'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Rate ${value} out of 5`}
                      >
                        <FaStar className="text-2xl" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-text-secondary mb-2"
                  >
                    Additional Comments
                  </label>
                  <textarea
                    id="feedback"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark/50 border border-secondary-dark focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                    placeholder="Share your thoughts..."
                    onChange={handleFeedbackChange}
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-6 py-3 rounded-lg bg-secondary-dark text-text-primary font-medium hover:bg-secondary-dark/80 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || rating === 0}
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                        aria-label="Submitting feedback"
                      />
                    ) : (
                      'Submit'
                    )}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-red-500/20 text-red-500'
                      }`}
                      role="alert"
                      aria-live="polite"
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <FaCheck aria-hidden="true" />
                          <span>Thank you for your feedback!</span>
                        </>
                      ) : (
                        <>
                          <FaTimes aria-hidden="true" />
                          <span>Failed to submit feedback. Please try again.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackForm; 